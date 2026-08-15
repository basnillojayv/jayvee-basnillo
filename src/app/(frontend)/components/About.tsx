import Image from 'next/image'
import type { Homepage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * The lede is set at heading-large size and the body beneath it at 17px, which
 * is the whole hierarchy — one statement, then the detail. The old site set
 * the lede in uppercase display at weight 900; here it stays sentence case at
 * 400, because a paragraph of tightly-tracked capitals is a texture rather
 * than something anyone reads.
 */
export function About({ data }: { data: Homepage }) {
  const portrait = mediaUrl(data.aboutPortrait, '')
  const body = data.aboutBody ?? []
  const pillars = data.aboutPillars ?? []

  return (
    <section className="section about" id="about">
      <div className="wrap about__grid">
        <div className="about__side">
          {data.aboutEyebrow && <p className="eyebrow">{data.aboutEyebrow}</p>}
          {portrait && (
            <div className="about__portrait reveal">
              <Image
                src={portrait}
                alt=""
                width={360}
                height={440}
                data-edit-key="homepage.aboutPortrait"
              />
            </div>
          )}
        </div>

        <div className="about__body">
          <p className="t-h1 about__lede reveal">{data.aboutLede}</p>

          <div className="about__prose reveal">
            {body.map((p, i) => (
              <p key={p.id ?? i} className="t-lead">
                {p.text}
              </p>
            ))}
          </div>

          {pillars.length > 0 && (
            <ul className="about__pillars">
              {pillars.map((p, i) => (
                <li key={p.id ?? i} className="reveal">
                  <h3 className="about__pillar-title">{p.title}</h3>
                  <p className="t-body about__pillar-copy">{p.copy}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
