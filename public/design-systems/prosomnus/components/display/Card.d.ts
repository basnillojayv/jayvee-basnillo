import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Raise the card with a soft shadow on hover. */
  hoverLift?: boolean;
  padding?: number | string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Soft, rounded content surface — the base container of the system.
 */
export function Card(props: CardProps): JSX.Element;
