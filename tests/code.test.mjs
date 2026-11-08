import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const base = read('v2/base.css');
const components = read('v2/components.css');
const block = selector => base.match(new RegExp(`${selector.replace(/[[\]"]/g, '\\$&')} \\{([^}]*)\\}`))[1];
const token = (css, name) => css.match(new RegExp(`--${name}: ([^;]+);`))?.[1].trim();
const luminance = hex => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(c => c <= .03928 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);
  return .2126 * r + .7152 * g + .0722 * b;
};
const contrast = (a, b) => { const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m); return (x + .05) / (y + .05); };
const codeTokens = ['comment', 'keyword', 'string', 'number', 'title', 'type', 'meta', 'deletion'];

test('code tokens alias theme tones and stay legible on paper and surface in both modes', () => {
  const light = block(':root'), dark = block(':root[data-theme="dark"]');
  for (const name of codeTokens) {
    const alias = token(light, `code-${name}`)?.match(/^var\(--([\w-]+)\)$/)?.[1];
    assert.ok(alias, `--code-${name} aliases a theme token`);
    for (const [mode, css] of [['light', light], ['dark', dark]]) {
      const color = token(css, alias);
      assert.match(color, /^#[0-9a-f]{6}$/i, `${mode} ${alias}`);
      for (const ground of ['paper', 'surface']) assert.ok(contrast(color, token(css, ground)) >= 4.5, `${mode} --code-${name} on ${ground}`);
    }
  }
  assert.match(base, /@media print \{[\s\S]*--code-string: #333; --code-deletion: #333;/);
});

test('highlight.js spans use the shared tokens with fallbacks for independently deployed pages', () => {
  for (const name of codeTokens) assert.match(components, new RegExp(`var\\(--code-${name}, var\\(--[\\w-]+, #[0-9a-f]{6}\\)\\)`, 'i'), name);
  for (const span of ['comment', 'keyword', 'string', 'number', 'title', 'built_in', 'attr', 'meta']) assert.match(components, new RegExp(`\\.hljs-${span}\\b`), span);
  assert.match(components, /\.ui-code \{[^}]*overflow: auto;[^}]*font: var\(--text-ui, \.875rem\)\/1\.55 var\(--mono/);
  assert.match(components, /\.ui-code--wrap > code \{[^}]*white-space: pre-wrap;/);
  assert.doesNotMatch(components, /\.hljs[^{]*\{[^}]*background/, 'no token backgrounds');
  assert.doesNotMatch(components, /\.hljs-keyword[^{]*\{[^}]*font-weight/, 'no bold keywords');
});

test('the skill, catalog, philosophy and gallery describe build-time highlighting', () => {
  const skill = read('skills/jehlp-code-highlighting/SKILL.md');
  assert.match(skill, /^---\nname: jehlp-code-highlighting\ndescription: /);
  assert.match(skill, /Highlight code during the build/);
  assert.match(read('SKILLS.md'), /These are eleven focused skills\.[\s\S]*\[`jehlp-code-highlighting`\]\(skills\/jehlp-code-highlighting\/SKILL\.md\)/);
  for (const text of [read('PHILOSOPHY.md'), read('philosophy.html')]) assert.match(text, /Show code as code[\s\S]*during the build/);
  assert.match(read('docs/COMPONENTS.md'), /\*\*Code listings\.\*\*/);
  const gallery = read('components.html');
  assert.match(gallery, /<pre class="ui-code" tabindex="0" aria-label="[^"]+"><code class="hljs language-python"><span class="hljs-keyword">/);
  assert.match(gallery, /<a href="#code">Code<\/a>/);
});
