import fs from 'node:fs'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Loads content-export.json into whatever database DATABASE_URI points at.
 *
 *     DATABASE_URI="postgres://…" BLOB_READ_WRITE_TOKEN="…" \
 *       npx payload run scripts/import-content.ts
 *
 * `payload run` does not read .env.local, so both must be passed explicitly.
 * Without the Blob token every upload would land on the local filesystem and
 * the deployed site would show nothing.
 *
 * IDS ARE PRESERVED BY CONSTRUCTION, NOT REWRITTEN.
 * Every source collection is contiguous from 1 — media 1-55, projects 1-17,
 * case studies 1-2, explorations 1-22 — so inserting in ascending order into
 * empty tables reproduces the same IDs, and every `cover`, `image` and
 * `heroPortrait` reference stays pointing at the same picture. Remapping IDs
 * instead would mean rewriting references inside nested arrays and globals,
 * and one missed path is a silently wrong image. The script VERIFIES the
 * assumption after each collection and stops if it ever fails to hold.
 *
 * THE TWO CASE STUDIES REFERENCE EACH OTHER, so no insert order satisfies
 * them. They are created without the cross-links and patched in a second pass.
 *
 * Re-runnable only against an empty database: it creates, never upserts.
 */
const FILE = path.resolve(process.cwd(), 'content-export.json')
const MEDIA_DIR = path.resolve(process.cwd(), 'media')

/** Fields Payload derives from the uploaded file — never sent back. */
const FILE_DERIVED = new Set([
  'id', 'url', 'thumbnailURL', 'filename', 'mimeType', 'filesize',
  'width', 'height', 'sizes', 'createdAt', 'updatedAt', 'focalX', 'focalY',
])

const strip = (doc: Record<string, unknown>, drop: Set<string>) =>
  Object.fromEntries(Object.entries(doc).filter(([k]) => !drop.has(k)))

const run = async () => {
  if (!process.env.DATABASE_URI?.startsWith('postgres')) {
    console.error('REFUSING: DATABASE_URI is not a postgres:// URL. Pass it explicitly.')
    process.exit(1)
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('REFUSING: BLOB_READ_WRITE_TOKEN is unset — uploads would go to local disk.')
    process.exit(1)
  }

  const data = JSON.parse(fs.readFileSync(FILE, 'utf8'))
  const payload = await getPayload({ config })

  const existing = await payload.find({ collection: 'media', limit: 1, depth: 0 })
  if (existing.totalDocs > 0) {
    console.error(`REFUSING: target already has ${existing.totalDocs} media docs. This script only fills an empty database.`)
    process.exit(1)
  }

  // ---- 1. media, in ID order, re-uploading each original ----
  console.log(`\n▸ media (${data.media.length})`)
  for (const m of [...data.media].sort((a, b) => a.id - b.id)) {
    const filePath = path.join(MEDIA_DIR, m.filename)
    if (!fs.existsSync(filePath)) throw new Error(`missing file: ${m.filename}`)
    const created = await payload.create({
      collection: 'media',
      data: strip(m, FILE_DERIVED) as never,
      filePath,
    })
    if (created.id !== m.id) {
      throw new Error(`ID DRIFT: media ${m.filename} expected id ${m.id}, got ${created.id}. Every reference would now be wrong — stopping.`)
    }
    process.stdout.write('.')
  }
  console.log(`\n  ✓ 55 uploaded, IDs preserved`)

  // ---- 2. collections that only reference media ----
  for (const [label, key, collection] of [
    ['explorations', 'explorations', 'explorations'],
    ['projects', 'projects', 'projects'],
  ] as const) {
    console.log(`\n▸ ${label} (${data[key].length})`)
    const rows = [...data[key]] as { id: number }[]
    for (const doc of rows.sort((a, b) => a.id - b.id)) {
      const created = await payload.create({
        collection,
        data: strip(doc, new Set(['id', 'createdAt', 'updatedAt'])) as never,
      })
      if (created.id !== doc.id) throw new Error(`ID DRIFT in ${label}: expected ${doc.id}, got ${created.id}`)
      process.stdout.write('.')
    }
    console.log(`\n  ✓ IDs preserved`)
  }

  // ---- 3. case studies: create bare, then link ----
  console.log(`\n▸ case studies (${data.caseStudies.length})`)
  const CROSS = new Set(['relatedProject', 'relatedCaseStudy'])
  for (const doc of [...data.caseStudies].sort((a, b) => a.id - b.id)) {
    const created = await payload.create({
      collection: 'case-studies',
      data: strip(doc, new Set(['id', 'createdAt', 'updatedAt', ...CROSS])) as never,
    })
    if (created.id !== doc.id) throw new Error(`ID DRIFT in case studies: expected ${doc.id}, got ${created.id}`)
  }
  for (const doc of data.caseStudies) {
    const links = Object.fromEntries(Object.entries(doc).filter(([k, v]) => CROSS.has(k) && v != null))
    if (Object.keys(links).length === 0) continue
    await payload.update({ collection: 'case-studies', id: doc.id, data: links as never })
    console.log(`  linked case study ${doc.id}:`, Object.keys(links).join(', '))
  }
  console.log('  ✓ created and cross-linked')

  // ---- 4. globals ----
  for (const [slug, src] of [['homepage', data.homepage], ['work-page', data.workPage]] as const) {
    await payload.updateGlobal({
      slug: slug as 'homepage',
      data: strip(src, new Set(['id', 'createdAt', 'updatedAt', 'globalType'])) as never,
    })
    console.log(`  ✓ global ${slug}`)
  }

  // ---- 5. verify ----
  console.log('\nVERIFY (in target database):')
  for (const c of ['media', 'projects', 'case-studies', 'explorations'] as const) {
    const r = await payload.find({ collection: c, limit: 0, depth: 0 })
    console.log(`  ${c.padEnd(14)} ${r.totalDocs}`)
  }
  const hp = await payload.findGlobal({ slug: 'homepage', depth: 1 })
  const wp = await payload.findGlobal({ slug: 'work-page', depth: 0 })
  console.log('  homepage hero  ', hp.heroWatermarkLeft ?? '(empty)')
  console.log('  work tools     ', wp.tools?.length ?? 0)
  console.log('  work whatItems ', wp.whatItems?.length ?? 0)
}

await run()
