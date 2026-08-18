import * as React from 'react';

/**
 * An Impact Story: photo, headline, truncated excerpt, Read More affordance.
 */
export interface StoryCardProps {
  title: string;
  /** One truncated sentence, ending in an ellipsis as on the site */
  excerpt?: string;
  image?: string;
  href?: string;
  /** Optional small orange label above the headline */
  kicker?: string;
  cta?: string;
  style?: React.CSSProperties;
}
export function StoryCard(props: StoryCardProps): JSX.Element;
