// Client-supplied short portfolio, page 5. Names are typeset, not recreated logos.
export const CLIENTS = ['Toni & Guy','L12 Salon',"Surgeon's Wing Hair & Skin Clinic",'Sterocs Technical Services, UAE','Mehandi Ladies Salon & Spa, UAE','Three Seconds Pageants & Events','RWEN Interiors','Renting Wheels'];
const escape = text => text.replaceAll('&','&amp;');
export function renderClients() {
 return `<section class="clients-section" id="our-clients" aria-labelledby="clients-heading"><div class="clients-heading wrap"><span class="eyebrow">Our clients</span><h2 id="clients-heading">Brands we’ve grown.</h2><p>Businesses we’ve worked with, across India and the UAE.</p><button class="clients-motion" type="button" data-clients-motion hidden aria-pressed="false">View all brands</button></div><div class="clients-stage" tabindex="0" role="region" aria-label="Client brands"><ul class="clients-ring">${CLIENTS.map((name,i)=>`<li class="client-panel" style="--client-angle:${i*45}deg"><span lang="en">${escape(name)}</span></li>`).join('')}</ul></div></section>`;
}
