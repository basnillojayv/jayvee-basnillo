# Build System — Reusable Marketing-Site Template

A structural guide to the patterns behind this build, written so you can stand up a
new single-page marketing site for any client without inheriting the previous
client's content, colors, or copy.

The stack is **Next.js (App Router) + Payload CMS**. Every word and image on the
page is editable in an admin UI; the page itself is a fixed sequence of sections,
each with one animation behavior. This document explains the three reusable
systems — **section structure**, **animation patterns**, and **the Payload content
model** — and, for each, how to adapt it to a new client.

> Nothing here is client-specific. The seed copy, palette, and placeholder
> images that ship with the template are deliberately neutral — they exist to
> show the *shape* of each slot, and every one of them is meant to be replaced.
>
> **New site? Work through `NEW-SITE-CHECKLIST.md`.** This document explains
> *why* the pieces are built the way they are; the checklist is the running
> order.

---

## 1. Architecture at a Glance

```
src/
  site.config.ts               # brand name, nav, metadata, motion toggles
  app/
    (frontend)/                # the public marketing site
      layout.tsx               # fonts + <html>/<body> + metadata
      page.tsx                 # composes the sections in order
      globals.css              # design tokens + all section/animation CSS
      components/
        Header.tsx             # floating pill nav + mobile drawer (client)
        Hero.tsx               # full-bleed media, giant type, badge
        HeroRequestBar.tsx     # hands a selection to the contact form (client)
        Services.tsx           # snap-scrolling card rail (client)
        StatsBand.tsx          # parallax statement + numbered stats
        WhyUs.tsx              # the dark band, 4-up feature grid
        Coverage.tsx           # chip list beside a pinned photo
        CalloutBand.tsx        # high-contrast interrupt, one CTA
        Testimonials.tsx       # cross-faded serif quotes (client)
        Contact.tsx            # intro + card form (client)
        Footer.tsx             # serif closing statement + details
        CallFab.tsx            # mobile tap-to-call button
        Reveal.tsx             # scroll-in fade observer (client)
        SmoothScroll.tsx       # Lenis smooth-scroll driver (client)
        RefreshRouteOnSave.tsx # live-preview refresh (client)
        Icon.tsx               # name -> inline SVG registry
        emphasis.tsx           # *asterisks* -> <em>
        util.ts                # mediaUrl() + telHref()
    (payload)/                 # Payload admin + API routes (generated)
  collections/
    Media.ts                   # uploads + responsive image sizes
    Users.ts                   # admin auth
  globals/
    Homepage.ts                # the editable content model for the page
  seed/
    homepageData.ts            # default content for a fresh database
  payload.config.ts            # wires collections, globals, db, storage, seed
  payload-types.ts             # GENERATED — do not edit by hand
scripts/
  make-placeholders.mjs        # regenerates the neutral /public/media assets
```

**Three files hold everything client-specific**, and they are the first three you
touch on a new build:

| File | Owns |
| --- | --- |
| `src/site.config.ts` | Name, nav, metadata, CTA, motion switches |
| `src/app/(frontend)/globals.css` (token block) | Colour, type, spacing, elevation |
| `src/globals/Homepage.ts` + `src/seed/homepageData.ts` | What is editable, and its starting copy |

Two route groups share one Next.js app:

- **`(frontend)`** renders the marketing page.
- **`(payload)`** serves the `/admin` UI and the REST/GraphQL API.

The frontend reads content from Payload at build/render time; the admin writes it.
That single boundary is what makes the whole thing re-skinnable per client.

### The rendering flow

1. `page.tsx` calls `getPayload()` and loads the page's content **global** in one
   query (`findGlobal`, `depth: 1` so uploaded images come back populated).
2. It passes that one `data` object down to every section component.
3. Each section reads only the fields it owns and renders markup with fixed CSS
   class names.
4. CSS (tokens + section rules) and a few tiny client components supply all styling
   and motion.

Because the page is **statically rendered** (`export const dynamic = 'force-static'`),
a content save triggers `revalidatePath('/')` to regenerate it. On a hosted DB you
can switch to ISR with `export const revalidate = <seconds>` instead.

---

## 2. Section Structure

### 2.1 The page is a fixed, ordered list of sections

`page.tsx` is deliberately flat and declarative — it is the page's table of
contents:

