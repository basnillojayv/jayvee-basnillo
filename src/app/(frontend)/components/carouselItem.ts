import type { CaseStudy, Project } from '@/payload-types'

/**
 * The one shape the carousel rail understands.
 *
 * In its own module, with no `'use client'`, because both sides need it: the
 * page is a server component and does the shaping, the rail is a client
 * component and does the rendering. Exporting this helper from the rail itself
 * made it a client export, and calling it from the server threw — the error is
 * explicit that a client function can be rendered or passed as a prop, never
 * invoked across the boundary.
 */
export type CarouselItem = {
  id: number | string
  href: string
  title: string
  body?: string | null
  caption?: string | null
  image?: Project['cover']
  editKey: string
}

/** Shapes a project or a case study into a card. */
export function toCarouselItem(
  doc: Project | CaseStudy,
  kind: 'projects' | 'caseStudies',
): CarouselItem {
  const isProject = kind === 'projects'
  return {
    id: doc.id,
    href: `${isProject ? '/projects' : '/case-studies'}/${doc.slug}`,
    title: doc.title,
    body: isProject ? (doc as Project).description : (doc as CaseStudy).summary,
    caption: isProject
      ? (doc as Project).category
      : [(doc as CaseStudy).client, (doc as CaseStudy).year].filter(Boolean).join(' · '),
    image: doc.cover,
    editKey: `${kind}.${doc.id}.cover`,
  }
}
