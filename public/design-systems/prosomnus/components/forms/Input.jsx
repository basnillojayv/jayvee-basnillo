import React from 'react';

/** Text input with optional label, hint and error. */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  id,
  type = 'text',
  disabled = false,
  style = {},
  ...rest
}) {
  const inputId = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  const borderColor = error
    ? 'var(--error)'
    : focus
    ? 'var(--border-focus)'
    : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 14, fontWeight: 'var(--weight-medium)', color: 'var(--text-heading)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && (
          <span style={{ position: 'absolute', left: 12, display: 'inline-flex', color: 'var(--text-muted)', pointerEvents: 'none' }}>
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: iconLeft ? '11px 14px 11px 38px' : '11px 14px',
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'var(--text-heading)',
            background: disabled ? 'var(--surface-soft)' : 'var(--surface-card)',
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--radius-sm)',
            outline: 'none',
            boxShadow: focus && !error ? 'var(--ring-primary)' : 'none',
            transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 13, color: error ? 'var(--error)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