```tsx
export const dynamic = 'force-static'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'homepage', depth: 1 })

  return (
    <>
      <Header phone={phone} logo={...} logoWhite={...} />
      <main id="main">
        {/* pinned / stacking group */}
        <div className="stack-sections">
          <Hero data={data} />
          <Services data={data} />
          <StatsBand data={data} />
          <WhyUs data={data} />
          <Coverage data={data} />
        </div>
        {/* normal scroll */}
        <CalloutBand data={data} />
        <Testimonials data={data} />
        <Contact data={data} />
        <Footer data={data} />
      </main>
      <CallFab phone={phone} />
      <RevealObserver />
      <SmoothScroll />
      <RefreshRouteOnSave />
    </>
  )
}
```

The nine sections are a **rhythm**, not an arbitrary list — light, light, dark
band, dark, light, accent band, light, light, dark. Two dark bands break up six
light sections, and no two adjacent sections share a background. If you drop a
section, check that the alternation still holds.

Two structural rules make this reusable:

- **Every section receives the same `data` prop** and picks out its own fields.
  Adding, removing, or reordering a section is a one-line change here.
- **Sections are split into two zones:** the ones inside `.stack-sections` take part
  in the scroll-stacking effect (§3.3); the ones after it scroll normally. Keep
  "hero + a few core sections" inside the stack, and put long-form or form-heavy
  sections (testimonials, contact, footer) outside it.

### 2.2 Anatomy of a section component

Every section follows the same shape, which is what makes them swappable:

```tsx
import type { CSSProperties } from 'react'
import type { Homepage } from '@/payload-types'
import { mediaUrl } from './util'

export function StatsBand({ data }: { data: Homepage }) {
  const stats = data.statsItems ?? []                                 // arrays default to []
  const img = mediaUrl(data.statsImage, '/media/placeholder-wide.jpg') // image with fallback

  return (
    <section
      className="divider"
      style={{ '--img': `url('${img}')` } as CSSProperties}    // pass content into CSS
    >
      <div className="divider__bg" aria-hidden="true" />
      <div className="wrap divider__inner">
        <p className="eyebrow eyebrow--light reveal">{data.statsEyebrow}</p>
        <h2 className="divider__title reveal">
          {data.statsTitleLead} <em>{data.statsTitleAccent}</em>
        </h2>
        <ol className="divider__stats">
          {stats.map((s, i) => (
            <li className="reveal" key={i}>
              <span className="num">/{String(i + 1).padStart(2, '0')}</span>
              <strong>{s.title}</strong>
              <span className="lbl">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
```

Reusable conventions in that snippet:

| Convention | Purpose | How to adapt |
| --- | --- | --- |
| `{ data }: { data: Homepage }` | Single typed content object | Type name comes from the generated `payload-types.ts` |
| `data.xxx ?? []` / `mediaUrl(..., fallback)` | Never crash on empty content | Point the fallback at a neutral placeholder asset |
| `className="…"` fixed names | CSS owns all styling | Class names are structural, not brand-specific — leave them |
| `className="reveal"` | Marks an element to fade in on scroll | Add to any element that should animate in |
| `--img` inline custom property | Feeds a CMS image into a CSS effect | Any band whose photo is a `background-image` |
| `.wrap` container | Centered max-width gutter | Shared layout primitive (see tokens) |

Note the section is a **server component** — it does no fetching and holds no
state. Only five *sections* are `'use client'` (`Header`, `HeroRequestBar`,
`Services`, `Testimonials`, `Contact`), plus the three behaviour-only mounts
(`Reveal`, `SmoothScroll`, `RefreshRouteOnSave`). Everything else renders on the
server. Keep new sections that way unless they genuinely need interaction.

**Titles are split into "lead" + "accent"** (`titleLead` plus `titleAccent`
wrapped in `<em>`) so the client can control which words get the highlight color
without writing HTML. This is a recurring, reusable idea — expose *structured*
copy (lead / accent / eyebrow / lede) rather than one rich-text blob, so the visual
rhythm survives whatever the client types.

### 2.3 Shared layout primitives

These live in `globals.css` and are used by every section, so define them once per
client and the whole page stays consistent:

- `.wrap` — `max-width: var(--wrap)` + responsive `--gutter`; the horizontal frame.
- `.section` — vertical rhythm via `padding-block: clamp(...)`.
- `.eyebrow` — the small uppercased kicker above each title.
- `.reveal` — the fade-in hook (see §3.1).
- `.btn` + modifiers (`--pill`, `--lg`, `--white`, `--glass`, …) — button system.

