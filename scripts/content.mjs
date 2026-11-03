// Adapted from client PDFs. Source pages and outstanding confirmations:
// docs/CONTENT_REVIEW.md. No case-study results or illustrative scores are used.
export { CONTACT, buildAuditLinks } from '../assets/audit-request.js';
export const SERVICES = [
  { id:'brand', number:'01', name:'Branding & logo design', cue:'Find your direction', art:'brand', category:'marketing',
    short:'Logos, colours and a clear message that help people recognise your business.',
    description:'We help you choose how your business looks and how you describe it. From your logo to your social posts, customers should recognise the same business.',
    items:['Business identity & message','Business naming & descriptions','Logo, colours & design','A guide for using your branding'] },
  { id:'digital', number:'02', name:'Digital marketing', cue:'Get discovered', art:'digital', category:'marketing',
    short:'Help customers find you on Google, Maps and social media.',
    description:'We improve your business information on Google and Maps, and create social media content in Malayalam and English. We also write useful website content so people can find and understand your services.',
    items:['Help people find you on Google','Google Business Profile','Website content for search engines','Malayalam & English social media'] },
  { id:'performance', number:'03', name:'Online advertising', cue:'Turn attention into enquiries', art:'marketing', category:'marketing',
    short:'Reach potential customers through paid ads on Google, Facebook and Instagram.',
    description:'We plan and run paid ads for your business. We agree on the audience and budget, create the ads, and report how many enquiries they bring and what those enquiries cost.',
    items:['Google Ads','Meta Ads','Ads to bring customer enquiries','Enquiry numbers & advertising costs'] },
  { id:'video', number:'04', name:'Video production', cue:'Make your story move', art:'video', category:'marketing',
    short:'Reels, business videos and video ads that explain what you offer.',
    description:'Show people your products, services and story through video. We create short reels, business films and video ads for your website and social channels.',
    items:['Social media reels','Brand films','Video ads','Product & service videos'] },
  { id:'web', number:'05', name:'Website development', cue:'Build your digital home', art:'web', category:'development',
    short:'Websites that work on phones and make it easy for customers to contact you.',
    description:'We build websites that explain what you do, show your services and help visitors call, message or send an enquiry. Every page is designed to work on phones as well as computers.',
    items:['Business websites','Phone-friendly pages','Pages for online ads','Contact forms & WhatsApp links'] },
  { id:'growth', number:'06', name:'Customer enquiries & follow-up', cue:'Connect what happens next', art:'growth', category:'marketing',
    short:'Organise enquiries and follow up with customers through WhatsApp and other tools.',
    description:'We help you keep track of people who contact your business. Customer records, WhatsApp messages and follow-up reminders make it easier to respond and stay in touch.',
    items:['Customer records & enquiry tracking','WhatsApp enquiry support','Customer follow-up','Monthly updates & customer contact'] },
  {id:'app',number:'07',name:'App development',cue:'Build an app for your business',art:'app',category:'development',
   short:'Apps that help customers use your services and support the way your business works.',
   description:'We plan and develop apps around your business needs. We discuss who will use the app, what it should do and which features to build before agreeing on the scope.',
   items:['Business app planning','Customer app design','App development','Features agreed around your needs']}

];

SERVICES.sort((a,b)=>(a.category==='development')-(b.category==='development'));
SERVICES.forEach((service,index)=>{service.number=String(index+1).padStart(2,'0');});
export const SERVICE_AREAS = [
 {id:'marketing',label:'Marketing',title:'Marketing',description:'Branding, digital marketing, online ads, videos and customer follow-up.',href:'services.html#marketing',action:'Explore marketing'},
 {id:'development',label:'Development',title:'Development',description:'Websites and apps built around what your business needs.',href:'services.html#development',action:'Explore development'},
 {id:'education',label:'Education',title:'DigiSpine.edu',description:'Our education space. Course information will be shared here soon.',href:'edu.html',action:'Visit DigiSpine.edu'}
];

export const LAYERS = [
  ['Brand','Who are you?','A name, look and message people recognise.'],
  ['Discovery','How do people find you?','Clear information on Google, Maps and your website.'],
  ['Demand','Why should people pay attention?','Posts and videos that explain your products and services.'],
  ['Conversion','What turns interest into action?','Simple ways to call, message, book or enquire.'],
  ['Growth','How do you keep moving?','Stay in touch and review what is working.']
];
export const METHOD = [
  ['S','Strategy','First, we learn about your business and customers.'],
  ['P','Positioning','We make it clear what you offer and why it matters.'],
  ['I','Intelligence','We look at useful information before making a plan.'],
  ['N','Navigation','We make it easy for people to find and contact you.'],
  ['E','Expansion','We review the results and decide what to improve.']
];
export const PACKAGES = [
  ['Foundation','For new businesses',['Logo & business identity','Google Business Profile','Social media setup','Website advice']],
  ['Growth','For businesses already operating',['Google search & Maps','Social media content','Online ads & enquiries','Customer follow-up']],
  ['Scale','For an ambitious next stage',['Marketing plan','Ads, videos & website pages','Customer records & reminders','Reports & ongoing support']]
];
export const INDUSTRIES = ['Salons & beauty','Clinics','Hotels & resorts','Restaurants & cafés','Real estate','Startups','Education','Retail'];
export const STEPS = [
  ['Free business review','Tell us about your business. We look at your website, social pages and Google listing.'],
  ['30-minute call','We explain what we found and discuss what you need.'],
  ['Your next steps','We suggest the work to do first and agree on the cost and timing.'],
  ['Start the work','We do the agreed work, share updates and review what to improve.']
];
