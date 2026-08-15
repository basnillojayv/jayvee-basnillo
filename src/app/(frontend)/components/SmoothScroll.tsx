'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Interpolates scroll input (wheel/touchpad) so the sticky section-stacking
 * transitions glide instead of snapping. Compatible with position:sticky
 * because Lenis drives the real document scroll. Off for reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.15,
      // ease-out-expo: confident, no bounce
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // smooth in-page anchor jumps (nav links) too
      anchors: { offset: 0, onComplete: () => {} },
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return null
}
