import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const markup = '<span class="ui-human-mark" role="img" aria-label="Written by a human" title="Written by a human"></span>';

test('the optional component layer draws the human mark in the right margin', () => {
  const css = read('v2/components.css');
  assert.match(css, /\.ui-human \{ --human-mark-size: 1\.75em; position: relative; padding-right: calc\(var\(--human-mark-size\) \* 7 \/ 3 - var\(--human-mark-hang, 0px\)\); \}/, 'the block reserves the margin unless the mark hangs');
  assert.match(css, /\.ui-human-mark \{ position: absolute; inset: 0 calc\(-1 \* var\(--human-mark-hang, 0px\)\) 0 auto; width: calc\(var\(--human-mark-size\) \* 7 \/ 3\);/, 'the mark moves out by the same amount');
  assert.match(css, /\.ui-human-mark::before \{[^}]*border: 1px solid var\(--line-strong, #aaa49a\); border-left: 0; \}/, 'a square bracket that opens toward the text');
  assert.match(css, /\.ui-human-mark::after \{[^}]*mask: url\("icons\/human\.svg"\) center \/ contain no-repeat;[^}]*print-color-adjust: exact; \}/);
  assert.match(css, /@media \(forced-colors: active\) \{ \.ui-human-mark::after \{ background: CanvasText; forced-color-adjust: none; \} \}/);
  assert.doesNotMatch(read('v2/base.css'), /ui-human/, 'the mark stays in the optional layer');
});

test('the human figure is single-ink geometry with the seal point at the heart', () => {
  const svg = read('v2/icons/human.svg');
  assert.match(svg, /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1\.4" stroke-linecap="butt" stroke-linejoin="miter">/);
  assert.match(svg, /<title>Human figure - Written by a human<\/title>/);
  assert.match(svg, /<circle cx="12" cy="5" r="2\.5"\/>/, 'head');
  assert.match(svg, /<path d="M5 21\.5C5 15\.5 7\.6 11\.6 12 9\.6C16\.4 11\.6 19 15\.5 19 21\.5"\/>/, 'pointed shoulders');
  assert.match(svg, /<rect x="11" y="14\.6" width="2" height="2" fill="currentColor" stroke="none"\/>/, 'the square point of the Ruffle seal');
  assert.doesNotMatch(svg, /#[0-9a-f]{3,6}\b|<text|<image|<script/i);
});

test('the contract, philosophy, writing policy, skill and gallery describe one human mark', () => {
  const contracts = read('docs/COMPONENTS.md');
  assert.match(contracts, /\*\*Human mark\.\*\*/);
  assert.match(contracts, /\| Human mark \| `\.ui-human` on a block/);
  assert.match(contracts, /set `--human-mark-hang` on the block to move the mark out\ninto that margin/);
  assert.ok(contracts.includes(markup));
  for (const text of [read('PHILOSOPHY.md'), read('philosophy.html')]) {
    assert.match(text, /Mark what the owner wrote/);
    assert.match(text, /AI writes and programs jehlp\.net under the owner['’]s supervision\./);
    assert.match(text, /Put the mark only on text that the owner wrote\./);
    assert.doesNotMatch(text, /jehlp\.net wordmark/);
  }
  assert.match(read('docs/WRITING-STYLE.md'), /- Preserve text that the owner wrote\. The human mark identifies it\./);
  assert.match(read('docs/DECISIONS.md'), /\n## 041 — The human mark and the homepage introduction \(2026-11-08\)\n/);
  const skill = read('skills/jehlp-human-mark/SKILL.md');
  assert.match(skill, /^---\nname: jehlp-human-mark\ndescription: /);
  assert.ok(skill.includes(markup));
  assert.match(read('SKILLS.md'), /These are eleven focused skills\.[\s\S]*\[`jehlp-human-mark`\]\(skills\/jehlp-human-mark\/SKILL\.md\)/);
  const gallery = read('components.html');
  assert.match(gallery, /<a href="#human">Human mark<\/a>/);
  assert.match(gallery, /components\.css\?v=20261108-human/);
  // The gallery marks only words that the owner wrote: a sentence from the homepage introduction.
  assert.ok(gallery.includes(`<div class="ui-human component-human"><p>I am interested in mathematics, data science, puzzles, science fiction, and otaku culture.</p>${markup}</div>`));
  assert.equal(gallery.split('class="ui-human ').length - 1, 1);
});
