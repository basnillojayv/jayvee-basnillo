import Image from 'next/image'
import type { Exploration, Homepage } from '@/payload-types'
import { toSameOriginPath } from './util'

/**
 * The explorations gallery — 22 pieces with no write-up.
 *
 * A tighter grid than the work strips and no captions on the tile, because
 * these are looked at rather than read. The title is carried by `alt` and the
 * hover label, which is enough for something that exists to be scanned.
 */
export function Showcase({ data, items }: { data: Homepage; items: Exploration[] }) {
  if (items.length === 0) return null

  return (
    <section className="section showcase" id="showcase">
      <div className="wrap">
        {data.showcaseEyebrow && <p className="eyebrow">{data.showcaseEyebrow}</p>}
        {data.showcaseTitle && <h2 className="section-title">{data.showcaseTitle}</h2>}

        <ul className="grid-tiles grid-tiles--tight showcase__grid">
          {items.map((e) => {
            const media = typeof e.image === 'object' && e.image ? e.image : null
            if (!media?.url) return null

            return (
              <li key={e.id} className="showcase__item">
                <figure className="showcase__frame">
                  <Image
                    src={toSameOriginPath(media.url)}
                    alt={media.alt || e.title}
                    width={media.width || 900}
                    height={media.height || 700}
                    sizes="(max-width: 720px) 50vw, 260px"
                    data-edit-key={`explorations.${e.id}.image`}
                  />
                  <figcaption className="showcase__caption">{e.title}</figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
