# DigiSpine website

A four-page local design concept for the DigiSpine freelance project. Revision 2 replaces the restrained split hero with a full-screen, scroll-directed brand sequence: fragments assemble the actual DigiSpine D, which moves into the wordmark as the remaining letters emerge. Sticky service chapters continue the movement. Dependency-free HTML/CSS/JavaScript.

## Run

Requires Node.js 24.x. No dependency installation is required.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Stop the server with Ctrl+C. Only website pages and assets are exposed by the development server.

```sh
npm run render  # regenerate the four HTML pages after template changes
npm run check   # JavaScript syntax and local page/link checks
npm run build   # regenerate pages and copy public files to dist/
```

## Source

- `scripts/render.mjs`: page content and shared HTML templates; edit here, then render.
- `scripts/home.mjs`: cinematic homepage content and structure.
- `scripts/content.mjs`: shared service catalogue and client-sourced methods, layers, packages and process.
- `scripts/pages.mjs`, `scripts/sections.mjs`: sourced interior pages and reusable content sections.
- `assets/styles.css`: shared responsive design and interior-page styling.
- `assets/portfolio.css`: responsive layouts for the six services, methods, packages and audit enquiry.
- `assets/cinema.css`: full-screen brand sequence and responsive chapter layouts.
- `assets/cinema.js`: native-scroll timeline, typography, motion preferences and chapter choreography.
- `assets/brand-shape.js`: logo contours traced from the supplied favicon, including the actual inner cut.
- `assets/logo-geometry.js`: closed, beveled logo fragments preserving the cutout.
- `assets/spine-renderer.js`: local WebGL renderer, lighting, camera and D-to-wordmark alignment. Falls back to vector graphics when unavailable (filename retained from the earlier spine concept).
- `assets/app.js`: shared menu, reveal animation and reviewed audit-request builder.
- `assets/audit-request.js`: supplied contact destinations and Unicode-safe WhatsApp/email handoff links.
- `index.html`, `services.html`, `about.html`, `contact.html`: generated static pages, also usable without a build.
- `archive/original-index.html`: unchanged original website.
- `Logos/`: untouched supplied brand assets.

## Project memory

Read `PROJECT_NOTES.md` for context and decisions, `PLAN.md` for tasks, `CHANGELOG.md` for session history, and `QA.md` for verification. `AGENTS.md` tells future coding sessions to maintain these records.

## Before launch

The existing Vercel project auto-deploys `main`. `vercel.json` declares a static site, runs `npm run build`, and publishes `dist/`. The output directory is tracked in configuration so a dashboard default such as `public` cannot conflict with the build. Node is pinned to the supported 24.x major.

Copy is adapted from the two supplied client portfolios; source-page references and pending evidence are recorded in `docs/CONTENT_REVIEW.md`. The Contact page prepares an audit request for review, then gives the visitor WhatsApp/email links to send it from their own app. Download and copy remain available. The page does not automatically transmit or persist the request, and it does not produce an automated audit score. Direct phone, email and WhatsApp routes work without JavaScript. Source PDFs stay local and are ignored by Git.

The review-stage site retains `noindex,nofollow`. Final package details, client/project evidence, legal/social metadata, real-device checks and any future server-based form/CMS scope remain to be agreed. No CMS, analytics, live backend, external fonts or third-party animation libraries are included.

Publishing and pushing to GitHub remain separate steps requiring a user request.
