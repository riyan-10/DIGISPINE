# DigiSpine colour direction — 27 October 2026

The client replaced the earlier blue direction with white and deep purple. The user supplied `assets/3.png` (wordmark) and `assets/6.png` (D symbol), and requested a restrained, premium colour change with no other website changes.

Both original 6250 × 6250 PNGs have a dominant RGB background of **36, 16, 79 / #24104F**. This sampled colour is the brand reference. Both supplied files remain unchanged. The existing shared D silhouette and animation geometry remain in use; no logo retracing or typography redesign was requested.

| Role | Colour | Application |
| --- | --- | --- |
| Brand | `#24104F` | Main accents, primary buttons, brand card, CTA bands, favicon and browser theme |
| Paper | `#FBFAFC` | Main light surfaces and footer |
| Ink | `#1B1822` | Text on light surfaces |
| Muted ink | `#66616F` | Secondary copy on light surfaces |
| Hairlines | `#DEDBE3` | Light-surface dividers |
| Input boundary | `#918798` | Form controls; 3.30:1 against paper |
| Film base | `#0D0B12` → `#291A3E` | Smooth charcoal/amethyst gradient with subdued lighting |
| Film text | `#FBFAFC`, `#F3EFF8` | White/pearl lettering and logo fallback |
| Violet accent | `#C7B7DF`, `#CBBDE0` | Small accents and highlights on dark surfaces |

The six service cards alternate deep brand purple, pale lavender, charcoal, white, stone and a light neutral. Most purple is concentrated in accents rather than large saturated surfaces. The WebGL D uses pearl/silver material colours with violet reflections; its mesh, light directions, camera, timing and wordmark handoff are unchanged.

The three existing stylesheets carry the palette. Core CSS properties use semantic names `--brand`, `--accent` and `--night`. The older `.blue-text` utility class remains for markup compatibility and now reads `var(--brand)`. Do not use CSS hue filters: those would also recolour neutral surfaces and supplied artwork.

Validation: principal text, button and six service-card paragraph pairs exceed 4.5:1 in source-colour calculations (including the card text opacity). Main body is 16.81:1; muted body is 5.76:1; white on brand purple is 16.64:1. Card focus outlines use the card's foreground colour to remain visible on both light and dark cards. These calculations do not replace browser/device visual review.

Scope verification compared all CSS with the previous commit after removing colour tokens: selectors, geometry, responsive rules, sticky behavior and motion declarations remain identical, apart from the added focus-outline colour rule. Generated page content/markup is identical except browser theme-colour metadata. Timeline, mobile card layout helper, logo contour/mesh and contact handlers are byte-identical. Actual browser rendering and client colour approval remain pending.

## Background refinement after user review

The user subsequently disliked the initial texture. Current backgrounds use layered satin/pearl gradients. Procedural grain and the fine cinematic grid are disabled; the sharp light streak was replaced with a broad, low-opacity radial sheen. Pearl gradients coordinate light cards/page headings, while amethyst/charcoal gradients coordinate the film, closing scene, dark sections, About artwork and CTAs. No new background animation, image asset or blur filter was introduced. All motion, layouts and content remain unchanged.

Film highlights are deliberately dim: a conservative combination of all gradient colour/alpha maxima still provides 4.82:1 for secondary film text. Perceived finish, banding and device rendering need visual review; numerical checks are not a screenshot.
