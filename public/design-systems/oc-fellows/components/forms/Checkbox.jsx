import React from 'react';

export function Checkbox({ label, description, id, checked, defaultChecked, onChange, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const on = checked !== undefined ? checked : undefined;
  return (
    <label htmlFor={id} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1, ...style,
      }}>
      <input type="checkbox" id={id} checked={on} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled}
        style={{
          appearance: 'none', width: 20, height: 20, flex: '0 0 auto', margin: '2px 0 0',
          borderRadius: 'var(--radius-xs)', cursor: 'inherit',
          border: '1px solid ' + (hover && !disabled ? 'var(--navy-500)' : 'var(--border-default)'),
          background: 'var(--neutral-0)', transition: 'var(--transition-interactive)',
          backgroundImage: 'none',
        }}
        {...rest} />
      <span>
        <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{label}</span>
        {description ? <span style={{ display: 'block', marginTop: 2, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{description}</span> : null}
      </span>
    </label>
  );
}
