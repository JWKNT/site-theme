import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('puzzle transition is a dedicated RGBA ornament, not the masthead logo', async () => {
  const ornament = await readFile(new URL('../v2/ornaments/puzzle-transition.png', import.meta.url));
  const masthead = await readFile(new URL('../v2/marks/puzzles.png', import.meta.url));
  assert.equal(ornament.subarray(1, 4).toString(), 'PNG');
  assert.equal(ornament.readUInt32BE(16), 128);
  assert.equal(ornament.readUInt32BE(20), 128);
  assert.equal(ornament[25], 6, 'RGBA preserves a transparent background');
  assert.ok(ornament.length < 12000, 'the small divider should stay lightweight');
  assert.ok(!ornament.equals(masthead));
});
