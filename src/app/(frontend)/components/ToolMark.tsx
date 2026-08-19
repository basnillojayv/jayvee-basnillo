import Image from 'next/image'
import { TOOL_ICONS } from './toolIcons'
import { mediaUrl } from './util'

/**
 * A TOOL'S MARK, WITH A HONEST FALLBACK.
 *
 * Three sources, in order of preference:
 *
 *   1. A logo uploaded through the CMS. Always wins — if he has a licensed
 *      file, that is the correct artwork and nothing here should override it.
 *   2. Simple Icons, which is CC0. Naming the tools you work in is nominative
 *      use, and this is the icon set built for exactly that.
 *   3. A lettermark set in this site's own mono face.
 *
 * WHY THE THIRD CASE EXISTS AND WHY IT IS NOT A DRAWN LOGO
 * Seven of the tools named here have no mark in any open set: the Crocoblock
 * family (Crocoblock, JetEngine, JetElements), Duda, GoHighLevel, WPBakery and
 * FlippingBook. Redrawing those from memory would be an imitation of somebody
 * else's trademark, and it would also simply look wrong — an approximated logo
 * is worse than no logo. Initials in the site's own typeface are unmistakably
 * not a logo, which is the point.
 *
 * The icons are monochrome rather than brand-coloured. Thirty brand palettes
 * in one rack is a fruit salad, and this page has one accent colour.
 */

/**
 * Tool name as written in the CMS → key in TOOL_ICONS.
 *
 * Spelling variants are listed rather than normalised away, because the names
 * are typed by hand in the admin and "Cursor AI", "Cursor", "HTML" and "HTML5"
 * are all things somebody reasonably writes. A miss here is not a failure —
 * it is a monogram — so the map can stay a plain list of what has been seen.
 */
const SLUGS: Record<string, string> = {
  figma: 'figma',
  wordpress: 'wordpress',
  'elementor / elementor pro': 'elementor',
  'elementor pro': 'elementor',
  elementor: 'elementor',
  'cursor ai': 'cursor',
  cursor: 'cursor',
  github: 'github',
  vercel: 'vercel',
  html: 'html5',
  html5: 'html5',
  css: 'css',
  css3: 'css',
  javascript: 'javascript',
  js: 'javascript',
  canva: 'canva',
  'adobe xd': 'adobexd',
  'adobe photoshop': 'adobephotoshop',
  photoshop: 'adobephotoshop',
  'adobe illustrator': 'adobeillustrator',
  illustrator: 'adobeillustrator',
  claude: 'claude',
  'claude code': 'claude',
  chatgpt: 'openai',
  openai: 'openai',
  'next.js': 'nextdotjs',
  nextjs: 'nextdotjs',
  supabase: 'supabase',
  wix: 'wix',
  'yoast seo': 'yoast',
  yoast: 'yoast',
  framer: 'framer',
  webflow: 'webflow',
  squarespace: 'squarespace',
  // Google AI Studio is the Gemini developer console and ships under the
  // Gemini mark; there is no separate "AI Studio" icon in the set.
  'google ai studio': 'googlegemini',
  gemini: 'googlegemini',
  git: 'git',
  slack: 'slack',
  'google drive': 'googledrive',
}

function lookup(name: string): string | null {
  const key = SLUGS[name.trim().toLowerCase()]
  return key ? (TOOL_ICONS[key] ?? null) : null
}

/** First letter of the first and last significant word. "Adobe XD" → "AX". */
function monogram(name: string): string {
  const words = name.replace(/\//g, ' ').split(/\s+/).filter(Boolean)
  if (words.length === 0) return '·'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export function ToolMark({
  name,
  logo,
}: {
  name: string
  logo?: unknown
}) {
  const uploaded = mediaUrl(logo as never, '')
  if (uploaded) {
    return (
      <span className="toolmark">
        <Image src={uploaded} alt="" width={96} height={96} loading="lazy" />
      </span>
    )
  }

  const path = lookup(name)
  if (path) {
    return (
      <span className="toolmark">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d={path} />
        </svg>
      </span>
    )
  }

  return (
    <span className="toolmark toolmark--letters" aria-hidden="true">
      {monogram(name)}
    </span>
  )
}
