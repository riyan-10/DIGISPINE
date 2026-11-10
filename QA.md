# Verification record — 23 October 2026

## Client showcase release authorized — 10 November 2026

User requested publishing the current client-name showcase to production. Final build and full regression checks passed, including bilingual showcase controls and all ten page routes/reference checks. Publishing current names-only treatment; internet logo sourcing remains future work. Real-device visual review remains pending. Deployment result will be recorded after verification.

## Client showcase — 10 November 2026

Build and full check suite pass, including eight exact portfolio names on both Home pages, section ordering, localized toggles, mobile/reduced-motion/site-static switching and viewport/tab visibility fixtures. Ten page routes plus showcase CSS/JS return HTTP 200 locally. Diff whitespace check passes. CSS defines focus outline, native keyboard-focusable horizontal scroll on mobile, hover/focus pause and a no-JS complete list. These are source/controller checks, not real browser or device rendering verification. Actual visual cylinder, touch swipe and keyboard navigation remain pending local review. No deployment.

## SVG arrow deployment verified — 6 November 2026

Pushed source `cf162b8b388845a5f9e39bd09e45f959c7cda68c` to main with an expected-SHA guard and no force. Vercel reports **success**: https://vercel.com/riyan-10s-projects/digispine/FzghvZMyHXcqXKYbF6PMX8YUrk67. Inline vector arrows replace platform-font directional glyphs in both languages and the seasonal hero; full build/regression checks passed. Actual iPhone visual confirmation remains pending. This follow-up records the verified deployment and supersedes the earlier local-only status for this fix.

## iPhone arrow presentation — 6 November 2026

Full build/check suite and diff checks pass. Additional generated-output audit finds 118 inline SVG direction icons across ten English/Malayalam pages and no remaining visible ↗/↓/→ glyphs. Each icon uses currentColor, aria-hidden and focusable=false; dist pages equal generated source. Conversion preserves Unicode inside URLs, labels, raw script and style strings; runtime calligraphy hero also uses shared SVG. Existing navigation/menu/Escape/form/language/edition/geometry/card regressions pass. No iPhone/browser visual test claimed; prior limitation remains. Not deployed.

## Business areas and edition deployment verified — 4 November 2026

Pushed source `c09c7b3db7e3cd55efa5fd90fa384aa1c308c8e8` to main using an expected-SHA guard without force. Vercel reports **success**: https://vercel.com/riyan-10s-projects/digispine/GpP9SkkpKLn4WnkJoSMyTRK2Avhv. Release includes complete-business-solutions positioning, grouped Marketing/Development services with app development, dedicated bilingual DigiSpine.edu with course information forthcoming, and explicit single-visit Kerala Piravi replay. Build/full regression, ten-page/312-reference, package and HTTP checks passed as detailed below. Actual device/browser appearance and client course/wording review remain pending. This follow-up records the verified deployment and supersedes earlier pending/local-only entries for this revision.

## Business areas, education and edition regressions — 4 November 2026

- `npm run build`, full `npm run check`, diff checks pass. Ten generated English/Malayalam pages: one H1, correct active nav, unique IDs, 312 valid local references. New Edu routes included in locale/default/persistence/explicit override/blocked-storage/menu focus tests.
- New regression runs actual edition controller at deterministic post-festival time for both languages and reduced-motion states. Checks URL activation consumed, unrelated query and language pathname preserved, refresh mode normal, BFCache event reloads normal URL, no expired-day reload timer, draw/dock/restoration timing, and disposal. Pure date-window/ordinary localhost+production/unknown edition behavior also pass.
- Data/render checks verify three areas, correct five Marketing/two Development offerings, seven shared enquiry choices including app development, valid Edu links, no fabricated catalogue/prices/enrolment form, and no agency-only positioning. Existing testimonial/source quote tests remain passing.
- Existing bilingual form event/Unicode handoff, menu/Escape focus, seven-height/seven-viewport sticky cards with phone header height, original D geometry/front alignment/shader-call/fallback and seasonal pause/skip/reduced-motion tests pass. No messages sent.
- Ten dist HTML pages and changed public modules/styles match source exactly. All ten local routes plus archive query return HTTP 200. Core logo renderer/geometry, drawing/docking art/controller, audit handlers and testimonial source code are unchanged from last deployed HEAD.
- No actual browser/real-phone/touch/screen-reader or native font/layout evidence claimed. Browser tools unavailable; previous URL policy not bypassed. Course content/client wording/translation and device review remain pending. Release authorized; deployment result to follow.

