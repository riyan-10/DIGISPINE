import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { CONTACT, buildAuditRequest, buildAuditLinks } from '../assets/audit-request.js';
import { SERVICES } from './content.mjs';

const root=new URL('../',import.meta.url);
const read=path=>readFile(new URL(path,root),'utf8');
const pages=await Promise.all(['index.html','services.html','about.html','contact.html'].map(read));
const [home,services,about,contact]=pages;
assert.equal(SERVICES.length,6);
for(const service of SERVICES){
  assert.ok(home.includes(`href="services.html#${service.id}"`),`Home links to ${service.id}`);
  assert.ok(services.includes(`id="${service.id}"`),`Services includes ${service.id}`);
  assert.ok(contact.includes(`value="${service.name}"`),`Audit request offers ${service.name}`);
}
for(const page of pages){
  assert.ok(page.includes(`mailto:${CONTACT.email}`),'Supplied email route');
  assert.ok(page.includes(`tel:${CONTACT.telephone}`),'Supplied call route');
  assert.ok(page.includes(`https://wa.me/${CONTACT.whatsapp}`),'Supplied WhatsApp route');
  assert.ok(!/Proposed capabilities|Design concept · Draft|Enquiry delivery is not connected|These are proposed capabilities/.test(page),'Obsolete placeholder copy removed');
  assert.ok(!/47\/100|Most chosen|Five years of experience|Toni &amp; Guy|Toni & Guy/.test(page),'No unapproved proof/sample metric claims');
}
for(const word of ['Strategy','Positioning','Intelligence','Navigation','Expansion'])assert.ok(about.includes(`<h3>${word}</h3>`));
for(const name of ['Foundation','Growth','Scale'])assert.ok(services.includes(`<h3>${name}</h3>`));
assert.equal((home.match(/data-chapter>/g)||[]).length,6);
assert.ok(contact.includes('type="submit" disabled'),'No fallback GET submission without JS');

const minimal=buildAuditRequest({company:' Example Brand '});
assert.ok(minimal.includes('Business: Example Brand'));
assert.ok(!/undefined|null/.test(minimal));
assert.ok(!minimal.includes('Website / social profile:'),'Website is optional');
const message=buildAuditRequest({company:'A&B #1',name:'Preview Tester',website:'https://example.com/?a=1&b=two#work',services:SERVICES.map(item=>item.name),message:'A project with & symbols, café and മലയാളം.\nSecond line.'});
const links=buildAuditLinks(message);
const whatsapp=new URL(links.whatsapp);
assert.equal(whatsapp.hostname,'wa.me');
assert.equal(whatsapp.pathname,`/${CONTACT.whatsapp}`);
assert.equal(whatsapp.searchParams.get('text'),message,'WhatsApp preserves exact Unicode/text without query injection');
assert.equal([...whatsapp.searchParams.keys()].length,1);
const email=new URL(links.email);
assert.equal(email.protocol,'mailto:');
assert.equal(email.pathname,CONTACT.email);
assert.equal(email.searchParams.get('body'),message,'Email preserves exact request body');
assert.equal(email.searchParams.get('subject'),'Free growth audit enquiry');
assert.equal([...email.searchParams.keys()].length,2);
const source=await read('assets/app.js');
assert.ok(!/\b(fetch|XMLHttpRequest|sendBeacon)\s*\(/.test(source),'Request builder does not send data automatically');
console.log('Content checks passed: six consistent services, five S.P.I.N.E. stages, three plans, real contact routes and exact Unicode-safe WhatsApp/email handoffs.');
