# Business areas, Edu and edition replay — 4 November 2026

## Approved scope and implemented behavior

The user confirmed DigiSpine.edu is a dedicated page in this website, with course details to follow, and authorized implementing and pushing all discussed changes plus regression tests. This extends the earlier four-page scope to five page types / ten English-Malayalam pages. It does not register or connect a separate domain.

Positioning is now **Complete business solutions**, retaining **The Digital Backbone** tagline, with concrete marketing/website/app descriptions in the opening and broader metadata/footer/About copy. Earlier agency-only wording and the fixed six-service count are superseded.

`SERVICE_AREAS` in `scripts/content.mjs` defines Marketing, Development and Education. Five Marketing offerings are branding/logo, digital marketing, online ads, video and customer enquiries/follow-up. Development has websites and the newly requested app development. Home has three area links and seven service chapters, ordered by group; Services has separately anchored Marketing/Development sections plus Education linking to `edu.html`. Existing service anchors are preserved. Contact options share the same seven-service data.

DigiSpine.edu has native English/Malayalam pages (`edu.html`, `ml/edu.html`), shared navigation/language/footer links, proper active state and metadata. It states course information is forthcoming and links to the existing contact page. No invented courses, fees, credentials, start dates, application form or enrolment provider. Client-supplied course details can be added later.

## Kerala Piravi edition

About's text CTA is now **View Kerala Piravi edition**, linking to the matching language homepage with `?edition=kerala-piravi-2026`. The poster itself still opens the complete original image.

The exact archive parameter is explicit opt-in. Language selection/redirect preserves it until the homepage module reads it. `createFestival` consumes/removes it using replaceState before starting the original drawing/docking sequence; no seasonal preference is stored. At the current post-holiday date, refresh selects the normal homepage. BFCache return reloads the consumed normal URL, preventing a restored seasonal DOM from remaining active. Unknown edition names have no effect. Archive entry skips the expired live-day reload timer, and keeps pause/skip/system reduced motion and original D assembly behavior. Ordinary visits (including localhost) now use the normal homepage after the 2026 festival window; explicit local `?festival=cinematic` remains a developer preview.

## Validation

- Full build/check suite/diff checks pass: ten pages, 312 valid local links/assets; existing logo/normal shader numeric/fallback checks and exact Unicode enquiry handoffs.
- New business/edition regression fixtures verify group placement, 5+2 services, app enquiry choice, bilingual Edu with no invented catalogue, explicit archive query consumption, clean-URL refresh selection, preservation of locale/other query data, no expired live timer, BFCache reload and reduced-motion completion. Date gate boundaries/unknown edition and normal visits tested.
- Bilingual regressions now cover Edu, remembered/default/explicit choice, storage failure, archive activation across locale redirect, native links, menu/Escape focus and form interactions. Chapter tests cover seven heights/seven viewports with the current phone header height and content reflow.
- Ten HTML pages plus changed public modules/styles in `dist/` match source exactly. `vercel.json` remains aligned to `dist/`.
- All ten local page routes plus explicit archive entry return HTTP 200. Existing server was stopped; started and retained localhost:4173 for review.
- Core D mesh/renderer/brand geometry, calligraphy drawing/docking artwork/controller, audit handlers and exact supplied testimonial are unchanged from the last deployed version (source comparison).

These are source, numerical, DOM-fixture, packaging and HTTP checks. Browser automation is unavailable and the previous URL-policy restriction was not bypassed. Real browser/mobile appearance, native touch, font and screen-reader review remain pending. Course content and client translation/copy review remain pending. Publication verification is recorded in project notes after the actual push/deployment.
