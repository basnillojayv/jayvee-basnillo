import React from 'react';

/** Native select styled to match ProSomnus inputs. */
export function Select({ label, hint, id, options = [], disabled = false, style = {}, ...rest }) {
  const selId = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && (
        <label htmlFor={selId} style={{ fontSize: 14, fontWeight: 'var(--weight-medium)', color: 'var(--text-heading)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={selId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            appearance: 'none',
            padding: '11px 38px 11px 14px',
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'var(--text-heading)',
            background: disabled ? 'var(--surface-soft)' : 'var(--surface-card)',
            border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-sm)',
            outline: 'none',
            boxShadow: focus ? 'var(--ring-primary)' : 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
          }}
          {...rest}
        >
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const labelText = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{labelText}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </div>
      {hint && <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}
