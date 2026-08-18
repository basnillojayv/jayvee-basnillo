'use client'

import { useEffect, useState } from 'react'

/**
 * The category strip at the top of /designs.
 *
 * Jump links, not filters. Filtering would hide two thirds of the page behind a
 * click and break the browser's find-in-page, to save a scroll that this
 * already saves. The count next to each name is the thing a filter control
 * usually withholds until you press it.
 *
 * It sticks, so the strip doubles as a position indicator once you are deep in
 * the page — which is the moment the page is hardest to navigate.
 */
export type DesignsCategory = { id: string; label: string; count: number }

export function DesignsNav({ categories }: { categories: DesignsCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? '')

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    /**
     * The topmost section still intersecting the band below the sticky strip
     * wins. Using the whole viewport instead would light up the last group the
     * moment its heading appeared, while most of the screen still showed the
     * previous one.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-96px 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [categories])

  if (categories.length < 2) return null

  return (
    <nav className="dnav" aria-label="Design categories">
      <ul className="dnav__list">
        {categories.map((c) => (
          <li key={c.id}>
            <a
              className={`dnav__link${active === c.id ? ' is-active' : ''}`}
              href={`#${c.id}`}
              aria-current={active === c.id ? 'true' : undefined}
            >
              {c.label}
              <span className="dnav__count">{c.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
