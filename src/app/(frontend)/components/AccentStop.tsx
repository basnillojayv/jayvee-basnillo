/**
 * The last full stop of a heading, in the accent colour.
 *
 * It appears on every display heading in this direction, so it is one
 * component rather than a `<span>` someone has to remember to type — and it is
 * deliberately NOT stored in the CMS. A coloured full stop is a typographic
 * decision, and asking an editor to type it means the day they forget, the
 * heading quietly loses it.
 *
 * The stop stays part of the text node it belongs to for anything reading the
 * page aloud: a screen reader announces the sentence normally, because the
 * only thing that changed is the colour of one glyph.
 */
export function AccentStop({ text }: { text?: string | null }) {
  if (!text) return null
  const trimmed = text.trim()
  if (!trimmed.endsWith('.')) return <>{trimmed}</>
  return (
    <>
      {trimmed.slice(0, -1)}
      <span className="accent-stop">.</span>
    </>
  )
}
