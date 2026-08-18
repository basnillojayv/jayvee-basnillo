import React from 'react';
import { Card } from '../core/Card.jsx';

export function PressCard({ publication, date, thumbnail, href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Card interactive href={href} edge="border" padding="0"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      <div style={{ aspectRatio: '3 / 4', overflow: 'hidden', background: 'var(--neutral-100)' }}>
        {thumbnail ? <img src={thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} /> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 'var(--space-4)' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--fw-bold)',
          color: hover ? 'var(--orange-600)' : 'var(--text-heading)', transition: 'color var(--dur-fast) var(--ease-out)',
        }}>{publication}</span>
        {date ? <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{date}</span> : null}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4,
          fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--navy-500)',
        }}>Read more<i data-lucide="external-link" style={{ width: 15, height: 15 }} /></span>
      </div>
    </Card>
  );
}
