import React from 'react';

/** Radio group. options: [{value,label}] or [string]. */
export function Radio({ options = [], value, defaultValue, onChange, name, disabled = false, style = {} }) {
  const grpName = name || React.useId();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;

  const pick = (v) => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };

  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--font-body)', ...style }}>
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value;
        const labelText = typeof o === 'string' ? o : o.label;
        const on = current === v;
        return (
          <label key={v} onClick={() => pick(v)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--text-body)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
            <span style={{
              width: 20, height: 20, flexShrink: 0, borderRadius: '50%',
              border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-default)'}`,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all var(--duration-fast) var(--ease-out)',
            }}>
              {on && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-primary)' }} />}
            </span>
            <input type="radio" name={grpName} checked={on} onChange={() => {}} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            {labelText}
          </label>
        );
      })}
    </div>
  );
}
