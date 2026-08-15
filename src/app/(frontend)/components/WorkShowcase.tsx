import Link from 'next/link'
import type { Homepage, Project } from '@/payload-types'
import { ThumbStrip } from './ThumbStrip'

/**
 * The work section: a heading, then the thumbnail strip.
 *
 * A strip rather than a grid, which is the change that matters most here. A
 * grid of seventeen tiles asks someone to evaluate seventeen things; a strip
 * shows one properly and lets them move through the rest without leaving the
 * section. It is also the pattern the reference uses for exactly this job.
 *
 * The full grid still exists at /projects for anyone who wants to browse.
 */
export function WorkShowcase({ data, items }: { data: Homepage; items: Project[] }) {
  if (items.length === 0) return null

  return (
    <section className="section work" id="work">
      <div className="wrap">
        <header className="work__head">
          <div>
            {data.projectsEyebrow && <p className="eyebrow">{data.projectsEyebrow}</p>}
            <h2 className="section-title">{data.projectsTitle || 'Selected work'}</h2>
          </div>
          <Link className="link-ghost" href="/projects">
            All projects
          </Link>
        </header>

        <ThumbStrip items={items} />
      </div>
    </section>
  )
}
