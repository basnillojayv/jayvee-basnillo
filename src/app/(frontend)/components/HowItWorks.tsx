import Image from 'next/image'
import type { Homepage } from '@/payload-types'
import { mediaUrl } from './util'

/**
 * FOUR NUMBERED CARDS, TITLES BELOW THEM.
 *
 * The detail that makes this pattern work, and the one easiest to miss: the
 * number sits *on* the image in a small translucent chip, and the title and
 * copy sit *under* the card rather than inside it. Putting the text inside
 * turns each step into a tile you read as a unit; leaving it outside keeps the
 * four images reading as one row, which is what carries the sense of sequence.
 *
 * Heading and lede are centred here, unlike every other section on the page.
 * That is deliberate in the reference — the centred heading is what marks a
 * section as explanatory rather than as a list of things.
 */
export function HowItWorks({ data }: { data: Homepage }) {
  const steps = data.howSteps ?? []
  if (steps.length === 0) return null

  return (
    <section className="section how" id="how">
      <div className="wrap">
        <header className="how__head">
          <h2 className="section-title how__title">{data.howEyebrow || 'How it works'}</h2>
          {data.howLede && <p className="how__lede">{data.howLede}</p>}
        </header>

        <ol className="how__grid">
          {steps.map((s, i) => (
            <li key={s.id ?? i} className="how__step reveal">
              <figure className="how__card">
                <Image
                  src={mediaUrl(s.image, '/media/placeholder-portrait.jpg')}
                  alt=""
                  width={640}
                  height={800}
                  sizes="(max-width: 900px) 50vw, 280px"
                  data-edit-key={`homepage.howSteps.${i}.image`}
                />
                <figcaption className="how__num" aria-hidden="true">
                  {i + 1}
                </figcaption>
              </figure>

              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-copy">{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
