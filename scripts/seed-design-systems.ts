import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Writes the two design systems into Payload.
 *
 *     npx payload run scripts/seed-design-systems.ts
 *
 * Idempotent, unlike the other seed scripts here: it matches on `slug` and
 * updates in place, so re-running restores the original wording without
 * creating a duplicate. It WILL overwrite edits made in the admin panel, so
 * run it to set these up or to reset them — not as a habit.
 *
 * Every value below is read off the systems themselves — the palettes and
 * typefaces are the ones the bundles in `public/design-systems/` actually use,
 * not an approximation. If a system changes, change it there first.
 */
const SYSTEMS = [
  {
    slug: 'linehaul-station',
    title: 'LineHaul Station',
    client: 'LineHaul Station',
    year: '2026',
    order: 10,
    summary:
      'A unified, industrial-premium identity for a freight-relay network — the modern-day Pony Express. Carbon dominates, chrome structures, Fuel Orange ignites. Covers the parent brand and its sub-brands, from the shield and broadcast marks through colour, type, components and motion.',
    href: '/design-systems/linehaul',
    // NOT lhs-horz-black.png: in this bundle the filenames describe the
    // BACKGROUND, not the artwork, so "black" is the white lockup and is
    // invisible on a light card. Verified by luminance, not by name.
    logo: '/design-systems/linehaul/assets/logo-horz-dark.png',
    scope: ['Logo system', 'Colour', 'Type', 'Imagery', 'Components', 'Motion', 'Patterns'],
    swatches: [
      { name: 'Carbon Black', value: '#1A1A1A' },
      { name: 'Chrome Silver', value: '#B0B0B0' },
      { name: 'Steel Blue', value: '#7EC8E3' },
      { name: 'Fuel Orange', value: '#F07820' },
      { name: 'Ember Red', value: '#D02020' },
      { name: 'LHS Green', value: '#18A848' },
    ],
    // The licensed foundry faces, which is what the brand specifies. The
    // bundle renders in web substitutes (Archivo, Michroma, Newsreader) and
    // says so on its own typography page.
    typefaces: [
      { role: 'Headline', name: 'Azo Sans Black' },
      { role: 'Subhead', name: 'Eurostile Extended' },
      { role: 'Body', name: 'FreightText Pro' },
    ],
  },
  {
    slug: 'prosomnus-sleep-technologies',
    title: 'ProSomnus Sleep Technologies',
    client: 'ProSomnus, via Excelsior Creative',
    year: '2026',
    order: 20,
    summary:
      'A warm, reassuring system for a medical device brand serving two audiences at once — patients looking for a CPAP alternative, and the clinicians who prescribe it. Fifteen interactive pages: foundations, a component library, and full page templates for both.',
    href: '/design-systems/prosomnus',
    logo: '/design-systems/prosomnus/assets/prosomnus-logo.svg',
    scope: ['Brand & voice', 'Colour', 'Type', 'Spacing', 'Components', 'Page templates', 'UI kits'],
    swatches: [
      { name: 'Royal blue', value: '#2261AE' },
      { name: 'Crescent cyan', value: '#009AD9' },
      { name: 'Amber accent', value: '#FBBF24' },
      { name: 'Text', value: '#1F2937' },
      { name: 'Page', value: '#F3F4F6' },
    ],
    typefaces: [
      { role: 'Headings', name: 'Newsreader' },
      { role: 'Body & UI', name: 'Manrope' },
    ],
  },
  {
    slug: 'oc-fellows',
    title: 'OC Fellows',
    client: 'CEO Leadership Alliance of Orange County, via Excelsior Creative',
    year: '2026',
    order: 30,
    summary:
      'A brand system for a two-year leadership programme developing early-career professionals in Orange County. Warm, plain and institutional-but-human: the logo family and its on-colour tiles, the six brand colours with derived scales, the type pairing, and a component library for the site it feeds.',
    href: '/design-systems/oc-fellows',
    logo: '/design-systems/oc-fellows/assets/logo-primary.svg',
    scope: ['Logo system', 'Colour', 'Type', 'Spacing & layout', 'Motion', 'Components', 'Voice'],
    swatches: [
      { name: 'Navy', value: '#002F4B' },
      { name: 'Ink', value: '#2A2C3B' },
      { name: 'Teal', value: '#00ACC1' },
      { name: 'Aqua', value: '#A8DADC' },
      { name: 'Orange', value: '#FF944D' },
      { name: 'Slate', value: '#7D8C8C' },
    ],
    // Inter is the brand's real face; the other two stand in for licensed
    // faces (Proxima Nova and Gobia) that are not web-available. The bundle
    // says so on its own typeface page.
    typefaces: [
      { role: 'Primary', name: 'Inter' },
      { role: 'Body (sub. Proxima Nova)', name: 'Nunito Sans' },
      { role: 'Logo (sub. Gobia)', name: 'Poppins' },
    ],
  },
]

const seed = async () => {
  const payload = await getPayload({ config })

  for (const system of SYSTEMS) {
    const data = {
      ...system,
      scope: system.scope.map((label) => ({ label })),
    }

    const existing = await payload.find({
      collection: 'design-systems',
      where: { slug: { equals: system.slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({ collection: 'design-systems', id: existing.docs[0].id, data })
      payload.logger.info(`Updated → ${system.title}`)
    } else {
      await payload.create({ collection: 'design-systems', data })
      payload.logger.info(`Created → ${system.title}`)
    }
  }

  payload.logger.info('Design systems seeded.')
  process.exit(0)
}

await seed()
