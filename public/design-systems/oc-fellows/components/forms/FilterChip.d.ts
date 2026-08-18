import * as React from 'react';

/**
 * Toggleable filter pill — the class-year filter on the Fellows directory.
 */
export interface FilterChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Optional result count shown after the label */
  count?: number;
  style?: React.CSSProperties;
}
export function FilterChip(props: FilterChipProps): JSX.Element;
