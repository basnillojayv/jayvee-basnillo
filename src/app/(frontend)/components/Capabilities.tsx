import type { Homepage } from '@/payload-types'

/**
 * Five groups, 27 tags. Chips rather than a list, because the value here is
 * scanning for one name — a hiring manager looking for "Elementor" or
 * "Payload" — not reading the set.
 *
 * No icons. The reference marks hierarchy with size and colour alone, and a
 * row of glyphs beside skill names would be decoration standing in for
 * information.
 */
export function Capabilities({ data }: { data: Homepage }) {
  const groups = data.capabilitiesGroups ?? []
  if (groups.length === 0) return null

  return (
    <section className="section capabilities" id="capabilities">
      <div className="wrap">
        {data.capabilitiesEyebrow && <p className="eyebrow">{data.capabilitiesEyebrow}</p>}

        <ul className="capabilities__groups">
          {groups.map((g, i) => (
            <li key={g.id ?? i} className="card capabilities__group reveal">
              <h3 className="t-h3 capabilities__title">{g.title}</h3>
              <ul className="capabilities__tags">
                {(g.tags ?? []).map((t, j) => (
                  <li key={t.id ?? j} className="chip">
                    {t.label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
