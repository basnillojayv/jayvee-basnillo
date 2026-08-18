/**
 * Shown while a route segment is still resolving.
 *
 * Almost every page here is `force-static`, so this is rarely seen — the ones
 * that can reach it are the dynamic detail routes and any first visit that
 * beats the cache. A skeleton rather than a spinner: it holds the shape of the
 * page head, so the layout does not jump when the real content lands.
 *
 * `aria-busy` with a live region, so a screen reader is told something is
 * coming rather than reading an empty page.
 */
export default function Loading() {
  return (
    <main id="main" className="section page-head" aria-busy="true">
      <div className="wrap">
        <p className="loading" role="status">
          Loading…
        </p>
        <div className="skeleton skeleton--title" aria-hidden="true" />
        <div className="skeleton skeleton--line" aria-hidden="true" />
        <div className="skeleton skeleton--line skeleton--short" aria-hidden="true" />
      </div>
    </main>
  )
}
