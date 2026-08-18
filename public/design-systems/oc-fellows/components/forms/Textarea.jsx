import React from 'react';
import { Field, controlStyle } from './Field.jsx';

export function Textarea({ label, hint, error, required, id, rows = 5, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <Field label={label} htmlFor={id} hint={hint} error={error} required={required}>
      <textarea id={id} rows={rows} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ ...controlStyle(!!error, focused), resize: 'vertical', lineHeight: 'var(--leading-normal)', ...style }}
        {...rest} />
    </Field>
  );
}
