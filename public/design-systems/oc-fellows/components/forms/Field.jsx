import React from 'react';

export function Field({ label, htmlFor, hint, error, required = false, children, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-label-size)',
          fontWeight: 'var(--type-label-weight)', color: 'var(--text-heading)',
        }}>
          {label}{required ? <span style={{ color: 'var(--orange-600)', marginLeft: 4 }}>*</span> : null}
        </label>
      ) : null}
      {children}
      {error ? <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--status-danger)' }}>{error}</p>
       : hint ? <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{hint}</p> : null}
    </div>
  );
}

export const controlStyle = (invalid, focused) => ({
  width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-base)', color: 'var(--text-body)', background: 'var(--neutral-0)',
  padding: 'var(--pad-input-y) var(--pad-input-x)', borderRadius: 'var(--radius-input)',
  border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--navy-500)' : 'var(--border-default)'),
  boxShadow: focused ? 'var(--ring-focus)' : 'none', outline: 'none',
  transition: 'var(--transition-interactive)',
});
