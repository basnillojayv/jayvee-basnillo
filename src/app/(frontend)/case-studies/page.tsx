import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { WorkTile } from '../components/WorkTile'
import { RevealObserver } from '../components/Reveal'

export const dynamic = 'force-static'
export const metadata: Metadata = { title: 'Case studies' }

export default async function CaseStudiesIndex() {
  const payload = await getPayload({ config })
  const [data, studies] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1 }),
    payload.find({ collection: 'case-studies', sort: 'order', limit: 100, depth: 1 }),
  ])

  return (
    <>
      <RevealObserver />
      <Header email={data.email} linkedin={data.contactLinkedin} />
      <main id="main">
        <section className="section page-head">
          <div className="wrap">
            <p className="eyebrow">{data.caseStudiesEyebrow}</p>
            <h1 className="t-h1">Case studies</h1>
            <p className="section-lede">The work with the thinking attached.</p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap grid-2">
            {studies.docs.map((c, i) => (
              <WorkTile
                key={c.id}
                href={`/case-studies/${c.slug}`}
                title={c.title}
                meta={[c.client, c.year].filter(Boolean).join(' · ')}
                image={c.cover}
                fit={c.coverFit}
                editKey={`caseStudies.${c.id}.cover`}
                priority={i < 2}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer data={data} />
    </>
  )
}
