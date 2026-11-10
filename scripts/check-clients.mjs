import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import { CLIENTS } from './clients.mjs';
import { translate } from '../assets/translations.js';
const read = p => readFile(new URL('../'+p, import.meta.url), 'utf8');
for (const path of ['index.html','ml/index.html']) {
 const html = await read(path);
 assert.equal((html.match(/class="client-panel"/g)||[]).length,8);
 for(const name of CLIENTS) assert.ok(html.includes(`<span lang="en">${name.replaceAll('&','&amp;')}</span>`));
 assert.ok(html.indexOf('id="our-clients"') < html.indexOf('id="customer-review"'));
 assert.ok(html.includes('tabindex="0" role="region"'));
 assert.ok(html.includes('data-clients-motion hidden'));
}
const source = (await read('assets/clients.js')).replace(/^import .*;\n/,'');
function fixture(lang='en') {
 const classes = new Set(), body = new Set(), events = {}, attrs = {};
 const button = {addEventListener: (n,fn)=>events[n]=fn,setAttribute:(n,v)=>attrs[n]=v};
 const section = {querySelector:()=>button,classList:{toggle(n,on){if(on)classes.add(n);else classes.delete(n)}}};
 const desktop={matches:true,addEventListener:(n,fn)=>events.desktop=fn};
 const reduced={matches:false,addEventListener:(n,fn)=>events.reduced=fn};
 const document={documentElement:{lang},hidden:false,body:{classList:{contains:n=>body.has(n)}},querySelector:()=>section,addEventListener:(n,fn)=>events[n]=fn};
 vm.runInNewContext(source,{translate,document,window:{IntersectionObserver:true},matchMedia:q=>q.includes('min-width')?desktop:reduced,MutationObserver:class{constructor(fn){events.body=fn}observe(){}},IntersectionObserver:class{constructor(fn){events.intersection=fn}observe(){}}});
 return {classes,body,events,attrs,button,desktop,reduced,document};
}
for(const lang of ['en','ml']) {
 const f=fixture(lang);
 assert.ok(f.classes.has('clients-animated'));
 assert.ok(!f.classes.has('clients-visible'));
 f.events.intersection([{isIntersecting:true}]);assert.ok(f.classes.has('clients-visible'));
 f.events.click();assert.ok(!f.classes.has('clients-animated'));assert.equal(f.attrs['aria-pressed'],'true');
 assert.equal(f.button.textContent,translate('Rotate brands',lang));
 f.events.click();assert.ok(f.classes.has('clients-animated'));
 f.reduced.matches=true;f.events.reduced();assert.ok(!f.classes.has('clients-animated'));assert.ok(f.button.hidden);
 f.reduced.matches=false;f.events.reduced();
 f.desktop.matches=false;f.events.desktop();assert.ok(!f.classes.has('clients-animated'));assert.ok(f.button.hidden);
 f.desktop.matches=true;f.events.desktop();
 f.body.add('static-motion');f.events.body();assert.ok(!f.classes.has('clients-animated'));
 f.body.clear();f.events.body();assert.ok(f.classes.has('clients-animated'));
 f.document.hidden=true;f.events.visibilitychange();assert.ok(f.classes.has('clients-tab-hidden'));
 f.events.intersection([{isIntersecting:false}]);assert.ok(!f.classes.has('clients-visible'));
}
console.log('Client showcase checks passed: eight source names in both languages, ordering, motion toggle, mobile/static/reduced-motion, visibility and localized controls.');
