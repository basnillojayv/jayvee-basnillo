import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { PointerFX } from './components/PointerFX'
import { RefreshRouteOnSave } from './components/RefreshRouteOnSave'

/**
 * The homepage keeps the layout's title — `title.default` — because a
 * template would render it as "Jayvee Basnillo — Jayvee Basnillo". The
 * description is stated here so the root's generic one is never what a
 * search result shows for the page that matters most.
 */
export const metadata: Metadata = {
  description:
    'Strategic designer and web architect. Brand systems, websites and design systems for teams who need the work to hold up after handover.',
  alternates: { canonical: '/' },
}

/**
 * THE HOMEPAGE IS ONE SCREEN.
 *
 * It was eleven sections. It is now the header and the hero, and everything
 * that was here — how it works, the feature list, the work strip, the case
 * study rail, capabilities, the showcase, the CTA band, the footer — is moving
 * to pages of its own.
 *
 * Nothing was deleted to do that. Every one of those components is still in
 * ./components, still typed against the same globals, and still renders from
 * the same Payload data; they are simply not composed here. Rebuilding any of
 * them into `/about` or `/services` is an import, not a rewrite.
 *
 * WHAT THAT CHANGES ABOUT THE DATA
 * Only the hero's fields are read now, so the four collection queries this
 * page used to fan out are gone with the sections that consumed them. The page
 * is still `force-static`; it just has far less to build.
 */
export const dynamic = 'force-static'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'homepage', depth: 1 })

  return (
    <>
      {/* Server-rendered and CSS-driven, so it covers the first paint rather
          than arriving after it. See Intro. */}
      <Intro />
      {/* Cursor, magnetics and pointer parallax — one frame loop, and it
          declines to run on touch or under reduced-motion. */}
      <PointerFX />
      <RefreshRouteOnSave />

      <Header contactHref={data.email ? `mailto:${data.email}` : undefined} email={data.email} linkedin={data.contactLinkedin} />

      <main id="main">
        <Hero data={data} />
      </main>
    </>
  )
}
