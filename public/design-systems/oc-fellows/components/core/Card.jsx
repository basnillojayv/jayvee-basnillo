import React from 'react';

const SURFACES = {
  white: { background: 'var(--surface-card)', color: 'var(--text-body)' },
  cream: { background: 'var(--surface-cream)', color: 'var(--text-body)' },
  aqua: { background: 'var(--surface-aqua-soft)', color: 'var(--text-body)' },
  navy: { background: 'var(--surface-navy)', color: 'var(--text-inverse)' },
};

export function Card({
  children, surface = 'white', edge = 'shadow', padding = 'var(--pad-card)',
  interactive = false, href, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = interactive && hover;
  const css = {
    display: 'block', position: 'relative', boxSizing: 'border-box',
    borderRadius: 'var(--radius-card)', padding, overflow: 'hidden',
    textDecoration: 'none', transition: 'var(--transition-interactive)',
    border: edge === 'border' ? '1px solid var(--border-subtle)' : '1px solid transparent',
    boxShadow: edge === 'shadow' ? (lifted ? 'var(--shadow-hover)' : 'var(--shadow-sm)') : (lifted ? 'var(--shadow-md)' : 'none'),
    transform: lifted ? 'var(--lift-translate)' : 'none',
    ...SURFACES[surface], ...style,
  };
  const handlers = interactive ? { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) } : {};
  const Tag = href ? 'a' : 'div';
  return <Tag href={href} style={css} {...handlers} {...rest}>{children}</Tag>;
}
