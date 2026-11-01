export const VARIANTS = ['cinematic'];
export const DAY_START = Date.parse('2026-11-01T00:00:00+05:30');
export const DAY_END = Date.parse('2026-11-02T00:00:00+05:30');
export const isFestivalDay = now => now>=DAY_START && now<DAY_END;
export const isLocal = host => ['localhost','127.0.0.1','[::1]'].includes(host);
export function selectVariant(host, search, now, liveVariant='cinematic') {
  if(isLocal(host)) {
    const requested=new URLSearchParams(search).get('festival');
    return requested==='normal'?null:VARIANTS.includes(requested)?requested:'cinematic';
  }
  // The approved cinematic is live only on Kerala Piravi, in Asia/Kolkata.
  return isFestivalDay(now)&&VARIANTS.includes(liveVariant)?liveVariant:null;
}
