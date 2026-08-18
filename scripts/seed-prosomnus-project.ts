import path from 'node:path'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Adds ProSomnus as the most recent project.
 *
 *     npx payload run scripts/seed-prosomnus-project.ts
 *
 * Idempotent: matches on slug, uploads the cover only if it is not already
 * there, and can be re-run safely in any environment. The cover is committed
 * at `scripts/source/assets/thumbnails/prosomnus.jpg`, which is what makes this
 * work on production too — media lives per-environment, so a document created
 * locally would otherwise point at a file the Vercel Blob store has never seen.
 *
 * It also moves OneHome from order 0 to 5. "Latest" is a position, not a date
 * field, and something has to give up the top slot.
 */
const SLUG = 'prosomnus'
const COVER = path.resolve(process.cwd(), 'scripts/source/assets/thumbnails/prosomnus.jpg')

const seed = async () => {
  const payload = await getPayload({ config })

  /**
   * ---- cover ----
   *
   * Matched on a PREFIX, not an exact filename.
   *
   * Payload de-duplicates upload filenames, and against the production store it
   * saved this as `prosomnus-1.jpg` — every existing cover there carries the
   * same `-1`. An exact match on `prosomnus.jpg` therefore never finds the file
   * it just uploaded, and each re-run would quietly add `prosomnus-2.jpg`,
   * `-3`, and so on. Idempotence that only holds on a fresh database is not
   * idempotence.
   */
  const existingMedia = await payload.find({
    collection: 'media',
    where: { filename: { like: 'prosomnus%' } },
    sort: 'id',
    limit: 1,
  })

  const cover =
    existingMedia.docs[0] ??
    (await payload.create({
      collection: 'media',
      data: { alt: 'ProSomnus' },
      filePath: COVER,
    }))

  payload.logger.info(`Cover → ${cover.filename} (id ${cover.id})`)

  // ---- the project ----
  const data = {
    title: 'ProSomnus',
    slug: SLUG,
    category: 'Medical Device',
    url: 'https://prosomnus.com/',
    description:
      'A patient-facing site for ProSomnus Sleep Technologies, maker of custom-fit oral appliances that treat sleep apnea without a CPAP. The page leads with the outcome rather than the device — restful sleep, no masks, hoses or noise — then backs it with clinical proof, insurance coverage, and a provider finder that routes patients to a dentist near them.',
    cover: cover.id,
    coverFit: 'contain' as const,
    order: 0,
    featured: true,
  }

  const existing = await payload.find({
    collection: 'projects',
    where: { slug: { equals: SLUG } },
    limit: 1,
  })

  if (existing.docs[0]) {
    await payload.update({ collection: 'projects', id: existing.docs[0].id, data })
    payload.logger.info('Updated → ProSomnus')
  } else {
    await payload.create({ collection: 'projects', data })
    payload.logger.info('Created → ProSomnus')
  }

  // ---- make room at the top ----
  const onehome = await payload.find({
    collection: 'projects',
    where: { slug: { equals: 'onehome' } },
    limit: 1,
  })

  if (onehome.docs[0] && onehome.docs[0].order === 0) {
    await payload.update({ collection: 'projects', id: onehome.docs[0].id, data: { order: 5 } })
    payload.logger.info('Moved OneHome to order 5')
  }

  payload.logger.info('Done.')
  process.exit(0)
}

await seed()
