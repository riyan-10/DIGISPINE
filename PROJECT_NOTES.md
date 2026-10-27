# DigiSpine — project record

## Context

Started 23 October 2026 (Asia/Kolkata). This is the user's first freelance project: a website for DigiSpine, a digital marketing company. Repository: https://github.com/riyan-10/DIGISPINE. Connected GitHub account verified as `riyannizar-am`; this differs from the repository owner.

## Mobile service-card regression — 27 October 2026

User reported that Home service cards became a plain vertical list on mobile after the portfolio push, losing the approved desktop-style stacking. Confirmed cause: the portfolio update deliberately added a `max-width:800px` / `max-height:700px` fallback with `position:relative!important`. Its content-clipping safeguard unintentionally removed the desired interaction. Explained this directly to the user.

Local correction removes that cutoff and the older landscape-only static-card fallback. Phone cards use natural content height; each card's sticky inset is measured from its untransformed height, viewport height and header height. Cards that fit pin below the header; taller cards scroll through naturally before pinning with their bottom inside the viewport. ResizeObserver remeasures after content/header reflow, and the existing resize handler covers orientation/viewport changes. Scroll-driven scaling/artwork remain; manual static mode and OS reduced motion still explicitly use normal document flow. D geometry and film choreography were not edited.

Passed full `npm run check` and `npm run build`. New chapter-layout checks cover six card heights across seven viewport/header combinations, content growth and resizing. These are numerical/fixture checks, not browser or real-phone verification. Prior browser restriction was not bypassed. Real touch/scroll, keyboard access and reduced-motion visual review remain pending. The user subsequently explicitly requested pushing the correction; checks/build passed again.

Pushed fix commit `72599be7605430d74fcafc8227397e76d5b04863` to `main` with an expected-SHA guard and no force. GitHub's Vercel status returned **success**: https://vercel.com/riyan-10s-projects/digispine/8Nb7oh4vksi5sErTP2DhdwWdu7tb. Local Git metadata was synchronized without changing working files; checkout was clean and source PDFs remained local/ignored. This documentation follow-up records the verified deployment; real-phone visual review remains pending.

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

### Portfolio implementation authorized — 26 October 2026

After clarifying that the portfolio intake had only been reviewed locally, the user authorized proceeding. Current scope: adapt all four pages from the supplied PDFs, retain the approved blue cinematic D sequence, use six consistent service categories, add the methodology/framework/packages/industry positioning, and replace the prototype-only contact journey with real visitor-initiated WhatsApp/email audit requests. Then push the website and notes to GitHub and verify the existing Vercel deployment.

Implemented: shared service data now drives six Home chapters, six Services sections and six audit-interest options. Home copy uses the discovered/trusted/chosen positioning; the approved D geometry, scroll choreography and blue theme are unchanged. Added five growth layers, Foundation/Growth/Scale engagement plans, eight industry categories, the S.P.I.N.E. method, sourced Kerala/India/UAE context, reporting approach and audit/call/roadmap/delivery process across the four pages. Header/footer CTAs consistently lead to the free growth audit, with the supplied phone/email/WhatsApp destinations.

Contact now creates a reviewed audit request, with optional website/name/reply email/goals and a required business name. It generates correctly encoded WhatsApp and email links; visitors complete sending in their own app. Direct channels also work without JS. Copy/download support remains. Editing any field invalidates the prior request and removes stale send links. Whitespace-only business names/goals and non-HTTP website schemes are rejected. No automatic enquiry delivery, server storage or scoring engine was added.

The concise portfolio supplies the six services/CTA; the long version supplies methods, package depth and market context. Source mapping remains in `docs/CONTENT_REVIEW.md`. No fabricated instant score, measured results, global-client claims, experience counter or popularity badge. Client names/logos and case-study visuals remain pending confirmation. Noindex remains during review. Raw source PDFs stay local and are ignored by Git; neither PDFs nor project notes enter `dist/`.

Verification: syntax, 83 local link/asset references, content/contact consistency, Unicode-safe handoff links, a DOM-fixture simulation of the actual form handlers, existing D geometry/alignment checks, and both normal/fresh isolated builds passed. No external messages were sent by testing. Browser access was previously rejected; it was not bypassed. Current visual/device/native-form/external-app checks remain pending; simulation and old screenshots are not browser evidence.

Pushed source commit `44d6c4d83063b5d6b2febab2ab89b62adda2bbd5` to `main` with an expected-SHA guard and no force. Verified GitHub's Vercel status is **success**, with deployment reference https://vercel.com/riyan-10s-projects/digispine/9Soo8bBSmrxz9eihtN9KAqTX367G. Synchronized local Git metadata without changing working files; checkout was clean and PDFs remained local/ignored. This documentation follow-up records the verified result; final client approval, device QA and project evidence remain pending.

### Client portfolios received — 23 October 2026

The client supplied `Digispine-Portfolio (3).pdf` (7 pages) and `Digispine-Portfolio.pdf` (15 pages) as content sources; the user asked whether they are useful. Both were read in full and all 22 pages were visually reviewed. Detailed content/page mapping, source-page references, claim checks and missing inputs are saved in `docs/CONTENT_REVIEW.md`.

They provide a substantial starting point: specific growth-system positioning, six outward-facing services, five growth layers, S.P.I.N.E. methodology, audit offer, three packages, industry focus, client-name list, engagement process, Kerala/UAE context, and phone/email. Recommendation: use the short source for Home/CTAs and the expanded one for Services/About while preserving the approved D animation. Missing material is primarily actual project work/assets/results, client-display permission, team detail and confirmation of current package/offer/contact particulars. Audit scores are samples; five-year experience, popularity and geography claims need correct attribution. Both PDFs use purple/cyan, unlike the approved blue brand direction; do not recolour automatically.

This was a content review only. Website files were not changed and nothing was pushed/deployed. Client PDFs remain unchanged. The existing GitHub/Vercel deployment behaviour is unaffected.

### Vercel deployment correction — 23 October 2026

The user clarified that GitHub pushes already trigger the existing Vercel production deployment. The earlier push-only/deployment-separate assumption was incorrect for this repository. Treat subsequent `main` pushes as deployments. User supplied a failure log for commit `90f3abf`: `npm run build` successfully created `dist/`, but Vercel expected `public` and failed with `STATIC_BUILD_NO_OUT_DIR`. The Node engine and npm `cache-dir` messages were warnings, not the failing step.

Added root `vercel.json` declaring `framework: null`, build command `npm run build` and `outputDirectory: dist`, following Vercel's official file-based configuration. Pinned `engines.node` to supported `24.x` (also the locally tested major) to remove the open-ended major-upgrade warning. No npm config was changed because the reported cache warning comes from the build environment and did not cause failure. No website design or content changes are included.

Verified: source checks, normal build and a fresh isolated build all passed. Fix commit `2d016109a46cd1ffcde69b0d69dd4e600149256f` was pushed to `main` without force. GitHub's Vercel status reports **success**, linked to https://vercel.com/riyan-10s-projects/digispine/7ojCBqGH9j3nPfaBUL3LD5nkop7H. Local Git metadata was synchronized and the checkout was clean. This follow-up records the verified deployment; the website design/content still needs the previously listed client inputs and wider device QA.

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
