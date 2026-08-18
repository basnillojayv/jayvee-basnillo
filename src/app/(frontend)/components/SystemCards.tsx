'use client'

import { useEffect, useState, type ReactNode } from 'react'
import type { CardGroup } from '@/lib/designSystemDoc'

/**
 * A design system that arrived as a folder of specimen cards rather than an
 * assembled document — so the document is assembled here.
 *
 * Same reading shell as SystemDoc (rail, scroll-spy, deep links), but the
 * stage is a grid of framed specimens instead of full-bleed chapters, because
 * that is the shape the content actually has: thirty small one-topic panels,
 * not twelve pages.
 *
 * `scopeClass` is the class the generated stylesheet is namespaced under. The
 * cards' markup uses the bundle's own class names and custom properties, which
 * only resolve inside it.
 */
/** A group whose cards are React rather than markup — see OcFellowsCards. */
export type LiveGroup = { id: string; label: string; node: ReactNode }

export function SystemCards({
  groups,
  scopeClass,
  title,
  live = [],
}: {
  groups: CardGroup[]
  scopeClass: string
  title: string
  live?: LiveGroup[]
}) {
  const [active, setActive] = useState(groups[0]?.id ?? '')
  // The rail has to know about both kinds, or a whole section is unreachable.
  const rail = [...groups.map((g) => ({ id: g.id, label: g.label })), ...live.map((g) => ({ id: g.id, label: g.label }))]

  useEffect(() => {
    const els = rail
      .map((g) => document.getElementById(`grp-${g.id}`))
      .filter((el): el is HTMLElement => Boolean(el))
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (top) setActive(top.target.id.replace(/^grp-/, ''))
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups, live])

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(`grp-${id}`)?.scrollIntoView()
  }, [])

  return (
    <div className="sysdoc">
      <nav className="sysdoc__rail" aria-label={`${title} sections`}>
        <ol className="sysdoc__raillist">
          {rail.map((g) => (
            <li key={g.id}>
              <a
                className={`sysdoc__raillink${active === g.id ? ' is-active' : ''}`}
                href={`#${g.id}`}
                aria-current={active === g.id ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(`grp-${g.id}`)?.scrollIntoView({ behavior: 'smooth' })
                  history.replaceState(null, '', `#${g.id}`)
                }}
              >
                {g.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="sysdoc__stage sysdoc__stage--cards">
        {groups.map((g) => (
          <section key={g.id} id={`grp-${g.id}`} className="cardgroup">
            <h2 className="cardgroup__title">{g.label}</h2>
            <div className="cardgroup__grid">
              {g.cards.map((c) => (
                <figure className="speccard" key={c.id}>
                  <figcaption className="speccard__cap">
                    <span className="speccard__name">{c.name}</span>
                    {c.subtitle && <span className="speccard__sub">{c.subtitle}</span>}
                  </figcaption>
                  {/* Committed, first-party markup read off local disk at build
                      time — see the note in lib/designSystemDoc.ts. */}
                  <div
                    className={`speccard__body ${scopeClass}`}
                    dangerouslySetInnerHTML={{ __html: c.html }}
                  />
                </figure>
              ))}
            </div>
          </section>
        ))}

        {live.map((g) => (
          <section key={g.id} id={`grp-${g.id}`} className="cardgroup">
            <h2 className="cardgroup__title">{g.label}</h2>
            {g.node}
          </section>
        ))}
      </div>
    </div>
  )
}
