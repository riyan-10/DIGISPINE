# About page: portfolio-based client review — 1 November 2026

The user authorized using the supplied portfolio content for About, preparing a local version to ask the client whether this is the intended direction. This supersedes the previous short, simplified About copy. Other pages retain their simplified wording. English wording is selected from the PDFs; extraction whitespace and brand capitalization are normalized, and headings/layout are arranged for the website. This is not a claim that every line of either PDF is reproduced.

## Source mapping

| Website area | Source | Treatment |
| --- | --- | --- |
| Hero introduction | Long portfolio p2 | “DigiSpine is the growth department for ambitious businesses.” Brand tagline forms the headline. |
| One-team introduction | Short pp1, 3, 7 | Original service overview, one-team headline, six-services paragraph and discovered/trusted/chosen promise. |
| S.P.I.N.E. | Long p5 | Five original stage names and descriptions, sourced in `scripts/about-content.mjs`. Trademark decoration omitted. |
| Engagement process | Long p12 | All five stages including retainer/project and quarterly review, using original descriptions. |
| Beliefs | Long p14 | Six activity → outcome pairs, displayed as semantic definition-list cards. |
| Kerala / India / GCC / International | Long p13 | Original place descriptions. Delivered India and served UAE are distinct from expanding GCC markets and next European markets. “Delivered / Expanding” is a combined website status label. These are market descriptions, not office addresses. |
| Studio Moments / contact CTA | Existing website | Retained dated Kerala Piravi poster and enquiry links. |

No new team biography, founding date, offices, metrics or client list. The unresolved five-year attribution remains out. Malayalam is a new translation of these selected passages and requires client language review; it is not supplied PDF wording.

## Implementation and checks

Only About content and its Malayalam translation changed for the website in this session, with small reusable data parameters and responsive beliefs/market styles. Shared method/process defaults remain unchanged for other pages. The two original PDFs and brand assets remain untouched. `scripts/about-content.mjs` keeps selected source data separate from simplified shared content.

Built eight pages; full check suite and diff checks pass. Verified introduction, one-team wording, all five method descriptions, all five process descriptions and all six belief pairs against PDF text with whitespace/case normalization. Both About preview routes return HTTP 200. Beliefs use 3→2 columns; markets use 4→2→1 columns with natural height/wrapping and existing reduced-motion/reveal behavior. These source/HTTP/fixture checks are not browser or real-phone rendering verification. Prior browser restriction remains; no bypass. Client review is pending. No push/deployment.

## 4 November 2026 update

Client requested broader business-solutions positioning, app development, grouped Marketing/Development, dedicated DigiSpine.edu and archived-edition replay. This supersedes the earlier agency-only wording/four-page/six-service scope. About introduction/overview was adapted for this new brief; portfolio method, beliefs, work process and market sections remain. Five page types now exist in both languages. See `docs/BUSINESS_AREAS_AND_EDITIONS.md`.
