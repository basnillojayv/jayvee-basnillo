import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * A PROJECT, AS A CARD THAT ANSWERS ON HOVER.
 *
 * At rest it is the cover under a light veil with the name beneath it. On
 * hover the veil lifts, the image pushes in slightly, and the name and arrow
 * move together toward the click. Nothing appears that was not already there —
 * the card gets *clearer*, which is the difference between an interaction that
 * confirms where you are and one that puts a new thing under your cursor.
 *
 * WHY THE WHOLE CARD IS THE LINK
 * A title-only link makes the 300px image beside it dead space that looks
 * pressable. One `<a>` around everything means the target is what it appears
 * to be, and the accessible name comes from the heading inside it.
 *
 * The zoom is on the image and the lift is on the card, so they compose
 * without fighting: two transforms on one element would need combining by
 * hand and would break the moment either changed.
 */
export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const cover = mediaUrl(project.cover, '/media/placeholder-wide.jpg')

  return (
    <article className="pcard">
      <Link className="pcard__link" href={`/projects/${project.slug}`}>
        <div className="pcard__media">
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 560px"
            priority={priority}
            data-edit-key={`projects.${project.id}.cover`}
          />
          <span className="pcard__veil" aria-hidden="true" />
          {project.category && <span className="pcard__chip">{project.category}</span>}
        </div>

        <div className="pcard__body">
          <h2 className="pcard__title">{project.title}</h2>
          <span className="pcard__go" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" focusable="false">
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h13" />
                <path d="M12 5.5 18.5 12 12 18.5" />
              </g>
            </svg>
          </span>
        </div>

        {project.description && <p className="pcard__copy">{project.description}</p>}
      </Link>
    </article>
  )
}
