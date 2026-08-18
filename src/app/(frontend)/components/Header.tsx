'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { site } from '@/site.config'
import { LogoLockup } from './LogoLockup'

/**
 * TWO STATES, AND THE TRANSITION BETWEEN THEM IS THE POINT.
 *
 * At the top of the page this is a plain white bar the full width of the
 * window: wordmark centred, links left, actions right. Once you scroll past
 * the hero it collapses into a dark capsule floating in the middle of the
 * viewport, and stays there.
 *
 * Getting this wrong in the obvious direction — shipping the capsule at rest —
 * loses the moment entirely. The capsule reads as a capsule *because* you
 * watched the bar become one.
 *
 * The threshold is deliberately small. Waiting for the full hero height would
 * mean nothing happens on a short viewport, and the transform is the first
 * thing the page does.
 */
export function Header({ contactHref }: { contactHref?: string } = {}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // The homepage hands down the address from Payload; every other page falls
  // back to the config. Neither points at `#footer` any more — see site.config.
  const cta = contactHref || site.headerCta.href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className="site-header" data-state={scrolled ? 'pill' : 'bar'}>
        <div className="pill">
          <nav className="nav-primary" aria-label="Primary">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>

          {/* The full lockup, mark over wordmark. Inlined rather than an <img>
              so `currentColor` carries it through the bar → capsule inversion
              on the same transition as everything else in here. The link keeps
              the accessible name, so the artwork itself stays decorative. */}
          <Link className="brand" href="/" aria-label={`${site.name} — home`}>
            <LogoLockup className="logo-lockup brand-mark" />
          </Link>

          <div className="header-actions">
            {/* Right-hand nav. Kept in the actions group rather than the
                primary list so it stays put when the left nav collapses. */}
            {site.navRight.map((n) => (
              <Link className="header-login" key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            {/* Points at the tools rack rather than at mail: the capsule's
                filled button already carries the contact action, and two
                controls doing the same thing beside each other is a wasted
                slot. */}
            <a className="btn btn--invert" href={cta}>
              {site.headerCta.label}
            </a>
            {/* The nine-dot mark from the reference: a square button that opens
                the drawer. It carries no menu semantics of its own. */}
            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobileMenu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="menu-toggle__dots" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <i key={i} />
                ))}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/*
        The way out.

        The drawer sits above the header, so the button that opened it is
        underneath it and cannot be pressed again — without this, opening the
        menu on a phone was a one-way door. Two exits now, because people reach
        for both: the panel's own close button, and the page behind it.
      */}
      <button
        className="scrim"
        data-open={open}
        hidden={!open}
        tabIndex={-1}
        aria-hidden="true"
        onClick={close}
      />

      <div className="mobile-menu" id="mobileMenu" data-open={open} inert={!open}>
        <button className="mobile-menu__close" onClick={close} aria-label="Close menu">
          <span aria-hidden="true">×</span>
        </button>

        <nav aria-label="Mobile">
          {/* navRight as well as nav. It renders inline in the header on a wide
              screen, which is hidden at this size — so without it here,
              Projects had no route in on a phone at all. */}
          {[...site.nav, ...site.navRight].map((n) => (
            <Link key={n.href} href={n.href} onClick={close}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__cta">
          {/* White, not the accent: `btn--accent` is --brand-dark, which on this
              near-black panel was a dark button on a dark ground. */}
          <a className="btn btn--white btn--block" href={cta} onClick={close}>
            {site.headerCta.label}
          </a>
        </div>
      </div>

      <div
        className="scrim"
        data-open={open}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        onClick={close}
      />
    </>
  )
}
