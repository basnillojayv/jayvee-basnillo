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

  const toCard = (i: number) => {
    const el = rail.current
    const card = el?.children[i] as HTMLElement | undefined
    if (!el || !card) return
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }

  const step = (dir: 1 | -1) => {
    const el = rail.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    // Read the card width off the DOM so the responsive value lives only in CSS.
    const by = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: by * dir, behavior: 'smooth' })
  }

  if (items.length === 0) return null

  return (
    <section className="rail" id="work">
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
