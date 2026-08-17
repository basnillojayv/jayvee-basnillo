'use client'

import { useEffect } from 'react'

/**
 * POINTER PARALLAX, AND NOTHING ELSE ANY MORE.
 *
 * WHAT THIS USED TO DO, AND WHY IT DOESN'T
 *
 * · A CUSTOM CURSOR. A dot tracking the pointer, a ring lagging behind it, and
 *   `cursor: none` on the document to hide the real one. It looked good in a
 *   screenshot and cost the visitor the one piece of interface every operating
 *   system guarantees them. The ring lags by design, so at the moment you are
 *   aiming, the thing representing your pointer is *not where your pointer is*.
 *
 * · MAGNETIC BUTTONS. Elements leaning toward the pointer as it approached.
 *   This is the one that made buttons genuinely hard to click, and it is worth
 *   naming precisely: the target moved toward the cursor, so the cursor
 *   overshot, so the target moved again. Pointing at something is a closed
 *   loop between hand and eye, and a target that moves in response to being
 *   aimed at breaks it. Fitts's law assumes the target holds still.
 *
 * Both were decoration on top of the two controls the page most needs to get
 * right. Neither is worth a millisecond of hesitation before a click.
 *
 * WHAT SURVIVES
 * Drift. The hero's type and portrait separate slightly as the pointer moves,
 * which is purely atmospheric: it touches no control, moves no target, and
 * needs no accuracy from anyone. It publishes two numbers and lets the
 * stylesheet decide what to do with them, so how far anything travels is a CSS
 * edit rather than a code one.
 *
 * It still declines to run on coarse pointers and under reduced motion.
 */
export function PointerFX() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const root = document.documentElement
    let px = window.innerWidth / 2
    let py = window.innerHeight / 2
    let frame = 0
    let queued = false

    const onMove = (e: PointerEvent) => {
      px = e.clientX
      py = e.clientY
      // Coalesce to one write per frame. A pointermove can fire far more often
      // than the display refreshes, and every extra write is a style
      // recalculation nobody sees.
      if (queued) return
      queued = true
      frame = requestAnimationFrame(() => {
        queued = false
        root.style.setProperty('--px', ((px / window.innerWidth) * 2 - 1).toFixed(4))
        root.style.setProperty('--py', ((py / window.innerHeight) * 2 - 1).toFixed(4))
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      root.style.removeProperty('--px')
      root.style.removeProperty('--py')
    }
  }, [])

  return null
}
