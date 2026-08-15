/**
 * SEED CONTENT — written into the `homepage` global on a fresh database
 * (see the `onInit` hook in payload.config.ts).
 *
 * What a completely empty database renders. The starter's promise is that the
 * site works before anyone has typed anything, so this fills the required
 * fields and little else. It is not the real content — that arrives from
 * `scripts/migrate-content.ts`, which overwrites all of it — and it is
 * deliberately, obviously placeholder, because seed copy that reads like real
 * copy is seed copy that ships.
 *
 * `onInit` runs on every boot, so the required fields here must match
 * `globals/Homepage.ts` exactly. Add a required field there without a value
 * here and the app fails to *start*, not merely to seed — which is how this
 * file was found in the first place.
 */
export const homepageData = {
  heroNameFirst: 'FIRST',
  heroNameLast: 'LAST',
  heroTagline: 'What this person does, in one line',
  heroWatermarkLeft: 'BACKGROUND WORD',
  heroWatermarkRight: 'SECOND WORD',

  aboutEyebrow: 'The Designer',
  aboutLede:
    'The opening statement, set large. One sentence saying what this person does and who for.',
  aboutBody: [{ text: 'A supporting paragraph.' }],
  aboutPillars: [
    { title: 'First pillar', copy: 'What it means in practice.' },
    { title: 'Second pillar', copy: 'What it means in practice.' },
  ],

  statsItems: [
    { value: '0+', label: 'Years Experience' },
    { value: '0+', label: 'Projects Completed' },
  ],
  statsStatement: 'The paragraph that sits beside the numbers.',

  capabilitiesEyebrow: 'Core Skills',
  capabilitiesGroups: [{ title: 'A group of tools', tags: [{ label: 'A skill' }] }],

  projectsEyebrow: 'Selected Works',
  caseStudiesEyebrow: 'The Thinking',
  showcaseEyebrow: 'Design Showcase',

  contactEyebrow: 'Connect',
  contactHeadlineLead: 'Build with',
  contactHeadlineAccent: 'Confidence.',
  contactCtaLabel: 'Get in Touch',
}
