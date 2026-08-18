import React from 'react';

const TONES = {
  neutral: { background: 'var(--neutral-100)', color: 'var(--neutral-700)' },
  navy: { background: 'var(--navy-50)', color: 'var(--navy-500)' },
  orange: { background: 'var(--orange-50)', color: 'var(--orange-700)' },
  aqua: { background: 'var(--aqua-100)', color: 'var(--navy-500)' },
  teal: { background: 'var(--teal-100)', color: 'var(--teal-700)' },
  solidNavy: { background: 'var(--navy-500)', color: 'var(--neutral-0)' },
  solidOrange: { background: 'var(--orange-500)', color: 'var(--neutral-0)' },
};

export function Badge({ children, tone = 'aqua', size = 'md', style, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: size === 'sm' ? '3px 9px' : '5px 12px',
      fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
      ...TONES[tone], ...style,
    }} {...rest}>{children}</span>
  );
}