## Bilingual website deployment verified — 1 November 2026

Pushed complete source `9fd6eb3b7eb73b19ae2e23af380e1799a288a7e3` to `main` with an expected-SHA guard and no force. Vercel reports **success**: https://vercel.com/riyan-10s-projects/digispine/CbxFzKQfxc7Ep77kuN3PEUFRZCKh. This release includes the simplified English pages, complete Malayalam versions and remembered language switch, source-based customer testimonial, and portfolio-based About. Final build/full automated checks/diff checks passed. Client wording/translation and actual browser/device visual checks remain pending; no claim of those checks being complete. This documentation follow-up records the verified release and supersedes earlier local-only entries for this revision.

## Portfolio-based About — 1 November 2026 (local)

- Build/full suite/diff checks pass with eight pages and 228 local references; existing bilingual navigation, menu/Escape/focus, form handoffs, D geometry and seasonal reduced-motion tests remain passing.
- Direct source-PDF text checks confirm introduction/one-team paragraphs, all five S.P.I.N.E. descriptions, five process descriptions and six belief pairs after whitespace/case normalization. Selected sources/adaptations mapped in `docs/ABOUT_PORTFOLIO.md`.
- English and Malayalam About routes return HTTP 200. Source inspection: semantic beliefs definition list, market articles, natural wrapping with responsive 3→2 and 4→2→1 column layouts; existing reveal/reduced-motion behavior reused.
- No actual browser/device/visual verification claimed; prior browser restriction not bypassed. Client selection/translation review remains pending. No deployment.

## Bilingual clarity and testimonial — 1 November 2026 (local)

- Build/full check suite/diff checks pass. Eight localized pages have one H1 each, correct active navigation, unique IDs and 228 valid local links/assets. All eight preview routes return HTTP 200. New Malayalam routes required restart of the verified development server; retained on 4173.
- Static generation rejects missing translatable text. Fixtures cover English-first default, remembered/explicit language, blocked storage, equivalent-page/hash/query links, correct alternate metadata, translated review/original English and no fabricated relative date/aggregate.
- Actual app handlers run for both languages: menu open/close, Escape returning focus to menu, link/outside click dismissal; form prepare/review/focus, custom validation, input invalidation and Unicode-safe WhatsApp/email body/subject. No external messages sent.
- Existing logo mesh/inner-cut/projection, mobile chapter geometry and seasonal timing/reduced-motion checks pass; seasonal controller exercised in both languages. Source inspection confirms native language links/44px mobile targets, Malayalam typography overrides, reduced/static CSS reuse and original review transcription/source asset preservation.
- Original supplied review image SHA-256 recorded in `docs/TESTIMONIAL_SOURCE.md`. New content is text, not the source poster. Malayalam translation explicitly labelled with native original-English disclosure.
- These are numerical/source/DOM fixture/HTTP checks, not actual browser rendering, screen-reader or real-phone evidence. Prior browser-policy restriction remains and was not bypassed. Client English/Malayalam copy review and actual device/overflow/font/scroll/keyboard visual checks remain pending. No commit/push/deployment.

## Mobile background deployment verified — 1 November 2026

Mobile framing fix `894fecd4423ecb4d7a1451f12d8ea6495a01aa35` pushed to main using an expected-SHA guard, without force. Vercel reports **success**: https://vercel.com/riyan-10s-projects/digispine/513rRZsB8XDaSuKHa4tphoQr6Snn. Full build/checks passed; only portrait background framing changed on the website. Real-phone visual review remains pending. This follow-up records the verified deployment.

## Mobile backdrop framing — 1 November 2026

