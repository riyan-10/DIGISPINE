import { translate } from './translations.js';
const section = document.querySelector('.clients-section');
if (section) {
 const button = section.querySelector('[data-clients-motion]');
 const desktop = matchMedia('(min-width: 801px)');
 const reduced = matchMedia('(prefers-reduced-motion: reduce)');
 let showAll = false;
 function update() {
  const available = desktop.matches && !reduced.matches && !document.body.classList.contains('static-motion');
  section.classList.toggle('clients-animated', available && !showAll);
  button.hidden = !available;
  button.setAttribute('aria-pressed', String(showAll));
  button.textContent = translate(showAll ? 'Rotate brands' : 'View all brands', document.documentElement.lang);
 }
 button.addEventListener('click', () => { showAll = !showAll; update(); });
 desktop.addEventListener('change', update);
 reduced.addEventListener('change', update);
 new MutationObserver(update).observe(document.body, { attributes: true, attributeFilter: ['class'] });
 if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => section.classList.toggle('clients-visible', entries[0].isIntersecting)).observe(section);
 } else section.classList.add('clients-visible');
 document.addEventListener('visibilitychange', () => section.classList.toggle('clients-tab-hidden', document.hidden));
 update();
}
