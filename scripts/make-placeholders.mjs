/**
 * Regenerates the placeholder assets in /public/media.
 *
 *   npm run placeholders
 *
 * These stand in for real imagery so a fresh clone renders correctly before a
 * single upload — every `mediaUrl(field, fallback)` call points at one of them.
 * They are intentionally plain: an obviously fake image is a to-do list item,
 * a stock photo is a thing you forget to replace.
 *
 * WHY THESE ARE FLAT
 * The starter's versions were a diagonal hatch over a gradient with a ring in
 * the middle. Every one of those is a device this design system rules out — no
 * decorative gradients, no mid-tone chromatic surfaces, no ornament standing in
 * for information. A placeholder that breaks the system it sits inside teaches
 * the wrong thing about the system, so these are what the system actually
 * allows: a flat fog field, a hairline in the mist tone, a mono caption, and
 * one small coral mark.
 *
 * Nothing here is derived from anyone else's artwork. It is four rectangles.
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'media')

/** In step with the design tokens in globals.css. */
const PALETTE = {
  coral: '#FC5F2B',
  carbon: '#18181B',
  zinc: '#71717A',
  ash: '#A1A1AA',
  mist: '#E4E4E7',
  fog: '#F4F4F5',
  paper: '#FFFFFF',
}

/**
 * A flat field with a hairline inset, a caption, and a small coral square.
 *
 * `dark` flips it to the carbon surface — the same two-tone stack the page
 * uses, so a placeholder never introduces a third kind of surface.
 */
const scene = (w, h, { label, dark = false }) => {
  const bg = dark ? PALETTE.carbon : PALETTE.fog
  const rule = dark ? '#FFFFFF' : PALETTE.mist
  const ruleOpacity = dark ? 0.14 : 1
  const ink = dark ? '#FFFFFF' : PALETTE.zinc
  const inkOpacity = dark ? 0.72 : 1
  const inset = Math.round(Math.min(w, h) * 0.045)
  const mark = Math.round(Math.min(w, h) * 0.035)
  const caption = Math.round(Math.min(w, h) * 0.032)

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect x="${inset}" y="${inset}" width="${w - inset * 2}" height="${h - inset * 2}"
        rx="${Math.round(Math.min(w, h) * 0.02)}"
        fill="none" stroke="${rule}" stroke-opacity="${ruleOpacity}" stroke-width="2"/>
  <rect x="${inset * 2}" y="${inset * 2}" width="${mark}" height="${mark}"
        rx="${Math.round(mark * 0.28)}" fill="${PALETTE.coral}"/>
  <text x="${inset * 2}" y="${h - inset * 2}"
        font-family="ui-monospace,SFMono-Regular,Menlo,monospace"
        font-size="${caption}" fill="${ink}" fill-opacity="${inkOpacity}">${label}</text>
</svg>`
}

/** A wordmark, so the header and footer render before a real mark exists. */
const wordmark = (ink) => `
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="160" viewBox="0 0 640 160">
  <rect x="16" y="56" width="48" height="48" rx="14" fill="${PALETTE.coral}"/>
  <text x="84" y="98" font-family="Helvetica,Arial,sans-serif" font-size="46"
        font-weight="400" letter-spacing="-1.2" fill="${ink}">Jayvee Basnillo</text>
</svg>`

const JOBS = [
  { file: 'placeholder-hero.jpg', svg: scene(2400, 1400, { label: 'HERO 12:7', dark: true }) },
  { file: 'placeholder-wide.jpg', svg: scene(1800, 1200, { label: 'WIDE 3:2' }) },
  { file: 'placeholder-portrait.jpg', svg: scene(1200, 1500, { label: 'PORTRAIT 4:5' }) },
  { file: 'placeholder-texture.jpg', svg: scene(1800, 1200, { label: 'TEXTURE', dark: true }) },
  // The two this site actually needs: a work tile and a showcase square.
  { file: 'placeholder-tile.jpg', svg: scene(1600, 1000, { label: 'PROJECT COVER 16:10' }) },
  { file: 'placeholder-square.jpg', svg: scene(1200, 900, { label: 'EXPLORATION 4:3' }) },
]

await mkdir(OUT, { recursive: true })

for (const { file, svg } of JOBS) {
  await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(OUT, file))
  console.log(`  ✓ ${file}`)
}

for (const [file, ink] of [
  ['logo.png', PALETTE.carbon],
  ['logo-white.png', PALETTE.paper],
]) {
  await sharp(Buffer.from(wordmark(ink))).png().toFile(path.join(OUT, file))
  console.log(`  ✓ ${file}`)
}

console.log(`\n${JOBS.length + 2} placeholders written to public/media`)
