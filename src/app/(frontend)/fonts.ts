import localFont from 'next/font/local'

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
 *
 * SELF-HOSTED, NOT `next/font/google`, AND THAT IS A BUILD FIX
 * `next/font/google` downloads the font files during the build, which makes
 * every build depend on `fonts.gstatic.com` answering from the build machine.
 * It stopped answering on Vercel — three retries, then `Failed to fetch
 * 'Josefin Sans' from Google Fonts` and a dead deploy. Nothing about the
 * project had changed. Serving the files from the repo removes the network
 * from the build entirely; it cannot fail this way again.
 *
 * TWO FILES, NOT FOUR. Josefin Sans is a variable font, so Google returns one
 * file per style covering the whole 100-700 range — the "400" and "700"
 * downloads were byte-identical (verified by checksum). Hence a weight RANGE
 * rather than four fixed-weight faces: same rendering, half the bytes, and no
 * duplicate files to keep in step.
 *
 * Licensed under the SIL Open Font License; OFL.txt sits beside the files, as
 * the licence requires when redistributing them.
 */
export const sans = localFont({
  src: [
    { path: './fonts/josefin-sans-normal.woff2', weight: '100 700', style: 'normal' },
    { path: './fonts/josefin-sans-italic.woff2', weight: '100 700', style: 'italic' },
  ],
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
 * same file for both — it is deduplicated by path, so the second binding costs
 * a CSS variable and no extra download.
 */
export const mono = localFont({
  src: [{ path: './fonts/josefin-sans-normal.woff2', weight: '100 700', style: 'normal' }],
  variable: '--font-mono-face',
  display: 'swap',
})
