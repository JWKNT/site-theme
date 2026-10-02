# Subpage maintenance — 2026-10-02

## Scope

Small readability, navigation, focus, loading, and status fixes across the existing
sites. Homepage layout, reading text, source datasets, puzzle diagrams, media,
game rules and saves, and mathematical engines were preserved. NDB Idle keeps its
independent visual identity.

## Released changes and checks

| Project | Revision and successful deployment | Checks and change |
| --- | --- | --- |
| Shared theme | [e8275e4](https://github.com/JWKNT/site-theme/commit/e8275e49ea953f5fdf5c28448c4177829f7abb71) · [Pages](https://github.com/JWKNT/site-theme/actions/runs/36969396878) | 46 tests; readable intrinsic-width select popups bounded to the viewport; corrected typography/header documentation |
| Readers | [dbef1b4](https://github.com/JWKNT/readers/commit/dbef1b4d83962655de9051970f9a27f9bef8f830) · [Pages](https://github.com/JWKNT/readers/actions/runs/36971158636) | 67 Python + 17 Node tests; superseded navigation cannot replace the current chapter; footnote Back returns to the source paragraph |
| Albatross Koukairoku | [57fc50c](https://github.com/JWKNT/albatross-koukairoku/commit/57fc50c52a413d2abea0a766454f1b988d7d602b) · [Pages](https://github.com/JWKNT/albatross-koukairoku/actions/runs/36971302493) | 22 Node + 7 Python tests; recoverable chapter loads, preserved initial input, safe fragment navigation; [validation CI](https://github.com/JWKNT/albatross-koukairoku/actions/runs/36971303025) passed |
| Black Sheep Town | [dc57f8e](https://github.com/JWKNT/black-sheep-town/commit/dc57f8e9c1a5914fa5512b73a2c76f10cd2bad23) · [Pages](https://github.com/JWKNT/black-sheep-town/actions/runs/36971307187) | 33 tests; retry/stale-error protection, safe reader/glossary fragments, and no delayed scroll from an obsolete chapter request |
| Puzzles | [2ba50a9](https://github.com/JWKNT/puzzles/commit/2ba50a99d7e4a507bfbb7a8f5c52fa8eb82806e0) · [Pages](https://github.com/JWKNT/puzzles/actions/runs/36968415018) | 17 tests; filter focus, retained catalogue hash, local coarse-pointer targets; all 126 puzzle pages preserved |
| Armory | [daa1cab](https://github.com/JWKNT/bl2/commit/daa1cabf4f67c78b4f9e46ab6d0810b5a625af50) · [Pages](https://github.com/JWKNT/bl2/actions/runs/36968853289) | 7 tests; stale URL filters cannot crash the catalogue; chip/reset focus and category-neutral dialog label |
| Consensus | [4775290](https://github.com/JWKNT/mystery-report/commit/4775290a08575241758642296ca97ec051bc62fa) · [Pages](https://github.com/JWKNT/mystery-report/actions/runs/36969287049) | 22 tests; clearing a work filter returns focus to the refreshed results |
| NGU dashboard | [2e3fdca](https://github.com/JWKNT/ngu-idle-dashboard/commit/2e3fdcaafb540dd6eda4bc823b50eede7dcb8313) · [Pages](https://github.com/JWKNT/ngu-idle-dashboard/actions/runs/36968052816) | 12 tests; one bounded discovery/feed request at a time, with timeout and retry; read-only contract unchanged |
| NDB Idle | [2522878](https://github.com/JWKNT/ndb-idle/commit/2522878be6467e8ff36054b4e45ee326c4c1bf6e) · [CI/Pages](https://github.com/JWKNT/ndb-idle/actions/runs/36969276083) | 374 tests and normal/Pages builds; keyboard actions respect controls, composition, shortcuts and modals; focused board-cell Space retains attack/pass |
| Box Logic | [1d018ba](https://github.com/JWKNT/box-puzzles/commit/1d018ba4ec3b3a172a1e0f8582b6123a60d5462b) · [CI/Pages](https://github.com/JWKNT/box-puzzles/actions/runs/36971102520) | 16 tests, typecheck, lint (one pre-existing image warning), Pages/vinext builds and Lean; theme-aware label contrast and null-safe certificate rendering, including gem index zero |
| Erdős 1016 | [fb167ce](https://github.com/JWKNT/erdos1016/commit/fb167cea3792eb8a195a47508f2411bc3b114264) · [Pages](https://github.com/JWKNT/erdos1016/actions/runs/36969080840) | 25 Node + 21 Python gates and [Lean verification](https://github.com/JWKNT/erdos1016/actions/runs/36969080816); precise represented input, explicit rounded log values, disabled walk controls and print-only control cleanup |
| Logical Solvers tests | [bf32509](https://github.com/JWKNT/logical-solver/commit/bf325092f67621e4567a0eb845c3d69ef68543c8) · [Pages](https://github.com/JWKNT/logical-solver/actions/runs/36972241181) | Progress checks include retained implication/layout/base facts; seeded soundness battery, scenarios and engine comparisons pass; engines unchanged |

The Sums battery at seed 101 checked 24 puzzles, 775 steps and 56 narrated
trials/cases with zero unsound eliminations. Three fixed regression fixtures also
check semantic-only deductions and subsequent termination. Cache, narration,
ordering and duplicate facts do not count as progress.

Additional unchanged surfaces were checked: Profile (13 tests), Baba recordings
(48 tests and build), Links (9 tests and its genuinely empty source collection),
and MTL (build/example validation and 5 UI tests).

## Solver live-status release verified

The concise live-status update is released at
[7ab719d](https://github.com/JWKNT/logical-solver/commit/7ab719d933d5ba469d7c25d364238dd29e5d535e),
with successful [Pages run 37015018396](https://github.com/JWKNT/logical-solver/actions/runs/37015018396).
The public index, announcement helper, and offline export match the reviewed bytes.
Twenty scoped tests plus Cave engine/stepper checks passed. Live browser review
verified four polite atomic regions, Cave step/undo/solve/candidates, hidden-tab
routing, and retained focus for Undo/Solve/Candidates. The disabled Take-step
focus behavior predates this helper change. The aggregate Solver suite and actual
screen-reader speech were not tested for this scoped release.

## Automatic search integration

[Scheduled refresh 36975434494](https://github.com/JWKNT/JWKNT.github.io/actions/runs/36975434494)
succeeded at 06:51:05 UTC on homepage revision
[7d64951](https://github.com/JWKNT/JWKNT.github.io/commit/7d6495179728e13953f9099b043ab5afb16798c1).
The live coverage snapshot was generated at `2026-10-02T06:50:42.657Z` by a fresh
public crawl (`cached: false`): 19,508 targets from 15 roots, with language-index
counts of 19,506 English and 3,380 Japanese entries.

Real-browser queries `Erdős` and `erdos` both reached the guide; `choralcelo`
returned two Readers passages and opened The Cat at `#story/p-021`; `学校`
returned 101 results spanning both VN readers, with the first Black Sheep result
opening chapter F3 at line F3-0470. Escape collapsed search and restored its
trigger's focus. The homepage layout was unchanged.

## Browser evidence

- All 15 homepage destinations were reviewed at approximately 1181px desktop and
  400–401px narrow desktop widths, with 334px edge checks on major reading, tool
  and data pages. Both-theme repeats covered shared menus, reader selection,
  guide controls, Box states and Profile dialogs. NDB's title surface retained its
  own design. Theme documentation was reviewed separately.
- Nested coverage included VN tools and glossary pages; New Sun, Hyperion, Liu and
  a long-title short reader; MTL workflow; puzzle detail; Profile dialogs/tables;
  and Consensus detail, raw and version controls.
- The Consensus secondary-sort trigger measured 71.72px; its repaired popup was
  135.53px, keeping even “None” and “Consensus score” on one line. Narrow popup
  bounds, both themes, End/Enter and Escape/focus passed. Profile independently
  retained readable options and correct bounds.
- Live checks covered filter removal/reset focus, empty and positive searches,
  chapter deep links, malformed VN fragments, footnote → notes → Back, Cave
  step/undo/solve/candidates, Baba playback/speed, and Box answer/reveal/reset.
  Box label contrast was checked across all 16 colors and both themes.

Filter focus remains a local controller concern: Puzzles and Armory move from a
removed chip to a surviving chip or search; Consensus moves from its disappearing
clear control to the named results region. Surviving controls keep normal focus.

## Integrity and limits

- Changed runtime assets and representative generated outputs were compared to
  live bytes after exact-commit deployments. All 79 changed Readers HTML shells
  were cache-query-only changes; chapter text and data were untouched.
- The select change affects only optional `v2/components.js`. The Readers, math
  guide and self-contained Solver theme copies do not embed that file and needed
  no shared-theme refresh. The shared popup rollback base is `3cf568a`.
- Narrow desktop reflow is not touch-device emulation. Coarse-pointer target
  rules have source tests; no real touch-device result is claimed.
- Changed print rules were source/test checked without rendered print verification.
  Delayed network races were covered with controlled promises, not live latency
  injection. NGU review covered the offline feed, not active telemetry.
- NDB's keyboard routing has automated coverage; no live save-affecting gameplay
  session was used. Existing saves and game mechanics were not modified.
- Consensus CSV text, filename and Blob-link activation passed source/data
  checks. Saved-file delivery was not confirmed; no export defect was established.
