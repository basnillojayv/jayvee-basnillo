import * as React from 'react';

/**
 * The OC Fellows action button. Orange pill for the one primary action on a view.
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = orange pill (one per view); secondary = navy; outline/quiet = supporting; inverse = on navy or photo */
  variant?: 'primary' | 'secondary' | 'outline' | 'quiet' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide outline glyph, 20px, stroke 1.75 */
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  /** Renders an <a> instead of a <button> */
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
