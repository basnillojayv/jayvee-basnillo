'use client'

import { useEffect, useRef } from 'react'

/**
 * ONE LINE, SET TO EXACTLY THE WIDTH OF THE COLUMN.
 *
 * The reference's hero works because both display lines run edge to edge. That
 * is not something a `clamp()` can do: a clamp sizes on the *viewport*, so the
 * moment the words change length the line stops meeting the margins. "Strategic
 * Designer" and "Web Architect" differ by four characters, which at this size
 * is about 90px of slack — visible immediately, and the whole effect depends on
 * it not being there.
 *
 * So it is measured. Set the line at a known size, read how wide it actually
 * came out, and scale the size by the ratio it missed the container by.
 *
 * WHY IT RE-MEASURES ON MUTATION
 * The copy is click-to-edit on the live page. Someone retyping the headline is
 * exactly when the fit stops being right, and a `ResizeObserver` alone will not
 * catch it — the element's width is pinned by the container, so a longer word
 * changes the *overflow*, not the box. The `MutationObserver` on the character
 * data is what makes the line resize under the cursor as it is typed.
 *
 * WHY THE CSS STILL CARRIES A CLAMP
 * This runs after paint. Between the server's HTML and the first measurement
 * the stylesheet's `clamp()` is what is on screen, so it is set close enough
 * that the correction is not a visible jump — and it is what the line stays at
 * for anyone whose JS never arrives.
 */
export function FitLine({
  children,
  className,
  /** Ceiling in px. Stops one short word from becoming absurd on a wide screen. */
  max = 260,
  /** Floor in px. */
  min = 32,
}: {
  children: React.ReactNode
  className?: string
  max?: number
  min?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    const box = el?.parentElement
    if (!el || !box) return

    let frame = 0
    const fit = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const avail = box.clientWidth
        if (!avail) return
        // Measure at a fixed reference size, then scale by how far off it was.
        // 100px is arbitrary but large enough that hinting and rounding are a
        // rounding error rather than a percentage.
        el.style.fontSize = '100px'
        /**
         * `getBoundingClientRect`, and the element is `inline-block`, and both
         * halves of that matter.
         *
         * `scrollWidth` is the obvious reading and it is silently wrong here:
         * on a block-level element it never reports less than the element's own
         * client width, so a short line inside a full-width box measures as the
         * box. Every line then "fits" at exactly the reference size and the
         * whole mechanism does nothing — which is not an error anyone sees,
         * just two lines that quietly refuse to reach the margins.
         *
         * Shrink-wrapping the element is what makes the measurement mean
         * something, and the rect is what reads it back sub-pixel.
         */
        const natural = el.getBoundingClientRect().width
        el.style.removeProperty('font-size')
        if (!natural) return
        const next = Math.max(min, Math.min(max, (avail / natural) * 100))
        /**
         * Published as a variable on the *parent* rather than as a font-size on
         * the element, because the size is needed by more than the text: the
         * leading between the two lines and the weight of the outline stroke
         * are both fractions of it. Writing it here lets the stylesheet express
         * those as `calc(var(--fit) * …)` and keeps every number that depends
         * on the fit in one place — the stylesheet — instead of splitting them
         * between here and there.
         */
        box.style.setProperty('--fit', next.toFixed(2) + 'px')
      })
    }

    fit()

    const ro = new ResizeObserver(fit)
    ro.observe(box)

    const mo = new MutationObserver(fit)
    mo.observe(el, { characterData: true, childList: true, subtree: true })

    // Webfonts land after first paint, and the metrics they land with are not
    // the fallback's. Without this the line is fitted to Arial and then
    // rendered in Inter Tight.
    document.fonts?.ready.then(fit).catch(() => {})

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      mo.disconnect()
    }
  }, [max, min])

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  )
}
