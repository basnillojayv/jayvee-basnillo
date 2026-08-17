import type { WorkPage } from '@/payload-types'

/**
 * THE PAGE OPENS QUIET AND CENTRED.
 *
 * A tracked caps line, one sentence set large, one action. That is the whole
 * screen, and the restraint is the point: this page's job is to sell, so it
 * spends its first viewport saying one thing rather than showing six.
 *
 * Set at `--hero-weight` like the homepage's lines, but on the type scale
 * rather than measured to the column. Nothing here needs to meet the margins —
 * the sentence wants to break where the sentence wants to break, and a fitted
 * line would decide that for it.
 */
export function WorkHero({ data, ctaHref }: { data: WorkPage; ctaHref: string }) {
  return (
    <section className="whero" id="top">
      <div className="wrap whero__inner">
        <p className="eyebrow eyebrow--accent whero__eyebrow reveal">{data.heroEyebrow}</p>
        <h1 className="whero__title reveal">{data.heroTitle}</h1>
        <div className="whero__action reveal">
          <a className="btn btn--outline btn--lg" href={ctaHref}>
            {data.heroCtaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
