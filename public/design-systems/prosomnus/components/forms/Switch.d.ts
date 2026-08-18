import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
