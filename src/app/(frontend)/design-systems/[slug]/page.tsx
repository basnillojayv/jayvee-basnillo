import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SystemDoc } from '../../components/SystemDoc'
import { ProsomnusGuide } from '../../components/ProsomnusGuide'
import { OcFellowsCards } from '../oc-fellows/_guide/OcFellowsCards'
import { readSystemCards, readSystemDoc } from '@/lib/designSystemDoc'

/**
 * A design system, on the site rather than beside it.
 *
 * These used to be static bundles opened in a new tab. They are now routes:
 * the site's header and footer are around them, the sections are addressable,
 * and the page is prerendered — no CDN React, no in-browser Babel, no blank
 * second while a 15-page guide compiles itself in the visitor's browser.
 *
 * The `slug` here is the route segment, which is shorter than the CMS slug
 * (`linehaul` vs `linehaul-station`). BUNDLES maps one to the other and is the
 * only place that mapping is written down.
 */
export const dynamic = 'force-static'

/**
 * Route segment → where the content comes from and which CMS entry describes it.
 *
 * `kind` is the fork. The two systems were delivered in different shapes and
 * are converted differently: LineHaul is a static document, so its sections are
 * read and rendered; ProSomnus was already a React app, so it became components.
 * Mechanically converting either into the other's shape would be work with
 * nothing to show for it.
 */
const BUNDLES: Record<
  string,
  { kind: 'doc' | 'react' | 'cards'; dir: string; cmsSlug: string }
> = {
  linehaul: { kind: 'doc', dir: 'linehaul', cmsSlug: 'linehaul-station' },
  prosomnus: { kind: 'react', dir: 'prosomnus', cmsSlug: 'prosomnus-sleep-technologies' },
  'oc-fellows': { kind: 'cards', dir: 'oc-fellows', cmsSlug: 'oc-fellows' },
}

export function generateStaticParams() {
  return Object.keys(BUNDLES).map((slug) => ({ slug }))
}

async function getSystem(slug: string) {
  const bundle = BUNDLES[slug]
  if (!bundle) return null

  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'design-systems',
    where: { slug: { equals: bundle.cmsSlug } },
    limit: 1,
    depth: 0,
  })

  return docs[0] ? { bundle, system: docs[0] } : null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const found = await getSystem(slug)
  if (!found) return {}

  return {
    title: `${found.system.title} — design system`,
    description: found.system.summary,
  }
}

export default async function DesignSystemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const found = await getSystem(slug)
  if (!found) notFound()

  const { bundle, system } = found
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'homepage', depth: 1 })
  const doc = bundle.kind === 'doc' ? await readSystemDoc(bundle.dir) : null
  const cards = bundle.kind === 'cards' ? await readSystemCards(bundle.dir) : null
  const mailto = home.email ? `mailto:${home.email}` : '#contact'

  return (
    <>
      <Header contactHref={mailto} />

      <main id="main">
        <section className="section page-head sysdoc__head">
          <div className="wrap">
            <p className="kicker">
              <span className="kicker__rule" aria-hidden="true" />
              Design system
            </p>
            <h1 className="designs__title">{system.title}</h1>
            <p className="designs__lede">{system.summary}</p>
            <p className="sysdoc__back">
              <a href="/designs#systems">← All design work</a>
            </p>
          </div>
        </section>

        {doc && (
          <SystemDoc sections={doc.sections} keyframes={doc.keyframes} title={system.title} />
        )}
        {cards && <OcFellowsCards groups={cards} title={system.title} />}
        {bundle.kind === 'react' && <ProsomnusGuide />}
      </main>

      <Footer data={home} />
    </>
  )
}
