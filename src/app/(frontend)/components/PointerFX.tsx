'use client'

import { useEffect } from 'react'

/**
 * EVERY POINTER EFFECT ON THE PAGE, ON ONE FRAME LOOP.
 *
 * Three behaviours ship together here rather than as three components:
 *
 * · CURSOR — a small filled dot that tracks exactly, and a ring that lags
 *   behind it. The lag is the entire effect; a ring that tracks exactly is
 *   just a bigger cursor.
 * · MAGNETIC — `[data-magnetic]` elements lean toward the pointer as it nears
 *   them, and snap back when it leaves.
 * · PARALLAX — `[data-parallax]` layers drift against pointer position, so the
 *   portrait and the type behind it separate as you move.
 *
 * WHY ONE COMPONENT
 * Each of these wants pointer position every frame. Written separately that is
 * three `mousemove` listeners and three `requestAnimationFrame` loops fighting
 * for the same frame, and the symptom is the ring stuttering whenever a
 * magnetic button is also easing. One listener stores coordinates, one loop
 * spends them.
 *
 * WHY IT WRITES CSS VARIABLES RATHER THAN STYLES
 * The loop sets `--x`/`--y` and lets the stylesheet decide what to do with
 * them. Retuning how far a layer drifts is then a CSS edit, not a code edit,
 * and the transform stays in one place instead of being split between a
 * stylesheet that sets the resting state and JS that overwrites it.
 *
 * WHEN IT DOES NOTHING
 * Coarse pointers (every touch device) and `prefers-reduced-motion` both bail
 * before a single listener is attached — no custom cursor, no drift, and the
 * real cursor is never hidden. The stylesheet keeps `cursor: none` behind
 * `.has-cursor`, which only ever appears when this decides to run, so a phone
 * or a reduced-motion visitor can never end up with no pointer at all.
 */

/** How far behind the dot the ring trails. Lower is looser. */
const RING_EASE = 0.16
/** Pointer distance, in px, at which a magnetic element starts to lean. */
const MAGNET_RADIUS = 90
/** Fraction of the pointer offset a magnetic element travels. */
const MAGNET_PULL = 0.32
/** How quickly magnetic elements ease toward their target. */
const MAGNET_EASE = 0.18

type Magnet = {
  el: HTMLElement
  /** current offset */
  x: number
  y: number
  /** target offset */
  tx: number
  ty: number
}

export function PointerFX() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const root = document.documentElement

    // ---- the cursor's two parts -------------------------------------------
    const dot = document.createElement('div')
    dot.className = 'cursor cursor--dot'
    const ring = document.createElement('div')
    ring.className = 'cursor cursor--ring'
    document.body.append(dot, ring)
    root.classList.add('has-cursor')

    // ---- state the loop spends --------------------------------------------
    // Start centred rather than at 0,0 so nothing flies in from the corner on
    // the first frame if the pointer has not moved yet.
    let px = window.innerWidth / 2
    let py = window.innerHeight / 2
    let rx = px
    let ry = py
    let seen = false

    const magnets: Magnet[] = Array.from(
      document.querySelectorAll<HTMLElement>('[data-magnetic]'),
    ).map((el) => ({ el, x: 0, y: 0, tx: 0, ty: 0 }))

    const onMove = (e: PointerEvent) => {
      px = e.clientX
      py = e.clientY
      if (!seen) {
        // Put the ring under the pointer the first time we hear from it, so it
        // eases from where the pointer is rather than from the centre.
        rx = px
        ry = py
        seen = true
        root.classList.add('has-cursor--live')
      }
    }

    // Hover state is delegated: one listener on the document rather than one
    // per link, so anything rendered later — the mobile drawer, an edited
    // page — is picked up without re-binding.
    const HOVERABLE = 'a, button, [data-cursor]'
    const onOver = (e: PointerEvent) => {
      const hit = (e.target as Element | null)?.closest?.(HOVERABLE)
      if (!hit) return
      root.classList.add('is-hovering')
      const label = hit.getAttribute('data-cursor')
      if (label) ring.dataset.label = label
    }
    const onOut = (e: PointerEvent) => {
      const hit = (e.target as Element | null)?.closest?.(HOVERABLE)
      if (!hit) return
      // Ignore moves *within* the same hoverable — only a real exit counts.
      const to = (e.relatedTarget as Element | null)?.closest?.(HOVERABLE)
      if (to === hit) return
      root.classList.remove('is-hovering')
      delete ring.dataset.label
    }

    // Leaving the window entirely: park the cursor rather than freezing it
    // mid-flight at the edge.
    const onLeave = () => root.classList.remove('has-cursor--live')
    const onEnter = () => root.classList.add('has-cursor--live')

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerout', onOut, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('pointerenter', onEnter)

    let frame = 0
    const tick = () => {
      frame = requestAnimationFrame(tick)

      // dot: exact. ring: chasing.
      dot.style.transform = `translate3d(${px}px, ${py}px, 0)`
      rx += (px - rx) * RING_EASE
      ry += (py - ry) * RING_EASE
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`

      // parallax: pointer offset from the centre of the viewport, normalised
      // to -1..1, handed to the stylesheet.
      root.style.setProperty('--px', ((px / window.innerWidth) * 2 - 1).toFixed(4))
      root.style.setProperty('--py', ((py / window.innerHeight) * 2 - 1).toFixed(4))

      // magnetic: measured every frame on purpose. These sit in a hero that
      // moves during its own entrance, and a rect cached at mount is wrong for
      // the first two seconds of the page's life.
      for (const m of magnets) {
        const r = m.el.getBoundingClientRect()
        const dx = px - (r.left + r.width / 2)
        const dy = py - (r.top + r.height / 2)
        const near = Math.hypot(dx, dy) < Math.max(r.width, r.height) / 2 + MAGNET_RADIUS
        m.tx = near ? dx * MAGNET_PULL : 0
        m.ty = near ? dy * MAGNET_PULL : 0
        m.x += (m.tx - m.x) * MAGNET_EASE
        m.y += (m.ty - m.y) * MAGNET_EASE
        // Below a twentieth of a pixel this is invisible; zeroing it keeps the
        // element from holding a subpixel transform forever.
        if (Math.abs(m.x) < 0.05 && Math.abs(m.y) < 0.05) {
          m.x = 0
          m.y = 0
        }
        m.el.style.setProperty('--mx', m.x.toFixed(2) + 'px')
        m.el.style.setProperty('--my', m.y.toFixed(2) + 'px')
      }
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('pointerenter', onEnter)
      root.classList.remove('has-cursor', 'has-cursor--live', 'is-hovering')
      root.style.removeProperty('--px')
      root.style.removeProperty('--py')
      for (const m of magnets) {
        m.el.style.removeProperty('--mx')
        m.el.style.removeProperty('--my')
      }
      dot.remove()
      ring.remove()
    }
  }, [])

  return null
}
