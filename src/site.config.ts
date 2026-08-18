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

/**
 * THE BASE URL, AND WHY IT IS RESOLVED RATHER THAN READ.
 *
 * Every absolute address the site emits about itself comes from here: the
 * canonical link, `og:url`, the `og:image`, the sitemap, the structured data,
 * and — through `payload.config.ts` — the `serverURL` Payload stamps onto
 * uploaded media. One environment variable decides all of it.
 *
 * WHAT WENT WRONG, so it is not repeated. `NEXT_PUBLIC_SERVER_URL` was set to
 * the deployment's *generated* hostname — the `project-scope.vercel.app` form
 * that Vercel prints in the dashboard next to the deployment. Vercel's default
 * Deployment Protection covers those hostnames, so opening one redirects to a
 * Vercel login. The site itself was fine and its own domain served normally,
 * but every page told the world its address was the protected one. Anyone
 * following a shared link, a search result, or a link-preview card landed on
 * "Log in to Vercel", and every preview thumbnail 302'd to the same place.
 * The people who reported it as broken were right; the people who could not
 * reproduce it were signed in to Vercel.
 *
 * So a hostname that cannot serve the public is not accepted here, even when
 * it is what the environment says. Two are rejected:
 *
 * · a `*.vercel.app` host that is not the project's production domain — that
 *   is, by elimination, one of the generated protected ones
 * · `localhost`, which is what a committed `.env` supplies if the deployment
 *   is missing the variable altogether
 *
 * In both cases `VERCEL_PROJECT_PRODUCTION_URL` stands in. It is Vercel's own
 * answer to "what is this project's public address" — the custom domain when
 * one is attached, the clean `project.vercel.app` alias otherwise, and never a
 * protected URL. Off Vercel it is absent and the configured value is used as
 * it always was, so local development and other hosts are untouched.
 */
function resolveUrl(): string {
  const clean = (value?: string) => (value ?? '').trim().replace(/\/+$/, '')

  const configured = clean(process.env.NEXT_PUBLIC_SERVER_URL)
  // Vercel exposes this to the browser bundle as NEXT_PUBLIC_VERCEL_* while
  // "Automatically expose System Environment Variables" is on, which is the
  // default. Absent, the branch below falls through to `configured` and the
  // behaviour is exactly what it was before this function existed.
  // Both spellings, and the order matters. Vercel sets the bare name on the
  // server always, and the NEXT_PUBLIC_ twin only while "Automatically expose
  // System Environment Variables" is on — the default, but a setting somebody
  // can turn off. The client bundle can only ever see the prefixed one, so it
  // is tried first; the bare name is what keeps the *metadata* correct, which
  // is server-rendered, even on a project where the twin is missing.
  const productionHost =
    clean(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ||
    clean(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  const production = productionHost && `https://${productionHost}`

  if (!production) return configured || 'http://localhost:3000'
  if (!configured) return production

  let host: string
  try {
    host = new URL(configured).host
  } catch {
    // Not a URL at all — a bare domain, or a typo. Either way it cannot be
    // parsed into a canonical, and Vercel's answer can.
    return production
  }

  const unreachable =
    host === productionHost
      ? false
      : host.endsWith('.vercel.app') || /^(localhost|127\.0\.0\.1)(:|$)/.test(host)

  return unreachable ? production : configured
}

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

  /**
   * Absolute base URL. Set NEXT_PUBLIC_SERVER_URL in the environment.
   *
   * Resolved rather than read, because getting this wrong does not look like a
   * bug — it looks like the site being down for everyone except you. See
   * `resolveUrl` below.
   */
  url: resolveUrl(),

  /**
   * Where you work, as a city and region — e.g. 'Orange County, California'.
   *
   * DELIBERATELY EMPTY. A location is a trust signal, and a wrong one is the
   * opposite; nothing in this repo records where you are, so it is not being
   * guessed. Fill it in and it appears in the footer and on the contact page,
   * and is used for the LocalBusiness structured data. Left blank, all three
   * simply omit it — nothing renders half-finished.
   */
  location: '',

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
