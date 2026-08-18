import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RevealObserver } from '../components/Reveal'
import { DesignViewer } from '../components/DesignViewer'
import { SystemCard } from '../components/SystemCard'
import { DesignsNav } from '../components/DesignsNav'
import { mediaUrl } from '../components/util'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Designs',
  description: 'Design work — brand systems, campaign artwork and interface studies.',
}

/**
 * THE DESIGN SHOWCASE, ON ITS OWN PAGE.
 *
 * Everything here was already in Payload: the old portfolio's "Creative
 * Explorations" was migrated into the `explorations` collection long ago and
 * has been rendering nowhere since the homepage was cut back. This is a route
 * for it, not an import.
 *
 * WHY IT IS GROUPED BY CATEGORY RATHER THAN ONE LONG GRID
 * Twenty-two pieces in a single wall is a texture, and someone scanning for
 * "does he do social campaigns?" has to read all of it to find out. Two named
 * groups answer that from the headings alone.
 *
 * The tiles are plain — an image and its name. These have no write-up and no
 * destination, so a bordered card with a category chip and a hover arrow would
 * be promising a page that does not exist.
 */
const GROUPS = [
  { key: 'web', heading: 'Interface and web' },
  { key: 'social', heading: 'Campaign and social' },
] as const

export default async function DesignsPage() {
  const payload = await getPayload({ config })
  const [home, explorations, systems] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1 }),
    payload.find({ collection: 'explorations', sort: 'order', limit: 200, depth: 1 }),
    payload.find({ collection: 'design-systems', sort: 'order', limit: 50, depth: 0 }),
  ])

  const mailto = home.email ? `mailto:${home.email}` : '#contact'
  const docs = explorations.docs

  /**
   * Built from what actually rendered, so a category with nothing in it never
   * appears in the strip pointing at a section that was skipped.
   */
  const categories = [
    ...GROUPS.map(({ key, heading }) => ({
      id: key,
      label: heading,
      count: docs.filter((d) => d.category === key).length,
    })),
    { id: 'systems', label: 'Design systems', count: systems.docs.length },
  ].filter((c) => c.count > 0)

  return (
    <>
      <RevealObserver />
      <Header contactHref={mailto} />

      <main id="main">
        <section className="section page-head">
          <div className="wrap">
            <p className="kicker reveal">
              <span className="kicker__rule" aria-hidden="true" />
              Design showcase
            </p>
            <h1 className="designs__title reveal">Work that speaks before it is read.</h1>
            <p className="designs__lede reveal">
              {docs.length} pieces — campaign artwork and interface studies
              {systems.docs.length > 0 &&
                `, plus ${systems.docs.length} brand ${systems.docs.length === 1 ? 'system' : 'systems'} you can open`}
              .
            </p>
          </div>
        </section>

        <DesignsNav categories={categories} />

        {GROUPS.map(({ key, heading }) => {
          const items = docs.filter((d) => d.category === key)
          if (items.length === 0) return null
          return (
            <section className="section designs__group" key={key} id={key}>
              <div className="wrap">
                <h2 className="designs__heading reveal">{heading}</h2>
                <DesignViewer
                  shots={items.map((e) => ({
                    id: e.id,
                    src: mediaUrl(e.image, '/media/placeholder-tile.jpg'),
                    title: e.title,
                    editKey: `explorations.${e.id}.image`,
                  }))}
                />
              </div>
            </section>
          )
        })}

        {/*
          LAST, AND DELIBERATELY UNLIKE THE GROUPS ABOVE.

          The tiles above are pictures with no destination. These are the one
          kind of work on this page that cannot be flattened into a tile — the
          artifact is the deliverable, so the card's job is to get you into it.
          Different behaviour, so it reads as a different kind of thing rather
          than a third grid that mysteriously has links.

          It sits at the bottom because it is the smallest group and the
          heaviest to read. Someone scanning for campaign work should not have
          to scroll past two brand systems to reach it.
        */}
        {systems.docs.length > 0 && (
          <section className="section designs__group" id="systems">
            <div className="wrap">
              <h2 className="designs__heading reveal">Design systems</h2>
              <p className="designs__note reveal">
                Built to be handed over and used — each one opens in full.
              </p>
              <div className="syscards">
                {systems.docs.map((system) => (
                  <div className="reveal" key={system.id}>
                    <SystemCard system={system} editKeyPrefix={`designSystems.${system.id}`} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer data={home} />
    </>
  )
}
