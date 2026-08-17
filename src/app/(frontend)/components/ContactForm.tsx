'use client'

import { useActionState } from 'react'
import { submitContact, type ContactState } from '../actions/contact'

const EMPTY: ContactState = { ok: false, message: '' }

/**
 * THE FORM THAT REPLACED THE FAQ.
 *
 * WHY IT IS A REAL `<form>` WITH A SERVER ACTION
 * `useActionState` posts the form element itself, so it works before React
 * hydrates and keeps working if hydration never happens. The alternative —
 * `onSubmit` plus `fetch` — is a form that silently does nothing for anyone on
 * a slow connection during the seconds before the bundle lands, which on a
 * page whose whole purpose is enquiries is the worst possible thing to break.
 *
 * ERRORS ARE PER FIELD AND TIED TO THE INPUT
 * `aria-describedby` and `aria-invalid` on each control, so a screen reader
 * announces the problem when focus reaches the field rather than only in a
 * summary somewhere above. The status line is a live region so the outcome is
 * announced without moving anyone's focus.
 *
 * The honeypot is `company` — hidden from people, irresistible to bots. It is
 * hidden with position/opacity rather than `display:none` because some bots
 * skip what is display-none, which defeats the trap.
 */
export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, EMPTY)
  const err = state.errors ?? {}

  return (
    <section className="contact" id="contact">
      <div className="wrap contact__inner">
        <div className="contact__intro">
          <p className="kicker reveal">
            <span className="kicker__rule" aria-hidden="true" />
            Start a project
          </p>
          <h2 className="contact__title reveal">Tell me what you&rsquo;re building.</h2>
          <p className="contact__lede reveal">
            What it has to do, who it has to convince, and roughly when. You&rsquo;ll get a
            straight answer on scope and cost — not a proposal deck.
          </p>
        </div>

        <form className="contact__form reveal" action={action} noValidate>
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={err.name ? 'true' : undefined}
              aria-describedby={err.name ? 'cf-name-err' : undefined}
            />
            {err.name && (
              <p className="field__err" id="cf-name-err">
                {err.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={err.email ? 'true' : undefined}
              aria-describedby={err.email ? 'cf-email-err' : undefined}
            />
            {err.email && (
              <p className="field__err" id="cf-email-err">
                {err.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="cf-message">About the project</label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              required
              aria-invalid={err.message ? 'true' : undefined}
              aria-describedby={err.message ? 'cf-message-err' : undefined}
            />
            {err.message && (
              <p className="field__err" id="cf-message-err">
                {err.message}
              </p>
            )}
          </div>

          {/* Bots only. Positioned away rather than `display:none`, which some
              of them skip. */}
          <div className="field field--trap" aria-hidden="true">
            <label htmlFor="cf-company">Company</label>
            <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="contact__foot">
            <button className="btn btn--dark btn--lg" type="submit" disabled={pending}>
              {pending ? 'Sending…' : 'Send message'}
              {!pending && (
                <span className="arr" aria-hidden="true">
                  →
                </span>
              )}
            </button>

            {/* Live region: the result is announced without stealing focus. */}
            <p
              className="contact__status"
              data-state={state.message ? (state.ok ? 'ok' : 'bad') : undefined}
              role="status"
              aria-live="polite"
            >
              {state.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
