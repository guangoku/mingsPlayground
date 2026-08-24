/**
 * Give every route its own share card.
 *
 * The app is a single-page app: one index.html answers every URL, so a link
 * to a post previewed on LinkedIn or WeChat as the home page's title and
 * picture. Rather than run a renderer, this walks the route table and writes
 * a copy of the built index.html per route with its own <head> - the markup
 * a crawler reads. The bundle is byte-identical, so React still takes over
 * and renders the real page.
 *
 * Vercel checks the filesystem before it applies the SPA rewrite in
 * vercel.json, so dist/gap-year/index.html wins for /gap-year and the
 * rewrite still catches everything else.
 *
 * Runs after `vite build`; see the build script in package.json.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTE_META, SITE_URL, type ShareMeta } from '../client/src/lib/share-meta.ts';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/** The tags this script owns. Anything matching is stripped before reinsertion. */
const OWNED =
  /[ \t]*<(?:title>[\s\S]*?<\/title|meta\s+(?:name="(?:description|twitter:[^"]*)"|property="og:[^"]*")[^>]*\/?)>\n?/g;

const headFor = (route: string, meta: ShareMeta): string => {
  const url = `${SITE_URL}${route === '/' ? '/' : route}`;
  const image = `${SITE_URL}${meta.image}`;
  const tags: Array<[string, string]> = [
    ['name="description"', meta.description],
    ['property="og:type"', meta.type ?? 'website'],
    ['property="og:site_name"', "Ming's Playground"],
    ['property="og:title"', meta.title],
    ['property="og:description"', meta.description],
    ['property="og:image"', image],
    ['property="og:image:width"', '1200'],
    ['property="og:image:height"', '630'],
    ['property="og:url"', url],
    ['name="twitter:card"', 'summary_large_image'],
    ['name="twitter:title"', meta.title],
    ['name="twitter:description"', meta.description],
    ['name="twitter:image"', image],
  ];
  return [
    `    <title>${escape(meta.title)}</title>`,
    ...tags.map(([attr, value]) => `    <meta ${attr} content="${escape(value)}" />`),
    `    <link rel="canonical" href="${url}" />`,
  ].join('\n');
};

const template = readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!template.includes('<title>')) {
  throw new Error('dist/index.html has no <title> - did vite build run?');
}

for (const [route, meta] of Object.entries(ROUTE_META)) {
  const html = template
    .replace(OWNED, '')
    .replace('  </head>', `${headFor(route, meta)}\n  </head>`);

  const dir = route === '/' ? DIST : path.join(DIST, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`  ${path.relative(ROOT, path.join(dir, 'index.html'))}  ${meta.title}`);
}
