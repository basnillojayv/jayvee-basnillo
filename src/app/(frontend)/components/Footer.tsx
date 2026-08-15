import Link from 'next/link'
import type { Homepage } from '@/payload-types'
import { site } from '@/site.config'

/**
 * A WHITE CARD SITTING ON THE DARK BAND ABOVE IT.
 *
 * The footer is not a strip at the bottom of the page — it is a panel laid
 * over the closing dark section, inset from the window edges with a large
 * radius on its top corners. That overlap is the whole effect, and it is why
 * this pulls itself upward with a negative margin rather than the section
 * above pushing it.
 *
 * Left: the mark, an invitation, and the one action. Right: columns of links
 * under grey headings.
 *
 * What the reference has here that this does not: a newsletter signup, an app
 * badge and a QR code. Building an email capture for a list that does not
 * exist would be furniture pretending to be a product, so the left column
 * carries a direct invitation and a mailto instead.
 */
export function Footer({ data }: { data: Homepage }) {
  const year = new Date().getFullYear()
  const email = data.email
  const linkedin = data.contactLinkedin

  const columns = [
    {
      heading: 'Work',
      links: [
        { label: 'All projects', href: '/projects' },
        { label: 'Case studies', href: '/case-studies' },
        { label: 'Design showcase', href: '/#showcase' },
      ],
    },
    {
      heading: 'About',
      links: [
        { label: 'How I work', href: '/#how' },
        { label: 'Skills and tools', href: '/#capabilities' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        ...(email ? [{ label: 'Email', href: `mailto:${email}` }] : []),
        ...(linkedin ? [{ label: 'LinkedIn', href: linkedin }] : []),
      ],
    },
  ]

  return (
    <footer className="site-footer" id="footer">
      <div className="footer__card">
        <div className="footer__grid">
          <div className="footer__lead">
            <p className="footer__mark">{site.name}</p>
            <p className="footer__invite">
              <strong>Starting something?</strong> Tell me what the site has to do and who it has
              to convince, and I will tell you what it would take.
            </p>
            {email && (
              <a className="btn btn--dark" href={`mailto:${email}`}>
                {data.contactCtaLabel || 'Get in touch'}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </a>
            )}
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.heading} className="footer__col">
                <p className="footer__col-head">{col.heading}</p>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      {l.href.startsWith('http') || l.href.startsWith('mailto:') ? (
                        <a href={l.href} rel="noreferrer noopener">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href}>{l.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__base">
          <p className="t-mono--sm">
            © {year} {site.name}
          </p>
          <p className="t-mono--sm">Built with Next.js and Payload</p>
        </div>
      </div>
    </footer>
  )
}
