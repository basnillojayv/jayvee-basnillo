import type { WorkPage } from '@/payload-types'

/**
 * QUESTIONS AS FULL-WIDTH HEADINGS ON HAIRLINES.
 *
 * Built on `<details>` and `<summary>`, and that is a decision worth defending
 * because the hand-rolled version is so common: a div with an onClick, a
 * `useState`, `aria-expanded`, and a `role="region"` that has to be wired to
 * an id. Every one of those is free here. The element opens without
 * JavaScript, it is in the tab order already, screen readers announce it as a
 * disclosure with a state, and browser find-in-page can open a closed answer
 * to show a match — which no custom accordion does.
 *
 * The cost is that `<details>` will not animate its own height. The marker
 * rotating and the answer fading is what this does instead; a real height
 * transition would mean giving up the element, and that is a bad trade for a
 * page whose whole job is to answer questions clearly.
 *
 * They are left closed. Opening the first is a common default and it is wrong
 * here — it makes the first question look answered and the rest look optional.
 */
export function Faq({ data }: { data: WorkPage }) {
  const faqs = data.faqs ?? []
  if (faqs.length === 0) return null

  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <ul className="faq__list">
          {faqs.map((f, i) => (
            <li key={f.id ?? i} className="reveal">
              <details className="faq__item">
                <summary className="faq__q">
                  {/* A heading, not a span. These are the section's structure:
                      as bare text they were invisible to the heading outline a
                      screen-reader user navigates by, which for a page whose
                      job is answering questions is the wrong thing to hide. */}
                  <h3 className="faq__q-text">{f.question}</h3>
                  <span className="faq__mark" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" focusable="false">
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 12h15" />
                        <path d="M13 6l6 6-6 6" />
                      </g>
                    </svg>
                  </span>
                </summary>
                <div className="faq__a">
                  <p>{f.answer}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
