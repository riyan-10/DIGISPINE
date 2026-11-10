import { CLIENTS } from './clients.mjs';
import { ML } from '../assets/translations.js';
import { REVIEW } from './testimonial.mjs';
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const identities=new Set([...CLIENTS,'D','DIGI','SPINE','DS','DigiSpine','Sajad Sharabil Sajad','Varkala Rental Bikes','Google Ads','Meta Ads','Google Business Profile','WhatsApp','WhatsApp: +91 9074555720','English','Edu','DigiSpine.edu','edu','© 2026 DigiSpine']);
export const missing=new Set();
function tr(raw) {
 const key=decode(raw.trim());let result=ML[key];
 if(!key||!/[A-Za-z]/.test(key)||identities.has(key)||/^[S P I N E G]$/.test(key)||/^(https?:|you@|digispine.media@)/.test(key))return raw;
 if(/^0[1-6] \/ Our services$/.test(key))result=key.slice(0,4)+'ഞങ്ങളുടെ സേവനങ്ങൾ';
 if(result===undefined){missing.add(key);return raw;}
 return raw.slice(0,raw.indexOf(raw.trim()))+escape(result)+raw.slice(raw.indexOf(raw.trim())+raw.trim().length);
}
const translatedReview=[
 'DigiSpine-ന്റെ സേവനം മികച്ചതാണ്! ലൊക്കേഷൻ പിശകുകളും ഫോൺ നമ്പറുകളും SEO പ്രശ്നങ്ങളും ശരിയാക്കാൻ ഞങ്ങളുടെ ‘Varkala Rental Bikes’ Google Business Profile അവരെ ഏൽപ്പിച്ചു. 24 മണിക്കൂറിനുള്ളിൽ അവർ എല്ലാം പരിഹരിച്ചു.',
 'ഞങ്ങളുടെ പേജ് ഇപ്പോൾ പൂർണമായി ഒപ്റ്റിമൈസ് ചെയ്തിട്ടുണ്ട്. കൂടുതൽ ഫോൺ കോളുകളും ഉപഭോക്തൃ അന്വേഷണങ്ങളും ലഭിക്കുന്നുണ്ട്. വേഗത്തിലും പ്രൊഫഷണലായും ഫലപ്രദമായും പ്രവർത്തിക്കുന്ന ടീം!'
];
export function malayalamHTML(html,filename='index.html') {
 let original='';
 html=html.replace(/<blockquote lang="en" data-original-review>[\s\S]*?<\/blockquote>/,match=>{original=`<p class="review-translation-note">ഇംഗ്ലീഷിൽ നൽകിയ അഭിപ്രായത്തിന്റെ മലയാള പരിഭാഷ</p><blockquote lang="ml">${translatedReview.map(p=>`<p>${p}</p>`).join('')}</blockquote><details class="review-original"><summary>ഇംഗ്ലീഷിലെ യഥാർഥ അഭിപ്രായം വായിക്കൂ</summary>${match}</details>`;return '%%REVIEW%%';});
 let skip=false;
 html=html.replace(/<[^>]+>|[^<]+/g,token=>{
  if(token.startsWith('<')) {
   if(/^<(script|style)\b/.test(token))skip=true;
   if(/^<\/(script|style)>/.test(token))skip=false;
   token=token.replace(/\b(aria-label|alt|placeholder)="([^"]*)"/g,(_,k,v)=>`${k}="${tr(v)}"`);
   if(/^<meta\b/.test(token)&&/name="description"/.test(token))token=token.replace(/content="([^"]*)"/,(_,v)=>`content="${tr(v)}"`);
   // Form values remain semantic; service choices are translated for outgoing messages.
   if(/type="checkbox"/.test(token))token=token.replace(/value="([^"]*)"/,(_,v)=>`value="${tr(v)}"`);
   return token;
  }
  return skip||token.includes('%%REVIEW%%')?token:tr(token);
 });
 html=html.replace('%%REVIEW%%',original).replace('<html lang="en">','<html lang="ml">').replace('<head>','<head><base href="../">');
 html=html.replace(/href="#([^"]*)"/g,(_,anchor)=>`href="ml/${filename}#${anchor}"`);
 html=html.replace(/href="(https:\/\/wa.me\/[^"]+)"/g,(_,address)=>{const url=new URL(decode(address));const text=url.searchParams.get('text');if(ML[text])url.searchParams.set('text',ML[text]);return `href="${escape(url.href)}"`;});
 // Assets resolve against the root; page links retain the Malayalam locale.
 html=html.replace(/href="(index|services|about|contact|edu)\.html([#?][^"]*)?"/g,(_,p,suffix='')=>`href="ml/${p}.html${suffix}"`);
 html=html.replace(/hreflang="en" href="ml\/([^"]+)"/g,'hreflang="en" href="$1"');
 // Explicit English choice always returns to the equivalent root page.
 html=html.replace(/href="ml\/([^"/]+\.html)\?lang=en"/g,'href="$1?lang=en"');
 html=html.replace('data-language="en" aria-current="true"','data-language="en"').replace('data-language="ml"','data-language="ml" aria-current="true"');
 return html;
}
