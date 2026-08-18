import React from 'react';

const SIZES = { sm: 32, md: 40, lg: 48 };
const VARIANTS = {
  solid: { background: 'var(--action-secondary-bg)', color: 'var(--neutral-0)', border: '1px solid transparent' },
  accent: { background: 'var(--action-primary-bg)', color: 'var(--neutral-0)', border: '1px solid transparent' },
  outline: { background: 'var(--neutral-0)', color: 'var(--navy-500)', border: '1px solid var(--border-default)' },
  ghost: { background: 'transparent', color: 'var(--navy-500)', border: '1px solid transparent' },
};
const HOVER = {
  solid: { background: 'var(--action-secondary-bg-hover)' },
  accent: { background: 'var(--action-primary-bg-hover)' },
  outline: { borderColor: 'var(--border-accent)', color: 'var(--orange-600)' },
  ghost: { background: 'var(--action-quiet-bg-hover)' },
};

export function IconButton({ icon, label, variant = 'outline', size = 'md', shape = 'circle', href, disabled = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size];
  const css = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: s, height: s, padding: 0, cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-sm)',
    transition: 'var(--transition-interactive)',
    ...VARIANTS[variant], ...(hover && !disabled ? HOVER[variant] : null),
    ...(disabled ? { background: 'var(--disabled-bg)', color: 'var(--disabled-fg)', borderColor: 'transparent' } : null),
    ...style,
  };
  const handlers = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  if (href && !disabled) return <a href={href} aria-label={label} style={css} {...handlers} {...rest}>{icon}</a>;
  return <button type="button" aria-label={label} disabled={disabled} onClick={onClick} style={css} {...handlers} {...rest}>{icon}</button>;
}
