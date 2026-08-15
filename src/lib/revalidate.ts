import { revalidatePath } from 'next/cache'

/**
 * Invalidate the whole site's cached pages after a content change.
 *
 * Every global and collection here reads into the layout, so a change to any
 * of them can affect any route. Revalidating the layout is the honest scope.
 *
 * WHY THE TRY
 * `revalidatePath` needs a Next request context and throws "static generation
 * store missing" without one. Payload's `afterChange` hooks fire from three
 * places, and only one of them has that context: an edit in the admin panel
 * does, but the `onInit` seed at boot does not, and neither does a CLI script
 * run with `payload run`. Both of those are writing to a database that has no
 * rendered pages to invalidate yet, so there is genuinely nothing to do —
 * swallowing it is correct rather than merely convenient.
 *
 * Without this, seeding on a fresh database takes the whole app down at start.
 */
export function revalidateSite(): void {
  try {
    revalidatePath('/', 'layout')
  } catch {
    // No request context: a seed or a script. Nothing is cached yet.
  }
}
