import * as React from 'react';

/** Small non-interactive label: a Fellow's class year, a story category, a status. */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'navy' | 'orange' | 'aqua' | 'teal' | 'solidNavy' | 'solidOrange';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
