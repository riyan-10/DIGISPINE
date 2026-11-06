// Vector arrows avoid platform-dependent emoji/text-font presentation on iOS.
const paths={
 northeast:'M7 17 17 7M7 7h10v10',
 down:'M12 4v16m-7-7 7 7 7-7',
 right:'M4 12h16m-7-7 7 7-7 7'
};
export function arrowIcon(direction='northeast') {
 if(!Object.hasOwn(paths,direction))throw new Error('Unknown arrow direction');
 return `<svg class="ui-arrow ui-arrow-${direction}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${paths[direction]}"/></svg>`;
}
export function renderArrowIcons(html) {
 // Preserve tags/attributes and raw scripts/styles; replace only rendered text.
 return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<[^>]+>|[^<]+/gi,part=>part.startsWith('<')?part:part.replace(/[↗↓→][\uFE0E\uFE0F]?/g,char=>arrowIcon({'↗':'northeast','↓':'down','→':'right'}[char[0]])));
}
