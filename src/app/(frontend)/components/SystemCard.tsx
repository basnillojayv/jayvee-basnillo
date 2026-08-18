import type { DesignSystem } from '@/payload-types'

/**
 * One design system, shown as a specimen rather than a thumbnail.
 *
 * WHY THERE IS NO COVER IMAGE HERE
 * Every other tile on this site leads with a picture, because every other
 * piece of work IS a picture. A design system is a set of decisions, and a
 * screenshot of one is the least informative view of it available — a page of
 * swatches, shrunk until the hex codes are unreadable. So the card shows the
 * decisions directly: the real palette, the real faces, what the system
 * covers. It is small, but nothing on it is decorative.
 *
 * WHY IT OPENS IN A NEW TAB
 * The thing it links to is a whole separate document with its own navigation
 * and its own scroll. Replacing this page with it gives someone no way back
 * except the browser button, having lost their place on a page they were
 * still reading.
 */
export function SystemCard({ system, editKeyPrefix }: { system: DesignSystem; editKeyPrefix: string }) {
  const swatches = system.swatches ?? []
  const typefaces = system.typefaces ?? []
  const scope = system.scope ?? []
  const meta = [system.client, system.year].filter(Boolean).join(' · ')

  return (
    <article className="syscard">
      {system.logo && (
        /* Plain <img>, not next/image: these come out of the system bundles in
           public/, several are SVG, and their intrinsic sizes vary per brand —
           the optimiser would need a width and height this card should not be
           asserting. They are 6–25 KB. */
        <div className={`syscard__logo${system.logoDark ? ' syscard__logo--dark' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={system.logo} alt={`${system.title} logo`} loading="lazy" />
        </div>
      )}

      <div className="syscard__head">
        <h3 className="syscard__title">{system.title}</h3>
        {meta && <p className="syscard__meta">{meta}</p>}
      </div>

      <p className="syscard__summary" data-edit-key={`${editKeyPrefix}.summary`}>
        {system.summary}
      </p>

      {swatches.length > 0 && (
        <ul className="syscard__palette">
          {swatches.map((s) => (
            <li className="syscard__swatch" key={s.id ?? s.value}>
              {/* The only inline style on the site, and it earns it: the value
                  is content, not design — it changes when the CMS entry does,
                  which a stylesheet cannot follow. */}
              <span className="syscard__chip" style={{ background: s.value }} aria-hidden="true" />
              <span className="syscard__chipname">{s.name}</span>
              <span className="syscard__chipvalue">{s.value}</span>
            </li>
          ))}
        </ul>
      )}

      <dl className="syscard__type">
        {typefaces.map((t) => (
          <div className="syscard__typerow" key={t.id ?? t.name}>
            <dt>{t.role}</dt>
            <dd>{t.name}</dd>
          </div>
        ))}
      </dl>

      {scope.length > 0 && (
        <ul className="syscard__scope">
          {scope.map((item) => (
            <li key={item.id ?? item.label}>{item.label}</li>
          ))}
        </ul>
      )}

      <a
        className="syscard__open"
        href={system.href}
        target="_blank"
        rel="noopener noreferrer"
        /* The accessible name has to carry the title: on a page with several of
           these, "Open the system" repeated is a screen-reader dead end. */
        aria-label={`Open the ${system.title} design system in a new tab`}
      >
        Open the system
        <span className="arr" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  )
}
