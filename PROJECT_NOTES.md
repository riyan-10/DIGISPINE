# DigiSpine — project record

## Context

Started 23 October 2026 (Asia/Kolkata). This is the user's first freelance project: a website for DigiSpine, a digital marketing company. Repository: https://github.com/riyan-10/DIGISPINE. Connected GitHub account verified as `riyannizar-am`; this differs from the repository owner.

## Where we began

- Cloned the repository into `/Users/user/Documents/Riyan/Personal/DIGISPINE` on branch `main`, tracking `origin/main`.
- Initial checkout was clean and contained one approximately 60 KB `index.html` plus six supplied PNG brand assets in `Logos/`. No package manager or application framework was configured.
- The original page uses Three.js particles and GSAP entrance/scroll animation. Pointer interaction listens for mouse movement. The user wants a stronger visual direction and better phone interactions, and explicitly permits disregarding the existing design.
- The brand board `Logos/IMG_3048.PNG` specifies blue `#155CA2` and off-white `#F1F1F1`, alongside dark navy/black. Its symbol combines D and a spinal motif. Some supplied logo exports appear blank or almost blank; use a crisp vector interpretation for the prototype and retain all originals.

## User brief and authorization

- Build a technologically expressive, animated website with strong graphics.
- Approximately four pages; the client will supply final content and additional requirements later.
- First make a plan, then build. Keep comprehensive ongoing project notes covering origin, actions, decisions, plans, and pending work.
- Current work is a local repository prototype. No public launch or GitHub push requested.
- Update, 23 October 2026: the user explicitly requested pushing the current website to the existing GitHub repository. This authorizes a source checkpoint on `main`; a public website launch is still separate.

## Decisions for the first version

- Four pages: Home, Services, About, Contact.
- Creative concept: “The digital backbone of your business.” Use a custom animated spine sculpture rather than generic background particles.
- Editorial typography, precise grids and blue highlights. The implemented hero pairs a light text composition with a dark sculptural panel; dark process sections add contrast to light reading sections.
- Dependency-free HTML, CSS, SVG and JavaScript; no install step or animation framework needed. This is appropriate to the currently confirmed presentation scope, and is revisitable if CMS/server requirements emerge.
- Shared navigation/footer and interaction code; real HTML page URLs. Content remains available when JavaScript is disabled.
- Draft marketing copy and proposed services, without fabricated results, customers, testimonials, or team information.
- No invented email address or pretend form submission: contact prototype prepares a downloadable project brief. Real enquiry delivery is a launch dependency.
- Support reduced motion, keyboard navigation and touch. Avoid scroll hijacking and interactions that require hover.

## Current state

### GitHub source checkpoint — 23 October 2026

The user explicitly requested a push. The website, shared logo geometry, four pages, project records, original-page archive and historical preview screenshots were committed to `riyan-10/DIGISPINE` and `main` was advanced successfully through the connected GitHub account. Source commit: `15185433f608b36019d1b4d4da8ded0380995db1`. The update used the previous head as an expected SHA and did not force-push. This follow-up records the successful source checkpoint; Git history identifies the final documentation commit. Source checks and build passed. `dist/` stays ignored. Comprehensive device QA and client content remain pending. This is a GitHub source update, not a new hosting deployment.

Earlier references below to uncommitted/local-only work describe prior stages and are superseded by this checkpoint.

### Revision requested after review

Latest user feedback: the new sequence **is visible**. The internal cut in the approximated logo was wrong; the user requested the actual DigiSpine D assembling instead of a spine, with a very smooth handoff into the full wordmark.

That steering is implemented: traced the original high-resolution `FAVICON.png` alpha silhouette into two vector contours (outer D and its continuous rounded spinal cut). `assets/brand-shape.js` is the shared silhouette source for the header, footer, About artwork, favicon, fallback and wordmark. Originals remain untouched. `assets/logo-geometry.js` scan-converts the silhouette, preserving the inner hole, into 14 closed extruded/beveled fragments. The renderer now assembles these fragments into the D, holds it, then moves/scales the same geometry to the first letter slot while IGISPINE emerges. The flat D uses the identical vector contour; the crossfade begins after the 3D mark has reached its final position. A projection check verifies wordmark center and height alignment at four widths. Front-face area is 96.05% of the traced silhouette area after bevel inset, consistent with retaining the inner cut rather than filling it. Numerical checks now exercise 11,368 draw calls. Build output is approximately 256 KB on disk.

The user subsequently reviewed the corrected-D version positively (“this looks too good, i am impressed”) and asked whether to show the client or collect content first. This records positive user review of the direction, not client acceptance or comprehensive device QA. Recommended next step: share a short concept screen recording and ask for final content/page/feature confirmation in the same message. No client message has been sent and no hosting/publication has been authorized. The localhost address is only usable on this computer; external interactive review requires a shareable preview. Browser tool access remains blocked as described below.

