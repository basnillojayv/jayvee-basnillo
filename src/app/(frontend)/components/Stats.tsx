import type { Homepage } from '@/payload-types'

/**
 * The one dark band on the page.
 *
 * This palette allows three surfaces — white, fog, carbon — and carbon is
 * meant to be rare. Spending it here rather than on the hero is deliberate:
 * two numbers and a sentence are the least content on the page, so the surface
 * does the work of making them land.
 */
export function Stats({ data }: { data: Homepage }) {
  const items = data.statsItems ?? []
  if (items.length === 0 && !data.statsStatement) return null

  return (
    <section className="stats" id="stats">
      <div className="wrap stats__grid">
        <ul className="stats__figures">
          {items.map((s, i) => (
            <li key={s.id ?? i} className="reveal">
              <p className="stat__value stats__value">{s.value}</p>
              <p className="stat__label">{s.label}</p>
            </li>
          ))}
        </ul>

        {data.statsStatement && <p className="stats__statement reveal">{data.statsStatement}</p>}
      </div>
    </section>
  )
}
