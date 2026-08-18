import * as React from 'react';

/** Label + control + hint/error wrapper shared by every form control. */
export interface FieldProps {
  label?: string;
  htmlFor?: string;
  hint?: string;
  /** Replaces the hint and turns it red */
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;
export function controlStyle(invalid?: boolean, focused?: boolean): React.CSSProperties;
