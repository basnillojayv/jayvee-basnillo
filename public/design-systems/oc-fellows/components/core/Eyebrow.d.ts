import * as React from 'react';

/** The short human claim that sits above a section heading — the brand's signature copy device. */
export interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'orange' | 'slate' | 'navy' | 'teal' | 'inverse';
  /** Caps + wide tracking. Reserve for the tagline; sections stay sentence case. */
  uppercase?: boolean;
  as?: 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
