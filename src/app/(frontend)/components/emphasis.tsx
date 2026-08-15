import type { ReactNode } from 'react'

/**
 * Wrap `*text*` spans in <em> so editors can place the italic/red accent
 * anywhere in a headline or quote. Styling comes from the surrounding CSS.
 */
export function withEmphasis(text: string): ReactNode[] {
  return (text || '').split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : part,
  )
}