Source asset inspection confirms 1672×941 landscape composition. At 390×844, cover scales it to approximately 1500px wide, exposing only 26% of its width. New portrait CSS fits all 1672 source pixels across 390px (about 219px high), bottom-aligned without stretching and faded into purple. Full build/check suite/diff checks pass; preview HTTP 200. No browser/mobile rendering verification claimed. Local-only change awaiting composition review.

## Cinematic deployment verified — 1 November 2026

Pushed selected cinematic source `19337ddd7993fecf7669a1246d8d41fd2ba8d71c` to `main` with an expected-SHA guard and no force. GitHub Vercel status reports **success**: https://vercel.com/riyan-10s-projects/digispine/EVNnhGvFsmMUNFFukuUCdiQ8ksAK. Final build/full checks pass; real-phone visual review remains pending. Only Cinematic is enabled; normal homepage resumes at 2 November 00:00 IST. Dated About poster remains. This documentation follow-up records the verified deployment.

## Cinematic release checks — 1 November 2026

Production now selects only Cinematic during the exact IST date window; production query strings cannot disable/extend it. Local normal preview remains available. Comparison toolbar is absent; alternate-mode code/styles are removed. Final build/full check suite/diff check pass, including 12 dock viewport pairs, source contours, focus/pause/reduced motion/timing, original logo geometry, mobile chapters and all four pages. No real-phone/browser rendering verification claimed. Release authorized by user; deployment result to follow.

## Greeting placement and cleanup — 1 November 2026 (local)

- Full `npm run build`, `npm run check` and `git diff --check` passed. Four-page headings/navigation/IDs/references, original D geometry, audit and mobile chapters remain covered by existing checks.
- Updated actual seasonal-controller fixture verifies the cinematic gallery CTA is absent, Skip focus transfers to the remaining palm control (or labelled region when reduced motion disables the control), 3100ms/900ms sequence resumes once and reduced motion/pause remain operational.
- Numeric checks validate lower/right docking bounds across the existing 12 viewport pairs; CSS inspection confirms increased continuous-canopy wind, no CTA rules and corrected layout spacer. About source-credit paragraph is absent from generated source; original poster remains unchanged.
- No browser/device rendering verified; perceived overlap, wind and real keyboard/touch review remain pending. Local only, existing preview retained.

## Five-point cinematic refinement — 1 November 2026 (local)

- Full check suite/build/diff checks passed. Automatic controller test verifies 3100ms writing, 900ms docking, exactly one resume callback and restoration of canvas eligibility; reduced-motion/Skip/focus paths also pass.
- Smooth closed cubic contours replace pixel-edge polylines. Numerically flattened curve areas remain within 3% of source component masks; original extracted ink total remains 89,748 pixels. Two trees share a continuous canopy path, removing the transformed cutout seam. New trace is 17 parts / 105 pen paths.
- Dock targets/transforms are finite and inside viewport bounds across 12 tested width/height combinations. Uses untransformed offsets on resize; page story height is unchanged by handoff and CTA/control footprint is retained. CSS/source inspection covers restoration of normal hero rules; these are not browser layout tests.
- Inspected 2× art-only rasterization of smoothed vectors: continuous leaves and curved letter edges. No browser screenshot or real wind/dock animation verification claimed. Existing D mesh/shader checks still pass unchanged.
- Local preview/lettering/layout-helper routes return HTTP 200 and correct MIME. Initial sandboxed curl was unable to connect; existing approved curl-prefix escalation succeeded. Existing server occupied port 4173, so no duplicate server was left running. No push/deployment; user/device visual review remains pending.

## Poster calligraphy hero revision — 1 November 2026 (local)

