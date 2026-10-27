# Work log

## 27 October 2026 — remove DS / 001

- User requested removing the decorative scene identifier. Removed its Home span and kept the adjacent line right-aligned.
- Build, four-page reference checks, diff checks and exact source comparison passed. Other pages and animation code are unchanged. Push/deployment in progress; verified outcome to follow.

## 27 October 2026 — smoother background finish

- User disliked the rebranded texture and requested a premium alternative. Replaced grain/grid with smooth amethyst-to-charcoal gradients and changed the sharp blurred light streak into a broad, soft gradient highlight.
- Coordinated pearl gradients on light cards/interior heroes and satin gradients on dark cards, About artwork, dark sections and CTA bands. Kept the white/purple brand and existing UI structure/motion.
- Only three website CSS files changed. Verified all page markup, interaction code, renderer and mobile stacking remain byte-identical; other CSS declarations are unchanged outside backgrounds/decorative film layers.
- Existing checks/build passed. Conservative gradient contrast bounds pass 4.5:1 for checked text pairs; no new animated background, raster asset or blur filter. Actual browser/device appearance remains pending.
- Updated durable project records and palette guidance. Pushed source `f8c26f3882a1c4ba73cf4f9d1de7791979277ce3` with an expected-SHA guard and no force; Vercel status **success**: https://vercel.com/riyan-10s-projects/digispine/7qKKn9LNc3uVMH4euYdLkc7m95gE. This follow-up records the verified outcome; visual/device review remains pending.

## 27 October 2026 — client white/purple UI rebrand

- User relayed the client's switch to white/purple and supplied `assets/3.png` / `assets/6.png`. Sampled exact dominant background `#24104F`; original source PNGs remain byte-identical.
- Applied a restrained palette across shared/interior/Home styles, artwork, favicon and browser theme. Updated only WebGL material RGB constants for a pearl D with violet reflections.
- Kept white/stone surfaces and charcoal scenes with concentrated brand accents, rather than making all surfaces purple. Service cards alternate purple, lavender, charcoal, white, stone and neutral.
- Preserved copy, layout, typography, motion, camera, D geometry and mobile stack. Added a foreground-colour focus outline on chapter links for light/dark contrast.
- Full checks/build passed; source comparisons confirm colour-only CSS/metadata changes and unchanged interaction/geometry code. Principal text/button/card contrast and form boundaries passed numerical calculations. Browser/device/WebGL appearance remains unverified; no browser restriction workaround.
- Added `docs/BRAND_THEME.md` and updated project records. Rebrand commit `5440b2afa166562aa1d6c9236e416c3a77a810a5` was pushed to `main` with an expected-SHA guard and no force. Original PNGs were included with exact matching blob hashes.
- Verified GitHub's Vercel status **success**: https://vercel.com/riyan-10s-projects/digispine/2LzoJjJa9iUNTMrrKgG9vFCJu4zu. This documentation follow-up records the deployment; client/device visual review remains pending.

## 27 October 2026 — mobile service-card stacking correction

- User flagged the mobile Home cards losing the approved stack after the last push. Confirmed the added short-screen fallback intentionally used normal flow to prevent clipping; losing the effect was an unintended consequence.
- Removed the static short-screen/landscape cutoffs. Phone cards grow with content; measured sticky insets let tall cards scroll through before pinning. ResizeObserver and viewport resize keep the inset current.
- Preserved scroll-driven card/art transforms, manual static mode, system reduced motion and the D film.
- Full checks/build passed, including new six-card/seven-viewport inset and reflow checks. Actual phone rendering/scroll remains unverified; no browser-policy workaround was attempted.
- User explicitly requested pushing. Rechecks/build passed; fix commit `72599be7605430d74fcafc8227397e76d5b04863` reached `main` with no force and Vercel status **success**: https://vercel.com/riyan-10s-projects/digispine/8Nb7oh4vksi5sErTP2DhdwWdu7tb.
- Synchronized local Git metadata, preserving working files and ignored PDFs; clean checkout confirmed. This documentation follow-up records the deployment result.

## 26 October 2026 — portfolio copy and audit journey

