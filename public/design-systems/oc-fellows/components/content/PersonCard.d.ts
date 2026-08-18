import * as React from 'react';

/**
 * A Fellow or team member: portrait, name, and either a class year or a role line.
 */
export interface PersonCardProps {
  name: string;
  /** Role and organisation, for team members */
  meta?: string;
  /** Class year, for Fellows */
  year?: string | number;
  /** Real photo of a Fellow — never stock */
  photo?: string;
  href?: string;
  linkedin?: string;
  /** fellow = 3:4 portrait; team = circular crop */
  variant?: 'fellow' | 'team';
  style?: React.CSSProperties;
}
export function PersonCard(props: PersonCardProps): JSX.Element;
