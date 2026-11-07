import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = path => readFileSync(new URL(`../${path}`, import.meta.url));
test('the approved Wrenfold Regular font supplies reading prose while original UI roles remain', () => {
 const css = read('v2/base.css').toString();
 assert.match(css, /@font-face\s*\{[^}]*font-family: "Wrenfold Text";[^}]*fonts\/WrenfoldText-Regular\.woff2[^}]*font-weight: 400;[^}]*font-display: swap;/);
 assert.match(css, /--reading: "Wrenfold Text", Georgia/);
 assert.match(css, /--serif: Georgia, "Times New Roman", serif/);
 assert.match(css, /--display: "Palatino Linotype"/);
 assert.match(css, /\.prose \{[^}]*font-family: var\(--reading\)/);
 assert.match(css, /--ui: var\(--serif\)/);
 assert.match(css, /code, kbd, pre, samp \{ font-family: var\(--mono\)/);
 assert.match(read('v2/fonts/OFL-1.1.txt').toString(), /License: OFL-1.1/);
 assert.match(read('v2/fonts/Noto-Debian-copyright.txt').toString(), /Copyright/);
 assert.equal(read('v2/fonts/WrenfoldText-Regular.woff2').toString('ascii', 0, 4), 'wOF2');
});
test('all current and legacy Home icon names draw the open door', () => {
 const approved = read('v2/icons/home-doorway.svg').toString();
 for (const file of ['home-folio-scroll', 'home-compass', 'home', 'home-emblem']) assert.equal(read(`v2/icons/${file}.svg`).toString(), approved);
 assert.match(approved, /<title>Open door - Home<\/title>/);
 assert.match(approved, /M5 21V9\.5a7 7 0 0 1 14 0V21/);
});

test('translation definitions and article text use the reading role', () => {
 const css=read('v2/reader.css').toString();
 assert.match(css,/\.line-text \{ font-family: var\(--reading/);
 assert.match(css,/\.glossary-popover \{[^}]+font: var\(--text-body, 1rem\)\/1\.6 var\(--reading/);
 assert.match(css,/\.glossary-entry h2, \.glossary-language > p, \.glossary-definition p \{ font-family: var\(--reading/);
});
