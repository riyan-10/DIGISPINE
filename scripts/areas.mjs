import { SERVICE_AREAS } from './content.mjs';
export function renderAreas(arrow) {
 return `<section class="business-areas wrap" aria-labelledby="areas-heading"><div class="section-top" data-reveal><div class="section-index">Our three areas</div><div><h2 class="section-heading" id="areas-heading">Complete business solutions.</h2><p class="section-intro">Marketing and development for your business, with education coming next.</p></div></div><div class="area-grid">${SERVICE_AREAS.map((area,i)=>`<article class="area-card" data-reveal><span class="micro">0${i+1} / ${area.label}</span><h3>${area.title}</h3><p>${area.description}</p><a class="text-link" href="${area.href}">${area.action} ${arrow}</a></article>`).join('')}</div></section>`;
}
