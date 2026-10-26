// Adapted from client PDFs. Source pages and outstanding confirmations:
// docs/CONTENT_REVIEW.md. No case-study results or illustrative scores are used.
export { CONTACT, buildAuditLinks } from '../assets/audit-request.js';
export const SERVICES = [
  { id:'brand', number:'01', name:'Brand engineering', cue:'Find your direction', art:'brand',
    short:'Positioning, identity and messaging that make your business recognisable.',
    description:'Build a clear foundation for how your business looks, sounds and stands apart. We connect positioning, naming and visual identity so every touchpoint tells the same story.',
    items:['Brand strategy & positioning','Naming & messaging','Logo & visual identity','Brand guidelines'] },
  { id:'digital', number:'02', name:'Digital marketing', cue:'Get discovered', art:'digital',
    short:'Search, local visibility and social content in Malayalam and English.',
    description:'Help the right people discover your business. Connect Google and local search, your Business Profile, AI-search visibility and social content around how your customers look for answers.',
    items:['Google & local SEO','Google Business Profile','AI-search content & visibility','Malayalam & English social content'] },
  { id:'performance', number:'03', name:'Performance marketing', cue:'Turn attention into enquiries', art:'marketing',
    short:'Google and Meta campaigns built around enquiries and cost-per-lead tracking.',
    description:'Give paid campaigns a clear business objective. Connect creative, audiences and landing pages, then track enquiries and cost per lead to guide the next decision.',
    items:['Google Ads','Meta Ads','Lead-generation campaigns','Conversion & cost-per-lead reporting'] },
  { id:'video', number:'04', name:'Video production', cue:'Make your story move', art:'video',
    short:'Reels, brand films and ad creatives that bring your business into focus.',
    description:'Turn your brand story into content made for the way people watch. From short-form reels to brand films and campaign creative, each piece has a role in the wider customer journey.',
    items:['Short-form reels','Brand films','Video advertising creative','Campaign storytelling'] },
  { id:'web', number:'05', name:'Website development', cue:'Build your digital home', art:'web',
    short:'Fast, mobile-first websites and landing pages with a clear next step.',
    description:'Make it easy for visitors to understand your business and enquire. We build responsive websites and focused landing pages that connect your message with a useful customer action.',
    items:['Business websites','Mobile-first development','Campaign landing pages','Enquiry & WhatsApp journeys'] },
  { id:'growth', number:'06', name:'Business growth system', cue:'Connect what happens next', art:'growth',
    short:'CRM, WhatsApp funnels, follow-up automation and monthly reporting.',
    description:'Connect what happens after the first click. Bring enquiries, customer follow-up, reporting and retention into a system your business can work with over time.',
    items:['CRM & enquiry organisation','WhatsApp funnels','Lead nurturing & follow-up','Monthly reporting & retention'] }
];

export const LAYERS = [
  ['Brand','Who are you?','Positioning, identity and a clear message.'],
  ['Discovery','How do people find you?','Search, Maps and a business presence people can understand.'],
  ['Demand','Why should people pay attention?','Social content, video and creative that create interest.'],
  ['Conversion','What turns interest into action?','Landing pages, campaigns, WhatsApp and follow-up.'],
  ['Growth','How do you keep moving?','Reporting, retention, reputation and referrals.']
];
export const METHOD = [
  ['S','Strategy','Understand the business, market, customer and competition.'],
  ['P','Positioning','Make the brand different, memorable and clear.'],
  ['I','Intelligence','Use research, customer data, analytics and AI to inform decisions.'],
  ['N','Navigation','Build the customer journey from discovery to conversion.'],
  ['E','Expansion','Use measurable learning to decide what to improve and scale.']
];
export const PACKAGES = [
  ['Foundation','For new businesses',['Brand foundation','Google Business Profile','Social setup & basic SEO','Content direction','Website recommendations','Analytics foundation']],
  ['Growth','For businesses already operating',['SEO & local visibility','Social media & content','Lead generation','Conversion optimisation','WhatsApp funnel','Monthly reporting']],
  ['Scale','For an ambitious next stage',['Brand & search strategy','Performance marketing','Content engine','Landing pages, CRM & automation','Lead nurturing','Analytics & business development']]
];
export const INDUSTRIES = ['Salons & beauty','Clinics','Hotels & resorts','Restaurants & cafés','Real estate','Startups','Education','Retail'];
export const STEPS = [
  ['Free growth audit','Share your business and website. We review your presence and identify where the customer journey needs attention.'],
  ['30-minute strategy call','We walk through the findings in plain language and discuss what matters most to your business.'],
  ['Growth roadmap','Get a prioritised direction for the work, connected to your goals and the opportunities identified.'],
  ['Build, run, refine','Work together on a project or retainer, with reporting and review to guide what comes next.']
];