- Full build/check suite and diff checks pass. Source artwork traces retain all 89,748 thresholded ink pixels in 18 components, with each contour's area within 1% of its source mask. Two separately anchored palms; 105 reveal paths; all pen timings finish before the 6.2-second CTA release.
- Actual dedicated controller exercised in DOM fixtures: CTA initially inert/tabIndex -1; Skip reveals/enables it and transfers focused Skip to CTA; Pause/Resume toggles state; reduced-motion immediately completes lettering and disables palm motion control; disposal clears timer/observers. These fixtures do not simulate browser CSS/keyboard navigation.
- Inspected source extraction and rendered **art-only** mask frames at 0.5/1.8/3/4.5/6.2 seconds; source lettering fills progressively in line order. This is not browser UI evidence. Real pen rhythm/palm motion/hero composition/device layout still need user review.
- Built-in generated background visually inspected: text/logo/service marks removed, wide purple scenery/negative space present. New JPEG 1672 × 941, 225,205 bytes; opacity/vignette added in CSS.
- HTTP 200/correct MIME for cinematic route, hero JPEG, calligraphy data and controller. Existing allowed curl command used; no new command approval. Original poster SHA-256 unchanged; D geometry/renderer/mobile layout helper/contact handlers and Services/Contact markup byte-identical. New build assets match source exactly. Rejected moving frond selectors/keyframes absent.
- Previous browser restriction remains; not bypassed. Local preview only; no production variant, commit, push or deployment.

## Three seasonal concepts — 1 November 2026 (local)

- Build/full checks pass; four pages resolve 88 references. Seasonal syntax and model/controller tests are included in `npm run check`.
- Verified half-open 1 November IST window, exact midnight expiry (1 November 18:30 UTC), local review override after expiry, malicious/non-loopback host rejection and production-default-off behavior. No production variant selected.
- Morph endpoints match sourced Kerala contour and exact brand `LOGO_PATH`; finite values/reversible interpolation, monotonic renderer progress and complementary crossfade weights tested across 101 scroll values and 12 width/height pairs. SVG front plane matches WebGL D size/center numerically at crossfade start; shader/geometry are unchanged.
- Actual seasonal controller runs in DOM fixtures: four toolbar choices with one current item, valid gallery route, note hidden/inert after opening and restored in static mode, exact D endpoint and final transparent SVG/opaque canvas. This does not establish real browser layout, focus behavior or visual smoothness.
- Local HTTP 200 / correct MIME for three comparison query routes, seasonal JS/CSS/shape module, About gallery and original JPEG. Rejected Home poster removed; About gallery anchor exists. Original poster SHA-256 remains `7ca8f199e842a2ba7d07e538f6b8242c2a6d875a908b780d3c9a1582d8116d8c`.
- Pending: user visual choice, real shader/CSS/mobile/keyboard/OS preference checks, final once-per-session policy after selection. Prior browser restriction not bypassed. No deployment; local-only review remains required.

## Kerala Piravi local feature — 1 November 2026

- Existing full check suite and build passed; post-build four-page/reference check resolves 86 references. `git diff --check` passed.
- Inserted section is after the cinematic sequence and before the kinetic introduction. Removing the added section yields the exact previously committed Home markup. Interior pages, animation/renderer/card/contact JS are byte-identical.
- Poster public copy is identical to supplied JPEG: 2047 × 2560, 355,976 bytes, SHA-256 `7ca8f199e842a2ba7d07e538f6b8242c2a6d875a908b780d3c9a1582d8116d8c`. Image keeps its full aspect ratio with natural height; no crop. Native links, meaningful alt text, a semantic date, local Malayalam text, visible purple focus colour and existing reduced-motion-aware reveals are implemented.
- Local server returned HTTP 200 for homepage, image and CSS, with correct image/jpeg MIME. Sandbox initially blocked local HTTP; approved escalation completed readiness verification. Server retained for user review at http://127.0.0.1:4173/#kerala-piravi.
- Visual layout/scroll/keyboard/phone review remains pending; no browser rendering or screenshots claimed. Local-only preview; no push/deployment or automatic expiry.

## Remove DS / 001 — 27 October 2026

- Static build and four-page structure/83 local-reference checks passed; `git diff --check` passed.
- Exact source comparison confirms only the requested span was removed from Home template/generated markup. Its adjacent tagline remains, with right alignment preserved in CSS. The built homepage omits the identifier. Three interior pages and timeline/renderer/mobile helper are byte-identical. No new tests or browser/device verification were added for this small text removal.
- Source `2f8445fdc4664b70ea2964af65a33b31d27feba2` reached `main`; Vercel **success**: https://vercel.com/riyan-10s-projects/digispine/9JMqqTtarUkhGLxGS99aMueZHZYD.

