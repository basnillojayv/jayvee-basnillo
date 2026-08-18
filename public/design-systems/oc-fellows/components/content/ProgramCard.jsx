import React from 'react';

export function ProgramCard({ kicker = 'Our Program', title, description, image, href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'block', overflow: 'hidden', textDecoration: 'none',
        borderRadius: 'var(--radius-card)', aspectRatio: '4 / 5', minHeight: 380,
        transition: 'var(--transition-interactive)', boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-sm)',
        transform: hover ? 'var(--lift-translate)' : 'none', ...style,
      }} {...rest}>
      {image ? <img src={image} alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)',
      }} /> : <span style={{ position: 'absolute', inset: 0, background: 'var(--navy-500)' }} />}
      <span style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
      <span style={{
        position: 'absolute', inset: 'auto 0 0 0', display: 'flex', flexDirection: 'column',
        gap: 'var(--space-2)', padding: 'var(--space-6)',
      }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-semibold)',
          letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--aqua-500)',
        }}>{kicker}</span>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--fw-bold)',
          lineHeight: 'var(--leading-snug)', color: 'var(--text-inverse)',
        }}>{title}</span>
        {description ? <span style={{
          fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'rgba(255,255,255,.86)',
          maxHeight: hover ? 200 : 0, opacity: hover ? 1 : 0, overflow: 'hidden',
          transition: 'max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)',
        }}>{description}</span> : null}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'var(--space-2)',
          fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--neutral-0)',
        }}><i data-lucide="arrow-right" style={{ width: 18, height: 18 }} /></span>
      </span>
    </a>
  );
}
