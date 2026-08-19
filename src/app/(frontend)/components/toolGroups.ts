/**
 * WHICH GROUP EACH TOOL BELONGS TO, AND WHY THAT LIVES HERE RATHER THAN IN THE CMS.
 *
 * The obvious home for this is a `category` field on the tools array, and that
 * is where it should eventually go. It is here instead because adding a field
 * to that array needs a Payload migration, and `payload migrate:create` cannot
 * currently generate one against this database — drizzle-kit rejects the
 * existing snapshot's index definitions (`Unrecognized key(s) in object:
 * 'concurrently', 'method', 'with'`). Hand-writing the SQL for a new enum
 * column and hoping it matches what Payload expects at runtime is a worse
 * trade than a lookup table, so: a lookup table, and a note saying why.
 *
 * WHAT THIS MEANS DAY TO DAY
 * A tool added in the CMS still appears — it falls into "Everything else"
 * rather than vanishing. Moving it into a named group means adding one line
 * here. That is the cost of not having the field, and it is written down so
 * nobody has to rediscover it.
 *
 * ONE HOME EACH. The list this came from repeats a dozen tools across
 * categories — Canva appears under design, marketing and web; GitHub under
 * three. Rendering it that way puts the same name on the page three times and
 * makes a rack of forty look padded. Each tool sits in the group it is most
 * itself in, and the groups stay honest about what they contain.
 */

export const TOOL_GROUPS = [
  { key: 'web', heading: 'Web design & development' },
  { key: 'ai', heading: 'AI & coding' },
  { key: 'design', heading: 'Graphic & UI design' },
  { key: 'marketing', heading: 'Marketing & social' },
  { key: 'collab', heading: 'Files & collaboration' },
  { key: 'seo', heading: 'SEO & site management' },
  { key: 'env', heading: 'Environment' },
  { key: 'other', heading: 'Everything else' },
] as const

export type ToolGroupKey = (typeof TOOL_GROUPS)[number]['key']

/** Lower-cased tool name → group. Anything absent falls to `other`. */
const MAP: Record<string, ToolGroupKey> = {
  // Web design & development
  wordpress: 'web',
  elementor: 'web',
  'elementor pro': 'web',
  'elementor / elementor pro': 'web',
  jetengine: 'web',
  jetelements: 'web',
  crocoblock: 'web',
  wpbakery: 'web',
  duda: 'web',
  'next.js': 'web',
  vercel: 'web',
  supabase: 'web',
  framer: 'web',
  webflow: 'web',
  squarespace: 'web',
  html: 'web',
  css: 'web',
  javascript: 'web',
  'gohighlevel (ghl)': 'web',
  gohighlevel: 'web',

  // AI & coding
  claude: 'ai',
  'claude code': 'ai',
  cursor: 'ai',
  'cursor ai': 'ai',
  'google ai studio': 'ai',
  chatgpt: 'ai',
  base44: 'ai',
  glm: 'ai',

  // Graphic & UI design
  figma: 'design',
  'adobe illustrator': 'design',
  'adobe photoshop': 'design',
  'adobe xd': 'design',
  canva: 'design',

  // Marketing & social
  facebook: 'marketing',
  instagram: 'marketing',
  tiktok: 'marketing',

  // Files & collaboration
  'google drive': 'collab',
  'google workspace': 'collab',
  slack: 'collab',
  github: 'collab',
  flippingbook: 'collab',

  // SEO & site management
  'yoast seo': 'seo',
  wix: 'seo',

  // Environment
  terminal: 'env',
  macos: 'env',
  git: 'env',
}

export function groupOf(name: string): ToolGroupKey {
  return MAP[name.trim().toLowerCase()] ?? 'other'
}
