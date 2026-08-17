import type { GlobalConfig } from 'payload'
import { revalidateSite } from '@/lib/revalidate'

/**
 * THE CONTENT MODEL MIRRORS THE PAGE.
 *
 * One admin tab per section, in the order the sections appear, and field names
 * prefixed with the section. Someone who can see the page can find the field.
 *
 * Everything here is the copy *around* the work. The work itself — projects,
 * case studies, explorations — lives in collections, because it is repeatable
 * and has its own pages. What stays here is the framing: who this is, what he
 * does, and the headings that introduce each list.
 *
 * Renaming a *label* is free. Renaming a *field name* is a schema migration.
 */
export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: { group: 'Content', description: 'The homepage copy, in page order.' },
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
              type: 'row',
              fields: [
                {
                  name: 'heroNameFirst',
                  type: 'text',
                  required: true,
                  admin: { width: '50%', description: 'Set on its own line.' },
                },
                {
                  name: 'heroNameLast',
                  type: 'text',
                  required: true,
                  admin: { width: '50%', description: 'The second line, set in the accent treatment.' },
                },
              ],
            },
            {
              name: 'heroIntro',
              type: 'text',
              defaultValue: 'Designing brands, websites, and digital experiences.',
              admin: {
                description:
                  'The line above the display type. Set in caps by CSS — type it normally.',
              },
            },
            {
              name: 'heroTagline',
              type: 'text',
              required: true,
              admin: { description: 'The one line under the name.' },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'heroWatermarkLeft',
                  type: 'text',
                  admin: { width: '50%', description: 'Oversized background word. Two or three words at most.' },
                },
                { name: 'heroWatermarkRight', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              name: 'heroPortrait',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Portrait orientation. Shown above the name.' },
            },
          ],
        },
        {
          label: 'About',
          fields: [
            { name: 'aboutEyebrow', type: 'text', defaultValue: 'The Designer' },
            { name: 'aboutPortrait', type: 'upload', relationTo: 'media' },
            {
              name: 'aboutLede',
              type: 'textarea',
              required: true,
              admin: { description: 'The opening statement, set large. One sentence.' },
            },
            {
              name: 'aboutBody',
              type: 'array',
              labels: { singular: 'Paragraph', plural: 'Paragraphs' },
              fields: [{ name: 'text', type: 'textarea', required: true }],
            },
            {
              name: 'aboutPillars',
              type: 'array',
              maxRows: 4,
              labels: { singular: 'Pillar', plural: 'Pillars' },
              admin: { description: 'Four fit the grid.' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'copy', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Stats',
          fields: [
            {
              name: 'statsItems',
              type: 'array',
              maxRows: 4,
              labels: { singular: 'Stat', plural: 'Stats' },
              admin: {
                description:
                  'Only real, checkable numbers. A portfolio figure that cannot be substantiated is worse than no figure.',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'value', type: 'text', required: true, admin: { width: '35%' } },
                    { name: 'label', type: 'text', required: true, admin: { width: '65%' } },
                  ],
                },
              ],
            },
            { name: 'statsStatement', type: 'textarea', admin: { description: 'The paragraph beside the numbers.' } },
          ],
        },
        {
          label: 'Capabilities',
          fields: [
            { name: 'capabilitiesEyebrow', type: 'text', defaultValue: 'Core Skills' },
            {
              name: 'capabilitiesGroups',
              type: 'array',
              labels: { singular: 'Group', plural: 'Groups' },
              fields: [
                { name: 'title', type: 'text', required: true },
                {
                  name: 'tags',
                  type: 'array',
                  labels: { singular: 'Tag', plural: 'Tags' },
                  fields: [{ name: 'label', type: 'text', required: true }],
                },
              ],
            },
          ],
        },
        {
          label: 'How it works',
          description: 'Four steps. Four is what fits the row — a fifth wraps and breaks the rhythm.',
          fields: [
            { name: 'howEyebrow', type: 'text', defaultValue: 'How it works' },
            {
              name: 'howLede',
              type: 'textarea',
              admin: { description: 'One line under the heading. Sets up the four steps.' },
            },
            {
              name: 'howSteps',
              type: 'array',
              maxRows: 4,
              labels: { singular: 'Step', plural: 'Steps' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'copy', type: 'textarea', required: true },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { description: 'Portrait-ish. Falls back to a placeholder when empty.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Work',
          description: 'Headings only. The lists come from Projects, Case Studies and Explorations.',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'projectsEyebrow', type: 'text', defaultValue: 'Selected Works', admin: { width: '50%' } },
                { name: 'projectsTitle', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'caseStudiesEyebrow', type: 'text', defaultValue: 'The Thinking', admin: { width: '50%' } },
                { name: 'caseStudiesTitle', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'showcaseEyebrow', type: 'text', defaultValue: 'Design Showcase', admin: { width: '50%' } },
                { name: 'showcaseTitle', type: 'text', admin: { width: '50%' } },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            { name: 'contactEyebrow', type: 'text', defaultValue: 'Connect' },
            {
              type: 'row',
              fields: [
                { name: 'contactHeadlineLead', type: 'text', admin: { width: '50%' } },
                {
                  name: 'contactHeadlineAccent',
                  type: 'text',
                  admin: { width: '50%', description: 'The second half, set in the accent treatment.' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'contactCtaLabel', type: 'text', defaultValue: 'Get in Touch', admin: { width: '50%' } },
                {
                  /**
                   * Named `email` on purpose: the in-place editor's skip list
                   * excludes that field name, so an address is never made
                   * click-to-edit on a live page. It is wanted verbatim.
                   */
                  name: 'email',
                  label: 'Email address',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
            { name: 'contactLinkedin', type: 'text', admin: { description: 'Full URL.' } },
          ],
        },
      ],
    },
  ],
}
