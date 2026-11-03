import { createCalligraphyHero } from './calligraphy-hero.js';
import { selectVariant, isLocal, isEditionRequest, DAY_END } from './festival-model.js';

export function createFestival(sticky) {
  const local=isLocal(location.hostname),archive=isEditionRequest(location.search);
  const mode=selectVariant(location.hostname,location.search,Date.now());
  if(!mode)return {paint:p=>({rendererProgress:p,canvasOpacity:1}),active:false};
  let timer=0;
  if(archive) {
    // Consume activation immediately: refreshing the clean URL returns to the normal site.
    const url=new URL(location.pathname+location.search+(location.hash||''),'https://'+location.hostname);
    url.searchParams.delete('edition');
    history.replaceState(history.state,'',url.pathname+url.search+url.hash);
    history.scrollRestoration='manual';scrollTo({top:0,behavior:'instant'});
  } else if(!local) {
    timer=setTimeout(()=>location.reload(),Math.max(0,DAY_END-Date.now())+50);
  }
  const revisit=event=>{if(archive&&event.persisted)location.reload();};
  addEventListener('pageshow',revisit);
  document.body.dataset.festival=mode;
  const hero=createCalligraphyHero(sticky),dispose=hero.dispose;
  hero.archive=archive;
  hero.dispose=()=>{clearTimeout(timer);removeEventListener('pageshow',revisit);dispose();};
  return hero;
}
