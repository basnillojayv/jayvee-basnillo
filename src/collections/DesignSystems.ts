import type { CollectionConfig } from 'payload'
import { revalidateSite } from '@/lib/revalidate'

/**
 * A brand or design system, shown as a card that opens the real thing.
 *
 * WHY THIS IS NOT AN EXPLORATION
 * An exploration is a picture in a gallery — one image, no destination, nothing
 * to click. A design system is the opposite: the artifact IS the work, and a
 * screenshot of one is the least informative thing you can show. Folding these
 * into `explorations` would have made that collection mean two things and given
 * half its documents a link field the other half must leave empty.
 *
 * WHY THE CARD CARRIES THE PALETTE AND THE TYPE
 * Because it can, and a flat cover image cannot. The swatches and typefaces
 * below are the system's own values, so the card is a small honest specimen
 * rather than a thumbnail — and someone scanning the page learns something
 * before they decide whether to open it.
 *
 * `href` points at a static bundle under `public/design-systems/`, committed
 * alongside the site. Those bundles are the deliverables as they shipped; the
 * only thing this collection owns is how they are introduced.
 */
export const DesignSystems: CollectionConfig = {
  slug: 'design-systems',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'year', 'updatedAt'],
    group: 'Work',
    description: 'Brand and design systems. The card opens the full system in a new tab.',
  },
  access: { read: () => true },
  hooks: { afterChange: [() => revalidateSite()] },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'The URL segment. Not currently routed, but kept unique for when it is.' },
    },
    {
      type: 'row',
      fields: [
        { name: 'client', type: 'text', admin: { width: '50%' } },
        { name: 'year', type: 'text', admin: { width: '25%' } },
        {
          name: 'order',
          type: 'number',
          defaultValue: 100,
          admin: { width: '25%', description: 'Lowest first.' },
        },
      ],
    },
    {
      name: 'logo',
      type: 'text',
      admin: {
        description:
          "Path to the brand's lockup, e.g. /design-systems/linehaul/assets/lhs-horz-black.png. Served from the system's own bundle, so it is the same file the system ships.",
      },
    },
    {
      name: 'logoDark',
      type: 'checkbox',
      admin: {
        description:
          'Tick when the lockup is light-on-dark and needs a dark plate behind it to be legible on this page.',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: { description: 'One or two sentences. What the system covers and who it is for.' },
    },
    {
      name: 'href',
      type: 'text',
      required: true,
      admin: {
        description:
          'Path to the built system, e.g. /design-systems/linehaul/index.html. Opens in a new tab.',
      },
    },
    {
      name: 'scope',
      type: 'array',
      labels: { singular: 'Item', plural: 'Scope' },
      admin: { description: 'What the system contains — logo, colour, type, components…' },
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    {
      name: 'swatches',
      type: 'array',
      maxRows: 6,
      admin: { description: 'The palette shown on the card. Six at most — this is a specimen, not the full ramp.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: { width: '50%', description: 'Any CSS colour, e.g. #F07820.' },
            },
          ],
        },
      ],
    },
    {
      name: 'typefaces',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'role',
              type: 'text',
              required: true,
              admin: { width: '40%', description: 'Display, Headings, Body…' },
            },
            { name: 'name', type: 'text', required: true, admin: { width: '60%' } },
          ],
        },
      ],
    },
  ],
  versions: false,
}
