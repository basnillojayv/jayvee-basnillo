import * as React from 'react';

/** Native select with a Lucide chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  /** Plain strings, or { value, label } pairs */
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
