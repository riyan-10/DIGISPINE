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
- `assets/styles.css`: shared responsive design and interior-page styling.
- `assets/cinema.css`: full-screen brand sequence and responsive chapter layouts.
- `assets/cinema.js`: native-scroll timeline, typography, motion preferences and chapter choreography.
- `assets/brand-shape.js`: logo contours traced from the supplied favicon, including the actual inner cut.
- `assets/logo-geometry.js`: closed, beveled logo fragments preserving the cutout.
- `assets/spine-renderer.js`: local WebGL renderer, lighting, camera and D-to-wordmark alignment. Falls back to vector graphics when unavailable (filename retained from the earlier spine concept).
- `assets/app.js`: shared menu, reveal animation and brief builder.
- `index.html`, `services.html`, `about.html`, `contact.html`: generated static pages, also usable without a build.
- `archive/original-index.html`: unchanged original website.
- `Logos/`: untouched supplied brand assets.

## Project memory

Read `PROJECT_NOTES.md` for context and decisions, `PLAN.md` for tasks, `CHANGELOG.md` for session history, and `QA.md` for verification. `AGENTS.md` tells future coding sessions to maintain these records.

## Before launch

The existing Vercel project auto-deploys `main`. `vercel.json` declares a static site, runs `npm run build`, and publishes `dist/`. The output directory is tracked in configuration so a dashboard default such as `public` cannot conflict with the build. Node is pinned to the supported 24.x major.

Content and service offerings are provisional. The Contact page prepares a local text brief; it does **not** send enquiries or store personal data. The prototype has `noindex,nofollow` metadata. Connect real enquiry delivery, approve business content and contact details, add appropriate legal/social metadata, then revisit indexing before launch. No CMS, analytics, live backend, external fonts or third-party animation libraries are included.

Publishing and pushing to GitHub remain separate steps requiring a user request.
