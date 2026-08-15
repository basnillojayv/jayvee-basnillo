import type { CollectionConfig } from 'payload'
import { revalidateSite } from '@/lib/revalidate'

/**
 * A piece of work, shown as a tile and on its own page.
 *
 * The lightest of the three content types on purpose: a project is a link to
 * something live with enough around it to say why it mattered. Anything that
 * wants more room to explain itself is a case study.
 */
export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'updatedAt'],
    group: 'Work',
    description: 'Live sites and builds. Ordered by the Order field, lowest first.',
  },
  access: { read: () => true },
  hooks: {
    afterChange: [
      () => {
        // Projects appear on the homepage and their own index, so the whole
        // layout is the honest scope to revalidate.
        revalidateSite()
      },
    ],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'The URL segment: /projects/<slug>. Changing it breaks existing links.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'text',
          admin: { width: '50%', description: 'The client or the kind of work — shown under the title.' },
        },
        {
          name: 'url',
          type: 'text',
          admin: { width: '50%', description: 'The live site. Leave empty if it is no longer up.' },
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: { description: 'One paragraph. Shown in full on the project page.' },
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Landscape. Screenshots are letterboxed rather than cropped — see Cover fit.' },
    },
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
          admin: {
            width: '50%',
            description: 'Photography crops happily. A UI screenshot loses its chrome when it does.',
          },
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 100,
          admin: { width: '25%', description: 'Lowest first.' },
        },
        {
          name: 'featured',
          type: 'checkbox',
          admin: { width: '25%', description: 'Show on the homepage.' },
        },
      ],
    },
  ],
  versions: false,
}
