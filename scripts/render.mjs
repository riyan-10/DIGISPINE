import { writeFile } from 'node:fs/promises';
import { renderHome } from './home.mjs';
import { SERVICES, CONTACT, buildAuditLinks } from './content.mjs';
import { renderServices, renderAbout, renderContact } from './pages.mjs';
import { LOGO_PATH, LOGO_VIEWBOX } from '../assets/brand-shape.js';
const root = new URL('../', import.meta.url);
const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
const symbolPath = `<path d="${LOGO_PATH}" fill-rule="evenodd"/>`;
const symbol = (className) => `<svg class="${className}" viewBox="${LOGO_VIEWBOX}" aria-hidden="true">${symbolPath}</svg>`;
const brand = () => `<a class="brand" href="index.html" aria-label="DigiSpine home">${symbol('brand-symbol')}<span class="brand-word">DIGI<span>SPINE</span></span></a>`;
function header(active) {
  const links = [['home','index.html','Home'],['services','services.html','Services'],['about','about.html','About']].map(([key,url,label]) => `<a href="${url}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header wrap">${brand()}<button class="menu-toggle" type="button" aria-controls="site-navigation" aria-expanded="false">Menu <span aria-hidden="true">＋</span></button><nav class="navigation" id="site-navigation" aria-label="Main navigation">${links}<a class="nav-cta" href="contact.html" ${active === 'contact' ? 'aria-current="page"' : ''}>Free growth audit ${arrow}</a></nav></header>`;
}
const directAudit = buildAuditLinks('Hi DigiSpine, I would like a free growth audit.');
function footer() {
  return `<footer class="site-footer wrap"><div class="footer-main"><div>${brand()}<p>We engineer brands that get<br>discovered, trusted and chosen.</p></div><div class="footer-links"><div><span class="micro">Explore</span><a href="index.html">Home</a><a href="services.html">Services</a><a href="about.html">About DigiSpine</a><a href="services.html#plans">Ways to work together</a></div><div><span class="micro">Start with a free audit</span><a href="contact.html#start-audit">Request a growth audit ↗</a><a href="${directAudit.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp: ${CONTACT.phone}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><a href="tel:${CONTACT.telephone}">Call ${CONTACT.phone}</a></div></div></div><div class="footer-bottom"><span>© 2026 DigiSpine</span><span>Rooted in Kerala. Working across borders.</span><span>Brand. Discovery. Demand. Conversion. Growth.</span></div></footer>`;
}
function cta(title = 'Find the gaps.<br>Make your next move.') {
  return `<section class="cta-band wrap"><div><div class="eyebrow">Start with a free growth audit</div><h2>${title}</h2></div><a class="button button-light" href="contact.html#start-audit">Get your free audit ${arrow}</a></section>`;
}
const pageHero = (eyebrow,title,description,meta) => `<section class="page-hero wrap"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><div class="page-hero-bottom"><p>${description}</p><span class="micro">${meta}</span></div></section>`;
const home = renderHome({ arrow, symbol, services: SERVICES });
const servicesPage = renderServices({ pageHero, arrow, cta });
const about = renderAbout({ pageHero, arrow, symbol, cta });
const contact = renderContact({ pageHero, arrow });
const pages = [
  ['home','DigiSpine — The digital backbone of your business','Brand engineering, digital marketing, performance campaigns, video, websites and growth systems. Start with a free DigiSpine growth audit.',home],
  ['services','Services — DigiSpine','Six connected DigiSpine services: brand engineering, digital marketing, performance marketing, video production, website development and business growth systems.',servicesPage],
  ['about','About — DigiSpine','Meet the DigiSpine Growth System: Strategy, Positioning, Intelligence, Navigation and Expansion. Rooted in Kerala, working across borders.',about],
  ['contact','Free growth audit — DigiSpine','Request your free DigiSpine growth audit. Share your business and website through WhatsApp or email, or call +91 9074555720.',contact]
];
for (const [name,title,description,content] of pages) {
  const html = `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${description}"><meta name="theme-color" content="#155ca2"><meta name="robots" content="noindex,nofollow"><title>${title}</title><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/styles.css"><script>document.documentElement.classList.add('js');</script><script type="module" src="assets/app.js"></script>${name === 'home' ? '<link rel="stylesheet" href="assets/cinema.css"><script type="module" src="assets/cinema.js"></script>' : ''}<link rel="stylesheet" href="assets/portfolio.css"></head><body class="${name === 'home' ? 'cinematic-home' : 'interior-page'}">${header(name)}<main id="main">${content}</main>${footer()}</body></html>\n`;
  await writeFile(new URL(name === 'home' ? 'index.html' : `${name}.html`, root), html);
}
console.log('Rendered Home, Services, About and Contact.');
