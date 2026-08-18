'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

/**
 * The bar pinned to the bottom of a phone.
 *
 * On a small screen the header's "Get in touch" is folded into the drawer, so
 * without this the highest-intent action on the site is two taps away from
 * every page. This puts it back at zero.
 *
 * WHERE IT DOES NOT APPEAR
 * On /contact and /thank-you it would point at the page you are already on,
 * and on /edit it would sit over the editing toolbar. A persistent control that
 * is sometimes a no-op teaches people to ignore it.
 *
 * Visibility is CSS, not JS: the bar is display:none above the phone
 * breakpoint, so no listener runs and nothing reflows on resize.
 */
const HIDDEN_ON = ['/contact', '/thank-you', '/edit']

export function StickyCta() {
  const pathname = usePathname()
  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null

  return (
    <div className="sticky-cta">
      <Link className="sticky-cta__btn" href="/contact">
        Start a project
        <span className="arr" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  )
}
