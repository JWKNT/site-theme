#!/usr/bin/env node
// Check the link preview of jehlp.net pages: the tags that Discord, Slack, Teams and other
// apps read, without running scripts, when someone shares a link. See "Link preview" in
// docs/COMPONENTS.md.
//
//   node tools/check-embeds.mjs https://jehlp.net/puzzles/ --crawl     every page that the links reach
//   node tools/check-embeds.mjs index.html tools/ ...                   local HTML files and folders
//   --json=out.json writes the results; --no-images does not download the images.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const main = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
const args = main ? process.argv.slice(2) : [];
const noImages = args.includes('--no-images');
const crawl = args.includes('--crawl');
const jsonOut = (args.find((a) => a.startsWith('--json=')) || '').slice(7);
const starts = args.filter((a) => !a.startsWith('--'));
const ORIGIN = 'https://jehlp.net';

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
function attrs(tag) {
  const out = {};
  for (const m of tag.matchAll(/([a-zA-Z:_-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g)) out[m[1].toLowerCase()] = decode(m[3] ?? m[4] ?? m[5] ?? '');
  return out;
}
export function head(html) {
  const h = html.slice(0, (html.search(/<\/head>/i) + 1 || html.length + 1) - 1);
  const meta = {};
  for (const m of h.matchAll(/<meta\b[^>]*>/gi)) {
    const a = attrs(m[0]);
    const key = (a.property || a.name || '').toLowerCase();
    if (key && a.content != null && !(key in meta)) meta[key] = a.content;
  }
  const links = {};
  for (const m of h.matchAll(/<link\b[^>]*>/gi)) {
    const a = attrs(m[0]);
    for (const rel of (a.rel || '').toLowerCase().split(/\s+/)) if (rel && !(rel in links)) links[rel] = a.href;
  }
  const title = (h.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
  return { meta, links, title: title ? decode(title.trim()) : '' };
}

export function size(buf) {
  const b = new Uint8Array(buf);
  if (b[0] === 0x89 && b[1] === 0x50) return { type: 'png', w: (b[16] << 24 | b[17] << 16 | b[18] << 8 | b[19]) >>> 0, h: (b[20] << 24 | b[21] << 16 | b[22] << 8 | b[23]) >>> 0, alpha: b[25] === 6 || b[25] === 4 };
  if (b[0] === 0xff && b[1] === 0xd8) {
    for (let i = 2; i < b.length - 9;) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1], len = b[i + 2] << 8 | b[i + 3];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return { type: 'jpeg', h: b[i + 5] << 8 | b[i + 6], w: b[i + 7] << 8 | b[i + 8] };
      i += 2 + len;
    }
    return { type: 'jpeg' };
  }
  if (String.fromCharCode(...b.slice(0, 4)) === 'RIFF') return { type: 'webp' };
  if (String.fromCharCode(...b.slice(0, 5)).includes('<svg') || String.fromCharCode(...b.slice(0, 100)).includes('<svg')) return { type: 'svg' };
  return { type: 'unknown' };
}

const images = new Map();
async function image(url) {
  if (!images.has(url)) {
    images.set(url, (async () => {
      try {
        const res = await fetch(url, { redirect: 'follow' });
        if (!res.ok) return { error: 'HTTP ' + res.status };
        return { ...size(await res.arrayBuffer()), contentType: res.headers.get('content-type') };
      } catch (e) { return { error: e.message }; }
    })());
  }
  return images.get(url);
}

export async function check(url, html) {
  const { meta, links, title } = head(html);
  const problems = [];
  const need = (key, why) => { if (!meta[key] || !meta[key].trim()) problems.push(`no ${key}${why ? ' (' + why + ')' : ''}`); };
  if (!title) problems.push('no <title>');
  need('og:title');
  need('og:description');
  need('og:image');
  need('og:url');
  need('og:type');
  need('og:site_name');
  need('twitter:card');
  need('description');
  need('theme-color');
  if (meta['og:site_name'] && meta['og:site_name'] !== 'jehlp.net') problems.push(`og:site_name is "${meta['og:site_name']}"`);
  const canonical = links.canonical;
  if (!canonical) problems.push('no canonical link');
  if (meta['og:url'] && canonical && meta['og:url'] !== canonical) problems.push('og:url differs from canonical');
  const desc = meta['og:description'] || '';
  if (desc && (desc.length < 25 || desc.length > 220)) problems.push(`og:description is ${desc.length} characters`);
  let img = null;
  if (meta['og:image']) {
    const src = meta['og:image'];
    if (!/^https:\/\//.test(src)) problems.push('og:image is not an absolute https URL');
    else if (!noImages) {
      img = await image(src);
      if (img.error) problems.push(`og:image ${img.error}`);
      else if (!['png', 'jpeg', 'webp'].includes(img.type)) problems.push(`og:image is ${img.type}`);
      else if (img.w && Math.min(img.w, img.h) < 200) problems.push(`og:image is ${img.w}×${img.h}`);
      if (img.alpha) problems.push('og:image has transparency');
    }
    if (!meta['og:image:alt']) problems.push('no og:image:alt');
    const card = meta['twitter:card'];
    if (card === 'summary_large_image' && img && img.w && img.w / img.h < 1.3) problems.push('large card with a narrow image');
  }
  return { url, title, card: meta['twitter:card'] || '', ogTitle: meta['og:title'] || '', description: desc, image: meta['og:image'] || '', imageSize: img && img.w ? `${img.w}x${img.h} ${img.type}` : '', problems };
}

const pageLike = (u) => u.origin === ORIGIN && !/\.(png|jpe?g|gif|svg|webp|mp4|webm|mov|pdf|zip|json|js|mjs|css|txt|md|ttf|otf|woff2?|ico|xml|csv|tsv|bin|exe|dmg|patch|7z|lean)$/i.test(u.pathname);

// Not a page to share: a build source with no head, a redirect, or a fragment that a page loads
// (noindex and no canonical address).
export function skip(html) {
  if (!/<head[\s>]/i.test(html) || /http-equiv="refresh"/i.test(html)) return true;
  const { meta, links } = head(html);
  return /noindex/.test(meta.robots || '') && !links.canonical;
}

function htmlFiles(path) {
  // A not-found page is not shared, so it needs no preview.
  if (statSync(path).isFile()) return path.endsWith('.html') && !path.endsWith('404.html') ? [path] : [];
  return readdirSync(path).filter((name) => !/^(\.|node_modules$)/.test(name)).flatMap((name) => htmlFiles(join(path, name)));
}

const seen = new Set(), queue = [], results = [];
for (const s of starts) {
  if (existsSync(s)) {
    for (const file of htmlFiles(s)) {
      const html = readFileSync(file, 'utf8');
      if (!skip(html)) results.push(await check(file, html));
    }
    continue;
  }
  const u = new URL(s, ORIGIN);
  u.hash = '';
  queue.push(u.href);
  seen.add(u.href);
}
while (queue.length) {
  const batch = queue.splice(0, 8);
  await Promise.all(batch.map(async (url) => {
    let res;
    try { res = await fetch(url, { redirect: 'follow' }); } catch (e) { results.push({ url, problems: ['fetch failed: ' + e.message] }); return; }
    if (!res.ok) { results.push({ url, problems: ['HTTP ' + res.status] }); return; }
    if (!(res.headers.get('content-type') || '').includes('text/html')) return;
    const html = await res.text();
    results.push(await check(res.url, html));
    if (!crawl) return;
    for (const m of html.matchAll(/<a\b[^>]*\bhref\s*=\s*("([^"]*)"|'([^']*)')/gi)) {
      let u;
      try { u = new URL(decode(m[2] ?? m[3]), res.url); } catch { continue; }
      u.hash = '';
      if (u.search && !/[?&](chapter|dataset)=/.test(u.search)) u.search = '';
      if (u.search) continue;   // query views are the same page for an unfurler
      if (!pageLike(u) || seen.has(u.href)) continue;
      seen.add(u.href);
      queue.push(u.href);
    }
  }));
}
if (main) {
  results.sort((a, b) => a.url.localeCompare(b.url));
  if (jsonOut) (await import('node:fs')).writeFileSync(jsonOut, JSON.stringify(results, null, 1));
  const bad = results.filter((r) => r.problems.length);
  for (const r of bad) console.log(r.url.replace(ORIGIN, ''), '::', r.problems.join('; '));
  console.log(`${results.length} pages, ${bad.length} with problems`);
  process.exitCode = bad.length ? 1 : 0;
}
