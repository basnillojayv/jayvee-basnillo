import React from 'react';

const TONES = {
  orange: 'var(--orange-500)', slate: 'var(--neutral-500)',
  navy: 'var(--navy-500)', teal: 'var(--teal-700)', inverse: 'var(--aqua-500)',
};

export function Eyebrow({ children, tone = 'orange', uppercase = false, as = 'p', style, ...rest }) {
  const Tag = as;
  return (
    <Tag style={{
      margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--type-eyebrow-size)',
      fontWeight: 'var(--type-eyebrow-weight)', letterSpacing: 'var(--type-eyebrow-tracking)',
      textTransform: uppercase ? 'uppercase' : 'none', color: TONES[tone], lineHeight: 1.4,
      ...style,
    }} {...rest}>{children}</Tag>
  );
}
