import React from 'react';

export function FilterChip({ children, active = false, onClick, count, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)',
        padding: '8px 16px', borderRadius: 'var(--radius-chip)', transition: 'var(--transition-interactive)',
        background: active ? 'var(--navy-500)' : hover ? 'var(--navy-50)' : 'var(--neutral-0)',
        color: active ? 'var(--neutral-0)' : 'var(--navy-500)',
        border: '1px solid ' + (active ? 'var(--navy-500)' : 'var(--border-default)'),
        ...style,
      }} {...rest}>
      {children}
      {count !== undefined ? <span style={{ opacity: 0.65, fontWeight: 'var(--fw-regular)' }}>{count}</span> : null}
    </button>
  );
}
