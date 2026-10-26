// Client-supplied contact destinations: short portfolio, pages 1 and 7.
export const CONTACT = Object.freeze({
  phone: '+91 9074555720',
  telephone: '+919074555720',
  whatsapp: '919074555720',
  email: 'digispine.media@gmail.com'
});

export function buildAuditRequest(data) {
  const text = value => String(value ?? '').trim();
  return [
    'Hi DigiSpine, I would like a free growth audit.',
    '',
    `Business: ${text(data.company)}`,
    ...(text(data.website) ? [`Website / social profile: ${text(data.website)}`] : []),
    ...(text(data.name) ? [`Name: ${text(data.name)}`] : []),
    ...(text(data.email) ? [`Reply email: ${text(data.email)}`] : []),
    `Interested in: ${data.services?.length ? data.services.join(', ') : 'Help identifying the biggest growth opportunities'}`,
    `Timeline: ${text(data.timeline) || 'Still exploring'}`,
    ...(text(data.message) ? ['', 'What I would like to improve:', text(data.message)] : [])
  ].join('\n');
}

export function buildAuditLinks(message) {
  return {
    whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
    email: `mailto:${CONTACT.email}?subject=${encodeURIComponent('Free growth audit enquiry')}&body=${encodeURIComponent(message)}`
  };
}
