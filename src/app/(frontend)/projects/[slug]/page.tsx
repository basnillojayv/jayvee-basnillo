import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { RevealObserver } from '../../components/Reveal'
import { toSameOriginPath } from '../../components/util'

/**
 * Deliberately NOT `force-static`. Every real page here still prerenders from
 * generateStaticParams; dropping the flag only changes what happens to a slug
 * that does not exist — `notFound()` can then return a genuine 404 instead of
 * a prerendered 200. Keeping on-demand rendering also means a project added in
 * the CMS works before the next deploy rather than 404ing until one.
 */

async function getProject(slug: string) {
  const payload = await getPayload({ config })
  const found = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  return found.docs[0] ?? null
}

/** Prerendered, so every project is a static file rather than a database hit. */
export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const all = await payload.find({ collection: 'projects', limit: 200, depth: 0 })
  return all.docs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  /**
   * A slug that does not exist renders the 404 page, but Next caches that
   * render and serves it with a 200 — a soft 404. `dynamicParams = false`
   * would give a hard 404, at the cost of a project added in the CMS 404ing
   * until the next deploy, which is the worse trade for a site whose content
   * is edited live. So the status stays 200 and this makes sure a crawler is
   * told not to index it; without it the page inherits the layout's
   * `index, follow` and a typo'd URL becomes an indexable page.
   */
  if (!project) return { title: 'Not found', robots: { index: false, follow: false } }
  return { title: project.title, description: project.description ?? undefined }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()

  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'homepage', depth: 1 })
  const cover = typeof project.cover === 'object' && project.cover ? project.cover : null

  return (
    <>
      <RevealObserver />
      <Header email={data.email} linkedin={data.contactLinkedin} />

      <main id="main">
        <article className="section detail">
          <div className="wrap detail__head">
            {project.category && <p className="eyebrow">{project.category}</p>}
            <h1 className="t-display detail__title">{project.title}</h1>
            {project.description && <p className="section-lede">{project.description}</p>}

            {project.url && (
              <a
                className="btn btn--accent detail__cta"
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit the site
                <span className="arr" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
          </div>

          {cover?.url && (
            <div className="wrap">
              <figure
                className={`detail__media${project.coverFit === 'contain' ? ' detail__media--contain' : ''}`}
              >
                <Image
                  src={toSameOriginPath(cover.url)}
                  alt={cover.alt || project.title}
                  width={cover.width || 1600}
                  height={cover.height || 1000}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  data-edit-key={`projects.${project.id}.cover`}
                />
              </figure>
            </div>
          )}

          <div className="wrap detail__foot">
            <Link className="btn btn--outline" href="/projects">
              <span aria-hidden="true">←</span> All projects
            </Link>
          </div>
        </article>
      </main>

      <Footer data={data} />
    </>
  )
}
