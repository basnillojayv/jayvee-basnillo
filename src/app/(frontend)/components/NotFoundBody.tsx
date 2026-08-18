import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Header } from './Header'
import { Footer } from './Footer'

/**
 * THE 404 PAGE'S CONTENT, WITHOUT A DOCUMENT AROUND IT.
 *
 * It lives here rather than in a `not-found.tsx` because it is rendered from
 * two places that need different amounts of document around it, and one copy
 * of a page that two files render is the only way they stay the same page:
 *
 * · `app/not-found.tsx` — the ROOT boundary, which is what an unmatched URL
 *   reaches. There is no root layout in this app (each route group supplies
 *   its own `<html>`), so that file has to draw the document itself.
 * · `app/(frontend)/not-found.tsx` — the group boundary, which already sits
 *   inside the group's layout and so needs the content alone.
 *
 * Given the site's own chrome rather than Next's bare default, because a 404
 * is most often reached from a stale link or a mistyped URL — which means the
 * visitor wanted something, and this is the moment to hand them the way on
 * rather than a dead end on a blank page.
 */
export const NOT_FOUND_METADATA = {
  title: 'Page not found',
  // Nothing to index, and a 404 in search results helps nobody.
  robots: { index: false, follow: true },
} as const

const LINKS = [
  { href: '/projects', label: 'Projects', note: 'Sites built and shipped' },
  { href: '/designs', label: 'Designs', note: 'Brand systems and studies' },
  { href: '/services', label: 'Services', note: 'How the work runs' },
  { href: '/contact', label: 'Contact', note: 'Start a project' },
]

export async function NotFoundBody() {
  /**
   * The footer needs the homepage global. If the database is unreachable the
   * page still has to render — a 404 that 500s is the one failure worse than
   * the 404 itself.
   */
  let home = null
  try {
    const payload = await getPayload({ config })
    home = await payload.findGlobal({ slug: 'homepage', depth: 1 })
  } catch {
    home = null
  }

  const mailto = home?.email ? `mailto:${home.email}` : '/contact'

  return (
    <>
      <Header contactHref={mailto} email={home?.email} linkedin={home?.contactLinkedin} />

      <main id="main">
        <section className="section page-head">
          <div className="wrap">
            <p className="kicker">
              <span className="kicker__rule" aria-hidden="true" />
              404
            </p>
            <h1 className="designs__title">This page has moved on.</h1>
            <p className="designs__lede">
              The link you followed is out of date, or the address has a typo in it. Here is
              everything else.
            </p>

            <ul className="notfound__links">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="notfound__label">{l.label}</span>
                    <span className="notfound__note">{l.note}</span>
                    <span className="arr" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {home && <Footer data={home} />}
    </>
  )
}
