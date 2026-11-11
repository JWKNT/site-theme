import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../v2/reader.css', import.meta.url), 'utf8');

test('each group in the reader control row has one label line, the same gap and one control line', () => {
  assert.match(css, /\.chapter-control \{[^}]*gap: 6px;/);
  assert.match(css, /\.reader-controls \.control-label \{ margin: 0; \}/, 'the chapter label has no extra margin');
  assert.match(css, /\.scope-control legend \{ margin-bottom: 6px; padding: 0; \}/);
  assert.match(css, /\.scope-control label \{[^}]*min-height: var\(--control-size, 2\.25rem\);/, 'a scope choice has the height of a control');
  assert.match(css, /\.search-control \{ display: grid; gap: 6px; \}/);
});

test('on a phone the hidden Clear button keeps no gap beside the search field', () => {
  const phone = css.slice(css.indexOf('@media (max-width: 650px)'));
  assert.match(phone, /\.reader-controls \{ display: grid; grid-template-columns: 1fr auto; gap: 12px 0; \}/);
  assert.match(phone, /\.clear-search \{ margin-left: 8px; \}/);
});
