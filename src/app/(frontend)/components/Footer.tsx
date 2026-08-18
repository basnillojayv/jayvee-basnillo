import Image from 'next/image'
import Link from 'next/link'
import type { Homepage } from '@/payload-types'
import { site } from '@/site.config'
import { LogoMark } from './LogoMark'

/**
 * THREE COLUMNS ON CARBON, AND THE LAST ONE IS AN ASK.
 *
 * The footer used to be a white card of link columns — a site map with a
 * button in it. This one ends the page the way the page has been arguing:
 * the mark and who he is, the routes, and then a direct invitation with its
 * own heading, which is the last thing anyone reads.
 *
 * WHY THE GLOW IS A GRADIENT AND NOT AN IMAGE
 * A photograph here would be a fourth thing competing with the ask. A warm
 * wash bled in from the corner picks up the accent without adding a subject,
 * and it costs no request.
 *
 * The social buttons are 44px because they are the smallest targets on the
 * page and sit closest to its edge — the two conditions under which an
 * undersized target actually gets missed.
 */
export function Footer({ data }: { data: Homepage }) {
  const year = new Date().getFullYear()
  const email = data.email
  const linkedin = data.contactLinkedin

  const links = [
    { label: 'Projects', href: '/projects' },
    { label: 'Designs', href: '/designs' },
    { label: 'About', href: '/projects#about' },
    { label: 'Tools', href: '/projects#tools' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ]

  return (
    <footer className="site-footer" id="footer">
      {/* A photograph rather than the gradient wash that was here. It is
          scrimmed hard in CSS: the footer carries three columns of small text,
          and an image behind type has to lose every contest with it. */}
      <div className="footer__bg" aria-hidden="true">
        <Image
          src="/media/footer-ddp.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          loading="lazy"
        />
      </div>
      <div className="footer__glow" aria-hidden="true" />

      <div className="wrap footer__grid">
        <div className="footer__brand">
          <LogoMark className="logo-mark footer__logo" />
          <p className="footer__blurb">
            I help businesses and organisations bring their ideas to life through thoughtful
            design and clean, functional websites.
          </p>
          <div className="footer__social">
            {linkedin && (
              <a
                className="footer__icon"
                href={linkedin}
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
                </svg>
              </a>
            )}
            {email && (
              <a className="footer__icon" href={`mailto:${email}`} aria-label="Email">
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 6.5 8.5 6 8.5-6" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <p className="kicker">Quick links</p>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__ask">
          <p className="kicker">Let&rsquo;s work together</p>
          <h2 className="footer__ask-title">
            {data.contactHeadlineLead || 'Have a project'}
            <br />
            {data.contactHeadlineAccent || 'in mind?'}
          </h2>
          <p className="footer__ask-copy">
            Tell me what it has to do and who it has to convince, and I will tell you what it
            would take.
          </p>
          {email && (
            <a className="btn btn--white" href={`mailto:${email}`}>
              {data.contactCtaLabel || 'Get in touch'}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          )}
        </div>
      </div>

      <div className="wrap footer__base">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>Built with intent, not templates.</p>
      </div>
    </footer>
  )
}
