import React from 'react';

export function Footer({
  logo, parentLogo, parentLabel = 'A program of', columns = [], social = [],
  copyright = '© 2026 OC Fellows. All Rights Reserved.', legal = [], style, ...rest
}) {
  return (
    <footer style={{ background: 'var(--surface-navy)', color: 'var(--text-inverse)', ...style }} {...rest}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'var(--space-16) var(--container-pad) var(--space-8)',
        display: 'grid', gridTemplateColumns: 'minmax(220px,1.2fr) repeat(' + Math.max(columns.length, 1) + ', minmax(140px,1fr))',
        gap: 'var(--space-12)', alignItems: 'start',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {logo ? <img src={logo} alt="OC Fellows" style={{ height: 44, width: 'auto' }} />
            : <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-xl)' }}>OC Fellows</span>}
          {parentLogo || parentLabel ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--aqua-500)' }}>{parentLabel}</span>
              {parentLogo ? <img src={parentLogo} alt="" style={{ height: 34, width: 'auto' }} />
                : <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)' }}>CEO Leadership Alliance of Orange County</span>}
            </div>
          ) : null}
          {social.length ? (
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              {social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 'var(--radius-circle)',
                  border: '1px solid var(--border-inverse)', color: 'var(--neutral-0)',
                }}>{s.icon}</a>
              ))}
            </div>
          ) : null}
        </div>
        {columns.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <h6 style={{
              margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
              fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--tracking-wide)', color: 'var(--neutral-0)',
            }}>{col.title}</h6>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,.82)' }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border-inverse)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto',
          padding: 'var(--space-5) var(--container-pad)',
          display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between',
          fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.7)',
        }}>
          <span>{copyright}</span>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            {legal.map((l) => <a key={l.label} href={l.href} style={{ color: 'rgba(255,255,255,.7)' }}>{l.label}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
