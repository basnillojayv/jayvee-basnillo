import type { Homepage } from '@/payload-types'

/**
 * A statement card beside a checked feature list.
 *
 * The reference pairs its one decorative card with a list of what the
 * membership includes, each line marked by a solid coral check in a soft
 * squircle. The pattern is "here is the offer, here is what is in it" — which
 * is the same shape as "here is who I am, here is what I do".
 *
 * The card here is type and one colour, not artwork. The reference's marbled
 * gradient is described in its own documentation as a one-of-a-kind brand
 * asset; borrowing the pattern is fair, and copying the artwork is not.
 */
export function FeatureList({ data }: { data: Homepage }) {
  const pillars = data.aboutPillars ?? []
  if (pillars.length === 0) return null

  return (
    <section className="section offer" id="offer">
      <div className="wrap offer__grid">
        {/* The card: coral, one radius, the resting shadow, and nothing else. */}
        <aside className="offer__card reveal">
          <p className="offer__card-mark">{data.aboutEyebrow}</p>
          <p className="offer__card-lede">{data.heroTagline}</p>
          <div className="offer__card-foot">
            <span className="offer__card-label">Available for work</span>
          </div>
        </aside>

        <div className="offer__body">
          <h2 className="section-title reveal">{data.aboutLede}</h2>

          <ul className="feature-list">
            {pillars.map((p, i) => (
              <li key={p.id ?? i} className="feature reveal">
                <span className="feature__check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="12" height="12">
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
                <div>
                  <p className="feature__title">{p.title}</p>
                  <p className="feature__copy">{p.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
