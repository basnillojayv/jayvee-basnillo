import * as React from 'react';

export interface ButtonProps {
  /** Visual style. `accent` (amber) is reserved for the single primary CTA on a view. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Primary interactive control.
 */
export function Button(props: ButtonProps): JSX.Element;
