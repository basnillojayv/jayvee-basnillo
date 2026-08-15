import Link from 'next/link'
import type { CaseStudy } from '@/payload-types'

/**
 * Large headings paired with a small ghost link, separated by whitespace alone.
 *
 * The reference uses this for its FAQ: a 30px question, a right-aligned "Read
 * more" at 13px, no box, no border, no divider. It is the most restrained
 * pattern in the system and the one that most depends on type size doing the
 * work that a rule would otherwise do.
 *
 * Pointed at case studies here, which are the closest thing a portfolio has to
 * a question worth expanding — a title, and the option to go into it.
 */
export function ReadMoreList({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string | null
  title?: string | null
  items: CaseStudy[]
}) {
  if (items.length === 0) return null

  return (
    <section className="section readmore" id="case-studies">
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-title readmore__title">{title}</h2>}

        <ul className="readmore__list">
          {items.map((c) => (
            <li key={c.id} className="readmore__item reveal">
              <div className="readmore__q">
                <h3 className="readmore__heading">{c.title}</h3>
                <p className="readmore__meta">
                  {[c.client, c.discipline, c.year].filter(Boolean).join(' · ')}
                </p>
              </div>
              <Link className="link-ghost" href={`/case-studies/${c.slug}`}>
                Read more
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
