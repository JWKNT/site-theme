import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
test('the shared writing policy preserves source content and exact technical meaning',()=>{
 const policy=read('docs/WRITING-STYLE.md');
 for(const term of ['ASD-STE100 Issue 9','20 words','25 words','six sentences','translations','NDB fictional dialogue','item descriptions','quantifiers','dictionary','screening aids'])assert.ok(policy.includes(term),term);
 assert.match(policy,/Do not claim certification or complete conformity/);
 assert.match(read('AGENTS.md'),/docs\/WRITING-STYLE\.md/);
 assert.match(read('SKILLS.md'),/jehlp-technical-writing/);
});
test('every maintained site skill includes the original technical writing default',()=>{
 for(const dir of readdirSync(new URL('../skills/',import.meta.url))){
  const skill=read(`skills/${dir}/SKILL.md`);
  assert.match(skill,/WRITING-STYLE\.md/,dir);
  assert.match(skill,/ASD-STE100 Issue 9/,dir);
 }
});
