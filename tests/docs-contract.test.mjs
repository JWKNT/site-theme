import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('public typography guidance retains the approved Wrenfold Text roles', () => {
  const philosophy = readFileSync(new URL('../PHILOSOPHY.md', import.meta.url), 'utf8');
  const page = readFileSync(new URL('../philosophy.html', import.meta.url), 'utf8');
  for (const text of [philosophy, page]) {
    assert.match(text, /Wrenfold Text for reading, headings, and ordinary interface text/);
    assert.match(text, /Reserve sans serif for very small chart labels/);
  }
  assert.doesNotMatch(page, /sans serif for interface and metadata/);
});

test('copyable header markup supplies the named native Home and styled theme pair', () => {
  const contracts = readFileSync(new URL('../docs/COMPONENTS.md', import.meta.url), 'utf8');
  const header = contracts.match(/<header class="site-header site-header--identity">[\s\S]*?<\/header>/)?.[0];
  assert.ok(header, 'the identity contract includes a complete header example');
  assert.match(header, /class="site-utility-pair"/);
  assert.match(header, /class="site-home" href="https:\/\/jehlp\.net\/" aria-label="Home — jehlp.net"/);
  assert.match(header, /<button class="theme-toggle" type="button" data-theme-toggle/);
});

test("documentation mastheads are static and omit current-page navigation", () => {
  for (const filename of ["index.html", "components.html", "philosophy.html"]) {
    const html = readFileSync(new URL(`../${filename}`, import.meta.url), "utf8");
    const header = html.match(/<header class="site-header[\s\S]*?<\/header>/)[0];
    assert.doesNotMatch(header, /<a class="site-title"/);
    assert.doesNotMatch(header, /aria-current="page"/);
    if (filename !== "index.html") assert.match(header, /href="index.html">Design system/);
  }
});
