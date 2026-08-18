import React from 'react';

/**
 * ProSomnus Button.
 * `accent` (amber) is reserved for the single primary call-to-action on a view.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 14, gap: 6 },
    md: { padding: '11px 20px', fontSize: 16, gap: 8 },
    lg: { padding: '15px 28px', fontSize: 18, gap: 10 },
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--color-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)',
      fontWeight: 'var(--weight-semibold)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--surface-soft)',
    ghost: 'var(--color-primary-soft)',
  }[variant];
  const hoverColor = variant === 'accent' ? 'var(--text-inverse)' : undefined;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        width: fullWidth ? '100%' : 'auto',
        padding: s.padding,
        fontFamily: 'var(--font-body)',
        fontSize: s.fontSize,
        fontWeight: v.fontWeight || 'var(--weight-medium)',
        lineHeight: 1,
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        transform: active && !disabled ? 'scale(0.97)' : 'none',
        ...v,
        ...(hover && !disabled ? { background: hoverBg, color: hoverColor || v.color } : {}),
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
