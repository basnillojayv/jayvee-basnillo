import * as React from 'react';

/** Multi-line text field for the contact and application forms. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  rows?: number;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
