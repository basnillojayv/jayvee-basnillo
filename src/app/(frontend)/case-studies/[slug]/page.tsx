import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CaseStudyBlocks } from '../../components/CaseStudyBlocks'
import { RevealObserver } from '../../components/Reveal'
import { toSameOriginPath } from '../../components/util'

export const dynamic = 'force-static'

async function getStudy(slug: string) {
  const payload = await getPayload({ config })
  const found = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    limit: 1,
    // depth 2: the body's media items are one level below the blocks.
    depth: 2,
  })
  return found.docs[0] ?? null
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const all = await payload.find({ collection: 'case-studies', limit: 100, depth: 0 })
  return all.docs.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = await getStudy(slug)
  if (!study) return {}
  return { title: study.title, description: study.summary ?? undefined }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = await getStudy(slug)
  if (!study) notFound()

  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'homepage', depth: 1 })

  const cover = typeof study.cover === 'object' && study.cover ? study.cover : null
  const related = typeof study.relatedProject === 'object' ? study.relatedProject : null
  const sibling = typeof study.relatedCaseStudy === 'object' ? study.relatedCaseStudy : null

  return (
    <>
      <RevealObserver />
      <Header />

      <main id="main">
        <article className="section detail">
          <div className="wrap detail__head">
            <p className="eyebrow">
              {[study.client, study.discipline, study.year].filter(Boolean).join(' · ')}
            </p>
            <h1 className="t-display detail__title">{study.title}</h1>
            <p className="section-lede">{study.summary}</p>
          </div>

          {cover?.url && (
            <div className="wrap">
              <figure
                className={`detail__media${study.coverFit === 'contain' ? ' detail__media--contain' : ''}`}
              >
                <Image
                  src={toSameOriginPath(cover.url)}
                  alt={cover.alt || study.title}
                  width={cover.width || 1600}
                  height={cover.height || 1000}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  data-edit-key={`caseStudies.${study.id}.cover`}
                />
              </figure>
            </div>
          )}

          <div className="wrap">
            {study.blocks && <CaseStudyBlocks blocks={study.blocks} docId={study.id} />}
          </div>

          {(related || sibling) && (
            <div className="wrap detail__related">
              <p className="eyebrow">Related</p>
              <ul className="detail__related-list">
                {related && (
                  <li>
                    <Link className="btn btn--outline" href={`/projects/${related.slug}`}>
                      {related.title}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                )}
                {sibling && (
                  <li>
                    <Link className="btn btn--outline" href={`/case-studies/${sibling.slug}`}>
                      {sibling.title}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="wrap detail__foot">
            <Link className="btn btn--outline" href="/case-studies">
              <span aria-hidden="true">←</span> All case studies
            </Link>
          </div>
        </article>
      </main>

      <Footer data={data} />
    </>
  )
}
