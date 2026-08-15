import type { CollectionConfig } from 'payload'
import { revalidateSite } from '@/lib/revalidate'

/**
 * A piece of work with the thinking attached.
 *
 * WHY BLOCKS AND NOT RICH TEXT
 * The body is a list of typed blocks rather than a rich-text field, and that is
 * a deliberate trade. Rich text would be quicker to author and would rule the
 * whole body out of the in-place editor — a Lexical document is not a string,
 * so it can never be matched against a text node on the page nor written back
 * from one. As blocks, every heading and paragraph inside a case study stays
 * editable where it sits, and the layouts stay art-directed rather than
 * whatever a WYSIWYG produced.
 *
 * The five kinds are carried over from the old site unchanged: prose,
 * swatches, type specimens, stats, media.
 */
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'year', 'updatedAt'],
    group: 'Work',
    description: 'Long-form pieces. Everything else is a project or an exploration.',
  },
  access: { read: () => true },
  hooks: { afterChange: [() => revalidateSite()] },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      type: 'row',
      fields: [
        { name: 'client', type: 'text', admin: { width: '40%' } },
        { name: 'discipline', type: 'text', admin: { width: '40%' } },
        { name: 'year', type: 'text', admin: { width: '20%', description: 'e.g. 2026' } },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: { description: 'One-paragraph standfirst. Used on the index tile and the detail hero.' },
    },
    { name: 'cover', type: 'upload', relationTo: 'media' },
    {
      type: 'row',
      fields: [
        {
          name: 'coverFit',
          type: 'select',
          defaultValue: 'cover',
          options: [
            { label: 'Fill the frame (photography)', value: 'cover' },
            { label: 'Fit inside it (screenshots)', value: 'contain' },
          ],
          admin: { width: '50%' },
        },
        { name: 'order', type: 'number', defaultValue: 100, admin: { width: '50%', description: 'Lowest first.' } },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'relatedProject',
          type: 'relationship',
          relationTo: 'projects',
          admin: { width: '50%', description: 'Cross-linked at the foot of the piece.' },
        },
        {
          name: 'relatedCaseStudy',
          type: 'relationship',
          relationTo: 'case-studies',
          admin: { width: '50%', description: 'For two pieces that are halves of one story.' },
        },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Body',
      blocks: [
        {
          slug: 'prose',
          labels: { singular: 'Prose', plural: 'Prose' },
          fields: [
            { name: 'heading', type: 'text' },
            {
              name: 'body',
              type: 'array',
              minRows: 1,
              labels: { singular: 'Paragraph', plural: 'Paragraphs' },
              fields: [{ name: 'text', type: 'textarea', required: true }],
            },
          ],
        },
        {
          slug: 'swatches',
          labels: { singular: 'Colour swatches', plural: 'Colour swatches' },
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'note', type: 'text' },
            {
              name: 'items',
              type: 'array',
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
                    {
                      name: 'value',
                      type: 'text',
                      required: true,
                      admin: { width: '50%', description: 'Any CSS background: a hex, or a gradient.' },
                    },
                  ],
                },
                { name: 'note', type: 'text' },
                {
                  name: 'onLight',
                  type: 'checkbox',
                  admin: { description: 'Tick for a pale swatch, so its label is set dark.' },
                },
              ],
            },
          ],
        },
        {
          slug: 'type',
          labels: { singular: 'Type specimen', plural: 'Type specimens' },
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'note', type: 'text' },
            {
              name: 'items',
              type: 'array',
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'role', type: 'text', required: true, admin: { width: '50%' } },
                    { name: 'face', type: 'text', required: true, admin: { width: '50%' } },
                  ],
                },
                { name: 'sample', type: 'text', required: true },
                {
                  name: 'style',
                  type: 'json',
                  admin: {
                    description:
                      'CSS properties for the specimen, e.g. {"fontSize":"48px","letterSpacing":"-0.02em"}. JSON because a specimen is a piece of typesetting, and enumerating every property as a field would be a worse form than the CSS itself.',
                  },
                },
              ],
            },
          ],
        },
        {
          slug: 'stats',
          labels: { singular: 'Stats', plural: 'Stats' },
          fields: [
            { name: 'heading', type: 'text' },
            {
              name: 'items',
              type: 'array',
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'value', type: 'text', required: true, admin: { width: '40%' } },
                    { name: 'label', type: 'text', required: true, admin: { width: '60%' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          slug: 'media',
          labels: { singular: 'Images', plural: 'Images' },
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'note', type: 'text' },
            {
              name: 'columns',
              type: 'select',
              defaultValue: '2',
              options: [
                { label: 'Two across', value: '2' },
                { label: 'Three across', value: '3' },
              ],
            },
            {
              name: 'items',
              type: 'array',
              minRows: 1,
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
                { name: 'caption', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
  ],
  versions: false,
}
