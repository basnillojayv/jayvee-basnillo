'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { site } from '@/site.config'

/**
 * Listens for Payload Live Preview "save" events sent from the admin iframe and
 * re-fetches the current route so the preview reflects the latest saved content.
 *
 * On the public site this is inert — it only reacts to postMessage events coming
 * from the Payload admin at `site.url`.
 */
export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={site.url}
    />
  )
}
