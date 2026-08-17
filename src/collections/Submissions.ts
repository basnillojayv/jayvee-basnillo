import type { CollectionConfig } from 'payload'

/**
 * CONTACT FORM SUBMISSIONS.
 *
 * WHY THE FORM WRITES TO THE DATABASE AND NOT ONLY TO EMAIL
 * Email is the least reliable part of any contact form: the provider is not
 * provisioned yet, keys expire, and mail silently lands in spam. If sending is
 * the only thing that happens, a failed send is an enquiry that never existed.
 * The row is written first and the email is attempted second, so the worst
 * case is a message read in the admin panel rather than one that is gone.
 *
 * WHY THE OPTION LISTS LIVE HERE RATHER THAN ONLY IN THE FORM
 * These are stored values. Defining the choices in the collection means the
 * admin panel renders a submission with readable labels instead of raw
 * strings, and a value the form never offered cannot be written at all — the
 * form posts plain text, and without this any string would be accepted.
 *
 * Nobody can read these but a signed-in editor, and nobody can edit them at
 * all: a submission is a record of what someone actually typed, and an
 * editable record of that is worth less than none.
 */

const NEEDS = [
  'New website from scratch',
  'Website redesign',
  'WordPress / Elementor development',
  'Landing page',
  'Website updates or improvements',
  'Brand / visual design',
  'Something else',
]

const GOALS = [
  'Look more professional',
  'Generate more enquiries',
  'Make the business easier to find',
  'Explain our services more clearly',
  'Improve the user experience',
  'Make the site easier to manage',
  'Launch a completely new online presence',
  'Other',
]

const MATERIALS = [
  'Logo / brand identity',
  'Website content',
  'Photos / images',
  'Existing website',
  'Design references',
  'Nothing yet',
]

const HAS_SITE = [
  'Yes, I want to improve it',
  'Yes, but it needs a complete redesign',
  'No, this will be a new website',
  'Not sure yet',
]

const PLATFORMS = [
  'WordPress / Elementor',
  'WordPress / Other',
  'Wix',
  'Squarespace',
  'Webflow',
  'Custom / Other',
  'No existing website',
]

const TIMELINES = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3+ months',
  'No fixed deadline',
]

const BUDGETS = [
  'Under $1,000',
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000+',
  'I’d like to discuss the scope first',
]

/** The stored value is the label — these are read by a person, not queried. */
const opts = (values: string[]) => values.map((v) => ({ label: v, value: v }))

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  admin: {
    group: 'Content',
    useAsTitle: 'name',
    defaultColumns: ['name', 'organisation', 'email', 'createdAt'],
    description: 'Enquiries sent from the contact form.',
  },
  access: {
    // The form posts through a server action using the Local API, which
    // bypasses access control — so public create stays off.
    create: () => false,
    read: ({ req }) => Boolean(req.user),
    update: () => false,
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Their details',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
            { name: 'email', type: 'email', required: true, admin: { width: '50%' } },
          ],
        },
        { name: 'organisation', label: 'Business / organisation', type: 'text' },
      ],
    },
    {
      type: 'collapsible',
      label: 'The project',
      fields: [
        { name: 'needs', type: 'select', hasMany: true, options: opts(NEEDS) },
        { name: 'projectDetail', label: 'About the project', type: 'textarea', required: true },
        {
          type: 'row',
          fields: [
            { name: 'hasWebsite', type: 'select', options: opts(HAS_SITE), admin: { width: '50%' } },
            { name: 'platform', type: 'select', options: opts(PLATFORMS), admin: { width: '50%' } },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Goals and constraints',
      fields: [
        { name: 'goals', type: 'select', hasMany: true, options: opts(GOALS) },
        {
          type: 'row',
          fields: [
            { name: 'timeline', type: 'select', options: opts(TIMELINES), admin: { width: '50%' } },
            { name: 'budget', type: 'select', options: opts(BUDGETS), admin: { width: '50%' } },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Materials and notes',
      fields: [
        { name: 'materials', type: 'select', hasMany: true, options: opts(MATERIALS) },
        { name: 'reference', label: 'A site they like', type: 'text' },
        { name: 'notes', label: 'Anything else', type: 'textarea' },
      ],
    },
    {
      name: 'delivered',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: 'Whether the notification email was accepted by the provider.',
      },
    },
  ],
}

export const SUBMISSION_OPTIONS = {
  NEEDS,
  GOALS,
  MATERIALS,
  HAS_SITE,
  PLATFORMS,
  TIMELINES,
  BUDGETS,
}
