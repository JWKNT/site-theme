import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../v2/theme.js', import.meta.url), 'utf8');
function page({ saved = {}, dark = false, blocked = false, writeBlocked = false, loading = false, control = true } = {}) {
  const data = new Map(Object.entries(saved)), events = [], listeners = {}, ready = {};
  let mediaChange, inserted = 0;
  const button = () => ({ dataset: {}, attrs: {}, classList: { add() {} }, setAttribute(k, v) { this.attrs[k] = v; }, addEventListener(k, f) { this[k] = f; } });
  const buttons = control ? [button()] : [];
  const root = { dataset: {}, style: {}, classList: { toggle(k, v) { this[k] = v; } } };
  const meta = { content: '' };
  const media = { matches: dark, addEventListener(k, f) { mediaChange = f; } };
  const storage = {
    getItem(k) { if (blocked) throw Error('Unavailable'); return data.get(k) ?? null; },
    setItem(k, v) { if (blocked || writeBlocked) throw Error('Unavailable'); data.set(k, v); }
  };
  const slot = { append(b) { inserted++; buttons.push(b); } };
  const document = {
    documentElement: root, readyState: loading ? 'loading' : 'complete',
    querySelectorAll() { return buttons; },
    querySelector(q) { return q.startsWith('meta') ? meta : q === '[data-theme-toggle]' ? buttons[0] : slot; },
    createElement: button, body: { prepend(b) { inserted++; buttons.push(b); } },
    addEventListener(k, f) { ready[k] = f; }
  };
  const window = { matchMedia() { return media; }, addEventListener(k, f) { listeners[k] = f; }, dispatchEvent(e) { events.push(e); } };
  vm.runInNewContext(source, { document, window, localStorage: storage, CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } } });
  return { root, data, meta, buttons, events, get inserted() { return inserted; },
    ready: () => ready.DOMContentLoaded?.(),
    system(value) { media.matches = value; mediaChange({ matches: value }); },
    storage(key, newValue) { listeners.storage({ key, newValue, storageArea: storage }); }
  };
}

test('applies the saved mode before DOM readiness and binds the existing control once', () => {
  const p = page({ saved: { 'jehlp-theme': 'dark' }, loading: true });
  assert.equal(p.root.dataset.theme, 'dark');
  assert.equal(p.root.classList.dark, true);
  assert.equal(p.root.style.colorScheme, 'dark');
  p.ready();
  assert.equal(p.inserted, 0);
  p.buttons[0].click();
  assert.equal(p.data.get('jehlp-theme'), 'light');
  assert.equal(p.buttons[0].attrs['aria-label'], 'Use dark theme');
});
test('system changes apply until the user makes an explicit choice', () => {
  const p = page(); p.system(true);
  assert.equal(p.root.dataset.theme, 'dark');
  p.buttons[0].click(); p.system(true);
  assert.equal(p.root.dataset.theme, 'light');
});
test('migrates all three legacy preferences even if writing storage is blocked', () => {
  for (const key of ['jwknt-theme', 'bst-reader-theme', 'solverTheme']) {
    const p = page({ saved: { [key]: 'dark' }, writeBlocked: true });
    assert.equal(p.root.dataset.theme, 'dark');
  }
});
test('blocked storage does not disable the control or system default', () => {
  const p = page({ blocked: true, dark: true, control: false });
  assert.equal(p.inserted, 1); p.buttons[0].click();
  assert.equal(p.root.dataset.theme, 'light');
});
test('cross-tab updates synchronize; removing the preference resumes system mode', () => {
  const p = page({ dark: false });
  p.storage('jehlp-theme', 'dark');
  assert.equal(p.root.dataset.theme, 'dark');
  p.system(false); assert.equal(p.root.dataset.theme, 'dark');
  p.storage('jehlp-theme', null); assert.equal(p.root.dataset.theme, 'light');
  p.system(true); assert.equal(p.root.dataset.theme, 'dark');
  p.storage('unrelated', 'light'); assert.equal(p.root.dataset.theme, 'dark');
  p.storage(null, null); assert.equal(p.root.dataset.theme, 'dark');
});
test('keeps both public event names, button state, and browser chrome synchronized', () => {
  const p = page(); p.buttons[0].click();
  assert.deepEqual(p.events.slice(-2).map(e => e.type), ['jehlp:themechange', 'jwknt:themechange']);
  assert.equal(p.events.at(-1).detail.theme, 'dark');
  assert.equal(p.buttons[0].attrs['aria-pressed'], 'true');
  assert.equal(p.buttons[0].dataset.themeTarget, 'light');
  assert.equal(p.meta.content, '#131412');
});
