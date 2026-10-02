import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../v2/base.css', import.meta.url), 'utf8');
const reader = readFileSync(new URL('../v2/reader.css', import.meta.url), 'utf8');

test('document frame is independent of content measures and scrollbar presence', () => {
  assert.match(css, /html \{[^}]*scrollbar-gutter: stable;/);
  assert.match(css, /--site-frame-page: 74rem;/);
  assert.match(css, /--site-frame-width: min\(var\(--site-frame-page\), calc\(100% - 2 \* var\(--site-frame-gutter\)\)\);/);
  assert.match(css, /\.site-header \{[^}]*width: var\(--site-frame-width\);[^}]*margin: 0 auto;/);
  assert.doesNotMatch(reader, /\.site-header[^{}]*\{[^}]*\b(?:width|padding-top):/);
});
test('authored utility pair has a reserved nonsticky CSS-first lane', () => {
  assert.match(css, /\.site-header \{[^}]*position: relative;[^}]*padding: var\(--site-frame-top\) var\(--site-utility-clearance\) 1rem 0;/);
  assert.match(css, /\.site-header \.site-utility-pair \{ position: absolute; top: var\(--site-frame-top\); right: 0; margin: 0; \}/);
  for (const name of ['index.html', 'components.html', 'philosophy.html']) {
    const html = readFileSync(new URL(`../${name}`, import.meta.url), 'utf8');
    assert.match(html, /<span class="site-utility-pair"><a class="site-home"[\s\S]+?data-theme-toggle[\s\S]+?<\/button><\/span>/);
  }
});
test('frame uses homepage breakpoints and safe insets, while long titles retain a lane', () => {
  assert.match(css, /@media \(max-width: 60rem\)[\s\S]+?--site-frame-page: 48rem;/);
  assert.match(css, /@media \(max-width: 38rem\)[\s\S]+?--site-frame-top: max\(\.75rem, env\(safe-area-inset-top, 0px\)\);/);
  for (const inset of ['left', 'right', 'top']) assert.ok(css.includes(`env(safe-area-inset-${inset}, 0px)`));
  assert.match(css, /\.site-header > \.site-brand, \.site-header > \.site-title \{ padding-inline-end: var\(--site-utility-clearance\); \}/);
  assert.match(css, /\.site-header nav:has\(> \.site-utility-pair:only-child\) \{ height: 0; \}/);
});
