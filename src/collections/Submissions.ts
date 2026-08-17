import type { CollectionConfig } from 'payload'

/**
 * CONTACT FORM SUBMISSIONS.
 *
 * WHY THE FORM WRITES TO THE DATABASE AND NOT ONLY TO EMAIL
 * Email is the least reliable part of any contact form: the provider is not
 * provisioned yet, keys expire, and mail silently lands in spam. If sending is
 * the only thing that happens, a failed send is an enquiry that never existed.
 * The row is written first and the email is attempted second, so the worst
 * case is a message he has to read in the admin panel rather than one that is
 * gone.
 *
 * Nobody can read these but a logged-in editor, and nobody can edit them at
 * all — a submission is a record of what someone actually typed, and an
 * editable record of that is worth less than none.
 */
export const Submissions: CollectionConfig = {
  slug: 'submissions',
  admin: {
    group: 'Content',
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
    description: 'Messages sent from the contact form.',
  },
  access: {
    // The form posts through a server action using Local API, which bypasses
    // access control — so public create stays off.
    create: () => false,
    read: ({ req }) => Boolean(req.user),
    update: () => false,
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'delivered',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        readOnly: true,
        description: 'Whether the notification email was accepted by the provider.',
      },
    },
  ],
}
