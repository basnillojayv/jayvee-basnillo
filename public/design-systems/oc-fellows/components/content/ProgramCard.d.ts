import * as React from 'react';

/**
 * Full-bleed photographic programme card — Learning Events, Social Events, Community Partner.
 */
export interface ProgramCardProps {
  /** Small aqua label above the title; defaults to "Our Program" */
  kicker?: string;
  title: string;
  /** Revealed on hover */
  description?: string;
  /** Real photo of an OC Fellows event */
  image?: string;
  href?: string;
  style?: React.CSSProperties;
}
export function ProgramCard(props: ProgramCardProps): JSX.Element;
