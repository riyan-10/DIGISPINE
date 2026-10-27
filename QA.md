# Verification record — 23 October 2026

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