The user explicitly rejected the first sample's visual ambition: motion was too limited, the spine appeared like a GIF in a right-hand panel, and the site was too simple. They want conspicuous, smooth scroll-driven animation, a cinematic assembling DigiSpine identity and an art-led composition. The first concept's implementation/QA below remains a historical baseline, not acceptance of the design.

Revision 2 is now implemented in source and served locally: a full-viewport dark composition with custom real-time WebGL beveled spinal segments; native sticky scroll drives dispersion, assembly, camera rotation, segment release, SVG mark reveal and staggered DigiSpine letter assembly. The motion follows scroll in both directions instead of continuously looping. Lower sections add moving oversized typography, word-by-word illumination, four sticky service chapters with responsive vector/CSS artwork, and a rotating closing composition. Persistent navigation gains a dark glass background on scroll. Phones use different camera framing and smaller compositions; short landscape viewports avoid tall sticky cards. A skip link, manual static-mode switch, OS reduced-motion branch, context-loss handling and vector fallback are implemented.

Syntax, generated-page checks, build and numerical renderer tests passed. The latter exercises actual mesh generation, unit normals, finite draw values, 101 progress positions and four viewport widths through a stub graphics context; it does not validate shader compilation or appearance. Browser access to the local preview was rejected by the automatic browser URL-policy gate, reporting a protocol restriction. No alternate browser surface or indirect browser renderer was used. Actual visual verification, scroll feel, revised keyboard behaviour, shader compilation and current mobile overflow checks remain pending. The user subsequently confirmed that sequence is visible and supplied the D-logo refinement recorded above. Earlier screenshots are revision 1 only.

All four page routes remain. Services, About and Contact keep their first-version content; the shared brief-builder behaviour is retained. The earlier spinal version was approximately 124 KB; the current shared-contour D version is approximately 256 KB on disk. The existing local server remains running at http://127.0.0.1:4173/ for review. No public deployment or GitHub push.

The first four-page local concept is implemented and browser-checked. `npm run dev` serves it at http://127.0.0.1:4173; no dependency installation is needed. `npm run build` regenerates the HTML and creates a static `dist/` output. `npm run check` checks JavaScript syntax, all page links and basic document structure.

Implemented: shared accessible navigation/footer; responsive editorial design; blue CSS spine with assembly, float, pointer response, three selectable shapes, pause and offscreen animation suspension; scroll reveals; native keyboard-operable service/FAQ disclosures; draft About content based on the brand board; validated local project brief generation, real file download and copy actions. No data is submitted. The default submit button stays disabled unless the application initializes, preventing accidental fallback form submission without JavaScript. Draft pages carry `noindex,nofollow`.

Browser verification found no horizontal page overflow on any of the four pages at 320px, 390px and 1440px. Mobile menu/Escape, sculpture controls, keyboard service disclosure, validation, text-file download, copy and stale-result invalidation were exercised successfully. No console warnings/errors were observed in the checked session. See `QA.md` for exact coverage and remaining limits; screenshots are in `docs/previews/`.

Original `index.html` is preserved in `archive/original-index.html`. Supplied PNG assets are untouched. Page source templates live in `scripts/render.mjs`; generated HTML is tracked for immediate portability. All work is local and uncommitted; no GitHub push or public deployment has occurred.

The archive's Git object hash was compared with the initial committed `index.html` and matches exactly. The generated public build is approximately 76 KB on disk, with no external runtime dependencies. The development server was initially stopped after verification. When the user reported an unreachable preview, it was restarted and returned HTTP 200. Leave the preview running for the user's review. If the process later stops, restart with `npm run dev`.

The current preview is a design and interaction prototype, not a production launch. No CMS, live enquiry delivery, analytics or final legal content has been added. Reduced-motion support is implemented in CSS and JS, but the operating system setting was not changed during testing. Real-device and wider cross-browser testing remain pending.

## Pending client decisions / inputs

- Confirm final four pages, navigation, service list, target audience and positioning.
- Supply approved copy, logo/vector master, real work examples and image rights.
- Supply contact email, phone/WhatsApp, location and social links.
- Define “dynamic”: animations only, editable content, project publishing, blog, enquiry management, or other functionality.
- Confirm enquiry recipient, delivery provider, spam protection and data retention.
- Confirm CMS/editor roles if required; do not add an admin system speculatively.
- Confirm domain, hosting, launch date, budget, revision rounds and ongoing maintenance.
- Supply legal/privacy content appropriate to the final collection and tracking features.
- Review the concept on real phones and approve brand treatment and motion.

## Record-keeping convention

This file is the project memory; `PLAN.md` is the actionable checklist; `CHANGELOG.md` is the dated work log. `AGENTS.md` instructs future sessions in this repository to read and maintain these files. Keep client facts separate from assumptions. Do not record secrets or credentials.
