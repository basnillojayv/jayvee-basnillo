import React from 'react';

/** Inline message banner. tone: info | success | warning | error */
export function Alert({ tone = 'info', title, onClose, style = {}, children }) {
  const tones = {
    info:    { bg: 'var(--blue-50)',    fg: 'var(--blue-700)',    icon: 'info' },
    success: { bg: 'var(--success-bg)', fg: 'var(--success)',     icon: 'check' },
    warning: { bg: 'var(--amber-50)',   fg: 'var(--amber-700)',   icon: 'alert' },
    error:   { bg: 'var(--error-bg)',   fg: 'var(--error)',       icon: 'x' },
  };
  const t = tones[tone] || tones.info;
  const paths = {
    info: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>,
    check: <><circle cx="12" cy="12" r="10" /><polyline points="9 12 11.5 14.5 16 9.5" /></>,
    alert: <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
    x: <><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>,
  };
  return (
    <div role="alert" style={{
      display: 'flex', gap: 12, padding: '14px 16px',
      background: t.bg, borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)', color: t.fg, ...style,
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
        {paths[t.icon]}
      </svg>
      <div style={{ flex: 1, fontSize: 15, lineHeight: 1.5 }}>
        {title && <div style={{ fontWeight: 'var(--weight-semibold)', marginBottom: children ? 3 : 0 }}>{title}</div>}
        {children && <div style={{ color: 'var(--text-body)' }}>{children}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'inherit', opacity: 0.7, padding: 0, flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      )}
    </div>
  );
}
