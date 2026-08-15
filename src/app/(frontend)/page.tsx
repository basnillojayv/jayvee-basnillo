import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { FeatureList } from './components/FeatureList'
import { WorkShowcase } from './components/WorkShowcase'
import { WorkCarousel } from './components/WorkCarousel'
import { toCarouselItem } from './components/carouselItem'
import { CtaBand } from './components/CtaBand'
import { ReadMoreList } from './components/ReadMoreList'
import { Capabilities } from './components/Capabilities'
import { Showcase } from './components/Showcase'
import { Footer } from './components/Footer'
import { RevealObserver } from './components/Reveal'
import { SmoothScroll } from './components/SmoothScroll'
import { RefreshRouteOnSave } from './components/RefreshRouteOnSave'

/**
 * THE PAGE IS ITS TABLE OF CONTENTS.
 *
 * Composed on the reference's order rather than the old portfolio's: a
 * full-bleed dark hero the headline sits inside, then the offer as a card and
 * a checked list, then the work as a thumbnail strip you look through in
 * place, then the long pieces as bare headings with a ghost link.
 *
 * The surface rhythm is white → fog → white, with carbon at both ends — the
 * hero and the footer. Three surfaces, and the dark one bookends rather than
 * interrupts.
 */
export const dynamic = 'force-static'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const [data, projects, caseStudies, explorations] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1 }),
    payload.find({ collection: 'projects', sort: 'order', limit: 8, depth: 1 }),
    payload.find({ collection: 'case-studies', sort: 'order', limit: 6, depth: 1 }),
    payload.find({ collection: 'explorations', sort: 'order', limit: 12, depth: 1 }),
  ])

  return (
    <>
      <SmoothScroll />
      <RevealObserver />
      <RefreshRouteOnSave />

      <Header />

      <main id="main">
        <Hero data={data} />
        <HowItWorks data={data} />
        <FeatureList data={data} />
        <WorkShowcase data={data} items={projects.docs} />

        {/* The scroll rail carries the long pieces, where each card has a
            standfirst worth reading. Projects stay in the strip above — a
            one-line category does not fill a card this size. */}
        <WorkCarousel
          eyebrow={data.caseStudiesEyebrow}
          title={data.caseStudiesTitle || 'The work, and the thinking behind it'}
          lede={data.statsStatement}
          items={caseStudies.docs.map((c) => toCarouselItem(c, 'caseStudies'))}
        />

        <ReadMoreList
          eyebrow="More"
          title="Everything else"
          items={caseStudies.docs}
        />
        <Capabilities data={data} />
        <Showcase data={data} items={explorations.docs} />
      </main>

      <CtaBand data={data} />
      <Footer data={data} />
    </>
  )
}
