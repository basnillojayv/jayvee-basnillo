import * as React from 'react';

/** A single-glyph control: carousel arrows, social links, close affordances. */
export interface IconButtonProps {
  icon: React.ReactNode;
  /** Required accessible name — the glyph carries no text */
  label: string;
  variant?: 'solid' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
