'use client'

import { useEffect, useState } from 'react'
import { EditProvider, type MediaItem, type Region } from './EditProvider'
import { EditSurface } from './EditSurface'
import { EditPicker } from './EditPicker'
import { EditBar } from './EditBar'
import { takeEditingRequest } from './editSignal'

/**
 * Brings up the in-place editor for staff, without costing visitors anything.
 *
 * Every page here is `force-static` — which is why the site is fast — and a
 * static route cannot read cookies, so the server has no way to tell who is
 * asking. Making the layout dynamic would fix that by making every visitor
 * request hit the database, for a feature only staff can use.
 *
 * So the page renders static and this asks the one question afterwards. A
 * visitor gets a few bytes back and nothing happens; the editor code below is
 * never rendered for them.
 *
 * The request waits for the browser to be idle, so it can never compete with
 * the page finishing painting.
 */
type Content = {
  values: Record<string, string>
  regions: Region[]
  media: MediaItem[]
}

export function EditorMount() {
  const [content, setContent] = useState<Content | null>(null)
  const [arriveEditing, setArriveEditing] = useState(false)

  useEffect(() => {
    let cancelled = false

    /**
     * Consumed here, synchronously, before anything can await — /edit sets this
     * immediately before navigating, and reading it clears it.
     *
     * Only ever set to true, never back to false: React runs this effect twice
     * in development, and the second pass finds the flag already spent.
     */
    if (takeEditingRequest()) setArriveEditing(true)

    const ask = async () => {
      try {
        const response = await fetch('/api/editor-status', { cache: 'no-store' })
        if (!response.ok) return
        const data = await response.json()
        if (!cancelled && data?.canEdit) {
          setContent({
            values: data.values ?? {},
            regions: data.regions ?? [],
            media: data.media ?? [],
          })
        }
      } catch {
        // Offline, or the endpoint is unreachable. No editor, no error on the
        // page — a visitor must never see a failure from a feature that is not
        // theirs.
      }
    }

    const idle = window.requestIdleCallback?.(ask, { timeout: 2000 }) ?? window.setTimeout(ask, 400)

    return () => {
      cancelled = true
      window.cancelIdleCallback?.(idle as number)
      window.clearTimeout(idle as number)
    }
  }, [])

  if (!content) return null

  return (
    <EditProvider
      values={content.values}
      regions={content.regions}
      media={content.media}
      initialEditing={arriveEditing}
    >
      <EditSurface />
      <EditPicker />
      <EditBar />
    </EditProvider>
  )
}
