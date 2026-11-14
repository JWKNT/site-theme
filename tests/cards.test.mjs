import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url));
const manifest = JSON.parse(read('v2/marks/manifest.json'));

// A link preview card: square, at least the 200px that the apps ask for, and opaque, because some
// apps fill a transparent image with black.
test('each subject symbol has an opaque square link preview card', () => {
  for (const asset of manifest.assets) {
    const png = read(`v2/cards/${asset.id}.png`);
    assert.equal(png.subarray(1, 4).toString(), 'PNG', asset.id);
    assert.equal(png.readUInt32BE(16), 600, `${asset.id} width`);
    assert.equal(png.readUInt32BE(20), 600, `${asset.id} height`);
    assert.ok([0, 2, 3].includes(png[25]), `${asset.id} has no alpha channel`);
  }
});
