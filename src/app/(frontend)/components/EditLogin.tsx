'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { site } from '@/site.config'
import { requestEditing } from './editSignal'

/**
 * The sign-in panel at /edit.
 *
 * WHY THIS EXISTS ALONGSIDE /admin
 * The in-place editor already reuses Payload's session, so /admin has always
 * been a way in. It is the wrong way in for a client: their first experience of
 * "editing the website" should not be a CMS dashboard they were never meant to
 * meet, and signing in there leaves them inside the admin panel rather than out
 * on the page they actually wanted to change.
 *
 * So this is a second door, not a second lock. It posts to the same endpoint
 * the admin panel posts to, and Payload sets the same session cookie it always
 * sets. There is no token handling here and no parallel notion of being signed
 * in — which is what keeps the two doors from ever disagreeing.
 */
export function EditLogin() {
  const uid = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<'checking' | 'idle' | 'signing-in'>('checking')
  const [error, setError] = useState<string | null>(null)

  const id = (name: string) => `${uid}-${name}`

  /**
   * Someone already signed in has nothing to answer here, so send them on.
   *
   * This asks `/api/editor-status` — the same endpoint the editor itself uses —
   * rather than adding a second way to ask who someone is. It also means this
   * page follows the same rule as the rest of the site: static HTML first, the
   * question about identity afterwards.
   */
  useEffect(() => {
    let cancelled = false

    const check = async () => {
      try {
        const response = await fetch('/api/editor-status', { cache: 'no-store' })
        const data = response.ok ? await response.json() : null
        if (cancelled) return

        if (data?.canEdit) {
          requestEditing()
          window.location.assign('/')
          return
        }
      } catch {
        // Unreachable: fall through and show the form. A network that cannot
        // answer this question may still be able to carry a sign-in.
      }

      if (!cancelled) setState('idle')
    }

    check()

    return () => {
      cancelled = true
    }
  }, [])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state !== 'idle') return

    const data = Object.fromEntries(new FormData(event.currentTarget).entries())

    setState('signing-in')
    setError(null)

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password }),
      })

      if (response.ok) {
        requestEditing()
        /**
         * A real navigation, not a client-side one. The session cookie has just
         * changed, and every router entry the client is holding was fetched
         * without it — pushing would show them pages rendered for a stranger.
         *
         * Deliberately still in the 'signing-in' state: the button stays
         * disabled until the page is replaced.
         */
        window.location.assign('/')
        return
      }

      setState('idle')

      /**
       * Payload's own message, which is careful not to say whether the email
       * exists — and which says something more useful than a generic failure
       * when an account has been locked by repeated attempts.
       */
      const body = await response.json().catch(() => null)
      setError(body?.errors?.[0]?.message || 'Those details were not recognised.')
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id('email'))}`)?.focus()
    } catch {
      setState('idle')
      setError('Could not reach the server. Check your connection and try again.')
    }
  }

  /**
   * Nothing but a holding line until the question above is answered. Showing
   * the form first would flash a password prompt at someone who is already
   * signed in and about to be sent to the homepage.
   */
  if (state === 'checking') {
    return (
      <p className="edit-login__wait" role="status">
        One moment…
      </p>
    )
  }

  return (
    <div className="edit-login">
      {/* INSTALL: the client's name, so the panel reads as part of their site.
          `site.name` if the project has a site.config, otherwise a literal. */}
      <p className="edit-login__eyebrow">{site.name}</p>
      <h1 className="edit-login__title">Sign in to edit</h1>
      <p className="edit-login__lede">
        The homepage opens ready to edit. Click any heading or paragraph, type over it, and save —
        the change is live straight away.
      </p>

      <form className="form" ref={formRef} onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor={id('email')}>Email</label>
          <input
            id={id('email')}
            name="email"
            type="email"
            autoComplete="username"
            required
            autoFocus
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? id('error') : undefined}
          />
        </div>

        <div className="field">
          <label htmlFor={id('password')}>Password</label>
          <input
            id={id('password')}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? id('error') : undefined}
          />
        </div>

        {error && (
          <p className="form__error" id={id('error')} role="alert">
            {error}
          </p>
        )}

        <button
          className="btn btn--accent btn--lg btn--block"
          type="submit"
          disabled={state === 'signing-in'}
        >
          {state === 'signing-in' ? 'Signing in…' : 'Sign in'}
        </button>
      </form>

      <p className="form__note">
        Projects, lots, updates and photographs live in the{' '}
        {/* A real navigation for the same reason the toolbar's Admin link is one:
            /admin is Payload's own app, with its own layout and providers. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/admin">admin panel</a>.
      </p>
    </div>
  )
}
