import { renderArrowIcons } from '../assets/icons.js';
import { missing, malayalamHTML } from './localize.mjs';
import { writeFile, mkdir } from 'node:fs/promises';
import { renderHome } from './home.mjs';
import { SERVICES, CONTACT, buildAuditLinks } from './content.mjs';
import { renderServices, renderAbout, renderContact, renderEdu } from './pages.mjs';
import { LOGO_PATH, LOGO_VIEWBOX } from '../assets/brand-shape.js';
const root = new URL('../', import.meta.url);
const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
const symbolPath = `<path d="${LOGO_PATH}" fill-rule="evenodd"/>`;
const symbol = (className) => `<svg class="${className}" viewBox="${LOGO_VIEWBOX}" aria-hidden="true">${symbolPath}</svg>`;
const brand = () => `<a class="brand" href="index.html" aria-label="DigiSpine home">${symbol('brand-symbol')}<span class="brand-word">DIGI<span>SPINE</span></span></a>`;
function header(active) {
  const page=active==='home'?'index':active;
  const language=`<nav class="language-switch" aria-label="Language"><a href="${page}.html?lang=en" data-language="en" aria-current="true" lang="en" hreflang="en">English</a><span aria-hidden="true">/</span><a href="ml/${page}.html?lang=ml" data-language="ml" lang="ml" hreflang="ml">മലയാളം</a></nav>`;
  const links = [['home','index.html','Home'],['services','services.html','Services'],['about','about.html','About'],['edu','edu.html','Edu']].map(([key,url,label]) => `<a href="${url}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header wrap">${brand()}${language}<button class="menu-toggle" type="button" aria-controls="site-navigation" aria-expanded="false">Menu <span aria-hidden="true">＋</span></button><nav class="navigation" id="site-navigation" aria-label="Main navigation">${links}<a class="nav-cta" href="contact.html" ${active === 'contact' ? 'aria-current="page"' : ''}>Contact ${arrow}</a></nav></header>`;
}
const directAudit = buildAuditLinks('Hi DigiSpine, I would like a free business review.');
function footer() {
  return `<footer class="site-footer wrap"><div class="footer-main"><div>${brand()}<p>Complete business solutions.<br>The Digital Backbone.</p></div><div class="footer-links"><div><span class="micro">Explore</span><a href="index.html">Home</a><a href="services.html">Services</a><a href="about.html">About DigiSpine</a><a href="edu.html">DigiSpine.edu</a><a href="services.html#plans">Ways to work together</a></div><div><span class="micro">Start with a free audit</span><a href="contact.html#start-audit">Request a free review ↗</a><a href="${directAudit.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp: ${CONTACT.phone}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><a href="tel:${CONTACT.telephone}">Call ${CONTACT.phone}</a></div></div></div><div class="footer-bottom"><span>© 2026 DigiSpine</span><span>Rooted in Kerala. Working across borders.</span><span>Marketing · Development · Education</span></div></footer>`;
}
function cta(title = 'Tell us about<br>your business.') {
  return `<section class="cta-band wrap"><div><div class="eyebrow">Start with a free business review</div><h2>${title}</h2></div><a class="button button-light" href="contact.html#start-audit">Get your free review ${arrow}</a></section>`;
}
const pageHero = (eyebrow,title,description,meta) => `<section class="page-hero wrap"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><div class="page-hero-bottom"><p>${description}</p><span class="micro">${meta}</span></div></section>`;
const home = renderHome({ arrow, symbol, services: SERVICES });
const servicesPage = renderServices({ pageHero, arrow, cta });
const about = renderAbout({ pageHero, arrow, symbol, cta });
const edu = renderEdu({pageHero,arrow});
const contact = renderContact({ pageHero, arrow });
const pages = [
  ['edu','DigiSpine.edu — Education','DigiSpine.edu is the education space from DigiSpine. Course information and schedules will be shared when available.',edu],
  ['home','DigiSpine — The digital backbone of your business','DigiSpine provides complete business solutions: marketing, branding, websites, app development and customer follow-up. Explore DigiSpine.edu for upcoming courses.',home],
  ['services','Services — DigiSpine','Explore DigiSpine Marketing and Development services, including branding, digital marketing, websites and apps, plus the dedicated DigiSpine.edu page.',servicesPage],
  ['about','About — DigiSpine','Meet DigiSpine, your digital backbone for marketing, development and education. Complete business solutions with roots in Kerala.',about],
  ['contact','Free business review — DigiSpine','Request your free DigiSpine growth audit. Share your business and website through WhatsApp or email, or call +91 9074555720.',contact]
];
await mkdir(new URL('ml/',root),{recursive:true});
for (const [name,title,description,content] of pages) {
  const html = `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${description}"><meta name="theme-color" content="#24104f"><meta name="robots" content="noindex,nofollow"><title>${title}</title><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/styles.css"><link rel="stylesheet" href="assets/bilingual.css"><script src="assets/language.js"></script><script>document.documentElement.classList.add('js');</script><script type="module" src="assets/app.js"></script>${name === 'home' ? '<link rel="stylesheet" href="assets/cinema.css"><script type="module" src="assets/cinema.js"></script>' : ''}<link rel="stylesheet" href="assets/portfolio.css">${name === 'home' || name === 'about' ? '<link rel="stylesheet" href="assets/festival.css">' : ''}</head><body class="${name === 'home' ? 'cinematic-home' : 'interior-page'}">${header(name)}<main id="main">${content}</main>${footer()}</body></html>\n`;
  const filename=name==='home'?'index.html':`${name}.html`;
  const alternates=`<link rel="alternate" hreflang="en" href="${filename}"><link rel="alternate" hreflang="ml" href="ml/${filename}">`;
  const rendered=html.replace('</head>',alternates+'</head>');
  await writeFile(new URL('ml/'+filename,root), renderArrowIcons(malayalamHTML(rendered,filename)));
  await writeFile(new URL(name === 'home' ? 'index.html' : `${name}.html`, root), renderArrowIcons(rendered));
}
if(missing.size){console.error('Missing Malayalam:',JSON.stringify([...missing],null,2));throw Error('Incomplete translations');}
console.log('Rendered five pages in English and Malayalam.');
