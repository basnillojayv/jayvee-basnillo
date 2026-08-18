import React from 'react';

/** Toggle switch. */
export function Switch({ checked, defaultChecked, onChange, disabled = false, label, style = {} }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };

  const knob = (
    <span
      role="switch"
      aria-checked={on}
      onClick={toggle}
      style={{
        width: 44, height: 26, flexShrink: 0, borderRadius: 999,
        background: on ? 'var(--color-primary)' : 'var(--gray-300)',
        position: 'relative', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--duration-base) var(--ease-out)',
      }}
    >
      <span style={{
        position: 'absolute', top: 3, left: on ? 21 : 3,
        width: 20, height: 20, borderRadius: '50%', background: '#fff',
        boxShadow: 'var(--shadow-sm)',
        transition: 'left var(--duration-base) var(--ease-out)',
      }} />
    </span>
  );

  if (!label) return <span style={{ opacity: disabled ? 0.5 : 1, ...style }}>{knob}</span>;
  return (
    <label onClick={toggle} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      {knob}{label}
    </label>
  );
}
