import Link from 'next/link'
import type { CaseStudy, Project } from '@/payload-types'
import { WorkTile } from './WorkTile'

/**
 * A titled list of work with a link to the full index.
 *
 * Serves both the projects strip and the case studies strip, because they are
 * the same object with different contents — and building them separately is
 * how two lists end up with different gutters.
 */
export function WorkStrip({
  id,
  eyebrow,
  title,
  items,
  kind,
  moreHref,
  moreLabel,
}: {
  id: string
  eyebrow?: string | null
  title?: string | null
  items: (Project | CaseStudy)[]
  /** Drives the link target and the edit key prefix. */
  kind: 'projects' | 'caseStudies'
  moreHref: string
  moreLabel: string
}) {
  if (items.length === 0) return null

  const base = kind === 'projects' ? '/projects' : '/case-studies'
  const coverField = 'cover' as const

  return (
    <section className="section work" id={id}>
      <div className="wrap">
        <header className="work__head">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
          <Link className="btn btn--outline" href={moreHref}>
            {moreLabel}
            <span className="arr" aria-hidden="true">
              →
            </span>
          </Link>
        </header>

        <div className="grid-tiles">
          {items.map((item, i) => {
            const isProject = kind === 'projects'
            const meta = isProject
              ? (item as Project).category
              : [(item as CaseStudy).client, (item as CaseStudy).year].filter(Boolean).join(' · ')

            return (
              <WorkTile
                key={item.id}
                href={`${base}/${item.slug}`}
                title={item.title}
                meta={meta}
                image={item[coverField]}
                fit={item.coverFit}
                editKey={`${kind}.${item.id}.cover`}
                priority={i < 3}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
