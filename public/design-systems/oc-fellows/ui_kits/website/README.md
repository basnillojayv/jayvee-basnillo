# UI kit — ocfellows.org

A recreation of the OC Fellows marketing website. Four click-through screens share the real header and footer.

| Screen | File | Notes |
| --- | --- | --- |
| Home | `HomeScreen.jsx` | Photographic hero, employer logo wall, three programme cards, About + impact stats, Values on navy, Fellows preview, Impact Stories, Team, Press, CLAOC band, application timeline, closing CTA |
| Our Fellows | `FellowsScreen.jsx` | Class-year filter chips plus name search over the fellow directory |
| Stories | `StoriesScreen.jsx` | Featured story then a story grid |
| Apply | `ApplyScreen.jsx` | Six-step application timeline beside an interest form with a success state |

`Shared.jsx` holds the kit-local `Section`, `PageHeader`, `PhotoPlaceholder` and `Icon` helpers. `data.js` holds the site copy, lifted verbatim from ocfellows.org where the fetched page provided it. Everything else composes the design system's own components from `window.OCFellowsDesignSystem_3dfef0`.

## Fidelity notes

The site's source code and stylesheets were **not** available — only the fetched page text and the brand guidelines. So:

- Copy, information architecture, section order and headings match the live site.
- Visual specifics (radii, section padding, button shape, hero treatment) follow this design system's tokens, which are inferred from the brand guidelines rather than copied from the site's CSS.
- Fellow, team and press images are deliberate placeholders. No portrait photography or press scans were supplied, and the brand forbids stock imagery. The two real event photographs in `assets/photography/` carry the hero, programme cards and stories.
- No CLAOC logo file was supplied, so the CLAOC band shows a labelled placeholder.
- Impact statistics are placeholders — the source publishes none.
