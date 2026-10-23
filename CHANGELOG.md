# Work log

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
