import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from './Header'
import { Footer } from './Footer'

/**
 * The shell both legal pages share.
 *
 * One component because the two differ only in their words: same header, same
 * measure, same footer. Keeping them as two copies of a layout is how one of
 * them ends up with a stale header six months from now.
 */
export async function LegalPage({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string
  title: string
  updated: string
  children: React.ReactNode
}) {
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
              {kicker}
            </p>
            <h1 className="designs__title">{title}</h1>
            {/* A date a reader can check, not "last updated recently". */}
            <p className="legal__updated">Last updated {updated}</p>
            <div className="legal">{children}</div>
          </div>
        </section>
      </main>

      <Footer data={home} />
    </>
  )
}
