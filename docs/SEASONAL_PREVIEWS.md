# Kerala Piravi comparison — local only, 1 November 2026

## Release selection — 1 November 2026

User selected Cinematic and requested GitHub/Vercel publication. Only Cinematic is shipped as a seasonal runtime; comparison toolbar and alternate-mode code/styles are removed. Live date window ends 2 November 2026 at 00:00 IST; normal homepage resumes automatically, including currently open Home tabs. Poster remains in About. Local `?festival=cinematic` and `?festival=normal` remain available for development. The intro plays on each page load; once-per-session was an earlier proposal, not an approved requirement. All earlier comparison descriptions below are historical. Responsive/code checks pass; real-phone rendering remains pending.

## Current revision: lower greeting and cleanup

The Cinematic greeting settles farther down/right to reduce collision with the restored original headline. Phone and short-landscape positioning have separate targets. Its “View our greeting” button is removed; the poster remains in About → Studio Moments. The palm control remains accessible below the docked greeting, and Skip transfers keyboard focus to that control (or the labelled region in reduced motion).

The intact two-tree canopy uses a more visible −3° to +6.5° wind/skew over 4.8 seconds. It still pauses and respects reduced motion. The About outline/source-credit paragraph was removed at the user's explicit request; source links, CC BY 4.0 attribution and modification details remain in this document and `assets/kerala-shape.js`.

Full checks/build pass; numerical/fixture checks are not visual evidence. Review at http://127.0.0.1:4173/?festival=cinematic. No commit/push/deployment. The earlier iterations below are historical and their CTA/old wind/old placement descriptions are superseded.

## Latest five-point refinement

User requested smoother edges, intact overlapping leaves, movement of the finished greeting to its right-hand poster position, half the draw time and restoration of the original DigiSpine hero afterward. All five are implemented in the local Cinematic preview:

- Filled ink contours now use subpixel perimeter smoothing and cubic Bézier curves, replacing pixel-edge polylines; geometric precision is requested and the previous text shadow filter removed. Source character shapes remain the reference; each smoothed part retains source ink area within 3%.
- The original two palms are rendered as **one continuous source canopy**, with shared wind deformation. Their overlapping leaf join is no longer split between independently transformed cutouts. Two trees remain visible; there is no internal seam to open during wind.
- Handwriting duration is **3.1 seconds**, exactly half of 6.2, followed by a **0.9-second** responsive move/scale to the poster's right-hand negative space. Gallery/Pause controls settle under the small greeting. Resize recalculates its position from untransformed layout dimensions.
- After docking, the standard headline, live D renderer, native scroll/wordmark sequence and film controls return. The backdrop/greeting remain subdued behind the original scene. The page keeps its original long story height from the start, avoiding a mid-scroll document-height jump. A layout footprint preserves the heading's origin when controls become absolutely positioned.
- Reduced-motion users get the complete, docked greeting and normal static site immediately. Skip, pause/resume and gallery navigation remain available. Normal/Softer/Recommended options and original poster are unchanged.

Current trace: 17 filled parts (16 letter components, one joined two-tree canopy), 105 pen paths, all 89,748 extracted source ink pixels retained before smoothing. A 2× rasterization of the new **art only** was inspected for edge/leaf continuity; actual browser composition, dock feel and device keyboard behavior still require visual review.

Tests cover smooth contour area, intact canopy, exact half duration, dock bounds at 12 viewport sizes, automatic 3100ms → 900ms → resume sequencing, Skip/reduced-motion resume, focus continuity and existing geometry/expiry/host behavior. Build/checks pass. HTTP checks return 200 for the route, updated lettering module and dock-layout helper. Existing local server was confirmed running; a duplicate start correctly reported its port occupied. No push/deployment.

## Latest revision: poster calligraphy hero

The user rejected the moving background fronds. Their revised comparison is now:

1. `?festival=cinematic`: **new on-load poster lettering**. The actual Malayalam artwork and its two coconut trees are traced from the supplied JPEG, not typeset with a substitute font or generated text. A 6.2-second automatic ink/pen-mask reveal draws the artwork; two separated tree shapes sway continuously with anchored roots. “View our greeting” becomes keyboard/click accessible after the reveal and opens `about.html#studio-moments`. Skip handwriting, Pause/Resume palms, reduced-motion and offscreen/tab-hidden pausing are implemented. This variant uses a single viewport seasonal hero; the usual D panels/WebGL are not started for it.
2. `?festival=soft`: **the previous cinematic Kerala-to-D sequence**, unchanged in concept and promoted to the softer option. The rejected palm-shadow backdrop/code was removed completely.
3. `?festival=recommended`: existing small outline/greeting concept.

The earlier descriptions below are historical. Current mode URLs and review controls remain the same; all changes are still local, with no release authorized.

### Original-art tracing

`scripts/trace-festival-lettering.py` reads crop `(1135,670,1930,1110)` of the supplied JPEG, separates two palms and lettering, traces filled contours and derives centerline reveal strokes. Output: `assets/poster-calligraphy.js`, 795 × 440 SVG frame, 18 parts (16 lettering components, two palms), 105 pen strokes. All 89,748 thresholded source ink pixels are retained; contour simplification preserves each part's area within 1%. This preserves the source calligraphy style and composition rather than substituting a generic Malayalam font. JPEG antialiasing is simplified to vector contours with subpixel tolerance.

The revealed artwork remains stationary; only the two source palms have low-amplitude rotate/skew wind cycles (6.4/5.6 seconds). Motion can be paused and stops under reduced motion. Static users see the complete lettering and gallery link immediately. The original poster/public gallery JPEG remain byte-identical.

### Text-free hero background

