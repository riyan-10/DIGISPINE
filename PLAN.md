# DigiSpine implementation plan

## Vercel output-directory fix — 23 October 2026

- [x] Diagnose successful `dist/` build versus Vercel's configured `public` expectation.
- [x] Add version-controlled Vercel output/build settings and pin Node 24.x.
- [x] Validate configuration, source checks and a fresh isolated static build (four pages and required modules in `dist/`).
- [ ] Push correction to `main`, which the user confirmed triggers Vercel automatically.
- [ ] Check Vercel's GitHub deployment status and record the result.

## GitHub checkpoint — 23 October 2026

- [x] User explicitly authorized pushing the current project to the existing repository.
- [x] Verify connected account has write access and rerun source checks/build.
- [x] Commit/push website, project records and preserved original to `main` (source commit `1518543`).
- [x] Confirm GitHub accepted the guarded branch update and record the successful source checkpoint.

## Revision 2 — cinematic direction (current)

### Steering after the first live review

User confirmed the sequence is visible. They identified an incorrect inner logo cut and requested the actual D assembling, then moving seamlessly into the DigiSpine wordmark. This supersedes the spinal-object assembly as the main scene.

- [x] Trace the supplied favicon's outer contour and inner spinal cut; replace the approximate mark everywhere.
- [x] Split that shape into 14 real extruded 3D fragments and assemble the D.
- [x] Move and scale the same D into its final wordmark position; reveal the remaining letters without a hard scene switch.
- [x] Check geometry, inner-cut area, final projected alignment and build.
- [x] User reviewed the corrected-D concept positively. Agent browser access remains blocked; comprehensive device/interaction verification stays pending.
- [ ] Obtain client concept feedback and final content/page/feature confirmation. Recommended: send a short recording and content request together; not yet sent or client-approved.

The user rejected the restrained first sample: movement felt limited and the boxed spine felt like an unrelated looping graphic. The new direction is an art-led website with visibly scroll-controlled assembly integrated into the page.

- [x] Record feedback and revised creative direction before implementation.
- [x] Replace the split hero with a full-viewport scene and native sticky scroll sequence.
- [x] Build a real-time 3D spinal sculpture: dispersed components → connected spine → brand reveal (implemented; appearance pending browser access).
- [x] Choreograph large typography, camera movement and segment positions to scroll, reversible in both directions.
- [x] Carry visible motion into the manifesto and stacked service chapters.
- [x] Frame the sequence for mobile; include skip, reduced-motion and graphics fallbacks (implemented; device checks pending).
- [ ] Recheck all four pages, keyboard navigation, phone widths and brief builder.
- [x] Update documentation and leave the local preview running.
- [ ] Capture the new sequence and check scroll feel / real shader rendering. Browser access was rejected by the automatic URL-policy gate; user review requested. Do not treat earlier screenshots/QA as revision 2 verification.

## Phase 1 — establish direction
- [x] Clone repository and verify baseline.
- [x] Review supplied brand board and existing page.
- [x] Record brief, assumptions and pending requirements.
- [x] Choose four-page structure and spine-based visual concept.

## Phase 2 — build the local concept
- [x] Preserve the original page in `archive/`.
- [x] Build shared responsive design system and accessible navigation.
- [x] Home: signature animated spine, positioning, capabilities and process.
- [x] Services: proposed capabilities and accessible service detail interaction.
- [x] About: brand story, principles and working process; no invented team claims.
- [x] Contact: validated brief builder, download and copy actions; honest delivery status.
- [x] Reduced-motion support, mobile layouts and keyboard interaction (OS preference toggle still to be tested; see QA).
- [x] Add local development and reproducible static build scripts.

## Phase 3 — verify and hand off
- [x] Check local URLs, assets and JavaScript syntax.
- [x] Inspect desktop and phone-sized layouts in a browser.
- [x] Exercise navigation, service disclosure, form validation and brief actions.
- [x] Check horizontal overflow at 320, 390 and 1440px; inspect reduced-motion implementation.
- [ ] Exercise actual OS reduced-motion setting on a real device.
- [x] Record actual validation outcomes and remaining limitations.
- [x] Provide local preview instructions, screenshots and clear next steps.
- [x] Restart the local preview after the user reported it unreachable; verify HTTP 200 and leave it running for review.

## Phase 4 — after client input
- [ ] Review/approve concept and provisional service list.
- [ ] Replace draft copy and add approved real portfolio content.
- [ ] Confirm dynamic/CMS scope and implement only agreed features.
- [ ] Connect and test real enquiry delivery and spam protection.
- [ ] Confirm domain, hosting, legal content, metadata and social preview.
- [ ] Test real devices, performance and launch checklist.
- [ ] Publish only when requested; document ownership and maintenance.
