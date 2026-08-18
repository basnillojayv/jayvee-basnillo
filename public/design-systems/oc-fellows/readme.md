# OC Fellows Design System

**Connect. Grow. Succeed.**

OC Fellows is a two-year leadership development program for diverse early-career professionals working in Orange County companies. It is run by the **CEO Leadership Alliance of Orange County (CLAOC)**, which created OC Fellows to develop and retain top-tier young talent in OC. The program delivers quarterly learning events (leadership workshops plus a CEO Spotlight), quarterly social events around Orange County, and community partnerships with high school and university programs.

- **Mission statement (verbatim, Brand Guidelines p.17):** "An inclusive community of high potential young professionals who will lead OC into the future."
- **Tagline:** Connect. Grow. Succeed.
- **Positioning line:** Recognizing and Developing Orange County's Future Business Leaders
- **Primary audience:** OC Fellows — young professionals in Orange County.
- **Secondary audience:** Talent leaders, managers and executives at CLAOC member companies; leaders at employers where OC Fellows work, including non-CLAOC members.
- **Brand personality (p.16):** Authentic · Diverse · Aspiring · Curious · Professional

## Values (verbatim)

| Value | Line |
| --- | --- |
| Curiosity Sparks Growth | Our curiosity leads to learning and understanding |
| Community-Centered Action | We seek opportunities for radical community care |
| Lead with Empathy | Leading with empathy helps us recognize and include others |
| Intentional Communication | We are present and communicate with purpose |
| Shared Connection | Working together we reflect our interconnectedness |

