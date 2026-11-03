import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {SERVICES,SERVICE_AREAS} from './content.mjs';
import {DAY_END,EDITION,isEditionRequest,selectVariant} from '../assets/festival-model.js';
import {createFestival} from '../assets/festival.js';
const read=path=>readFile(new URL('../'+path,import.meta.url),'utf8');
assert.deepEqual(SERVICE_AREAS.map(a=>a.id),['marketing','development','education']);
assert.deepEqual(SERVICES.filter(s=>s.category==='marketing').map(s=>s.id),['brand','digital','performance','video','growth']);
assert.deepEqual(SERVICES.filter(s=>s.category==='development').map(s=>s.id),['web','app']);
const services=await read('services.html');
const marketing=services.slice(services.indexOf('id="marketing"'),services.indexOf('id="development"'));
const development=services.slice(services.indexOf('id="development"'),services.indexOf('id="education"'));
for(const service of SERVICES)assert.ok((service.category==='marketing'?marketing:development).includes(`id="${service.id}"`),'Service belongs to its rendered section');
for(const prefix of ['', 'ml/']){
 const home=await read(prefix+'index.html'),about=await read(prefix+'about.html'),edu=await read(prefix+'edu.html'),contact=await read(prefix+'contact.html');
 assert.ok(home.includes('href="'+prefix+'edu.html"'));assert.ok(home.includes('href="'+prefix+'services.html#development"'));
 assert.ok(about.includes('href="'+prefix+'index.html?edition=kerala-piravi-2026"'));
 assert.ok(!about.includes('>View full poster'));
 assert.ok(edu.includes('DigiSpine.edu'));assert.ok(!/<form|Enroll now|₹|\$\d/.test(edu),'No invented course catalogue, price or enrolment');
 assert.ok(edu.includes('href="'+prefix+'contact.html"'));
 assert.ok(contact.includes('value="'+(prefix?'ആപ്പ് നിർമാണം':'App development')+'"'));
 for(const page of [home,about,edu,contact])assert.ok(!/digital marketing agency|ഡിജിറ്റൽ മാർക്കറ്റിങ് ഏജൻസി/.test(page),'Broad positioning replaces agency-only description');
}
// Run the real archive entry/controller at a deterministic post-holiday date.
const nativeNow=Date.now,nativeTimeout=globalThis.setTimeout,nativeClear=globalThis.clearTimeout;
try{
 Date.now=()=>DAY_END+86400000;
 for(const language of ['en','ml'])for(const reduced of [false,true]){
  const scheduled=[],events={},removed=[];let reloads=0;
  function element(){const classes=new Set();return {children:[],nodes:new Map(),offsetLeft:22,offsetTop:180,offsetWidth:346,style:{setProperty(){}},attributes:{},classList:{add(...a){a.forEach(x=>classes.add(x))},toggle(k,on){on?classes.add(k):classes.delete(k)},contains:k=>classes.has(k)},append(node){this.children.push(node)},remove(){},setAttribute(k,v){this.attributes[k]=v},removeAttribute(k){delete this.attributes[k]},addEventListener(){},focus(){},querySelector(key){if(!this.nodes.has(key))this.nodes.set(key,element());return this.nodes.get(key)}}}
  globalThis.document={body:element(),documentElement:{lang:language},createElement:element,hidden:false,addEventListener(){},removeEventListener(){}};
  document.body.dataset={};
  const pathname=language==='ml'?'/ml/index.html':'/index.html';
  globalThis.location={hostname:'digispine.example',pathname,search:'?edition='+EDITION+'&keep=yes',hash:'',reload(){reloads++}};
  globalThis.history={state:{preserved:true},replaceState(state,_,target){assert.deepEqual(state,{preserved:true});const url=new URL(target,'https://digispine.example');location.pathname=url.pathname;location.search=url.search;location.hash=url.hash}};
  globalThis.scrollTo=()=>{};globalThis.innerWidth=390;globalThis.innerHeight=844;
  globalThis.addEventListener=(k,fn)=>{events[k]=fn};globalThis.removeEventListener=(k,fn)=>{removed.push(k);if(events[k]===fn)delete events[k]};
  globalThis.IntersectionObserver=class{observe(){}disconnect(){}};
  globalThis.matchMedia=()=>({matches:reduced,addEventListener(){},removeEventListener(){}});
  globalThis.setTimeout=(callback,delay)=>{scheduled.push({callback,delay});return scheduled.length};globalThis.clearTimeout=()=>{};
  const sticky=element(),controller=createFestival(sticky);
  assert.equal(controller.active,true);assert.equal(controller.archive,true);assert.equal(sticky.children.length,1);
  assert.equal(location.pathname,pathname);assert.equal(location.search,'?keep=yes');assert.equal(isEditionRequest(location.search),false);
  assert.equal(selectVariant(location.hostname,location.search,Date.now()),null,'Refresh of consumed archive URL selects normal homepage');
  assert.ok(!scheduled.some(t=>t.delay<1000),'Expired live-day timer must not reload archive');
  if(reduced)assert.equal(controller.phase,'restored');
  else {assert.equal(controller.phase,'writing');scheduled[0].callback();assert.equal(controller.phase,'docking');scheduled.at(-1).callback();assert.equal(controller.phase,'restored');}
  events.pageshow({persisted:false});assert.equal(reloads,0);events.pageshow({persisted:true});assert.equal(reloads,1,'BFCache return reloads the consumed URL');
  controller.dispose();assert.ok(removed.includes('pageshow'));
 }
 for(const host of ['localhost','127.0.0.1','digispine.example']){
  assert.equal(selectVariant(host,'',Date.now()),null,'Ordinary post-holiday visit stays normal');
  assert.equal(selectVariant(host,'?edition=unknown',Date.now()),null);
  assert.equal(selectVariant(host,'?edition='+EDITION,Date.now()),'cinematic');
 }
}finally{Date.now=nativeNow;globalThis.setTimeout=nativeTimeout;globalThis.clearTimeout=nativeClear;}
console.log('Business/edition regressions: 3 areas, 5 marketing + 2 development services, bilingual Edu/no fabricated courses, real archive activation/consumption, refresh/BFCache, no expired reload and reduced-motion passed. Fixtures are not real-device QA.');
