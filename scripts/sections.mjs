import { LAYERS, METHOD, PACKAGES, STEPS, INDUSTRIES } from './content.mjs';

export const renderLayers = () => `<div class="growth-layers">${LAYERS.map(([title,question,description],i)=>`<article data-reveal><span class="micro">0${i+1}</span><h3>${title}</h3><p class="layer-question">${question}</p><p>${description}</p></article>`).join('')}</div>`;

export const renderMethod = () => `<div class="spine-method">${METHOD.map(([letter,title,description])=>`<article data-reveal><span class="method-letter" aria-hidden="true">${letter}</span><h3>${title}</h3><p>${description}</p></article>`).join('')}</div>`;

export const renderPackages = arrow => `<div class="package-grid">${PACKAGES.map(([title,audience,items])=>`<article class="package" data-reveal><span class="micro">${audience}</span><h3>${title}</h3><ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul><a class="text-link" href="contact.html#start-audit">Discuss ${title.toLowerCase()} ${arrow}</a></article>`).join('')}</div><p class="package-note">Your proposal brings together the services, deliverables and timeline that fit your business. Start with the free audit.</p>`;

export const renderProcess = () => `<div class="engagement-grid">${STEPS.map(([title,description],i)=>`<article data-reveal><span class="micro">0${i+1} /</span><h3>${title}</h3><p>${description}</p></article>`).join('')}</div>`;

export const renderIndustries = () => `<ul class="industry-list" aria-label="Industries we build solutions for">${INDUSTRIES.map(item=>`<li>${item}</li>`).join('')}</ul>`;
