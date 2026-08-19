import { getPayload } from 'payload'
import config from '@payload-config'
import { writeFileSync } from 'node:fs'

/**
 * Writes the full tool stack into the Work page.
 *
 *     npx payload run scripts/seed-tools.ts
 *
 * WHY A SCRIPT AND NOT THE ADMIN PANEL
 * Forty-odd rows, each one a click into an array field. This is the same list
 * every time, it is reviewable in a diff, and it can be run again after a
 * database is reset without anybody retyping it.
 *
 * IT ADDS, IT DOES NOT REPLACE. The array is read first and the existing rows
 * are kept exactly as they are — including any logo uploaded against them,
 * which is the one thing in there that cannot be regenerated from this file.
 * New names are appended. Run it twice and the second run changes nothing.
 *
 * NEAR-DUPLICATES ARE THE WHOLE DIFFICULTY. The CMS already holds "Elementor /
 * Elementor Pro" and "Cursor AI"; the list below has "Elementor", "Elementor
 * Pro" and "Cursor". Matching on the raw string would add all of them and the
 * rack would name Elementor three times. `key()` folds the variants onto one
 * value so the comparison is between tools rather than between spellings.
 *
 * The grouping is NOT stored here — it is a lookup in
 * app/(frontend)/components/toolGroups.ts, which explains why it is not a CMS
 * field yet. A name added here that is missing from that map still renders; it
 * lands under "Everything else".
 */

/**
 * One entry per tool, in the order they should appear within their group.
 * Duplicates across categories were folded to a single home — the source list
 * had Canva in three groups and GitHub in three, which on the page is the same
 * name printed three times.
 */
const TOOLS = [
  // Web design & development
  'WordPress', 'Elementor', 'Elementor Pro', 'JetEngine', 'JetElements',
  'WPBakery', 'Duda', 'Next.js', 'Vercel', 'Supabase', 'Framer', 'Webflow',
  'Squarespace', 'HTML', 'CSS', 'JavaScript', 'GoHighLevel',
  // AI & coding
  'Claude', 'Claude Code', 'Cursor', 'Google AI Studio', 'ChatGPT', 'Base44', 'GLM',
  // Graphic & UI design
  'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva',
  // Marketing & social
  'Facebook', 'Instagram', 'TikTok',
  // Files & collaboration
  'Google Drive', 'Google Workspace', 'Slack', 'GitHub', 'FlippingBook',
  // SEO & site management
  'Yoast SEO', 'Wix',
  // Environment
  'Terminal', 'macOS', 'Git',
]

/** Spelling variants that mean the same tool, folded onto one key. */
const ALIASES: Record<string, string> = {
  'elementor / elementor pro': 'elementor',
  'elementor pro': 'elementor',
  'cursor ai': 'cursor',
  'html5': 'html',
  'css3': 'css',
  'gohighlevel (ghl)': 'gohighlevel',
  'google workspace tools': 'google workspace',
}

const key = (name: string) => {
  const n = name.trim().toLowerCase()
  return ALIASES[n] ?? n
}

const run = async () => {
  const payload = await getPayload({ config })
  const page = await payload.findGlobal({ slug: 'work-page', depth: 0 })
  const existing = (page.tools ?? []) as { name: string; logo?: unknown }[]

  // Written before anything is changed. The logos are the part that cannot be
  // rebuilt from this file, so there is a copy of them on disk either way.
  const backup = `scripts/.tools-backup-${page.updatedAt ?? 'unknown'}.json`.replace(/[:.]/g, '-')
  writeFileSync(backup, JSON.stringify(existing, null, 2))

  const have = new Set(existing.map((t) => key(t.name)))
  const added = TOOLS.filter((name) => !have.has(key(name)))

  if (added.length === 0) {
    payload.logger.info(`Tools: nothing to add — all ${TOOLS.length} already present.`)
    return
  }

  await payload.updateGlobal({
    slug: 'work-page',
    data: { tools: [...existing, ...added.map((name) => ({ name }))] },
  })

  payload.logger.info(`Tools: ${existing.length} kept, ${added.length} added.`)
  payload.logger.info(`Added: ${added.join(', ')}`)
  payload.logger.info(`Previous list backed up to ${backup}`)
}

await run()
process.exit(0)