## Smooth background finish — 27 October 2026

- Passed existing `npm run check` and static build. After final highlight-opacity adjustment, rebuilt successfully and passed `git diff --check`.
- Comparison against the deployed rebrand confirms only background declarations and `.cinema-noise`, `.cinema-grid`, `.cinema-radial` decorative rules changed. Four pages, renderer/timeline, geometry, mobile-card helper and audit handlers are byte-identical. Procedural SVG turbulence was removed; no new background animation, raster download or blur filter.
- Bounded the hero's layered gradients conservatively by combining per-channel maxima and maximum alpha, even though highlight peaks do not coincide. Resulting RGB upper bound (75.7,58.1,99.2) gives secondary text contrast **4.82:1**. Conservative bounds for purple card paragraphs: 7.32:1; charcoal card: 7.30:1; muted light copy: 4.68:1; stone card: 7.63:1; CTA eyebrow: 7.64:1. Calculations include `.8` card-copy opacity.
- Actual perceived finish, gradient banding and device appearance remain pending user/browser review. Prior browser restriction was not bypassed; no visual verification claimed.
- Source commit `f8c26f3882a1c4ba73cf4f9d1de7791979277ce3` reached `main`; GitHub's Vercel status **success**: https://vercel.com/riyan-10s-projects/digispine/7qKKn9LNc3uVMH4euYdLkc7m95gE. This confirms hosted build delivery, not visual quality.

## White/purple rebrand — 27 October 2026

- Sampled supplied PNGs (`3.png`, `6.png`): dominant RGB (36,16,79), `#24104F`. Both originals preserved: SHA-256 `e5a3bc055f2ad79e745024155916f45efbfaaee52e8ca47233cbd0e1ddfaec0b` and `c2f48d9e6f49276271f30fc0bdc0b1703c317ba9c3554d025b194e6b40884f27` respectively.
- `npm run check` and `npm run build` passed, including four-page structure/83 local references, existing renderer geometry/projection checks, six-service/content/audit-handler checks and mobile-card layout checks.
- Compared three stylesheets against HEAD with colour tokens normalized: layout, selectors, sizing, responsive queries, sticky and motion declarations unchanged. Only extra rule sets chapter-link focus outline colour to its current foreground colour. Four generated HTML files differ only in theme-colour metadata.
- Timeline JS, chapter-layout helper, logo contour, mesh generation and contact handlers are byte-identical. Renderer differs only inside fragment-shader material RGB constants/name; vertex shader, lighting calculations, camera, handoff and timings are unchanged.
- Source-colour contrast: body 16.81:1, muted body 5.76:1, white on brand 16.64:1, dark secondary body 8.79:1. Six card paragraphs including `.8` opacity: 10.50/8.53/9.70/9.24/7.99/8.62:1. Form boundaries: 3.30:1. All checked text pairs exceed 4.5:1, checked input boundary exceeds 3:1.
- Browser/device appearance, actual shader compilation/material finish, perceived wordmark crossfade and client approval remain pending; previous browser restriction was not bypassed. These are source/numerical checks, not new screenshots or touch QA.
- Rebrand commit `5440b2afa166562aa1d6c9236e416c3a77a810a5` was pushed to `main`; GitHub's Vercel status returned **success**: https://vercel.com/riyan-10s-projects/digispine/2LzoJjJa9iUNTMrrKgG9vFCJu4zu. New PNG Git blob hashes match local originals. Hosted build success does not replace pending visual review.

## Mobile chapter correction — 27 October 2026

