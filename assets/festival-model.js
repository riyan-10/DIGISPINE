export const VARIANTS = ['cinematic'];
export const EDITION = 'kerala-piravi-2026';
export const DAY_START = Date.parse('2026-11-01T00:00:00+05:30');
export const DAY_END = Date.parse('2026-11-02T00:00:00+05:30');
export const isFestivalDay = now => now>=DAY_START && now<DAY_END;
export const isLocal = host => ['localhost','127.0.0.1','[::1]'].includes(host);
export const isEditionRequest = search => new URLSearchParams(search).get('edition')===EDITION;
export function selectVariant(host,search,now,liveVariant='cinematic') {
  // A deliberate archive visit is allowed after the live celebration has ended.
  if(isEditionRequest(search))return 'cinematic';
  if(isLocal(host)) {
    const requested=new URLSearchParams(search).get('festival');
    if(requested==='normal')return null;
    if(requested==='cinematic')return 'cinematic';
  }
  return isFestivalDay(now)&&VARIANTS.includes(liveVariant)?liveVariant:null;
}
