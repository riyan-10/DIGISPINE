import { translate } from './translations.js';
import { POSTER_CALLIGRAPHY as art } from './poster-calligraphy.js';
import { DOCK_DURATION, dockFrame } from './calligraphy-layout.js';

function lettering() {
  const masks=art.parts.map((part,i)=>`<mask id="poster-ink-${i}" maskUnits="userSpaceOnUse" x="-10" y="-10" width="815" height="460">${part.strokes.map(s=>`<path class="poster-pen" d="${s.d}" fill="none" stroke="white" stroke-width="${s.width}" stroke-linecap="round" stroke-linejoin="round" pathLength="1" style="--pen-delay:${s.delay}s;--pen-duration:${s.duration}s"/>`).join('')}</mask>`).join('');
  const parts=art.parts.map((part,i)=>`<g class="poster-part ${part.kind==='letters'?'poster-letter':`poster-palm poster-palm-${part.kind}`}"><path class="poster-ink" fill="currentColor" fill-rule="evenodd" d="${part.path}" mask="url(#poster-ink-${i})"/></g>`).join('');
  return `<svg class="poster-calligraphy" viewBox="0 0 ${art.width} ${art.height}" aria-hidden="true"><defs>${masks}</defs>${parts}</svg>`;
}

export function createCalligraphyHero(sticky) {
  const ui=text=>translate(text,document.documentElement?.lang||'en');
  const root=document.createElement('section');root.className='festival-wish';root.tabIndex=-1;root.setAttribute('aria-label',ui('Kerala Piravi wishes from DigiSpine'));
  root.innerHTML=`<div class="wish-backdrop" aria-hidden="true"></div><div class="wish-vignette" aria-hidden="true"></div><div class="wish-inner"><p class="wish-date">${ui('KERALA PIRAVI')} <span>·</span> 01 NOVEMBER 2026</p><h1 class="wish-heading"><span class="wish-sr" lang="ml">കേരളപ്പിറവി ആശംസകൾ</span>${lettering()}</h1><p class="wish-caption">${ui('Our land. Our pride. Our growth.')}</p><div class="wish-controls"><button type="button" class="wish-skip">${ui('Skip handwriting')}</button><button type="button" class="wish-motion" aria-pressed="false">${ui('Pause palms')}</button></div></div><a class="wish-explore" href="${document.documentElement?.lang==='ml'?'ml/index.html#home-content':'#home-content'}">${ui('Explore DigiSpine')} <span aria-hidden="true">↓</span></a>`;
  sticky.append(root);
  const skip=root.querySelector('.wish-skip'),motion=root.querySelector('.wish-motion'),heading=root.querySelector('.wish-heading');
  const preference=matchMedia('(prefers-reduced-motion: reduce)');
  let paused=false,visible=true,phase='writing',resume=null,focusAfter=false,dockingTimer=0;
  function measureDock() {
    const frame=dockFrame(innerWidth,innerHeight,{x:heading.offsetLeft||0,y:heading.offsetTop||0,width:heading.offsetWidth||innerWidth*.6});
    root.style.setProperty('--wish-move-x',`${frame.tx}px`);root.style.setProperty('--wish-move-y',`${frame.ty}px`);
    root.style.setProperty('--wish-dock-scale',String(frame.scale));root.style.setProperty('--wish-dock-x',`${frame.x}px`);
    root.style.setProperty('--wish-motion-y',`${frame.motionY}px`);
  }
  function restore() {
    if(phase==='restored')return;
    phase='restored';clearTimeout(dockingTimer);
    root.classList.add('wish-docked');document.body.classList.add('festival-restored');
    heading.setAttribute('aria-hidden','true');
    if(focusAfter&&(document.activeElement===skip||document.activeElement===document.body))(preference.matches?root:motion).focus({preventScroll:true});
    resume?.();
  }
  function finish() {
    if(phase!=='writing'){if(preference.matches)restore();return;}
    phase='docking';focusAfter=document.activeElement===skip;
    measureDock();root.classList.add('wish-written','wish-docking');
    skip.hidden=true;
    if(preference.matches)restore();
    else dockingTimer=setTimeout(restore,DOCK_DURATION);
  }
  function updateMotion() {
    root.classList.toggle('wish-paused',paused||preference.matches||!visible||document.hidden);
    root.classList.toggle('wish-reduced',preference.matches);
    motion.disabled=preference.matches;
    motion.textContent=ui(preference.matches?'Reduced motion is on':paused?'Resume palms':'Pause palms');
    motion.setAttribute('aria-pressed',String(paused||preference.matches));
    if(preference.matches)finish();
  }
  skip.addEventListener('click',finish);
  motion.addEventListener('click',()=>{paused=!paused;updateMotion();});
  preference.addEventListener('change',updateMotion);
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;updateMotion();});observer.observe(sticky);
  document.addEventListener('visibilitychange',updateMotion);
  function resize(){if(phase!=='writing')measureDock();}
  addEventListener('resize',resize,{passive:true});
  updateMotion();
  const done=setTimeout(finish,art.duration*1000);
  return {active:true,get dedicated(){return phase!=='restored'},get phase(){return phase},
    onResume(callback){resume=callback;if(phase==='restored')callback();},
    paint:progress=>({rendererProgress:progress,canvasOpacity:phase==='restored'?1:0}),finish,
    dispose(){clearTimeout(done);clearTimeout(dockingTimer);observer.disconnect();preference.removeEventListener('change',updateMotion);document.removeEventListener('visibilitychange',updateMotion);removeEventListener('resize',resize);root.remove();}};
}
