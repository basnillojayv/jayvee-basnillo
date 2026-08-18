import { notFound } from 'next/navigation'

/**
 * Catches every URL that matches no real route, so it lands in this group and
 * gets this group's `not-found.tsx` — with the header, the footer and a proper
 * 404 status.
 *
 * WHY A CATCH-ALL RATHER THAN `app/not-found.tsx`
 * A root not-found needs a root layout, and this app has none: `(frontend)` and
 * `(payload)` each supply their own `<html>`. Adding one purely to host the 404
 * would put a second layout above both. Routing the miss into this group
 * instead reuses the layout that already exists.
 *
 * It does not shadow `/admin` or `/api`: those are concrete segments in the
 * `(payload)` group, and a concrete segment always beats a catch-all.
 */
/**
 * Dynamic on purpose. Prerendered, this route's `notFound()` is baked into a
 * static page and served with a 200 — a soft 404, which search engines index
 * as a real page. Resolving per request lets Next set the status.
 */
export const dynamic = 'force-dynamic'

export default function CatchAll(): never {
  notFound()
}