### 2.4 Adapting the section structure for a new client

1. **Decide the section list.** Keep hero first. Choose which sections belong
   inside `.stack-sections` (the pinned, stacking group) vs. after it.
2. **Reorder / add / remove** by editing the JSX list in `page.tsx` and the
   matching CSS `nth-child` z-index rules (§3.3).
3. **Rename or restyle** by editing `globals.css` — the component markup rarely
   changes; only tokens and section rules do.
4. **Keep the section/props contract**: one component, one `data` prop, fields read
   by name. That contract is what lets you reuse the animation and CMS systems
   unchanged.

---

## 3. Animation Patterns

There are exactly **four** motion behaviors. Each is independent, each degrades to
"no motion" for `prefers-reduced-motion`, and none requires a heavy animation
library. Assign at most one behavior per element/section so the page never feels
busy.

### 3.1 Scroll-in reveal (fade + rise + de-blur)

**What it does:** elements start invisible, slightly lowered, and blurred; when they
scroll into view they animate to their resting state. Siblings stagger.

**How it works — two halves:**

*CSS* defines the two states and the transition:

```css
.reveal {
  opacity: 0;
  transform: translateY(26px);
  filter: blur(6px);
  transition: opacity .8s var(--ease-out), transform .8s var(--ease-out),
              filter .8s var(--ease-out);
}
.reveal.is-in { opacity: 1; transform: none; filter: blur(0); }
```

*A tiny client component* (`Reveal.tsx`) adds `.is-in` when the element enters the
viewport, using one shared `IntersectionObserver`:

- Observes every `.reveal`, unobserving each after it fires (one-shot).
- **Staggers siblings**: it finds the element's index among its `.reveal` siblings
  and sets `transition-delay = min(index, 6) * 70ms`, so lists cascade.
- **Respects reduced motion**: if the user opts out (or `IntersectionObserver` is
  missing), it immediately marks everything `.is-in` — content is never hidden.
- **Failsafe**: a timeout reveals anything still hidden that's already near the
  viewport, so a missed observer callback can't ship a blank section.

**How to adapt:** add `className="reveal"` to anything that should animate in. Tune
the distance/blur/duration in the CSS and the stagger step (70ms) / cap (6) in the
component. No per-client code changes are required.

### 3.2 Parallax (scroll-driven drift & lift)

**What it does:** background media drifts vertically slower than the page, and some
text-only sections lift gently — the cinematic "depth" effect.

**How it works:** it uses the **CSS Scroll-Linked Animations** API (`animation-timeline: view()`),
so the animation is driven by scroll position **off the main thread** — no scroll
listeners, no jank. Two keyframes cover every case:

```css
@keyframes px-media { from { transform: translate3d(0,-6.5%,0) } to { transform: translate3d(0,6.5%,0) } }
@keyframes px-lift  { from { transform: translate3d(0,18px,0)  } to { transform: translate3d(0,-18px,0)  } }

@supports (animation-timeline: view()) {
  .section-a__bg img {
    height: 118% !important; top: -9% !important;      /* oversize so drift never shows an edge */
    animation: px-media linear both;
    animation-timeline: view();
    animation-range: cover;                            /* runs while the section is on screen */
  }
  .text-section__inner {
    animation: px-lift linear both;
    animation-timeline: view(); animation-range: cover;
  }
}
```

Key reusable ideas:

- **Oversize the media layer** (`height: 118%`, negative `top`) so the drift range
  never exposes an empty edge. More drift ⇒ more oversize.
- **`animation-range: cover`** ties the whole animation to the element's time on
  screen, so it's automatically in sync no matter the section height.
- **A fallback variant for fixed backgrounds:** where `view()` isn't ideal, a
  `background-attachment: fixed` layer gives a classic parallax that works
  cross-browser; it's switched to `scroll` on touch devices (`@media (hover:none)`).
- **Feeding the image in:** the section sets `style={{ '--img': url(...) }}` from the
  CMS image, and CSS uses `background-image: var(--img)`. That's the bridge between
  editable content and the CSS effect.

**How to adapt:** there is no opt-in attribute — the `@supports` block in
`globals.css` names the media layers directly (`.hero__media video`,
`.why__bg img`, `.divider__bg`, …). Add a new section's selector to that list and
attach `px-media` (for media layers) or `px-lift` (for text). Remember to oversize
the layer at the same time, or the drift will expose an edge. Everything is
wrapped in `@supports` and reduced-motion guards, so it is safe by default.

