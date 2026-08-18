'use client'

import React, { useEffect, useRef, useState } from 'react'

/**
 * The ProSomnus brand guide, as a real component.
 *
 * WHAT CHANGED FROM THE STANDALONE BUNDLE
 * It used to pull React, ReactDOM and Babel from unpkg and compile fifteen
 * pages of JSX in the visitor's browser on every visit — roughly 1.5 MB of
 * CDN JavaScript before the first pixel, and a blank page if unpkg was having
 * a bad day. The pages are now compiled with the rest of the site at build
 * time, and the only thing left to fetch is the site's own bundle.
 *
 * WHY IT IS STILL CLIENT-ONLY
 * Not an oversight. The vendored component bundle reads `window.scrollY` and
 * attaches scroll listeners at module scope, so it cannot be evaluated during
 * prerender. The route around it IS static; this subtree is loaded in the
 * browser, which is where a bundle that listens to scrolling belongs.
 *
 * The imports below are side-effectful and ORDER-DEPENDENT: each file registers
 * itself on a shared global that the next one reads. That is the bundle's own
 * design, kept rather than rewritten so the vendored files stay diffable
 * against the originals.
 */
import './ds-bundle.js'
import './bg-shared.jsx'
import './pages-foundation.jsx'
import './pages-system.jsx'
import './pages-components.jsx'
import './pages-extra.jsx'
import './pages.jsx'
import './guide.css'

type Page = { num: string; label: string; render?: React.ComponentType | null }

/** The standalone page mockups, still served from the bundle in public/.
 *  Absolute paths: the originals were relative to the guide's own folder. */
const LIVE_PAGES = [
  { label: 'Homepage', icon: 'home', href: '/design-systems/prosomnus/homepage/index.html' },
  { label: 'How It Works', icon: 'route', href: '/design-systems/prosomnus/pages/how-it-works/index.html' },
  { label: 'Find a Provider', icon: 'map-pin', href: '/design-systems/prosomnus/pages/find-a-provider/index.html' },
  { label: 'The Results', icon: 'bar-chart-3', href: '/design-systems/prosomnus/pages/results/index.html' },
  { label: 'For Providers', icon: 'stethoscope', href: '/design-systems/prosomnus/pages/providers/index.html' },
  { label: 'FAQ', icon: 'help-circle', href: '/design-systems/prosomnus/pages/faq/index.html' },
]

type Registry = {
  BRANDGUIDE_PAGES?: Page[]
  BG?: { pages: Record<string, React.ComponentType> }
  DesignSystem_e5ed69?: { Icon: React.ComponentType<{ name: string; size?: number; className?: string }> }
}

export default function Guide() {
  const reg = window as unknown as Registry
  const pages = reg.BRANDGUIDE_PAGES ?? []
  const Icon = reg.DesignSystem_e5ed69?.Icon

  const [active, setActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // A new page starts at its top, not wherever the last one was left.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [active])

  if (pages.length === 0) return null

  const page = pages[active]
  const Comp = page.render || reg.BG?.pages[page.num]

  return (
    <div className="psguide">
      <div className="app">
        <aside className="side">
          <div className="side-head">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/design-systems/prosomnus/assets/prosomnus-logo.svg" alt="ProSomnus" />
            <div className="side-sub">
              <span className="d" /> BRAND SYSTEM
            </div>
          </div>

          <nav className="nav" aria-label="Brand guide pages">
            <div className="nav-label">Guide</div>
            {pages.map((p, i) => (
              <button
                key={p.num}
                className={`navItem${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-current={i === active ? 'page' : undefined}
              >
                <span className="num">{p.num}</span>
                <span className="lbl">{p.label}</span>
              </button>
            ))}

            <div className="nav-label" style={{ marginTop: 16 }}>
              Page Mockups
            </div>
            {LIVE_PAGES.map((p) => (
              <a
                key={p.href}
                className="navItem navLink"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="num">{Icon && <Icon name={p.icon} size={17} />}</span>
                <span className="lbl">{p.label}</span>
                {Icon && <Icon name="arrow-right" size={15} className="ext" />}
              </a>
            ))}
          </nav>

          <div className="side-foot">
            <div>DOC · PSX.BRAND.001</div>
            <div>REV · 1.0 · 07.06.2026</div>
            <div>© 2026 ProSomnus Sleep Technologies</div>
          </div>
        </aside>

        <div className="main" ref={scrollRef}>
          {Comp ? <Comp /> : <div className="stub">This page is not in the guide yet.</div>}
        </div>
      </div>
    </div>
  )
}
