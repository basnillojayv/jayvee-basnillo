import type { Metadata, Viewport } from 'next'
import { Josefin_Sans } from 'next/font/google'
import { site } from '@/site.config'
import './globals.css'
/* Its own stylesheet rather than a block pasted into globals.css, so updating
   the editor never means picking it back out of the site's own styles. */
import './editor.css'

import { EditorMount } from './components/EditorMount'

/**
 * ONE FAMILY. Josefin Sans carries the whole site.
 *
 * This replaces the Inter Tight / JetBrains Mono pairing the template shipped
 * with, and the swap is not neutral — it is worth writing down what moved:
 *
 * · TRACKING. Inter Tight was chosen because it is drawn tight enough to take
 *   the aggressive negative tracking this system applies at display sizes.
 *   Josefin Sans is geometric and already narrow-set; the same negative values
 *   close its counters and turn the display lines into a smear. The tracking
 *   scale in globals.css was eased off to suit it.
 * · X-HEIGHT. Josefin's is markedly small with long ascenders, so it reads
 *   smaller than its point size suggests. Body copy is set at the same value
 *   as before and simply looks quieter.
 * · THE MONO ROLE IS GONE. `--font-mono-face` now points at Josefin too, so
 *   the eyebrows, stat labels and the intro's name line are no longer
 *   monospaced. That was a deliberate texture in the original design and this
 *   removes it — restoring it is re-adding the JetBrains import and pointing
 *   the variable back at it, nothing more.
 *
 * Weights stop at 700, which is both the system's existing rule and the top of
 * Josefin Sans's range.
 */
const sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

/**
 * The same family again, bound to the *second* variable.
 *
 * Not `const mono = sans` — that alias publishes `--font-sans` twice and
 * leaves `--font-mono-face` undefined, at which point every `var(--font-mono)`
 * in the stylesheet silently falls through to `ui-monospace` and the labels
 * render in the system's monospace instead of Josefin. Declaring it separately
 * is what actually points the token at this family, and next/font serves the
 * same files for both.
 */
const mono = Josefin_Sans({
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
