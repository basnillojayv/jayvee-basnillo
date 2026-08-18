import * as React from 'react';

/** One of the five brand values: title plus its single-line descriptor. */
export interface ValueItemProps {
  /** e.g. "Curiosity Sparks Growth" */
  title: string;
  /** The verbatim descriptor from the brand guidelines */
  description: string;
  icon?: React.ReactNode;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export function ValueItem(props: ValueItemProps): JSX.Element;
