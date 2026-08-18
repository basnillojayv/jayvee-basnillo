import 'server-only'
import fs from 'node:fs/promises'
import path from 'node:path'

/**
 * Reads a design-system document out of `public/` and splits it into sections.
 *
 * WHY READ THE SOURCE RATHER THAN TRANSLITERATE IT INTO JSX
 * The LineHaul document is 136 KB of presentational markup carrying 938 inline
 * `style` attributes and no logic. Hand-converting that to JSX would produce a
 * 136 KB component that no one can read, that diffs unreviewably, and that
 * drifts from the deliverable the moment the deliverable is updated. The
 * markup is design output, not application code, so it is treated as content:
 * parsed once at build (these routes are `force-static`, so this never runs on
 * a request) and handed to React as sections.
 *
 * What IS written in React is everything around it — the route, the metadata,
 * the section navigation, the scroll-spy, the deep links. That is the part with
 * behaviour, and that part is genuinely a Next.js app.
 *
 * Nothing here is user input: the files are committed to this repo and read off
 * local disk, which is why injecting them as HTML is safe.
 */
export type DocSection = { id: string; label: string; html: string }
export type SystemDoc = { keyframes: string; sections: DocSection[] }

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'design-systems')

/** Only the animation definitions. The document's resets (`*`, `html`, `body`)
 *  are deliberately dropped — they are written for a standalone page and would
 *  reach out and restyle the site around it. */
function keyframesFrom(html: string): string {
  const style = /<style>([\s\S]*?)<\/style>/.exec(html)?.[1] ?? ''
  return (style.match(/@keyframes[\s\S]*?\}\s*\}/g) ?? []).join('\n')
}

/**
 * Splits on top-level `<section id="sNN" data-screen-label="...">`, which is
 * how these documents already mark their own chapters — so the navigation is
 * the document's own table of contents rather than one invented here.
 */
function sectionsFrom(html: string): DocSection[] {
  const open = /<section([^>]*?)id="(s\d+)"([^>]*?)>/g
  const found: { id: string; label: string; start: number }[] = []

  for (let m = open.exec(html); m; m = open.exec(html)) {
    const attrs = `${m[1]} ${m[3]}`
    const label = /data-screen-label="([^"]+)"/.exec(attrs)?.[1]
    found.push({ id: m[2], label: label ?? m[2], start: m.index })
  }

  return found.map((s, i) => ({
    id: s.id,
    label: s.label,
    // Up to the next section, or to the end of the document body.
    html: html.slice(s.start, found[i + 1]?.start ?? html.lastIndexOf('</x-dc>')),
  }))
}

/**
 * Re-root the document's relative asset paths.
 *
 * The document was written to be opened as
 * `/design-systems/linehaul/index.html`, where `assets/coins.png` resolves
 * correctly. Served at `/design-systems/linehaul` it is one segment shallower,
 * so every one of those would resolve to `/design-systems/assets/…` and 404 —
 * silently, as broken images in someone's portfolio. Absolute paths do not care
 * where the page is mounted.
 */
function absolutiseAssets(html: string, dir: string): string {
  return html.replace(
    /(\s(?:src|href)=")(?!https?:|\/|#|data:|mailto:)(?:\.\/)?([^"]+)"/g,
    (_all, attr: string, rel: string) => `${attr}/design-systems/${dir}/${rel}"`,
  )
}

/**
 * The other shape a bundle arrives in: no assembled guide, just a folder of
 * one-topic specimen cards, each declaring its own group and title in a
 * `@dsCard` comment on line one.
 *
 * That comment is the bundle's own table of contents, so the guide assembled
 * here is grouped the way its author grouped it rather than the way this site
 * would have guessed.
 */
export type SystemCard = { id: string; name: string; subtitle: string; html: string }
export type CardGroup = { id: string; label: string; cards: SystemCard[] }

const DS_CARD = /@dsCard\s+([^>]*?)-->/
const attr = (s: string, k: string) => new RegExp(`${k}="([^"]*)"`).exec(s)?.[1] ?? ''

/** Order the groups read in, rather than alphabetically — foundations first. */
const GROUP_ORDER = ['Brand', 'Colors', 'Type', 'Spacing', 'Components']

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export async function readSystemCards(dir: string): Promise<CardGroup[]> {
  const root = path.join(PUBLIC_DIR, dir)

  const files = (
    await Promise.all(
      ['guidelines', 'components'].map(async (sub) => {
        const base = path.join(root, sub)
        const entries = await fs.readdir(base, { withFileTypes: true }).catch(() => [])
        return (
          await Promise.all(
            entries.map(async (e) => {
              if (e.isFile() && e.name.endsWith('.html')) return [path.join(base, e.name)]
              if (!e.isDirectory()) return []
              const inner = await fs.readdir(path.join(base, e.name)).catch(() => [])
              return inner
                .filter((f) => f.endsWith('.html'))
                .map((f) => path.join(base, e.name, f))
            }),
          )
        ).flat()
      }),
    )
  ).flat()

  const groups = new Map<string, CardGroup>()

  for (const file of files.sort()) {
    const raw = await fs.readFile(file, 'utf8')
    const meta = DS_CARD.exec(raw)
    if (!meta) continue

    const group = attr(meta[1], 'group') || 'Other'
    const name = attr(meta[1], 'name') || path.basename(file, '.html')

    /**
     * Only the body. These are whole documents — keeping their <head> would
     * pull each card's own <link rel=stylesheet> and reset onto this page,
     * which is exactly what the scoped stylesheet exists to avoid.
     */
    const body = /<body[^>]*>([\s\S]*?)<\/body>/.exec(raw)?.[1] ?? ''
    if (!body.trim()) continue

    // Cards with a `<script>` are React demos that need a runtime we are not
    // loading here; they would render as an empty box. Left out on purpose.
    if (/<script/i.test(raw)) continue

    if (!groups.has(group)) {
      groups.set(group, { id: slug(group), label: group, cards: [] })
    }
    groups.get(group)!.cards.push({
      id: slug(`${group}-${name}`),
      name,
      subtitle: attr(meta[1], 'subtitle'),
      /**
       * Order matters. Cards sit one or two levels down (`guidelines/x.html`,
       * `components/core/x.html`) and reference the bundle root as `../` or
       * `../../`. Those have to collapse to bundle-root-relative BEFORE the
       * path is made absolute, or the result is a literal
       * `/design-systems/oc-fellows/../assets/…` that resolves nowhere useful.
       */
      html: absolutiseAssets(body.replace(/(\s(?:src|href)=")(?:\.\.\/)+/g, '$1'), dir),
    })
  }

  return [...groups.values()].sort(
    (a, b) =>
      (GROUP_ORDER.indexOf(a.label) + 1 || 99) - (GROUP_ORDER.indexOf(b.label) + 1 || 99),
  )
}

export async function readSystemDoc(dir: string): Promise<SystemDoc> {
  const raw = await fs.readFile(path.join(PUBLIC_DIR, dir, 'index.html'), 'utf8')

  // The x-dc runtime and its config block are editor tooling for the authoring
  // app. They do nothing here and must not reach the page.
  const html = absolutiseAssets(raw.replace(/<script[\s\S]*?<\/script>/g, ''), dir)

  return { keyframes: keyframesFrom(raw), sections: sectionsFrom(html) }
}
