import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../v2/components.css', import.meta.url), 'utf8');
const base = readFileSync(new URL('../v2/base.css', import.meta.url), 'utf8');
const block = (source, selector) => source.slice(source.indexOf(`${selector} {`)).split('}')[0];

test('opt-in native tables keep one opaque sticky header and non-collapsing rules', () => {
  assert.match(block(css, '.ui-table'), /margin: 0; border-collapse: separate; border-spacing: 0/);
  assert.match(block(css, '.ui-table > thead'), /position: sticky; top: 0/);
  assert.match(block(css, '.ui-table > thead'), /background: var\(--surface/);
  assert.match(block(css, '.ui-table > thead > tr > th'), /position: static/);
  assert.match(block(css, '.ui-table > tbody > tr > th'), /position: static/);
  assert.match(css, /@media print[\s\S]*\.ui-table > thead \{ position: static/);
  assert.match(css, /\[data-scroll-region\] \{ max-height: none !important; overflow: visible !important;/);
});

test('task labels and header bands use a normal-case interface scale', () => {
  for (const selector of ['th', '.data-label, .control-label', '.data-strip dt', '.section-index']) {
    const rule = block(base, selector);
    assert.match(rule, /var\(--text-ui\)/, selector);
    assert.doesNotMatch(rule, /small-caps|text-transform:\s*lowercase/, selector);
  }
  assert.match(block(css, '.ui-table > thead > tr > th'), /font: 600 var\(--text-ui, \.875rem\)/);
  const gallery = readFileSync(new URL('../components.html', import.meta.url), 'utf8');
  assert.match(gallery, /class="component-table ui-table"/);
});
