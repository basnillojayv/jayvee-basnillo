# Patient marketing site — UI kit

The patient-facing marketing site for ProSomnus. A single scrolling landing page that composes design-system components; the coverage-check form is interactive (submit → success state).

**Screens / sections**
- `Nav.jsx` — sticky header with blur-on-scroll, anchor nav, `Check coverage` accent CTA.
- `Hero.jsx` — "Sleep, restored." headline, proof badges, star rating, photo placeholder + floating coverage chip.
- `HowItWorks.jsx` — three hover-lift step cards.
- `Comparison.jsx` — ProSomnus vs CPAP comparison table.
- `Proof.jsx` — count-up `Stat`s + three `Testimonial`s.
- `Coverage.jsx` — **interactive** insurance coverage check (Select + Inputs → success `Alert`).
- `SiteFooter.jsx` — dark footer with link columns.

**Run:** open `index.html`. Loads React + Babel + Lucide + `_ds_bundle.js`, then each section script. Components come from `window.DesignSystem_e5ed69`; sections register on `window.PS`.

**Placeholders:** hero image is a drop-in placeholder — supply real ProSomnus photography for production.
