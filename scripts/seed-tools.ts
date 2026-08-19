import { getPayload } from 'payload'
import config from '@payload-config'
import { writeFileSync } from 'node:fs'

/**
 * Writes the tool rack's list into the Work page.
 *
 *     npx payload run scripts/seed-tools.ts                      # local sqlite
 *     DATABASE_URI="$POSTGRES_URL" npx payload run scripts/…     # a real one
 *
 * WHY A SCRIPT AND NOT THE ADMIN PANEL
 * Thirty-three rows, each one a click into an array field. This is the same
 * list every time, it is reviewable in a diff, and it survives a database
 * reset without anybody retyping it.
 *
 * IT REPLACES THE ARRAY, in this order, because the order is the design — the
 * rack reads left to right in rows of five and the grouping is positional
 * rather than labelled. Any logo uploaded against a tool is carried across by
 * name, since that is the one thing in there this file cannot regenerate.
 *
 * The previous contents are written to disk first, next to this file.
 */

const TOOLS = [
  'Canva',
  'Figma',
  'Adobe XD',
  'WordPress',
  'Elementor / Elementor Pro',
  'Crocoblock',
  'JetEngine',
  'JetElements',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Cursor AI',
  'Claude Code',
  'ChatGPT',
  'GitHub',
  'Vercel',
  'Next.js',
  'Supabase',
  'HTML',
  'CSS',
  'JavaScript',
  'Duda',
  'GoHighLevel',
  'Wix',
  'WPBakery',
  'Yoast SEO',
  'Framer',
  'Webflow',
  'Squarespace',
  'Google AI Studio',
  'Git',
  'Slack',
  'Google Drive',
  'FlippingBook',
]

const run = async () => {
  const payload = await getPayload({ config })
  const page = await payload.findGlobal({ slug: 'work-page', depth: 0 })
  const existing = (page.tools ?? []) as { name: string; logo?: unknown }[]

  const backup = 'scripts/.tools-backup.json'
  writeFileSync(backup, JSON.stringify(existing, null, 2))

  /** Uploaded artwork always wins over the built-in mark, so it has to survive. */
  const logos = new Map(
    existing.filter((t) => t.logo).map((t) => [t.name.trim().toLowerCase(), t.logo]),
  )

  const tools = TOOLS.map((name) => {
    const logo = logos.get(name.trim().toLowerCase())
    return logo ? { name, logo } : { name }
  })

  await payload.updateGlobal({ slug: 'work-page', data: { tools } })

  payload.logger.info(`Tools: ${tools.length} written, ${logos.size} uploaded logo(s) carried over.`)
  payload.logger.info(`Previous list (${existing.length}) backed up to ${backup}`)
}

await run()
process.exit(0)
