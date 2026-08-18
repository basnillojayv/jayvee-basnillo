import * as React from 'react';

export interface TagProps {
  selected?: boolean;
  onRemove?: () => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
