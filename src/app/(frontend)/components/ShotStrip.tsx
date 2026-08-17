import Image from 'next/image'

/**
 * A FULL-BLEED BAND OF SCREENS, DRIFTING.
 *
 * Takes resolved image sources rather than a collection, because the band
 * wants variety more than it wants one particular list: the page mixes project
 * covers with exploration artwork so the strip is never four screenshots of
 * the same kind of site. Resolving them is the page's job; arranging them is
 * this component's.
 *
 * WHY THE LIST IS DUPLICATED
 * The track translates by exactly half its own width and starts over. That
 * only looks continuous if the second half is identical to the first, so every
 * source is rendered twice — and the whole band is hidden from assistive tech,
 * because a screen reader announcing the same work twice is a real cost for a
 * decorative loop. Nothing here is the only route to anything.
 */
export function ShotStrip({ shots }: { shots: string[] }) {
  // Below five the loop is visibly a loop — the same three pictures coming
  // round again reads as a bug rather than as a band.
  if (shots.length < 5) return null

  return (
    <div className="shotstrip" aria-hidden="true">
      <div className="shotstrip__track">
        {['a', 'b'].map((pass) =>
          shots.map((src, i) => (
            <figure className="shotstrip__shot" key={`${pass}-${i}`}>
              <Image
                src={src}
                alt=""
                width={640}
                height={440}
                sizes="(max-width: 860px) 60vw, 520px"
                loading={pass === 'a' && i < 3 ? 'eager' : 'lazy'}
              />
            </figure>
          )),
        )}
      </div>
    </div>
  )
}
