/**
 * FOUR LINE GLYPHS, DRAWN HERE RATHER THAN INSTALLED.
 *
 * A browser window, a puzzle piece, a sparkle and a pen curve. They are
 * generic UI shapes — nobody's trademark — so they can be authored inline and
 * inherit `currentColor`, which is what lets the same four sit coral on white
 * in one section and inverted in another without a second set of files.
 *
 * Stroked, not filled, and at a consistent 1.6 weight so a row of them reads
 * as one set. The single most common way an icon row goes wrong is mixing
 * weights, which reads as clip-art rather than as a system.
 */
export type IconName = 'window' | 'puzzle' | 'spark' | 'pen' | 'code'

export function LineIcon({ name, className }: { name?: IconName | string | null; className?: string }) {
  const d = PATHS[(name as IconName) in PATHS ? (name as IconName) : 'window']
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {d}
    </svg>
  )
}

const PATHS: Record<IconName, React.ReactNode> = {
  window: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.2" />
      <path d="M3 9.2h18" />
      <path d="M6.2 6.9h.01M8.6 6.9h.01M11 6.9h.01" />
    </>
  ),
  puzzle: (
    <path d="M5 5.6h4.6a2 2 0 1 1 4 0H18v4.6a2 2 0 1 0 0 4V18.8h-4.4a2 2 0 1 0-4 0H5z" />
  ),
  spark: (
    <>
      <path d="M13 3.2l1.7 4.6 4.6 1.7-4.6 1.7L13 15.8l-1.7-4.6L6.7 9.5l4.6-1.7z" />
      <path d="M6.4 15.1l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8z" />
    </>
  ),
  pen: (
    <>
      <path d="M4 17.4c5.6 0 6.4-10.8 16-10.8" />
      <circle cx="4" cy="17.4" r="1.9" />
      <circle cx="20" cy="6.6" r="1.9" />
    </>
  ),
  code: (
    <>
      <path d="M8.4 8.2 3.8 12l4.6 3.8" />
      <path d="M15.6 8.2 20.2 12l-4.6 3.8" />
      <path d="M13.4 5.6 10.6 18.4" />
    </>
  ),
}
