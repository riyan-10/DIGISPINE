import { createSpineRenderer } from './spine-renderer.js';

const clamp = value => Math.max(0,Math.min(1,value));
const lerp = (a,b,t) => a+(b-a)*t;
const smooth = (a,b,value) => {const t=clamp((value-a)/(b-a));return t*t*(3-2*t);};
const story=document.querySelector('.cinema-story');
const sticky=document.querySelector('.cinema-sticky');
const canvas=document.querySelector('.cinema-canvas');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const toggle=document.querySelector('[data-film-motion]');
const panels=[...document.querySelectorAll('.cinema-panel')];
const letters=[...document.querySelectorAll('.assembled-word>span:not(.wordmark-initial)')];
const chapterLabel=document.querySelector('[data-film-chapter]');
const percent=document.querySelector('.film-progress-number');
const fallback=document.querySelector('.cinema-fallback');
const logoDestination=document.querySelector('.wordmark-d');
const wordmarkInitial=document.querySelector('.wordmark-initial');
let targetRect=null;
const wordHeading=document.querySelector('[data-word-reveal]');
const ribbon=document.querySelector('.kinetic-ribbon');
const closing=document.querySelector('.closing-scene');
const cards=[...document.querySelectorAll('[data-chapter]')];
const header=document.querySelector('.site-header');
const words=wordHeading.textContent.trim().split(/\s+/);
wordHeading.textContent='';
words.forEach((word,index)=>{const span=document.createElement('span');span.textContent=word+(index===words.length-1?'':' ');wordHeading.append(span);});
const wordElements=[...wordHeading.children];
let renderer=null;
let manualStatic=false;
let frame=0;
let previousTime=0;
let current=0;
let storyStart=0;
let storyLength=1;
let arrivalStart=performance.now();
let pointer={x:0,y:0};
let desiredPointer={x:0,y:0};
let revealActive=-1;

