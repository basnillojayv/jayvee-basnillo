import type { WorkPage } from '@/payload-types'
import { LineIcon, type IconName } from './LineIcon'

/**
 * FOUR COLUMNS, DIVIDED BY HAIRLINES, CENTRED.
 *
 * The shortest section on the page and the one doing the most work: it is the
 * answer to "what do you actually do", which is the question a visitor arrives
 * with. So it is set plainly — an icon, a name, two lines — with nothing to
 * read past.
 *
 * Hairlines between the columns rather than cards around them. Four bordered
 * boxes with an icon and a heading in each is the single most generated-looking
 * shape on the web; the same four columns divided by rules is a table of
 * contents, which is what this actually is.
 */
export function WhatIDo({ data }: { data: WorkPage }) {
  const items = data.whatItems ?? []
  if (items.length === 0) return null

  return (
    <section className="whatido" id="what-i-do">
      <div className="wrap">
        {data.whatEyebrow && <p className="kicker kicker--centre reveal">{data.whatEyebrow}</p>}
        <ul className="whatido__grid">
          {items.map((it, i) => (
            <li className="whatido__item reveal" key={it.id ?? i}>
              <LineIcon name={it.icon as IconName} className="whatido__icon" />
              <h3 className="whatido__title">{it.title}</h3>
              <p className="whatido__copy">{it.copy}</p>
              {/* The stack is set apart from the sentence deliberately: it is
                  scanned for one name, not read. */}
              {it.stack && <p className="whatido__stack">{it.stack}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
