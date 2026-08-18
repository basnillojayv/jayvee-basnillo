import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import { RevealObserver } from '../components/Reveal'
import { ViewProjectCursor } from '../components/ViewProjectCursor'

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
      <Header contactHref={mailto} email={home.email} linkedin={home.contactLinkedin} />

      <main id="main">
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

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap pgrid">
            {projects.docs.map((p, i) => (
              <ProjectCard key={p.id} project={p} priority={i < 4} />
            ))}
          </div>
        </section>
      </main>

      <Footer data={home} />
    </>
  )
}
