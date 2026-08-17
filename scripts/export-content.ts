import fs from 'node:fs'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Dumps every document out of the LOCAL SQLite database to one JSON file.
 *
 *     npx payload run scripts/export-content.ts
 *
 * Half of a two-step move to Postgres. Export and import are separate runs on
 * purpose: a single script would need two Payload instances pointed at two
 * different databases inside one process, and the config resolves its adapter
 * once, from the environment. Two runs with a file between them is the honest
 * shape, and it leaves an artefact to check before anything is written.
 *
 * `depth: 0` throughout, so relationships come back as raw IDs. The import
 * rewrites them: Postgres assigns its own IDs, and a copied ID would point at
 * whatever happened to land in that row.
 *
 * Users are deliberately NOT exported. Password hashes are salted per secret
 * and copying them moves credentials between databases for no benefit —
 * Payload's admin panel offers a create-first-user flow on an empty database.
 */
const OUT = path.resolve(process.cwd(), 'content-export.json')

const run = async () => {
  const payload = await getPayload({ config })
  const all = async (collection: 'media' | 'projects' | 'case-studies' | 'explorations') => {
    const res = await payload.find({ collection, limit: 1000, depth: 0, pagination: false })
    return res.docs
  }

  const data = {
    exportedAt: new Date().toISOString(),
    media: await all('media'),
    projects: await all('projects'),
    caseStudies: await all('case-studies'),
    explorations: await all('explorations'),
    homepage: await payload.findGlobal({ slug: 'homepage', depth: 0 }),
    workPage: await payload.findGlobal({ slug: 'work-page', depth: 0 }),
  }

  fs.writeFileSync(OUT, JSON.stringify(data, null, 2))

  console.log('EXPORT COMPLETE ->', OUT)
  console.log('  media        ', data.media.length)
  console.log('  projects     ', data.projects.length)
  console.log('  caseStudies  ', data.caseStudies.length)
  console.log('  explorations ', data.explorations.length)
  console.log('  homepage     ', data.homepage ? 'yes' : 'no')
  console.log('  workPage     ', data.workPage ? 'yes' : 'no')

  // Every media doc must have its original file on disk, or the import cannot
  // re-upload it. Better to know now than half way through writing to Postgres.
  const dir = path.resolve(process.cwd(), 'media')
  const missing = data.media
    .map((m) => (m as { filename?: string | null }).filename)
    .filter((f): f is string => Boolean(f) && !fs.existsSync(path.join(dir, f as string)))
  console.log('  files missing from ./media:', missing.length)
  for (const f of missing.slice(0, 10)) console.log('     -', f)
}

await run()
