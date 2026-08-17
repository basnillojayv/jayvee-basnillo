import Image from 'next/image'
import Link from 'next/link'
import type { Homepage } from '@/payload-types'
import { mediaUrl } from './util'
import { MorphLine } from './MorphLine'

/**
 * THE WHOLE HOMEPAGE, NOW. Header and this.
 *
 * Three layers stacked in one frame, and the order of them is the composition:
 *
 *   1. two display lines, one solid and one outlined, each set to the full
 *      width of the column
 *   2. the cut-out portrait, over the type, breaking both lines
 *   3. the copy and the actions, over the portrait
 *
 * The portrait is what makes it work, and it only works because the asset has
 * a real alpha channel — the head crosses the first line and the shoulders
 * cross the second. A rectangular photograph in that slot is a photograph
 * sitting on top of some words, which is a different and much worse picture.
 *
 * WHY THE SECOND LINE IS OUTLINED
 * It is doing two jobs. It carries the second half of the sentence, and it
 * gives the portrait something to be legible against — solid type behind a
 * dark jacket would swallow the shoulders. Outlined, the shoulders read and
 * the line still reads.
 *
 * WHY THE LINES ARE MEASURED RATHER THAN CLAMPED
 * See FitLine. Both lines meeting the margins is the effect; a viewport-based
 * clamp cannot promise that once the words are editable.
 *
 * WHAT THE CMS FIELDS MEAN NOW
 * The old dark hero used `heroWatermark*` for the oversized words *behind* the
 * content. Here those same two fields are the content — they are the display
 * lines. Nothing was renamed, because renaming a field name is a migration and
 * these two already meant "the big words".
 */
export function Hero({ data }: { data: Homepage }) {
  const portrait = mediaUrl(data.heroPortrait, '/media/placeholder-portrait.jpg')
  const stats = (data.statsItems ?? []).slice(0, 4)
  // The old hero pointed its second action at #footer. The homepage has no
  // footer any more, so it goes where the footer was going to send them.
  const mailto = data.email ? `mailto:${data.email}` : '/case-studies'

  return (
    <section className="hero" id="top">
      <div className="hero__inner wrap">
        {/* The greeting. Each CMS value is a whole text node — the inline
            editor matches on text nodes, so interpolating the name into the
            sentence is what keeps both halves of it click-to-edit. The nested
            spans are a casing trick: the stored values are upper case, and
            `capitalize` alone will not pull "JAYVEE" back down. */}
        <p className="hero__greet">
          <span className="hero__wave" aria-hidden="true">
            👋
          </span>
          , my name is{' '}
          <span className="hero__name">
            <span className="hero__name-inner">{data.heroNameFirst}</span>
          </span>{' '}
          <span className="hero__name">
            <span className="hero__name-inner">{data.heroNameLast}</span>
          </span>{' '}
          and I&rsquo;m a
        </p>

        {/* One heading, two lines. The h1 holds both because they are one
            sentence — splitting them into an h1 and a div would read as a
            heading followed by a stray phrase to anything not looking at it. */}
        {/* Each line reveals the OTHER one under the pointer. That is a content
            decision as much as a visual one: the two lines are two halves of
            what he does, so trading them is the line answering "and what
            else?" — and it needs no new CMS field, which means no migration
            and nothing extra for him to keep filled in. Pass a literal here
            instead if you want a fixed second word. */}
        <h1 className="hero__display">
          <span className="hero__line" data-parallax>
            <MorphLine
              text={data.heroWatermarkLeft ?? ''}
              hoverText={data.heroWatermarkRight ?? ''}
            />
          </span>
          <span className="hero__line hero__line--outline" data-parallax>
            <MorphLine
              text={data.heroWatermarkRight ?? ''}
              hoverText={data.heroWatermarkLeft ?? ''}
            />
          </span>
        </h1>

        {/* Over the type, under the copy. */}
        <div className="hero__portrait" data-parallax>
          <Image
            src={portrait}
            alt=""
            width={900}
            height={900}
            priority
            sizes="(max-width: 900px) 92vw, 620px"
            data-edit-key="homepage.heroPortrait"
          />
        </div>

        <div className="hero__foot">
          <p className="hero__tagline">{data.heroTagline}</p>

          {stats.length > 0 && (
            <ul className="hero__stats">
              {stats.map((s, i) => (
                <li key={s.id ?? i}>
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Two actions, and they are the reference's two: not a primary and a
            secondary, but a fork. Both are the same weight because the visitor
            is being asked which of two things they came for, and answering
            that with a loud button and a quiet one puts a thumb on the scale. */}
        <div className="hero__actions">
          <Link className="btn btn--dark btn--lg" href="/projects" data-magnetic>
            See the work
          </Link>
          <a className="btn btn--outline btn--lg" href={mailto} data-magnetic>
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
