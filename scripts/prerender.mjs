import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distPath = path.resolve(__dirname, '../dist');
const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

const { render, prerenderRoutes } = await import('../dist/server/entry-server.js');

for (const route of prerenderRoutes) {
  const { appHtml, helmet } = render(route);

const html = template
  // injeta o HTML da página
  .replace(`<!--app-html-->`, appHtml)

  // 🔥 REMOVE META/TITLE SOMENTE DO BODY (dentro do #root)
  .replace(
    /<div id="root">([\s\S]*?)<\/div>/,
    (match) => {
      return match
        .replace(/<title>.*<\/title>/g, '')
        .replace(/<meta[^>]+>/g, '')
        .replace(/<link rel="canonical"[^>]+>/g, '');
    }
  )

  // 🔥 INJETA SEO NO HEAD
  .replace(`</head>`, `
    ${helmet?.title?.toString() || ''}
    ${helmet?.meta?.toString() || ''}
    ${helmet?.link?.toString() || ''}
  </head>`);

  const filePath = path.join(distPath, route, 'index.html');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  fs.writeFileSync(filePath, html);
}

console.log('✅ Prerender finalizado com SEO!');
