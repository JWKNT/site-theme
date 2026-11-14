import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { check, head } from '../tools/check-embeds.mjs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the theme pages have a complete link preview with the Site Theme card', async () => {
  for (const file of ['index.html', 'components.html', 'philosophy.html']) {
    const { meta } = head(read(file));
    assert.equal(meta['og:image'], 'https://jehlp.net/site-theme/v2/cards/site-theme.png', file);
    assert.equal(meta['twitter:card'], 'summary', file);
    for (const key of ['og:title', 'og:description', 'og:url', 'og:image:alt']) assert.ok(meta[key], `${file} ${key}`);
  }
});

test('the checker names what a page is missing', async () => {
  const bare = await check('x.html', '<html><head><title>X</title></head><body></body></html>');
  for (const tag of ['og:title', 'og:description', 'og:image', 'og:url', 'twitter:card']) assert.ok(bare.problems.includes(`no ${tag}`), tag);
  const svg = await check('y.html', '<head><title>Y</title><meta property="og:image" content="/mark.svg"></head>');
  assert.ok(svg.problems.includes('og:image is not an absolute https URL'));
});

test('the rule is in the philosophy, the component contract and the release and QA skills', () => {
  for (const file of ['PHILOSOPHY.md', 'philosophy.html']) assert.match(read(file), /link preview[\s\S]*check-embeds\.mjs/i, file);
  assert.match(read('docs/COMPONENTS.md'), /## Link preview[\s\S]*og:image[\s\S]*twitter:card/);
  for (const skill of ['jehlp-pages-release', 'jehlp-site-qa', 'jehlp-site-design']) assert.match(read(`skills/${skill}/SKILL.md`), /check-embeds\.mjs/, skill);
});
