import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { WorkTile } from '../components/WorkTile'
import { RevealObserver } from '../components/Reveal'

export const dynamic = 'force-static'
export const metadata: Metadata = { title: 'Projects' }

/** Every project, newest ordering first. The homepage shows only the featured six. */
export default async function ProjectsIndex() {
  const payload = await getPayload({ config })
  const [data, projects] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1 }),
    payload.find({ collection: 'projects', sort: 'order', limit: 200, depth: 1 }),
  ])

  return (
    <>
      <RevealObserver />
      <Header />
      <main id="main">
        <section className="section page-head">
          <div className="wrap">
            <p className="eyebrow">{data.projectsEyebrow}</p>
            <h1 className="t-h1">Projects</h1>
            <p className="section-lede">{projects.totalDocs} sites and builds.</p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap grid-tiles">
            {projects.docs.map((p, i) => (
              <WorkTile
                key={p.id}
                href={`/projects/${p.slug}`}
                title={p.title}
                meta={p.category}
                image={p.cover}
                fit={p.coverFit}
                editKey={`projects.${p.id}.cover`}
                priority={i < 6}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer data={data} />
    </>
  )
}
