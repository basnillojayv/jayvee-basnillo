import React from 'react';

export function LogoWall({ logos = [], height = 40, label, tone = 'light', style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center', ...style }} {...rest}>
      {label ? <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--tracking-eyebrow)', color: dark ? 'var(--aqua-500)' : 'var(--text-muted)',
      }}>{label}</span> : null}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        gap: 'var(--space-10)', width: '100%',
      }}>
        {logos.map((l, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', height }}>
            {l.src ? <img src={l.src} alt={l.name} style={{ height: '100%', width: 'auto', objectFit: 'contain', filter: dark ? 'brightness(0) invert(1)' : 'none' }} />
              : <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--fw-semibold)',
                letterSpacing: '0.02em', color: dark ? 'rgba(255,255,255,.75)' : 'var(--neutral-500)',
              }}>{l.name}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