(The five one-line descriptors are printed on Brand Guidelines p.15; the five value titles come from the website's Our Values section.)

## Products / surfaces

There is one digital product: the **marketing website at https://ocfellows.org** (WordPress + Elementor). Its surfaces are Home, About, Our Program (Learning Events / Social Events / Community Partners), Our Fellows, Stories, Our Network, Our Team, Press, Apply, Contact. Applications are collected through an external Google Form. There is no app, dashboard, or logged-in product in the supplied sources, so this system ships **one UI kit: `ui_kits/website/`**.

## Sources used

| Source | What it gave |
| --- | --- |
| `uploads/Compressed_OC Fellows_Brand Identity Guidelines_V2.2-compressed.pdf` (23 pp, "Brand Guidelines V1.1 / Identity Manual", 2025) | Authoritative brand colours (p.13), logo typeface + brand typeface (pp.10–11), logo do's/don'ts (p.8), values, personality, mission, audience, tagline, photography rules (p.20), and the two real event photographs in `assets/photography/` |
| `uploads/OC Fellows_Mini BrandStyle Guide.pdf` (1 p) | All logo lockups (primary, secondary/stacked, submark, favicon, on-colour tiles, single-colour versions) — extracted as vector SVG into `assets/`; also a 5-swatch colour strip |
| https://ocfellows.org/ (fetched) | Site information architecture, section headings and body copy, programme descriptions, team and fellow listings, application timeline, press list, sponsor/partner roster |

Note: the earlier brief also referenced `uploads/OC Fellows_Brand Identity Guidelines_V2.pdf`; the file actually supplied was the compressed V2.2 above. No Figma file, repository, or website source code was provided — the website recreation is built from fetched page copy and structure plus the brand guidelines, **not** from the site's stylesheets. Treat website-specific measurements (button radius, section padding) as informed inference, not ground truth.

---

## Content fundamentals

**Voice.** Warm, plain, institutional-but-human. Sentences are declarative and mid-length. The brand explains what the programme *is* and what it *does*, and lets the outcomes carry the emotion. It never hypes, never uses exclamation marks in body copy, and never leans on startup vocabulary ("supercharge", "unlock", "game-changing").

**Person.** "We" for the organisation and the community together — "We provide learning workshops, skill building, networking opportunities, community service and connection across industries." "You" appears only in direct calls to action and eligibility framing — "Reach out if you are interested in OC Fellows." Values are written in first-person plural: "We seek opportunities for radical community care." Fellows are referred to in the third person as *Fellows* (capitalised) or *OC Fellows*.

**Casing.** Sentence case for headings and body. Title Case for navigation items, buttons and proper programme nouns ("Learning Events", "Community Partner", "Meet the OC Fellows"). ALL CAPS with wide tracking is reserved for two things: the tagline lockup (`C O N N E C T . G R O W . S U C C E E D .`) and small section labels inside the printed guidelines. Never set a paragraph in caps.

**The eyebrow + heading pair is the brand's signature copy device.** Almost every website section opens with a short sentence-case phrase above a bolder heading:

- "Connect. Grow. Succeed." → "Recognizing and Developing Orange County's Future Business Leaders"
- "Leading with Purpose, Impact, and Unity" → "Our Values"
- "Future Leaders Making a Difference" → "Meet the OC Fellows"
- "How OC Fellows Transform Lives" → "Impact Stories"
- "United by Vision and Impact" → "Our Network"
- "Leaders United for Lasting Impact" → "OC Fellows Team"
- "Featured in News & Media" → "Press"
- "Reach out if you are interested in OC Fellows" → "Get Involved with OC Fellows"

Write the eyebrow as a human claim, the heading as a plain label. Do not swap them.

**Length.** Section intros run one to three sentences, ~25–45 words. Card blurbs run two to three short sentences. Buttons are 1–3 words: "Apply", "Contact us", "Learn more", "Read More", "View All Stories", "Explore Our Team", "Meet the OC Fellows". Note the site's inconsistent button casing ("Learn more" vs "Read More") — prefer **Title Case** for new buttons.

**Vocabulary that belongs to the brand:** Fellows, cohort/class ("Welcome Class of 2026"), two-year leadership experience, early-career professionals, learning event, social event, community partner, CEO Spotlight, impact stories, network, Orange County / OC, inclusive, diverse, purpose, connection, interconnectedness, radical community care, give back.

**Avoid:** "students", "interns", "members" for Fellows; "networking event" for social events; "DEI" as a noun; "young talent" in outward-facing copy (fine internally, as in the CLAOC line); emoji — **the brand does not use emoji anywhere**, in any surface.

**Numbers.** Stats are presented as a big number plus a plain label, counting up from zero on the site: "Events Held 0+", "Fellowship Completion Rate 0%", "Early Career Professionals Impacted 0+". Real figures were not present in the fetched markup — treat the counters as data-driven and never invent values.

---

## Visual foundations

### Colour

Six brand colours (Guidelines p.13). Roles below are this system's assignment; the guidelines themselves specify no roles.

| Token | Hex | Role |
| --- | --- | --- |
| `--oc-navy` | `#002F4B` | Primary brand navy. Headings, dark sections, secondary buttons. |
| `--oc-ink` | `#2A2C3B` | Body text, deepest surface. Slightly violet-leaning charcoal, not black. |
| `--oc-orange` | `#FF944D` | The single accent. Primary CTAs, active states, the "OC" in the wordmark. Use sparingly — it is the only warm colour. |
| `--oc-aqua` | `#A8DADC` | Soft pale support. Large calm fills, section backgrounds, the lower chevrons of the mark. |
| `--oc-teal` | `#00ACC1` | Bright accent. Focus rings, links on dark, small highlights. Never a large flat fill. |
| `--oc-slate` | `#7D8C8C` | Neutral anchor. Muted text, borders, dividers. |
| `--oc-cream` | `#FAF6F5` | Warm off-white page/tile background. |
| `--oc-logo-blue` | `#01547C` | **Mark only.** The supplied lockup artwork is drawn in this blue. Not a UI colour. |

Ratio in practice: roughly 60% white/cream, 25% navy or aqua, 10% slate, 5% orange. Teal is a garnish. Never place orange on aqua or teal on navy for text — neither combination passes contrast.

Derived scales (`--navy-*`, `--orange-*`, `--aqua-*`, `--teal-*`, `--neutral-*`, `--ink-*`) and the status colours are **this system's additions**, not brand-specified. Status colours were invented because none exist in the sources — flag any use in brand-critical work.

### Type

- **Brand typeface, primary: Inter** — specified as *Bold* in the guidelines' brand-typeface specimen. Inter is the working face for headings and UI.
- **Brand typeface, secondary: Proxima Nova** *(Regular)* — long-form body copy.
- **Logo typeface, primary: Gobia** *(Regular)* — the wordmark only. Never set body copy in it.
- **Logo typeface, secondary: Proxima Nova** *(Regular)*.

Font substitutions in this system (see Caveats): Inter is real, served from Google Fonts. **Proxima Nova → Nunito Sans** and **Gobia → Poppins** are stand-ins.

Headings are Bold (700) Inter with tight tracking (`-0.02em`) and tight leading (1.1–1.25). Body is 400/1.7 for comfortable long reading. Eyebrows are 600 at 14px with `0.14em` tracking, in orange or slate. Statistics are 800 at display size in navy. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`. Prose measure caps at 64ch.

### Layout & spacing

4px base step (`--space-1` … `--space-32`). Content container 1180px max with 24px gutters; prose container 760px. Vertical section rhythm is generous: 96px (`--section-y`) between major bands, 64px for compact ones. Sections alternate white → cream → aqua → navy to segment a long page; never stack two coloured bands in a row without a white one between them.

Grids: three-up for programme cards and stories, four-up for team, five-or-six-up for the fellow directory, logos in a single scrolling/wrapping row. Sponsor and partner logos sit on white with generous air and are rendered greyscale-neutral at ~40px height.

The nav is fixed to the top, white, full-width, with the primary logo on the left and a single orange **Apply** button on the right. Nothing else is fixed or sticky.

### Backgrounds & imagery

**Photography rule, verbatim from the guidelines (p.20): "No use of stock photos. Always use real photos of OC Fellows at events."** This is the single hardest rule in the brand. Full-bleed photography is used for the hero and for programme cards; images are unfiltered, natural daylight, warm, mid-contrast, no duotone, no grain, no black-and-white. Subjects are groups of people, candid, at real events. Two real photographs are shipped in `assets/photography/`.

No gradients. The guidelines explicitly forbid gradients on the logo, and the brand shows none anywhere else — flat colour only. No textures, no patterns, no hand-drawn illustration. The only decorative geometry available is the logo mark's own chevron, which may be used as an oversized watermark at low opacity on navy — sparingly, and never behind text at readable sizes.

When text must sit on a photograph, use a **protection gradient** (`--scrim-bottom` / `--scrim-left`), a navy-tinted scrim from `rgba(0,22,35,.82)` to transparent — not a capsule or pill behind the text.

### Corners, borders, shadows

Corners are modest: `--radius-card: 10px`, `--radius-input: 6px`, `--radius-media: 10px`. Buttons and chips are fully rounded pills (`--radius-pill`). Logo tiles are hard-cornered (0). Nothing in the system uses a radius above 24px.

Cards are white on cream, `10px` radius, a 1px `--border-subtle` hairline **or** a soft navy-tinted shadow — not both. Shadows are tinted with navy rather than neutral black: `--shadow-sm: 0 2px 6px rgba(0,47,75,.08)` up to `--shadow-lg: 0 16px 40px rgba(0,47,75,.12)`. No inner shadows on controls. Never a coloured left border as a decorative accent.

### Interaction

- **Hover, filled buttons:** darken one step (`--orange-500` → `--orange-600`). No opacity fades on filled surfaces.
- **Hover, quiet/text elements:** colour shifts navy → orange. Links only ever change colour.
- **Hover, cards:** lift 4px (`--lift-translate`) and deepen the shadow to `--shadow-hover`; the image inside may scale to 1.03.
- **Press:** `translateY(1px)` plus the darkest step of the colour. No scale-down.
- **Focus:** a 3px teal ring, `--ring-focus` (`rgba(0,172,193,.45)`), never a browser default outline.
- **Disabled:** `--disabled-bg` fill with `--disabled-fg` text, no shadow, cursor `not-allowed`.

### Motion

Restrained. 140ms for colour changes, 220ms for shadows and transforms, 700ms for scroll-reveals — all `cubic-bezier(.22,.61,.36,1)` (`--ease-out`) or `--ease-entrance` for reveals. Sections fade up 16px on entry. Statistics count up from zero. No bounce, no spring, no parallax, no autoplaying video. All durations collapse to 0 under `prefers-reduced-motion`.

### Transparency & blur

Used almost never. The two sanctioned uses are the photo protection gradients and the fixed nav, which may sit on `rgba(255,255,255,.92)` with `--blur-panel` when scrolled over a photo hero. Never frost a card, never blur behind body text.

---

## Iconography

**The supplied sources contain no icon set.** The brand guidelines cover logo, type, colour and verbal identity only, and the website is Elementor-driven — its icons (a left/right carousel arrow labelled "Left Arrow", a LinkedIn glyph, numbered timeline steps) are theme defaults, and no icon font, sprite sheet, or SVG files were available to copy. Nothing was extracted.

**Substitution, flagged:** this system links **Lucide** from CDN (`https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js`) as the working icon set. Lucide's 1.75–2px rounded-cap outline style is the closest free match to the mark's own flat rounded geometry. Every icon in the components and UI kit is a Lucide glyph. **Replace with the brand's real icons if they exist.**

Rules:
- Outline only, never filled. Stroke 1.75px at 20–24px, 2px at 16px.
- Icons take `currentColor` — navy in light contexts, white on navy, orange only when the icon *is* the accent (e.g. an active state).
- Icons sit beside text at 20px with an 8px gap, optically centred on the cap height.
- **No emoji, ever** — not in UI, not in copy, not in decks.
- Unicode characters are not used as icons. The only non-Lucide glyph is the logo mark itself, from `assets/`.
- Numbered steps (the application timeline) use real numerals in a circle, not icons.

### Logo assets in `assets/`

All extracted as vector from the Mini Brand Style Guide's own artwork — nothing was drawn or reconstructed.

| File | Use |
| --- | --- |
| `logo-primary.svg` | Primary horizontal lockup (mark + wordmark). Default everywhere. |
| `logo-stacked.svg` | Secondary lockup, mark above wordmark. Square-ish spaces. |
| `logo-symbol.svg` | Logo icon / mark alone. |
| `logo-white.svg` | Reversed lockup for navy, orange or photographic backgrounds. |
| `logo-navy.svg`, `logo-orange.svg`, `logo-aqua.svg` | Single-colour lockups (Guidelines p.7). |
| `logo-on-cream.svg`, `logo-on-navy.svg`, `logo-on-orange.svg`, `logo-on-aqua.svg` | Approved lockup-on-background tiles. |
| `favicon-navy.svg`, `favicon-orange.svg`, `favicon-aqua.svg` | Circular submark / favicon. |
| `palette-strip.svg` | The Mini Guide's own five-swatch strip, kept for reference. |
| `photography/oc-fellows-group.png`, `photography/oc-fellows-networking.png` | The two real event photographs from the guidelines. |

**Logo don'ts (Guidelines p.8, verbatim):** Don't distort the logo in any way · Don't place the logo against any background that doesn't create contrast · Don't change the original solid colour with an outline · Don't add drop shadow · Don't change the letter spacing · Don't add any kind of gradients.

---

## Index

### Root
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper.
- `thumbnail.html` — homepage tile.

### `tokens/`
`fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `motion.css` · `base.css`

### `guidelines/`
Foundation specimen cards (Type, Colors, Spacing, Brand groups) rendered in the Design System tab.

### `components/`
- `core/` — Button, IconButton, Badge, Eyebrow, SectionHeading, Card
- `forms/` — Field, Input, Textarea, Select, Checkbox, FilterChip
- `content/` — StatCounter, ValueItem, PersonCard, StoryCard, PressCard, TimelineStep, LogoWall, ProgramCard
- `navigation/` — NavBar, Footer

### `ui_kits/`
- `website/` — recreation of the ocfellows.org marketing site: Home, Our Fellows, Stories, Apply.

### `templates/`
- `website-page/WebsitePage.dc.html` — "Website page" starting template: header, photographic hero, about band, values band, closing CTA, navy footer.

### Intentional additions
Nothing in the supplied sources defines a component inventory — the brand materials are guidelines-only and no site source code was available. The component set above was therefore authored from the *patterns visible in the website's content structure* (eyebrow/heading pairs, fellow directory with year filter, story cards, press cards, numbered application timeline, sponsor logo walls, stat counters, value list). Each component maps to a real section of the live site. The status colour palette and the derived colour scales are additions with no brand source.

---

## Caveats

1. **Two font substitutions.** Proxima Nova → Nunito Sans, Gobia → Poppins. Both are guesses at visual proximity, not licensed equivalents. Please supply the real `.woff2` files (or confirm the substitutes) — Gobia in particular only matters if you ever need to typeset the wordmark rather than use the SVG.
2. **No icon set was supplied** — Lucide is a substitution (see Iconography).
3. **Palette conflict between the two PDFs.** The Mini Brand Style Guide's strip contains `#01547C` (the blue the logo artwork is drawn in) and pairs `#00ACC1` with an RGB row for a peach tone (255, 182, 160) that appears nowhere else. The V2.2 guidelines list `#002F4B` and `#2A2C3B` instead. This system treats V2.2 as authoritative and keeps `#01547C` as a mark-only colour. Confirm which navy is correct for UI.
4. **Website measurements are inferred.** No stylesheet or Figma file was available, so radii, section padding, and button shapes in the UI kit are informed choices, not copies.
5. **Only two brand photographs exist in the sources**, both extracted from the compressed guidelines PDF at 1200px wide. Higher-resolution originals would improve the UI kit noticeably.
