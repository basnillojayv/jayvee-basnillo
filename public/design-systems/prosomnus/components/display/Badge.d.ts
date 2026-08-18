import * as React from 'react';

export interface BadgeProps {
  tone?: 'neutral' | 'primary' | 'wellness' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
