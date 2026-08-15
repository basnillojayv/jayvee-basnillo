import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    // Payload + sharp generate these optimized variants on upload.
    focalPoint: true,
    imageSizes: [
      { name: 'thumbnail', width: 480 },
      { name: 'card', width: 900 },
      { name: 'wide', width: 1600 },
      { name: 'hero', width: 2200 },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: { description: 'Describe the image for screen readers and SEO.' },
    },
  ],
}
