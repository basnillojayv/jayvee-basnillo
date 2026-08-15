# New Site Checklist

Running order for standing up a client site from this template. Roughly a day for
the build, plus whatever the copy and photography take.

`BUILD-SYSTEM.md` explains *why* each piece works the way it does — reach for it
when a step needs more than a one-liner.

---

## −1 · Is this the right starter?

Three exist. Decide once, deliberately, rather than by whichever folder was open
last — moving between them later is a rebuild, not a migration.

| Starter | Use it when |
| --- | --- |
| **`website-starter-payload`** (this one) | The default. The client edits their own copy **and** their own photographs. |
| `website-starter-cms-lite` | A brochure site where the client only rewords text, and you would rather not run a database at all. |
| `website-starter-template` | Nobody edits anything. |

**Photographs are the deciding fact.** `-lite` has no media store, so swapping
an image there is a developer job forever. If the client will ever want to
change a picture themselves, they need this one.

---

## 0 · Set up

- [ ] Clone `website-starter-payload` and rename the directory.
- [ ] Point `origin` at the new site's own repository — do not push to the
      starter. (`git remote set-url origin …`)
- [ ] Set `"name"` in `package.json`.
- [ ] `npm install`
- [ ] `cp .env.example .env`, then set `PAYLOAD_SECRET` (`openssl rand -hex 24`).
- [ ] `npm run dev` — confirm the placeholder site renders at localhost:3000.
- [ ] Create the first admin at `/admin`.
- [ ] Visit `/edit`, sign in with that account, and confirm the toolbar appears
      out on the homepage.

At this point you have a complete, working site with neutral content, and the
in-place editor already installed — there is nothing to add for it. Everything
below replaces the content with the client's.

---

## 1 · Identity — `src/site.config.ts`

- [ ] `name`, `shortName`
- [ ] `heroWatermark` (the oversized word behind the hero — or `''` to remove it)
- [ ] `title`, `description` — real SEO copy, ~150–160 characters
- [ ] `themeColor` — keep in step with `--brand-dark`
- [ ] `nav` — labels and anchors, matching the sections you keep
- [ ] `headerCta` — the persistent header button
- [ ] `fallbackPhone`
- [ ] `hero.videoSrc` — point at a file in `public/media`, or leave `''` for a still
- [ ] `motion.smoothScroll` / `motion.sectionStacking` — leave on unless the client objects

---

## 2 · Design tokens — top of `src/app/(frontend)/globals.css`

- [ ] Brand dark ramp (`--brand-dark`, `-600` … `-900`)
- [ ] Accent trio (`--accent`, `--accent-600` darker, `--accent-400` lighter)
- [ ] Surfaces and `--line`
- [ ] Text (`--ink`, `--muted`, `--muted-light`)
- [ ] Fonts in `layout.tsx` — swap the two `next/font` imports, keep the
      `--font-sans` / `--font-serif-accent` variable names, keep weights 800/900
- [ ] Layout tokens (`--wrap`, `--gutter`, radii) if the design calls for it

Check contrast on the dark band and the accent buttons before moving on.

> Do not add raw hex anywhere else in the stylesheet. Tints use
> `color-mix(in srgb, var(--accent) …)` so that changing one token re-skins every
> state.

---

## 3 · Sections — `src/app/(frontend)/page.tsx`

- [ ] Decide the section list. Removing one is a deleted line plus its nav entry.
- [ ] Decide what sits inside `.stack-sections` (pins and covers) vs. after it.
- [ ] If the stacking group changes size, check the `nth-child` z-index rules in
      globals.css cover every stacked child (`1..N`).
- [ ] Keep the background rhythm alternating — no two adjacent sections should
      share a background, and the two dark bands should stay spread out.
- [ ] **A new section carrying a photograph or an icon needs marking**, or it
      will not be editable. Text needs nothing — it is found by matching its
      contents. Pictures carry no text to match on, so they declare themselves:

```tsx
<Image src={…} data-edit-key="homepage.yourField" />
<Icon name={item.icon} editKey={`homepage.yourArray.${i}.icon`} />
```

> Nothing errors when this is forgotten. The region is simply not there, and the
> client is the one who finds out. If a background image is a CSS custom
> property rather than an element, put the key on the element carrying it.

---

## 4 · Content model — `src/globals/Homepage.ts`

- [ ] Add or remove tabs to match the section list.
- [ ] Relabel fields for the client's vocabulary (labels are free to change).
- [ ] Update `serviceIconOptions` / `featureIconOptions` to the icons this client
      needs, and add any new geometry to `components/Icon.tsx` — the two lists must
      agree.
- [ ] Update `socialOptions` to the platforms they actually use.
- [ ] `npm run generate:types` **after every change here.**
- [ ] **A new global or collection must be added to `GLOBALS` / `COLLECTIONS` in
      `src/lib/inlineEdit.ts`**, or none of its copy is editable in place. That
      is the only place slugs are named; the status route drives itself off
      those maps.

> Renaming a *field name* (not a label) is a schema migration. Do it deliberately.

> A prefix pointing at a slug that does not exist makes every read throw, which
> the editor catches and reports as "not allowed to edit" — the toolbar simply
> never appears, with nothing on screen to say why. Check new slugs against
> `src/globals/` and `src/collections/`.

---

## 5 · Copy — `src/seed/homepageData.ts`

Replace every string. Watch the lengths — they are load-bearing:

