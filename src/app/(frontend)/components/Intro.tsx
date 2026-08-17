import { LogoMark } from './LogoMark'

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
      <div className="intro__mark">
        <LogoMark className="logo-mark logo-mark--draw" />
        {/* Set in the stylesheet, not here: the copy is written in its own
            case so it stays readable in the source and in a diff, and the
            caps are a typographic decision that belongs with the rest of
            them. */}
        <p className="intro__label">Jayvee Basnillo - Designs</p>
      </div>
    </div>
  )
}
