'use client'

import { useEffect, useRef, useState } from 'react'
import type { DocSection } from '@/lib/designSystemDoc'

/**
 * The reading shell around a design-system document.
 *
 * The document supplies the pages; this supplies the way through them — a
 * chapter rail that tracks where you are, deep links that survive a reload,
 * and arrow-key paging. None of that existed in the standalone HTML, where the
 * only way to find "Colour" was to scroll until you saw it.
 */
export function SystemDoc({
  sections,
  keyframes,
  title,
}: {
  sections: DocSection[]
  keyframes: string
  title: string
}) {
  const [active, setActive] = useState(sections[0]?.id ?? '')
  const stage = useRef<HTMLDivElement>(null)

  // Scroll-spy. Same rule as the designs strip: the topmost section still
  // inside the reading band wins, so the rail never runs ahead of the eye.
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(`doc-${s.id}`))
      .filter((el): el is HTMLElement => Boolean(el))

    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (top) setActive(top.target.id.replace(/^doc-/, ''))
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  // Land on the right chapter when someone arrives with a hash.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(`doc-${id}`)?.scrollIntoView()
  }, [])

  const go = (delta: number) => {
    const i = sections.findIndex((s) => s.id === active)
    const next = sections[Math.min(sections.length - 1, Math.max(0, i + delta))]
    if (next) document.getElementById(`doc-${next.id}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Never steal the arrows from a field, and never from a modifier chord.
      const t = e.target as HTMLElement | null
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  /**
   * Click any hex in the document to copy it.
   *
   * Delegated from the stage rather than bound per swatch, because the swatches
   * are inside injected markup that this component never sees as elements. One
   * listener, and it keeps working if the document gains a colour.
   */
  const [copied, setCopied] = useState<string | null>(null)
  useEffect(() => {
    const el = stage.current
    if (!el) return

    const onClick = (e: MouseEvent) => {
      const node = e.target as HTMLElement
      const text = node.textContent?.trim() ?? ''
      if (!/^#[0-9A-Fa-f]{3,8}$/.test(text)) return
      navigator.clipboard?.writeText(text).then(
        () => {
          setCopied(text)
          window.setTimeout(() => setCopied(null), 1400)
        },
        () => {},
      )
    }

    el.addEventListener('click', onClick)
    return () => el.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="sysdoc">
      {/* The document's own animations, scoped to this page by being the only
          thing on it that uses them. Resets are stripped in readSystemDoc. */}
      <style>{keyframes}</style>

      <nav className="sysdoc__rail" aria-label={`${title} sections`}>
        <ol className="sysdoc__raillist">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                className={`sysdoc__raillink${active === s.id ? ' is-active' : ''}`}
                href={`#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(`doc-${s.id}`)?.scrollIntoView({ behavior: 'smooth' })
                  history.replaceState(null, '', `#${s.id}`)
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="sysdoc__stage" ref={stage}>
        {sections.map((s) => (
          <div
            key={s.id}
            id={`doc-${s.id}`}
            className="sysdoc__section"
            /* Committed, first-party markup read off local disk at build time —
               see the note in lib/designSystemDoc.ts. */
            dangerouslySetInnerHTML={{ __html: s.html }}
          />
        ))}
      </div>

      <div className="sysdoc__toast" role="status" aria-live="polite">
        {copied && <span>Copied {copied}</span>}
      </div>
    </div>
  )
}