- [ ] Eyebrows: 2–5 words
- [ ] Title lines: 2–4 words each (the display face is enormous)
- [ ] Ledes: 1–2 sentences, under ~200 characters
- [ ] Service cards: 4–8 of them, all roughly the same length
- [ ] Stats: exactly 4 fit the grid
- [ ] Why-us items: exactly 4 fit the grid
- [ ] Testimonials: under ~200 characters each — they are set at display size
- [ ] Callout band: one sentence
- [ ] Contact details, hours, address, legal line, social URLs

- [ ] Search the repo for `Northline` and `example.com` — there should be zero hits.

Seed data only applies to a **fresh** database. To re-seed during development,
delete `site.db` and restart.

---

## 6 · Assets — `public/media`

- [ ] Client logo as `logo.png` (colour, for light backgrounds)
- [ ] Client logo as `logo-white.png` (for the hero and footer)
- [ ] Replace the four `placeholder-*.jpg` files with real photography, keeping the
      filenames — or update the fallback paths in the components
- [ ] Optional hero video → `public/media`, then set `site.hero.videoSrc`
- [ ] Favicon: `site.icon`

Interim option: update `PALETTE` in `scripts/make-placeholders.mjs` and run
`npm run placeholders` so the stand-ins match the brand while photography is shot.

Aspect ratios the layout expects: hero ~12:7 · wide 3:2 · portrait 4:5 ·
texture 3:2 (rendered at ~12% opacity, so detail is wasted on it).

---

## 7 · Wire the contact form

**The form does not submit anywhere.** It validates, shows a confirmation, and
resets. Pick one and implement it in `components/Contact.tsx`:

- [ ] A Next.js server action posting to the client's CRM or inbox
- [ ] A Payload collection to store submissions in the admin
- [ ] A third-party endpoint (Formspree, Resend, etc.)

Then:

- [ ] Remove the `TODO(client)` comment
- [ ] Test a real submission end to end
- [ ] Add spam protection (honeypot field or a captcha)

---

## 8 · Accessibility pass

- [ ] Every meaningful image has `alt`; decorative ones have `alt=""`
- [ ] `alt` text filled in for the CMS-uploaded images (`areaImageAlt`,
      `testimonialsImageAlt`) — the Media collection requires `alt` on upload
- [ ] Alt text is also editable from the page, in the photograph picker. It
      belongs to the media document rather than the page, so changing it changes
      that photograph's description **everywhere it is used** — worth saying out
      loud at handover
- [ ] Tab through the page: skip link, header, drawer, form, footer
- [ ] Turn on "reduce motion" at the OS level and reload — the page should be
      completely static and fully legible
- [ ] Contrast check the accent on both light and dark backgrounds
- [ ] Test the mobile drawer, the tap-to-call button, and the testimonial swipe

---

## 9 · Deploy

- [ ] Provision Postgres (Neon) and a Vercel Blob store
- [ ] Set `PAYLOAD_SECRET`, `DATABASE_URI` (**pooled** URL, `?sslmode=require`),
      `NEXT_PUBLIC_SERVER_URL`, `BLOB_READ_WRITE_TOKEN`
- [ ] `DATABASE_URI=<postgres-url> npm run migrate:create -- --name initial`, then
      commit the generated migration
- [ ] Deploy — `vercel.json` runs `payload migrate && next build`
- [ ] Create the production admin at `/admin` — your own account
- [ ] Create the **client's** account, the one they will use at `/edit`
- [ ] Optionally set `ADMIN_EMAILS` (comma-separated) to narrow who gets the
      in-place editor. Unset means every Payload user gets it, which is the
      sensible default while the only accounts are ones you created by hand. Not
      in `.env.example` — it is optional everywhere
- [ ] Confirm live preview and save-to-refresh work in the admin
- [ ] Upload the real images through the admin so they land in Blob storage —
      they become the choices in the client's photograph picker
- [ ] From a logged-out browser: `/api/editor-status` returns `{"canEdit":false}`
      and no editor UI renders for a visitor

---

## 10 · Handover

Lead with `/edit`. It is the client's daily tool; `/admin` is the back room they
visit occasionally. Showing them the dashboard first teaches them the harder
thing and leaves them there.

**The five-minute walkthrough**

- [ ] `/edit` → sign in → the homepage opens ready to edit
- [ ] Click a heading, type over it, **Save**
- [ ] Click a photograph's *Change photo* badge, pick another, Save
- [ ] **Sign out** — especially if they are on a shared or borrowed machine

**Say these out loud. Each one otherwise comes back as a complaint.**

- [ ] **Save is immediate.** There are no drafts, so there is no staging step
      and no undo. The button says Save rather than Publish for exactly that
      reason — if it said Publish they would reasonably assume something was
      being held back.
- [ ] **What lives in `/admin` instead:** new photographs (uploading one), long
      rich-text write-ups, and any structured content this site has.
- [ ] **A photograph's description is shared.** Editing it changes that image's
      alt text everywhere it appears, not only on the page they are looking at.
- [ ] **Some text will not respond to a click.** Anything split across styling —
      a headline using the `*asterisks*` convention — has no single piece of text
      to match, so it stays in `/admin`.

**Then**

- [ ] Show them the `*asterisks*` convention for the footer headline and quotes
- [ ] Point out that images are optional and fall back to whatever is committed
- [ ] Hand over credentials via a password manager, never email
- [ ] Tell them `/edit` is not linked from anywhere and is excluded from search —
      it is a URL they bookmark, not a button they will find
