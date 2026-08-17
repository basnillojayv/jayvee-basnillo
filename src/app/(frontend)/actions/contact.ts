'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { SUBMISSION_OPTIONS } from '@/collections/Submissions'

/** Where enquiries go. */
const NOTIFY = 'work.jayvee@gmail.com'

export type ContactState = {
  ok: boolean
  message: string
  /** Field name → what is wrong with it. */
  errors?: Record<string, string>
}

/** Keeps only values the collection actually offers. */
const only = (allowed: string[], values: string[]) => values.filter((v) => allowed.includes(v))
const one = (allowed: string[], value: string) => (allowed.includes(value) ? value : undefined)

/**
 * Takes a contact form submission.
 *
 * ORDER MATTERS: the row is written FIRST, the email is attempted second.
 * Email is the fragile half — the provider is not provisioned yet, and even
 * once it is, keys expire and mail lands in spam. Writing the record first
 * means a failed send costs a notification, not the enquiry. The reverse order
 * loses the message entirely, silently, and only on the days it matters.
 *
 * A send failure therefore does NOT fail the submission. The visitor is told
 * it arrived, because it did.
 *
 * EVERY CHOICE IS RE-CHECKED HERE. The form posts plain strings, and anything
 * can post to a server action — so the option lists come from the collection
 * and anything not on them is dropped rather than stored. Validating in the
 * browser is a courtesy to the visitor; this is the part that is load-bearing.
 *
 * DELIVERY IS NOT LIVE YET. Payload has no email adapter, so `sendEmail`
 * writes to the server log instead of sending — Payload's documented
 * no-adapter behaviour, and the seam this is built around. Provision Resend,
 * add the adapter in payload.config.ts, and this call starts delivering with
 * no change here.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const text = (k: string) => String(formData.get(k) ?? '').trim()
  const many = (k: string) => formData.getAll(k).map((v) => String(v).trim()).filter(Boolean)

  const name = text('name')
  const email = text('email')
  const projectDetail = text('projectDetail')
  // A honeypot: hidden from people, irresistible to bots. Anything that fills
  // it gets a success response and is dropped — telling a bot it failed only
  // teaches it to try again.
  const trap = text('company')

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Add your name.'
  if (!email) errors.email = 'Add an email address so he can reply.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'That address looks incomplete.'
  if (!projectDetail) errors.projectDetail = 'Tell him what the project is.'
  else if (projectDetail.length < 12) errors.projectDetail = 'A little more detail would help.'

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: 'Check the highlighted fields.', errors }
  }

  if (trap) return { ok: true, message: 'Thanks — your enquiry is on its way.' }

  const O = SUBMISSION_OPTIONS
  const data = {
    name,
    email,
    organisation: text('organisation') || undefined,
    needs: only(O.NEEDS, many('needs')),
    projectDetail,
    hasWebsite: one(O.HAS_SITE, text('hasWebsite')),
    platform: one(O.PLATFORMS, text('platform')),
    goals: only(O.GOALS, many('goals')),
    timeline: one(O.TIMELINES, text('timeline')),
    budget: one(O.BUDGETS, text('budget')),
    materials: only(O.MATERIALS, many('materials')),
    reference: text('reference') || undefined,
    notes: text('notes') || undefined,
    delivered: false,
  }

  try {
    const payload = await getPayload({ config })
    const doc = await payload.create({ collection: 'submissions', data: data as never })

    const lines = [
      `Name:         ${name}`,
      `Email:        ${email}`,
      data.organisation ? `Organisation: ${data.organisation}` : '',
      '',
      `Needs:        ${data.needs.join(', ') || '—'}`,
      `Has a site:   ${data.hasWebsite ?? '—'}`,
      `Platform:     ${data.platform ?? '—'}`,
      `Goals:        ${data.goals.join(', ') || '—'}`,
      `Timeline:     ${data.timeline ?? '—'}`,
      `Budget:       ${data.budget ?? '—'}`,
      `Has ready:    ${data.materials.join(', ') || '—'}`,
      data.reference ? `Likes:        ${data.reference}` : '',
      '',
      'About the project:',
      projectDetail,
      data.notes ? `\nAlso:\n${data.notes}` : '',
    ].filter(Boolean)

    let delivered = false
    try {
      await payload.sendEmail({
        to: NOTIFY,
        // Reply goes to the sender, not the site, so answering is one keystroke.
        replyTo: `${name} <${email}>`,
        subject: `Project enquiry from ${name}${data.organisation ? ` (${data.organisation})` : ''}`,
        text: lines.join('\n'),
      })
      delivered = true
    } catch (err) {
      // Logged, not surfaced: the enquiry is saved, and the visitor has no way
      // to act on a mail-transport failure.
      console.error('[contact] notification failed to send:', err)
    }

    if (delivered) {
      await payload.update({ collection: 'submissions', id: doc.id, data: { delivered: true } })
    }

    return { ok: true, message: 'Thanks — your enquiry is on its way.' }
  } catch (err) {
    console.error('[contact] could not save submission:', err)
    return {
      ok: false,
      message: `Something went wrong saving that. Email ${NOTIFY} directly and it will get through.`,
    }
  }
}
