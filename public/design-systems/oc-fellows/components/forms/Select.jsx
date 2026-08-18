import React from 'react';
import { Field, controlStyle } from './Field.jsx';

export function Select({ label, hint, error, required, id, options = [], placeholder, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <Field label={label} htmlFor={id} hint={hint} error={error} required={required}>
      <div style={{ position: 'relative' }}>
        <select id={id} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...controlStyle(!!error, focused), appearance: 'none', paddingRight: 40, cursor: 'pointer', ...style }}
          {...rest}>
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const optLabel = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{optLabel}</option>;
          })}
        </select>
        <span style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'var(--navy-500)', display: 'flex',
        }}><i data-lucide="chevron-down" style={{ width: 18, height: 18 }} /></span>
      </div>
    </Field>
  );
}
