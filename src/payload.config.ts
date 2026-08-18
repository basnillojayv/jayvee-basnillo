import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { site } from './site.config'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { CaseStudies } from './collections/CaseStudies'
import { Explorations } from './collections/Explorations'
import { DesignSystems } from './collections/DesignSystems'
import { Homepage } from './globals/Homepage'
import { WorkPage } from './globals/WorkPage'
import { Submissions } from './collections/Submissions'
import { homepageData } from './seed/homepageData'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const DATABASE_URI = process.env.DATABASE_URI || 'file:./site.db'
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN

/**
 * The database follows the connection string, so local and production differ by
 * environment only — never by code. Point DATABASE_URI at Postgres and the
 * adapter switches; leave it unset and you get a local SQLite file, which is
 * what makes `npm install && npm run dev` work with no external setup.
 */
const isPostgres = /^postgres(ql)?:\/\//.test(DATABASE_URI)
const db = isPostgres
  ? postgresAdapter({ pool: { connectionString: DATABASE_URI } })
  : sqliteAdapter({ client: { url: DATABASE_URI } })

/**
 * Uploads go to Vercel Blob, because serverless filesystems are ephemeral.
 * Locally they stay on disk, which is what makes a fresh clone work with no
 * external setup.
 *
 * THE GATE IS THE DATABASE, NOT THE TOKEN, AND THAT DISTINCTION IS A BUG FIX.
 * This used to switch on whenever `BLOB_READ_WRITE_TOKEN` existed. Then
 * `vercel env pull` wrote that token into `.env.local` — which Next loads
 * automatically — and every image on the local site broke: the plugin started
 * resolving uploads from Blob while the local SQLite rows still said
 * `/api/media/file/…` on disk. 404 on every photo, 500 from next/image, and
 * nothing in the code had changed.
 *
 * Where the media rows live and where the files live have to agree. Tying the
 * storage adapter to the database adapter makes that structural: SQLite rows
 * point at disk, Postgres rows point at Blob, and pulling production
 * credentials can no longer reach across and break development.
 */
const storagePlugins =
  isPostgres && BLOB_TOKEN
    ? [vercelBlobStorage({ enabled: true, collections: { media: true }, token: BLOB_TOKEN })]
    : []

// No credentials are ever hardcoded. If both are supplied via the environment a
// first admin is auto-created (handy for CI); otherwise Payload's normal
// "create first user" screen at /admin handles it.
const SEED_ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL
const SEED_ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD

export default buildConfig({
  // Absolute base URL for admin OG images, password-reset links, live preview.
  serverURL: site.url,
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: `· ${site.shortName}` },
  },
  collections: [Users, Media, Projects, CaseStudies, Explorations, DesignSystems, Submissions],
  globals: [Homepage, WorkPage],
  editor: lexicalEditor(),
  plugins: storagePlugins,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db,
  sharp,
  /**
   * Seed a fresh database. Guarded on the user count, so this runs exactly once
   * per database and never overwrites a client's edits.
   */
  onInit: async (payload) => {
    const { totalDocs } = await payload.count({ collection: 'users' })
    if (totalDocs > 0) return

    if (SEED_ADMIN_EMAIL && SEED_ADMIN_PASSWORD) {
      await payload.create({
        collection: 'users',
        data: { email: SEED_ADMIN_EMAIL, password: SEED_ADMIN_PASSWORD },
      })
      payload.logger.info(`Seeded admin user → ${SEED_ADMIN_EMAIL}`)
    } else {
      payload.logger.info('No SEED_ADMIN_* env vars — create the first admin at /admin.')
    }

    await payload.updateGlobal({ slug: 'homepage', data: homepageData as never })
    payload.logger.info('Seeded homepage content.')
  },
})
