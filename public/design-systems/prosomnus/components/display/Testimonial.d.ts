import * as React from 'react';

export interface TestimonialProps {
  quote: string;
  name: string;
  role?: string;
  rating?: number;
  avatar?: string;
  style?: React.CSSProperties;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
