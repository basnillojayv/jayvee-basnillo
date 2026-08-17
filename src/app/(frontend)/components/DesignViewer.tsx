'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type DesignShot = { id: string | number; src: string; title: string; editKey: string }

/**
 * THE DESIGNS, AND A WAY TO ACTUALLY LOOK AT ONE.
 *
 * A grid of 400px tiles is a contact sheet: it tells you a piece exists and
 * nothing about it. These are full site designs — the detail *is* the work —
 * so clicking one opens it at full size.
 *
 * WHY NATIVE `<dialog>` RATHER THAN A DIV WITH A HIGH Z-INDEX
 * `showModal()` brings four things that are tedious and easy to get wrong by
 * hand: focus moves into the dialog and is trapped there, Escape closes it,
 * everything behind it goes inert to both the pointer and the screen reader,
 * and it renders in the top layer so no stacking context can clip it. The
 * hand-built version of this is the classic modal that a keyboard user can
 * tab straight out of, behind the overlay.
 *
 * WHY THE TILES ARE BUTTONS
 * They do not navigate — there is no page for a design — so a link would be
 * lying about what happens. A button says "this does something here", which
 * is exactly what it does.
 *
 * ZOOM IS A TOGGLE, NOT A PINCH GESTURE. The image opens fitted to the
 * viewport, and one click switches to full resolution with the browser's own
 * scrolling. Custom pan-and-zoom means reimplementing momentum, bounds and
 * two-finger input that every browser already has.
 */
export function DesignViewer({ shots }: { shots: DesignShot[] }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [at, setAt] = useState<number | null>(null)
  const [zoomed, setZoomed] = useState(false)

  const open = (i: number) => {
    setAt(i)
    setZoomed(false)
    dialog.current?.showModal()
  }

  const close = useCallback(() => {
    dialog.current?.close()
    setAt(null)
  }, [])

  const step = useCallback(
    (dir: 1 | -1) => {
      setZoomed(false)
      setAt((n) => (n === null ? n : (n + dir + shots.length) % shots.length))
    },
    [shots.length],
  )

  // Arrow keys page through the set. Escape is handled by <dialog> itself.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (at === null) return
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [at, step])

  // The page must not scroll behind an open dialog.
  useEffect(() => {
    document.body.style.overflow = at === null ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [at])

  const current = at === null ? null : shots[at]

  return (
    <>
      <ul className="designs__grid">
        {shots.map((s, i) => (
          <li key={s.id}>
            <button className="designtile" type="button" onClick={() => open(i)}>
              <span className="designtile__media">
                <Image
                  src={s.src}
                  alt={s.title}
                  width={900}
                  height={690}
                  sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px"
                  priority={i < 3}
                  data-edit-key={s.editKey}
                />
                <span className="designtile__zoom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M15.8 15.8 20 20M11 8.6v4.8M8.6 11h4.8" />
                  </svg>
                </span>
              </span>
              <span className="designtile__name">{s.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog className="viewer" ref={dialog} onClose={() => setAt(null)}>
        {current && (
          <div className="viewer__inner">
            <div className="viewer__bar">
              <p className="viewer__title">{current.title}</p>
              <p className="viewer__count">
                {(at ?? 0) + 1} / {shots.length}
              </p>
              <button className="viewer__x" type="button" onClick={close} aria-label="Close">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="viewer__stage" data-zoom={zoomed}>
              {/* Unoptimised at full size on purpose: the whole reason to open
                  this is to inspect the real thing. */}
              <img
                src={current.src}
                alt={current.title}
                onClick={() => setZoomed((z) => !z)}
                title={zoomed ? 'Click to fit' : 'Click to zoom'}
              />
            </div>

            {shots.length > 1 && (
              <>
                <button className="viewer__nav viewer__nav--prev" type="button"
                  onClick={() => step(-1)} aria-label="Previous design">‹</button>
                <button className="viewer__nav viewer__nav--next" type="button"
                  onClick={() => step(1)} aria-label="Next design">›</button>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  )
}
