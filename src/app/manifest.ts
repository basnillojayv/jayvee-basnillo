import type { MetadataRoute } from 'next'
import { site } from '@/site.config'

/**
 * What a phone uses when the site is saved to a home screen.
 *
 * `display: 'browser'` rather than `standalone`: this is a portfolio, not an
 * app, and a standalone window strips the address bar and the back gesture
 * from something that is entirely made of links.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'browser',
    background_color: '#FAFAFA',
    theme_color: site.themeColor,
    icons: [
      { src: '/media/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/media/icon-512.png', sizes: '512x512', type: 'image/png' },
      // `purpose: maskable` on a padded square, so Android can crop it to
      // whatever shape the launcher uses without clipping the mark.
      { src: '/media/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
