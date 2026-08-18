import React from 'react';
import { Field, controlStyle } from './Field.jsx';

export function Input({ label, hint, error, required, id, icon, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const control = (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {icon ? <span style={{ position: 'absolute', left: 12, display: 'flex', color: 'var(--neutral-500)', pointerEvents: 'none' }}>{icon}</span> : null}
      <input id={id} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ ...controlStyle(!!error, focused), paddingLeft: icon ? 40 : undefined, ...style }}
        {...rest} />
    </div>
  );
  return <Field label={label} htmlFor={id} hint={hint} error={error} required={required}>{control}</Field>;
}
