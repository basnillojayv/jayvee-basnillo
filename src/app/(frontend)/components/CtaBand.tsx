import Image from 'next/image'
import Link from 'next/link'
import type { Homepage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * The closing dark band — the hero's bookend.
 *
 * Same construction as the hero on purpose: full-bleed dark image, content
 * lower-left, a small row of reassurances, two actions. The page opens and
 * closes on the same surface, which is what makes the white middle read as a
 * middle rather than as the whole site.
 *
 * The footer sits *on top* of this, overlapping its foot — so this section
 * carries deliberate bottom padding that the footer then covers. Remove the
 * padding and the footer's rounded top corners clip the headline.
 */
export function CtaBand({ data }: { data: Homepage }) {
  const image = mediaUrl(data.aboutPortrait, '/media/placeholder-hero.jpg')

  const marks = [
    'Freelance and contract',
    'Remote, Philippines-based',
    'Replies within a day',
  ]

  return (
    <section className="cta" id="contact">
      <div className="cta__media" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          data-edit-key="homepage.aboutPortrait"
        />
        <div className="cta__scrim" />
      </div>

      <div className="wrap cta__inner">
        <p className="cta__eyebrow reveal">{data.contactEyebrow}</p>

        <h2 className="cta__headline reveal">
          {data.contactHeadlineLead}
          <br />
          {data.contactHeadlineAccent}
        </h2>

        <ul className="cta__marks reveal">
          {marks.map((m) => (
            <li key={m}>
              <span className="cta__check" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="11" height="11">
                  <path
                    d="M4 12.5l5 5L20 6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {m}
            </li>
          ))}
        </ul>

        <div className="cta__actions reveal">
          {data.email && (
            <a className="btn btn--white btn--lg" href={`mailto:${data.email}`}>
              {data.contactCtaLabel || 'Get in touch'}
            </a>
          )}
          <Link className="btn btn--wash btn--lg" href="/projects">
            See the work
          </Link>
        </div>
      </div>
    </section>
  )
}
