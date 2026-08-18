import * as React from 'react';

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Dialog(props: DialogProps): JSX.Element | null;
