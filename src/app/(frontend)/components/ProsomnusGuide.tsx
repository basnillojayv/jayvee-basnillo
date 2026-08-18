'use client'

import dynamic from 'next/dynamic'

/**
 * Loads the brand guide in the browser only.
 *
 * The vendored component bundle touches `window` at module scope, so it cannot
 * be evaluated during prerender — `ssr: false` is a statement about that
 * bundle, not about this route, which is still static. The boundary has to sit
 * in a client component because `ssr: false` is not allowed from a server one.
 *
 * The placeholder holds the guide's height so the footer does not jump up and
 * then back down as it arrives.
 */
const Guide = dynamic(() => import('../design-systems/prosomnus/_guide/Guide'), {
  ssr: false,
  loading: () => (
    <div className="psguide__loading" role="status">
      Loading the guide…
    </div>
  ),
})

export function ProsomnusGuide() {
  return <Guide />
}
