import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../v2/base.css', import.meta.url), 'utf8');
function luminance(hex) {
  const channels = hex.match(/[a-f0-9]{2}/gi).map(value => parseInt(value, 16) / 255)
    .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
}

test('small identity accents retain readable contrast on both paper palettes', () => {
  for (const selector of [':root', ':root[data-theme="dark"]']) {
    const block = css.slice(css.indexOf(`${selector} {`)).split('}')[0];
    const token = name => block.match(new RegExp(`--${name}: (#[a-f0-9]{6});`, 'i'))?.[1];
    const paper = luminance(token('paper'));
    for (const tone of ['blue', 'plum', 'teal', 'ochre']) {
      const ink = luminance(token(`tone-${tone}`));
      assert.ok((Math.max(paper, ink) + .05) / (Math.min(paper, ink) + .05) >= 4.5,
        `${selector} ${tone} must support small editorial labels`);
    }
  }
});

test('theme pages retain local navigation without a global-home shortcut', () => {
  for (const page of ['index.html', 'components.html', 'philosophy.html']) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    assert.doesNotMatch(html, /<a\b[^>]*href=["'](?:https?:\/\/(?:www\.)?jehlp\.net\/?|\/)["']/i, page);
    assert.match(html, /class="site-mark" aria-hidden="true"/, page);
  }
});
