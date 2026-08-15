import type { MetadataRoute } from 'next'

/**
 * The admin panel, the staff sign-in and the REST API have no business in a
 * search index.
 *
 * `/edit` carries a noindex of its own as well. Both are worth having:
 * robots.txt stops a crawler that reads it, and the meta tag stops one that
 * arrives by a direct link and never looks.
 */
export default function robots(): MetadataRoute.Robots {
  // No `sitemap:` line — this starter ships no sitemap route, and pointing a
  // crawler at a 404 is worse than saying nothing. Add both together.
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/edit', '/api/'] }],
  }
}
