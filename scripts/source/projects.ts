/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  url: string;
  description: string;
};

const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

export const projects: Project[] = [
  {
    slug: 'onehome',
    title: 'OneHome',
    category: 'Terminal Network',
    // Captured screenshot rather than the mshots helper: mshots has no crawl of
    // this URL yet and serves a grey placeholder until it warms up.
    image: '/thumbnails/onehome.jpg',
    url: 'https://outriders-ten.vercel.app/',
    description:
      'A membership platform for OneHome by LineHaul Station, a pay-per-use housing and amenities network built for professional truck drivers. The site frames the pitch around the economics of a life spent on the road, pairing the free Outriders Club membership with resort-quality terminal amenities, fleet servicing, and support services.',
  },
  {
    slug: 'desert-peak-hvac',
    title: 'Desert Peak HVAC',
    category: 'Home Services',
    // Captured screenshot for the same reason as OneHome: mshots serves a grey
    // placeholder for this URL.
    image: '/thumbnails/desert-peak-hvac.jpg',
    url: 'https://desert-peak-hvac.vercel.app/',
    description:
      'A conversion-focused site for Desert Peak Heating & Cooling, a Henderson, Nevada HVAC contractor serving the greater Las Vegas Valley. Built around the urgency of desert summers — same-day service, 24/7 emergency response, and upfront pricing lead the page, backed by service breakdowns, a coverage map, a testimonial carousel, and a quote request form.',
  },
  {
    slug: 'vietrise',
    title: 'VietRise',
    category: 'Community',
    image: shot('https://vietrise.org/'),
    url: 'https://vietrise.org/',
    description:
      'A community-focused platform for VietRise, empowering the Vietnamese community through cultural and civic engagement. The site features a clean, responsive design with integrated event management and resource libraries.',
  },
  {
    slug: 'oc-mecca',
    title: 'OC MECCA',
    category: 'Community',
    image: shot('https://ocmecca.org/'),
    url: 'https://ocmecca.org/',
    description:
      'Digital home for Orange County Multi-Ethnic Collaborative of Community Agencies. Designed to facilitate collaboration and resource sharing among diverse community groups with a focus on accessibility and multi-lingual support.',
  },
  {
    slug: 'aa-museum-gp',
    title: 'AA Museum GP',
    category: 'Museum',
    image: shot('https://aamuseumgp.org/'),
    url: 'https://aamuseumgp.org/',
    description:
      'An immersive digital museum experience showcasing African American history and culture. Features high-resolution galleries, interactive timelines, and educational resources built with a focus on visual storytelling.',
  },
  {
    slug: 'strata-expanse',
    title: 'Strata Expanse',
    category: 'Corporate',
    image: shot('https://strataexpanse.com/'),
    url: 'https://strataexpanse.com/',
    description:
      'A high-performance corporate landing page for Strata Expanse, highlighting their strategic consulting services. Built with a brutalist aesthetic and smooth scroll animations to communicate authority and modernism.',
  },
  {
    slug: 'anaheim-cf',
    title: 'Anaheim CF',
    category: 'Foundation',
    image: shot('https://anaheimcf.org/'),
    url: 'https://anaheimcf.org/',
    description:
      'Official website for the Anaheim Community Foundation. Streamlined donation processes and community grant applications with a focus on transparency and user-friendly navigation.',
  },
  {
    slug: 'devoted-to-design',
    title: 'Devoted to Design',
    category: 'Foundation',
    image: shot('https://devotedtodesignfoundation.org/'),
    url: 'https://devotedtodesignfoundation.org/',
    description:
      'A visually striking platform for a design-centric foundation. Emphasizes aesthetic precision and creative impact through bold typography and dynamic layout transitions.',
  },
  {
    slug: 'oc-fellows',
    title: 'OC Fellows',
    category: 'Non-Profit',
    image: shot('https://ocfellows.org/'),
    url: 'https://ocfellows.org/',
    description:
      'A networking and resource platform for Orange County fellows. Focuses on professional development and community building with integrated member directories and event calendars.',
  },
  {
    slug: 'terrorism-law',
    title: 'Terrorism Law',
    category: 'Legal',
    image: shot('https://terrorismlaw.com/'),
    url: 'https://terrorismlaw.com/',
    description:
      'A specialized legal resource site providing insights and analysis on terrorism law. Features a robust content management system for legal articles and case studies.',
  },
  {
    slug: 'susan-choi-law',
    title: 'Susan Choi Law',
    category: 'Legal',
    image: shot('https://susanchoi.law/'),
    url: 'https://susanchoi.law/',
    description:
      'Professional portfolio for attorney Susan Choi. Emphasizes trust and expertise through a clean, minimalist design and clear communication of legal services.',
  },
  {
    slug: 'mkc-law',
    title: 'MKC Law',
    category: 'Legal',
    image: shot('https://mkc-law.com/'),
    url: 'https://mkc-law.com/',
    description:
      'Modern website for MKC Law firm. Streamlined client intake forms and clear service overviews built with a focus on conversion and professional authority.',
  },
  {
    slug: 'albanos',
    title: 'Albanos',
    category: 'E-Commerce',
    image: shot('https://albanos.com/'),
    url: 'https://albanos.com/',
    description:
      'A high-conversion e-commerce platform for Albanos. Features advanced product filtering, seamless checkout flows, and a visually rich shopping experience.',
  },
  {
    slug: '1in6',
    title: '1in6',
    category: 'Non-Profit',
    image: shot('https://1in6.org/'),
    url: 'https://1in6.org/',
    description:
      'A sensitive and supportive platform for 1in6, providing resources for male survivors of sexual abuse. Focuses on privacy, accessibility, and compassionate design.',
  },
  {
    slug: 'thompson-family-foundation',
    title: 'Thompson Family Foundation',
    category: 'Foundation',
    image: shot('https://thompsonfamilyfoundation.us/'),
    url: 'https://thompsonfamilyfoundation.us/',
    description:
      'Official site for the Thompson Family Foundation. Highlights philanthropic initiatives and grant opportunities with a focus on legacy and community impact.',
  },
  {
    slug: 'gold-futures-challenge',
    title: 'Gold Futures Challenge',
    category: 'Initiative',
    image: shot('https://goldfutureschallenge.org/'),
    url: 'https://goldfutureschallenge.org/',
    description:
      'A dynamic platform for the Gold Futures Challenge initiative. Features real-time tracking of challenges and community contributions with a bold, energetic design.',
  },
  {
    slug: 'green-door-hospitality',
    title: 'Green Door Hospitality',
    category: 'Hospitality',
    image: shot('https://greendoorhospitality.com/'),
    url: 'https://greendoorhospitality.com/',
    description:
      'A luxurious digital experience for Green Door Hospitality. Emphasizes high-end service and unique hospitality experiences through elegant typography and rich imagery.',
  },
];

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
