import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { WorkHero } from '../components/WorkHero'
import { ShotStrip } from '../components/ShotStrip'
import { DesignerBand } from '../components/DesignerBand'
import { ProjectRail } from '../components/ProjectRail'
import { Ribbons } from '../components/Ribbons'
import { WhatIDo } from '../components/WhatIDo'
import { Tools } from '../components/Tools'
import { Testimonials } from '../components/Testimonials'
import { RevealObserver } from '../components/Reveal'
import { PointerFX } from '../components/PointerFX'
import { SmoothScroll } from '../components/SmoothScroll'
import { RefreshRouteOnSave } from '../components/RefreshRouteOnSave'
import { mediaUrl } from '../components/util'
import { site } from '@/site.config'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Services',
  description:
    'Design and build for brands that need to be taken seriously — identity, custom websites, and the AI-assisted workflows behind them.',
}

/**
 * THE WORK PAGE — a long sell, in ten movements.
 *
 * The order is an argument, not a menu:
 *
 *   claim → proof → correction → the work → what he does → the volume of it
 *   → what clients said → objections → the ask
 *
 * The correction is the hinge. Everything before it is what the visitor
 * already thinks they came for; the struck line and the paragraphs under it
 * reframe that, and the rest of the page answers the reframed question.
 *
 * WHY THE HOMEPAGE'S MOTION COMES ALONG
 * `PointerFX` runs here too, so the cursor, the magnetic buttons and the drift
 * behave the same on both pages. What does *not* come along is the intro
 * curtain: it belongs to arriving at the site, and replaying it on an internal
 * navigation would put a wall in front of someone who is already here.
 *
 * TWO SECTIONS CAN RENDER NOTHING. `Testimonials` is absent until there are
 * real quotes, and `Faq`, `ShotStrip`, `Ribbons` and `GalleryBand` each return
 * null when their content is empty — so a half-filled CMS produces a shorter
 * page rather than a broken one.
 */
export default async function WorkPageRoute() {
  const payload = await getPayload({ config })

  const [home, work, projects, explorations] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1 }),
    payload.findGlobal({ slug: 'work-page', depth: 2 }),
    payload.find({ collection: 'projects', sort: 'order', limit: 24, depth: 1 }),
    payload.find({ collection: 'explorations', sort: 'order', limit: 12, depth: 1 }),
  ])

  const mailto = home.email ? `mailto:${home.email}` : '/case-studies'

  /**
   * ONE POOL OF REAL WORK, SHARED BY THE SECTIONS THAT HAVE NO ART OF THEIR OWN.
   *
   * The service clusters and the closing panel both want pictures that nobody
   * has uploaded for them yet, and the sliding band wants more variety than any
   * single collection has. Rather than three placeholder greys, all three draw
   * from the same list of things he has actually made — project covers first,
   * because they are the strongest, then exploration artwork.
   *
   * Deduplicated by source: the same file uploaded to both collections would
   * otherwise appear twice in a row in the band, which is exactly where a loop
   * stops looking like a loop and starts looking like a mistake.
   */
  const explorationArt = explorations.docs.map((d) => mediaUrl(d.image, '')).filter(Boolean)
  const projectArt = projects.docs.map((d) => mediaUrl(d.cover, '')).filter(Boolean)

  /**
   * THE STRIP SHOWS EXPLORATIONS, NOT PROJECTS — and that is a usability fix,
   * not a taste one. A sliding band of project covers looks like a carousel of
   * links and is not clickable, so every one of them is a small invitation to
   * click that goes nowhere. Exploration artwork reads as a texture of work
   * rather than as a set of destinations, which is what a decorative band
   * should be. The projects are one section below, as cards, where they are
   * genuinely clickable.
   */
  const pool = Array.from(new Set([...explorationArt, ...projectArt])).filter(Boolean)

  return (
    <>
      <SmoothScroll />
      <RevealObserver />
      <PointerFX />
      <RefreshRouteOnSave />

      <Header contactHref={mailto} />

      <main id="main">
        {/* THE OPENING SEQUENCE PINS AND COVERS ITSELF.
            Each section sticks at top:0 with a rising z-index, so the next one
            slides up over the last instead of pushing it away. The CSS for this
            has existed since the rebuild and the config switch was already set
            to true — nothing ever applied the class, so it rendered as an
            ordinary scrolling page.

            Only the opening five stack. The rail, tools and testimonials below
            are for reading and comparing, and pinning a section you want to
            scan is a fight with the reader rather than an effect. Disabled
            under 769px and under prefers-reduced-motion, both in the CSS.

            ShotStrip and Ribbons are <div>s, so they do not pin — they travel
            up over the pinned section beneath them, which is what makes the
            covering read as depth rather than as a slideshow. */}
        <div className={site.motion.sectionStacking ? 'stack-sections' : undefined}>
          <WorkHero data={work} ctaHref={mailto} />
          <ShotStrip shots={explorationArt.slice(0, 10)} />
          {/* Reads from the `homepage` global, not `work-page`: this copy was
              already written and has been rendering nowhere since the homepage
              was cut to one screen. Duplicating it into a second global would
              give him two places to keep the same paragraphs current. */}
          <DesignerBand data={home} work={work} />
          <Ribbons data={work} />
          <WhatIDo data={work} />
        </div>
        <ProjectRail
          eyebrow={work.projectsEyebrow}
          title={work.projectsTitle}
          lede={work.projectsLede}
          ctaLabel={work.projectsCtaLabel}
          items={projects.docs.slice(0, 9)}
        />
        {/* `Capabilities` used to sit here. With the tools rack above it, the
            two listed the same names — WordPress, Elementor, Crocoblock,
            Figma, Canva, Photoshop — within a single screen, which reads as
            the page repeating itself rather than as two sections. The
            component and its five groups of content are untouched and belong
            on a page of their own. */}
        <Tools data={work} />

        {/* `ServiceBlocks` used to sit here: three tall alternating blocks on
            Branding, Web design and AI workflows. Every one of those subjects
            is already covered twice above — once as the designer's three
            points, once in "What I do" — and these were the sparsest sections
            on the page, a short paragraph and a scatter of pictures spread
            over most of a viewport each. Three passes at the same three
            claims is not emphasis, it is the page repeating itself. The
            component and its CMS content are untouched. */}
        <Testimonials data={work} />
      </main>

      <Footer data={home} />
    </>
  )
}
