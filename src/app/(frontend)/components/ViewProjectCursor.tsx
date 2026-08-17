'use client'

import { useEffect, useRef } from 'react'

/**
 * A "VIEW PROJECT" DISC THAT TRAILS THE POINTER OVER THE GRID.
 *
 * WHY THIS IS NOT THE CURSOR THAT GOT REMOVED
 * The earlier custom cursor was replaced wholesale because it made buttons
 * annoying to click. That one sat under the pointer everywhere on the site and
 * took hit-testing with it. This disc has `pointer-events: none`, so it cannot
 * receive a click even in principle — every press lands on the card underneath —
 * and it only exists inside the projects grid. The native cursor is hidden over
 * the cards and nowhere else.
 *
 * WHY A rAF LERP RATHER THAN A CSS TRANSITION
 * A transition restarts on every mousemove, so it re-eases from a standstill
 * dozens of times a second and the disc stutters behind fast movement. Easing a
 * position toward the pointer once per frame is continuous: it lags under speed,
 * catches up when the pointer settles, and never restarts. The loop only runs
 * while the pointer is over the grid.
 *
 * WHY transform AND NOT top/left
 * `translate3d` is compositor-only. Writing `top`/`left` at pointer frequency
 * lays out the page on every frame.
 *
 * Falls back to nothing at all — no listeners, no element, native cursor intact —
 * on touch, on coarse pointers and under prefers-reduced-motion, where a disc
 * chasing a pointer that does not exist is noise.
 */
export function ViewProjectCursor({
  label = 'View project',
  scope = '.pgrid',
  target = '.pcard__link',
}: {
  label?: string
  scope?: string
  target?: string
}) {
  const disc = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const root = document.querySelector<HTMLElement>(scope)
    const el = disc.current
    if (!root || !el) return

    // Current drawn position vs. where the pointer actually is.
    let x = 0
    let y = 0
    let toX = 0
    let toY = 0
    let raf = 0
    let active = false

    const frame = () => {
      // Ease a fixed fraction of the remaining distance each frame.
      x += (toX - x) * 0.18
      y += (toY - y) * 0.18
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      raf = active ? requestAnimationFrame(frame) : 0
    }

    const onMove = (e: PointerEvent) => {
      toX = e.clientX
      toY = e.clientY

      const over = (e.target as HTMLElement)?.closest?.(target)
      if (over && !active) {
        // Jump to the pointer on entry so it does not fly in from the last spot.
        x = toX
        y = toY
        active = true
        el.dataset.on = 'true'
        raf = requestAnimationFrame(frame)
      } else if (!over && active) {
        active = false
        el.dataset.on = 'false'
      }
    }

    const onLeave = () => {
      active = false
      el.dataset.on = 'false'
    }

    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerleave', onLeave)
    // A click navigates; without this the disc is still showing on return.
    root.addEventListener('click', onLeave)

    return () => {
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerleave', onLeave)
      root.removeEventListener('click', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [scope, target])

  return (
    <div className="viewcursor" ref={disc} data-on="false" aria-hidden="true">
      <span className="viewcursor__label">{label}</span>
      <svg viewBox="0 0 24 24" width="14" height="14" focusable="false" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h13" />
          <path d="M12 5.5 18.5 12 12 18.5" />
        </g>
      </svg>
    </div>
  )
}
