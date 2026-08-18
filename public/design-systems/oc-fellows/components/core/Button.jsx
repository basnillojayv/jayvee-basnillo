import React from 'react';

const SIZES = {
  sm: { padding: 'var(--pad-button-sm-y) var(--pad-button-sm-x)', fontSize: 'var(--text-sm)', gap: '6px' },
  md: { padding: 'var(--pad-button-y) var(--pad-button-x)', fontSize: 'var(--text-base)', gap: '8px' },
  lg: { padding: 'var(--pad-button-lg-y) var(--pad-button-lg-x)', fontSize: 'var(--text-lg)', gap: '10px' },
};

const VARIANTS = {
  primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', border: '1px solid transparent' },
  secondary: { background: 'var(--action-secondary-bg)', color: 'var(--action-secondary-fg)', border: '1px solid transparent' },
  outline: { background: 'transparent', color: 'var(--action-quiet-fg)', border: '1px solid var(--border-strong)' },
  quiet: { background: 'transparent', color: 'var(--action-quiet-fg)', border: '1px solid transparent' },
  inverse: { background: 'var(--neutral-0)', color: 'var(--navy-500)', border: '1px solid transparent' },
};

const HOVER = {
  primary: { background: 'var(--action-primary-bg-hover)' },
  secondary: { background: 'var(--action-secondary-bg-hover)' },
  outline: { background: 'var(--action-quiet-bg-hover)', borderColor: 'var(--border-accent)', color: 'var(--orange-600)' },
  quiet: { color: 'var(--text-link-hover)' },
  inverse: { background: 'var(--aqua-100)' },
};

export function Button({
  children, variant = 'primary', size = 'md', icon, iconPosition = 'left',
  href, disabled = false, fullWidth = false, type = 'button', onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
    alignItems: 'center', justifyContent: 'center', gap: SIZES[size].gap,
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', lineHeight: 1.2,
    letterSpacing: '0.01em', textDecoration: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-button)', transition: 'var(--transition-interactive)',
    padding: SIZES[size].padding, fontSize: SIZES[size].fontSize,
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...(press && !disabled ? { transform: 'var(--press-translate)' } : null),
    ...(disabled ? { background: 'var(--disabled-bg)', color: 'var(--disabled-fg)', borderColor: 'transparent' } : null),
    ...style,
  };
  const content = (
    <React.Fragment>
      {icon && iconPosition === 'left' ? <span style={{ display: 'flex' }}>{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <span style={{ display: 'flex' }}>{icon}</span> : null}
    </React.Fragment>
  );
  const handlers = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true), onMouseUp: () => setPress(false),
  };
  if (href && !disabled) return <a href={href} style={base} {...handlers} {...rest}>{content}</a>;
  return <button type={type} disabled={disabled} onClick={onClick} style={base} {...handlers} {...rest}>{content}</button>;
}
