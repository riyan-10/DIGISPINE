import { buildAuditRequest, buildAuditLinks } from './audit-request.js';

const motion = matchMedia('(prefers-reduced-motion: reduce)');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
navigation?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);

// Reveal only after observer setup, leaving content visible without JavaScript.
if ('IntersectionObserver' in window && !motion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('reveal-pending');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(element => {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
  motion.addEventListener('change', () => {
    if (motion.matches) document.querySelectorAll('.reveal-pending').forEach(el => el.classList.remove('reveal-pending'));
  });
}

const form = document.querySelector('#brief-form');
if (form) {
  const result = document.querySelector('#brief-result');
  const output = document.querySelector('#brief-output');
  const status = document.querySelector('#brief-status');
  const whatsapp = document.querySelector('[data-send-whatsapp]');
  const email = document.querySelector('[data-send-email]');
  const goals = form.elements.namedItem('message');
  const company = form.elements.namedItem('company');
  const website = form.elements.namedItem('website');
  let request = '';

  function validateFields() {
    company.setCustomValidity(company.value.trim() ? '' : 'Please enter your business name.');
    goals.setCustomValidity(goals.value.length > 0 && goals.value.trim().length < 20 ? 'Please describe your goal in at least 20 characters, or leave this optional field empty.' : '');
    let websiteError = '';
    if (website.value.trim()) {
      try {
        const address = new URL(website.value.trim());
        if (!['https:', 'http:'].includes(address.protocol)) websiteError = 'Please use a website or social profile starting with https:// or http://.';
      } catch {
        websiteError = 'Please include a complete address, such as https://yourbrand.com.';
      }
    }
    website.setCustomValidity(websiteError);
  }

  function invalidateRequest() {
    validateFields();
    if (result.hidden) return;
    result.hidden = true;
    request = '';
    for (const link of [whatsapp, email]) {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
    }
    status.textContent = 'Details changed. Prepare your request again to include the updates.';
  }
  form.addEventListener('input', invalidateRequest);
  form.addEventListener('change', invalidateRequest);
  form.addEventListener('submit', event => {
    event.preventDefault();
    validateFields();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    request = buildAuditRequest({
      company: data.get('company'), website: data.get('website'), name: data.get('name'),
      email: data.get('email'), services: data.getAll('service'), timeline: data.get('timeline'), message: data.get('message')
    });
    const links = buildAuditLinks(request);
    whatsapp.href = links.whatsapp;
    email.href = links.email;
    for (const link of [whatsapp, email]) link.removeAttribute('aria-disabled');
    output.textContent = request;
    result.hidden = false;
    result.focus();
    status.textContent = 'Your request is ready to review. Open WhatsApp or email to send it. Nothing has been sent yet.';
  });
  document.querySelector('[data-download-brief]').addEventListener('click', () => {
    if (!request) return;
    const url = URL.createObjectURL(new Blob([request], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'digispine-audit-request.txt';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = 'Request downloaded. You can share it with the DigiSpine team.';
  });
  document.querySelector('[data-copy-brief]').addEventListener('click', async () => {
    if (!request) return;
    try {
      await navigator.clipboard.writeText(request);
      status.textContent = 'Request copied. Paste it into a message to DigiSpine when you are ready.';
    } catch {
      status.textContent = 'Clipboard access is unavailable. Download the request, or select and copy the text above.';
    }
  });
  // A disabled default submit button prevents accidental GET submission without JS.
  form.querySelector('[type="submit"]').disabled = false;
}
