import Image from 'next/image'
import type { CSSProperties } from 'react'
import { toSameOriginPath } from './util'
import type { CaseStudy } from '@/payload-types'

/**
 * Renders a case study body.
 *
 * Five kinds, each with its own layout — which is the reason the body is typed
 * blocks rather than rich text. A WYSIWYG can produce a heading and a
 * paragraph; it cannot produce a swatch grid that knows which chips need a
 * dark label, or a type specimen set in the face it is describing.
 *
 * `editKey` on every string means the whole body stays editable in place. The
 * path mirrors the stored shape exactly: blocks are an array, so the index is
 * part of the address.
 */
type Blocks = NonNullable<CaseStudy['blocks']>

export function CaseStudyBlocks({ blocks, docId }: { blocks: Blocks; docId: number | string }) {
  return (
    <div className="cs-body">
      {blocks.map((block, i) => {
        const key = `caseStudies.${docId}.blocks.${i}`

        if (block.blockType === 'prose') {
          return (
            <section key={block.id ?? i} className="cs-block cs-prose reveal">
              {block.heading && <h2 className="t-h2 cs-block__heading">{block.heading}</h2>}
              {(block.body ?? []).map((p, j) => (
                <p key={p.id ?? j} className="t-lead cs-prose__p">
                  {p.text}
                </p>
              ))}
            </section>
          )
        }

        if (block.blockType === 'stats') {
          return (
            <section key={block.id ?? i} className="cs-block cs-stats reveal">
              {block.heading && <h2 className="t-h2 cs-block__heading">{block.heading}</h2>}
              <ul className="cs-stats__grid">
                {(block.items ?? []).map((s, j) => (
                  <li key={s.id ?? j}>
                    <p className="stat__value">{s.value}</p>
                    <p className="stat__label">{s.label}</p>
                  </li>
                ))}
              </ul>
            </section>
          )
        }

        if (block.blockType === 'swatches') {
          return (
            <section key={block.id ?? i} className="cs-block cs-swatches reveal">
              <h2 className="t-h2 cs-block__heading">{block.heading}</h2>
              {block.note && <p className="cs-block__note">{block.note}</p>}
              <ul className="cs-swatches__grid">
                {(block.items ?? []).map((s, j) => (
                  <li
                    key={s.id ?? j}
                    className={`cs-swatch${s.onLight ? ' is-light' : ''}`}
                    style={{ background: s.value }}
                  >
                    <span className="cs-swatch__name">{s.name}</span>
                    <span className="cs-swatch__value">{s.note || s.value}</span>
                  </li>
                ))}
              </ul>
            </section>
          )
        }

        if (block.blockType === 'type') {
          return (
            <section key={block.id ?? i} className="cs-block cs-type reveal">
              <h2 className="t-h2 cs-block__heading">{block.heading}</h2>
              {block.note && <p className="cs-block__note">{block.note}</p>}
              <ul className="cs-type__list">
                {(block.items ?? []).map((t, j) => (
                  <li key={t.id ?? j} className="cs-type__row">
                    <div className="cs-type__meta">
                      <span className="cs-type__role">{t.role}</span>
                      <span className="cs-type__face">{t.face}</span>
                    </div>
                    {/* The specimen is set in whatever it is describing — that
                        is the entire point of a specimen. */}
                    <p className="cs-type__sample" style={(t.style ?? {}) as CSSProperties}>
                      {t.sample}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )
        }

        if (block.blockType === 'media') {
          return (
            <section key={block.id ?? i} className="cs-block cs-media reveal">
              {block.heading && <h2 className="t-h2 cs-block__heading">{block.heading}</h2>}
              {block.note && <p className="cs-block__note">{block.note}</p>}
              <ul className={`cs-media__grid cs-media__grid--${block.columns ?? '2'}`}>
                {(block.items ?? []).map((item, j) => {
                  const media = typeof item.image === 'object' && item.image ? item.image : null
                  if (!media?.url) return null
                  return (
                    <li key={item.id ?? j}>
                      <figure className="cs-media__figure">
                        <Image
                          src={toSameOriginPath(media.url)}
                          alt={media.alt || ''}
                          width={media.width || 1200}
                          height={media.height || 800}
                          sizes="(max-width: 720px) 100vw, 560px"
                          data-edit-key={`${key}.items.${j}.image`}
                        />
                        {item.caption && (
                          <figcaption className="cs-media__caption">{item.caption}</figcaption>
                        )}
                      </figure>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        }

        return null
      })}
    </div>
  )
}
