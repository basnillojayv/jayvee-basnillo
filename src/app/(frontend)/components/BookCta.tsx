import Image from 'next/image'
import type { WorkPage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * THE CLOSING PANEL: A PHOTOGRAPH, DARKENED, WITH THE ASK ON IT.
 *
 * Full-bleed and the last thing before the footer, so the page ends on the
 * action rather than trailing off into small print.
 *
 * TWO ACTIONS, DELIBERATELY UNEVEN
 * Unlike the homepage's fork — two equal buttons for two different visitors —
 * these are a ladder. A call is the low-commitment ask and gets the filled
 * button; sending a brief is the higher one and gets the washed variant. By
 * this point the visitor has read the whole page, so there is a right answer
 * to steer toward, which there was not at the top.
 *
 * The scrim is fixed rather than derived from the image: any photograph can be
 * dropped in here through the CMS, and the copy has to stay legible on all of
 * them without anyone checking.
 */
export function BookCta({
  data,
  primaryHref,
  secondaryHref,
  fallbackImage,
}: {
  data: WorkPage
  primaryHref: string
  secondaryHref: string
  /** Stands in until a photograph is uploaded for this panel. */
  fallbackImage?: string
}) {
  return (
    <section className="book" id="book">
      <div className="book__media" aria-hidden="true">
        <Image
          src={mediaUrl(data.ctaImage, fallbackImage || '/media/placeholder-wide.jpg')}
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          data-edit-key="work-page.ctaImage"
        />
        <div className="book__scrim" />
      </div>

      <div className="wrap book__inner">
        <h2 className="book__title reveal">{data.ctaTitle}</h2>
        <p className="book__lede reveal">{data.ctaLede}</p>
        <div className="book__actions reveal">
          <a className="btn btn--white btn--lg" href={primaryHref}>
            {data.ctaPrimaryLabel}
          </a>
          <a className="btn btn--wash btn--lg" href={secondaryHref}>
            {data.ctaSecondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
