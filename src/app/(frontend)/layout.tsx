import type { Metadata, Viewport } from 'next'
import { Inter_Tight, JetBrains_Mono } from 'next/font/google'
import { site } from '@/site.config'
import './globals.css'
/* Its own stylesheet rather than a block pasted into globals.css, so updating
   the editor never means picking it back out of the site's own styles. */
import './editor.css'

import { EditorMount } from './components/EditorMount'

/**
 * TWO FAMILIES ONLY. globals.css reads --font-sans and --font-mono-face, so
 * re-typing the site is these two imports and nothing else.
 *
 * WHY INTER TIGHT
 * The design this is built on uses NB International Pro, which is commercial.
 * Inter Tight is the first fallback that system itself names, and it is the
 * right substitution for a reason beyond availability: what carries the look
 * is the tracking — negative and scaling with size — and Inter Tight is drawn
 * tight enough to take it without the counters closing up.
 *
 * Weights stop at 700. There is no 800 or 900 here on purpose: display type
 * in this system is set at 400, and having the heavy weights available is how
 * that slips.
 */
const sans = Inter_Tight({
  subsets: ['latin'],
  // Two weights, which is what the design files specify: 400 for everything
  // set large, 700 for small labels and button text. The middle weights are
  // absent so they cannot be reached for.
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

/** The 11–13px details: labels, meta, eyebrows. */
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono-face',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  icons: { icon: site.icon },
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
      </body>
    </html>
  )
}
