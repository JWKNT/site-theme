import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../v2/components.js', import.meta.url), 'utf8');
// Controller unit fixtures; native browser accessibility is reviewed separately.
class Element {
  constructor(tag = 'div', attrs = {}) {
    this.tagName = tag; this.attrs = { ...attrs }; this.children = []; this.listeners = {};
    this.style = { setProperty: (k, v) => { this.style[k] = v; } };
    this.dataset = Object.fromEntries(Object.entries(attrs).filter(([k]) => k.startsWith('data-')).map(([k, v]) => [k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v]));
    this.hidden = false; this.scrollWidth = this.clientWidth = 300; this.scrollHeight = this.clientHeight = 100;
    this.scrollLeft = 0; this.offsetHeight = 40; this.rect = { top: 0, bottom: 100, left: 0, right: 300, width: 300 };
  }
  setAttribute(k, v) { this.attrs[k] = v; }
  getAttribute(k) { return this.attrs[k] ?? null; }
  hasAttribute(k) { return k in this.attrs || k.startsWith('data-') && k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()) in this.dataset; }
  removeAttribute(k) { delete this.attrs[k]; }
  get id() { return this.attrs.id; }
  set id(v) { this.attrs.id = v; }
  addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); }
  emit(type, event = {}) { for (const fn of this.listeners[type] || []) fn({ target: this, preventDefault() {}, ...event }); }
  append(...children) { for (const child of children) { this.children.push(child); child.parentElement = this; child.doc = this.doc; } }
  replaceChildren(...children) { this.children = []; this.append(...children); }
  dispatchEvent(event) { this.emit(event.type, event); }
  before(child) { child.parentElement = this.parentElement; child.doc = this.doc; this.parentElement.children.splice(this.parentElement.children.indexOf(this), 0, child); }
  contains(el) { return this === el || this.children.some(child => child.contains(el)); }
  matches(selector) { if (selector === ':disabled') return Boolean(this.disabled); const [, tag, attr] = selector.match(/^([a-z]+)?(?:\[([^\]]+)\])?$/) || []; return (!tag || this.tagName === tag) && (!attr || this.hasAttribute(attr)); }
  closest(selector) { return this.matches(selector) ? this : this.parentElement?.closest(selector); }
  querySelectorAll(selector) { return this.children.flatMap(child => [...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)]); }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  focus() { this.doc.activeElement = this; }
  scrollIntoView() { this.scrolled = true; }
  getBoundingClientRect() { return this.rect; }
  close() { this.closed = (this.closed || 0) + 1; }
}
function fixture(build, mobile = false) {
  const document = new Element('document'); document.doc = document; document.readyState = 'complete';
  document.documentElement = { scrollHeight: 3000 }; document.activeElement = null;
  document.createElement = tag => { const el = new Element(tag); el.doc = document; return el; };
  document.getElementById = id => document.querySelectorAll('[id]').find(el => el.id === id);
  const frames = [], media = new Element(), window = new Element('window'); media.matches = mobile;
  window.requestAnimationFrame = fn => frames.push(fn); window.matchMedia = () => media;
  window.scrollY = 0; window.innerHeight = 844; window.innerWidth = 1440;
  window.setTimeout = fn => { window.timer = fn; }; window.clearTimeout = () => {};
  const location = { origin: 'https://example.test', pathname: '/guide', search: '', hash: '' };
  const history = { pushState(a, b, hash) { location.hash = hash; } };
  const navigator = { clipboard: { async writeText(text) { navigator.copied = text; } } };
  const add = (tag, attrs, parent = document) => { const el = new Element(tag, attrs); parent.append(el); return el; };
  const link = (id, parent) => { const el = add('a', { href: `#${id}` }, parent); Object.assign(el, location, { hash: `#${id}` }); return el; };
  const nodes = build({ document, add, link });
  vm.runInNewContext(source, { document, window, location, history, navigator, Event: class { constructor(type) { this.type = type; } } });
  const flush = () => { while (frames.length) frames.shift()(); }; flush();
  return { ...nodes, document, window, media, location, navigator, flush };
}
const disclosureFixture = mobile => fixture(({ add, link }) => {
  const toggle = add('button', { 'data-disclosure': '(max-width: 650px)', 'aria-controls': 'contents' });
  const region = add('nav', { id: 'contents' }), anchor = link('chapter', region), target = add('section', { id: 'chapter' });
  return { toggle, region, anchor, target };
}, mobile);
test('disclosure transitions preserve focus, Escape, and idempotency', () => {
  const f = disclosureFixture(true); assert.equal(f.region.hidden, true);
  f.window.JehlpUI.enhance(); assert.equal(f.toggle.listeners.click.length, 1);
  f.toggle.emit('click'); assert.equal(f.region.hidden, false);
  f.region.emit('keydown', { key: 'Escape' }); assert.equal(f.region.hidden, true); assert.equal(f.document.activeElement, f.toggle);
  f.media.matches = false; f.media.emit('change'); assert.equal(f.region.hidden, false); assert.equal(f.toggle.hidden, true); assert.equal(f.document.activeElement, f.region);
  f.media.matches = true; f.media.emit('change'); assert.equal(f.region.hidden, true); assert.equal(f.document.activeElement, f.toggle);
});
test('disclosure anchors transfer focus while modified clicks retain browser behavior', () => {
  const f = disclosureFixture(true); f.toggle.emit('click');
  f.region.emit('click', { target: f.anchor, metaKey: true }); assert.equal(f.region.hidden, false); assert.equal(f.location.hash, '');
  f.region.emit('click', { target: f.anchor }); assert.equal(f.region.hidden, true); assert.equal(f.document.activeElement, f.target); assert.equal(f.location.hash, '#chapter'); assert.equal(f.target.scrolled, true);
});
test('overflow adds needed tab stops and directional cues without losing descriptions', () => {
  const f = fixture(({ add }) => { const region = add('div', { 'data-scroll-region': '', 'aria-label': 'Comparison', 'aria-describedby': 'source-note' }); region.scrollWidth = 800; return { region }; });
  const hint = f.document.children[0]; assert.match(hint.textContent, /right/); assert.equal(f.region.getAttribute('tabindex'), '0'); assert.match(f.region.getAttribute('aria-describedby'), /^source-note ui-scroll-hint-/);
  f.region.scrollLeft = 500; f.region.emit('scroll'); f.flush(); assert.match(hint.textContent, /left/);
  f.region.scrollWidth = 300; f.window.emit('resize'); f.flush(); assert.equal(hint.hidden, true); assert.equal(f.region.hasAttribute('tabindex'), false); assert.equal(f.region.getAttribute('aria-describedby'), 'source-note');
  f.region.scrollHeight = 500; f.window.emit('resize'); f.flush(); assert.equal(hint.hidden, true); assert.equal(f.region.getAttribute('tabindex'), '0');
  f.window.JehlpUI.enhance(); assert.equal(f.document.children.length, 2);
});
test('section index tracks reading without moving focus and measures the nav offset', () => {
  const f = fixture(({ add, link }) => { const nav = add('nav', { 'data-section-nav': '' }), first = link('one', nav), second = link('two', nav), one = add('section', { id: 'one' }), two = add('section', { id: 'two' }); two.rect.top = 600; return { nav, first, second, one, two }; });
  assert.equal(f.first.getAttribute('aria-current'), 'location'); assert.equal(f.document.style['--section-offset'], '64px');
  f.first.focus(); f.two.rect.top = 50; f.window.emit('scroll'); f.flush(); assert.equal(f.second.getAttribute('aria-current'), 'location'); assert.equal(f.document.activeElement, f.first);
  f.nav.emit('click', { target: f.second }); assert.equal(f.document.activeElement, f.two); assert.equal(f.location.hash, '#two');
});
test('dialog closes only for a click begun and finished on its backdrop', () => {
  const f = fixture(({ add }) => ({ dialog: add('dialog', { 'data-dialog': '' }) })); f.dialog.rect = { top: 100, bottom: 500, left: 100, right: 500 };
  f.dialog.emit('pointerdown', { clientX: 110, clientY: 110 }); f.dialog.emit('click', { clientX: 110, clientY: 110 }); assert.equal(f.dialog.closed, undefined);
  f.dialog.emit('pointerdown', { clientX: 110, clientY: 110 }); f.dialog.emit('click', { clientX: 20, clientY: 20 }); assert.equal(f.dialog.closed, undefined);
  f.dialog.emit('pointerdown', { clientX: 20, clientY: 20 }); f.dialog.emit('click', { clientX: 20, clientY: 20 }); assert.equal(f.dialog.closed, 1);
});
test('copy uses code text and selects it for manual copying if clipboard access fails', async () => {
  const f = fixture(({ add }) => { const pre = add('pre', { 'data-copy-code': '' }), code = add('code', {}, pre); code.textContent = 'one\ntwo'; return { pre, code }; });
  const button = f.pre.children[1]; await button.listeners.click[0](); assert.equal(f.navigator.copied, 'one\ntwo'); assert.equal(button.textContent, 'Copied');
  f.window.timer(); assert.equal(button.textContent, 'Copy'); let selected;
  f.document.createRange = () => ({ selectNodeContents(node) { selected = node; } }); f.window.getSelection = () => ({ removeAllRanges() {}, addRange() {} }); f.navigator.clipboard.writeText = async () => { throw Error('blocked'); };
  await button.listeners.click[0](); assert.equal(selected, f.code); assert.equal(button.textContent, 'Select and copy');
});

