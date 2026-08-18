import type { MetadataRoute } from 'next'
import { site } from '@/site.config'

/**
 * The admin panel, the staff sign-in and the REST API have no business in a
 * search index.
 *
 * `/edit` carries a noindex of its own as well. Both are worth having:
 * robots.txt stops a crawler that reads it, and the meta tag stops one that
 * arrives by a direct link and never looks.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/edit', '/api/'] }],
    // There is a sitemap now — see src/app/sitemap.ts. The two are meant to be
    // added together, which is what the note here used to say.
    sitemap: `${site.url.replace(/\/$/, '')}/sitemap.xml`,
  }
}
