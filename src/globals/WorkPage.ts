import type { GlobalConfig } from 'payload'
import { revalidateSite } from '@/lib/revalidate'

/**
 * THE WORK PAGE'S OWN COPY.
 *
 * Same principle as Homepage: one admin tab per section, in the order the
 * sections appear, field names prefixed with the section. The lists of *work*
 * still come from the collections — projects, explorations — because those are
 * repeatable and have their own pages. What lives here is the framing around
 * them, which is the part that has nowhere else to be.
 *
 * WHY A SECOND GLOBAL RATHER THAN MORE TABS ON THE FIRST
 * `homepage` is now a one-screen page with four fields in use. Hanging a
 * second page's worth of copy off it would mean the admin's "Homepage" screen
 * is mostly not the homepage, and every editor who opens it has to know that.
 *
 * TWO SECTIONS SHIP EMPTY ON PURPOSE
 * `testimonials` has no default rows and the section does not render without
 * them. Seeding a testimonial means writing a quote and attributing it to a
 * named person who never said it, which is a fabricated endorsement whether or
 * not it is labelled as filler — it looks exactly like the real thing the
 * moment it renders. The FAQ answers *are* seeded, because those are claims
 * about his own service rather than someone else's words, but they are drafts
 * and want reading before launch.
 */
