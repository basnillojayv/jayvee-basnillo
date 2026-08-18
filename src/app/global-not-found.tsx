import type { Metadata, Viewport } from 'next'

import { sans, mono } from './(frontend)/fonts'
import { NotFoundBody, NOT_FOUND_METADATA } from './(frontend)/components/NotFoundBody'
import { site } from '@/site.config'
import './(frontend)/globals.css'

/**
 * THE ROOT NOT-FOUND, AND WHY A CATCH-ALL ROUTE IS NOT THE SAME THING.
 *
 * An unmatched URL used to be caught by `(frontend)/[...notFound]/page.tsx`,
 * which called `notFound()`. It rendered the right page and returned the wrong
 * status: 200, a soft 404, which search engines index as a real page. Every
 * typo'd address was an indexable duplicate.
 *
 * The cause is in Next's own render path. It sets 404 for an unmatched URL by
 * routing it to an internal `/404` page — but a catch-all route *matches*, so
 * that path was never reached, and a `notFound()` caught by a boundary inside
 * a matched render never sets a status at all. The catch-all was answering the
 * request Next needed to answer itself.
 *
 * So the catch-all is gone and this file takes its place. Next reaches for the
 * ROOT not-found for an unmatched URL — not the one inside the route group —
 * and without this file that meant Next's own bare "404: This page could not
 * be found", losing the header, the footer and the way back.
 *
 * WHY IT DRAWS ITS OWN DOCUMENT
 * This app has no root layout: `(frontend)` and `(payload)` each supply their
 * own `<html>`, which is the supported way to run two roots and is why there
 * is nothing above them to inherit from. A root not-found sits outside both,
 * so the `<html>`, the font variables and the stylesheet have to be repeated
 * here. The fonts come from the same module the layout uses rather than a
 * second `localFont` call, so the two cannot drift apart.
 *
 * WHAT THIS DOES NOT FIX
 * `notFound()` thrown from a matched route — a project slug that does not
 * exist — still answers 200. That is Next's behaviour for a boundary inside a
 * matched render, and the alternative, `dynamicParams = false`, means a
 * project added in the CMS 404s until the next deploy. Those routes set
 * `robots: noindex` on the miss instead, which is what keeps a typo'd slug out
 * of an index.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...NOT_FOUND_METADATA,
}

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: 'light',
}

export default function RootNotFound() {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <NotFoundBody />
      </body>
    </html>
  )
}
