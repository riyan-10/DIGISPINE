import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png' };
const allowed = new Set(['index.html', 'services.html', 'about.html', 'contact.html']);
const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    let relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    if (!allowed.has(relative) && !relative.startsWith('assets/')) throw new Error('Not found');
    const file = path.resolve(root, relative);
    if (!file.startsWith(root + path.sep) && !file.startsWith(root)) throw new Error('Not found');
    // Only public website assets are served; project notes and archives stay local.
    if (relative.startsWith('assets/') && !file.startsWith(path.join(root, 'assets') + path.sep)) throw new Error('Not found');
    if (!(await stat(file)).isFile()) throw new Error('Not found');
    const data = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    response.end(data);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Page not found.');
  }
});
server.listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${server.address().port}`));
