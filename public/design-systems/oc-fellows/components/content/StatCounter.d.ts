import * as React from 'react';

/** Big number over a plain label, counting up from zero — the site's impact statistics. */
export interface StatCounterProps {
  /** Real figure. Never invent one — the sources publish none. */
  value: number;
  /** '+' or '%' */
  suffix?: string;
  label: string;
  tone?: 'light' | 'dark';
  animate?: boolean;
  style?: React.CSSProperties;
}
export function StatCounter(props: StatCounterProps): JSX.Element;
