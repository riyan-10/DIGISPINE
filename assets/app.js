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
  let brief = '';
  const goals = form.elements.namedItem('message');
  const validateGoals = () => goals.setCustomValidity(goals.value.trim().length < 20 ? 'Please describe your goals in at least 20 characters.' : '');
  goals.addEventListener('input', validateGoals);
  form.addEventListener('submit', event => {
    event.preventDefault();
    validateGoals();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const services = data.getAll('service');
    brief = [
      'DIGISPINE — PROJECT BRIEF',
      `Prepared: ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
      '', `Name: ${String(data.get('name')).trim()}`, `Email: ${String(data.get('email')).trim()}`,
      `Brand / business: ${String(data.get('company')).trim() || 'Not specified'}`,
      `Interested in: ${services.length ? services.join(', ') : 'Help choosing a direction'}`,
      `Timeline: ${data.get('timeline')}`, '', 'PROJECT GOALS', String(data.get('message')).trim(),
      '', 'Prepared locally. This brief has not been sent to DigiSpine.'
    ].join('\n');
    output.textContent = brief;
    result.hidden = false;
    result.focus();
    status.textContent = 'Your brief is ready. Download or copy it to share. Nothing has been sent.';
  });
  form.addEventListener('input', () => {
    if (!result.hidden) {
      result.hidden = true;
      brief = '';
      status.textContent = 'Details changed. Prepare your brief again to include your updates.';
    }
  });
  document.querySelector('[data-download-brief]').addEventListener('click', () => {
    if (!brief) return;
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'digispine-project-brief.txt';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = 'Brief downloaded. Share the file with your DigiSpine contact.';
  });
  document.querySelector('[data-copy-brief]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(brief);
      status.textContent = 'Brief copied. You can paste it into a message to your DigiSpine contact.';
    } catch {
      status.textContent = 'Clipboard access is unavailable. Download the brief, or select and copy the text below.';
    }
  });
  // The disabled default submit button also blocks accidental GET submission if JS is unavailable.
  form.querySelector('[type="submit"]').disabled = false;
}
