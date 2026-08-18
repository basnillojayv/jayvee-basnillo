import React from 'react';
import { Card } from '../core/Card.jsx';

export function StoryCard({ title, excerpt, image, href, kicker, cta = 'Read More', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Card interactive href={href} edge="shadow" padding="0"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      <div style={{ overflow: 'hidden', aspectRatio: '16 / 10', background: 'var(--neutral-100)' }}>
        {image ? <img src={image} alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transform: hover ? 'scale(1.03)' : 'scale(1)', transition: 'transform var(--dur-base) var(--ease-out)',
        }} /> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--pad-card)', flex: 1 }}>
        {kicker ? <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-semibold)',
          letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--orange-500)',
        }}>{kicker}</span> : null}
        <h5 style={{
          margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-bold)', lineHeight: 'var(--leading-snug)',
          color: 'var(--text-heading)', textWrap: 'pretty',
        }}>{title}</h5>
        {excerpt ? <p style={{
          margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)',
          flex: 1, textWrap: 'pretty',
        }}>{excerpt}</p> : null}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'auto',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)',
          color: hover ? 'var(--orange-600)' : 'var(--navy-500)', transition: 'color var(--dur-fast) var(--ease-out)',
        }}>{cta}<i data-lucide="arrow-right" style={{ width: 16, height: 16 }} /></span>
      </div>
    </Card>
  );
}
