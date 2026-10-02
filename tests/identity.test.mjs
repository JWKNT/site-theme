import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../v2/base.css', import.meta.url), 'utf8');
function luminance(hex) {
  const channels = hex.match(/[a-f0-9]{2}/gi).map(value => parseInt(value, 16) / 255)
    .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
}

test('small identity accents retain readable contrast on both paper palettes', () => {
  for (const selector of [':root', ':root[data-theme="dark"]']) {
    const block = css.slice(css.indexOf(`${selector} {`)).split('}')[0];
    const token = name => block.match(new RegExp(`--${name}: (#[a-f0-9]{6});`, 'i'))?.[1];
    const paper = luminance(token('paper'));
    for (const tone of ['blue', 'plum', 'teal', 'ochre']) {
      const ink = luminance(token(`tone-${tone}`));
      assert.ok((Math.max(paper, ink) + .05) / (Math.min(paper, ink) + .05) >= 4.5,
        `${selector} ${tone} must support small editorial labels`);
    }
  }
});

test('theme pages retain local navigation with one native home shortcut beside the theme dial', () => {
  for (const page of ['index.html', 'components.html', 'philosophy.html']) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    assert.equal((html.match(/class="site-home"/g) || []).length, 1, page);
    assert.match(html, /class="site-home" href="https:\/\/jehlp\.net\/" aria-label="Home — jehlp.net"/, page);
    assert.match(html, /<img class="site-mark" src="[^"]+\/marks\/site-theme\.png" width="32" height="32" alt=""/, page);
    assert.doesNotMatch(html, /<span class="site-mark"/, page);
  }
});

test('each masthead mark is a small RGBA PNG with explicit reserved dimensions', () => {
  const manifest = JSON.parse(readFileSync(new URL('../v2/marks/manifest.json', import.meta.url), 'utf8'));
  assert.equal(manifest.assets.length, 17);
  for (const asset of manifest.assets) {
    const png = readFileSync(new URL(`../v2/marks/${asset.file}`, import.meta.url));
    assert.equal(png.subarray(1, 4).toString(), 'PNG', asset.file);
    assert.equal(png.readUInt32BE(16), 128, asset.file);
    assert.equal(png.readUInt32BE(20), 128, asset.file);
    assert.equal(png[25], 6, `${asset.file}: RGB with alpha`);
    assert.deepEqual(asset.transparentCorners, [0, 0, 0, 0]);
  }
});

// These source-contract checks catch the specificity regression behind the
// staggered Albatross header; rendered breakpoint review remains a release gate.
const mobile = css.split('@media (max-width: 42rem) {')[1].split('/* Scope touch sizing')[0];
function mobileRule(selector) {
  for (const [, selectors, declarations] of mobile.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (selectors.replace(/\/\*[\s\S]*?\*\//g, '').split(',').map(s => s.trim()).includes(selector)) return declarations;
  }
  throw new Error(`Missing mobile rule: ${selector}`);
}

test('mobile identity mastheads explicitly override desktop wrapping and spacing', () => {
  const header = mobileRule('.site-header.site-header--identity');
  assert.match(header, /align-items:\s*stretch;/);
  assert.match(header, /flex-flow:\s*column nowrap;/);
  assert.match(header, /gap:\s*\.375rem;/);
  assert.match(mobile, /padding-inline-end:\s*0; padding-bottom:\s*\.5rem;/);
  assert.match(mobile, /\.site-header > \.site-brand[^}]+padding-inline-end: var\(--site-utility-clearance\)/);
});

test('mobile navigation owns a full row below the reserved utility lane', () => {
  const nav = mobileRule('.site-header.site-header--identity nav');
  assert.match(nav, /width:\s*100%;/);
  assert.match(nav, /margin-left:\s*0;/);
  assert.match(nav, /justify-content:\s*flex-start;/);
  assert.match(nav, /flex-wrap:\s*wrap;/);
  assert.match(mobileRule('.site-header nav > .site-utility-pair'), /margin:\s*0;/);
  assert.match(mobileRule('.site-header nav .site-utility-pair .theme-toggle'), /margin-left:\s*0;/);
});

test('mobile local navigation retains 44px targets without changing the desktop rules', () => {
  const links = mobileRule('.site-header nav > a:not(.site-home)');
  assert.match(links, /min-width:\s*2\.75rem;/);
  assert.match(links, /min-height:\s*2\.75rem;/);
  const desktop = css.split('@media (max-width: 42rem) {')[0];
  assert.match(desktop, /\.site-header\.site-header--identity \{ align-items: center; flex-flow: row wrap; gap: \.8rem 1\.5rem; \}/);
  assert.match(desktop, /\.site-header\.site-header--identity nav \{ width: auto; margin-left: auto; gap: \.6rem 1rem; \}/);
});

test('dense documentation links wrap separately from the mobile utility pair', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const docs = readFileSync(new URL('../v2/docs.css', import.meta.url), 'utf8');
  assert.match(html, /<span class="docs-nav-links">[\s\S]+?Changes<\/a><\/span><span class="site-utility-pair"><a class="site-home"/);
  assert.match(docs, /\.docs-nav-links \{ display: contents; \}/);
  assert.match(docs, /@media \(max-width: 42rem\) \{[\s\S]*nav:has\(\.docs-nav-links\) \{ align-items: flex-start; flex-wrap: nowrap;/);
  assert.match(docs, /\.site-header nav \.docs-nav-links \{ display: flex; flex: 1; min-width: 0; flex-wrap: wrap;/);
});
