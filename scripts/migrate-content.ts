import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'
import config from '@payload-config'

import { projects } from './source/projects'
import { caseStudies } from './source/caseStudies'
import { explorations } from './source/explorations'
import { homepage } from './source/homepage'

/**
 * One-off import of the old Vite portfolio into Payload.
 *
 * Run once, against an empty database:
 *
 *     npx payload run scripts/migrate-content.ts
 *
 * It is safe to run again: every document is keyed by slug and updated rather
 * than duplicated, and downloads are cached to disk, so a second run is fast
 * and does not re-fetch anything.
 *
 * WHY THE IMAGES MOVE
 * The old site pointed at two live services — WordPress's mshots screenshot
 * generator for project tiles, and Google Drive for everything else. Both work
 * until they do not: mshots serves a grey placeholder for any URL it has not
 * crawled, and a Drive link dies the moment a folder is reorganised. Hosting
 * them in Payload also makes them swappable from the page, which a hotlink
 * never can be.
 *
 * FAILURE IS LOUD ON PURPOSE
 * Anything that 404s, or comes back small enough to be a placeholder rather
 * than a screenshot, is collected and printed at the end. A migration that
 * quietly creates records pointing at grey squares is worse than one that
 * stops and tells you which fifteen need recapturing by hand.
 */

const here = path.dirname(fileURLToPath(import.meta.url))
const ASSETS = path.join(here, 'source', 'assets')
const CACHE = path.join(here, '.cache')

/** Below this, a "screenshot" is almost certainly a placeholder or an error page. */
const SUSPICIOUS_BYTES = 5_000