- Removed the portfolio CSS's short-screen `position:relative!important` override and the older landscape static-card override; normal-motion cards retain native sticky positioning.
- Phone cards now have natural content height. Inset checks exercise six varied heights over seven viewport/header combinations (568/667/700/844px phone heights, 390px landscape, tablet and desktop), ensuring the pinned bottom remains reachable and fitting cards clear the header. Content growth to 950px and shrink/viewport resize update the inset.
- `npm run check` and `npm run build` passed. The build includes the imported chapter-layout module. Existing four-page references, D renderer numerics, content and audit interaction checks also passed.
- Inspected CSS cascade: manual static and OS reduced-motion modes still set relative positioning with `top:auto` and disable the card transform. This is source inspection, not OS/browser verification.
- Pending: real phone stack/reading/scroll feel, text zoom, orientation/browser chrome changes, keyboard focus and visual reduced-motion check. Browser restriction was not bypassed; no current screenshots or device verification claimed.
- On the user's push request, source/build rechecks passed and fix commit `72599be7605430d74fcafc8227397e76d5b04863` was pushed to `main`. Vercel status **success**: https://vercel.com/riyan-10s-projects/digispine/8Nb7oh4vksi5sErTP2DhdwWdu7tb. Local Git metadata synchronized cleanly; deployment status does not establish phone visual quality.

## Portfolio integration — 26 October 2026

- `npm run check` passed: module syntax, four-page structure/83 local references, existing D mesh/hole/projection checks, shared six-service consistency, five method stages, three plans and supplied contact routes.
- Audit-message checks round-trip ampersands, fragments, newlines, accented text and Malayalam through WhatsApp/email query encoding without injecting additional query parameters. Destinations match the PDF-provided phone/email. No external links were opened and no messages were sent by these tests.
- Actual `assets/app.js` handlers ran in a minimal DOM fixture: required business name, reviewed result/focus, exact send links, stale-link removal on input/change, forbidden website protocol, whitespace-only values and optional website/goals passed. This is a code-level interaction simulation, not browser-native form or external app verification.
- All four pages load shared app JS as a module and load portfolio CSS; audit fields have explicit labels. Direct contact links and the disabled default submit button provide the no-JS path without fallback GET submission.
- Normal and fresh isolated builds passed. Public `dist/` contains all pages and required new CSS/modules; raw client PDFs and project notes are absent. Source PDFs are Git-ignored.
- Blue styling, traced D shape and cinematic JS/renderer were preserved. Current screenshots, desktop/mobile layout, real touch, OS reduced motion and native app handoff remain pending: previously blocked browser access was not bypassed. Prior screenshots are historical evidence only.
- Verified source commit `44d6c4d83063b5d6b2febab2ab89b62adda2bbd5` on `main` and Vercel **success** status: https://vercel.com/riyan-10s-projects/digispine/9Soo8bBSmrxz9eihtN9KAqTX367G. Local checkout synchronized cleanly; hosted success does not replace the pending visual/device checks.

## Vercel configuration fix

- Supplied deployment log shows `npm run build` succeeded, then `STATIC_BUILD_NO_OUT_DIR` because Vercel expected `public` while the build writes `dist`.
- Added explicit `vercel.json` static framework/build/output settings and pinned the supported Node 24.x major.
- `npm run check` and `npm run build` passed. An isolated temporary checkout containing only source scripts, assets and config built from scratch; configured `dist/` contains all four pages and required JS modules, with project notes excluded from public output.
- Verified guarded push of fix commit `2d016109a46cd1ffcde69b0d69dd4e600149256f` and GitHub's Vercel **success** status. Local checkout synchronized cleanly. Hosted result: https://vercel.com/riyan-10s-projects/digispine/7ojCBqGH9j3nPfaBUL3LD5nkop7H.

## Revision 2 — cinematic homepage (current)

### Corrected D follow-up

- User confirmed the first cinematic sequence rendered visibly. That does not verify the later D-geometry change.
- The logo is now traced from supplied `Logos/FAVICON.png` with its actual continuous internal cut. Shared vector source drives branding and the wordmark.
- Passed numeric checks for 14 extruded fragments, unit normals, preserved hole/front area (96.05% of source filled area after bevel), and 11,368 draw calls over four viewport widths and 101 progress values.
- Independently projecting the final 3D front plane matches the target SVG slot's center and height within numeric tolerance at all four tested widths. This checks coordinates, not perceived transition quality.
- Build, module syntax and 73 local references passed. Real shader compilation, mobile layout, final silhouette appearance and smoothness remain pending visual review. Browser tool access is still blocked.

