import { NextResponse } from 'next/server'
import { getPayload, type CollectionSlug, type GlobalSlug } from 'payload'
import config from '@payload-config'
import { getEditor } from '@/lib/editorAuth'
import { COLLECTIONS, GLOBALS, collectEditable, mergeEditable, type Region } from '@/lib/inlineEdit'

export const runtime = 'nodejs'
/**
 * Must be dynamic: the whole job is reading the session cookie, and a cached
 * answer would either hand the editor to everyone or to no one.
 */
export const dynamic = 'force-dynamic'

/**
 * Tells the browser whether this person may edit, and if so, what.
 *
 * WHY THIS ENDPOINT EXISTS
 * Every page on this site is `force-static`, which is why it is fast and cheap
 * to serve — and a statically rendered route cannot read cookies, so the layout
 * has no way to know who is asking. Dropping `force-static` would fix that and
 * make every visitor request hit the database, which is a bad trade for a
 * feature only staff can use.
 *
 * So the pages stay static and the editor arrives afterwards: the browser asks
 * this one question, and only a signed-in editor gets an answer with anything
 * in it. For a visitor it is a few bytes and no database query at all.
 */
export async function GET() {
  const { canEdit } = await getEditor()

  // Nothing to say, and nothing queried. Told not to cache, because the answer
  // is per-person.
  if (!canEdit) {
    return NextResponse.json({ canEdit: false }, { headers: { 'Cache-Control': 'no-store' } })
  }

  try {
    const payload = await getPayload({ config })

    /**
     * The field definitions, so what is editable comes from the same
     * description of the content the admin panel is built from. Reading them
     * here rather than listing paths by hand is what stops the two drifting.
     */
    const globalFields = (slug: string) =>
      payload.config.globals.find((global) => global.slug === slug)?.fields
    const collectionFields = (slug: string) =>
      payload.config.collections.find((collection) => collection.slug === slug)?.fields

    /**
     * Driven entirely by the two maps in lib/inlineEdit.ts, so adding a global
     * or a collection is one edit in one file. Naming them again here would be
     * a second place to remember, and the two would eventually disagree.
     */
    const globalEntries = await Promise.all(
      Object.entries(GLOBALS).map(async ([prefix, slug]) => ({
        prefix,
        fields: globalFields(slug),
        data: await payload.findGlobal({ slug: slug as GlobalSlug, depth: 0 }),
      })),
    )

    /**
     * Every document of the configured collections — all of them, not the ones
     * this page happens to show. The page is static and the browser asks this
     * question afterwards, so the server cannot know which page is asking. At
     * the size these sites run to, sending the lot costs less than a round trip
     * would. The limit is a guard against that stopping being true; anything
     * past it is simply not editable in place rather than silently half-loaded.
     */
    const collectionEntries = await Promise.all(
      Object.entries(COLLECTIONS).map(async ([prefix, slug]) => ({
        prefix,
        slug: slug as string,
        docs: (await payload.find({ collection: slug as CollectionSlug, limit: 100, depth: 0 })).docs as {
          id: number | string
        }[],
      })),
    )

    const collected = [
      ...globalEntries.map(({ prefix, fields, data }) => collectEditable(prefix, fields, data)),
      ...collectionEntries.flatMap(({ prefix, slug, docs }) =>
        docs.map((doc) => collectEditable(`${prefix}.${doc.id}`, collectionFields(slug), doc)),
      ),
    ]

    const regions: Region[] = collected.flatMap((entry) => entry.regions)

    /**
     * Everything already uploaded, for the picker to choose from. New
     * photographs still arrive through the admin panel, which is the one place
     * that can judge whether a 12MB phone snap belongs on a homepage.
     *
     * This is also where each image region gets its alt text: it lives on the
     * media document, not on the page, so it cannot come from the globals.
     */
    const library = await payload.find({
      collection: 'media',
      limit: 200,
      depth: 0,
      sort: '-createdAt',
      /**
       * Images only. The collection also accepts PDFs, so floor plans can be
       * uploaded as drawings — and a PDF has no thumbnail, so offering one here
       * would put a broken box in the grid and a document where a photograph
       * belongs.
       */
      where: { mimeType: { like: 'image/' } },
    })

    const altById = new Map<number | string, string>(
      library.docs.map((doc) => [doc.id, typeof doc.alt === 'string' ? doc.alt : ''] as const),
    )

    return NextResponse.json(
      {
        canEdit: true,
        values: mergeEditable(...collected.map((entry) => entry.values)),
        regions: regions.map((region) =>
          region.kind === 'image' && region.mediaId !== null
            ? { ...region, alt: altById.get(region.mediaId) ?? '' }
            : region,
        ),
        media: library.docs
          .map((doc) => ({
            id: doc.id,
            alt: typeof doc.alt === 'string' ? doc.alt : '',
            // The 480px variant — a picker grid has no use for a 2200px hero.
            url: doc.sizes?.thumbnail?.url || doc.url || '',
            filename: doc.filename || '',
          }))
          // Anything without a usable URL would only ever be a broken square.
          .filter((item) => item.url),
      },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch {
    // A database hiccup costs the edit bar, never the page.
    return NextResponse.json({ canEdit: false }, { headers: { 'Cache-Control': 'no-store' } })
  }
}
