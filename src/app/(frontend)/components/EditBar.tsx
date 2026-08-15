'use client'

import { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useEdit } from './EditProvider'
import { saveEdits } from '../actions/inlineEdit'

/**
 * The in-place editor's toolbar, for signed-in staff only.
 *
 * Says Save rather than Publish deliberately. The globals carry no drafts, so
 * an edit here goes live the moment it is saved — exactly as it would from the
 * admin panel. Calling that button "Publish" would imply a staging step that
 * does not exist, and a client who believes their change is staged is a client
 * who types something careless into a live page.
 *
 * The green dot answers "am I editing right now?" without reading a word, which
 * is what stops someone typing into the page by accident.
 */
export function EditBar() {
  const edit = useEdit()
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [status, setStatus] = useState<string | null>(null)
  const [signingOut, setSigningOut] = useState(false)

  /**
   * Edits are held in memory until Save, so leaving the page would lose them
   * silently. The browser's own prompt is the only thing that reliably fires on
   * tab close.
   */
  useEffect(() => {
    if (!edit?.dirtyCount) return
    const warn = (event: BeforeUnloadEvent) => event.preventDefault()
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [edit?.dirtyCount])

  if (!edit) return null

  const { editing, setEditing, pending: staged, dirtyCount, discard } = edit

  const onSave = () =>
    startTransition(async () => {
      setStatus(null)
      const result = await saveEdits(
        Object.entries(staged).map(([key, entry]) => ({ key, value: entry.value ?? '' })),
      )

      if (!result.ok) {
        setStatus(result.error)
        return
      }

      discard()
      setEditing(false)
      setStatus(
        result.count === 0
          ? 'Nothing changed.'
          : `Saved ${result.count} change${result.count === 1 ? '' : 's'}. It is live.`,
      )
      // The server has the new copy — pull it rather than trusting local state.
      router.refresh()
    })

  const onCancel = () => {
    if (dirtyCount > 0 && !window.confirm('Discard your unsaved changes?')) return
    discard()
    setEditing(false)
    setStatus(null)
    // Put the original wording back on screen.
    router.refresh()
  }

  /**
   * The way out.
   *
   * Without this, ending a session means going into the admin panel to do it —
   * which is precisely the thing a client signing in at /edit should never have
   * to know about. It matters most on a shared or borrowed machine, where the
   * alternative is a live homepage left editable behind them.
   */
  const onSignOut = async () => {
    if (dirtyCount > 0 && !window.confirm('Sign out and discard your unsaved changes?')) return

    setSigningOut(true)

    try {
      await fetch('/api/users/logout', { method: 'POST' })
    } catch {
      // Reload anyway. If the session really did end the toolbar will not come
      // back; if it did not, it will — and either way that is the truth, which
      // is better than a button that reports success it cannot vouch for.
    }

    discard()
    setEditing(false)

    /**
     * Next tick, so React has cleared the unsaved-changes guard above before
     * the navigation starts. Otherwise the browser asks a second time about
     * changes this person has already agreed to discard.
     */
    window.setTimeout(() => window.location.assign('/'), 0)
  }

  return (
    <div className="edit-bar" role="region" aria-label="Page editor">
      {/* Decorative — the button beside it announces the same state. */}
      <span className={`edit-bar__dot${editing ? ' is-on' : ''}`} aria-hidden="true" />

      <button
        className={`edit-bar__btn${editing ? ' is-on' : ''}`}
        onClick={() => (editing ? onCancel() : setEditing(true))}
        aria-pressed={editing}
      >
        {editing ? 'Editing' : 'Edit'}
      </button>

      <button className="edit-bar__btn" onClick={onSave} disabled={pending || dirtyCount === 0}>
        Save{dirtyCount > 0 ? ` (${dirtyCount})` : ''}
      </button>

      <button className="edit-bar__btn" onClick={onCancel} disabled={pending || !editing}>
        Cancel
      </button>

      {/* A real navigation, not a client-side one: /admin is Payload's own
          app with its own layout and providers, and routing into it through
          next/link leaves the marketing site's context mounted underneath. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className="edit-bar__btn" href="/admin">
        Admin
      </a>

      <button className="edit-bar__btn" onClick={onSignOut} disabled={pending || signingOut}>
        {signingOut ? 'Signing out…' : 'Sign out'}
      </button>

      {/* aria-live so the outcome reaches a screen reader, not only the eye. */}
      <p className="edit-bar__status" aria-live="polite">
        {pending ? 'Saving…' : status}
      </p>
    </div>
  )
}
