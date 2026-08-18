import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { StickyCta } from './components/StickyCta'
import { site } from '@/site.config'
import { sans, mono } from './fonts'
import './globals.css'
/* Its own stylesheet rather than a block pasted into globals.css, so updating
   the editor never means picking it back out of the site's own styles. */
import './editor.css'

import { EditorMount } from './components/EditorMount'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  /**
   * `template` rather than a bare string: every page that sets its own title
   * gets the studio name appended, and the homepage keeps `default` on its own.
   * Without it each route would have to repeat the suffix by hand and one of
   * them would eventually forget.
   */
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  /**
   * SVG first for anything that understands it, a 32px PNG for what does not,
   * and the Apple touch icon on a solid ground — iOS does not composite
   * transparency and would otherwise put the mark on black.
   */
  icons: {
    icon: [
      { url: site.icon, type: 'image/svg+xml' },
      { url: '/media/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/media/apple-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  // The admin and the editor door are already disallowed in robots.txt; this
  // is the instruction for everything else.
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: site.themeColor,
  // Light-only site: tell browsers not to auto-dark the page.
  colorScheme: 'light',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        {/* Renders nothing for a visitor: it asks one question when the browser
            goes idle, and only a signed-in editor gets an answer with anything
            in it. Every page stays as static as it was. */}
        <EditorMount />
        <StickyCta />
        {/* Cookieless, so it needs no consent banner — which is the reason it
            was chosen over a tag manager. It reports nothing in development. */}
        <Analytics />
      </body>
    </html>
  )
}
