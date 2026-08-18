import React from 'react';

export function ValueItem({ title, description, icon, tone = 'light', style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      {icon ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, borderRadius: 'var(--radius-circle)',
          background: dark ? 'rgba(255,255,255,.12)' : 'var(--aqua-100)',
          color: dark ? 'var(--aqua-500)' : 'var(--navy-500)',
        }}>{icon}</span>
      ) : null}
      <h4 style={{
        margin: 0, fontSize: 'var(--type-h4-size)', fontWeight: 'var(--type-h4-weight)',
        lineHeight: 'var(--type-h4-leading)', color: dark ? 'var(--text-inverse)' : 'var(--text-heading)',
      }}>{title}</h4>
      <p style={{
        margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)',
        color: dark ? 'rgba(255,255,255,.82)' : 'var(--text-body)', textWrap: 'pretty',
      }}>{description}</p>
    </div>
  );
}
