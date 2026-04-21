import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const serverEntryPath = path.join(distDir, 'server', 'entry-server.js');
const templatePath = path.join(distDir, 'index.html');

const { render, prerenderRoutes } = await import(pathToFileURL(serverEntryPath).href);

const template = await readFile(templatePath, 'utf-8');

const injectHtmlAttributes = (html, attributes) =>
  attributes ? html.replace('<html', `<html ${attributes}`) : html;

const injectBodyAttributes = (html, attributes) =>
  attributes ? html.replace('<body', `<body ${attributes}`) : html;

const extractHeadTagsFromAppHtml = html => {
  const tagPattern =
    /^(<title\b[^>]*>[\s\S]*?<\/title>|<style\b[^>]*>[\s\S]*?<\/style>|<script\b[^>]*>[\s\S]*?<\/script>|<(?:meta|link|base)\b[^>]*\/?>)/i;
  let remainingHtml = html;
  let headTags = '';

  while (true) {
    const match = remainingHtml.match(tagPattern);

    if (!match) {
      break;
    }

    headTags += match[0];
    remainingHtml = remainingHtml.slice(match[0].length);
  }

  return {
    headTags,
    appHtml: remainingHtml,
  };
};

const renderPage = url => {
  const { appHtml, helmet } = render(url);
  const { headTags: extractedHeadTags, appHtml: cleanedAppHtml } =
    extractHeadTagsFromAppHtml(appHtml);
  const helmetTags = [
    extractedHeadTags,
    helmet?.title?.toString() ?? '',
    helmet?.priority?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.style?.toString() ?? '',
    helmet?.script?.toString() ?? '',
  ].join('');

  let html = template.replace('<div id="root"></div>', `<div id="root">${cleanedAppHtml}</div>`);
  html = html.replace('</head>', `${helmetTags}</head>`);
  html = injectHtmlAttributes(html, helmet?.htmlAttributes?.toString());
  html = injectBodyAttributes(html, helmet?.bodyAttributes?.toString());

  return html;
};

const ensureRouteFile = async route => {
  const html = renderPage(route);
  const outputPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.replace(/^\//, ''), 'index.html');

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, 'utf-8');
};

await Promise.all(prerenderRoutes.map(ensureRouteFile));
await rm(path.join(distDir, 'server'), { recursive: true, force: true });
