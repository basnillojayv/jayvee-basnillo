/**
 * THE MARK, INLINE — because it has to be two things at once.
 *
 * A `<img src="logo.svg">` would be simpler and is wrong here for two reasons:
 *
 * 1. COLOUR. The header inverts — carbon on white at rest, white on carbon once
 *    it collapses into the capsule. The mark has to invert with it, so its fill
 *    is `currentColor` and the existing header rules that repaint `.brand-mark`
 *    repaint this too, with the same transition, for free.
 *
 * 2. THE ENTRANCE. The intro draws the mark stroke-first and then floods the
 *    fill in. That needs the paths in the document, and it needs them
 *    individually addressable so they can be staggered.
 *
 * `pathLength={1}` is what makes the stagger tractable: the three shapes are
 * wildly different lengths, so normalising every one of them to a unit length
 * lets a single `stroke-dashoffset: 1 → 0` keyframe draw all three at the same
 * rate rather than the small one finishing while the big one has barely begun.
 *
 * Path order below is the drawing order, and it is not the file's order: the
 * small leaf first, then the long swoop, then the bowl. Smallest to largest
 * reads as the mark assembling itself; the reverse reads as a mistake.
 */
export function LogoMark({
  className,
  title,
}: {
  className?: string
  /** Omit inside a link that already has an accessible name — the mark is then decorative. */
  title?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 1880.84 1025.55"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <g fill="currentColor">
        {/* 1 — the leaf, upper left */}
        <path
          className="logo-mark__path"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          d="M257.57,369.07c25.4-9.62,48.91-24.8,68.53-45.13,10.26-10.62,19.47-22.69,27.28-36.1l35.02-60.01,27.14-46.54L516.21,8.77l4.11-7.07-207.92-.96L189.01.19c-13.85-.07-27.36,1.37-40.32,4.15-5.78,1.22-11.44,2.7-16.96,4.44-21.1,6.59-40.54,16.77-57.61,29.77C18.93,80.41-11.94,151.46,4.35,225.24c4.44,19.99,11.88,39.65,22.58,58.35,10.66,18.7,23.84,35.1,38.8,49.05,54.01,50.35,128.65,60.57,191.85,36.43Z"
        />
        {/* 2 — the long diagonal */}
        <path
          className="logo-mark__path"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          d="M721.16,710.47c59.2-115.29,124.73-227.54,187.63-340.86,68.16-122.73,136.28-245.49,204.4-368.26h-267.37v.04l-66.05,119.03-49.31,88.85c-14.99,27.06-45.02,81.11-45.02,81.11l35.02-62.57s-45.57,81.89-59.16,106.33c-15.6,28.01-31.21,56.05-46.81,84.09h.46s-4.11,7.07-4.11,7.07l-6.23,10.68c-2.79,5.03-5.6,10.05-8.39,15.07-.77,1.39-1.53,2.82-2.3,4.22l-.47-.18-83.28,142.72-27.14,46.54-35.02,60.01c-3.33,5.71-6.96,11.12-10.77,16.34-1.34,1.36-2.66,2.73-4.04,4.05-1.01,1.27-2.06,2.48-3.09,3.72-2.85,3.42-5.76,6.76-8.83,9.94-19.62,20.33-43.13,35.5-68.53,45.13-63.2,24.14-137.83,13.92-191.85-36.43-14.96-13.96-28.14-30.36-38.8-49.05-6.85-11.99-12.36-24.36-16.62-36.98-.24.56-.44,1.13-.66,1.7-.85,2.17-1.63,4.38-2.3,6.56-75.56,243.57,222.76,443.15,427.57,308.91,63.64-41.69,105.36-103.99,140.94-169.86,17.59-32.47,33.65-65.79,50.13-97.92Z"
        />
        {/* 3 — the bowl */}
        <path
          className="logo-mark__path"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          d="M1368.05,0c-12.74,0-25.32.48-37.84,1.37h-109.81l-13.62,24.51-107.96,194.55h193.14c7.07-.52,14.22-.78,21.4-.78,18.7,0,36.98,1.74,54.68,5.11,135.76,25.62,238.46,144.83,238.46,288.03s-102.7,262.41-238.46,288.03c-17.7,3.37-35.99,5.11-54.68,5.11h-539.48l-121.91,219.62h716.08c283.22,0,512.79-229.57,512.79-512.75S1651.27,0,1368.05,0Z"
        />
      </g>
    </svg>
  )
}
