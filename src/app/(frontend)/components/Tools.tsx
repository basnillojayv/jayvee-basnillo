import type { WorkPage } from '@/payload-types'
import { AccentStop } from './AccentStop'
import { TOOL_GROUPS, groupOf } from './toolGroups'

/**
 * COPY ON THE LEFT, THE STACK ON THE RIGHT, GROUPED BY WHAT IT IS FOR.
 *
 * This was a ruled rack of fifteen marks, and at fifteen that was the right
 * answer — one row, hairline-divided, logos doing the reading. It is forty-odd
 * now, and two things break at that length:
 *
 * · A wall of forty marks is a texture, not a list. The question anyone
 *   actually brings to this section is "does he work in my stack?", and a
 *   texture answers it by making them read all of it.
 * · Most of these have no mark to show. The icon set here is CC0 and covers
 *   eight of them; Adobe and Canva have asked to be removed from open sets and
 *   the Crocoblock family was never in one. The rest fell back to initials in a
 *   box, and forty boxes of initials is worse than no marks at all — it looks
 *   like a logo wall that failed to load.
 *
 * So: names, set in the site's own face, under six headings. Scanning six
 * headings for "AI" or "SEO" is the fast path to the answer, and a name in
 * type is honest in a way an approximated logo is not.
 *
 * WHERE THE GROUPING COMES FROM
 * A lookup keyed on the tool's name — see toolGroups.ts, which explains why it
 * is not a CMS field yet. Anything unrecognised lands in "Everything else"
 * rather than disappearing, so adding a tool in the admin is never a way to
 * lose it.
 */
export function Tools({ data }: { data: WorkPage }) {
  const tools = data.tools ?? []
  if (tools.length === 0) return null

  /** Built from what is actually here, so an empty group never prints a heading. */
  const grouped = TOOL_GROUPS.map((group) => ({
    ...group,
    items: tools.filter((t) => groupOf(t.name) === group.key),
  })).filter((group) => group.items.length > 0)

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

        <div className="tools__rack">
          {grouped.map((group) => (
            <div className="toolgroup reveal" key={group.key}>
              <h3 className="toolgroup__heading">{group.heading}</h3>
              <ul className="toolgroup__list">
                {group.items.map((t, i) => (
                  <li key={t.id ?? `${group.key}-${i}`}>{t.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
