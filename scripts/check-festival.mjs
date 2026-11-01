import assert from 'node:assert/strict';
import { DAY_START, DAY_END, isFestivalDay, selectVariant } from '../assets/festival-model.js';
import { createFestival } from '../assets/festival.js';
import { POSTER_CALLIGRAPHY as art } from '../assets/poster-calligraphy.js';
import { dockFrame, DOCK_DURATION } from '../assets/calligraphy-layout.js';
assert.equal(isFestivalDay(DAY_START-1),false);
assert.equal(isFestivalDay(DAY_START),true);
assert.equal(isFestivalDay(DAY_END-1),true);
assert.equal(isFestivalDay(DAY_END),false);
assert.equal(new Date(DAY_END).toISOString(),'2026-11-01T18:30:00.000Z');
for(const mode of ['cinematic']) {
  assert.equal(selectVariant('127.0.0.1',`?festival=${mode}`,DAY_END+1),mode,'Explicit local review survives expiry');
  assert.equal(selectVariant('example.com','?festival=normal',DAY_START),'cinematic','Production ignores preview query');
  assert.equal(selectVariant('example.com',`?festival=${mode}`,DAY_END),null,'Query cannot extend the festival');
  assert.equal(selectVariant('example.com','',DAY_START,mode),mode);
  assert.equal(selectVariant('example.com','',DAY_END,mode),null,'Chosen live mode expires at IST midnight');
}
assert.equal(selectVariant('localhost','?festival=normal',DAY_START),null);
assert.equal(selectVariant('evil-localhost.example','?festival=soft',DAY_END),null);
assert.equal(selectVariant('localhost','?festival=soft',DAY_START),'cinematic');
// Exercise the real controller without a browser or external navigation.
for(const language of ['en','ml'])for(const mode of ['cinematic','normal']) {
  let isStatic=false;
  function element(){const classes=new Set();return {children:[],nodes:new Map(),offsetLeft:22,offsetTop:180,offsetWidth:346,style:{setProperty(k,v){this[k]=v}},dataset:{},attributes:{},events:{},classList:{add(...keys){keys.forEach(k=>classes.add(k))},toggle(k,on){on?classes.add(k):classes.delete(k)},contains(k){return k==='static-motion'?isStatic:classes.has(k)}},append(node){this.children.push(node)},remove(){},setAttribute(k,v){this.attributes[k]=v},removeAttribute(k){delete this.attributes[k]},addEventListener(k,cb){this.events[k]=cb},focus(){document.activeElement=this},querySelector(key){if(!this.nodes.has(key))this.nodes.set(key,element());return this.nodes.get(key)}};}
  const body=element();
  globalThis.document={body,documentElement:{lang:language},createElement:element,createElementNS:element,addEventListener(){},removeEventListener(){},hidden:false};
  globalThis.location={hostname:'127.0.0.1',search:`?festival=${mode}`,pathname:'/index.html',reload(){}};
  globalThis.history={replaceState(){}};globalThis.scrollTo=()=>{};
  const media={matches:false,events:{},addEventListener(k,cb){this.events[k]=cb},removeEventListener(){}};
  globalThis.matchMedia=()=>media;
  globalThis.addEventListener=()=>{};globalThis.removeEventListener=()=>{};
  globalThis.IntersectionObserver=class{observe(){}disconnect(){}};
  globalThis.innerWidth=390;globalThis.innerHeight=844;
  const sticky=element(),controller=createFestival(sticky);
  assert.equal(body.children.length,0,'Comparison toolbar is not shipped');
  if(mode==='normal'){assert.equal(controller.active,false);assert.equal(sticky.children.length,0);continue;}
  assert.equal(body.dataset.festival,mode);
  if(mode==='cinematic') {
    assert.equal(controller.dedicated,true);
    const hero=sticky.children[0],skip=hero.querySelector('.wish-skip'),motion=hero.querySelector('.wish-motion');
    assert.ok(hero.innerHTML.includes('poster-pen'));
    if(language==='ml')assert.ok(hero.innerHTML.includes('എഴുത്തിന്റെ ചലനം ഒഴിവാക്കുക'));
    else assert.ok(hero.innerHTML.includes('Skip handwriting'));
    assert.ok(!hero.innerHTML.includes('wish-cta'));
    assert.equal(controller.paint(0).canvasOpacity,0);
    motion.events.click();assert.equal(motion.attributes['aria-pressed'],'true');assert.ok(hero.classList.contains('wish-paused'));
    motion.events.click();assert.equal(motion.attributes['aria-pressed'],'false');
    let resumed=0;controller.onResume(()=>resumed++);
    document.activeElement=skip;skip.events.click();assert.equal(controller.phase,'docking');assert.equal(skip.hidden,true);
    assert.ok(hero.style['--wish-move-x'].endsWith('px'));
    media.matches=true;media.events.change();assert.equal(motion.disabled,true);assert.ok(hero.classList.contains('wish-reduced'));
    assert.equal(controller.phase,'restored');assert.equal(controller.dedicated,false);assert.equal(controller.paint(0).canvasOpacity,1);
    assert.equal(document.activeElement,hero);assert.equal(resumed,1);
    assert.ok(body.classList.contains('festival-restored'));
    controller.dispose();
    // Exercise the timed path too, rather than only Skip/reduced-motion completion.
    const scheduled=[],nativeTimeout=globalThis.setTimeout,nativeClear=globalThis.clearTimeout;
    globalThis.setTimeout=(callback,delay)=>{const timer={callback,delay};scheduled.push(timer);return timer};globalThis.clearTimeout=()=>{};
    media.matches=false;
    const timedSticky=element(),timed=createFestival(timedSticky);let automaticResume=0;timed.onResume(()=>automaticResume++);
    const timedHero=timedSticky.children[0];document.activeElement=timedHero.querySelector('.wish-skip');
    assert.equal(scheduled.at(-1).delay,3100);scheduled.at(-1).callback();
    assert.equal(timed.phase,'docking');assert.equal(scheduled.at(-1).delay,900);
    scheduled.at(-1).callback();assert.equal(timed.phase,'restored');assert.equal(automaticResume,1);assert.equal(timed.dedicated,false);
    assert.equal(document.activeElement,timedHero.querySelector('.wish-motion'),'Focused Skip transfers to the remaining palm control');
    timed.dispose();globalThis.setTimeout=nativeTimeout;globalThis.clearTimeout=nativeClear;
    continue;
  }

}
assert.equal(art.width,795);assert.equal(art.height,440);
assert.equal(art.treeCount,2);assert.equal(art.unifiedCanopy,true);
assert.equal(art.parts.filter(p=>p.kind!=='letters').length,1,'Uncut shared canopy keeps the two trees joined');
assert.equal(art.duration,3.1,'Drawing duration halved from 6.2 seconds');
assert.ok(art.parts.filter(p=>p.kind==='letters').length>=10);
let pixels=0;
for(const part of art.parts) {
  pixels+=part.pixels;
  assert.ok(!/NaN|Infinity/.test(part.path));
  assert.ok(part.strokes.length>0);
  for(const stroke of part.strokes)assert.ok(stroke.delay>=0&&stroke.duration>0&&stroke.delay+stroke.duration<art.duration);
  // Cubic smoothing removes pixel staircases while retaining the source silhouette.
  let area=0;
  for(const ring of part.path.split('M').slice(1)) {
    const chunks=ring.replace(/Z$/,'').split('C'),points=[chunks[0].split(',').map(Number)];
    for(const chunk of chunks.slice(1)) {
      const a=points.at(-1),n=chunk.match(/-?\d+(?:\.\d+)?/g).map(Number);
      for(let j=1;j<=12;j++){const t=j/12,u=1-t;points.push([u*u*u*a[0]+3*u*u*t*n[0]+3*u*t*t*n[2]+t*t*t*n[4],u*u*u*a[1]+3*u*u*t*n[1]+3*u*t*t*n[3]+t*t*t*n[5]])}
    }
    area+=points.reduce((sum,p,i)=>{const q=points[(i+1)%points.length];return sum+p[0]*q[1]-q[0]*p[1]},0)/2;
  }
  assert.ok(Math.abs(Math.abs(area)-part.pixels)/part.pixels<.03,'Smoothed source letter/palm area retained within 3%');
}
assert.equal(pixels,89748,'All extracted source ink retained');
for(const width of [320,390,800,1440])for(const height of [568,844,900]){
  const frame=dockFrame(width,height,{x:22,y:180,width:width*.6});
  assert.ok(Object.values(frame).every(Number.isFinite));
  assert.ok(frame.x>=0&&frame.x+frame.width<width&&frame.scale>0&&frame.scale<1);
  assert.ok(frame.y>=180&&frame.motionY<height-60);
}
assert.equal(DOCK_DURATION,900);
console.log('Seasonal: smooth cubic source artwork, intact two-tree canopy, 3.1s writing, lower-right docking, restored-brand callback, focus/reduced motion and date/host checks passed. Fixtures are not device verification.');
