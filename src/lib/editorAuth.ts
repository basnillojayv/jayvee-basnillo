import 'server-only'
import { headers as nextHeaders } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Who gets the in-place editor.
 *
 * Reuses Payload's own auth rather than adding a second way to sign in — the
 * accounts already exist, and one session system is one thing to reason about.
 * Signing in at /admin is what turns the edit bar on out on the site.
 *
 * Having an account and being allowed to reword the live homepage are still
 * separate questions. ADMIN_EMAILS narrows it:
 *
 *     ADMIN_EMAILS="you@studio.com, client@epdland.com"
 *
 * Left unset, every Payload user gets the editor — which is the sensible
 * default here, because this site's only accounts are the ones deliberately
 * created for it. Set it when that stops being true.
 */
const allowlist = (): string[] =>
  (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)

export function isEditor(user: { email?: string | null } | null | undefined): boolean {
  const email = user?.email?.toLowerCase()
  if (!email) return false

  const allowed = allowlist()
  // Unset means "any signed-in user", not "nobody" — see the note above. This
  // is the one place that differs from the template, and it differs because
  // reaching /admin here already required an account someone created by hand.
  if (allowed.length === 0) return true

  return allowed.includes(email)
}

/**
 * The signed-in user for this request, or null.
 *
 * Returns null rather than throwing if Payload cannot be reached — a database
 * hiccup should cost the page its edit bar, not the page.
 */
export async function getEditor(): Promise<{ canEdit: boolean }> {
  try {
    const payload = await getPayload({ config })
    const headers = await nextHeaders()
    const { user } = await payload.auth({ headers })
    return { canEdit: isEditor(user) }
  } catch {
    return { canEdit: false }
  }
}
