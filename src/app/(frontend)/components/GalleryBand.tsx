import Image from 'next/image'
import type { Exploration, WorkPage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * A WALL OF WORK, DARKENED, WITH A PANEL SITTING IN IT.
 *
 * The grid is full-bleed and runs behind the copy rather than beside it. That
 * is the section's argument in layout form: the volume of work is the
 * background to the claim, so the claim sits inside it.
 *
 * WHY THE SCRIM IS NOT OPTIONAL
 * These are arbitrary uploads — a pale poster and a dark photograph both land
 * here — so nothing can be assumed about what is behind the text. The scrim is
 * what makes the panel legible over any of them, and it is the reason the copy
 * can be white without checking each image first.
 *
 * The grid is decorative and hidden: every one of these has its own page in
 * the explorations index the button points at, so this is not the only route
 * to any of it.
 */
export function GalleryBand({
  data,
  items,
  href,
}: {
  data: WorkPage
  items: Exploration[]
  href: string
}) {
  if (items.length === 0) return null

  // Enough to fill the wall on a wide screen without asking the browser for
  // fifty images. Twelve is three rows of four, and the grid wraps.
  const wall = items.slice(0, 12)

  return (
    <section className="gallery">
      <div className="gallery__grid" aria-hidden="true">
        {wall.map((e) => (
          <figure className="gallery__cell" key={e.id}>
            <Image
              src={mediaUrl(e.image, '/media/placeholder-tile.jpg')}
              alt=""
              width={520}
              height={520}
              sizes="(max-width: 860px) 50vw, 25vw"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      <div className="gallery__scrim" aria-hidden="true" />

      <div className="wrap gallery__panel">
        {/* The kicker here read "Explorations" directly above a heading that
            already says what this is. Two labels for one section is not
            hierarchy, it is repetition — and it was the sixth tracked-caps
            eyebrow on the page. The field stays in the CMS; this stops
            rendering it. */}
        <h2 className="section-title section-title--light reveal">{data.galleryTitle}</h2>
        <p className="gallery__lede reveal">{data.galleryLede}</p>
        <div className="reveal">
          <a className="btn btn--white btn--lg" href={href}>
            {data.galleryCtaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
