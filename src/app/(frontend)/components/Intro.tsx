import { LogoLockup } from './LogoLockup'

/**
 * THE ENTRANCE — and it is deliberately not a React component that does anything.
 *
 * No state, no effect, no `'use client'`. The whole sequence is CSS keyframes
 * with `animation-fill-mode: forwards`, which buys three things a JS preloader
 * cannot:
 *
 * · NO FLASH. A client component that hides the overlay after mount renders the
 *   page first and the curtain second, so the first paint is the thing the
 *   curtain exists to hide. Server-rendered markup with the animation already
 *   declared covers the page from the very first frame.
 * · NO TRAP. The failure mode of a JS curtain is a permanent white screen when
 *   the bundle fails. This one lifts whether or not React ever hydrates.
 * · NO JANK. Compositor-only properties throughout, so the curtain lift does not
 *   contend with hydration on the main thread — which is exactly when it runs.
 *
 * The cost is that it replays on every load rather than once per session. That
 * matches the reference, and at 1.9s it is a signature rather than a toll.
 *
 * Timings live in globals.css under `--intro-*` so the curtain and the hero's
 * own entrance stay on one clock. The hero starts moving at 1.5s, while the
 * curtain is still travelling — the overlap is what stops it feeling like two
 * animations queued back to back.
 */
export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      {/* THE LOCKUP, NOT A MARK PLUS A CAPTION.
          This used to be LogoMark with a separate <p> underneath, and the two
          never lined up — the wordmark's width, weight and spacing were being
          approximated in CSS next to artwork that already contains them. The
          lockup is one drawing with the type set inside it, so alignment is
          not something this component has to get right. */}
      <div className="intro__mark">
        <LogoLockup className="logo-lockup logo-mark--draw" />
      </div>
    </div>
  )
}
