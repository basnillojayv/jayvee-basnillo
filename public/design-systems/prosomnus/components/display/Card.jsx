import React from 'react';

/** Soft rounded surface. `hoverLift` raises the card on hover. */
export function Card({ hoverLift = false, padding = 24, as = 'div', style = {}, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      onMouseEnter={hoverLift ? () => setHover(true) : undefined}
      onMouseLeave={hoverLift ? () => setHover(false) : undefined}
      style={{
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        padding,
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'var(--lift-hover)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        fontFamily: 'var(--font-body)',
        color: 'var(--text-body)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
