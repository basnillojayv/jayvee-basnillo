import * as React from 'react';

export interface AlertProps {
  tone?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Alert(props: AlertProps): JSX.Element;