- User authorized applying the previously reviewed content and pushing to the existing GitHub/Vercel flow.
- Replaced provisional copy across Home, Services, About and Contact with client-sourced positioning and service detail. Shared catalogue keeps six services consistent across chapters, detailed sections and interest options.
- Added five growth layers, Foundation/Growth/Scale plans, eight industry categories, S.P.I.N.E. methodology, engagement steps, reporting narrative and sourced Kerala/India/UAE context.
- Preserved approved D geometry/wordmark choreography and blue visual direction. Added responsive content sections and two service artworks. No client logos, numeric results, sample scores, experience counter or popularity claim were invented/published.
- Added supplied WhatsApp/email/call destinations. Audit form prepares a request for review, then provides visitor-initiated WhatsApp/email handoff; copy/download remain. Business name is required; other details are optional. Input changes clear old send links. Website protocols and whitespace are validated. No messages were sent during tests; no automatic scoring/backend/storage was added.
- Ignored raw client PDFs in Git; adapted content and project records are included in source, while internal notes/PDFs are excluded from the static public build.
- Passed syntax/link checks (83 local references), content consistency and Unicode encoding checks, DOM-fixture event-handler tests, existing geometry/alignment checks and a clean isolated Vercel-configured build. Browser access remains blocked from prior attempts; no new browser/device verification is claimed.
- Pushed guarded source commit `44d6c4d83063b5d6b2febab2ab89b62adda2bbd5` to `main`; GitHub's Vercel status returned **success**. Deployment reference: https://vercel.com/riyan-10s-projects/digispine/9Soo8bBSmrxz9eihtN9KAqTX367G.
- Synchronized local Git metadata and confirmed a clean checkout. Original PDFs remain local/ignored. This follow-up records the deployed source and verification limits.

## 23 October 2026 — client portfolio content assessment

- Reviewed the client's 7-page short portfolio and 15-page expanded portfolio: full text extraction and visual inspection of all 22 pages.
- Created `docs/CONTENT_REVIEW.md` with exact source pages, four-page content mapping, six service categories, S.P.I.N.E. method, audit offer, package/engagement details and contact information.
- Identified missing project visuals/measured results and confirmation needs: client attribution/permissions, experience, package inclusions, geography, audit scoring and purple-versus-blue branding. Sample scores are not real results.
- Recommended using both sources now as a copy base while requesting targeted missing evidence. No website edits, client messages, push or deployment were performed.

## 23 October 2026 — Vercel deployment configuration fix

- User clarified that `main` already auto-deploys to Vercel and supplied `STATIC_BUILD_NO_OUT_DIR` logs.
- Confirmed build completed successfully in `dist/` while Vercel expected `public`; the Node/npm messages are warnings.
- Added `vercel.json` with static framework, explicit build command and `dist` output. Pinned Node to supported/tested 24.x. Updated README and the project record with the existing deployment relationship.
- Local source checks and both normal/isolated builds passed. Pushed guarded fix commit `2d016109a46cd1ffcde69b0d69dd4e600149256f` to `main` and synchronized the local checkout.
- Verified GitHub's Vercel status is **success** for the fix. Deployment: https://vercel.com/riyan-10s-projects/digispine/7ojCBqGH9j3nPfaBUL3LD5nkop7H.

## 23 October 2026 — source pushed successfully

- Created source commit `15185433f608b36019d1b4d4da8ded0380995db1` containing the cinematic website, corrected D geometry, four pages, project documentation, original-page archive and historical preview evidence.
- Connected GitHub account successfully advanced `riyan-10/DIGISPINE` branch `main` from its original head, with an expected-SHA guard and no force push.
- This documentation follow-up records the successful source push. Final remote-ref verification and local Git metadata synchronization follow; working files are preserved.
- No new public hosting deployment was requested. Final client content, enquiry delivery and remaining QA stay pending.

## 23 October 2026 — GitHub checkpoint preparation

- User requested pushing the current project to GitHub.
- Confirmed connected `riyannizar-am` account has push permission for `riyan-10/DIGISPINE`, default branch `main`.
- Reran syntax, local-reference, geometry/alignment checks and build successfully. No credential patterns were found in the source scan.
- Preparing a source checkpoint including website, project records, original-page archive and revision-1 preview evidence. Generated `dist/` output remains ignored. Public website deployment is not part of this request.

## 23 October 2026 — positive user concept review

- User positively reviewed the corrected-D version and asked whether to share it with the client or collect content first.
- Recommended sharing a short recording as an initial visual concept and requesting content, final pages and functional requirements in the same conversation. Clarify that copy is provisional and functionality remains to be agreed.
- Recorded that client acceptance is still pending. The localhost URL cannot serve as an external review link. No message, deployment or GitHub push was performed.

## 23 October 2026 — actual D silhouette and continuous wordmark transition

