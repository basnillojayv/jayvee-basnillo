import Image from 'next/image'
import type { Homepage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * FULL-BLEED DARK, CONTENT LEFT, STATS ALONG THE FOOT.
 *
 * The composition is specific and I had it wrong twice: content sits in the
 * lower-left of the frame, not centred, and the section closes with a row of
 * three claims separated by vertical rules — the last thing in the viewport
 * before the page turns white.
 *
 * Two actions, not one: a filled white primary and a translucent secondary
 * that borrows the image behind it. The secondary is not an outline — the
 * design rules forbid ghost variants of the primary action, and a washed
 * translucent fill is what sits there instead.
 *
 * The bottom corners are rounded, so the dark block reads as a panel laid on
 * the page rather than as the page's own background.
 */
export function Hero({ data }: { data: Homepage }) {
  const portrait = mediaUrl(data.heroPortrait, '/media/placeholder-hero.jpg')
  const stats = data.statsItems ?? []

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <Image
          src={portrait}
          alt=""
          fill
          priority
          sizes="100vw"
          data-edit-key="homepage.heroPortrait"
        />
        <div className="hero__scrim" />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow reveal">
            <span className="hero__check" aria-hidden="true">
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
            Available for freelance and contract work
          </p>

          <h1 className="hero__headline reveal">
            {data.heroNameFirst}
            <br />
            {data.heroNameLast}
          </h1>

          <p className="hero__subhead reveal">{data.heroTagline}</p>

          <div className="hero__actions reveal">
            <a className="btn btn--white btn--lg" href="#work">
              See the work
            </a>
            <a className="btn btn--wash btn--lg" href="#how">
              How I work
            </a>
          </div>
        </div>
      </div>

      {stats.length > 0 && (
        <div className="wrap hero__facts">
          <ul>
            {stats.map((s, i) => (
              <li key={s.id ?? i}>
                <span className="hero__fact-label">{s.label}</span>
                <span className="hero__fact-value">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
