/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSProperties } from 'react';

/**
 * Case studies are the long-form counterpart to `projects.ts`. A project is a
 * built site that a screenshot can carry; a case study is a body of thinking
 * that one cannot.
 *
 * Content is a typed block union rather than markdown. That keeps the dependency
 * count at zero, and — more to the point — lets the `swatches` and `type` blocks
 * render the system's real values instead of picturing them.
 */
export type Swatch = {
  name: string;
  /** Any CSS background value: a hex, or one of the metallic gradients. */
  value: string;
  note?: string;
  /** Dark chips need a light label and vice versa. */
  onLight?: boolean;
};

export type TypeSpecimen = {
  role: string;
  face: string;
  sample: string;
  style: CSSProperties;
};

export type Block =
  | { kind: 'prose'; heading?: string; body: string[] }
  | { kind: 'swatches'; heading: string; note?: string; items: Swatch[] }
  | { kind: 'type'; heading: string; note?: string; items: TypeSpecimen[] }
  | { kind: 'stats'; heading?: string; items: { value: string; label: string }[] }
  | {
      kind: 'media';
      heading?: string;
      note?: string;
      columns?: 2 | 3;
      items: { src: string; alt: string; caption?: string }[];
    };

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  discipline: string;
  year: string;
  /** One-paragraph standfirst, used on the index tile and the detail hero. */
  summary: string;
  cover: string;
  /**
   * Photography crops happily; a UI screenshot loses its chrome when it does.
   * `contain` letterboxes the cover against the panel surface instead.
   */
  coverFit?: 'cover' | 'contain';
  /** Slug in `projects.ts`, cross-linked at the foot of the piece. */
  relatedProject?: string;
  /** Slug in this file — for pieces that are two halves of one story. */
  relatedCaseStudy?: string;
  blocks: Block[];
};

