import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { site } from '@/site.config'

/**
 * Every page worth indexing, with the date it actually changed.
 *
 * The static routes are listed by hand because there are eight of them and a
 * filesystem walk would also sweep up `/edit`, the admin and the API. The
 * dynamic ones come from Payload, so a new project or case study appears here
 * the next time the site builds without anyone remembering this file exists.
 *
 * `updatedAt` is Payload's own, which makes `lastModified` a fact rather than
 * the build timestamp pretending to be one.
 */
const url = (path: string) => `${site.url.replace(/\/$/, '')}${path}`

const STATIC: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, freq: 'monthly' },
  { path: '/services', priority: 0.9, freq: 'monthly' },
  { path: '/projects', priority: 0.9, freq: 'weekly' },
  { path: '/case-studies', priority: 0.8, freq: 'monthly' },
  { path: '/designs', priority: 0.8, freq: 'weekly' },
  { path: '/contact', priority: 0.7, freq: 'yearly' },
  { path: '/privacy', priority: 0.2, freq: 'yearly' },
  { path: '/terms', priority: 0.2, freq: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  let dynamic: MetadataRoute.Sitemap = []
  try {
    const payload = await getPayload({ config })
    const [projects, studies] = await Promise.all([
      payload.find({ collection: 'projects', limit: 500, depth: 0, select: { slug: true, updatedAt: true } }),
      payload.find({ collection: 'case-studies', limit: 500, depth: 0, select: { slug: true, updatedAt: true } }),
    ])

    dynamic = [
      ...projects.docs.map((d) => ({
        url: url(`/projects/${d.slug}`),
        lastModified: new Date(d.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
      ...studies.docs.map((d) => ({
        url: url(`/case-studies/${d.slug}`),
        lastModified: new Date(d.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
      /**
       * The design-system routes are keyed by a shorter segment than the CMS
       * slug (`linehaul` vs `linehaul-station`), so they are not derivable from
       * the document alone — see BUNDLES in the route. Listing the two that
       * differ by hand is less fragile than re-deriving the mapping here.
       */
      ...['linehaul', 'prosomnus', 'oc-fellows'].map((slug) => ({
        url: url(`/design-systems/${slug}`),
        lastModified: now,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
      })),
    ]
  } catch {
    // A sitemap that is missing its dynamic half still beats a build that fails
    // because the database was briefly unreachable.
  }

  return [
    ...STATIC.map((s) => ({
      url: url(s.path),
      lastModified: now,
      changeFrequency: s.freq,
      priority: s.priority,
    })),
    ...dynamic,
  ]
}
