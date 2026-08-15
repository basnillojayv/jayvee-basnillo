/** Build a tel: href from a display phone number, e.g. "(555) 010-0100" -> "tel:5550100100". */
export function telHref(phone: string): string {
  return 'tel:' + (phone || '').replace(/[^0-9+]/g, '')
}

/**
 * Resolve an uploaded Media value (populated with depth ≥ 1) to its URL,
 * falling back to a built-in static asset when the field is empty.
 *
 * This is what lets every section render correctly on a fresh database, before
 * the client has uploaded a single photo — the placeholders in /public/media
 * stand in until they do.
 */
export function mediaUrl(
  value: number | string | { url?: string | null } | null | undefined,
  fallback: string,
): string {
  const url = value && typeof value === 'object' && value.url ? value.url : null
  return url ? toSameOriginPath(url) : fallback
}

/**
 * Payload returns absolute URLs because `serverURL` is set, and `next/image`
 * treats an absolute URL as remote — refusing to load it unless the host is in
 * `remotePatterns`. Uploads served from our own origin are not remote at all,
 * so reduce them to a path and let the optimizer handle them normally.
 *
 * A genuinely remote URL — Vercel Blob in production — is passed through
 * untouched and matched by the pattern in next.config.ts.
 *
 * Without this, every page carrying an uploaded image 500s the moment the
 * first real file is uploaded. It does not show up before then, because the
 * fallbacks are all local paths.
 */
export function toSameOriginPath(url: string): string {
  if (url.startsWith('/')) return url
  try {
    const parsed = new URL(url)
    const base = new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000')
    if (parsed.host === base.host) return parsed.pathname + parsed.search
    return url
  } catch {
    return url
  }
}
