import * as React from 'react';

export interface StatProps {
  /** Target number to count up to. */
  value: number;
  prefix?: string;
  suffix?: string;
  label?: string;
  duration?: number;
  decimals?: number;
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
