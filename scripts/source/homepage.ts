/**
 * The homepage copy, lifted out of the old portfolio's section components.
 *
 * In the Vite site this text was hardcoded across `src/sections/*.tsx` — Hero,
 * About, Stats, Capabilities, Tools, ProjectTiles, CaseStudies, DesignShowcase
 * and Contact. It is gathered here once so the migration has a single thing to
 * read, and so nothing is lost in the move by being noticed too late.
 *
 * Every string below is verbatim from the old site. Where the old markup split
 * a sentence across elements for styling — the hero name, the contact
 * headline — it is split into the same two fields rather than rejoined, because
 * the design sets the halves differently.
 */

export const homepage = {
  hero: {
    /** Two oversized words that drift apart on scroll in the old site. */
    watermarkLeft: 'STRATEGIC DESIGNER',
    watermarkRight: 'WEB ARCHITECT',
    nameFirst: 'JAYVEE',
    nameLast: 'BASNILLO',
    tagline: 'Graphic/Web Designer | WordPress Elementor Builder | AI Web Developer',
    /** Google Drive hotlink in the old site; downloaded by the migration. */
    portrait: 'https://lh3.googleusercontent.com/d/18Qo2d9cX8UFgJl4g4Yg4U4l-hMISP9JK',
  },

  about: {
    eyebrow: 'The Designer',
    portrait: 'https://lh3.googleusercontent.com/d/1VfSrQwqmGu868Cub9Rct5O6HE-TgI2ak',
    lede:
      'A designer with 10+ years of experience in graphic and web design, specializing in website design and development using WordPress and Elementor, while incorporating AI powered tools to create modern, efficient digital experiences.',
    body: [
      'Specializes in UX UI design and WordPress development, delivering websites that combine strong visual design with effective structure and usability. Experienced in designing and implementing full websites, landing pages, and brand assets for businesses, nonprofits, and organizations.',
      'Extensive experience building websites using WordPress, Elementor, and Crocoblock tools such as JetEngine and JetElements, enabling dynamic and scalable web solutions.',
      'Also incorporates AI assisted workflows and modern design tools to accelerate prototyping, streamline development, and improve overall design efficiency.',
    ],
    pillars: [
      {
        title: 'Web Design & UX/UI',
        copy: 'Creating intuitive interfaces and seamless user journeys that drive engagement.',
      },
      {
        title: 'WordPress Development',
        copy: 'Building dynamic, high-performance websites using Elementor and Crocoblock.',
      },
      {
        title: 'Brand & Visual Design',
        copy: 'Crafting unique brand identities and visual assets that resonate with audiences.',
      },
      {
        title: 'AI Assisted Design Workflow',
        copy: 'Leveraging cutting-edge AI tools to enhance creativity and optimize production.',
      },
    ],
  },

  stats: {
    items: [
      { value: '10+', label: 'Years Experience' },
      { value: '50+', label: 'Projects Completed' },
    ],
    statement:
      'A web and digital designer focused on creating clean, modern, and functional websites. Specializing in WordPress and Elementor development, with experience building scalable websites using Crocoblock tools such as JetEngine and JetElements.',
  },

  /**
   * New — no equivalent existed on the old site.
   *
   * Written to the shape the design uses: four steps, each a plain verb phrase
   * and two sentences. The temptation is to describe a methodology; what the
   * pattern actually wants is what happens, in order, from the client's side.
   */
  how: {
    eyebrow: 'How it works',
    lede: 'Four steps from first conversation to a site you can run yourself.',
    steps: [
      {
        title: 'Work out what it has to do',
        copy: 'Before any design, we agree what the site is for and who it has to convince. Most rebuilds fail here rather than in the visuals.',
      },
      {
        title: 'Design it properly',
        copy: 'Structure first, then the visual design — typography, colour and layout built as a system rather than page by page.',
      },
      {
        title: 'Build it to last',
        copy: 'WordPress and Elementor where the team knows it, a modern headless build where the content is structured. Either way it is fast and it is yours.',
      },
      {
        title: 'Hand it over',
        copy: 'You get a site you can edit yourself, without a developer and without breaking the design. That is the point of the whole exercise.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'Core Skills',
    groups: [
      {
        title: 'WordPress & Elementor',
        tags: ['WordPress & Elementor', 'Elementor Pro', 'Crocoblock', 'JetEngine', 'JetElements'],
      },
      {
        title: 'Headless CMS & Content',
        tags: ['Sanity', 'Payload CMS', 'Structured Content Modeling'],
      },
      {
        title: 'Web Design & UX/UI Tools',
        tags: ['Figma', 'Prototyping & Responsive Design'],
      },
      {
        title: 'Graphic Design & Branding Tools',
        tags: [
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Canva',
          'Logo Design & Brand Identity',
          'Print Design',
          'Social Media Assets',
        ],
      },
      {
        title: 'AI-Assisted Design Tools',
        tags: [
          'Claude Code',
          'Claude Chat',
          'Codex',
          'ChatGPT / OpenAI',
          'Google AI Studio',
          'Cursor AI',
          'Lovable.dev',
          'Higgsfield AI',
          'v0 by Vercel',
          'GitHub Copilot',
          'Vercel',
        ],
      },
    ],
  },

  /** Eyebrows only — these lists come from the collections. */
  sections: {
    projects: 'Selected Works',
    caseStudies: 'The Thinking',
    showcase: 'Design Showcase',
  },

  contact: {
    eyebrow: 'Connect',
    headlineLead: 'Build with',
    headlineAccent: 'Confidence.',
    ctaLabel: 'Get in Touch',
    email: 'basnillo.jayv@gmail.com',
    linkedin: 'https://linkedin.com/in/jayvee-basnillo',
  },
} as const
