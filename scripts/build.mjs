import { cp, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
await import('./render.mjs');
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'services.html', 'about.html', 'contact.html', 'edu.html']) {
  await copyFile(path.join(root, file), path.join(output, file));
}
await cp(path.join(root, 'ml'), path.join(output, 'ml'), { recursive: true });
await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('Built ten localized pages and local assets in dist/.');
