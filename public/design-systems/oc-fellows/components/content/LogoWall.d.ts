import * as React from 'react';

/** Row of partner, sponsor or employer logos. Falls back to the name set in type when no file exists. */
export interface LogoWallProps {
  /** { name, src? } — omit src and the name renders as plain type, which is the correct fallback */
  logos?: Array<{ name: string; src?: string }>;
  /** Logo height in px; 40 by default */
  height?: number;
  /** Small label above the row, e.g. "OC Fellows is sponsored by" */
  label?: string;
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
export function LogoWall(props: LogoWallProps): JSX.Element;
