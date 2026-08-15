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
import { Homepage } from './globals/Homepage'
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
 * Uploads go to Vercel Blob when a token is present, because serverless
 * filesystems are ephemeral. Without one, Payload writes to local disk — fine
 * for development, never for production.
 */
const storagePlugins = BLOB_TOKEN
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
  collections: [Users, Media, Projects, CaseStudies, Explorations],
  globals: [Homepage],
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
