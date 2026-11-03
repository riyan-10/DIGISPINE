# Plain-language and bilingual website — 1 November 2026

## Implemented scope

English is the initial default. Four English pages remain at their existing URLs; their complete Malayalam equivalents are at `ml/index.html`, `ml/services.html`, `ml/about.html`, and `ml/contact.html`. Both sets are static, readable without JavaScript and generated into `dist/`. The development server allows only these public routes and assets.

A visible English / മലയാളം control stays in the header, including on phones. Native links open the equivalent page. The small pre-paint `assets/language.js` remembers an explicit choice in localStorage, preserves query/hash on a preference redirect, and safely tolerates blocked storage. An explicit `?lang=en` overrides a stored Malayalam preference. No browser-language auto-detection. Malayalam links retain the current locale; section links remain on the correct current page despite the root asset base URL.

English copy identifies DigiSpine as a Kerala digital marketing agency and explains tangible services. The six service IDs remain stable: branding/logo design, digital marketing, online advertising, video production, website development, and enquiries/follow-up. Clear Services/Contact links are available in the opening; service cards, D assembly and native scroll remain. About/process/packages and the contact journey use simpler explanations. The five-step S.P.I.N.E. method is explained in everyday terms rather than assumed knowledge.

## Editing

- Page templates: `scripts/home.mjs`, `scripts/pages.mjs`, shared header/footer in `scripts/render.mjs`.
- Shared service/process content: `scripts/content.mjs`, `scripts/sections.mjs`.
- Malayalam dictionary and runtime labels: `assets/translations.js`. Page generation in `scripts/localize.mjs` fails when a new translatable static string is missing. Brand/product names and original English review are intentional exceptions.
- Hero/motion/seasonal labels and form status/custom validation text use the same translation dictionary. Browser-owned native validation messages follow the browser's own language settings.
- Enquiry text and email subject are localized. Native WhatsApp/email links only prepare a reviewed message; the visitor completes sending. No automatic submission or new backend.
- Malayalam uses an OS font stack (Noto Sans Malayalam, Malayalam Sangam MN, Nirmala UI, then sans-serif), normal spacing, roomier line height and responsive heading sizes. No font service requests. The logo/wordmark retain brand typography.
- `assets/bilingual.css` contains header, language typography and testimonial styles. System reduced motion and existing static modes remain.

## Testimonial

One text-based customer review appears on Home after the services and before the closing contact section, at `#customer-review`. A single five-star rating, reviewer name and business are supplied by the client source. No inferred date, direct Google URL, verification badge or aggregate score. Malayalam quote is labelled as a translation with original English in a native expandable disclosure. Exact transcription/source/hash are in `docs/TESTIMONIAL_SOURCE.md`. The source poster is preserved locally and is not used as the webpage review image.

## Validation and pending review

Build/full automated checks pass, including eight pages/228 local references, static translation coverage, bilingual enquiry event fixtures, menu/Escape/focus fixtures, language preference/default/override/blocked-storage checks, per-page links/anchors/metadata and source quote preservation. Original logo geometry, mobile sticky-card and seasonal timing/reduced-motion fixtures pass. All eight preview routes return HTTP 200. These are not browser screenshots or real-device tests; earlier browser URL-policy restriction was not bypassed.

Pending: client English/Malayalam wording and translated-review review, actual phone/desktop font/rendering/scroll/screen-reader checks, and optional direct Google review URL if supplied. Copy remains draft. No GitHub push/deployment for this revision; local server remains running for review.

## About content follow-up

On 1 November the user requested an About review version using the portfolio wording. About now uses selected original company/method/process/belief/market passages with new Malayalam translations; other pages retain simplified content. See `docs/ABOUT_PORTFOLIO.md` for sources, adaptations and pending approval. Still local only.

## 4 November 2026 update

Client requested broader business-solutions positioning, app development, grouped Marketing/Development, dedicated DigiSpine.edu and archived-edition replay. This supersedes the earlier agency-only wording/four-page/six-service scope. About introduction/overview was adapted for this new brief; portfolio method, beliefs, work process and market sections remain. Five page types now exist in both languages. See `docs/BUSINESS_AREAS_AND_EDITIONS.md`.
