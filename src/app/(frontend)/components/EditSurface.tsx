'use client'

import { useEffect } from 'react'
import { useEdit } from './EditProvider'

/**
 * Turns the rendered page into editable text while edit mode is on.
 *
 * Walks the document for text matching a value from the content modules, wraps
 * that text node in a `contentEditable` span, and stages what the client types
 * against the content path it came from. When edit mode goes off, every wrapper
 * is removed and the DOM is put back exactly as it was.
 *
 * The effect is what a client expects: press Edit, click any text, change it.
 * Nothing in the site's components knows this exists.
 *
 * WHY IT WORKS ON TEXT NODES RATHER THAN ELEMENTS
 * A field is not reliably a whole element. `{titleLead}<br/><span>{accent}</span>`
 * puts one value in a bare text node and the other in a span, and a heading may
 * hold several. Text nodes are the level at which content actually lands.
 *
 * DELIBERATE LIMITS
 * · A value must appear as a whole text node to be found. Text that a component
 *   has split — around an <em>, say — is not editable, and is skipped rather
 *   than half-matched.
 * · Identical strings in two places are matched in document order, one each, so
 *   editing the first does not silently rewrite the second.
 * · Nothing inside the toolbar is ever touched.
 */
export function EditSurface() {
  const edit = useEdit()
  const editing = Boolean(edit?.editing)
  const values = edit?.values

  useEffect(() => {
    if (!editing || !values || !edit) return

    /**
     * The whole document, not just <main>.
     *
     * It used to be <main>, which quietly made the header and the footer
     * uneditable — and the footer is where the address, the opening hours and
     * the closing line live, all of them site-settings fields that were sitting
     * in the editable map with nowhere to be found. The layout puts <Header>
     * and <Footer> outside <main>, so the editor could never reach them.
     */
    const root = document.body
    if (!root) return

    /**
     * text → paths, so a repeated string can be handed out one path at a time
     * in the order the page renders them.
     */
    const byText = new Map<string, string[]>()
    for (const [path, value] of Object.entries(values)) {
      const key = value.trim()
      byText.set(key, [...(byText.get(key) ?? []), path])
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const text = node.nodeValue?.trim() ?? ''
        if (!text || !byText.has(text)) return NodeFilter.FILTER_REJECT

        const parent = node.parentElement as HTMLElement | null

        /**
         * Scripts carry the page's own content back as hydration data, so from
         * <body> the walk now passes straight through a copy of everything
         * being matched. Nothing there is for a person to edit.
         */
        if (parent?.closest('script, style, noscript, template')) {
          return NodeFilter.FILTER_REJECT
        }

        // Never make the editor's own furniture editable.
        if (parent?.closest('.edit-bar, .edit-pick')) return NodeFilter.FILTER_REJECT

        return NodeFilter.FILTER_ACCEPT
      },
    })

    const targets: Text[] = []
    let current = walker.nextNode()
    while (current) {
      targets.push(current as Text)
      current = walker.nextNode()
    }

    /**
     * Button and link labels are ordinary text to this editor and were being
     * wrapped correctly all along — but `heroPrimaryLabel` sits inside a live
     * `<a href>`, so clicking to edit it followed the link instead. The label
     * was editable in theory and unreachable in practice.
     *
     * Cancelling the click is enough, and it must be the click: the caret is
     * placed on mousedown, so cancelling *that* would stop the editing rather
     * than the navigation. Capture, because the anchor is an ancestor and would
     * otherwise act first.
     */
    const swallowNavigation = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest('.is-editable')) event.preventDefault()
    }
    document.addEventListener('click', swallowNavigation, true)

    const wrappers: HTMLElement[] = []

    for (const node of targets) {
      const text = node.nodeValue?.trim() ?? ''
      const path = byText.get(text)?.shift()
      // Every path for this string is already spoken for — leave it alone
      // rather than pointing two places at one field.
      if (!path) continue

      const span = document.createElement('span')
      span.className = 'is-editable'
      span.setAttribute('contenteditable', 'true')
      span.setAttribute('spellcheck', 'true')
      span.setAttribute('role', 'textbox')
      span.setAttribute('tabindex', '0')
      // Anchor text drags by default, which turns a slow click into a drag
      // gesture instead of a caret.
      span.setAttribute('draggable', 'false')
      span.dataset.editKey = path
      span.textContent = node.nodeValue

      node.parentNode?.replaceChild(span, node)
      wrappers.push(span)

      span.addEventListener('blur', () => {
        edit.stage({ key: path, value: span.innerText.trim() })
      })

      span.addEventListener('keydown', (event) => {
        const isMultiline = span.innerText.length > 90
        if (event.key === 'Enter' && !isMultiline) {
          event.preventDefault()
          span.blur()
        }
        if (event.key === 'Escape') span.blur()
      })
    }

    /**
     * Put the DOM back. React did not create these wrappers and does not know
     * about them, so leaving one behind would confuse the next render — and
     * would leave the page editable after edit mode was switched off.
     */
    return () => {
      document.removeEventListener('click', swallowNavigation, true)
      for (const span of wrappers) {
        const text = document.createTextNode(span.innerText)
        span.parentNode?.replaceChild(text, span)
      }
    }
  }, [editing, values, edit])

  return null
}
