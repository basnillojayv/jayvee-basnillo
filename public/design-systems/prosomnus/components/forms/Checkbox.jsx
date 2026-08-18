import React from 'react';

/** Checkbox with label. */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, id, style = {} }) {
  const cbId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };

  return (
    <label
      htmlFor={cbId}
      onClick={(e) => { e.preventDefault(); toggle(); }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
      }}
    >
      <span
        style={{
          width: 20, height: 20, flexShrink: 0,
          borderRadius: 6,
          border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-default)'}`,
          background: on ? 'var(--color-primary)' : 'var(--surface-card)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all var(--duration-fast) var(--ease-out)',
        }}
      >
        {on && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        )}
      </span>
      <input id={cbId} type="checkbox" checked={on} onChange={() => {}} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      {label}
    </label>
  );
}
