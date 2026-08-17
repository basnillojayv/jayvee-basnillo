import type { WorkPage } from '@/payload-types'

/**
 * TWO DIAGONAL RIBBONS CROSSING, RUNNING OPPOSITE WAYS.
 *
 * One set outlined, one solid, tilted a few degrees and sliding past each
 * other. The opposition is the whole trick — two ribbons travelling the same
 * direction read as one wide ribbon that has been split.
 *
 * WHY THE TERMS ARE REPEATED FOUR TIMES
 * A rotated strip has to be wider than the viewport it crosses, and then wide
 * enough again to translate by half itself and land on an identical copy. Six
 * short words do not fill a desktop once, let alone twice, so the list is laid
 * down twice per track and the track is duplicated — four passes in total.
 *
 * The whole thing is decorative and hidden from assistive tech. These are the
 * same capabilities the service blocks below state in sentences; nobody needs
 * to hear them four times to get there.
 */
export function Ribbons({ data }: { data: WorkPage }) {
  const terms = (data.marqueeTerms ?? []).map((t) => t.label).filter(Boolean)
  if (terms.length === 0) return null

  // One pass of the words, joined by the separator the reference uses. Built
  // once and reused, because every pass has to be character-identical for the
  // loop to be seamless.
  const pass = terms.join(' — ')

  return (
    <div className="ribbons" aria-hidden="true">
      <div className="ribbon ribbon--outline">
        <div className="ribbon__track">
          <span>{pass} — </span>
          <span>{pass} — </span>
        </div>
      </div>
      <div className="ribbon ribbon--solid">
        <div className="ribbon__track ribbon__track--back">
          <span>{pass} — </span>
          <span>{pass} — </span>
        </div>
      </div>
    </div>
  )
}