- User confirmed the cinematic sequence is visible, identified the incorrect inner cut in the approximated mark, and requested assembling the actual D followed by a seamless transition into DigiSpine.
- Inspected supplied PNGs. The large `FAVICON.png` contains the clear original mark; traced its alpha boundary into outer and inner vector contours. Replaced the guessed logo across the site and favicon with this shared source. Original PNG files remain unchanged.
- Replaced spinal-bar geometry with 14 extruded logo fragments. Scanline tessellation preserves the connected internal cut, with bevels, front/back faces and closed slice caps.
- Changed choreography to assemble and hold the D, move and scale it to the actual first-letter bounds, reveal IGISPINE, then blend to the identical SVG only after reaching its destination. Added projection checks for center and height alignment.
- Passed build, syntax, local references, unit normals, logo-hole area checks and 11,368 finite draw calls across four widths and 101 progress values. The beveled front covers 96.05% of the source silhouette's filled area.
- The user has not yet visually reviewed this corrected-D revision. Automatic browser access remains blocked; no current screenshots or browser claims were fabricated. Local preview remains running and requires a refresh to load updates.

## 23 October 2026 — cinematic revision after user feedback

- User rejected the first sample as too simple: its animation was limited and the boxed spine felt like a separate GIF. Replanned around a visibly scroll-directed, full-page composition.
- Replaced the homepage with three native-scroll cinematic stages, custom 3D beveled spinal geometry, a moving camera and staggered DigiSpine wordmark assembly. Removed the old looping sculpture interaction from shared JS.
- Added large kinetic typography, a word-illuminating manifesto, four sticky capability chapters, animated CSS/vector artwork and a closing composition. Navigation stays reachable across dark and light sections.
- Added mobile camera framing, landscape layout, manual static view, system reduced-motion support, skip navigation, vector fallback and graphics-context loss handling.
- Retained Services/About/Contact content and local brief-builder functionality. No real business facts or portfolio claims were invented.
- Build, syntax and 73 local page link/asset checks passed. Numeric checks exercised generated geometry and 9,696 draw calls at four viewport sizes and 101 scroll positions through a stub GL context. These are code checks, not rendered visual evidence.
- Automatic browser access review rejected acquiring the local preview, reporting a URL-protocol restriction. Did not attempt alternate browser surfaces or indirect UI access. Asked the user to refresh and report whether the sequence appears; visual/browser regression checks remain pending.
- Updated README, project memory, plan and QA to distinguish revision 2 implementation from revision 1 browser-tested evidence. Kept the existing localhost server running for review.

## 23 October 2026 — preview recovery

- User reported that the local site could not be reached because the verification server had been stopped.
- Restarted `npm run dev` at http://127.0.0.1:4173 and confirmed HTTP 200.
- Left the preview process running for the user's review. No website source changes were needed.

## 23 October 2026 — kickoff

- Verified connected GitHub username at the user's request.
- Cloned `riyan-10/DIGISPINE` directly into the current folder and checked branch, remote and clean status.
- Reviewed the supplied brand board and original page. Discussed a spine-based animated identity and mobile-first interaction.
- User authorized the build and requested an initial plan plus continuous documentation.
- Created `PROJECT_NOTES.md`, `PLAN.md` and these working instructions. Chose a dependency-free four-page local concept with draft copy and a functional brief builder pending real contact details.

## 23 October 2026 — first website concept

- Preserved the original page and every supplied logo asset.
- Built Home, Services, About and Contact with shared templates, metadata, responsive styling and navigation.
- Created the blue spine sculpture entirely in CSS: staggered assembly, floating motion, pointer response and Build/Connect/Grow states. Added pause controls, offscreen suspension, reduced-motion handling and scroll reveals.
- Added native accessible service and FAQ disclosures, brand-story graphics and a three-stage process section.
- Implemented a local brief builder with required fields, email validation, trimmed goal validation, downloadable text file, clipboard action and stale-result invalidation. Disabled fallback submission until JS initializes. No pretend enquiry delivery or invented business details.
- Added dependency-free development server, template renderer, static build, link checks and README.
- Passed syntax/link checks (71 local link/asset references) and the static build. Browser-checked all four pages at 320px, 390px and 1440px without horizontal overflow.
- Exercised mobile navigation/Escape, sculpture state and pause controls, keyboard disclosure, required/whitespace validation, brief generation, actual download, copy and stale-result handling. Read the downloaded test brief to confirm its contents.
- Saved screenshot evidence in `docs/previews/`; documented coverage and outstanding device/production checks in `QA.md`.
- A test-only text download named `digispine-project-brief.txt` was created in the browser's Downloads folder, containing fictional preview data.
- No Git commit, push, live integrations or deployment. Client content, detailed requirements and production setup remain open in `PLAN.md` and `PROJECT_NOTES.md`.
