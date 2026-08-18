import { ImageResponse } from 'next/og'
import { site } from '@/site.config'

/**
 * The card that appears when the site is pasted into Slack, iMessage or X.
 *
 * Drawn rather than stored: a committed PNG goes stale the moment the tagline
 * changes, and nobody remembers to re-export it. This is generated from the
 * same `site.config` the page titles come from, so the two cannot disagree.
 *
 * `size` and `contentType` below are the contract Next reads to emit the
 * `og:image` tags — they are not decoration.
 */
// site.title already opens with the name, so prefixing it again gave
// "Jayvee Basnillo — Jayvee Basnillo — Graphic and web designer".
export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FAFAFA',
          padding: 72,
          // No custom font is loaded: fetching one here is a network call on
          // every card render, and the system stack is what the fallback would
          // be anyway if that call were slow.
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 44, height: 6, background: '#18181B' }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#71717A',
            }}
          >
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 82,
            lineHeight: 1.04,
            letterSpacing: -2,
            fontWeight: 700,
            color: '#18181B',
            maxWidth: 900,
          }}
        >
          Designing brands, websites, and digital experiences.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 26, color: '#71717A' }}>
            {site.url.replace(/^https?:\/\//, '')}
          </div>
          <div style={{ display: 'flex', gap: 28, fontSize: 22, color: '#71717A' }}>
            <div>Brand</div>
            <div>Web</div>
            <div>Design systems</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
