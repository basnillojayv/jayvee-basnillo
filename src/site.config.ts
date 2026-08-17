/**
 * SITE CONFIG — the first file you edit for a new client.
 *
 * Everything here is *structural* (things that change how the page is wired,
 * not what it says). Editable copy lives in Payload (`src/globals/Homepage.ts`),
 * and colour/type live in `src/app/(frontend)/globals.css` under DESIGN TOKENS.
 *
 * Nothing in this file requires a database, so it is safe to read from both
 * server components and the Payload config.
 */

export const site = {
  /** Legal / display name. Used in metadata, alt text, and the footer. */
  name: 'Jayvee Basnillo',
  /** The wordmark in the nav capsule, and the admin title suffix. */
  shortName: 'Jayvee Basnillo',
  /**
   * Unused here. The hero's two oversized words come from the CMS
   * (`heroWatermarkLeft` / `heroWatermarkRight`) instead, so they can be
   * reworded without a deploy.
   */
  heroWatermark: '',

  /** Default <title> and meta description. Override per-page as you add pages. */
  title: 'Jayvee Basnillo — Graphic and web designer',
  description:
    'A designer with 10+ years in graphic and web design, specialising in website design and development with WordPress and Elementor, and AI-assisted workflows.',

  /** Absolute base URL. Set NEXT_PUBLIC_SERVER_URL in the environment. */
  url: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',

  /** Browser UI colour — keep in sync with --brand-dark in globals.css. */
  themeColor: '#18181B',

  /** Favicon / app icon — the same mark the header carries, as SVG. */
  icon: '/media/logo-mark.svg',

  /**
   * Primary navigation: in-page anchors matching the section `id`s in
   * page.tsx, plus the one route worth its own entry. Rooted with `/` so they
   * work from a project or case-study page as well as from the homepage.
   */
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Designs', href: '/designs' },
  ],

  /** Sits on the right of the bar, beside the contact button. */
  navRight: [{ label: 'Projects', href: '/projects' }],

  /**
   * The persistent button in the header pill and mobile drawer.
   *
   * `#footer` was right when the homepage ended in one. It does not any more —
   * the homepage is the header and the hero — so the page passes the contact
   * address down from Payload instead, and this is only the fallback for a
   * page that does not (and for a database with no address in it yet).
   */
  headerCta: { label: 'Get in touch', href: '/contact' },

  hero: {
    /**
     * Optional background video in /public/media. Leave '' and the hero renders
     * the poster image instead — one less large asset per client build.
     */
    videoSrc: '',
  },

  /** Phone shown before the CMS has content (first render on a fresh DB). */
  fallbackPhone: '(555) 010-0100',

  /**
   * Motion switches. Both degrade to a plain scrolling page when off, and both
   * are ignored under `prefers-reduced-motion` regardless of these values.
   */
  motion: {
    /** Lenis input smoothing — makes the sticky stacking glide. */
    smoothScroll: true,
    /** Sticky pin-and-cover stacking for the first five sections (≥769px). */
    sectionStacking: true,
  },
} as const

export type SiteConfig = typeof site
