import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {REVIEW} from './testimonial.mjs';
import {ML,translate} from '../assets/translations.js';
const boot=await readFile(new URL('../assets/language.js',import.meta.url),'utf8');
function visit(address,saved=null,blocked=false){
 let redirected=null,cleaned=null;
 const state={value:saved},url=new URL(address);
 const context={URL,location:{href:url.href,replace:value=>{redirected=value}},history:{replaceState:(_,__,value)=>{cleaned=value}},localStorage:{getItem(){if(blocked)throw Error('Blocked');return state.value},setItem(_,value){if(blocked)throw Error('Blocked');state.value=value}}};
 vm.runInNewContext(boot,context);
 return {redirected,cleaned,saved:state.value};
}
const pages=['index','services','about','contact','edu'];
for(const page of pages){
 const en=await readFile(new URL(`../${page}.html`,import.meta.url),'utf8'),ml=await readFile(new URL(`../ml/${page}.html`,import.meta.url),'utf8');
 assert.match(en,/<html lang="en">/);assert.match(ml,/<html lang="ml">/);
 assert.ok(en.includes(`href="ml/${page}.html?lang=ml"`));assert.ok(ml.includes(`href="${page}.html?lang=en"`));
 assert.ok(ml.includes(`hreflang="en" href="${page}.html"`));assert.ok(ml.includes(`hreflang="ml" href="ml/${page}.html"`));
 assert.equal((ml.match(/data-language="ml" aria-current="true"/g)||[]).length,1);
 assert.ok(!ml.includes('data-language="en" aria-current="true"'));
 for(const [,href] of ml.matchAll(/<a\b[^>]*href="([^"]+)"/g))if(/^(index|services|about|contact|edu)\.html/.test(href))assert.ok(href.includes('?lang=en'),'Only explicit English switch links leave the Malayalam route');
 assert.equal(visit(`https://example.com/${page}.html?edition=kerala-piravi-2026`,'ml').redirected,`https://example.com/ml/${page}.html?edition=kerala-piravi-2026`,'Language redirect preserves unconsumed edition');
 assert.equal(visit(`https://example.com/${page}.html?lang=en&edition=kerala-piravi-2026`,'ml').cleaned,`/${page}.html?edition=kerala-piravi-2026`,'Explicit English cleanup preserves edition');
 assert.equal(visit(`https://example.com/${page}.html`).redirected,null,'First visit stays English');
 assert.equal(visit(`https://example.com/${page}.html?festival=normal#main`,'ml').redirected,`https://example.com/ml/${page}.html?festival=normal#main`,'Saved choice preserves page/query/hash');
 const english=visit(`https://example.com/${page}.html?lang=en#main`,'ml');assert.equal(english.redirected,null);assert.equal(english.saved,'en');assert.equal(english.cleaned,`/${page}.html#main`);
 assert.equal(visit(`https://example.com/ml/${page}.html`,'en').saved,'ml');
 assert.equal(visit(`https://example.com/ml/${page}.html?lang=ml`,null,true).redirected,null,'Native Malayalam page works with blocked storage');
}
const home=await readFile(new URL('../index.html',import.meta.url),'utf8'),ml=await readFile(new URL('../ml/index.html',import.meta.url),'utf8');
for(const p of REVIEW.paragraphs){assert.ok(home.includes(p));assert.ok(ml.includes(p),'Original review available alongside translation');}
assert.ok(home.includes(REVIEW.name));assert.ok(home.includes(REVIEW.business));assert.ok(home.includes('5 out of 5 stars'));
assert.ok(ml.includes('review-translation-note'));assert.ok(ml.includes('<blockquote lang="ml">'));
assert.ok(!/6 days ago|aggregateRating|verified review/i.test(home));
assert.ok(home.includes('Complete business solutions · Kerala'));assert.ok(!home.includes('DISCOVERED.'));
assert.ok(Object.values(ML).every(value=>typeof value==='string'&&value.length));
console.log('Bilingual: ten static routes, exact-page language links, English default, saved/explicit choices, blocked storage, anchors/metadata and source testimonial passed. Browser/device review remains pending.');

// Exercise the unchanged menu handlers with the new bilingual header context.
const app=(await readFile(new URL('../assets/app.js',import.meta.url),'utf8')).replace(/^import[^\n]+\n/gm,'');
for(const language of ['en','ml']){
 const events={},classes=new Set(),navEvents={},buttonEvents={};
 const button={attrs:{'aria-expanded':'false'},setAttribute(k,v){this.attrs[k]=v},getAttribute(k){return this.attrs[k]},addEventListener(k,fn){buttonEvents[k]=fn},focus(){this.focused=true}};
 const navigation={classList:{remove:k=>classes.delete(k),toggle(k,on){on?classes.add(k):classes.delete(k)}},addEventListener(k,fn){navEvents[k]=fn}};
 const document={documentElement:{lang:language},querySelector:s=>s==='.menu-toggle'?button:s==='.navigation'?navigation:null,querySelectorAll:()=>[],addEventListener(k,fn){events[k]=fn}};
 vm.runInNewContext(app,{document,window:{},translate,matchMedia:()=>({matches:true,addEventListener(){}})});
 buttonEvents.click();assert.equal(button.attrs['aria-expanded'],'true');assert.ok(classes.has('is-open'));
 events.keydown({key:'Escape'});assert.equal(button.attrs['aria-expanded'],'false');assert.equal(button.focused,true);
 buttonEvents.click();navEvents.click({target:{closest:()=>true}});assert.equal(button.attrs['aria-expanded'],'false');
 buttonEvents.click();events.click({target:{closest:()=>null}});assert.equal(button.attrs['aria-expanded'],'false');
}
console.log('Bilingual menu fixtures: open/close state, Escape focus return, link and outside-click dismissal pass.');
