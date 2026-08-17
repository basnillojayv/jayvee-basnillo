import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Writes the Work page's copy into Payload.
 *
 *     npx payload run scripts/seed-work-page.ts
 *
 * WHY THIS EXISTS AT ALL, GIVEN EVERY FIELD HAS A `defaultValue`
 *
 * A `defaultValue` is applied when a field comes back *undefined*. Before the
 * schema push ran, `work-page` had no tables, every field was undefined, and
 * the page rendered entirely from defaults — which is why it looked complete.
 * Once the tables existed, the array fields started returning `[]`: empty, but
 * *defined*, so the defaults stopped applying and three sections rendered as
 * nothing. Scalars behave the same way once a row exists.
 *
 * Defaults are what the admin panel pre-fills a NEW document with. They are
 * not a content store, and a page that reads its copy from them only works
 * until the first save. This makes the content real.
 *
 * Safe to re-run: `updateGlobal` overwrites the same single row. Anything he
 * has edited in the admin WILL be overwritten, so run it once on a fresh
 * database rather than as a habit.
 *
 * `testimonials` is deliberately not seeded — see the note in the global.
 */
const seed = async () => {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'work-page',
    data: {
      heroEyebrow: 'Graphic designer, web designer & AI developer',
      heroTitle: 'Design and build for brands that need to be taken seriously.',
      heroCtaLabel: 'Start a project together',

      statementStruck: 'You need a website.',
      statementBody: [
        {
          text: 'What you need is the thing that turns a visit into an enquiry. The site is how it gets delivered.',
        },
        {
          text: 'I design and build custom sites, art-direct the brand around them, and wire in the AI-assisted workflows that keep them cheap to run after launch.',
        },
      ],

      designerEyebrow: 'The designer',
      designerHeading: 'I design and build modern, efficient websites that help businesses grow.',
      designerPoints: [
        {
          title: 'Design & development',
          copy: 'UX UI design and WordPress development with a focus on usability and performance.',
          icon: 'window',
        },
        {
          title: 'Website development',
          copy: 'Next.js, React and Tailwind CSS, written in TypeScript with Claude Code — for builds that need more than WordPress can give them.',
          icon: 'code',
        },
        {
          title: 'AI & modern workflows',
          copy: 'AI powered tools and modern design workflows to streamline development and improve results.',
          icon: 'spark',
        },
      ],

      whatEyebrow: 'What I do',
      whatItems: [
        {
          title: 'Web design & development',
          copy: 'Designing and building modern websites that are clear, responsive, and easy to manage.',
          stack: 'WordPress · Elementor · Webflow · Squarespace · Shopify · HTML · CSS · JavaScript',
          icon: 'window',
        },
        {
          title: 'Custom development',
          copy: 'Building custom websites and digital experiences with modern code and AI-assisted development workflows.',
          stack: 'Next.js · React · Tailwind CSS · TypeScript · Claude Code · GitHub · Vercel',
          icon: 'code',
        },
        {
          title: 'AI-powered workflows',
          copy: 'Using AI-assisted tools to accelerate research, prototyping, development, and iteration without sacrificing design quality.',
          stack: 'Claude Code · Cursor · AI-assisted development · Rapid prototyping',
          icon: 'spark',
        },
        {
          title: 'Branding & visual design',
          copy: 'Creating the visual foundation behind a digital presence, from identity systems to supporting graphics.',
          stack: 'Figma · Photoshop · Illustrator · Canva · UI/UX · Brand Design',
          icon: 'pen',
        },
      ],

      projectsEyebrow: 'Selected projects',
      projectsTitle: 'Recent work that makes an impact.',
      projectsLede:
        'A selection of websites I designed and built for businesses and organisations.',
      projectsCtaLabel: 'View all projects',
      marqueeTerms: [
        { label: 'Webdesign' },
        { label: 'Branding' },
        { label: 'WordPress' },
        { label: 'Elementor' },
        { label: 'Art direction' },
        { label: 'AI workflows' },
      ],

      toolsEyebrow: 'Tools & technology',
      toolsHeading: 'The tools I use to design and build.',
      toolsLede: 'Modern, reliable, and powerful tools that help me deliver quality results.',
      tools: [
        { name: 'Canva' },
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'WordPress' },
        { name: 'Elementor / Elementor Pro' },
        { name: 'Crocoblock' },
        { name: 'JetEngine' },
        { name: 'JetElements' },
        { name: 'Adobe Photoshop' },
        { name: 'Adobe Illustrator' },
        { name: 'Cursor AI' },
        { name: 'GitHub' },
        { name: 'Vercel' },
        { name: 'HTML' },
        { name: 'CSS' },
      ],

      services: [
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

      galleryEyebrow: 'Explorations',
      galleryTitle: 'The work that has no brief',
      galleryLede:
        'Type, posters and interface studies. Where the ideas get tried before a client pays for them.',
      galleryCtaLabel: 'See the explorations',

      testimonialsEyebrow: 'In their words',
      testimonialsTitle: 'Your satisfaction, first',

      faqs: [
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

      ctaTitle: 'Let us talk it through',
      ctaLede:
        'Fifteen minutes, no charge. Tell me what the project is and I will tell you what it takes.',
      ctaPrimaryLabel: 'Book a call',
      ctaSecondaryLabel: 'Send a brief',
    },
  })

  const check = await payload.findGlobal({ slug: 'work-page', depth: 0 })
  console.log('✓ work-page seeded')
  console.log(`  designerPoints: ${check.designerPoints?.length ?? 0}`)
  console.log(`  whatItems:      ${check.whatItems?.length ?? 0}`)
  console.log(`  tools:          ${check.tools?.length ?? 0}`)
  console.log(`  services:       ${check.services?.length ?? 0}`)
  console.log(`  faqs:           ${check.faqs?.length ?? 0}`)
}

/**
 * Top-level `await`, not `seed()` or `seed().catch()`.
 *
 * `payload run` finishes as soon as module evaluation returns. A floating
 * promise leaves it nothing to wait for, so the runner exited cleanly — code
 * 0, no output, no rows written — while `getPayload` was still connecting.
 * Awaiting here makes module evaluation itself the thing that has to finish.
 */
await seed()
