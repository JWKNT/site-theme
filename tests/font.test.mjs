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
test('all current and legacy Home asset names retain exact folio geometry', () => {
 const approved = read('v2/icons/home-folio-scroll.svg').toString();
 for (const file of ['icons/home-compass.svg', 'icons/home.svg', 'icons/home-emblem.svg', 'symbols/home.svg']) assert.equal(read(`v2/${file}`).toString(), approved);
 assert.match(approved, /M6 4H16C20 4 21 8 18 9C15 10 14 6 16 4/);
});
