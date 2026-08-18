import * as React from 'react';

/** The base surface for every card in the system. Shadow OR hairline border, never both. */
export interface CardProps {
  children: React.ReactNode;
  surface?: 'white' | 'cream' | 'aqua' | 'navy';
  /** shadow = navy-tinted soft shadow; border = 1px hairline; none = flat */
  edge?: 'shadow' | 'border' | 'none';
  padding?: string;
  /** Lifts 4px and deepens the shadow on hover */
  interactive?: boolean;
  href?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
