'use client'

import { useEffect } from 'react'

/**
 * Adds `.is-in` to every `.reveal` element as it scrolls into view — a direct
 * port of the static site's IntersectionObserver, respecting reduced-motion.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const sibs = Array.from(
            el.parentElement?.querySelectorAll(':scope > .reveal') ?? [],
          )
          const idx = sibs.indexOf(el)
          el.style.transitionDelay = (idx > 0 ? Math.min(idx, 6) * 70 : 0) + 'ms'
          el.classList.add('is-in')
          io.unobserve(el)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => io.observe(el))

    // Safety net: after 1.6s reveal anything still hidden that's already in or
    // near the viewport (so on-screen content never ships blank) — but leave
    // below-the-fold elements to the observer so their scroll entrance survives.
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => {
        if (el.classList.contains('is-in')) return
        if (el.getBoundingClientRect().top < window.innerHeight * 1.1) el.classList.add('is-in')
      })
    }, 1600)

    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  return null
}
