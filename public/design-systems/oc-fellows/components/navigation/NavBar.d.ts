import * as React from 'react';

/**
 * The site header: logo left, nav right, one orange Apply button. Nothing else is sticky.
 */
export interface NavBarProps {
  /** Path to assets/logo-primary.svg */
  logo?: string;
  items?: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>;
  activeHref?: string;
  /** The single orange CTA. Pass null to omit. */
  cta?: { label: string; href: string } | null;
  onNavigate?: (href: string) => void;
  sticky?: boolean;
  style?: React.CSSProperties;
}
export function NavBar(props: NavBarProps): JSX.Element;
