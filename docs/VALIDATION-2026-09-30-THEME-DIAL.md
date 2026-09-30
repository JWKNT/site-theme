# Symbol-only theme dial — September 30, 2026

## Scope and final design

The owner requested a more fitting theme control across the site, then explicitly
requested symbol-only artwork with no visible Light/Dark label. The accepted revision
uses a half-ink dial with a fine diagonal, no enclosing badge or hover shadow, a
44×44 CSS-pixel target and the existing accessible action name/title and pressed state.
The theme controller, storage keys, legacy migration and public events are unchanged.

New `theme-dial-dark.svg` / `theme-dial-light.svg` filenames and the
`base.css?v=20260930-dial` consumer reference avoid stale masks and CSS. Legacy
SVG filenames remain available. Every tracked consumer HTML page and relevant
generator was checked; the offline solver embeds its masks and foundation.

NDB Idle has no existing light/dark switch and retains its explicit independent-game
styling exception. No new game theme feature or game-state change was introduced.

## Verification

- All 25 shared static/behavior tests pass
- Homepage: 11 tests; Links: 8; Albatross: 12 Node + 7 Python; Black Sheep Town:17; Profile:12; Mystery:19; NGU dashboard:8; puzzles:11; Baba:47
- Box Logic test suite and Pages build pass; guide build/syntax/TSV checks pass
- Solver rebuild and 3 targeted UI/source smoke tests pass. No solver engines were changed; the expensive engine/soundness batteries were not rerun
- BL2 change is a stylesheet query only; no dedicated test suite was present
- After rebuilding, consumer HTML differed only by the stylesheet version reference. No text, datasets, source links, diagrams or recordings were changed
- All13 consumer deployments completed successfully for the exact commits below
- HTTP review: all159 relevant public HTML/export routes serve versioned shared CSS or the updated inline export
- Rendered Chromium review: all13 shared landing pages at384 effective CSS px show new masks, no ::after text,44×44 controls and no document-wide horizontal overflow. Nested glossary,quiz,tools,guide and puzzle routes checked too
- Both modes, Enter/Space activation, visible keyboard focus, reload persistence and cross-page persistence verified. Desktop views and200%/300% browser zoom reviewed. Narrow widths used native window resizing/browser zoom; no mobile-device emulation is claimed
- The self-contained solver visibly loads the embedded dial and switches themes. Its build verifies there are no external runtime scripts/styles/masks; a disconnected-network browser run was not available
- Local preview and DevTools were blocked by browser policy, so rendering checks followed authorized publication. Native print preview, actual forced-colors mode, no-JS and Safari were not rerun; their unchanged/explicit style fallbacks have static coverage

## Released consumer commits

| Repository | Commit | Deployment |
| --- | --- | --- |
| JWKNT.github.io | `ac14b1b` | [successful run](https://github.com/JWKNT/JWKNT.github.io/actions/runs/36678597565) |
| links | `af7e4f8` | [successful run](https://github.com/JWKNT/links/actions/runs/36678596490) |
| box-puzzles | `00f2c17` | [successful run](https://github.com/JWKNT/box-puzzles/actions/runs/36678597021) |
| logical-solver | `ff5e1cf` | [successful run](https://github.com/JWKNT/logical-solver/actions/runs/36678596701) |
| albatross-koukairoku | `3676c0c` | [successful run](https://github.com/JWKNT/albatross-koukairoku/actions/runs/36678596824), [successful run](https://github.com/JWKNT/albatross-koukairoku/actions/runs/36678596564) |
| black-sheep-town | `fc1f1f5` | [successful run](https://github.com/JWKNT/black-sheep-town/actions/runs/36678619360) |
| profile | `94d2343` | [successful run](https://github.com/JWKNT/profile/actions/runs/36678620790) |
| mystery-report | `67ca6fa` | [successful run](https://github.com/JWKNT/mystery-report/actions/runs/36678619549) |
| baba-is-you | `c461b9d` | [successful run](https://github.com/JWKNT/baba-is-you/actions/runs/36678619958) |
| mtl-guide | `b05e74f` | [successful run](https://github.com/JWKNT/mtl-guide/actions/runs/36678620435) |
| ngu-idle-dashboard | `fa44435` | [successful run](https://github.com/JWKNT/ngu-idle-dashboard/actions/runs/36678643653) |
| puzzles | `37d24da` | [successful run](https://github.com/JWKNT/puzzles/actions/runs/36678643336) |
| bl2 | `38c4f06` | [successful run](https://github.com/JWKNT/bl2/actions/runs/36678644008) |

Shared runtime/assets: `74c48cd` (merges the final symbol-only revision while
preserving concurrent reader-release documentation). Its Pages deployment succeeded.

Readers vendor integration is recorded separately once its owner confirms publication.

## Rollback

Revert the theme-control commits for artwork changes. Each consumer commit changes
only the version reference (plus the rebuilt solver export and matching static tests),
so its parent is the rollback base. Do not reset or overwrite unrelated concurrent work.
