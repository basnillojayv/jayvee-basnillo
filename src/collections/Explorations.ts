import type { CollectionConfig } from 'payload'
import { revalidateSite } from '@/lib/revalidate'

/**
 * A single image with a name — visual work that does not need a write-up.
 *
 * Kept as its own collection rather than folded into Projects because the two
 * behave differently: a project is a link to something live and carries a
 * paragraph, an exploration is a picture in a gallery. Merging them would mean
 * one type where half the fields are always empty.
 */
export const Explorations: CollectionConfig = {
  slug: 'explorations',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
    group: 'Work',
    description: 'Design pieces shown as a gallery. No write-up, just the image.',
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
      admin: {
        description:
          'The URL segment. Titles repeat across a series, so slugs carry a suffix to stay unique.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'select',
          required: true,
          defaultValue: 'web',
          options: [
            { label: 'Web Designs', value: 'web' },
            { label: 'Social Media', value: 'social' },
          ],
          admin: { width: '50%' },
        },
        { name: 'order', type: 'number', defaultValue: 100, admin: { width: '50%', description: 'Lowest first.' } },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
  ],
  versions: false,
}
