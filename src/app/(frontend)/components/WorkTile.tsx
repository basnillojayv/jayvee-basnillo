import Image from 'next/image'
import Link from 'next/link'
import type { Media } from '@/payload-types'
import { toSameOriginPath } from './util'

/**
 * One tile, used by every list of work on the site — the homepage strip, the
 * projects index, the case studies index. One component so a tile cannot drift
 * into three slightly different tiles.
 *
 * `editKey` is passed in rather than derived, because the caller is the only
 * thing that knows which collection and which document this is. A tile with no
 * key still renders; it simply is not editable in place.
 */
export function WorkTile({
  href,
  title,
  meta,
  image,
  fit = 'cover',
  editKey,
  priority = false,
}: {
  href: string
  title: string
  meta?: string | null
  image?: number | Media | null
  fit?: 'cover' | 'contain' | null
  editKey?: string
  priority?: boolean
}) {
  const media = typeof image === 'object' && image ? image : null

  return (
    <Link href={href} className="tile">
      <div className={`tile__media${fit === 'contain' ? ' tile__media--contain' : ''}`}>
        {/* The fallback matters more than it looks: without it a document whose
            cover has not been set yet renders an empty grey well, which reads
            as a broken image rather than an unfinished one. The placeholder
            says which it is, and carries the edit key so the picker can still
            be opened on it. */}
        <Image
          src={media?.url ? toSameOriginPath(media.url) : '/media/placeholder-tile.jpg'}
          alt={media?.alt || title}
          width={media?.width || 1600}
          height={media?.height || 1000}
          sizes="(max-width: 720px) 100vw, 380px"
          priority={priority}
          data-edit-key={editKey}
        />
      </div>
      <div className="tile__body">
        <h3 className="tile__title">{title}</h3>
        {meta && <p className="tile__meta">{meta}</p>}
      </div>
    </Link>
  )
}
