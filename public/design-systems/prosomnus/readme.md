# ProSomnus Sleep Technologies — Design System

A warm, reassuring design system for **ProSomnus Sleep Technologies**, maker of custom-fit oral appliances that treat sleep apnea — a comfortable, insurance-covered alternative to CPAP machines.

The system serves **two audiences**:
- **Patients** looking for a CPAP alternative — the voice is human and calming, the proof points are front-and-center.
- **Dentists & sleep physicians** who prescribe the device — the voice is credible and evidence-led, without becoming cold or corporate.

**Design north star:** the warmth of Slack + the clarity of Notion + the trust signals of Stripe, applied to healthcare. Soft, calming, generous whitespace, one bold accent color (amber) reserved for calls to action.

### Sources provided
- `uploads/prosomnus-blue.svg` — the ProSomnus wordmark + crescent mark. Copied to `assets/` and given explicit fills (`assets/prosomnus-logo.svg`, `-white.svg`, `-mark.svg`); the original is preserved at `assets/prosomnus-original.svg`.
- A written brand brief (colors, type, spacing, radii, shadows, motion, key proof points). All values below come from that brief.

No codebase, Figma file, or slide deck was provided — components are an author-standard set sized to the brand's needs (see *Components*).

---

## Key proof points (feature these)
- **96%** of patients prefer ProSomnus over CPAP
- Trusted by **hundreds of thousands** of users
- Covered by **nearly all medical insurance, Medicare, and VA benefits**
- **No masks, hoses, filters, or noise**

---

## Content fundamentals — how ProSomnus writes

**Voice:** reassuring, warm, human. We talk like a trusted clinician who also happens to be a good listener — never like a device manual.

- **Person:** address the reader as **you**; the brand is **we**. ("*You* deserve a good night's sleep. *We'll* match you with a provider near you.")
- **Tone:** calm and confidence-building. Lead with how life *feels* better (sleeping through the night, a quiet bedroom), then back it with proof.
- **Casing:** sentence case everywhere — headings, buttons, labels. No ALL-CAPS shouting except tiny eyebrow labels (letter-spaced).
- **Plain language over jargon.** Say "a comfortable device worn like a retainer," not "mandibular advancement device." Clinical terms appear only in provider-facing contexts, and even there they're explained.
- **Short, human sentences.** Generous line-height (1.7) gives copy room to breathe.
- **Emoji:** not used in product or marketing UI. Warmth comes from tone, imagery, and color — not emoji.
- **Numbers earn their place.** A stat is shown only when it's a real proof point (96%, insurance coverage). No decorative data.

**Example — patient hero:**
> **Sleep, restored.** A comfortable, custom-fit alternative to CPAP — no masks, no hoses, no noise. 96% of patients prefer it. See if you're covered.

**Example — provider:**
> **Prescribe with confidence.** Precision-milled appliances, predictable titration, and streamlined insurance documentation for your practice.

---

## Visual foundations

**Color.** Blue is the anchor — the **royal blue from the ProSomnus wordmark** (`--blue-500 #2261AE`, dark `--blue-700 #16457E`). The **bright cyan from the crescent mark** is the supporting/secondary color (`--cyan-500 #009AD9`), used for reassurance and "covered" states. **Amber (`--color-accent #FBBF24`) is the accent and is reserved for the single primary CTA on a view** — never for decoration or more than one button in a group. It's the one warm pop against an otherwise all-blue identity. Neutrals run cool-grey from `#F3F4F6` page backgrounds to `#1F2937` text. Success `#059669`, error `#DC2626`, each with a soft tinted background. (The palette is drawn directly from `assets/prosomnus-logo.png`.)

**Typography.** Headings in **Newsreader** (modern serif, semibold, slightly tightened tracking) — warm and editorial. Body/UI in **Manrope** (geometric sans) at 16px / **line-height 1.7**. This is the approved modern serif/sans pairing (direction 1B); the brand's licensed faces are **Utopia** (serif) + **Univers** (sans), which are not web-available — see Caveats. Scale: H1 48 · H2 32 · H3 24 · H4 20 · body 16 · caption 12–14. Captions in muted grey.

