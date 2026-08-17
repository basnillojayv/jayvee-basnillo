import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RevealObserver } from '../components/Reveal'
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
  const [home, explorations] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1 }),
    payload.find({ collection: 'explorations', sort: 'order', limit: 200, depth: 1 }),
  ])

  const mailto = home.email ? `mailto:${home.email}` : '#contact'
  const docs = explorations.docs

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
              {docs.length} pieces — brand systems, campaign artwork and interface studies.
            </p>
          </div>
        </section>

        {GROUPS.map(({ key, heading }) => {
          const items = docs.filter((d) => d.category === key)
          if (items.length === 0) return null
          return (
            <section className="section designs__group" key={key} id={key}>
              <div className="wrap">
                <h2 className="designs__heading reveal">{heading}</h2>
                <ul className="designs__grid">
                  {items.map((e, i) => (
                    <li key={e.id} className="reveal">
                      <figure className="designtile">
                        <Image
                          src={mediaUrl(e.image, '/media/placeholder-tile.jpg')}
                          alt={e.title}
                          width={900}
                          height={690}
                          sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px"
                          priority={i < 3}
                          data-edit-key={`explorations.${e.id}.image`}
                        />
                        <figcaption>{e.title}</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )
        })}
      </main>

      <Footer data={home} />
    </>
  )
}
