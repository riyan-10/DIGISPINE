# Verification record — 23 October 2026

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
