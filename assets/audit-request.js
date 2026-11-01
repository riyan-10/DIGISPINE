import { translate } from './translations.js';
// Client-supplied contact destinations: short portfolio, pages 1 and 7.
export const CONTACT = Object.freeze({
  phone: '+91 9074555720',
  telephone: '+919074555720',
  whatsapp: '919074555720',
  email: 'digispine.media@gmail.com'
});

export function buildAuditRequest(data,language='en') {
  const ui=value=>translate(value,language);
  const text = value => String(value ?? '').trim();
  return [
    ui('Hi DigiSpine, I would like a free business review.'),
    '',
    `${ui('Business:')} ${text(data.company)}`,
    ...(text(data.website) ? [`${ui('Website / social profile:')} ${text(data.website)}`] : []),
    ...(text(data.name) ? [`${ui('Name:')} ${text(data.name)}`] : []),
    ...(text(data.email) ? [`${ui('Reply email:')} ${text(data.email)}`] : []),
    `${ui('Interested in:')} ${data.services?.length ? data.services.join(', ') : ui('Help identifying the biggest growth opportunities')}`,
    `${ui('Timeline:')} ${text(data.timeline) || ui('Still exploring')}`,
    ...(text(data.message) ? ['', ui('What I would like to improve:'), text(data.message)] : [])
  ].join('\n');
}

export function buildAuditLinks(message,language='en') {
  return {
    whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
    email: `mailto:${CONTACT.email}?subject=${encodeURIComponent(translate('Free business review enquiry',language))}&body=${encodeURIComponent(message)}`
  };
}
