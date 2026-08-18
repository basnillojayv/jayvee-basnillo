import React from 'react';

export function PersonCard({ name, meta, year, photo, href, linkedin, variant = 'fellow', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
        textDecoration: 'none', transition: 'var(--transition-interactive)',
        transform: href && hover ? 'var(--lift-translate)' : 'none', ...style,
      }} {...rest}>
      <div style={{
        position: 'relative', overflow: 'hidden', background: 'var(--neutral-100)',
        borderRadius: variant === 'team' ? 'var(--radius-circle)' : 'var(--radius-media)',
        aspectRatio: variant === 'team' ? '1 / 1' : '3 / 4',
      }}>
        {photo ? <img src={photo} alt={name} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transform: hover ? 'scale(1.03)' : 'scale(1)', transition: 'transform var(--dur-base) var(--ease-out)',
        }} /> : null}
        {year ? (
          <span style={{
            position: 'absolute', left: 10, bottom: 10, padding: '4px 10px',
            borderRadius: 'var(--radius-pill)', background: 'var(--neutral-0)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-semibold)',
            color: 'var(--navy-500)', letterSpacing: 'var(--tracking-wide)',
          }}>{year}</span>
        ) : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--fw-bold)',
          color: hover && href ? 'var(--orange-600)' : 'var(--text-heading)', transition: 'color var(--dur-fast) var(--ease-out)',
        }}>{name}</span>
        {meta ? <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)',
          color: 'var(--text-muted)',
        }}>{meta}</span> : null}
        {linkedin ? <a href={linkedin} aria-label={name + ' on LinkedIn'} style={{
          display: 'inline-flex', marginTop: 2, color: 'var(--navy-500)',
        }}><i data-lucide="linkedin" style={{ width: 18, height: 18 }} /></a> : null}
      </div>
    </Tag>
  );
}