Built-in **image_gen**, following the imagegen skill, edited the supplied poster into a wide text-free composition. It preserves the visual subjects (Kathakali, Kerala/backwaters/houseboat, palms, architecture, purple ambience), with expanded negative space for the separate lettering. It is a generated/recomposed treatment, not a pixel-identical clean plate. The generated asset was visually inspected: no remaining text/logo/service icons, wide composition and appropriate negative space.

Final project asset: `assets/kerala-piravi-hero.jpg` (1672 × 941; 225,205 bytes), exported from `/Users/user/.codex/generated_images/01a1695a-930a-7d13-9fea-2659686d96dd/exec-c38a0425-4978-43f4-ac6d-497e2ba221f4.png`. Background opacity and vignette keep the source lettering readable. The generated original remains in place.

Exact built-in edit prompt:

> Use case: precise-object-edit. Asset type: cinematic website hero background, landscape 16:9. Edit target: the supplied DigiSpine Kerala Piravi poster. Remove ALL text, logos, letters, calligraphy, slogans, service icons, dividers and typography. Also remove the two WHITE coconut-tree ornaments attached to the Malayalam calligraphy; they will be animated separately on the website. Preserve the actual landscape imagery: the Kathakali performer at left, the Kerala-shaped landscape/backwaters with real green palms and houseboat, the traditional Kerala building near the lower right, water reflections, purple night ambience. Recompose/extend the portrait scene to a wide landscape website background; keep the Kathakali performer in the left quarter, the Kerala landscape mainly left of center and architecture low on the right. Leave generous uncluttered dark-purple negative space across the center/right and upper half for separate animated white lettering. Rich deep brand purple #24104F, restrained soft lavender illumination and natural green foliage, premium and atmospheric rather than neon. The landscape should gently dissolve into dark purple at the top and edges. No text anywhere, no brand mark, no watermark. This is only the background image, not a webpage mockup.

### Current validation

Full checks/build pass. Updated DOM fixtures cover initially inert/hidden CTA, Skip enabling it, keyboard focus continuity, pause/resume, reduced-motion state and dedicated hero flag; trace checks cover source area/ink, two palms and pen timing. Earlier geometry/expiry/host tests remain. Still asset mask frames at 0.5/1.8/3/4.5/6.2 seconds were inspected to assess progressive ink reveal. These are **asset-level** checks, not browser screenshots. HTTP 200/MIME checks pass for the new hero assets and preview route using the existing allowed command; no new command approval was requested. Actual browser appearance, motion realism and device layout remain pending user review; prior browser restriction was not bypassed.

---

The user requested three working concepts, in order, for local comparison before choosing. Nothing in this session is authorized for GitHub push or public deployment.

1. `http://127.0.0.1:4173/?festival=cinematic` — coast outline draws on entry; native scrolling reshapes Kerala into the actual D, opens its inner cut and moves the silhouette into the live WebGL D's front-plane projection. SVG/3D overlap crossfades over scroll progress .28–.34. The existing brand handoff then continues on a remapped timeline. Intro uses the poster's “Our land / Our pride / Our growth” wording.
2. `http://127.0.0.1:4173/?festival=soft` — existing D scene with gently swaying translucent palm-frond linework and a Malayalam greeting/gallery link. The fronds pause offscreen and stop in static/reduced-motion mode.
3. `http://127.0.0.1:4173/?festival=recommended` — existing D scene with a small drawing Kerala outline beside the greeting/gallery link.

`?festival=normal` restores the normal opening for comparison. A loopback-only toolbar links all versions and replays the current version from the top. Preview queries cannot activate a seasonal concept on any other host. The review deliberately permits replay/inspection after the holiday; once-per-session behavior for the ultimately selected production version remains pending.

The rejected full Home poster feature was removed. The unchanged image is now in About → Studio Moments: `http://127.0.0.1:4173/about.html#studio-moments`. It remains a dated gallery item and is not tied to the homepage expiry window.

## Calendar and release

No live variant is selected (`selectVariant` defaults `liveVariant` to null). Future selection must be explicit, after review. The model's production window is `[2026-11-01T00:00:00+05:30, 2026-11-02T00:00:00+05:30)`. A chosen live variant would stop at 00:00 on 2 November in Asia/Kolkata; an open tab is scheduled to reload then. The normal site is the default outside that interval. Do not push the comparison tools as a final selected design without review.

## Map source / attribution

Kerala outline adapted from [geohacker/kerala — state.geojson](https://github.com/geohacker/kerala/blob/master/geojsons/state.geojson), source blob `bfb6f682644f8199bcb630d20c1a01a41fc9040c`, based on [DataMeet India community maps](https://github.com/datameet/maps). The upstream [data licence](https://github.com/datameet/maps#data-license) is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Changes: outer state ring projected to a local SVG frame with longitude scaled by cosine of mean latitude, simplified from 2,796 to 300 vertices with a 1.6-unit tolerance, then resampled for decorative morphing. Runtime data is bundled in `assets/kerala-shape.js`; no map service/network dependency. Attribution and modification notice also appear beside the About gallery item. The D's original supplied-brand contour remains the final morph shape, including its original inner cut.

## Verification limits

Existing checks/build pass (88 references). Seasonal tests cover exact IST boundaries, host/query isolation, all modes, static greeting restoration, toolbar links, finite morphs, exact D endpoint, monotonic timeline, complementary fade weights and SVG-to-WebGL front-plane alignment across 12 viewport combinations. Controller tests use DOM fixtures; renderer tests use a stub GL context. These do not verify real CSS rendering, shader compilation, silhouette aesthetics, touch/keyboard behavior or perceived handoff smoothness.

HTTP readiness checks return 200 and correct MIME types for all three query routes, scripts/CSS, gallery and JPEG. Browser access had previously been rejected and was not bypassed. User visual comparison remains required. Poster original and public copy remain byte-identical.
