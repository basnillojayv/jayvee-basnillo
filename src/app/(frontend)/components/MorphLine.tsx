'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { FitLine } from './FitLine'

/**
 * A DISPLAY LINE THAT CHANGES UNDER THE POINTER.
 *
 * A dark disc follows the cursor across the line, and inside it the line reads
 * as something else. The disc lags behind the pointer — that lag is the effect;
 * a disc that tracks exactly is just a spotlight.
 *
 * HOW THE TWO LAYERS STAY ALIGNED
 * This is the part that looks like magic and is only arithmetic. The disc is
 * moved to the pointer, then pulled back by half its own size so its centre
 * lands there. Inside it sits a box the size of the whole line, anchored to the
 * disc's centre and translated by the *negative* of the pointer offset — which
 * puts that box back at the line's origin no matter where the disc has gone.
 * The alternate text is centred in it, so it sits exactly where the real line
 * sits and the disc reads as a window onto a second version of the same words
 * rather than as a bubble carrying its own label around.
 *
 * WHAT IS DIFFERENT FROM THE REFERENCE IMPLEMENTATION
 * · No Tailwind. This project has no Tailwind, no shadcn and no `cn`; the
 *   classes here are plain CSS in globals.css and the sizes come from the
 *   type scale rather than from `text-5xl`.
 * · The frame loop runs only while the pointer is actually over the line.
 *   The original leaves a `requestAnimationFrame` running for the life of the
 *   component, which for two headline lines plus the site's own pointer loop
 *   is three loops competing for every frame to animate nothing.
 * · The disc opens with `clip-path` rather than by animating width and height,
 *   so growing it does not resize a box on every frame. Scaling it was the
 *   other option and is wrong here: a transform would scale the text inside it
 *   too, and the text must hold still for the alignment above to hold.
 *
 * It declines to do anything at all where there is no real pointer, or where
 * the visitor has asked for less motion — see the guards in globals.css.
 */

/** How much of the gap to the pointer the disc closes each frame. */
const EASE = 0.15

export function MorphLine({
  text,
  hoverText,
  className,
}: {
  text: string
  hoverText: string
  className?: string
}) {
  const container = useRef<HTMLSpanElement>(null)
  const disc = useRef<HTMLSpanElement>(null)
  const inner = useRef<HTMLSpanElement>(null)
  const [on, setOn] = useState(false)
  const [box, setBox] = useState({ w: 0, h: 0 })

  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  // The inner box has to be the size of the line, and the line's size is
  // decided after paint by FitLine — so it is observed rather than measured
  // once. Retyping the headline changes it too.
  useEffect(() => {
    const el = container.current
    if (!el) return
    const ro = new ResizeObserver(() => setBox({ w: el.offsetWidth, h: el.offsetHeight }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Only while hovered. There is nothing to interpolate the rest of the time.
  useEffect(() => {
    if (!on) return
    let frame = 0
    const lerp = (a: number, b: number, f: number) => a + (b - a) * f
    const tick = () => {
      frame = requestAnimationFrame(tick)
      pos.current.x = lerp(pos.current.x, target.current.x, EASE)
      pos.current.y = lerp(pos.current.y, target.current.y, EASE)
      if (disc.current) {
        disc.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      if (inner.current) {
        inner.current.style.transform = `translate(${-pos.current.x}px, ${-pos.current.y}px)`
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [on])

  const at = (e: React.PointerEvent<HTMLSpanElement>) => {
    const r = container.current!.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }

  const onMove = useCallback((e: React.PointerEvent<HTMLSpanElement>) => {
    if (!container.current) return
    target.current = at(e)
  }, [])

  const onEnter = useCallback((e: React.PointerEvent<HTMLSpanElement>) => {
    if (!container.current) return
    // Seed both, so the disc opens where the pointer crossed the edge instead
    // of flying in from wherever it was left last time.
    const p = at(e)
    target.current = p
    pos.current = { ...p }
    setOn(true)
  }, [])

  const onLeave = useCallback(() => setOn(false), [])

  return (
    <span
      ref={container}
      className={['morph', className].filter(Boolean).join(' ')}
      data-on={on}
      onPointerMove={onMove}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      <FitLine className="hero__line-text morph__base">{text}</FitLine>

      <span className="morph__disc" ref={disc} aria-hidden="true">
        <span
          className="morph__inner"
          ref={inner}
          style={{ width: box.w || undefined, height: box.h || undefined }}
        >
          <span className="hero__line-text morph__alt">{hoverText}</span>
        </span>
      </span>
    </span>
  )
}
