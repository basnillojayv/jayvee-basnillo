import * as React from 'react';

export interface IconProps {
  /** Lucide icon name (kebab-case), e.g. "arrow-right", "shield-check", "moon". */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Renders a Lucide line icon. Requires the Lucide UMD script on the page.
 */
export function Icon(props: IconProps): JSX.Element;
