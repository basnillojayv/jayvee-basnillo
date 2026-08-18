import type { Metadata } from 'next'

import { NotFoundBody, NOT_FOUND_METADATA } from './components/NotFoundBody'

/**
 * The group's not-found boundary — what `notFound()` reaches when it is thrown
 * from a route inside this group. The document is already around it, supplied
 * by this group's layout, so this renders the content and nothing else.
 *
 * It cannot be `force-static`: `notFound()` is thrown at request time from the
 * dynamic routes, so this renders on demand.
 */
export const metadata: Metadata = NOT_FOUND_METADATA

export default function NotFound() {
  return <NotFoundBody />
}
