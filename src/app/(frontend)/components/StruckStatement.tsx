import type { WorkPage } from '@/payload-types'

/**
 * A LINE THAT GETS CROSSED OUT, AND THE CORRECTION UNDER IT.
 *
 * The device carries an argument: the obvious statement of what the visitor
 * wants is struck through, and the paragraphs beneath say what they actually
 * want instead. It only lands if the strike happens *while being read* — a
 * line that arrives pre-struck is just a line with a rule through it.
 *
 * WHY THE RULE IS A PSEUDO-ELEMENT AND NOT `text-decoration`
 * `line-through` cannot be animated: there is no length to interpolate, so it
 * is on or off. A pseudo-element rule scaling from zero width is the only way
 * to draw it, and it also allows the rule to be the accent colour while the
 * words stay ink — which `text-decoration-color` could do, but not while also
 * being drawn.
 *
 * The timing is the existing `.reveal` observer: the strike is keyed to
 * `.is-in`, so it fires when the heading actually enters the viewport rather
 * than on a timer that may have run while the section was still below it.
 */
export function StruckStatement({ data }: { data: WorkPage }) {
  const paragraphs = data.statementBody ?? []

  return (
    <section className="section struck">
      <div className="wrap struck__inner">
        <h2 className="struck__line reveal">
          {/* The rule is drawn on this span rather than on the heading, so it
              is the width of the words and not the width of the column. */}
          <span className="struck__text">{data.statementStruck}</span>
        </h2>

        <div className="struck__body">
          {paragraphs.map((p, i) => (
            <p key={p.id ?? i} className="reveal">
              {p.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