type Problem = { source: string; used: string; why: string }
const problems: Problem[] = []

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/** A stable, filesystem-safe name for a remote URL. */
function cacheName(url: string): string {
  const clean = url.replace(/^https?:\/\//, '').replace(/[^a-zA-Z0-9.-]/g, '_')
  const ext = /\.(jpe?g|png|webp|gif|avif)(?:$|\?)/i.exec(url)?.[1] ?? 'jpg'
  return `${clean.slice(0, 120)}.${ext.toLowerCase()}`
}

/**
 * Resolve any image reference the old site used to a file on disk.
 *
 * Three shapes exist: a path into the old `public/` folder, an mshots URL, and
 * a Drive URL. The first is copied, the other two are fetched once and cached.
 * Returns null when the image cannot be had at all.
 */
async function resolveImage(source: string): Promise<string | null> {
  // Local: /thumbnails/x.jpg or /case-studies/<slug>/y.jpg
  if (source.startsWith('/')) {
    const local = path.join(ASSETS, source.replace(/^\//, ''))
    if (fs.existsSync(local)) return local
    problems.push({ source, used: 'none', why: 'local file missing from the staged assets' })
    return null
  }

  fs.mkdirSync(CACHE, { recursive: true })
  const cached = path.join(CACHE, cacheName(source))
  if (fs.existsSync(cached) && fs.statSync(cached).size > SUSPICIOUS_BYTES) return cached

  try {
    // Drive rejects requests carrying a referer; sending none is what the old
    // site did with referrerPolicy="no-referrer".
    const res = await fetch(source, { headers: { 'User-Agent': 'portfolio-migration' } })
    if (!res.ok) {
      problems.push({ source, used: 'none', why: `HTTP ${res.status}` })
      return null
    }

    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.byteLength < SUSPICIOUS_BYTES) {
      problems.push({
        source,
        used: 'none',
        why: `only ${buf.byteLength} bytes — a placeholder rather than a screenshot`,
      })
      return null
    }

    fs.writeFileSync(cached, buf)
    // Gentle on the screenshot service, which is generating these on demand.
    await sleep(400)
    return cached
  } catch (error) {
    problems.push({ source, used: 'none', why: error instanceof Error ? error.message : 'fetch failed' })
    return null
  }
}

async function main() {
  const payload = await getPayload({ config })

  /** source URL/path → media id, so one file is uploaded once however often it is used. */
  const uploaded = new Map<string, number>()

  /**
   * Upload once, ever.
   *
   * Two levels of de-duplication, because they catch different things. The map
   * stops the same URL being fetched twice inside one run; the filename lookup
   * stops a *second* run creating a parallel copy of everything. Without the
   * second, re-running this script doubles the media library and leaves the
   * first set orphaned — which is exactly what happened the first time.
   *
   * `name` is what the file is called in the library, derived from the
   * document it belongs to. The alternative is the cache filename, which for a
   * screenshot service is 120 characters of percent-encoded URL.
   */
  async function mediaFor(source: string | undefined, alt: string, name: string): Promise<number | null> {
    if (!source) return null

    const already = uploaded.get(source)
    if (already) return already

    const file = await resolveImage(source)
    if (!file) return null

    const filename = `${name}${path.extname(file) || '.jpg'}`

    const existing = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
      limit: 1,
    })
    if (existing.docs.length) {
      const id = existing.docs[0].id as number
      uploaded.set(source, id)
      return id
    }

    /**
     * `file`, and deliberately not `filePath` alongside it. Given both, Payload
     * takes the path and ignores the name — which stored every downloaded
     * screenshot under its cache filename, 120 characters of percent-encoded
     * URL, and quietly defeated the de-duplication above, since the lookup was
     * searching for a name that was never written.
     */
    const doc = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: fs.readFileSync(file),
        mimetype: `image/${(path.extname(file).slice(1) || 'jpeg').replace('jpg', 'jpeg')}`,
        name: filename,
        size: fs.statSync(file).size,
      },
    })
    uploaded.set(source, doc.id as number)
    return doc.id as number
  }

  /** Create or update by slug, so re-running does not duplicate. */
  async function upsert(collection: 'projects' | 'case-studies' | 'explorations', slug: string, data: object) {
    const found = await payload.find({ collection, where: { slug: { equals: slug } }, limit: 1 })
    if (found.docs.length) {
      await payload.update({ collection, id: found.docs[0].id, data: data as never })
      return found.docs[0].id
    }
    const created = await payload.create({ collection, data: data as never })
    return created.id
  }

  /* ---------------- projects ---------------- */
  console.log(`\n▸ ${projects.length} projects`)
  for (const [i, p] of projects.entries()) {
    const cover = await mediaFor(p.image, p.title, p.slug)
    await upsert('projects', p.slug, {
      title: p.title,
      slug: p.slug,
      category: p.category,
      url: p.url,
      description: p.description,
      cover,
      // Every one of these is a website screenshot, which loses its chrome
      // when cropped. Photography would want 'cover'.
      coverFit: 'contain',
      order: i * 10,
      featured: i < 6,
    })
    console.log(`  ${cover ? '✓' : '✗'} ${p.slug}`)
  }

  /* ---------------- explorations ---------------- */
  console.log(`\n▸ ${explorations.length} explorations`)
  for (const [i, e] of explorations.entries()) {
    const image = await mediaFor(e.image, e.title, `exploration-${e.slug}`)
    if (!image) {
      console.log(`  ✗ ${e.slug} — skipped, image is required`)
      continue
    }
    await upsert('explorations', e.slug, {
      title: e.title,
      slug: e.slug,
      category: e.category === 'Social Media' ? 'social' : 'web',
      image,
      order: i * 10,
    })
    console.log(`  ✓ ${e.slug}`)
  }

  /* ---------------- case studies ---------------- */
  console.log(`\n▸ ${caseStudies.length} case studies`)
  for (const [i, c] of caseStudies.entries()) {
    const cover = await mediaFor(c.cover, `${c.title} — cover`, `${c.slug}-cover`)

    // Blocks are rebuilt rather than copied: the shapes match the collection's
    // block definitions, and every image inside becomes a media reference.
    const blocks = []
    for (const b of c.blocks) {
      if (b.kind === 'prose') {
        blocks.push({
          blockType: 'prose',
          heading: b.heading,
          body: b.body.map((text) => ({ text })),
        })
      } else if (b.kind === 'swatches') {
        blocks.push({ blockType: 'swatches', heading: b.heading, note: b.note, items: b.items })
      } else if (b.kind === 'type') {
        blocks.push({ blockType: 'type', heading: b.heading, note: b.note, items: b.items })
      } else if (b.kind === 'stats') {
        blocks.push({ blockType: 'stats', heading: b.heading, items: b.items })
      } else if (b.kind === 'media') {
        const items = []
        for (const item of b.items) {
          const image = await mediaFor(item.src, item.alt, `${c.slug}-${path.basename(item.src, path.extname(item.src))}`)
          if (image) items.push({ image, caption: item.caption })
        }
        blocks.push({
          blockType: 'media',
          heading: b.heading,
          note: b.note,
          columns: String(b.columns ?? 2),
          items,
        })
      }
    }

    await upsert('case-studies', c.slug, {
      title: c.title,
      slug: c.slug,
      client: c.client,
      discipline: c.discipline,
      year: c.year,
      summary: c.summary,
      cover,
      coverFit: c.coverFit ?? 'cover',
      order: i * 10,
      blocks,
    })
    console.log(`  ${cover ? '✓' : '✗'} ${c.slug} — ${blocks.length} blocks`)
  }

  /* ---------------- cross-links ----------------
     A second pass, because a case study can point at a project or at another
     case study, and on the first pass the target may not exist yet. */
  console.log('\n▸ cross-links')
  for (const c of caseStudies) {
    const patch: Record<string, unknown> = {}

    if (c.relatedProject) {
      const p = await payload.find({ collection: 'projects', where: { slug: { equals: c.relatedProject } }, limit: 1 })
      if (p.docs.length) patch.relatedProject = p.docs[0].id
    }
    if (c.relatedCaseStudy) {
      const s = await payload.find({
        collection: 'case-studies',
        where: { slug: { equals: c.relatedCaseStudy } },
        limit: 1,
      })
      if (s.docs.length) patch.relatedCaseStudy = s.docs[0].id
    }

    if (Object.keys(patch).length) {
      const self = await payload.find({ collection: 'case-studies', where: { slug: { equals: c.slug } }, limit: 1 })
      if (self.docs.length) {
        await payload.update({ collection: 'case-studies', id: self.docs[0].id, data: patch as never })
        console.log(`  ✓ ${c.slug} → ${Object.keys(patch).join(', ')}`)
      }
    }
  }

  /* ---------------- homepage ---------------- */
  console.log('\n▸ homepage')
  const heroPortrait = await mediaFor(homepage.hero.portrait, 'Jayvee Basnillo', 'portrait-hero')
  const aboutPortrait = await mediaFor(homepage.about.portrait, 'Jayvee Basnillo', 'portrait-about')

  await payload.updateGlobal({
    slug: 'homepage',
    data: {
      heroNameFirst: homepage.hero.nameFirst,
      heroNameLast: homepage.hero.nameLast,
      heroTagline: homepage.hero.tagline,
      heroWatermarkLeft: homepage.hero.watermarkLeft,
      heroWatermarkRight: homepage.hero.watermarkRight,
      heroPortrait,

      aboutEyebrow: homepage.about.eyebrow,
      aboutPortrait,
      aboutLede: homepage.about.lede,
      aboutBody: homepage.about.body.map((text) => ({ text })),
      aboutPillars: homepage.about.pillars.map((p) => ({ title: p.title, copy: p.copy })),

      statsItems: homepage.stats.items.map((s) => ({ value: s.value, label: s.label })),
      statsStatement: homepage.stats.statement,

      howEyebrow: homepage.how.eyebrow,
      howLede: homepage.how.lede,
      howSteps: homepage.how.steps.map((s) => ({ title: s.title, copy: s.copy })),

      capabilitiesEyebrow: homepage.capabilities.eyebrow,
      capabilitiesGroups: homepage.capabilities.groups.map((g) => ({
        title: g.title,
        tags: g.tags.map((label) => ({ label })),
      })),

      projectsEyebrow: homepage.sections.projects,
      caseStudiesEyebrow: homepage.sections.caseStudies,
      showcaseEyebrow: homepage.sections.showcase,

      contactEyebrow: homepage.contact.eyebrow,
      contactHeadlineLead: homepage.contact.headlineLead,
      contactHeadlineAccent: homepage.contact.headlineAccent,
      contactCtaLabel: homepage.contact.ctaLabel,
      email: homepage.contact.email,
      contactLinkedin: homepage.contact.linkedin,
    } as never,
  })
  console.log(`  ${heroPortrait ? '✓' : '✗'} hero portrait · ${aboutPortrait ? '✓' : '✗'} about portrait`)

  /* ---------------- report ---------------- */
  console.log(`\n▸ ${uploaded.size} images uploaded`)

  if (problems.length) {
    console.log(`\n⚠ ${problems.length} image(s) could not be fetched. These need capturing by hand:\n`)
    for (const p of problems) console.log(`  · ${p.why}\n    ${p.source}`)
  } else {
    console.log('\n✓ every image resolved')
  }

  process.exit(0)
}

await main()
