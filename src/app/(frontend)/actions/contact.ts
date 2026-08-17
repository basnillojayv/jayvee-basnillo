'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

/** Where enquiries go. */
const NOTIFY = 'work.jayvee@gmail.com'

export type ContactState = {
  ok: boolean
  message: string
  /** Field name → what is wrong with it. */
  errors?: Record<string, string>
}

/**
 * Takes a contact form submission.
 *
 * ORDER MATTERS: the row is written FIRST, the email is attempted second.
 * Email is the fragile half — the provider is not provisioned yet, and even
 * once it is, keys expire and mail lands in spam. Writing the record first
 * means a failed send costs him a notification, not the enquiry. The reverse
 * order loses the message entirely, silently, and only on the days it matters.
 *
 * A send failure therefore does NOT fail the submission. The visitor is told
 * it arrived, because it did.
 *
 * DELIVERY IS NOT LIVE YET. Payload has no email adapter configured, so
 * `sendEmail` writes the message to the server log instead of sending it —
 * that is Payload's documented no-adapter behaviour, and it is the seam this
 * is built around. Provision Resend through the Vercel Marketplace, add the
 * adapter in payload.config.ts, and this same call starts delivering with no
 * change here.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  // A honeypot: a field hidden from people and irresistible to bots. Anything
  // that fills it gets a success response and is dropped on the floor, because
  // telling a bot it failed only teaches it to try again.
  const trap = String(formData.get('company') ?? '').trim()

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Add your name.'
  if (!email) errors.email = 'Add an email address so he can reply.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'That address looks incomplete.'
  if (!message) errors.message = 'Tell him what the project is.'
  else if (message.length < 12) errors.message = 'A little more detail would help.'

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: 'Check the highlighted fields.', errors }
  }

  if (trap) return { ok: true, message: 'Thanks — your message is on its way.' }

  try {
    const payload = await getPayload({ config })

    const doc = await payload.create({
      collection: 'submissions',
      data: { name, email, message, delivered: false },
    })

    let delivered = false
    try {
      await payload.sendEmail({
        to: NOTIFY,
        // Reply hits the sender, not the site, so answering is one keystroke.
        replyTo: `${name} <${email}>`,
        subject: `Enquiry from ${name}`,
        text: `${message}\n\n—\n${name}\n${email}`,
      })
      delivered = true
    } catch (err) {
      // Logged, not surfaced: the enquiry is already saved, and the visitor
      // has no way to act on a mail-transport failure.
      console.error('[contact] notification failed to send:', err)
    }

    if (delivered) {
      await payload.update({
        collection: 'submissions',
        id: doc.id,
        data: { delivered: true },
      })
    }

    return { ok: true, message: 'Thanks — your message is on its way.' }
  } catch (err) {
    console.error('[contact] could not save submission:', err)
    return {
      ok: false,
      message: 'Something went wrong saving that. Email work.jayvee@gmail.com directly and it will get through.',
    }
  }
}
