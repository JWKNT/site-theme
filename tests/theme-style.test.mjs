import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../v2/base.css', import.meta.url), 'utf8');
const control = css.match(/\[data-theme-toggle\]\.theme-toggle \{([^}]+)\}/)[1];

test('theme control is symbol-only with an unboxed 44px hit target', () => {
  assert.match(control, /display: inline-grid/);
  assert.match(control, /min-width: 2\.75rem/);
  assert.match(control, /min-height: 2\.75rem/);
  assert.match(control, /overflow: visible/);
  assert.match(control, /border-radius: 0/);
  assert.match(control, /box-shadow: none/);
  assert.match(control, /font-size: 0/);
  assert.match(css, /\.theme-toggle:hover:not\(:disabled\) \{\s*border-color: transparent;\s*border-bottom-color: var\(--line-strong\)/);
  assert.doesNotMatch(css, /content: "(?:Light|Dark)"/);
  assert.doesNotMatch(css, /\.theme-toggle::after/);
});

test('dial masks stay relative, mode-distinct and compatible with the offline exporter', () => {
  const moon = readFileSync(new URL('../v2/icons/theme-dial-dark.svg', import.meta.url), 'utf8');
  const sun = readFileSync(new URL('../v2/icons/theme-dial-light.svg', import.meta.url), 'utf8');
  for (const [name, svg] of [['dial-dark', moon], ['dial-light', sun]]) {
    assert.match(css, new RegExp(`icons/theme-${name}\\.svg`));
    assert.match(svg, /viewBox="0 0 24 24"/);
    assert.doesNotMatch(svg, /<script|<image|https?:\/\/(?!www\.w3\.org)/);
  }
  assert.notEqual(moon, sun);
  assert.match(sun, /rotate\(180 12 12\)/);
});

test('floating placement, keyboard focus and reduced-motion/print fallbacks remain explicit', () => {
  assert.match(css, /\[data-theme-toggle\]\.theme-toggle--floating \{ position: fixed/);
  assert.match(css, /button:focus-visible[^}]+outline: 2px solid var\(--blue\)/);
  assert.match(css, /@media \(forced-colors: active\)[\s\S]*background: ButtonText/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.theme-toggle::before \{ transition: none; \}/);
  assert.match(css, /@media print[\s\S]*\.theme-toggle[^}]+display: none !important/);
});