The template deliberately uses **both** parallax mechanisms: scroll-driven
`view()` for the drifting layers, and `background-attachment: fixed` for the one
callout band. The fixed one reads as a harder stop; using it more than once makes
the page feel stuttery.

### 3.3 Section stacking (sticky pin-and-cover)

**What it does:** the first several sections each pin to the top of the viewport and
the next one slides up **over** the previous, like a stack of cards, before the page
releases into normal scrolling.

**How it works — pure CSS, no JS:**

```css
@media (min-width: 769px) {
  .stack-sections > section { position: sticky; top: 0; min-height: 100svh; }

  /* each later section sits above the previous, so it covers it as it arrives */
  .stack-sections > *:nth-child(1) { z-index: 1; }
  .stack-sections > *:nth-child(2) { z-index: 2; }
  .stack-sections > *:nth-child(3) { z-index: 3; }
  .stack-sections > *:nth-child(4) { z-index: 4; }
  .stack-sections > *:nth-child(5) { z-index: 5; }

  /* non-hero stacking sections vertically center their content in the pin */
  .stack-sections > section:not(.hero) {
    display: flex; flex-direction: column; justify-content: center;
  }
}
```

The mechanism:

- Each child is `position: sticky; top: 0` and at least one viewport tall
  (`100svh`), so it sticks while the next one scrolls up.
- **Ascending `z-index`** means each later section renders on top, covering the one
  behind it — that's the "stacking" look.
- The effect is **contained to `.stack-sections`**: after the last stacked child,
  the page returns to normal flow (that's why testimonials/contact/footer live
  outside the wrapper).
- **Disabled below 769px** — on small screens it's plain vertical scroll, for
  performance and layout simplicity.

**How to adapt:**

1. Put the sections you want to stack inside `<div className="stack-sections">` in
   the order they should stack.
2. Ensure the CSS has one `nth-child` z-index rule per stacked child. If you have
   *N* stacked sections, you need z-index rules `1..N`.
3. Keep the hero as the first child; other stacked sections auto-center their
   content. Sections that shouldn't stack go after the wrapper.

### 3.4 Smooth scroll (input smoothing)

**What it does:** interpolates wheel/touchpad input so the sticky stacking (§3.3)
glides instead of snapping, and in-page anchor jumps ease smoothly.

