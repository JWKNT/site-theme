import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('public typography guidance retains the authored Georgia and Palatino roles', () => {
  const philosophy = readFileSync(new URL('../PHILOSOPHY.md', import.meta.url), 'utf8');
  const page = readFileSync(new URL('../philosophy.html', import.meta.url), 'utf8');
  for (const text of [philosophy, page]) {
    assert.match(text, /Georgia for reading and ordinary interface text/);
    assert.match(text, /Palatino/);
    assert.match(text, /Reserve sans serif for genuinely tiny chart labels/);
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
