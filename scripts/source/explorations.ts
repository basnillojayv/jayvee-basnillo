/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ExplorationCategory = 'Web Designs' | 'Social Media';

export type Exploration = {
  slug: string;
  title: string;
  image: string;
  category: ExplorationCategory;
};

const drive = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

// Several titles repeat (five Kaur Migration pieces), so slugs are suffixed to
// stay unique and stable as route params.
const raw: Array<[ExplorationCategory, string, string]> = [
  ['Web Designs', 'Vietrise', '1W3qudUxGwdYaWt4IlPRateXPLfly4v31'],
  ['Web Designs', 'Harbor Institute', '17wxGQXEcYVq3bhxI0BzN6xzB8_UVEKkR'],
  ['Web Designs', 'OC Fellows', '101i8D_gHJafk1hKDqFcOod52vsfqvMwp'],
  ['Web Designs', 'Susan Choi Law', '10GLiEu-donzl935cd-qtYA6XbO2J7y_t'],
  ['Web Designs', 'People for Housing', '1NygvXYONzdYy_ZtJJG3f3HiIkO3gkj8j'],
  ['Web Designs', 'Thompson Family Foundation', '1i84DXcTa1MHh0Gp41iMjNCb6h1iK-UVK'],
  ['Web Designs', 'OC MECCA', '1GB4Zi7n2aWCl1H8fiD8T_I7zVJKDG4Dy'],
  ['Web Designs', 'Terrorism Law', '1vpj1cIRB7-00mkvemxXK1YDD7TaPi5t4'],
  ['Web Designs', 'Happening Now with Hammer', '1mVywSBiKWGptQ1ZNjR3dPwxRpLczhX95'],
  ['Web Designs', 'Regent', '1lteH88cP2DW_bjt2ZJHyzS7njw9u3U-v'],
  ['Web Designs', 'Devoted to Design', '1h8-8X6zvFIbItbiS12LJ0YQV5D_UAfin'],
  ['Web Designs', 'OCCCOPICO', '1Vi6f8Fd-J5PF5-qeBR4rjOMNAZfbzumb'],
  ['Web Designs', 'Lenahan Law', '1JmymBXVa-XMhqrT1j4Erf_2Xu2yiFs0p'],
  ['Web Designs', 'Anaheim Community Foundation', '1GEc9WpowouKE8fdjHF0YkJUjJV5JV8vt'],
  ['Web Designs', 'Sierra Lobo', '16a86N10t4DwQgkebvJl8fkxMw4edxQoA'],
  ['Social Media', 'Community Education Australia', '1Jd3xRW6NirpL0DiaP7ejtZ12jABtDF4P'],
  ['Social Media', 'Kaur Migration', '163JXjkCSWjwl4U54tKw63mjZMv6C1Voe'],
  ['Social Media', 'Elite Training Institute', '1pjNYec9_bVGdE6J62dexjNMBztFC9jHq'],
  ['Social Media', 'Kaur Migration', '1EcL6dFDryEZ_4qy5nB3mWPdXglsbZZUD'],
  ['Social Media', 'Kaur Migration', '1q_D0W0Qr3i8ciwx_e1i8fylUL1jXWTPU'],
  ['Social Media', 'Kaur Migration', '1ZrlsGMnCumN38cQcc_eVsVU9DA6s4qQi'],
  ['Social Media', 'Kaur Migration', '1dewUFr1GKLdwtMCG8W1NQyjMUHRnEkTJ'],
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const seen = new Map<string, number>();

export const explorations: Exploration[] = raw.map(([category, title, id]) => {
  const base = slugify(title);
  const n = (seen.get(base) ?? 0) + 1;
  seen.set(base, n);

  return {
    slug: n === 1 ? base : `${base}-${n}`,
    title,
    image: drive(id),
    category,
  };
});

export const explorationCategories: ExplorationCategory[] = ['Web Designs', 'Social Media'];

export const getExploration = (slug?: string) => explorations.find((e) => e.slug === slug);