**How it works:** `SmoothScroll.tsx` runs a lightweight smooth-scroll library
(Lenis) in a `requestAnimationFrame` loop. It drives the **real document scroll**
(so it's compatible with `position: sticky`), uses an ease-out curve with no bounce,
and **bails out entirely for reduced-motion**:

```tsx
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
const lenis = new Lenis({ duration: 1.15, easing: t => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
                          smoothWheel: true, anchors: { offset: 0 } })
const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
```

A small block of `html.lenis` CSS is required for it to behave (see `globals.css`).

**How to adapt:** it's global and content-agnostic — include `<SmoothScroll />` once
in `page.tsx`. Tune `duration`/`easing` to taste. If a client dislikes smooth
scroll, remove the one component; nothing else depends on it (the stacking still
works, it just snaps a bit more).

### 3.5 Motion summary & the accessibility contract

| Pattern | Driven by | Where to opt in | Reduced-motion behavior |
| --- | --- | --- | --- |
| Reveal fade-in | IntersectionObserver + CSS transition | `className="reveal"` | Shows instantly |
| Hero line entrance | CSS `@keyframes heroLine` on load | direct `<span>` children of `.hero__title` | Not animated |
| Parallax | CSS `animation-timeline: view()` | selector listed in the `@supports` block | Effect disabled, media static |
| Section stacking | CSS `sticky` + `z-index` | inside `.stack-sections` | Still stacks; motion is scroll-native |
| Smooth scroll | Lenis rAF loop | `<SmoothScroll />` | Not initialized at all |

Two of these can also be switched off per client without touching CSS —
`site.motion.smoothScroll` and `site.motion.sectionStacking` in `site.config.ts`.
The page degrades to a plain scrolling document with both off.

**Every** motion pattern is wrapped in a `prefers-reduced-motion: reduce` guard.
Preserve that when adapting — it's the difference between a polished site and an
inaccessible one. A single global reduced-motion CSS block also flattens all
transitions/animations as a backstop.

---

## 4. The Payload Content Model

This is what makes each section **editable** without a developer. The whole page's
copy and images live in **one Payload "global"**, structured to mirror the page.

### 4.1 Why a global (not a collection) for the page

A single-page site has exactly one homepage, so its content is modeled as a Payload
**global** (`globals/Homepage.ts`) rather than a collection of many documents. One
global = one editing screen = one `findGlobal` query on the frontend.

Use **collections** (`collections/*.ts`) for things there are *many* of — uploaded
images (`Media`) and admin users (`Users`). Use **globals** for singletons — the
page content. (If the client later needs a blog or multiple landing pages, that's
when you add a collection.)

### 4.2 The global mirrors the page, section by section

The global uses a top-level **`tabs`** field, with **one tab per page section**, so
an editor's mental model matches what they see on the site:

```ts
export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: { read: () => true },
  admin: {
    livePreview: {                                  // see the site beside the editor
      url: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
      breakpoints: [
        { label: 'Mobile',  name: 'mobile',  width: 375,  height: 667 },
        { label: 'Tablet',  name: 'tablet',  width: 768,  height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  hooks: {
    afterChange: [() => { try { revalidatePath('/') } catch {} }], // regenerate on save
  },
  fields: [
    { type: 'tabs', tabs: [
      { label: 'Branding',     fields: [ /* logos */ ] },
      { label: 'Hero',         fields: [ /* hero copy + media */ ] },
      { label: 'Services',     fields: [ /* ... */ ] },
      // ...one tab per section, in page order...
      { label: 'Closing & Contact', fields: [ /* contact details, social links */ ] },
    ]},
  ],
}
```

Field names are **prefixed with their section** (`heroTitleLine1`,
`statsEyebrow`, `calloutCtaHref`). Two payoffs: an editor's tab matches what they
see on the page, and a developer reading a component knows immediately which tab
owns a field.

> **Renaming a field is a schema migration.** Change the *labels* freely for a
> new client — they are what editors read. Leave the field *names* alone unless
> you mean to migrate.

### 4.3 The reusable field vocabulary

Across sections the same handful of field patterns recur. Learn these and you can
model any new section:

| Need | Field pattern | Notes |
| --- | --- | --- |
| Short copy | `{ type: 'text' }` | Titles, labels, eyebrows |
| Longer copy | `{ type: 'textarea' }` | Ledes, descriptions |
| Highlighted title | `titleLead` (text) + `titleAccent` (text) | Component wraps accent in `<em>` |
| Section image | `{ type: 'upload', relationTo: 'media' }` | Optional; frontend falls back to a default |
| Repeating items | `{ type: 'array', fields: [...] }` | Cards, stats, reviews, locations, links |
| Fixed choice | `{ type: 'select', options: [...] }` | e.g. icon name, social platform |
| Toggle | `{ type: 'checkbox' }` | e.g. "featured" variant of a card |
| Grouping in the UI | `{ type: 'row' }`, `{ type: 'collapsible' }` | Layout only — no effect on output shape |

Two conventions worth copying:

- **Optional images with a code fallback.** Image fields are *not* required; the
  frontend's `mediaUrl(value, '/media/placeholder-wide.jpg')` renders a built-in
  asset until the client uploads their own. The site looks complete on day one.
  Regenerate those assets with `npm run placeholders` — and note they are
  *obviously* fake on purpose, because a stock photo is a thing you forget to
  replace.
- **Icons as a `select`, not an upload.** A section that needs an icon stores a
  *name* from a fixed option list; `Icon.tsx` maps that name to inline SVG. Editors
  pick from a dropdown and never touch SVG. Add a client's icon set by extending the
  option list and the `Icon` registry together.

### 4.4 Arrays = repeatable content blocks

Anything the client should be able to add/remove/reorder (service cards, stats,
testimonials, locations, social links) is an **`array` field**. Example:

```ts
{
  name: 'items',
  type: 'array',
  labels: { singular: 'Item', plural: 'Items' },
  minRows: 1, maxRows: 4,                 // bound it so the layout can't break
  admin: { initCollapsed: true },         // keep the editor tidy
  fields: [
    { name: 'icon',  type: 'select', options: iconOptions, required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'featured', type: 'checkbox', defaultValue: false },
  ],
}
```

The frontend renders it with `(data.items ?? []).map(...)`. Use `minRows`/`maxRows`
to protect layouts that expect a specific count (e.g. a four-column stat band).

### 4.5 The Media collection

`collections/Media.ts` defines uploads and asks Payload + sharp to generate
responsive variants on upload:

```ts
upload: {
  focalPoint: true,
  imageSizes: [
    { name: 'thumbnail', width: 480 },
    { name: 'card',      width: 900 },
    { name: 'wide',      width: 1600 },
    { name: 'hero',      width: 2200 },
  ],
  adminThumbnail: 'thumbnail',
  mimeTypes: ['image/*'],
},
fields: [{ name: 'alt', type: 'text', required: true }],  // accessibility, enforced
```

Reusable points: **`alt` is required** (accessibility isn't optional), and the size
ladder is chosen to match the layout's real breakpoints — adjust widths to your
design rather than shipping one giant image.

### 4.6 Live preview & save-to-refresh

Two cooperating pieces give editors a live preview:

- The global's `admin.livePreview` renders the real site in an iframe beside the
  editor at the configured breakpoints.
- `RefreshRouteOnSave.tsx` (mounted in `page.tsx`) listens for Payload's save event
  and calls `router.refresh()`, so the preview updates on save. It's inert on the
  public site.

Combined with the `afterChange → revalidatePath('/')` hook, a save both refreshes
the preview and regenerates the statically-rendered public page.

### 4.7 Wiring & seeding (`payload.config.ts`)

The config registers everything and seeds a fresh database so a new client site
isn't blank:

- Registers `collections: [Users, Media]` and `globals: [Homepage]`.
- **Picks the DB adapter from the connection string.** A `postgres://` URL uses
  the Postgres adapter; anything else falls back to a local SQLite file. Local and
  production therefore differ by *environment only*, never by code — and a fresh
  clone runs with no external setup at all.
- **Picks storage the same way.** Uploads go to Vercel Blob when
  `BLOB_READ_WRITE_TOKEN` is set, and to local disk otherwise. On serverless the
  local filesystem is ephemeral, so the token is mandatory in production.
- Points `typescript.outputFile` at `payload-types.ts` (regenerate with
  `npm run generate:types` — the frontend's `Homepage` type comes from here).
- `onInit` seeds default content (`seed/homepageData.ts`) and, only if
  `SEED_ADMIN_*` env vars are set, a first admin user. It is guarded on the user
  count, so it runs once per database and never overwrites a client's edits.
  **No credentials are ever hardcoded.**

### 4.7b Schema changes and migrations

The template ships **no migrations**, because they are dialect-specific and the
first thing you do on a new site is change the content model.

- **Local development:** `npm run dev` pushes the schema automatically and seeds.
  Nothing else to run.
- **Before the first deploy:** point `DATABASE_URI` at the production Postgres
  URL, run `npm run migrate:create -- --name initial`, and commit the result.
- **On deploy:** `vercel.json` runs `payload migrate && next build`, so the
  schema is applied before the page is prerendered.

A fresh clone therefore needs `npm run dev` (or a `migrate`) once before
`npm run build` will succeed — the static export queries a database that has to
exist first.

### 4.8 Adapting the content model for a new client

1. **Copy the global** and rename its `slug`/`label`. Keep the one-tab-per-section
   structure; add/remove tabs to match the new section list.
2. **Model each new section** using the field vocabulary in §4.3 — structured copy
   fields, an optional image, and an array for anything repeatable.
3. **Update the seed file** (`seed/<page>Data.ts`) with neutral starter content and
   swap the icon/select option lists (and the `Icon` registry) to the client's set.
4. **Regenerate types** (`payload generate:types`) so the frontend's `Page` type and
   the components stay in sync.
5. **Point image fallbacks** at the new client's placeholder assets so empty fields
   still render.

---

## 5. Design Tokens — the one place client identity lives

All visual identity is centralized as CSS custom properties at the top of
`globals.css`. Re-theming for a new client is mostly editing this block; the section
and animation CSS reference the tokens, not raw values.

```css
:root {
  color-scheme: light;             /* opt out of forced auto-dark: this design is light-only */

  /* Brand dark — headers, dark bands, footer, primary text */
  --brand-dark: #1D2733;
  --brand-dark-800: #161E28;  --brand-dark-900: #0F151C;
  --brand-dark-700: #2A3644;  --brand-dark-600: #3A4857;

  /* Accent — CTAs, eyebrows, hovers. The one loud colour. */
  --accent: #C2410C;
  --accent-600: #9A330A;           /* darker — button hover */
  --accent-400: #E2703A;           /* lighter — accent on dark backgrounds */

  /* Neutrals + text */
  --surface: #F2EFEA;   --surface-100: #FAF8F5;  --surface-200: #E6E1D9;
  --line: #DED8CE;
  --ink: #1D2733;       --muted: #5A6673;        --muted-light: #A6B0BB;

  /* Type — two families: one workhorse + one editorial accent */
  --font-body:    var(--font-sans),         -apple-system, sans-serif;
  --font-display: var(--font-sans),         -apple-system, sans-serif;
  --font-cond:    var(--font-sans),         -apple-system, sans-serif;
  --font-serif:   var(--font-serif-accent), Georgia, serif;

  /* Layout rhythm */
  --wrap: 1398px;
  --gutter: clamp(20px, 5vw, 72px);
  --radius: 16px; --radius-lg: 26px; --radius-xl: 34px;

  /* Elevation + easing (shared by every animation) */
  --shadow-sm: /* ... */; --shadow-md: /* ... */; --shadow-lg: /* ... */;
  --ease:           cubic-bezier(.22,.61,.36,1);
  --ease-out-expo:  cubic-bezier(.16,1,.3,1);
  --ease-out-quint: cubic-bezier(.22,1,.36,1);
}
```

**No raw hex appears anywhere else in `globals.css`.** Rules that need a tint of
the accent use `color-mix(in srgb, var(--accent) 34%, transparent)` rather than a
hardcoded rgba, so changing `--accent` really does re-skin every state —
including button shadows and the pulsing call button.

Fonts are loaded in `layout.tsx` via `next/font/google` (self-hosted, no layout
shift) and exposed as `--font-sans` / `--font-serif-accent`. Swap the two font
imports and keep those variable names, and no CSS edit is needed.

### Re-theming checklist

1. Replace the **palette** tokens (`--brand-dark*`, `--accent*`, surfaces, text,
   `--line`). Keep `--themeColor` in `site.config.ts` in step with `--brand-dark`.
2. Swap the **two fonts** in `layout.tsx`; keep the `--font-*` variable names, and
   keep weights 800/900 available — the display headings depend on them.
3. Adjust **layout tokens** (`--wrap`, `--gutter`, radii) if the design calls for it.
4. Update the **placeholder palette** in `scripts/make-placeholders.mjs` and rerun
   `npm run placeholders`, so the stand-in art matches while real photography is
   being shot.
5. Leave **`--ease*`** and the animation CSS alone unless you want different motion.

---

## 6. Bring-Up Checklist for a New Client

The full, tickable version lives in **`NEW-SITE-CHECKLIST.md`** — use that. In
outline:

1. Copy the folder; `npm install`; set `.env.local` from `.env.example`.
2. **Identity:** `site.config.ts`, then the token block (§5) and the two fonts.
3. **Content model:** adjust the global's tabs/fields to the client's sections
   (§4.8) and rewrite the seed file.
4. **Sections:** set the section list and stacking group in `page.tsx` (§2.4);
   make sure the `nth-child` z-index rules cover every stacked section (§3.3).
5. **Assets:** client logo + photography, or rerun `npm run placeholders`.
6. **Wire the contact form** — it does not submit anything out of the box.
7. `npm run generate:types`, `npm run dev`, create the first admin at `/admin`,
   confirm live preview and save-to-refresh.
8. Verify the accessibility contract: `prefers-reduced-motion` disables motion,
   the skip link works, every meaningful image has `alt`.

---

## 7. Reuse Rules of Thumb

- **One `data` object, read by name.** Sections never fetch; they receive. This is
  what keeps sections swappable.
- **Structured copy, not blobs.** Expose lead/accent/eyebrow/lede fields so the
  design's rhythm survives any content.
- **One motion behavior per element.** Reveal *or* parallax *or* stacking — layering
  them makes the page noisy.
- **Content is optional; the page still renders.** Every image has a fallback; every
  array defaults to empty.
- **Identity lives in tokens.** Restyle in `globals.css` + `layout.tsx`, not in
  component markup.
- **Motion is always guarded.** Keep every `prefers-reduced-motion` check when you
  adapt anything.
- **Labels are free, field names are not.** Relabel anything for a new client;
  renaming a field is a schema migration.
- **Environment decides infrastructure, not code.** The database and storage
  adapters follow env vars, so the same commit runs on SQLite locally and
  Postgres + Blob in production.
