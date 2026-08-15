'use server'

import { revalidatePath } from 'next/cache'
import { getPayload, type CollectionSlug } from 'payload'
import config from '@payload-config'
import { getEditor } from '@/lib/editorAuth'
import {
  COLLECTIONS,
  GLOBALS,
  setPath,
  type CollectionPrefix,
  type EditablePrefix,
} from '@/lib/inlineEdit'

/**
 * Saving from the in-place editor.
 *
 * Writes straight back to the Payload globals — the same documents the admin
 * panel edits, through the same Local API. There is no parallel store and no
 * second source of truth, which is the point: an edit made here and an edit
 * made in /admin are the same operation.
 */

/**
 * A media id is a number and must be written as one — Payload expects a
 * reference, and `"14"` is not one.
 */
export type Edit = { key: string; value: string | number }

type Result = { ok: true; count: number } | { ok: false; error: string }

/**
 * Alt text is the one thing here that does not live on a page.
 *
 * It is a field on the media document, so it is addressed as `media.<id>.alt`
 * and written separately. The consequence is worth stating plainly, because the
 * picker says it too: changing an alt text changes that photograph's
 * description everywhere it appears, including on pages this editor does not
 * otherwise touch.
 */
const MEDIA_ALT = /^media\.(\d+)\.alt$/

/**
 * Group edits by which global they belong to, so each document is read and
 * written once no matter how many fields changed inside it.
 */
function groupByGlobal(edits: Edit[]): Map<EditablePrefix, Edit[]> {
  const grouped = new Map<EditablePrefix, Edit[]>()

  for (const edit of edits) {
    if (MEDIA_ALT.test(edit.key)) continue // written separately, see saveEdits
    const prefix = edit.key.split('.')[0] as EditablePrefix
    if (!(prefix in GLOBALS)) continue // not something this editor owns
    grouped.set(prefix, [...(grouped.get(prefix) ?? []), edit])
  }

  return grouped
}

/**
 * The same, for collection documents, which are addressed by id:
 * `projects.3.tagline` → the projects collection, document 3, field `tagline`.
 *
 * Keyed by collection *and* id, so two lots changed in one sitting are two
 * documents read and two written, not one document written twice.
 */
function groupByDocument(edits: Edit[]): Map<string, { slug: string; id: string; edits: Edit[] }> {
  const grouped = new Map<string, { slug: string; id: string; edits: Edit[] }>()

  for (const edit of edits) {
    const [prefix, id] = edit.key.split('.')
    if (!(prefix in COLLECTIONS) || !id) continue

    const slug = COLLECTIONS[prefix as CollectionPrefix]
    const mapKey = `${slug}:${id}`
    const existing = grouped.get(mapKey)
    if (existing) existing.edits.push(edit)
    else grouped.set(mapKey, { slug, id, edits: [edit] })
  }

  return grouped
}

export async function saveEdits(edits: Edit[]): Promise<Result> {
  const { canEdit } = await getEditor()
  // The toolbar only renders for an editor, but a server action is a public
  // endpoint — the check has to be here, not only in the UI.
  if (!canEdit) return { ok: false, error: 'Not allowed.' }
  if (edits.length === 0) return { ok: true, count: 0 }

  try {
    const payload = await getPayload({ config })
    let applied = 0

    for (const [prefix, group] of groupByGlobal(edits)) {
      const slug = GLOBALS[prefix]

      /**
       * depth: 0 keeps relationships as ids. Reading them populated and writing
       * them back would hand Payload whole documents where it expects
       * references, which is how an unrelated upload quietly becomes a new
       * orphaned record.
       */
      const current = await payload.findGlobal({ slug, depth: 0 })
      const next = structuredClone(current) as unknown as Record<string, unknown>

      for (const edit of group) {
        // Drop the prefix — the rest is the path inside the document.
        const path = edit.key.split('.').slice(1)
        if (setPath(next, path, edit.value)) applied++
      }

      await payload.updateGlobal({ slug, data: next as never, depth: 0 })
    }

    /**
     * Collection documents — projects, lots, updates.
     *
     * Read and written whole, exactly as the globals are, and with the same
     * depth: 0 on both sides. Populated relationships written back would hand
     * Payload documents where it expects references, which is how an unrelated
     * upload quietly becomes a new orphaned record.
     */
    for (const { slug, id, edits: group } of groupByDocument(edits).values()) {
      const current = await payload.findByID({ collection: slug as CollectionSlug, id, depth: 0 })
      const next = structuredClone(current) as unknown as Record<string, unknown>

      let touched = 0
      for (const edit of group) {
        // Drop the prefix and the id — the rest is the path inside the document.
        const path = edit.key.split('.').slice(2)
        if (setPath(next, path, edit.value)) touched++
      }

      if (touched === 0) continue

      await payload.update({
        collection: slug as CollectionSlug,
        id,
        data: next as never,
        depth: 0,
      })
      applied += touched
    }

    /**
     * Alt text, one media document at a time. Grouping would buy nothing —
     * these are separate documents, so they are separate writes either way.
     */
    for (const edit of edits) {
      const match = MEDIA_ALT.exec(edit.key)
      if (!match) continue

      await payload.update({
        collection: 'media',
        id: Number(match[1]),
        data: { alt: String(edit.value) },
        depth: 0,
      })
      applied++
    }

    /**
     * Every page reads these globals through the layout, so a change to any of
     * them can affect any route. Revalidating the layout is the honest scope;
     * revalidating only '/' would leave the header and footer stale everywhere
     * else.
     */
    revalidatePath('/', 'layout')

    return { ok: true, count: applied }
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : 'Could not save.' }
  }
}