export const WorkPage: GlobalConfig = {
  slug: 'work-page',
  admin: { group: 'Content', description: 'The Work page copy, in page order.' },
  access: { read: () => true },
  hooks: { afterChange: [() => revalidateSite()] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroEyebrow',
              type: 'text',
              defaultValue: 'Graphic designer, web designer & AI developer',
              admin: { description: 'Set small, in caps, above the headline.' },
            },
            {
              name: 'heroTitle',
              type: 'textarea',
              defaultValue: 'Design and build for brands that need to be taken seriously.',
              admin: { description: 'Two lines at display size. Keep it to one sentence.' },
            },
            {
              name: 'heroCtaLabel',
              type: 'text',
              defaultValue: 'Start a project together',
            },
          ],
        },
        {
          label: 'Statement',
          description: 'The struck-through line and the paragraphs under it.',
          fields: [
            {
              name: 'statementStruck',
              type: 'text',
              defaultValue: 'You need a website.',
              admin: { description: 'Drawn through with a rule as it scrolls into view.' },
            },
            {
              name: 'statementBody',
              type: 'array',
              labels: { singular: 'Paragraph', plural: 'Paragraphs' },
              defaultValue: [
                {
                  text: 'What you need is the thing that turns a visit into an enquiry. The site is how it gets delivered.',
                },
                {
                  text: 'I design and build custom sites, art-direct the brand around them, and wire in the AI-assisted workflows that keep them cheap to run after launch.',
                },
              ],
              fields: [{ name: 'text', type: 'textarea', required: true }],
            },
          ],
        },
        {
          label: 'Projects',
          fields: [
            { name: 'projectsEyebrow', type: 'text', defaultValue: 'Selected projects' },
            {
              name: 'projectsTitle',
              type: 'text',
              defaultValue: 'Recent work that makes an impact.',
              admin: { description: 'The closing full stop is coloured in code, not typed here.' },
            },
            {
              name: 'projectsLede',
              type: 'textarea',
              defaultValue:
                'A selection of websites I designed and built for businesses and organisations.',
            },
            { name: 'projectsCtaLabel', type: 'text', defaultValue: 'View all projects' },
            {
              name: 'marqueeTerms',
              type: 'array',
              labels: { singular: 'Term', plural: 'Terms' },
              admin: {
                description:
                  'The words on the two diagonal ribbons. Six to ten reads best — the strip repeats until it fills the screen.',
              },
              defaultValue: [
                { label: 'Webdesign' },
                { label: 'Branding' },
                { label: 'WordPress' },
                { label: 'Elementor' },
                { label: 'Art direction' },
                { label: 'AI workflows' },
              ],
              fields: [{ name: 'label', type: 'text', required: true }],
            },
          ],
        },
        {
          label: 'Services',
          description: 'Alternating text and image. Three fits the rhythm.',
          fields: [
            {
              name: 'services',
              type: 'array',
              maxRows: 4,
              labels: { singular: 'Service', plural: 'Services' },
              defaultValue: [
                {
                  eyebrow: 'Branding',
                  title: 'Your identity at the centre of the work',
                  body: 'Identity design, a brand book, mockups and the build. One person across all of it, so the thing that ships is the thing that was designed.',
                },
                {
                  eyebrow: 'Web design',
                  title: 'A custom site, quick to run and simple to edit',
                  body: 'No templates. Built to be edited by you rather than by me — on WordPress and Elementor, or on a headless CMS when the project earns one.',
                },
                {
                  eyebrow: 'AI workflows',
                  title: 'The parts that should not need a person',
                  body: 'Content pipelines, drafting and asset generation wired into the build, so publishing after launch costs a fraction of what it used to.',
                },
              ],
              fields: [
                { name: 'eyebrow', type: 'text', required: true },
                { name: 'title', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
                {
                  name: 'images',
                  type: 'array',
                  maxRows: 4,
                  labels: { singular: 'Image', plural: 'Images' },
                  admin: {
                    description:
                      'Two to four. They are scattered rather than stacked, so mixed shapes work better here than matched ones.',
                  },
                  fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
                },
              ],
            },
          ],
        },
        {
          label: 'Designer',
          description: 'The person, and the three things the claim turns into.',
          fields: [
            { name: 'designerEyebrow', type: 'text', defaultValue: 'The designer' },
            {
              name: 'designerHeading',
              type: 'textarea',
              defaultValue: 'I design and build modern, efficient websites that help businesses grow.',
              admin: { description: 'Set large. The final full stop is coloured in code, not typed here.' },
            },
            {
              name: 'designerPoints',
              type: 'array',
              maxRows: 3,
              labels: { singular: 'Point', plural: 'Points' },
              defaultValue: [
                {
                  title: 'Design & development',
                  copy: 'UX UI design and WordPress development with a focus on usability and performance.',
                  icon: 'window',
                },
                {
                  title: 'WordPress expertise',
                  copy: 'Elementor, JetEngine, JetElements and Crocoblock to build dynamic, scalable websites.',
                  icon: 'puzzle',
                },
                {
                  title: 'AI & modern workflows',
                  copy: 'AI powered tools and modern design workflows to streamline development and improve results.',
                  icon: 'spark',
                },
              ],
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'copy', type: 'textarea', required: true },
                {
                  name: 'icon',
                  type: 'select',
                  defaultValue: 'window',
                  options: [
                    { label: 'Browser window', value: 'window' },
                    { label: 'Puzzle piece', value: 'puzzle' },
                    { label: 'Sparkles', value: 'spark' },
                    { label: 'Pen / curve', value: 'pen' },
                    { label: 'Angle brackets', value: 'code' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'What I do',
          fields: [
            { name: 'whatEyebrow', type: 'text', defaultValue: 'What I do' },
            {
              name: 'whatItems',
              type: 'array',
              maxRows: 5,
              labels: { singular: 'Item', plural: 'Items' },
              admin: { description: 'Five fills the row on a wide screen; they wrap below that.' },
              defaultValue: [
                {
                  title: 'Website design & development',
                  copy: 'Custom WordPress websites built with Elementor for businesses, nonprofits, and organizations.',
                  icon: 'window',
                },
                {
                  title: 'WordPress expertise',
                  copy: 'JetEngine, JetElements, and Crocoblock solutions for dynamic and scalable websites.',
                  icon: 'puzzle',
                },
                {
                  title: 'AI & modern workflows',
                  copy: 'Using AI tools and smart workflows to speed up prototyping, design, and development.',
                  icon: 'spark',
                },
                {
                  title: 'Branding & design',
                  copy: 'Creating visual identities and design assets that communicate your brand with impact.',
                  icon: 'pen',
                },
              ],
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'copy', type: 'textarea', required: true },
                {
                  name: 'icon',
                  type: 'select',
                  defaultValue: 'window',
                  options: [
                    { label: 'Browser window', value: 'window' },
                    { label: 'Puzzle piece', value: 'puzzle' },
                    { label: 'Sparkles', value: 'spark' },
                    { label: 'Pen / curve', value: 'pen' },
                    { label: 'Angle brackets', value: 'code' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Tools',
          description:
            'Brand marks come from Simple Icons (CC0) where one exists. Adobe and Canva have asked to be removed from open icon sets, and the Crocoblock family has no open mark — those render as a lettermark in this site\'s own typeface rather than an imitation of a logo. Upload a licensed file and it will be used instead.',
          fields: [
            { name: 'toolsEyebrow', type: 'text', defaultValue: 'Tools & technology' },
            {
              name: 'toolsHeading',
              type: 'text',
              defaultValue: 'The tools I use to design and build.',
            },
            {
              name: 'toolsLede',
              type: 'textarea',
              defaultValue:
                'Modern, reliable, and powerful tools that help me deliver quality results.',
            },
            {
              name: 'tools',
              type: 'array',
              labels: { singular: 'Tool', plural: 'Tools' },
              defaultValue: [
                { name: 'Canva' }, { name: 'Figma' }, { name: 'Adobe XD' },
                { name: 'WordPress' }, { name: 'Elementor / Elementor Pro' },
                { name: 'Crocoblock' }, { name: 'JetEngine' }, { name: 'JetElements' },
                { name: 'Adobe Photoshop' }, { name: 'Adobe Illustrator' },
                { name: 'Cursor AI' }, { name: 'GitHub' }, { name: 'Vercel' },
                { name: 'HTML' }, { name: 'CSS' },
              ],
              fields: [
                { name: 'name', type: 'text', required: true },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description:
                      'Optional. Overrides the built-in mark — use it for brands with no open icon.',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Gallery',
          description: 'The full-bleed grid, drawn from Explorations, with a panel over it.',
          fields: [
            { name: 'galleryEyebrow', type: 'text', defaultValue: 'Explorations' },
            { name: 'galleryTitle', type: 'text', defaultValue: 'The work that has no brief' },
            {
              name: 'galleryLede',
              type: 'textarea',
              defaultValue:
                'Type, posters and interface studies. Where the ideas get tried before a client pays for them.',
            },
            { name: 'galleryCtaLabel', type: 'text', defaultValue: 'See the explorations' },
          ],
        },
        {
          label: 'Testimonials',
          description:
            'Ships empty, and the section does not render until there is at least one. Add only quotes you actually received.',
          fields: [
            { name: 'testimonialsEyebrow', type: 'text', defaultValue: 'In their words' },
            { name: 'testimonialsTitle', type: 'text', defaultValue: 'Your satisfaction, first' },
            { name: 'testimonialsBody', type: 'textarea' },
            {
              name: 'testimonials',
              type: 'array',
              labels: { singular: 'Testimonial', plural: 'Testimonials' },
              fields: [
                { name: 'quote', type: 'textarea', required: true },
                {
                  type: 'row',
                  fields: [
                    { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
                    { name: 'role', type: 'text', admin: { width: '50%' } },
                  ],
                },
                { name: 'image', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          label: 'FAQ',
          description: 'Draft answers — read them before launch, they make claims on your behalf.',
          fields: [
            {
              name: 'faqs',
              type: 'array',
              labels: { singular: 'Question', plural: 'Questions' },
              defaultValue: [
                {
                  question: 'How long until my site is live?',
                  answer:
                    'A single-page marketing site is usually two to three weeks from brief to launch. A larger build with a CMS behind it runs four to eight, depending on how much of the content already exists.',
                },
                {
                  question: 'Do you offer anything besides web design?',
                  answer:
                    'Yes — identity design, print and event collateral, and the AI-assisted workflows that sit behind the content. Most projects are some combination rather than one of them.',
                },
                {
                  question: 'Why WordPress and Elementor?',
                  answer:
                    'Because you can edit it without me. It is the least surprising thing to hand over, and it keeps a site cheap to maintain for years after launch. Where a project needs something faster or more bespoke, I build it headless instead.',
                },
                {
                  question: 'Can you take on an e-commerce build?',
                  answer:
                    'Yes, for catalogues that are a manageable size. Beyond a few hundred products the right answer is usually a dedicated platform, and I will say so rather than stretch a build that will not hold.',
                },
              ],
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Closing',
          fields: [
            { name: 'ctaTitle', type: 'text', defaultValue: 'Let us talk it through' },
            {
              name: 'ctaLede',
              type: 'textarea',
              defaultValue:
                'Fifteen minutes, no charge. Tell me what the project is and I will tell you what it takes.',
            },
            {
              type: 'row',
              fields: [
                { name: 'ctaPrimaryLabel', type: 'text', defaultValue: 'Book a call', admin: { width: '50%' } },
                { name: 'ctaSecondaryLabel', type: 'text', defaultValue: 'Send a brief', admin: { width: '50%' } },
              ],
            },
            {
              name: 'ctaImage',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Full-bleed behind the closing panel. Landscape, and darkened in code.' },
            },
          ],
        },
      ],
    },
  ],
}
