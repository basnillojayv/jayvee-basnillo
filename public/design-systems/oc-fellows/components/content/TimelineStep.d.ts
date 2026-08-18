import * as React from 'react';

/** One numbered step of the application timeline. Numerals, not icons. */
export interface TimelineStepProps {
  number: number | string;
  title: string;
  description?: string;
  /** Highlights the numeral in orange — the current stage */
  active?: boolean;
  /** Suppresses the connector line below */
  last?: boolean;
  style?: React.CSSProperties;
}
export function TimelineStep(props: TimelineStepProps): JSX.Element;