**Spacing.** 4px base scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 (· 64 · 96 for sections). Layouts are generous — whitespace is a feature, not wasted space.

**Corners.** 8px on buttons & inputs (`--radius-sm`), 12px on cards (`--radius-md`), 16px on large surfaces/modals (`--radius-lg`), pill for badges/tags. Nothing sharp.

**Shadows & borders.** Soft, diffuse shadows only — **no harsh borders.** Cards sit on a `--shadow-sm` and lift to `--shadow-lg` on hover. Where a border is needed it's a hairline `--border-subtle` (#E5E7EB) or an inset ring, never a heavy line. Elevation communicates hierarchy, not outlines.

**Cards.** White surface, 12px radius, soft shadow, generous internal padding (24px default). No visible border. Optional `hoverLift` raises the card 4px with a larger shadow.

**Backgrounds.** Mostly white and very-light grey (`--gray-50/100`). Soft tinted washes (`--blue-50`, `--cyan-50`) mark reassuring or "covered" states. No busy patterns, no aggressive gradients. If a gradient is used it's a whisper-soft blue→white, never bluish-purple. Imagery skews **warm, bright, human** — real people resting, calm bedrooms, natural light — not cold clinical stock.

**Motion.** Smooth and gentle; motion guides attention, never distracts. Scroll-triggered fade/slide-ins, **hover-lift on cards**, and **count-up animations on statistics**. Easing is a soft ease-out (`cubic-bezier(0.16,1,0.3,1)`); durations 150–450ms. All motion collapses under `prefers-reduced-motion`.

**Interaction states.**
- *Hover:* primary buttons darken to `--blue-700`; accent darkens to amber-700; secondary/ghost pick up a soft tint; cards lift.
- *Press:* subtle scale-down (0.97) — a gentle "give," never a jarring jump.
- *Focus:* soft 3px ring in the element's color (`--ring-primary` / `--ring-accent`), not a hard outline.
- *Disabled:* 50% opacity, no shadow.

**Transparency & blur.** Used sparingly — the modal backdrop is a `rgba(15,23,42,.45)` scrim with a light 2px blur. No frosted-glass everywhere.

---

## Iconography

