'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { WorkPage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * A DECK OF QUOTES, DEALT ONE AT A TIME.
 *
 * The cards sit in a stack — the current one square on, the next two behind it
 * and rotated — and the arrows deal through them. Reading it as a stack rather
 * than a row is what says "there are more of these" without needing a count.
 *
 * IT RENDERS NOTHING WHEN THERE ARE NO QUOTES, AND THAT IS DELIBERATE.
 * The obvious alternative — ship it with sample quotes and let him replace
 * them — puts words in named people's mouths on a live page. A placeholder
 * testimonial is indistinguishable from a real one to everybody except the
 * person who wrote it, so this section stays absent until there is something
 * true to put in it. See the note on the WorkPage global.
 *
 * WRAPPING RATHER THAN CLAMPING
 * The arrows wrap around instead of disabling at the ends. A stack has no
 * visible edges to hit, so a dead arrow reads as broken rather than as
 * finished — the opposite of the project rail below, which shows its ends.
 */
export function Testimonials({ data }: { data: WorkPage }) {
  const items = data.testimonials ?? []
  const [i, setI] = useState(0)
  if (items.length === 0) return null

  const go = (dir: 1 | -1) => setI((n) => (n + dir + items.length) % items.length)

  return (
    <section className="quotes section">
      <div className="wrap quotes__inner">
        <div className="quotes__stage">
          {items.map((t, n) => {
            // Position relative to the current card, wrapped — so the deck is
            // a loop rather than a line that runs out.
            const rel = (n - i + items.length) % items.length
            if (rel > 2) return null
            return (
              <article className="quotecard" data-depth={rel} key={t.id ?? n} aria-hidden={rel !== 0}>
                {t.image && (
                  <div className="quotecard__media">
                    <Image
                      src={mediaUrl(t.image, '/media/placeholder-square.jpg')}
                      alt=""
                      fill
                      sizes="(max-width: 860px) 82vw, 420px"
                    />
                  </div>
                )}
                <div className="quotecard__body">
                  <p className="quotecard__quote">{t.quote}</p>
                  <p className="quotecard__who">
                    <strong>{t.name}</strong>
                    {t.role ? <span> — {t.role}</span> : null}
                  </p>
                </div>
              </article>
            )
          })}

          {items.length > 1 && (
            <>
              <button className="quotes__arrow quotes__arrow--prev" onClick={() => go(-1)} aria-label="Previous testimonial">
                <QuoteArrow back />
              </button>
              <button className="quotes__arrow quotes__arrow--next" onClick={() => go(1)} aria-label="Next testimonial">
                <QuoteArrow />
              </button>
            </>
          )}
        </div>

        <div className="quotes__copy">
          {/* Kicker dropped for the same reason as the gallery's: "In their
              words" over "Your satisfaction, first" is one section wearing two
              labels. */}
          <h2 className="section-title reveal">{data.testimonialsTitle}</h2>
          {data.testimonialsBody && <p className="section-lede reveal">{data.testimonialsBody}</p>}
        </div>
      </div>
    </section>
  )
}

function QuoteArrow({ back }: { back?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={back ? 'rotate(180 12 12)' : undefined}
      >
        <path d="M4 12h15" />
        <path d="M13 6l6 6-6 6" />
      </g>
    </svg>
  )
}
