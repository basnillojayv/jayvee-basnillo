import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

/**
 * Where the contact form lands once it has been sent.
 *
 * A real route rather than swapping the form for a success message in place,
 * for two reasons: it gives the send its own URL, so analytics can count
 * completed enquiries as a page rather than an event nobody wired up; and it
 * survives a refresh, where an in-place message would put the empty form back
 * and leave someone wondering whether it went.
 */
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your project enquiry has been sent.',
  // Not a landing page — it should never turn up in a search result.
  robots: { index: false, follow: false },
}

export default async function ThankYouPage() {
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'homepage', depth: 1 })
  const mailto = home.email ? `mailto:${home.email}` : '/contact'

  return (
    <>
      <Header contactHref={mailto} />

      <main id="main">
        <section className="section page-head">
          <div className="wrap">
            <p className="kicker">
              <span className="kicker__rule" aria-hidden="true" />
              Enquiry sent
            </p>
            <h1 className="designs__title">Thanks — that came through.</h1>
            <p className="designs__lede">
              I read every enquiry myself and reply within two working days. If it is urgent,
              email is the fastest way to reach me
              {home.email ? (
                <>
                  {' '}
                  at <a href={`mailto:${home.email}`}>{home.email}</a>
                </>
              ) : null}
              .
            </p>

            <p className="thanks__actions">
              <Link className="btn btn--accent btn--lg" href="/projects">
                See the work
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link className="btn btn--outline btn--lg" href="/">
                Back to the homepage
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer data={home} />
    </>
  )
}
