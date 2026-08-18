import * as React from 'react';

/** Single-line text field with optional leading icon. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  /** Leading Lucide glyph at 18px */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
