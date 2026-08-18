import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function SectionHeading({
  eyebrow, title, intro, align = 'left', tone = 'light', level = 2, maxWidth = 'var(--measure-prose)', style, ...rest
}) {
  const Tag = 'h' + level;
  const dark = tone === 'dark';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
      textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth, marginInline: align === 'center' ? 'auto' : undefined, ...style,
    }} {...rest}>
      {eyebrow ? <Eyebrow tone={dark ? 'inverse' : 'orange'}>{eyebrow}</Eyebrow> : null}
      <Tag style={{
        margin: 0, color: dark ? 'var(--text-inverse)' : 'var(--text-heading)',
        fontSize: 'var(--type-h2-size)', fontWeight: 'var(--type-h2-weight)',
        lineHeight: 'var(--type-h2-leading)', letterSpacing: 'var(--tracking-tight)', textWrap: 'balance',
      }}>{title}</Tag>
      {intro ? <p style={{
        margin: 0, marginTop: 'var(--space-1)',
        color: dark ? 'rgba(255,255,255,.82)' : 'var(--text-body)',
        fontSize: 'var(--type-lead-size)', lineHeight: 'var(--type-lead-leading)', textWrap: 'pretty',
      }}>{intro}</p> : null}
    </div>
  );
}
