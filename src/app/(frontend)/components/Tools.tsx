import type { WorkPage } from '@/payload-types'
import { ToolMark } from './ToolMark'
import { AccentStop } from './AccentStop'

/**
 * COPY ON THE LEFT, A RULED RACK OF TOOLS ON THE RIGHT.
 *
 * The cells are divided by hairlines rather than spaced apart, which is what
 * makes fifteen of them read as one rack instead of fifteen floating logos.
 * It also means the row can wrap on a narrow screen without the dividers
 * turning into stray marks — they are borders on the cells, so they wrap with
 * them.
 *
 * The marks are monochrome. Fifteen brand palettes in one row is a fruit
 * salad, and this page has exactly one accent colour.
 */
export function Tools({ data }: { data: WorkPage }) {
  const tools = data.tools ?? []
  if (tools.length === 0) return null

  return (
    <section className="tools" id="tools">
      <div className="wrap tools__inner">
        <div className="tools__copy">
          <p className="kicker reveal">{data.toolsEyebrow}</p>
          <h2 className="tools__title reveal">
            <AccentStop text={data.toolsHeading} />
          </h2>
          {data.toolsLede && <p className="tools__lede reveal">{data.toolsLede}</p>}
        </div>

        <ul className="tools__rack">
          {tools.map((t, i) => (
            <li className="tools__cell reveal" key={t.id ?? i}>
              <ToolMark name={t.name} logo={t.logo} />
              <span className="tools__name">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
