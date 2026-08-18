import * as React from 'react';

export interface RadioOption { value: string; label: string; }
export interface RadioProps {
  options?: (RadioOption | string)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Radio(props: RadioProps): JSX.Element;
