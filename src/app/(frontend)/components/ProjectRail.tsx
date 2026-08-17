'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/payload-types'
import { mediaUrl } from './util'
import { AccentStop } from './AccentStop'

/**
 * THE DARK BAND: A CLAIM, A ROUTE OUT, AND CARDS YOU PUSH THROUGH.
 *
 * SCROLL IS THE SOURCE OF TRUTH
 * The arrows and dots do not drive an index the rail then obeys. They scroll
 * the rail, and a scroll listener works out where it is. Dragging, a trackpad
 * swipe, shift-wheel and the controls all become the same thing — a scroll
 * position — so the controls can never disagree with what is on screen.
 *
 * THE DOTS ARE BUTTONS, NOT DECORATION
 * A row of dots that only reports position is a progress bar wearing a
 * control's clothing: it looks pressable, so people press it. They page the
 * rail, they are in the tab order, and the current one is marked
 * `aria-current` rather than by colour alone.
 *
 * The chip carries the project's category, which is the one piece of metadata
 * a visitor sorts by — "is this the kind of work I need?" — and the only one
 * worth spending space on before the click.
 */
export function ProjectRail({
  eyebrow,
  title,
  lede,
  ctaLabel,
  items,
}: {
  eyebrow?: string | null
  title?: string | null
  lede?: string | null
  ctaLabel?: string | null
  items: Project[]
}) {
  const rail = useRef<HTMLUListElement>(null)
  const pin = useRef<HTMLElement>(null)
  const shift = useRef(0)
  const [pinned, setPinned] = useState(false)
  const [at, setAt] = useState({ start: true, end: false, index: 0 })

  const sync = useCallback(() => {
    const el = rail.current
    if (!el) return
    const cards = Array.from(el.children) as HTMLElement[]
    const mid = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let gap = Infinity
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid)
      if (d < gap) {
        gap = d
        best = i
      }
    })
    // A pixel of tolerance: sub-pixel scroll positions leave the end arrow
    // enabled on a rail already at its end.
    setAt({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft >= el.scrollWidth - el.clientWidth - 1,
      index: best,
    })
  }, [])

  useEffect(() => {
    const el = rail.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  /**
   * THE PIN: THE SECTION HOLDS THE SCREEN AND SCROLL DRIVES THE CARDS SIDEWAYS.
   *
   * The section is given extra height — one viewport plus exactly the distance
   * the rail has to travel — and a sticky stage inside it holds at the top for
   * that whole stretch. Vertical distance is then mapped 1:1 onto `scrollLeft`,
   * so a pixel of page scroll is a pixel of card movement and the release comes
   * the instant the last card lands. Nothing is intercepted: no `preventDefault`,
   * no wheel handler, no scroll library. The page scrolls normally the whole
   * time and the rail is a readout of where it has got to.
   *
   * WHY scrollLeft AND NOT A TRANSFORM
   * The rail already treats scroll position as its source of truth — the dots
   * and arrows read it. Translating a track instead would leave that machinery
   * driving a value nothing displays, so the dots would stop matching the cards.
   *
   * Snap has to go while this is live. `scroll-snap-type: x mandatory` re-snaps
   * after every programmatic write, so the browser would fight the scroll for
   * the position on every frame; the CSS drops it to `none` while pinned.
   *
   * The whole thing is off below 769px and under reduced motion, where the rail
   * stays the ordinary swipeable, snapping carousel it already was.
   */
  useEffect(() => {
    const section = pin.current
    const track = rail.current
    if (!section || !track) return

    const wide = window.matchMedia('(min-width: 769px)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf = 0
    let live = false

    const measure = () => {
      const room = track.scrollWidth - track.clientWidth
      // Nothing to pin for if the cards already fit, and nothing to pin at all
      // on narrow screens or for someone who asked for less movement.
      if (!wide.matches || still.matches || room <= 0) {
        shift.current = 0
        section.style.height = ''
        setPinned(false)
        return
      }
      shift.current = room
      section.style.height = `${window.innerHeight + room}px`
      setPinned(true)
    }

    /**
     * Read geometry every frame rather than listening for `scroll`.
     *
     * The first version of this listened on window and never fired usefully:
     * Lenis owns the wheel, and a handler waiting to be told that scrolling
     * happened is at the mercy of whatever is doing the scrolling. Measuring
     * the section's own position instead asks the only question that matters —
     * where is this on screen right now — and gets the same answer whether the
     * scroll came from Lenis, a keyboard, a scrollbar drag or a jump to #work.
     *
     * The loop is gated by an IntersectionObserver, so it runs only while the
     * section is near the viewport rather than for the life of the page.
     */
    const frame = () => {
      const room = shift.current
      if (room > 0) {
        const past = -section.getBoundingClientRect().top
        const want = Math.min(Math.max(past, 0), room)
        // Writing an unchanged value still invalidates scroll state, so only
        // touch it when it actually moved.
        if (Math.abs(track.scrollLeft - want) > 0.5) track.scrollLeft = want
      }
      raf = live ? requestAnimationFrame(frame) : 0
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        live = entry.isIntersecting
        if (live && !raf) raf = requestAnimationFrame(frame)
      },
      // A viewport of slack on each side, so the rail is already tracking by
      // the time its first pixel arrives.
      { rootMargin: '100% 0px 100% 0px' },
    )

    measure()
    io.observe(section)
    window.addEventListener('resize', measure)
    wide.addEventListener('change', measure)
    still.addEventListener('change', measure)

    return () => {
      io.disconnect()
      live = false
      window.removeEventListener('resize', measure)
      wide.removeEventListener('change', measure)
      still.removeEventListener('change', measure)
      if (raf) cancelAnimationFrame(raf)
      section.style.height = ''
    }
  }, [items.length])

  /**
   * While pinned, the controls move the PAGE rather than the rail.
   *
   * Scrolling the rail directly would work for one frame and then be overwritten
   * by the next scroll event, because page position is what decides `scrollLeft`
   * in this mode. Moving the page to the offset that corresponds to a card gets
   * there and stays, and leaves one source of truth rather than two arguing.
   */
  const goTo = (left: number) => {
    const el = rail.current
    const section = pin.current
    if (!el) return
    const room = shift.current
    const target = Math.min(Math.max(left, 0), room || left)

    if (!pinned || !section || !room) {
      el.scrollTo({ left: target, behavior: 'smooth' })
      return
    }
    const top = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + target, behavior: 'smooth' })
  }

  const toCard = (i: number) => {
    const el = rail.current
    const card = el?.children[i] as HTMLElement | undefined
    if (!el || !card) return
    goTo(card.offsetLeft - el.offsetLeft)
  }

  const step = (dir: 1 | -1) => {
    const el = rail.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    // Read the card width off the DOM so the responsive value lives only in CSS.
    const by = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    goTo(el.scrollLeft + by * dir)
  }

  if (items.length === 0) return null

  return (
    <section className="rail" id="work" ref={pin} data-pinned={pinned}>
      {/* Everything the section shows lives in the stage, which is what sticks.
          The section itself only supplies the extra height that the pin is
          measured against. */}
      <div className="rail__stage">
      <div className="wrap rail__head">
        <div className="rail__intro">
          {eyebrow && <p className="kicker reveal">{eyebrow}</p>}
          <h2 className="rail__title reveal">
            <AccentStop text={title} />
          </h2>
          {lede && <p className="rail__lede reveal">{lede}</p>}
        </div>

        <Link className="btn btn--outline-light rail__all" href="/projects">
          {ctaLabel || 'View all projects'}
          <span className="arr" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <ul className="rail__track" ref={rail}>
        {items.map((p) => (
          <li key={p.id}>
            <Link className="railcard" href={`/projects/${p.slug}`}>
              <div className="railcard__media">
                <Image
                  src={mediaUrl(p.cover, '/media/placeholder-wide.jpg')}
                  alt=""
                  fill
                  sizes="(max-width: 860px) 78vw, 340px"
                  data-edit-key={`projects.${p.id}.cover`}
                />
                <span className="railcard__veil" aria-hidden="true" />
              </div>

              {p.category && <span className="railcard__chip">{p.category}</span>}

              <span className="railcard__foot">
                <span className="railcard__name">{p.title}</span>
                <span className="railcard__go" aria-hidden="true">
                  <Arrow />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="wrap rail__controls">
        <ul className="rail__dots">
          {items.map((p, i) => (
            <li key={p.id}>
              <button
                className="rail__dot"
                data-on={i === at.index}
                aria-current={i === at.index ? 'true' : undefined}
                aria-label={`Go to ${p.title}`}
                onClick={() => toCard(i)}
              />
            </li>
          ))}
        </ul>

        <div className="rail__nav">
          <button
            className="rail__arrow"
            onClick={() => step(-1)}
            disabled={at.start}
            aria-label="Previous projects"
          >
            <Arrow back />
          </button>
          <button
            className="rail__arrow"
            onClick={() => step(1)}
            disabled={at.end}
            aria-label="Next projects"
          >
            <Arrow />
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}

function Arrow({ back }: { back?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        // One drawing, mirrored, rather than two paths kept identical by hand.
        transform={back ? 'rotate(180 12 12)' : undefined}
      >
        <path d="M4 12h15" />
        <path d="M13 6l6 6-6 6" />
      </g>
    </svg>
  )
}
