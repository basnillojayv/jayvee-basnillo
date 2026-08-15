import React from 'react'

type IconDef = { viewBox: string; path: React.ReactNode }

/**
 * ICON REGISTRY — name → inline SVG geometry.
 *
 * Geometry only: stroke, fill, and size are applied by the surrounding CSS
 * container (`.svc-card__ico svg`, `.why__ico svg`, `.stars svg`, …). That is
 * why these paths carry no `fill`/`stroke` attributes — do not add any.
 *
 * To add an icon for a client:
 *   1. paste the geometry here under a lowercase name,
 *   2. add that name to the matching `options` list in globals/Homepage.ts,
 *   3. it becomes selectable in the admin.
 *
 * Names are shape-based (`spark`, `panel`, `flame`) rather than
 * industry-based, so the same set carries across clients.
 */
const ICONS: Record<string, IconDef> = {
  /* ---------- feature / service icons (stroked) ---------- */
  spark: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M12 3v18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3.8 7.5 20.2 16.5M3.8 7.5l.6 4.1M3.8 7.5l4-1M20.2 16.5l-.6-4.1M20.2 16.5l-4 1M20.2 7.5 3.8 16.5M20.2 7.5l-4-1M20.2 7.5l-.6 4.1M3.8 16.5l4 1M3.8 16.5l.6-4.1" />
    ),
  },
  panel: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 9.5h17M7 14h4M7 16.5h6" />
        <circle cx="16.5" cy="14.75" r="1.5" />
      </>
    ),
  },
  flame: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M12 3c.5 3-1.8 4-1.8 6.4A2.5 2.5 0 0 0 12 12a2.4 2.4 0 0 0 2-3.7C15.8 9.6 17 12 17 14.4A5 5 0 1 1 7 14c0-2.7 2-4 2.6-6.4C10 5.4 11.2 4.2 12 3Z" />
    ),
  },
  wind: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M3 8.5h10a2.5 2.5 0 1 0-2.5-2.5M3 12h15a2.5 2.5 0 1 1-2.5 2.5M3 15.5h9a2.5 2.5 0 1 1-2.5 2.5" />
    ),
  },
  building: {
    viewBox: '0 0 24 24',
    path: <path d="M4 20V7l7-3 7 3v13M4 20h14M8 20v-4h6v4M8 9.5h2M13 9.5h2M8 13h2M13 13h2" />,
  },
  layers: {
    viewBox: '0 0 24 24',
    path: <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3ZM4 12l8 4.5 8-4.5M4 16.5 12 21l8-4.5" />,
  },
  clock: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <circle cx="12" cy="12.5" r="8" />
        <path d="M12 8v4.5l3 2M12 4.5V2.8M9.5 2.8h5" />
      </>
    ),
  },
  dollar: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10M14.5 9.2c-.6-1-1.6-1.4-2.7-1.4-1.4 0-2.4.8-2.4 2 0 2.7 5.4 1.6 5.4 4.3 0 1.3-1.1 2.1-2.6 2.1-1.3 0-2.4-.5-3-1.6" />
      </>
    ),
  },
  shield: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <path d="M12 3 5 5.5v5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9v-5L12 3Z" />
        <path d="M9 12l2.2 2.2L15.5 10" />
      </>
    ),
  },
  home: {
    viewBox: '0 0 24 24',
    path: <path d="M4 11 12 4l8 7M6 9.5V20h12V9.5M10 20v-5h4v5" />,
  },
  users: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <circle cx="9.5" cy="8.5" r="3.2" />
        <path d="M3.5 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.6a3.2 3.2 0 0 1 0 6M17.5 14.4c2 .7 3.5 2.5 3.5 5.1" />
      </>
    ),
  },
  check: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8.2 12.2 2.6 2.6 5-5.2" />
      </>
    ),
  },

  /* ---------- UI ---------- */
  phone: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    ),
  },
  mail: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m4 6.5 8 6 8-6" />
      </>
    ),
  },
  pin: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  // filled — used inside .stars and the hero rating badge
  star: {
    viewBox: '0 0 20 20',
    path: <path d="M10 1.5l2.5 5.3 5.8.8-4.2 4 1 5.7L10 20.6 4.9 17.3l1-5.7-4.2-4 5.8-.8z" />,
  },
  chevronLeft: { viewBox: '0 0 24 24', path: <path d="M15 5l-7 7 7 7" /> },
  chevronRight: { viewBox: '0 0 24 24', path: <path d="M9 5l7 7-7 7" /> },
  chevronDown: { viewBox: '0 0 24 24', path: <path d="m6 9 6 6 6-6" /> },

  /* ---------- social (filled) ---------- */
  facebook: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.8 3 11 4.5 11 6.7v1.8H9V11h2v10h3V11h2.2l.4-2.5H14Z" />
    ),
  },
  instagram: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="1.1" />
      </>
    ),
  },
  linkedin: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M4.5 8.8h3V20h-3V8.8Zm1.5-4.6a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10 8.8h2.9v1.5c.4-.75 1.4-1.55 2.9-1.55 3.05 0 3.6 2 3.6 4.6V20h-3v-5.1c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.96 1.3-1.96 2.66V20h-3V8.8Z" />
    ),
  },
  x: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M17.2 3.5h3.1l-6.8 7.8L21.5 21h-6.2l-4.4-5.7L5.7 21H2.6l7.2-8.3L2.5 3.5h6.4l4 5.3 4.3-5.3Zm-1.1 15.6h1.7L7.9 5.3H6.1l10 13.8Z" />
    ),
  },
  youtube: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M21.4 7.6a2.5 2.5 0 0 0-1.75-1.77C18.1 5.4 12 5.4 12 5.4s-6.1 0-7.65.43A2.5 2.5 0 0 0 2.6 7.6 26 26 0 0 0 2.2 12a26 26 0 0 0 .4 4.4 2.5 2.5 0 0 0 1.75 1.77C5.9 18.6 12 18.6 12 18.6s6.1 0 7.65-.43a2.5 2.5 0 0 0 1.75-1.77 26 26 0 0 0 .4-4.4 26 26 0 0 0-.4-4.4ZM10.1 14.9V9.1l5.1 2.9-5.1 2.9Z" />
    ),
  },
  google: {
    viewBox: '0 0 24 24',
    path: (
      <>
        <path d="M20 12.2c0-.6-.05-1.2-.16-1.7H12v3.3h4.5a3.9 3.9 0 0 1-1.7 2.5v2.1h2.7c1.6-1.5 2.5-3.6 2.5-6.2Z" />
        <path d="M12 21c2.3 0 4.2-.8 5.6-2.1l-2.7-2.1c-.8.5-1.7.8-2.9.8-2.2 0-4.1-1.5-4.8-3.5H4.4v2.2A9 9 0 0 0 12 21Z" />
        <path d="M7.2 12.1c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V6.5H4.4a9 9 0 0 0 0 8.1l2.8-2.2Z" />
        <path d="M12 6.9c1.2 0 2.3.4 3.2 1.3l2.4-2.4A9 9 0 0 0 4.4 6.5l2.8 2.2C7.9 8.3 9.8 6.9 12 6.9Z" />
      </>
    ),
  },
  yelp: {
    viewBox: '0 0 24 24',
    path: (
      <path d="M11 4.5 11.2 12c0 .7-.8 1-1.3.6L5.6 9.4c-.5-.4-.4-1.1.1-1.4a11 11 0 0 1 4.1-1.7c.6-.1 1.1.3 1.1.9ZM10.6 13.7c.5.2.6.9.2 1.3l-2.6 2.7c-.4.4-1.1.3-1.4-.2a9 9 0 0 1-1-2.6c-.1-.6.4-1.1 1-1l3.8-.2ZM13 13.9c.5-.3 1.2 0 1.3.6l.9 3.7c.1.6-.4 1.1-1 1a9 9 0 0 1-2.6-.9c-.5-.3-.6-1-.2-1.4l1.6-3ZM14.6 12.3c-.6.1-1.1-.5-.9-1.1l1.3-3.6c.2-.6.9-.7 1.3-.3.7.7 1.3 1.5 1.7 2.5.2.5-.1 1.1-.7 1.2l-2.7 1.3ZM14.3 13.9l3.7 1c.6.2.8.9.4 1.3-.6.8-1.4 1.4-2.3 1.8-.5.2-1.1-.1-1.2-.7l-.7-2.6c-.1-.6.5-1 1-.8Z" />
    ),
  },
}

export function Icon({
  name,
  className,
  editKey,
}: {
  name: keyof typeof ICONS | string
  className?: string
  /**
   * Which content field this icon is showing, for the in-place editor to find
   * it by — e.g. `homepage.whyItems.2.icon`.
   *
   * An icon cannot be located the way a heading can: a heading's text is its
   * identity, and every `<svg>` looks like every other one. So the few icons
   * that come from editable content say so. Left unset everywhere else, which
   * is most places — a chevron on a carousel is furniture, not content.
   */
  editKey?: string
}) {
  // Unknown names fall back to a neutral shape rather than rendering nothing,
  // so a stale CMS value can never blank out a card.
  const def = ICONS[name] ?? ICONS.spark
  return (
    <svg viewBox={def.viewBox} className={className} aria-hidden="true" data-edit-key={editKey}>
      {def.path}
    </svg>
  )
}

export type IconName = keyof typeof ICONS
