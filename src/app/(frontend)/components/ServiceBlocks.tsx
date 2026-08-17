import Image from 'next/image'
import type { WorkPage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * WHAT HE DOES, ONE DISCIPLINE AT A TIME, SIDES ALTERNATING.
 *
 * Copy on one side, a scattered cluster of artefacts on the other, and the
 * sides swap on every other block so the page does not become a column of
 * identical rows.
 *
 * WHY THE IMAGES ARE SCATTERED RATHER THAN GRIDDED
 * These are finished pieces of work — a logo, a poster, a screen — and a tidy
 * grid of them reads as a contact sheet. Overlapped at different sizes and
 * angles they read as things laid on a desk, which is the claim the section is
 * making: that these came out of one process.
 *
 * The scatter lives in CSS, positioned per `nth-child`, so it is stable rather
 * than random. A cluster that reshuffles on every render is not a composition
 * anyone can approve.
 *
 * A block with no images still works — the copy simply takes the full column —
 * so a service can be added long before its artwork exists.
 */
export function ServiceBlocks({
  data,
  fallbacks = [],
}: {
  data: WorkPage
  /**
   * Real work to stand in until each service has its own artwork uploaded.
   * A section that renders as a column of text beside nothing is worse than
   * one showing adjacent work, and these are his pieces either way — so the
   * fallback is honest rather than a grey box. Each block takes a different
   * slice, so three blocks do not show the same three pictures.
   */
  fallbacks?: string[]
}) {
  const services = data.services ?? []
  if (services.length === 0) return null

  return (
    <>
      {services.map((s, i) => {
        const own = (s.images ?? []).slice(0, 4)
        const borrowed = own.length
          ? []
          : fallbacks.slice(i * 3, i * 3 + 3)
        return (
          <section
            className="svc"
            key={s.id ?? i}
            // Odd blocks put the copy on the right. An attribute rather than a
            // class because it is a position in a sequence, not a kind of thing.
            data-flip={i % 2 === 1 ? 'true' : 'false'}
          >
            <div className="wrap svc__inner">
              <div className="svc__copy">
                <p className="svc__label reveal">{s.eyebrow}</p>
                <h2 className="section-title reveal">{s.title}</h2>
                <p className="section-lede reveal">{s.body}</p>
              </div>

              {(own.length > 0 || borrowed.length > 0) && (
                <div className="svc__cluster">
                  {own.map((shot, j) => (
                    <figure className="svc__shot reveal" key={shot.id ?? j}>
                      <Image
                        src={mediaUrl(shot.image, '/media/placeholder-square.jpg')}
                        alt=""
                        width={640}
                        height={640}
                        sizes="(max-width: 860px) 45vw, 320px"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                  {borrowed.map((src, j) => (
                    <figure className="svc__shot reveal" key={`fb-${j}`}>
                      <Image
                        src={src}
                        alt=""
                        width={640}
                        height={480}
                        sizes="(max-width: 860px) 45vw, 320px"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}
