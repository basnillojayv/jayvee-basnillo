import React from 'react';

export function TimelineStep({ number, title, description, active = false, last = false, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-4)', ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44,
          borderRadius: 'var(--radius-circle)', fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-bold)',
          background: active ? 'var(--orange-500)' : 'var(--navy-500)', color: 'var(--neutral-0)',
        }}>{number}</span>
        {!last ? <span style={{ flex: 1, width: 2, minHeight: 28, marginTop: 8, background: 'var(--aqua-500)' }} /> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', paddingBottom: last ? 0 : 'var(--space-8)' }}>
        <h5 style={{
          margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-bold)',
          color: 'var(--text-heading)', lineHeight: 'var(--leading-snug)',
        }}>{title}</h5>
        {description ? <p style={{
          margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)',
          color: 'var(--text-body)', textWrap: 'pretty',
        }}>{description}</p> : null}
      </div>
    </div>
  );
}
