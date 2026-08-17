import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import { RevealObserver } from '../components/Reveal'
import { ViewProjectCursor } from '../components/ViewProjectCursor'
import { site } from '@/site.config'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Websites designed and built for businesses, nonprofits and organisations.',
}

/**
 * EVERY PROJECT, AS A GRID.
 *
 * The services page shows nine in a rail you push through; this is the whole
 * list, and it is where "See the work" now lands. A rail is for browsing past
 * something on the way to an argument — a grid is for finding one thing.
 *
 * `WorkTile` already renders exactly this card, and is still used by the case
 * studies index, so it is reused rather than reimplemented.
 *
 * `/projects/[slug]` is unaffected: only the index moved to /services, so every
 * project detail URL is the same as it was.
 */
export default async function ProjectsIndex() {
  const payload = await getPayload({ config })
  const [home, projects] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1 }),
    payload.find({ collection: 'projects', sort: 'order', limit: 200, depth: 1 }),
  ])

  const mailto = home.email ? `mailto:${home.email}` : '/contact'

  return (
    <>
      <RevealObserver />
      <ViewProjectCursor />
      <Header contactHref={mailto} />

      <main id="main">
        {/* THE TITLE HOLDS WHILE THE WORK COVERS IT.
            Both sections pin at top:0; the grid carries the higher z-index, so
            it travels up over the standing headline instead of pushing it off.

            This works because sticky is bounded by its container. The head has
            the whole wrapper to stay pinned across, so it holds. The grid's
            bottom IS the wrapper's bottom, leaving it no room to stick, so it
            scrolls normally — which is what makes it read as the moving layer
            rather than a second frozen one.

            Scoped to this page. It suits an index whose headline is a standing
            claim; it does not suit the services page, where the sections are
            argument to be read in sequence. Off below 769px and under
            prefers-reduced-motion. */}
        <div className={site.motion.sectionStacking ? 'stack-sections' : undefined}>
          <section className="section page-head">
            <div className="wrap">
              <p className="kicker reveal">
                <span className="kicker__rule" aria-hidden="true" />
                Selected projects
              </p>
              <h1 className="designs__title reveal">Websites built to be taken seriously.</h1>
              <p className="designs__lede reveal">
                {projects.totalDocs} sites designed and built for businesses, nonprofits and
                organisations.
              </p>
            </div>
          </section>

          <section className="section pgrid-section">
            <div className="wrap pgrid">
              {projects.docs.map((p, i) => (
                <ProjectCard key={p.id} project={p} priority={i < 4} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer data={home} />
    </>
  )
}
