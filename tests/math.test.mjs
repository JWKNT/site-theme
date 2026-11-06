import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url));
const text = path => read(path).toString();

test('the component layer owns one math face and a scrolling display block', () => {
  const css = text('v2/components.css');
  assert.match(css, /@font-face \{ font-family: "Latin Modern Math"; src: url\("fonts\/latinmodern-math\.otf"\)[^}]*font-display: swap; \}/);
  assert.match(css, /--math: "Latin Modern Math"/);
  assert.match(css, /math \{ font-family: var\(--math\)/);
  assert.match(css, /\.ui-math-char \{ font-family: var\(--math\)/);
  assert.match(css, /\.ui-equation \{[^}]*overflow-x: auto/);
  assert.match(css, /@media print \{[\s\S]*\.ui-code, \.ui-equation \{ overflow: visible; \}/);
  assert.match(css, /math \.tml-right \{ text-align: right; text-align: -webkit-right; \}/);
});

test('the math font is a real OpenType file with its notices beside it', () => {
  assert.equal(read('v2/fonts/latinmodern-math.otf').toString('ascii', 0, 4), 'OTTO');
  assert.ok(text('v2/fonts/LICENSE-Latin-Modern.txt').length > 500);
  assert.match(text('v2/fonts/README.md'), /Latin Modern Math[\s\S]*LICENSE-Latin-Modern\.txt/);
});

test('the skill, catalog, philosophy and gallery describe build-time mathematics', () => {
  const skill = text('skills/jehlp-math-explainer/SKILL.md');
  assert.match(skill, /^---\nname: jehlp-math-explainer\ndescription: /);
  assert.match(skill, /Do not show the proof/);
  assert.match(skill, /400 to 800 words/);
  assert.match(skill, /Assume school arithmetic/);
  assert.match(skill, /`content\/<slug>\.html`/);
  assert.match(skill, /Do not load a typesetter in the browser/);
  assert.match(text('SKILLS.md'), /\[`jehlp-math-explainer`\]\(skills\/jehlp-math-explainer\/SKILL\.md\)/);
  for (const page of ['PHILOSOPHY.md', 'philosophy.html']) {
    assert.match(text(page), /Show mathematics as mathematics[\s\S]*native MathML during the build/);
    assert.match(text(page), /Say what a result means, then stop[\s\S]*does not show the proof/);
    assert.match(text(page), /Say what a result means, then stop[\s\S]*assumes school arithmetic, defines each term at first use/);
  }
  assert.match(text('docs/COMPONENTS.md'), /\*\*Mathematics\.\*\*/);
  const gallery = text('components.html');
  assert.match(gallery, /<a href="#math">Math<\/a>/);
  assert.match(gallery, /<div class="ui-equation" data-scroll-region data-scroll-noun="of the formula" aria-label="[^"]+"><math display="block">/);
  assert.match(text('v2/components.js'), /region\.dataset\.scrollNoun \|\| "columns"/);
});
