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
 * Adobe and Canva have both asked to be removed from open icon sets, and the
 * Crocoblock family (Crocoblock, JetEngine, JetElements) has no open mark at
 * all. Redrawing those from memory would be an imitation of a trademark whose
 * owner actively polices it, and it would also simply look wrong — an
 * approximated logo is worse than no logo. Initials in the site's own
 * typeface are unmistakably not a logo, which is the point.
 *
 * The icons are monochrome rather than brand-coloured. Fifteen brand palettes
 * in one row is a fruit salad, and this page has one accent colour.
 */

/** Tool name as written in the CMS → key in TOOL_ICONS. */
const SLUGS: Record<string, string> = {
  figma: 'figma',
  wordpress: 'wordpress',
  'elementor / elementor pro': 'elementor',
  elementor: 'elementor',
  'cursor ai': 'cursor',
  cursor: 'cursor',
  github: 'github',
  vercel: 'vercel',
  html: 'html5',
  html5: 'html5',
  css: 'css',
  css3: 'css',
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
