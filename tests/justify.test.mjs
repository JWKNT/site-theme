import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the base stylesheet justifies and hyphenates text by default', () => {
  const css = read('v2/base.css');
  assert.match(css, /^p, \.prose li \{ text-align: justify; -webkit-hyphens: auto; hyphens: auto; \}$/m);
  assert.match(css, /^\.empty-state p \{ text-align: inherit; \}$/m, 'a centered empty state keeps its paragraphs centered');
  assert.match(css, /^code, kbd, pre, samp \{ -webkit-hyphens: manual; hyphens: manual; \}$/m, 'code keeps its exact words');
  assert.doesNotMatch(css, /(?:^|[,{}]\s*)(?:p|\.prose p)\s*\{[^}]*text-align: (?:left|start)/m);
});

test('the philosophy, design system, skill and decisions record justified text', () => {
  for (const text of [read('PHILOSOPHY.md'), read('philosophy.html')]) assert.match(text, /Justify text by default\. The shared stylesheet aligns paragraphs to both edges and hyphenates them/);
  assert.match(read('docs/DESIGN-SYSTEM.md'), /\| Paragraph alignment \| Justified, with hyphenation \|/);
  assert.match(read('skills/jehlp-site-design/SKILL.md'), /Justify text by default\./);
  assert.match(read('docs/DECISIONS.md'), /^# Design decisions\n\n## 042 — Justified text by default/);
});

test('a directory description is a short gloss and is not justified', () => {
  const components = readFileSync(new URL('../v2/components.css', import.meta.url), 'utf8');
  assert.match(components, /\.ui-directory p \{[^}]*text-align: start;[^}]*hyphens: manual; \}/);
});