function initializeGraphics() {
  if(renderer || reduced.matches || manualStatic) return;
  try {renderer=createSpineRenderer(canvas);} catch(error) {
    console.warn('DigiSpine: using the vector graphics fallback.',error.message);
  }
  if(!renderer) {document.body.classList.add('no-webgl');canvas.dataset.renderer='fallback';}
}
function measure() {
  storyStart=story.getBoundingClientRect().top+scrollY;
  storyLength=Math.max(story.offsetHeight-innerHeight,1);
  renderer?.resize();
  const bounds=logoDestination.getBoundingClientRect();
  targetRect={x:bounds.x,y:bounds.y,width:bounds.width,height:bounds.height};
  requestFrame();
}
function setPanel(element,opacity,x=0,y=0,scale=1) {
  element.style.opacity=opacity.toFixed(4);
  element.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`;
  element.style.visibility=opacity>.001?'visible':'hidden';
}
function paintStory(progress,arrival) {
  const width=innerWidth,height=innerHeight;
  const introOpacity=1-smooth(.12,.29,progress);
  const connectOpacity=smooth(.22,.34,progress)*(1-smooth(.48,.64,progress));
  const brandOpacity=smooth(.58,.72,progress);
  setPanel(panels[0],introOpacity,-progress*width*.22,-progress*height*.1,1+progress*.1);
  setPanel(panels[1],connectOpacity,-(1-smooth(.22,.4,progress))*75,(1-connectOpacity)*25);
  setPanel(panels[2],brandOpacity,0,0);
  const active=brandOpacity>.5?2:connectOpacity>.5?1:0;
  if(active!==revealActive) {
    panels.forEach((panel,index)=>{panel.inert=index!==active;panel.setAttribute('aria-hidden',String(index!==active));});
    revealActive=active;
  }
  letters.forEach((letter,index)=>{
    const arrival=smooth(.66+index*.014,.81+index*.014,progress);
    const remaining=1-arrival;
    letter.style.transform=`translate3d(${remaining*(index-4)*35}px,${remaining*(index%2?130:-130)}px,${remaining*-450}px) rotateX(${remaining*(index%2?75:-75)}deg) rotateY(${remaining*(index-4)*12}deg)`;
    letter.style.opacity=arrival.toFixed(4);
  });
  const crossfade=smooth(.92,.995,progress);
  wordmarkInitial.style.opacity=String(crossfade);
  sticky.style.setProperty('--film-progress',progress);
  sticky.style.setProperty('--halo-x',`${-progress*width*.33}px`);
  sticky.style.setProperty('--halo-scale',1+progress*.4);
  percent.textContent=String(Math.round(progress*100)).padStart(2,'0');
  const label=progress<.27?'01 / The possibilities':progress<.62?'02 / The mark':'03 / DigiSpine';
  if(chapterLabel.textContent!==label) chapterLabel.textContent=label;
  story.dataset.progress=progress.toFixed(3);
  if(fallback && targetRect) {
    const travel=smooth(.62,.90,progress);
    const destinationX=targetRect.x+targetRect.width/2;
    const destinationY=targetRect.y+targetRect.height/2;
    fallback.style.left=`${lerp(width*.65,destinationX,travel)}px`;
    fallback.style.top=`${lerp(height*.5,destinationY,travel)}px`;
    fallback.style.transform=`translate(-50%,-50%) scale(${lerp(1,targetRect.height/350,travel)}) rotateY(${(1-travel)*-25}deg)`;
    fallback.style.opacity=String(1-crossfade);
  }
  renderer?.render(progress,pointer,arrival,targetRect);
}
function paintPage() {
  const height=innerHeight;
  header.classList.toggle('film-header-scrolled',scrollY>40);
  const manifestoTop=wordHeading.getBoundingClientRect().top;
  const reading=clamp((height*.84-manifestoTop)/(height*.65));
  wordElements.forEach((word,index)=>{
    const illumination=smooth(index/words.length-.08,(index+2)/words.length,reading);
    word.style.setProperty('--word-light',.16+illumination*.84);
  });
  const ribbonTop=ribbon.getBoundingClientRect().top;
  ribbon.style.setProperty('--ribbon-x',`${Math.min(0,(ribbonTop-height)*.23)}px`);
  cards.forEach((card,index)=>{
    const top=card.getBoundingClientRect().top;
    const entry=clamp((height-top)/(height*.85));
    const next=cards[index+1];
    const cover=next?clamp((height*.8-next.getBoundingClientRect().top)/(height*.7)):0;
    card.style.setProperty('--card-scale',1-cover*.045);
    card.style.setProperty('--art-rotation',`${(1-entry)*-13}deg`);
    card.style.setProperty('--art-turn',`${entry*120}deg`);
    card.style.setProperty('--bar-growth',.2+entry*.8);
    card.style.setProperty('--cursor-rise',`${(1-entry)*70}px`);
  });
  const closingTop=closing.getBoundingClientRect().top;
  closing.style.setProperty('--closing-turn',`${clamp((height-closingTop)/(height*1.6))*80-30}deg`);
}
function tick(time) {
  frame=0;
  if(document.hidden || reduced.matches || manualStatic) return;
  const dt=Math.min((time-(previousTime||time))/1000,.05);
  previousTime=time;
  const target=clamp((scrollY-storyStart)/storyLength);
  current=lerp(current,target,1-Math.exp(-dt*12));
  if(Math.abs(target-current)<.0001) current=target;
  pointer.x=lerp(pointer.x,desiredPointer.x,.1);pointer.y=lerp(pointer.y,desiredPointer.y,.1);
  const arrival=smooth(0,1200,time-arrivalStart);
  // No offscreen WebGL rendering. Other sections only update in response to scrolling.
  const inView=scrollY<storyStart+story.offsetHeight && scrollY+innerHeight>storyStart;
  if(inView) paintStory(current,arrival);
  paintPage();
  const pointerMoving=Math.abs(pointer.x-desiredPointer.x)+Math.abs(pointer.y-desiredPointer.y)>.001;
  if((inView && (Math.abs(target-current)>.0001 || pointerMoving || arrival<1))) requestFrame();
}
function requestFrame() {if(!frame && !document.hidden && !reduced.matches && !manualStatic) frame=requestAnimationFrame(tick);}
function updatePreference() {
  const isStatic=reduced.matches||manualStatic;
  document.body.classList.toggle('static-motion',isStatic);
  toggle.textContent=reduced.matches?'Reduced motion is on':manualStatic?'Enable cinematic motion':'View without motion';
  toggle.disabled=reduced.matches;
  toggle.setAttribute('aria-pressed',String(isStatic));
  if(isStatic) {
    cancelAnimationFrame(frame);frame=0;
    panels[0].inert=false;panels[0].setAttribute('aria-hidden','false');
    panels.slice(1).forEach(panel=>{panel.inert=true;panel.setAttribute('aria-hidden','true');});
    revealActive=-1;
  } else {
    initializeGraphics();arrivalStart=performance.now()-1300;
  }
  measure();
}
toggle.addEventListener('click',()=>{
  const offset=sticky.getBoundingClientRect().top;
  manualStatic=!manualStatic;updatePreference();
  // Keep the motion control in view when the long film collapses or expands.
  if(offset<=0) story.scrollIntoView({behavior:'instant',block:'start'});
});
reduced.addEventListener('change',updatePreference);
cards.forEach(card=>card.addEventListener('focusin',event=>{
  // A keyboard-focused link must not stay covered by a later sticky chapter.
  if(!event.target.matches(':focus-visible') || reduced.matches || manualStatic) return;
  const deckTop=card.parentElement.getBoundingClientRect().top+scrollY;
  const previousHeight=cards.slice(0,cards.indexOf(card)).reduce((sum,previous)=>sum+previous.offsetHeight+parseFloat(getComputedStyle(previous).marginBottom),0);
  const top=deckTop+previousHeight-110;
  if(Math.abs(scrollY-top)>innerHeight*.2) scrollTo({top,behavior:'smooth'});
}));
addEventListener('scroll',()=>{
  header.classList.toggle('film-header-scrolled',scrollY>40);
  requestFrame();
},{passive:true});
addEventListener('resize',measure,{passive:true});
document.addEventListener('visibilitychange',()=>{previousTime=0;requestFrame();});
sticky.addEventListener('pointermove',event=>{
  if(event.pointerType==='touch') return;
  desiredPointer={x:(event.clientX/innerWidth-.5)*2,y:(.5-event.clientY/innerHeight)*2};requestFrame();
});
sticky.addEventListener('pointerleave',()=>{desiredPointer={x:0,y:0};requestFrame();});
initializeGraphics();
updatePreference();
current=clamp((scrollY-storyStart)/storyLength);
arrivalStart=performance.now();
paintStory(current,reduced.matches?1:0);
requestFrame();
