# Provider portal — UI kit

The dentist / sleep-physician case-management app for ProSomnus. An app shell (sidebar + topbar) with view switching and an interactive new-prescription dialog.

**Screens**
- `Sidebar.jsx` — persistent nav, support card, provider identity.
- `Topbar.jsx` — search, notifications, `New prescription` accent CTA.
- `Dashboard.jsx` — KPI cards + recent-cases table. **Click any row** to open the case.
- `CaseDetail.jsx` — patient header, treatment timeline, clinical summary, coverage panel.
- `NewRx.jsx` — **interactive** new-prescription modal (form → submitted success state).
- `data.jsx` — mock case data shared across screens.

**Interactions:** row click → case detail; back link → dashboard; `New prescription` (topbar/sidebar) → modal; submit → success.

**Run:** open `index.html`. Loads React + Babel + Lucide + `_ds_bundle.js`; screens register on `window.PP`, components come from `window.DesignSystem_e5ed69`.

Data is illustrative only.
