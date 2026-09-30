import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../v2/theme.js', import.meta.url), 'utf8');
const css = readFileSync(new URL('../v2/base.css', import.meta.url), 'utf8');
function page({ path = '/puzzles/loop/', authored = false } = {}) {
  const nodes = [], ready = {};
  const node = tag => ({ tag, dataset: {}, attrs: {}, children: [], style: {},
    classList: { add() {}, toggle() {} },
    setAttribute(k, v) { this.attrs[k] = v; },
    append(n) { this.children.push(n); }, addEventListener() {} });
  const button = node('button');
  const existing = authored ? node('a') : null;
  if (existing) { existing.className = 'site-home'; existing.href = 'https://jehlp.net/'; }
  const document = {
    documentElement: node('html'), readyState: 'loading',
    body: { append(n) { nodes.push(n); } }, createElement: node,
    querySelectorAll() { return [button]; },
    querySelector(q) {
      if (q === '[data-theme-toggle]') return button;
      if (q === '.site-home') return existing || nodes.find(n => n.className === 'site-home-dock')?.children[0];
      return null;
    },
    addEventListener(k, f) { ready[k] = f; }
  };
  const media = { matches: false, addEventListener() {} };
  vm.runInNewContext(source, { document, window: { location: { pathname: path }, matchMedia: () => media, addEventListener() {}, dispatchEvent() {} }, localStorage: { getItem() {}, setItem() {} }, CustomEvent: class {} });
  return { nodes, existing, setup: () => ready.DOMContentLoaded() };
}

test('creates a native, named absolute Home link on nested and offline pages', () => {
  for (const path of ['/puzzles/loop/', '/readers/book/chapters/one.html', '/tmp/ubahn-solver.html', '/']) {
    const p = page({ path }); p.setup(); p.setup();
    assert.equal(p.nodes.length, 1);
    const dock = p.nodes[0], link = dock.children[0];
    assert.equal(dock.tag, 'nav'); assert.equal(dock.attrs['aria-label'], 'Site');
    assert.equal(link.tag, 'a'); assert.equal(link.href, 'https://jehlp.net/');
    assert.equal(link.attrs['aria-label'], 'Home · jehlp.net');
    assert.equal(link.title, 'Home · jehlp.net');
    assert.equal(link.children[0].attrs['aria-hidden'], 'true');
  }
});

test('keeps authored native fallback links rather than duplicating them', () => {
  const p = page({ authored: true }); p.setup(); p.setup();
  assert.equal(p.nodes.length, 0); assert.equal(p.existing.href, 'https://jehlp.net/');
});

test('explicitly exempts NDB Idle and all of its nested routes', () => {
  for (const path of ['/ndb-idle', '/ndb-idle/', '/ndb-idle/save/']) {
    const p = page({ path }); p.setup(); assert.equal(p.nodes.length, 0);
  }
});

test('Home has a 44px target, focus, safe-area clearance, and print fallback', () => {
  assert.match(css, /a\.site-home \{[^}]+min-width: 44px;[^}]+min-height: 44px;/);
  assert.match(css, /\.site-home-dock \{[^}]+position: fixed;[^}]+safe-area-inset-right[^}]+safe-area-inset-bottom/);
  assert.match(css, /html:has\(\.site-home\)[^}]+scroll-padding-bottom/);
  assert.match(css, /body:has\(\.site-home\)::after[^}]+height: var\(--site-home-clearance\)/);
  assert.match(css, /a\.site-home:focus-visible[^}]+outline: 2px solid var\(--blue\)/);
  assert.match(css, /@media print[\s\S]+\.site-home-dock, \.site-home[^}]+display: none !important/);
  const icon = readFileSync(new URL('../v2/icons/home.svg', import.meta.url), 'utf8');
  assert.match(icon, /viewBox="0 0 24 24"/);
  assert.doesNotMatch(icon, /<script|<image|<text/);
});


test('narrow pages give the symbol a dedicated edge strip rather than cover form ends', () => {
  assert.match(css, /@media \(max-width: 42rem\) \{\s*\.site-home-dock \{[^}]+width: 100%;[^}]+min-height: calc\(3\.5rem/);
});
