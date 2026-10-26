// Run actual event handlers against a minimal DOM fixture. This is an interaction
// regression check, not browser layout, native validation or external app testing.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { buildAuditRequest, buildAuditLinks } from '../assets/audit-request.js';

function element(extra={}) {
  return {attrs:{},textContent:'',hidden:true,href:'',setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k];if(k==='href')this.href=''},focus(){this.focused=true},...extra};
}
const fields=Object.fromEntries(['company','website','message','name','email','timeline'].map(name=>[name,element({value:'',error:'',setCustomValidity(value){this.error=value}})]));
const handlers={},submit=element({disabled:true});
const form=element({elements:{namedItem:name=>fields[name]},addEventListener(type,fn){handlers[type]=fn},querySelector:()=>submit,reportValidity(){return Object.values(fields).every(field=>!field.error)}});
const result=element(),output=element(),status=element(),whatsapp=element(),email=element();
const nodes={'#brief-form':form,'#brief-result':result,'#brief-output':output,'#brief-status':status,'[data-send-whatsapp]':whatsapp,'[data-send-email]':email,'[data-download-brief]':element({addEventListener(){}}),'[data-copy-brief]':element({addEventListener(){}})};
const document={querySelector:selector=>nodes[selector]||null,querySelectorAll:()=>[],addEventListener(){}};
class FormData {get(name){return fields[name]?.value||''}getAll(){return ['Website development']}}
const context=vm.createContext({document,window:{},matchMedia:()=>({matches:true,addEventListener(){}}),buildAuditRequest,buildAuditLinks,URL,FormData,Blob,console,setTimeout,navigator:{clipboard:{writeText:async()=>{}}}});
const source=(await readFile(new URL('../assets/app.js',import.meta.url),'utf8')).replace(/^import[^\n]+\n/,'');
vm.runInContext(source,context);
assert.equal(submit.disabled,false);
const event={preventDefault(){}};
fields.company.value='Example & Brand';fields.website.value='https://example.com/?a=1&b=2';
handlers.submit(event);
assert.equal(result.hidden,false);assert.equal(result.focused,true);
assert.ok(output.textContent.includes('Business: Example & Brand'));
assert.equal(new URL(whatsapp.href).searchParams.get('text'),output.textContent);
assert.equal(new URL(email.href).searchParams.get('body'),output.textContent);
fields.website.value='javascript:alert(1)';handlers.input();
assert.equal(result.hidden,true);assert.equal(whatsapp.href,'');assert.equal(email.href,'');
handlers.submit(event);assert.equal(result.hidden,true);assert.ok(fields.website.error);
fields.website.value='';fields.company.value='   ';handlers.input();handlers.submit(event);assert.equal(result.hidden,true);assert.ok(fields.company.error);
fields.company.value='Example';fields.message.value='                        ';handlers.input();handlers.submit(event);assert.equal(result.hidden,true);assert.ok(fields.message.error);
fields.message.value='';handlers.input();handlers.submit(event);assert.equal(result.hidden,false,'Optional website/goals are supported');
handlers.change();assert.equal(result.hidden,true,'Select/checkbox changes invalidate stale requests');
console.log('Audit interaction simulation passed: reviewed request, focus, handoff links, stale-link removal, validation and optional fields. No external messages sent.');
