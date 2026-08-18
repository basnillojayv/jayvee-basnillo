import * as React from 'react';

/** Consent and multi-select checkbox with optional description line. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label: React.ReactNode;
  description?: string;
  id?: string;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
