import * as React from 'react';

/**
 * Eyebrow + heading + intro paragraph — the standard opener for every page section.
 */
export interface SectionHeadingProps {
  /** Short human claim above the heading */
  eyebrow?: string;
  title: string;
  /** One to three sentences, 25–45 words */
  intro?: string;
  align?: 'left' | 'center';
  /** dark = on navy or a photograph */
  tone?: 'light' | 'dark';
  level?: 1 | 2 | 3;
  maxWidth?: string;
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
