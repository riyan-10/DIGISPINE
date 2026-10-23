import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const pages = ['index.html', 'services.html', 'about.html', 'contact.html'];
let links = 0;
for (const page of pages) {
  const html = await readFile(new URL(page, root), 'utf8');
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${page}: one main heading`);
  assert.equal((html.match(/aria-current="page"/g) || []).length, 1, `${page}: active navigation`);
  assert.match(html, /name="viewport"/, `${page}: responsive viewport`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${page}: unique element IDs`);
  for (const [, target] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(target)) continue;
    const [file, anchor] = target.split('#');
    const relative = file || page;
    assert.ok((await stat(new URL(relative, root))).isFile(), `${page}: ${target} exists`);
    if (anchor) {
      const destination = file ? await readFile(new URL(file, root), 'utf8') : html;
      assert.ok(destination.includes(`id="${anchor}"`), `${page}: ${target} anchor exists`);
    }
    links++;
  }
}
console.log(`Checked four pages: headings, active navigation, unique IDs and ${links} local links/assets.`);