- Passed JavaScript syntax checks for shared interactions, cinematic timeline and renderer.
- Passed four-page generated document/link checks (73 local references) and static build.
- Actual mesh triangulation, bevel geometry and unit surface normals passed numeric checks. Stub WebGL exercise covered four widths (320, 390, 800, 1440), 101 progress values, two arrival states and 9,696 finite draw calls. Unavailable-WebGL returns the fallback path. This does **not** establish real shader compilation, browser layout, frame rate or visual quality.
- Existing preview server returned HTTP 200 and remains running.
- **Browser checks blocked:** the tool rejected access to the localhost tab under its automatic URL policy, reporting a protocol restriction. No alternative browser/indirect UI path was attempted. User was asked to refresh and report whether the new sequence appears.
- Pending: real WebGL rendering, desktop/mobile framing and overflow, scroll pacing and reversal, keyboard navigation through the three stages and sticky cards, static/reduced-motion mode, current contact regression and new screenshots.
- Everything below is **revision 1 historical evidence**. The screenshots under `docs/previews/` still show that earlier design and must not be presented as the current revision.

## Revision 1 — passed

- `npm run check`: application JavaScript parses; four pages each have one H1, one current navigation item, a responsive viewport and unique IDs. All 71 local link/asset references and anchors resolve.
- `npm run build`: regenerates four pages from `scripts/render.mjs` and copies public assets to `dist/` without dependencies.
- Development HTTP server returned `200 OK` for the homepage.
- Archived original page matches the initial Git blob exactly (`64f17c3b8a74b0894c16ee0705051c2d22cc7929`).
- In-app browser layout measurements for **all four pages at 320×740, 390×844 and 1440×1000**: document width equals viewport width, with no horizontal page overflow.
- Visually inspected desktop Home, About, Services and Contact; phone Home and Contact. Saved representative Home and contact-brief screenshots.
- Mobile menu opens, exposes navigation and closes with Escape; expanded state updates correctly.
- Sculpture Build/Grow/Connect selections update pressed state, caption and shape. Pause changes state and stops autonomous motion. Connect works through the same button interaction on a phone-sized viewport.
- Service disclosure toggled closed with keyboard Enter. Native `details`/`summary` also powers FAQ entries.
- Empty required fields block brief generation. Whitespace-only project goals are rejected, and editing back to a valid goal restores normal generation.
- Generated brief contains name, email, brand, selected service, timeline and project goals, with explicit text confirming it has not been sent.
- Actual text file download succeeded; downloaded file contents were inspected. Clipboard action displayed its success status.
- Changing an input hides the old brief and requests regeneration.
- No console warnings/errors were observed in the tested browser session.

## Implemented, with remaining verification limits

- Reduced-motion CSS and JS branches remove animation and expose a disabled “Reduced motion” control when the system preference is active. The actual OS preference was not changed during this session.
- No-JavaScript fallback keeps page content/navigation available and keeps the form's default submit button disabled. This was reviewed in source, not tested by disabling browser JavaScript.
- Clipboard failure has an explicit download/manual-copy fallback; clipboard denial was not forced.
- CSS animations and local SVG graphics avoid external asset/network dependencies. No Lighthouse benchmark or battery profiling was run.
- The viewport checks are browser resizing, not real iOS/Android hardware testing. Wider Safari/Chrome/Firefox coverage, full screen-reader review, OS reduced motion and real touch-device testing remain before launch.

## Not production-ready yet

- All marketing copy and capabilities need client approval.
- No real email/phone/social details, live enquiry delivery, CMS, analytics or legal pages.
- Prototype metadata includes `noindex,nofollow`; final canonical, social preview and indexing decisions remain pending.
- No published site or GitHub push. `dist/` is a local ignored build output.

## Preview evidence

- `docs/previews/home-desktop.jpg`
- `docs/previews/home-mobile.jpg`
- `docs/previews/contact-brief.jpg`
