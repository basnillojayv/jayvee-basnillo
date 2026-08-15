# Marketing Site Template

A reusable single-page marketing site: **Next.js 15 (App Router) + Payload CMS 3**.
Nine sections in a fixed rhythm, a complete motion system, and every word and image
editable from an admin panel.

Copy this folder, work through `NEW-SITE-CHECKLIST.md`, and you have a new client
site. Nothing in here is client-specific.

---

## Quick start

```bash
npm install
cp .env.example .env        # set PAYLOAD_SECRET at minimum
npm run dev                       # http://localhost:3000
```

That is the whole setup. With no `DATABASE_URI` the site runs on a local SQLite
file, the schema is pushed automatically, and the homepage is seeded with neutral
placeholder content — so the page renders in full on first load.

Create the admin account at [/admin](http://localhost:3000/admin).

> `npm run build` needs a database that already has the schema. Run `npm run dev`
> once first (or `npm run migrate`), otherwise the static export fails on a table
> that doesn't exist yet.

---

## What you get

| Section | Component | Behaviour |
| --- | --- | --- |
| Header | `Header.tsx` | Floating glass pill → solid on scroll, logo swap, mobile drawer |
| Hero | `Hero.tsx` | Full-bleed media, headline that rises and de-blurs on load, request bar |
| Services | `Services.tsx` | Snap-scrolling card rail, arrow controls, one invertible feature card |
| Stats band | `StatsBand.tsx` | Parallax statement over a photo, auto-numbered credentials |
| Why us | `WhyUs.tsx` | Dark band, 4-up grid, accent picks up on hover |
| Coverage | `Coverage.tsx` | Chip list beside a photo with a floating pin card |
| Callout band | `CalloutBand.tsx` | High-contrast interrupt, fixed-attachment parallax |
| Testimonials | `Testimonials.tsx` | One display-size serif quote, cross-faded, swipeable |
| Contact | `Contact.tsx` | Intro column + card form (**not wired to a backend**) |
| Footer | `Footer.tsx` | Serif closing statement, detail columns, social stack |

**Motion:** scroll-in reveals with sibling stagger, scroll-driven parallax
(`animation-timeline: view()`, off the main thread), sticky pin-and-cover section
stacking, and Lenis input smoothing. Every one of them is disabled under
`prefers-reduced-motion`.

**Hover states:** button lift + kinetic arrow chip, nav underline wipe, card lift,
list-item nudge, icon-chip accent fill, social tile lift.

---

## The three files that hold client identity

| File | Owns |
| --- | --- |
| `src/site.config.ts` | Name, nav, metadata, header CTA, motion switches |
| `src/app/(frontend)/globals.css` — token block at the top | Colour, type, spacing, elevation, easing |
| `src/globals/Homepage.ts` + `src/seed/homepageData.ts` | What is editable, and its starting copy |

Everything else is structure. Class names are structural too (`.divider`,
`.svc-card`, `.reveal`), so they never need renaming per client.

---

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server; pushes the schema and seeds on a fresh database |
| `npm run build` | Production build (prerenders the homepage from the CMS) |
| `npm run generate:types` | Regenerate `src/payload-types.ts` — **run after every content-model change** |
| `npm run generate:importmap` | Regenerate the admin import map (after adding admin components) |
| `npm run migrate:create -- --name x` | Create a migration from the current model |
| `npm run migrate` | Apply pending migrations |
| `npm run placeholders` | Regenerate the neutral images in `public/media` |
| `npm run lint` | ESLint |

---

## Environment

Everything is optional locally except `PAYLOAD_SECRET`. See `.env.example`.

| Variable | Effect |
| --- | --- |
| `PAYLOAD_SECRET` | Required. `openssl rand -hex 24` |
| `DATABASE_URI` | `postgres://…` selects Postgres; anything else uses local SQLite |
| `NEXT_PUBLIC_SERVER_URL` | Absolute base URL — metadata, admin email links, live preview |
| `BLOB_READ_WRITE_TOKEN` | Set in production; uploads go to Vercel Blob instead of ephemeral disk |
| `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` | If both set, auto-creates the first admin |

The database and storage adapters are chosen from these variables at runtime, so
local and production differ by environment only — never by code.

---

## Deploying to Vercel

1. Provision Postgres (Neon works well) and a Blob store.
2. Set `PAYLOAD_SECRET`, `DATABASE_URI` (the **pooled** URL, `?sslmode=require`),
   `NEXT_PUBLIC_SERVER_URL`, and `BLOB_READ_WRITE_TOKEN`.
3. Generate and commit an initial migration against the production dialect:
   `DATABASE_URI=<postgres-url> npm run migrate:create -- --name initial`
4. Deploy. `vercel.json` already runs `payload migrate && next build`.

---

## Before launch

The contact form **does not submit anywhere** — it validates, confirms, and
resets. Wire it to a real destination before going live. `NEW-SITE-CHECKLIST.md`
tracks this and the rest of the per-client work.

---

## Documentation

- **`NEW-SITE-CHECKLIST.md`** — the running order for a new client site.
- **`BUILD-SYSTEM.md`** — why the section structure, animation system, and content
  model are built this way, and how to extend each.
