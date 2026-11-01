// Run before body paint. Native language links also work when JavaScript is disabled.
(() => {
 const url=new URL(location.href),parts=url.pathname.split('/').filter(Boolean);
 const page=parts.at(-1)?.endsWith('.html')?parts.at(-1):'index.html';
 if(!['index.html','services.html','about.html','contact.html'].includes(page))return;
 const ml=parts.includes('ml'),explicit=url.searchParams.get('lang');
 let saved=null;
 try {
  if(explicit==='en'||explicit==='ml')localStorage.setItem('digispine-language',explicit);
  else if(ml)localStorage.setItem('digispine-language','ml');
  saved=localStorage.getItem('digispine-language');
 }catch{} // Browsing with storage disabled still permits explicit language links.
 if(!ml&&explicit!=='en'&&(explicit==='ml'||saved==='ml')) {
  url.pathname=url.pathname.slice(0,url.pathname.lastIndexOf('/')+1)+'ml/'+page;
  location.replace(url.href);return;
 }
 if(explicit==='en'||explicit==='ml') {
  url.searchParams.delete('lang');history.replaceState(null,'',url.pathname+url.search+url.hash);
 }
})();
