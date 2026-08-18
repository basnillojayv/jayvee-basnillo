'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { submitContact, type ContactState } from '../actions/contact'
import { SUBMISSION_OPTIONS as O } from '@/collections/Submissions'

const EMPTY: ContactState = { ok: false, message: '' }

/**
 * THE PROJECT ENQUIRY FORM.
 *
 * WHY IT IS A REAL `<form>` WITH A SERVER ACTION
 * `useActionState` posts the form element itself, so it works before React
 * hydrates and keeps working if hydration never happens. `onSubmit` + `fetch`
 * gives you a form that silently does nothing during the seconds before the
 * bundle lands — on the one page whose purpose is enquiries, that is the worst
 * possible thing to break.
 *
 * WHY THE OPTIONS COME FROM THE COLLECTION
 * The same array renders the checkbox and validates the POST. Two lists would
 * drift, and the failure is silent: an option a visitor can tick that the
 * server then discards.
 *
 * WHY CHECKBOXES AND RADIOS RATHER THAN SELECTS
 * Every one of these lists is short and the whole point is to see the range on
 * offer — a visitor who does not know what they need is being shown the menu.
 * A `<select>` hides exactly that, and on mobile replaces it with a picker.
 *
 * Fieldsets, not headings: each group is a set of related controls and a
 * screen reader announces the legend with every option inside it, which is
 * what turns nine loose checkboxes into one question.
 */
export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, EMPTY)
  const err = state.errors ?? {}
  const router = useRouter()

  /**
   * A sent enquiry gets its own page.
   *
   * Navigated from here rather than with `redirect()` in the action, because
   * the action's success return sits inside a try/catch and `redirect` works by
   * throwing — it would be swallowed by the very handler that reports failures.
   *
   * The inline message below stays as the fallback: if this never runs, the
   * visitor is still told the enquiry went, which is the part that matters.
   */
  useEffect(() => {
    if (state.ok) router.push('/thank-you')
  }, [state.ok, router])

  return (
    <form className="enquiry" action={action} noValidate>
      {/* ---------------- your details ---------------- */}
      <fieldset className="enquiry__set">
        <legend className="enquiry__legend">Your details</legend>

        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <p className="field__hint">What should I call you?</p>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={err.name ? 'true' : undefined}
            aria-describedby={err.name ? 'cf-name-err' : undefined}
          />
          {err.name && <p className="field__err" id="cf-name-err">{err.name}</p>}
        </div>

        <div className="field">
          <label htmlFor="cf-email">Email address</label>
          <p className="field__hint">Where can I send the project details?</p>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={err.email ? 'true' : undefined}
            aria-describedby={err.email ? 'cf-email-err' : undefined}
          />
          {err.email && <p className="field__err" id="cf-email-err">{err.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="cf-org">Business / organisation</label>
          <p className="field__hint">Who is the website for?</p>
          <input id="cf-org" name="organisation" type="text" autoComplete="organization" />
        </div>
      </fieldset>

      {/* ---------------- the project ---------------- */}
      <fieldset className="enquiry__set">
        <legend className="enquiry__legend">About the project</legend>

        <CheckGroup name="needs" label="What do you need help with?" options={O.NEEDS} />

        <div className="field">
          <label htmlFor="cf-detail">Tell me about the project</label>
          <p className="field__hint">What are you trying to build, fix, or improve?</p>
          <textarea
            id="cf-detail"
            name="projectDetail"
            rows={5}
            required
            placeholder="We have an outdated WordPress site and want something cleaner that makes it easier for potential clients to contact us."
            aria-invalid={err.projectDetail ? 'true' : undefined}
            aria-describedby={err.projectDetail ? 'cf-detail-err' : undefined}
          />
          {err.projectDetail && (
            <p className="field__err" id="cf-detail-err">{err.projectDetail}</p>
          )}
        </div>

        <RadioGroup name="hasWebsite" label="Do you already have a website?" options={O.HAS_SITE} />
        <RadioGroup
          name="platform"
          label="What platform are you currently using?"
          options={O.PLATFORMS}
        />
      </fieldset>

      {/* ---------------- goals ---------------- */}
      <fieldset className="enquiry__set">
        <legend className="enquiry__legend">Your goals</legend>
        <CheckGroup
          name="goals"
          label="What would make this project successful for you?"
          options={O.GOALS}
        />
        <RadioGroup name="timeline" label="Do you have a target launch date?" options={O.TIMELINES} />
        <RadioGroup name="budget" label="Do you have a budget in mind?" options={O.BUDGETS} />
      </fieldset>

      {/* ---------------- materials ---------------- */}
      <fieldset className="enquiry__set">
        <legend className="enquiry__legend">Project materials</legend>
        <CheckGroup
          name="materials"
          label="What do you already have?"
          hint="Select anything that’s ready."
          options={O.MATERIALS}
        />
        <div className="field">
          <label htmlFor="cf-ref">Is there a website you like the look of?</label>
          <p className="field__hint">Share a link if you have one.</p>
          <input id="cf-ref" name="reference" type="text" inputMode="url" />
        </div>
      </fieldset>

      {/* ---------------- anything else ---------------- */}
      <fieldset className="enquiry__set">
        <legend className="enquiry__legend">Additional details</legend>
        <div className="field">
          <label htmlFor="cf-notes">Anything else I should know?</label>
          <p className="field__hint">
            Any specific features, problems, references, or ideas you already have.
          </p>
          <textarea id="cf-notes" name="notes" rows={4} />
        </div>
      </fieldset>

      {/* Bots only. Positioned away rather than `display:none`, which some of
          them skip — and skipping it defeats the trap. */}
      <div className="field field--trap" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="enquiry__foot">
        <button className="btn btn--dark btn--lg" type="submit" disabled={pending}>
          {pending ? 'Sending…' : 'Send project inquiry'}
          {!pending && <span className="arr" aria-hidden="true">→</span>}
        </button>

        {/* Live region: the outcome is announced without stealing focus. */}
        <p
          className="enquiry__status"
          data-state={state.message ? (state.ok ? 'ok' : 'bad') : undefined}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      </div>

      <p className="enquiry__note">
        No pressure and no lengthy sales process. I’ll read it and come back with the next step.
      </p>
    </form>
  )
}

function CheckGroup({
  name,
  label,
  hint,
  options,
}: {
  name: string
  label: string
  hint?: string
  options: string[]
}) {
  return (
    <fieldset className="choices">
      <legend>{label}</legend>
      {hint && <p className="field__hint">{hint}</p>}
      <div className="choices__list">
        {options.map((o) => (
          <label className="choice" key={o}>
            <input type="checkbox" name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function RadioGroup({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <fieldset className="choices">
      <legend>{label}</legend>
      <div className="choices__list">
        {options.map((o) => (
          <label className="choice" key={o}>
            <input type="radio" name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