function selectFixture() {
  return fixture(({ add }) => {
    const select = add('select', { 'data-ui-select': '', 'aria-label': 'Surface' });
    select.selectedIndex = 0;
    select.options = ['All surfaces', 'Unavailable', 'Data', 'Reading'].map((text, index) => {
      const option = add('option', {}, select); option.textContent = text; option.disabled = index === 1; return option;
    });
    return { select };
  });
}
test('select menu supports keyboard choice, disabled options, Escape and native changes', () => {
  const f = selectFixture(), wrap = f.document.children[0], [trigger, menu] = wrap.children;
  let changes = 0; f.select.addEventListener('change', () => changes++);
  assert.equal(f.select.hidden, true); assert.equal(trigger.getAttribute('aria-label'), 'Surface');
  assert.equal(menu.hidden, true); assert.equal(trigger.textContent, 'All surfaces');
  trigger.emit('keydown', { key: 'ArrowDown' });
  assert.equal(menu.hidden, false); assert.equal(trigger.getAttribute('aria-activedescendant'), menu.children[0].id);
  trigger.emit('keydown', { key: 'ArrowDown' });
  assert.equal(trigger.getAttribute('aria-activedescendant'), menu.children[2].id);
  trigger.emit('keydown', { key: 'Enter' });
  assert.equal(f.select.selectedIndex, 2); assert.equal(changes, 1); assert.equal(menu.hidden, true); assert.equal(trigger.textContent, 'Data');
  trigger.emit('keydown', { key: 'End' }); trigger.emit('keydown', { key: 'Escape' });
  assert.equal(f.select.selectedIndex, 2); assert.equal(menu.hidden, true);
  f.select.selectedIndex = 3; f.select.emit('change'); assert.equal(trigger.textContent, 'Reading');
});
test('select enhancement is idempotent, refreshes programmatic values and supports typeahead/outside dismissal', () => {
  const f = selectFixture(), wrap = f.document.children[0], [trigger, menu] = wrap.children;
  f.select.selectedIndex = 3; f.window.JehlpUI.enhance();
  assert.equal(f.document.children.length, 2); assert.equal(trigger.listeners.click.length, 1); assert.equal(trigger.textContent, 'Reading');
  trigger.emit('keydown', { key: 'd' }); trigger.emit('keydown', { key: 'Enter' });
  assert.equal(f.select.selectedIndex, 2);
  trigger.emit('click'); f.document.emit('pointerdown'); assert.equal(menu.hidden, true);
  trigger.emit('click'); trigger.emit('keydown', { key: 'Tab' }); assert.equal(menu.hidden, true);
  f.select.disabled = true; f.window.JehlpUI.enhance(); trigger.emit('click'); assert.equal(menu.hidden, true); assert.equal(trigger.disabled, true);
});
test('select option activation keeps native selection, one change event and trigger focus', () => {
  const f = selectFixture(), [trigger, menu] = f.document.children[0].children;
  let changes = 0; f.select.addEventListener('change', () => changes++);
  trigger.emit('click'); menu.emit('click', { target: menu.children[3] });
  assert.equal(f.select.selectedIndex, 3); assert.equal(changes, 1); assert.equal(f.document.activeElement, trigger);
  trigger.emit('click'); menu.emit('click', { target: menu.children[3] }); assert.equal(changes, 1);
});
test('scrolling a focused select into view does not cancel its pending keyboard choice', () => {
  const f = selectFixture(), [trigger, menu] = f.document.children[0].children;
  trigger.emit('keydown', { key: 'End' });
  f.window.emit('scroll', { target: f.document });
  assert.equal(menu.hidden, false);
  assert.equal(trigger.getAttribute('aria-activedescendant'), menu.children[3].id);
  trigger.emit('keydown', { key: 'Enter' }); assert.equal(f.select.selectedIndex, 3);
  trigger.emit('click'); trigger.rect.bottom = -10; f.window.emit('scroll', { target: f.document });
  assert.equal(menu.hidden, true);
});
