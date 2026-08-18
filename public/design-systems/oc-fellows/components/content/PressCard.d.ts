import * as React from 'react';

/** A press clipping: portrait scan of the page, publication name, date, outbound link. */
export interface PressCardProps {
  publication: string;
  date?: string;
  /** Scan or screenshot of the clipping, cropped from the top */
  thumbnail?: string;
  href?: string;
  style?: React.CSSProperties;
}
export function PressCard(props: PressCardProps): JSX.Element;
