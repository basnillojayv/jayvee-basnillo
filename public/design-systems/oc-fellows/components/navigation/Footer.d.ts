import * as React from 'react';

/**
 * Navy site footer: reversed logo, the CLAOC "A program of" credit, link columns, social, legal bar.
 */
export interface FooterProps {
  /** Path to assets/logo-white.svg */
  logo?: string;
  /** CLAOC mark — none was supplied, so the name renders as type by default */
  parentLogo?: string;
  parentLabel?: string;
  columns?: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
  social?: Array<{ label: string; href: string; icon?: React.ReactNode }>;
  copyright?: string;
  legal?: Array<{ label: string; href: string }>;
  style?: React.CSSProperties;
}
export function Footer(props: FooterProps): JSX.Element;
