import Image from 'next/image'
import type { Homepage, WorkPage } from '@/payload-types'
import { site } from '@/site.config'
import { mediaUrl } from './util'
import { LineIcon, type IconName } from './LineIcon'
import { AccentStop } from './AccentStop'

/**
 * THE CLAIM ON THE LEFT, THE PERSON ON THE RIGHT.
 *
 * The statement leads, three points sit under it as evidence, and the portrait
 * anchors the right column with the name and what he is called. Which is a
 * different structure from the version this replaces: that one opened with the
 * portrait and made the claim secondary, and the claim is the part that sells.
 *
 * THE ROLE LINE IS SPLIT, NOT WRAPPED
 * `heroTagline` is a single pipe-delimited string — "Graphic/Web Designer |
 * WordPress Elementor Builder | AI Web Developer" — and left to wrap it broke
 * mid-title into four ragged lines. Split on the pipe it becomes three
 * deliberate lines that break where the meaning breaks. It stays one CMS field
 * because it is one sentence about one person; the separator is presentation.
 *
 * The icon wells are filled circles rather than outlines. At 44px an outlined
 * ring around an outlined glyph is two competing strokes at the same weight,
 * and the glyph loses.
 */
export function DesignerBand({
  data,
  work,
}: {
  data: Homepage
  work: WorkPage
}) {
  const portrait = mediaUrl(data.aboutPortrait, '/media/placeholder-portrait.jpg')
  const points = work.designerPoints ?? []
  const roles = (data.heroTagline ?? '')
    .split('|')
    .map((r) => r.trim())
    .filter(Boolean)

  if (!work.designerHeading) return null

  return (
    <section className="designer" id="about">
      <div className="wrap designer__inner">
        <div className="designer__copy">
          <p className="kicker reveal">
            <span className="kicker__rule" aria-hidden="true" />
            {work.designerEyebrow}
          </p>

          <h2 className="designer__heading reveal">
            <AccentStop text={work.designerHeading} />
          </h2>

          {points.length > 0 && (
            <ul className="designer__points">
              {points.map((p, i) => (
                <li key={p.id ?? i} className="reveal">
                  <span className="designer__well" aria-hidden="true">
                    <LineIcon name={p.icon as IconName} />
                  </span>
                  <div>
                    <h3 className="designer__point-title">{p.title}</h3>
                    <p className="designer__point-copy">{p.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="designer__who">
          <div className="designer__portrait reveal">
            <Image
              src={portrait}
              alt=""
              width={640}
              height={640}
              sizes="(max-width: 900px) 62vw, 400px"
              loading="lazy"
              data-edit-key="homepage.aboutPortrait"
            />
          </div>

          {/* Set here rather than pulled from the CMS: the name is the one
              string on this site that is not editorial. */}
          <h2 className="designer__name reveal">{site.name}</h2>
          <span className="designer__rule reveal" aria-hidden="true" />
          <p className="designer__roles reveal">
            {roles.map((r, i) => (
              <span key={i}>{r}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
