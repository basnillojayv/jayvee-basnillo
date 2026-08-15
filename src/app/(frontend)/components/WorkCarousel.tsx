'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toSameOriginPath } from './util'
import type { CarouselItem } from './carouselItem'

/**
 * A horizontal rail with the neighbouring cards left visible at both edges.
 *
 * THE PEEK IS THE WHOLE IDEA
 * A carousel whose cards end at the viewport edge looks like a grid that has
 * been cut off. Letting the next and previous card show through, dimmed, is
 * what tells someone there is more without a control saying so — and it is why
 * the rail is padded rather than the cards being narrower.
 *
 * Native scroll with snap points rather than transforms. It keeps the keyboard,
 * the trackpad and touch all working for free, and a JS carousel that
 * reimplements those badly is worse than no carousel.
 *
 * The progress bar is segments, not a thumb: one per card, the active one
 * filled. With a counter beside it, someone always knows both where they are
 * and how much is left — which a continuous bar only half answers.
 */
export function WorkCarousel({
  eyebrow,
  title,
  lede,
  items,
}: {
  eyebrow?: string | null
  title?: string | null
  lede?: string | null
  items: CarouselItem[]
}) {
  const railRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)

  const sync = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const cards = Array.from(rail.children) as HTMLElement[]
    if (cards.length === 0) return

    // Whichever card's centre is nearest the rail's centre is the active one.
    const mid = rail.scrollLeft + rail.clientWidth / 2
    let best = 0
    let bestGap = Infinity
    cards.forEach((card, i) => {
      const gap = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid)
      if (gap < bestGap) {
        bestGap = gap
        best = i
      }
    })
    setActive(best)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    sync()
    rail.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      rail.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const goTo = (i: number) => {
    const rail = railRef.current
    const card = rail?.children[i] as HTMLElement | undefined
    if (!rail || !card) return
    rail.scrollTo({
      left: card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2,
      behavior: 'smooth',
    })
  }

  if (items.length === 0) return null

  return (
    <section className="section carousel" id="stories">
      <div className="wrap carousel__head">
        {eyebrow && <p className="carousel__eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-title carousel__title">{title}</h2>}
        {lede && <p className="carousel__lede">{lede}</p>}
      </div>

      <ul className="carousel__rail" ref={railRef}>
        {items.map((item, i) => {
          const media = typeof item.image === 'object' && item.image ? item.image : null
          return (
            <li key={item.id} className={`carousel__card${i === active ? ' is-active' : ''}`}>
              <Link href={item.href} className="carousel__link">
                <div className="carousel__media">
                  <Image
                    src={
                      media?.url ? toSameOriginPath(media.url) : '/media/placeholder-tile.jpg'
                    }
                    alt={media?.alt || item.title}
                    width={media?.width || 1600}
                    height={media?.height || 1000}
                    sizes="(max-width: 900px) 82vw, 600px"
                    data-edit-key={item.editKey}
                  />
                </div>

                <p className="carousel__name">{item.title}</p>
                {item.body && <p className="carousel__quote">{item.body}</p>}
                {item.caption && <p className="carousel__caption">{item.caption}</p>}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="wrap carousel__foot">
        <ul className="carousel__progress">
          {items.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                className={i === active ? 'is-on' : undefined}
                onClick={() => goTo(i)}
                aria-label={`Go to ${item.title}`}
                aria-current={i === active}
              />
            </li>
          ))}
        </ul>
        <p className="carousel__count">
          {active + 1} / {items.length}
        </p>
      </div>
    </section>
  )
}