ProSomnus uses **[Lucide](https://lucide.dev)** line icons — soft, rounded, 2px stroke, `currentColor` fill. They match the friendly-geometric feel of Poppins and stay legible at small sizes.

- **How it's wired:** the `Icon` component (`components/media/`) is a thin React wrapper that reads icon geometry from the Lucide UMD global. Load Lucide from CDN on any page that renders icons:
  `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>`
- **Names** are kebab-case Lucide names (`shield-check`, `moon`, `heart-pulse`, `calendar-check`).
- **Substitution note:** the source brief did not ship an icon set, so Lucide is a chosen standard (flagged — swap it if ProSomnus has a house set).
- **Emoji / unicode as icons:** not used. Star ratings and checkmarks are drawn as inline SVG within components (Testimonial, Checkbox) for crisp control.
- The **crescent "O" mark** from the logo (`assets/prosomnus-mark.svg`) is the one brand glyph; use it as a favicon / avatar / loading mark, not as a general-purpose icon.

---

## Components

Author-standard set (no source component library was provided). Each lives in `components/<group>/` with a `.jsx`, a `.d.ts` props contract, a `.prompt.md`, and one `@dsCard` HTML per directory. Mount from `window.DesignSystem_e5ed69`.

**forms/**
- **Button** — `primary` (blue) · `accent` (amber, one CTA per view) · `secondary` · `ghost`; sizes sm/md/lg; icon slots; disabled.
- **Input** — labelled text field with hint, error, and left-icon.
- **Select** — styled native select.
- **Checkbox** — labelled checkbox.
- **Radio** — vertical radio group.
- **Switch** — toggle with optional label.

**display/**
- **Card** — the base soft surface; optional `hoverLift`.
- **Badge** — pill status label (neutral / primary / wellness / success / warning / error).
- **Tag** — selectable / removable chip.
- **Stat** — big number with count-up-on-scroll animation.
- **Testimonial** — patient/provider quote card with star rating.

**feedback/**
- **Alert** — inline banner (info / success / warning / error).
- **Dialog** — modal with soft scrim + pop-in.

**media/**
- **Icon** — Lucide line-icon wrapper *(intentional addition — see Iconography)*.

**Intentional additions:** `Icon` (glyph wrapper for the chosen Lucide set), `Stat` and `Testimonial` (the brief calls out count-up statistics and patient proof as core to both audiences).

---

## UI kits

Full-screen recreations composing the components above. Each is in `ui_kits/<product>/` with an `index.html` demo + JSX screens.

- **`ui_kits/patient-site/`** — the patient-facing marketing site: hero with proof points, "how it works," benefits vs. CPAP, testimonials, insurance/coverage check.
- **`ui_kits/provider-portal/`** — the dentist/physician portal: dashboard of patient cases, case detail, and a new-prescription flow.

*(No slide template was supplied, so no sample deck is included — see Caveats.)*

---

## File index / manifest

```
styles.css                 ← global entry (link this one file). @imports all tokens.
tokens/
  fonts.css                ← Newsreader + Manrope (Google Fonts)
  colors.css               ← palette + semantic aliases
  typography.css           ← families, scale, weights, leading
  spacing.css              ← 4px scale, radii, shadows, focus rings
  motion.css               ← easings, durations, reduced-motion
assets/
  prosomnus-logo.svg       ← primary lockup, recolored to logo blues (crisp/vector)
  prosomnus-logo.png       ← authoritative full-color artwork (as supplied)
  prosomnus-logo-white.svg ← reversed lockup (white)
  prosomnus-mark.svg       ← crescent mark only
  prosomnus-original.svg   ← untouched source upload (pre-color)
guidelines/                ← @dsCard specimen cards (Colors, Type, Spacing, Brand)
components/<group>/         ← reusable React primitives (+ .d.ts, .prompt.md, card)
ui_kits/<product>/          ← full-screen product recreations
shared/PageChrome.jsx       ← shared site header + footer + Accordion (window.SITE)
homepage/                   ← ProSomnus homepage (immersive hero, sections, nav → pages/)
pages/                      ← full marketing site pages, cross-linked via PageChrome
  how-it-works/             ← interactive stepper, comparison, FAQ, CTA
  find-a-provider/          ← search filters, interactive map, cards, skeletons
  results/                  ← count-up stats, before/after sleep viz, testimonial wall
  providers/                ← clinician landing: why, technology, join network
  faq/                      ← tabs (patients/providers), search filter, accordion
templates/<slug>/           ← reusable page scaffolds (DC templates; consuming projects seed from these)
  marketing-landing/        ← patient landing scaffold
  provider-landing/         ← clinician landing scaffold
SKILL.md                    ← Agent-Skill wrapper for downloadable use
```

**Generated (do not edit):** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

---

## Caveats & substitutions
- **Fonts** — the brand's licensed faces are **Utopia** (serif headings) + **Univers** (sans body), neither of which is web-available. The system ships the approved modern substitute pairing **Newsreader + Manrope** (direction 1B), loaded from Google Fonts. Send the licensed Utopia/Univers files and I'll wire them in via local `@font-face` in `tokens/fonts.css`. (The compiler reports 0 `@font-face` rules because the Google fonts arrive via a CSS `@import` — this is expected.)
- **Colors** are sampled directly from the supplied logo: royal `#2261AE` (primary) + cyan `#009AD9` (secondary), with amber retained as the CTA accent.
- **Logo** — `prosomnus-logo.png` is the authoritative full-color artwork as supplied; `prosomnus-logo.svg` is a vector recolor to the same two blues for crisp scaling in UI. Use the PNG where fidelity matters, the SVG where scaling/recoloring does.
- **Icons** use Lucide (chosen standard) — swap if ProSomnus has a house icon set.
- **Imagery** in kits uses drop-in placeholders; supply real ProSomnus photography for production.
