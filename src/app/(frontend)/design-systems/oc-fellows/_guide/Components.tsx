'use client'

import React, { useEffect, useRef } from 'react'
import { createIcons, ArrowLeft, ArrowRight, ChevronDown, ExternalLink, HeartHandshake, Mail, Sparkles, User, Users, X } from 'lucide'

/**
 * The four component cards, rendered as real React.
 *
 * ORDER-DEPENDENT, like the ProSomnus guide: the bundle registers itself on a
 * global that each demo then destructures. Kept as the bundle designed it so
 * the vendored files stay diffable against the originals.
 */
import './ds-bundle.js'
import Core, { CoreCss } from './demos/core.jsx'
import Forms, { FormsCss } from './demos/forms.jsx'
import Navigation, { NavigationCss } from './demos/navigation.jsx'
import Content, { ContentCss } from './demos/content.jsx'

/**
 * The icons these demos ask for by name.
 *
 * Imported individually rather than as lucide's whole `icons` map — that map is
 * 2,000+ icons, and nothing here needs 2,000 icons.
 *
 * `linkedin` is absent from the list because Lucide removed brand marks in v1.
 * PersonCard asks for it, so it is supplied below as an icon node in Lucide's
 * own format — the same stylised "in" (bar, dot, arch) the bundle rendered when
 * it loaded Lucide 0.544 from a CDN, not the trademarked filled logo.
 */
const Linkedin: [string, Record<string, string | number>][] = [
  ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }],
  ['rect', { width: '4', height: '12', x: '2', y: '9' }],
  ['circle', { cx: '4', cy: '4', r: '2' }],
]

const ICONS = {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  HeartHandshake,
  Linkedin,
  Mail,
  Sparkles,
  User,
  Users,
  X,
}

const CARDS = [
  { id: 'core', name: 'Core', sub: 'Button, IconButton, Badge, Eyebrow, SectionHeading, Card', Demo: Core, css: CoreCss },
  { id: 'forms', name: 'Forms', sub: 'Field, Input, Textarea, Select, Checkbox, FilterChip', Demo: Forms, css: FormsCss },
  { id: 'navigation', name: 'Navigation', sub: 'NavBar and Footer', Demo: Navigation, css: NavigationCss },
  { id: 'content', name: 'Content', sub: 'StatCounter, ValueItem, PersonCard, StoryCard, PressCard, ProgramCard, TimelineStep, LogoWall', Demo: Content, css: ContentCss },
]

export default function Components() {
  const root = useRef<HTMLDivElement>(null)

  /**
   * Swap every `<i data-lucide>` the demos rendered for its SVG.
   *
   * Scoped to this subtree via `root`, so it can never reach into the rest of
   * the page. It runs after paint and again whenever a demo re-renders its
   * icons — the bundle also calls `window.lucide.createIcons()` itself, which
   * the shim below routes here so it gets our icon map instead of throwing.
   */
  useEffect(() => {
    const draw = () => {
      if (!root.current) return
      try {
        createIcons({ icons: ICONS, root: root.current as unknown as Document })
      } catch {
        // A missing icon only warns; anything else must not take the page down.
      }
    }

    // The bundle calls this bare, and lucide v1 throws without an icons map.
    ;(window as unknown as { lucide: { createIcons: () => void } }).lucide = { createIcons: draw }
    draw()
  }, [])

  return (
    <div ref={root} className="cardgroup__grid">
      {CARDS.map(({ id, name, sub, Demo, css }) => (
        <figure className="speccard" key={id}>
          <figcaption className="speccard__cap">
            <span className="speccard__name">{name}</span>
            <span className="speccard__sub">{sub}</span>
          </figcaption>
          <div className="speccard__body ocfguide">
            {/* Each card shipped its own layout CSS in its <head>; it only ever
                targets .wrap/.row/.lbl inside that card. */}
            <style>{css}</style>
            <Demo />
          </div>
        </figure>
      ))}
    </div>
  )
}
