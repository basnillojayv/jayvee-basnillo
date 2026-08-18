import React from 'react';

/** Small status label. tone: neutral | primary | success | warning | error | wellness */
export function Badge({ tone = 'neutral', size = 'md', style = {}, children }) {
  const tones = {
    neutral: { bg: 'var(--gray-100)', fg: 'var(--gray-700)' },
    primary: { bg: 'var(--blue-50)', fg: 'var(--blue-700)' },
    wellness: { bg: 'var(--cyan-50)', fg: 'var(--cyan-700)' },
    success: { bg: 'var(--success-bg)', fg: 'var(--success)' },
    warning: { bg: 'var(--amber-50)', fg: 'var(--amber-700)' },
    error: { bg: 'var(--error-bg)', fg: 'var(--error)' },
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '4px 12px';
  const fs = size === 'sm' ? 12 : 13;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: pad, fontFamily: 'var(--font-body)', fontSize: fs,
      fontWeight: 'var(--weight-medium)', lineHeight: 1.4,
      color: t.fg, background: t.bg, borderRadius: 'var(--radius-pill)',
      ...style,
    }}>
      {children}
    </span>
  );
}