const ASSET = '/case-studies/linehaul-brand-system';
const CRM = '/case-studies/linehaul-admin-dashboard';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'linehaul-brand-system',
    title: 'LineHaul Station Brand System',
    client: 'LineHaul Station',
    discipline: 'Brand & Design System',
    year: '2026',
    summary:
      'A design system for a national freight relay network — one standard running through every terminal, program and line of copy. Carbon dominates, chrome structures, Fuel Orange ignites.',
    cover: `${ASSET}/terminal-dusk.jpg`,
    relatedProject: 'onehome',
    relatedCaseStudy: 'linehaul-admin-dashboard',
    blocks: [
      {
        kind: 'prose',
        heading: 'The brief',
        body: [
          'LineHaul Station is building freight terminals, driver amenities and a national relay network. The identity had to work in two directions at once: operator-to-operator credibility with drivers who have heard every promise before, and institutional weight for the carriers, brokers and government partners assessing it as infrastructure.',
          'The system resolves that tension with a single governing line — carbon dominates, chrome structures, Fuel Orange ignites. Carbon black is the base. Brushed chrome and steel do the structural work. Orange is rationed to the moments that actually earn it.',
        ],
      },
      {
        kind: 'swatches',
        heading: 'Carbon · chrome · fuel',
        note: 'Surfaces step in near-invisible increments, so panels separate by edge rather than by contrast. The warm cream is not a secondary surface — it is an alternating editorial beat, with no two adjacent sections sharing a background.',
        items: [
          { name: 'Ink', value: '#0b0b0b', note: 'page base' },
          { name: 'Panel', value: '#141414', note: 'cards' },
          { name: 'Carbon', value: '#1a1a1a', note: 'primary surface' },
          { name: 'Cream', value: '#f4f2ef', note: 'the B/W beat', onLight: true },
          { name: 'Chrome', value: '#b0b0b0', note: 'structure', onLight: true },
          { name: 'Steel', value: '#7ec8e3', note: 'cool accent', onLight: true },
          { name: 'Fuel', value: '#f07820', note: 'the igniter' },
        ],
      },
      {
        kind: 'swatches',
        heading: 'Five lanes, five accents',
        note: 'A driver, a carrier, a broker, a shipper and a government partner each want something different from the same network. Rather than splitting into five sub-brands, every lane gets exactly one saturated colour inside a shared carbon frame. Wayfinding, not decoration.',
        items: [
          { name: 'Drivers', value: '#f07820', note: 'Fuel Orange' },
          { name: 'Carriers', value: '#4878a8', note: 'Fleet Blue' },
          { name: 'Brokers', value: '#7ec8e3', note: 'Steel Blue', onLight: true },
          { name: 'Shippers', value: '#18a848', note: 'Green' },
          { name: 'Government', value: '#c8a060', note: 'Gold', onLight: true },
        ],
      },
      {
        kind: 'type',
        heading: 'A five-face stack',
        note: 'Each face has a job and a boundary. Michroma is the wide techno subhead and is explicitly barred from small sizes, where a single wide weight stops being readable. Newsreader as a committed body serif is the unusual call — it is why the system reads as considered rather than industrial by default. The shipped faces are open-source substitutes for the licensed originals (Azo Sans Black, Eurostile Extended, FreightText, Brushwell).',
        items: [
          {
            role: 'Display',
            face: 'Archivo Black · −0.025em · up to 136px',
            sample: 'ONE TRUCK. TRIPLE THE MILES.',
            style: {
              fontFamily: '"Archivo", system-ui, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              lineHeight: 0.95,
            },
          },
          {
            role: 'Subhead',
            face: 'Michroma · subheadings only',
            sample: 'The Modern-Day Pony Express',
            style: {
              fontFamily: '"Michroma", system-ui, sans-serif',
              lineHeight: 1.4,
            },
          },
          {
            role: 'Label · kicker · CTA',
            face: 'Archivo semibold caps · 0.18em',
            sample: 'CONNECT WITH US',
            style: {
              fontFamily: '"Archivo", system-ui, sans-serif',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
            },
          },
          {
            role: 'Body',
            face: 'Newsreader · serif · 17px',
            sample:
              'Pay only for the days you are home. A furnished, staffed Home Hub at the end of every run.',
            style: {
              fontFamily: '"Newsreader", Georgia, serif',
              lineHeight: 1.6,
            },
          },
          {
            role: 'Data',
            face: 'JetBrains Mono · tabular · 0.08em',
            sample: 'I-40 · MARKER 279 · 35.14°N / 90.18°W',
            style: {
              fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
              letterSpacing: '0.08em',
              fontVariantNumeric: 'tabular-nums',
            },
          },
        ],
      },
      {
        kind: 'swatches',
        heading: 'Metal as structure',
        note: 'Five named metallic gradients with fixed stops, ported from the brand reference. They carry frames, pills, coins and large display fills — and are barred from small body text, where a mid-gradient stop would fail contrast.',
        items: [
          {
            name: 'Chrome',
            value:
              'linear-gradient(180deg, #f2f2f2 0%, #c4c4c4 16%, #8e8e8e 44%, #6a6a6a 50%, #9c9c9c 56%, #d6d6d6 76%, #7c7c7c 100%)',
            onLight: true,
          },
          {
            name: 'Fuel chrome',
            value:
              'linear-gradient(135deg, #fce0be 0%, #f4a24a 30%, #c85a12 52%, #e88a3c 60%, #f07820 100%)',
          },
          {
            name: 'Steel',
            value:
              'linear-gradient(135deg, #d6eef8 0%, #7ec8e3 32%, #3e8ab0 54%, #6fb6d6 62%, #7ec8e3 100%)',
            onLight: true,
          },
          {
            name: 'Gold chrome',
            value:
              'linear-gradient(135deg, #e8c97e 0%, #c8a060 34%, #8c6e3a 54%, #b89452 62%, #c8a060 100%)',
          },
          {
            name: 'Dual metal',
            value:
              'linear-gradient(90deg, #79bedd 0%, #a2d2e7 25%, #8797a0 50%, #b5a380 75%, #d6bf94 100%)',
            onLight: true,
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Frames, coins and measures',
        body: [
          'The structural vocabulary is small and repeats everywhere: a 1.5px metallic bevel frame around key media, a chrome rule as the engineered divider, and a dashed measure rule marking section heads. There is no bespoke icon set — the system is image- and type-forward, and the work icons would do is handled by minted program coins, mono data tags and a single pulsing status dot.',
          'Corner radii are held off the grid deliberately: buttons 3px, cards 5px, frames 6px. Snapping to a 4/8 scale would have rounded the whole thing into generic software. These read as machined.',
        ],
      },
      {
        kind: 'media',
        heading: 'The three programs',
        note: 'OneHome for drivers, FlexSpace for carriers, and the Outriders Club — a 25,000 sq ft private drivers club at every hub. Each is minted as a coin rather than drawn as a logo variant.',
        columns: 3,
        items: [
          { src: `${ASSET}/coin-onehome.png`, alt: 'OneHome program coin', caption: 'OneHome · Drivers' },
          { src: `${ASSET}/coin-flexspace.png`, alt: 'FlexSpace program coin', caption: 'FlexSpace · Carriers' },
          { src: `${ASSET}/coin-outriders.png`, alt: 'Outriders Club program coin', caption: 'Outriders Club' },
        ],
      },
      {
        kind: 'media',
        heading: 'Imagery direction',
        note: 'Renders and amenity photography from mixed sources are all run through one grade — slightly desaturated, contrast lifted, cooled toward carbon — so the set reads as a single body of work rather than a stock library.',
        columns: 3,
        items: [
          { src: `${ASSET}/terminal-rendering.jpg`, alt: 'Terminal rendering' },
          { src: `${ASSET}/club-lounge.jpg`, alt: 'Outriders Club lounge' },
          { src: `${ASSET}/road-sunset.jpg`, alt: 'Road at sunset' },
        ],
      },
      {
        kind: 'stats',
        heading: 'What shipped',
        items: [
          { value: '134', label: 'files' },
          { value: '12', label: 'components' },
          { value: '5', label: 'audience lanes' },
          { value: '3', label: 'programs' },
        ],
      },
      {
        kind: 'prose',
        body: [
          'The system ships as tokens, typed React primitives with usage notes, foundation specimens, brand guidelines, marketing and stationery collateral, and two interactive UI kits — packaged so that anyone, or anything, producing LineHaul Station work starts on-brand rather than approximating it.',
          'Voice is specified as tightly as colour: plain-spoken and operator-to-operator, figures set in tabular mono because the numbers are the argument, exactly two approved calls to action, and no emoji.',
        ],
      },
    ],
  },

  {
    slug: 'linehaul-admin-dashboard',
    title: 'LineHaul Station Admin Dashboard',
    client: 'LineHaul Station',
    discipline: 'Product Design & Prototype',
    year: '2026',
    summary:
      'An internal CRM for membership sales, prototyped end to end on the LineHaul Station design system — leads, pipeline, bookings and the public forms that feed them, in one carbon control room.',
    cover: `${CRM}/dashboard.jpg`,
    coverFit: 'contain',
    relatedCaseStudy: 'linehaul-brand-system',
    blocks: [
      {
        kind: 'prose',
        heading: 'The brief',
        body: [
          'LineHaul Station sells two memberships — OneHome to drivers, FlexSpace to carriers, fleets and brokers — and was tracking that pipeline across spreadsheets and inboxes. This is the internal counterpart to the public brand: one place for leads, deal stages, bookings and the forms that feed them.',
          'The brand already described itself as a freight control room. The admin takes that literally rather than decoratively — a dark operations surface, figures in tabular mono, and a morning view that answers what changed overnight before it offers anything to click.',
        ],
      },
      {
        kind: 'media',
        heading: 'The workspace',
        note: 'Five internal screens. The dashboard answers what changed overnight before it offers anything to click — four counters, open value by stage, the next bookings in date order, and the week\'s new leads tagged by origin. Everything else is where the work actually happens.',
        columns: 2,
        items: [
          {
            src: `${CRM}/dashboard.jpg`,
            alt: 'CRM dashboard showing pipeline health, upcoming bookings and new leads',
            caption: 'Dashboard · the morning view',
          },
          {
            src: `${CRM}/pipeline.jpg`,
            alt: 'Kanban pipeline board with deal cards across stage columns',
            caption: 'Pipeline · drag a deal across stages',
          },
          {
            src: `${CRM}/contacts.jpg`,
            alt: 'Contacts table with member type and source',
            caption: 'Contacts',
          },
          {
            src: `${CRM}/bookings.jpg`,
            alt: 'Bookings list of sales calls and property tours',
            caption: 'Bookings · calls and tours',
          },
          {
            src: `${CRM}/inbox.jpg`,
            alt: 'Form inbox of incoming submissions awaiting triage',
            caption: 'Form inbox',
          },
        ],
      },
      {
        kind: 'swatches',
        heading: 'Stage as colour',
        note: 'The seven pipeline stages get no new palette. They borrow the brand\'s existing signal colours — steel and fleet blue through early contact, amber and fuel across scheduling and application, gold at signature, green won, ember lost. Someone who has only ever seen the public site can already read the board.',
        items: [
          { name: 'New Lead', value: '#7ec8e3', onLight: true },
          { name: 'Contacted', value: '#4878a8' },
          { name: 'Call / Tour', value: '#fbb04a', onLight: true },
          { name: 'Application', value: '#f07820' },
          { name: 'Signed', value: '#c8a060', onLight: true },
          { name: 'Won', value: '#18a848' },
          { name: 'Lost', value: '#d02020' },
        ],
      },
      {
        kind: 'media',
        heading: 'The public surfaces',
        note: 'The two pages that feed the workspace are part of the same prototype rather than a separate mock, so every record carries its origin and a lead can be followed from the form that created it through to a signed membership. They also prove the point twice over — the same tokens that build an internal table build a public booking flow.',
        columns: 2,
        items: [
          {
            src: `${CRM}/public-booking.jpg`,
            alt: 'Public booking page with a hero, call and tour options and a time picker',
            caption: 'Booking page · calls and tours',
          },
          {
            src: `${CRM}/public-lead.jpg`,
            alt: 'Public lead capture form',
            caption: 'Lead form',
          },
        ],
      },
      {
        kind: 'prose',
        body: [
          'The pipeline models the real sale rather than a generic funnel: sales calls and property tours as distinct booking types, membership signature as its own stage before won, and payment split across pay-in-full or financed over twelve or twenty-four months.',
        ],
      },
      {
        kind: 'stats',
        heading: 'What it proves',
        items: [
          { value: '7', label: 'screens' },
          { value: '7', label: 'pipeline stages' },
          { value: '2', label: 'membership products' },
          { value: '0', label: 'new tokens' },
        ],
      },
      {
        kind: 'prose',
        body: [
          'That last figure is the point. The prototype loads the design system\'s own token files and compiled component bundle directly — the same fonts, colours, patterns and primitives the marketing site uses — and did not need a single new value to describe an interface the system was never explicitly designed for.',
          'A brand system that only survives contact with marketing pages is a style guide. This is the test that separates the two, and it is why the admin was built on the system rather than beside it.',
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
