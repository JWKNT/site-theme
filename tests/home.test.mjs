import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../v2/theme.js', import.meta.url), 'utf8');
const css = readFileSync(new URL('../v2/base.css', import.meta.url), 'utf8');
const homeCSS = css.slice(css.indexOf('/* A header colophon'), css.indexOf('details { border-top:'));
class Node {
  constructor(tag) {
    this.tag = tag; this.children = []; this.parentElement = null;
    this.className = ''; this.dataset = {}; this.attrs = {}; this.style = {};
    this.classList = {
      contains: name => this.className.split(/\s+/).includes(name),
      add: name => { this.className += ` ${name}`; },
      remove: name => { this.className = this.className.split(/\s+/).filter(n => n !== name).join(' '); },
      toggle: (name, value) => { if (value) this.classList.add(name); else this.classList.remove(name); }
    };
  }
  remove() { if (this.parentElement) this.parentElement.children.splice(this.parentElement.children.indexOf(this), 1); this.parentElement = null; }
  append(...nodes) { for (const n of nodes) { n.remove(); n.parentElement = this; this.children.push(n); } }
  prepend(...nodes) { for (const n of nodes.reverse()) { n.remove(); n.parentElement = this; this.children.unshift(n); } }
  before(n) { const p = this.parentElement; n.remove(); n.parentElement = p; p.children.splice(p.children.indexOf(this), 0, n); }
  closest(selector) { for (let n = this; n; n = n.parentElement) if (selector.startsWith('.') && n.classList.contains(selector.slice(1))) return n; return null; }
  setAttribute(k, v) { this.attrs[k] = v; }
  addEventListener() {}
}
function page({ path = '/puzzles/loop/', authored = false, legacy = false, header = true } = {}) {
  const ready = {}, body = new Node('body'), root = new Node('html');
  const nav = header ? new Node('nav') : null;
  const button = header ? new Node('button') : null;
  if (nav) { const h = new Node('header'); h.className = 'site-header'; h.append(nav); body.append(h); button.className = 'theme-toggle'; button.dataset.themeToggle = ''; nav.append(button); }
  let existing = null;
  if (authored || legacy) {
    existing = new Node('a'); existing.className = 'site-home'; existing.href = 'https://jehlp.net/';
    existing.setAttribute('aria-label', 'Home — jehlp.net'); existing.title = 'Home — jehlp.net';
    const mark = new Node('span'); mark.setAttribute('aria-hidden', 'true'); existing.append(mark);
    if (legacy) { const dock = new Node('nav'); dock.className = 'site-home-dock'; dock.append(existing); body.prepend(dock); }
    else { const pair = new Node('span'); pair.className = 'site-utility-pair'; button.before(pair); pair.append(existing, button); }
  }
  const all = (n = body) => [n, ...n.children.flatMap(c => all(c))];
  const matches = (n, q) => q === '[data-theme-toggle]' ? 'themeToggle' in n.dataset : q.startsWith('.') && n.classList.contains(q.slice(1));
  const document = {
    body, documentElement: root, readyState: 'loading', createElement: tag => new Node(tag),
    querySelectorAll(q) { return all().filter(n => matches(n, q)); },
    querySelector(q) { return q.startsWith('[data-theme-toggle-slot]') ? nav : all().find(n => matches(n, q)) || null; },
    addEventListener(k, f) { ready[k] = f; }
  };
  vm.runInNewContext(source, { document, window: { location: { pathname: path }, matchMedia: () => ({ matches: false, addEventListener() {} }), addEventListener() {}, dispatchEvent() {} }, localStorage: { getItem() {}, setItem() {} }, CustomEvent: class {} });
  return { body, nav, button, existing, all, setup: () => ready.DOMContentLoaded() };
}

test('creates a native named Home link paired with the existing header theme dial', () => {
  for (const path of ['/puzzles/loop/', '/readers/book/chapters/one.html', '/tmp/ubahn-solver.html', '/']) {
    const p = page({ path }); p.setup(); p.setup();
    const links = p.all().filter(n => n.className === 'site-home');
    assert.equal(links.length, 1);
    const link = links[0], pair = link.parentElement;
    assert.equal(link.tag, 'a'); assert.equal(link.href, 'https://jehlp.net/');
    assert.equal(link.attrs['aria-label'], 'Home — jehlp.net'); assert.equal(link.title, 'Home — jehlp.net');
    assert.equal(link.children[0].attrs['aria-hidden'], 'true');
    assert.equal(pair.className, 'site-utility-pair'); assert.equal(pair.parentElement, p.nav);
    assert.equal(pair.children[1], p.button);
  }
});

test('preserves authored native header pairs without duplication or movement', () => {
  const p = page({ authored: true }), pair = p.existing.parentElement; p.setup(); p.setup();
  assert.equal(p.existing.parentElement, pair); assert.equal(pair.parentElement, p.nav);
  assert.equal(p.all().filter(n => n.className === 'site-home').length, 1);
});

test('migrates cached footer markup into the header and removes its old landmark', () => {
  const p = page({ legacy: true }); p.setup();
  assert.equal(p.existing.parentElement.className, 'site-utility-pair');
  assert.equal(p.existing.parentElement.parentElement, p.nav);
  assert.equal(p.all().filter(n => n.className === 'site-home-dock').length, 0);
});

test('only pages without a header gain a small in-flow utility header', () => {
  const p = page({ header: false }); p.setup(); p.setup();
  const headers = p.all().filter(n => n.className === 'site-utilities');
  assert.equal(headers.length, 1); assert.equal(headers[0].tag, 'header');
  assert.equal(headers[0].children[0].className, 'site-utility-pair');
  assert.equal(p.all().filter(n => n.classList.contains('theme-toggle--floating')).length, 0);
});

test('explicitly exempts NDB Idle and its nested routes', () => {
  for (const path of ['/ndb-idle', '/ndb-idle/', '/ndb-idle/save/']) {
    const p = page({ path }); p.setup(); assert.equal(p.all().filter(n => n.className === 'site-home').length, 0);
  }
});

test('header emblem has a 44px target, visible focus, no footer, and a print fallback', () => {
  assert.match(homeCSS, /min-width: 44px;[\s\S]+min-height: 44px;/);
  assert.match(homeCSS, /\.site-utility-pair \{ display: inline-flex; align-items: center; flex: none;/);
  assert.match(homeCSS, /a\.site-home:focus-visible[^}]+outline: 2px solid var\(--blue\)/);
  assert.doesNotMatch(homeCSS, /position: (?:fixed|sticky)|site-home-clearance|body:has|scroll-padding/);
  assert.doesNotMatch(source, /keepFocusedControlClear|focusin|scrollBy/);
  assert.match(css, /@media print[\s\S]+\.site-home, \.site-utility-pair[^}]+display: none !important/);
  const icon = readFileSync(new URL('../v2/icons/home-emblem.svg', import.meta.url), 'utf8');
  assert.match(icon, /viewBox="0 0 32 32"/); assert.doesNotMatch(icon, /<script|<image|<text/);
});
