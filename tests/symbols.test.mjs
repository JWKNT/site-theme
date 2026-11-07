import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { inflateSync } from 'node:zlib';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root));
const manifest = JSON.parse(read('v2/marks/manifest.json'));

// Decode the checked-in RGBA PNG rows to verify actual pixels, not just metadata.
function rgba(png) {
  const width = png.readUInt32BE(16), height = png.readUInt32BE(20), parts = [];
  assert.equal(png[24], 8, '8-bit channels');
  assert.equal(png[25], 6, 'RGBA');
  assert.equal(png[28], 0, 'non-interlaced');
  for (let pos = 8; pos < png.length;) {
    const size = png.readUInt32BE(pos);
    if (png.toString('ascii', pos + 4, pos + 8) === 'IDAT') parts.push(png.subarray(pos + 8, pos + 8 + size));
    pos += size + 12;
  }
  const packed = inflateSync(Buffer.concat(parts)), pixels = Buffer.alloc(width * height * 4), stride = width * 4;
  const paeth = (a, b, c) => {
    const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  for (let y = 0; y < height; y++) {
    const kind = packed[y * (stride + 1)];
    assert.ok(kind <= 4, 'known PNG row filter');
    for (let x = 0; x < stride; x++) {
      const pos = y * stride + x, a = x < 4 ? 0 : pixels[pos - 4], b = y ? pixels[pos - stride] : 0, c = x < 4 || !y ? 0 : pixels[pos - stride - 4];
      pixels[pos] = (packed[y * (stride + 1) + x + 1] + [0, a, b, Math.floor((a + b) / 2), paeth(a, b, c)][kind]) & 255;
    }
  }
  return pixels;
}

test('mastheads and favicons share maintained monochrome geometry', () => {
  assert.equal(manifest.assetCount, manifest.assets.length);
  for (const asset of manifest.assets) {
    assert.ok(asset.meaning, `${asset.id} explains its subject connection`);
    const svg = read(`v2/symbols/${asset.id}.svg`).toString();
    assert.match(svg, /viewBox="0 0 24 24"/);
    assert.doesNotMatch(svg, /<text|<image|https?:\/\/(?!www\.w3\.org)/);
    if (asset.id === 'home') assert.match(svg, /stroke="currentColor"/);
    else assert.deepEqual([...new Set(svg.match(/#[\da-f]{3,8}/gi))], ['#000']);
    for (const kind of ['marks', 'favicons']) {
      const pixels = rgba(read(`v2/${kind}/${asset.file}`));
      let visible = 0;
      for (let n = 0; n < pixels.length; n += 4) {
        if (!pixels[n + 3]) continue;
        visible++;
        assert.equal(pixels[n], pixels[n + 1], `${asset.id} ${kind} red/green`);
        assert.equal(pixels[n], pixels[n + 2], `${asset.id} ${kind} red/blue`);
        if (kind === 'marks') assert.equal(pixels[n], 0, `${asset.id} uses black ink`);
      }
      assert.ok(visible > 200, `${asset.id} ${kind} is not blank`);
    }
  }
});

test('the site identity is the Ruffle seal, style library i0063', () => {
  const seal = read('v2/symbols/home.svg').toString();
  assert.match(seal, /<title>Ruffle seal - Home<\/title>/);
  assert.match(seal, /M12 3\.2C14 2\.1 16 4 16 5\.5/);
  assert.notEqual(seal, read('v2/icons/home-doorway.svg').toString());
});

test('every favicon is a white symbol on a circular black field', () => {
  for (const asset of manifest.assets) {
    const png = read(`v2/favicons/${asset.file}`);
    const size = png.readUInt32BE(16), pixels = rgba(png);
    assert.equal(size, 192, asset.id);
    const alpha = (x, y) => pixels[(y * size + x) * 4 + 3];
    const center = (size - 1) / 2, radius = center - 3;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const distance = Math.hypot(x - center, y - center);
        if (distance > radius + 2) assert.equal(alpha(x, y), 0, `${asset.id} is transparent outside the circle at ${x},${y}`);
        else if (distance < radius - 2) assert.equal(alpha(x, y), 255, `${asset.id} is opaque inside the circle at ${x},${y}`);
      }
    }
    // A symbol that reaches the rim would leave no black ring around it.
    for (let turn = 0; turn < 360; turn++) {
      const x = Math.round(center + (radius - 3) * Math.cos(turn * Math.PI / 180));
      const y = Math.round(center + (radius - 3) * Math.sin(turn * Math.PI / 180));
      assert.ok(pixels[(y * size + x) * 4] < 80, `${asset.id} keeps a black rim at ${turn} degrees`);
    }
  }
});

test('dark and print inversion is limited to decorative site identities', () => {
  const css = read('v2/base.css').toString();
  assert.match(css, /:root\[data-theme="dark"\] \.site-mark,\s*:root\[data-theme="dark"\] \.site-divider > img \{ filter: invert\(1\); \}/);
  assert.match(css, /@media print \{[^}]*\.site-divider > img \{ filter: none;/);
  assert.doesNotMatch(css, /(?:^|\})\s*(?:img|:root\[data-theme="dark"\] img)\s*\{[^}]*filter:/);
  const pixels = rgba(read('v2/ornaments/puzzle-transition.png'));
  for (let n = 0; n < pixels.length; n += 4) if (pixels[n + 3]) assert.equal(pixels[n] + pixels[n + 1] + pixels[n + 2], 0);
});
