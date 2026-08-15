'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/payload-types'
import { toSameOriginPath } from './util'

/**
 * A large preview with a row of small thumbnails beneath it, the active one
 * marked with a coral border.
 *
 * This is the reference's thumbnail-strip pattern doing the job it does there —
 * letting someone look through a set of screens without leaving the section —
 * pointed at projects instead of app screens.
 *
 * Selection is hover-and-click rather than a timed carousel. An auto-advancing
 * strip takes the choice away from someone who is already looking at the one
 * they wanted, and it is motion that keeps moving after it has said what it
 * has to say.
 */
export function ThumbStrip({ items }: { items: Project[] }) {
  const [active, setActive] = useState(0)
  if (items.length === 0) return null

  const current = items[active] ?? items[0]
  const media = typeof current.cover === 'object' && current.cover ? current.cover : null

  return (
    <div className="strip">
      <figure className="strip__stage">
        {media?.url && (
          <Image
            /* Keyed on the document so React swaps the element rather than
               mutating src — without it the browser holds the previous frame
               until the new one decodes, which reads as lag. */
            key={current.id}
            src={toSameOriginPath(media.url)}
            alt={media.alt || current.title}
            width={media.width || 1600}
            height={media.height || 1000}
            sizes="(max-width: 900px) 100vw, 760px"
            className="strip__img"
            data-edit-key={`projects.${current.id}.cover`}
          />
        )}
      </figure>

      <div className="strip__meta">
        <div>
          <p className="strip__title">{current.title}</p>
          {current.category && <p className="strip__cat">{current.category}</p>}
        </div>
        <Link className="link-ghost" href={`/projects/${current.slug}`}>
          Read more
        </Link>
      </div>

      <ul className="strip__thumbs">
        {items.map((p, i) => {
          const thumb = typeof p.cover === 'object' && p.cover ? p.cover : null
          return (
            <li key={p.id}>
              <button
                type="button"
                className={`strip__thumb${i === active ? ' is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={p.title}
                aria-current={i === active}
              >
                {thumb?.url && (
                  <Image
                    src={toSameOriginPath(thumb.url)}
                    alt=""
                    width={200}
                    height={130}
                    sizes="100px"
                  />
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
