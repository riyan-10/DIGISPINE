import { createCalligraphyHero } from './calligraphy-hero.js';
import { selectVariant, isLocal, DAY_END } from './festival-model.js';

export function createFestival(sticky) {
  const local=isLocal(location.hostname);
  const mode=selectVariant(location.hostname,location.search,Date.now());
  if(!mode)return {paint:p=>({rendererProgress:p,canvasOpacity:1}),active:false};
  document.body.dataset.festival=mode;
  // Restore the regular homepage at midnight IST, including tabs left open.
  if(!local)setTimeout(()=>location.reload(),Math.max(0,DAY_END-Date.now())+50);
  return createCalligraphyHero(sticky);
}
