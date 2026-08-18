'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

/**
 * The bar pinned to the bottom of a phone.
 *
 * On a small screen the header's "Get in touch" is folded into the drawer, so
 * without this the highest-intent action on the site is two taps away from
 * every page. This puts it back at zero.
 *
 * WHY IT WAITS FOR THE HERO TO LEAVE
 * The homepage hero already carries "Start a project" as one of its two
 * buttons. Pinned from the first frame, this bar sat directly on top of it —
 * the same action twice, one covering the other. So on any page with a hero it
 * holds back until the hero has scrolled away, which is exactly the moment the
 * page stops offering a CTA of its own. Pages without a hero show it at once,
 * because there is nothing for it to compete with.
 *
 * WHERE IT NEVER APPEARS
 * On /contact and /thank-you it would point at the page you are already on, and
 * on /edit it would sit over the editing toolbar. A persistent control that is
 * sometimes a no-op teaches people to ignore it.
 */
const HIDDEN_ON = ['/contact', '/thank-you', '/edit']

export function StickyCta() {
  const pathname = usePathname()
  const hidden = HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (hidden) return

    const hero = document.querySelector('.hero')
    if (!hero) {
      setShown(true)
      return
    }

    /**
     * Fires when the hero's last pixel leaves the top of the viewport. Watching
     * the hero itself rather than a scroll offset means this keeps working if
     * the hero's height changes — which it does, since it is sized in svh.
     */
    const observer = new IntersectionObserver(([entry]) => setShown(!entry.isIntersecting), {
      rootMargin: '0px 0px -100% 0px',
    })

    observer.observe(hero)
    return () => observer.disconnect()
  }, [hidden, pathname])

  if (hidden) return null

  return (
    <div className="sticky-cta" data-shown={shown} aria-hidden={!shown}>
      <Link className="sticky-cta__btn" href="/contact" tabIndex={shown ? undefined : -1}>
        Start a project
        <span className="arr" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  )
}
