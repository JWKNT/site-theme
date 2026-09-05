# Page-specific UI validation · 2026-09-05

## Scope

This pass implements the user's PNG identities, consistent dropdowns, reader
cleanup, denser Profile, simpler ranking navigation, and puzzle dividers. It
preserves ranking data, translations, personal data, telemetry, and puzzle logic.
The existing seven jehlp skills guided design, components, data UI, shared assets,
browser QA, release order, and this record; six were extended, not duplicated.

The live puzzle archive is `JWKNT/puzzles` (126 puzzles, 177 diagrams), now checked
out as `bin/puzzles`. It is not the private `jehlp/JWsite` Jekyll source (100 puzzle
pages), whose Pages service remains disabled. Both receive UI source changes;
only the public repository deploys. Existing Sites metadata and publishing
destinations in Box Logic and puzzles remain unchanged.

## Observed browser checks

Candidate pages used a local sibling-repository server with response-only shared
asset URL rewriting. These were real browser checks, distinct from tests below.

- Wide 1440px light sweeps covered the homepage, MTL, Profile, both readers,
  ranking, dashboard, Armory, solver, and Box Logic. All had loaded PNG identities
  and no document-wide overflow. Shared ordinary dropdowns measured 36px high.
- Narrow 390px checks covered these task surfaces plus both puzzle layouts.
  Profile, Armory, both readers, and the public puzzle catalogue also survived
  dark 200% root-text stress without document overflow; controls grew to 72px or
  wrapped naturally rather than clipping. These are stress checks, not a formal
  accessibility certification.
- Ranking: wide light/dark axis columns fit with aligned native headers and rows.
  At 390px, three summary columns fit without internal horizontal or vertical
  scrolling. Both Works and Raw selections were exercised, including advanced
  sorting, reset, row count, pagination, exact raw-record details, Escape and
  opener focus. Page two focused and scrolled the results to the viewport top.
  Header sorting retained focus on the newly rendered header. Doubled light/dark
  mobile text retained a usable stacked toolbar and full-width controls.
- Profile: the wide summary uses balanced columns; regional signals use available
  width. Selecting Detailed produced 17 populations. Both dropdowns shared the
  same sizing. No unexplained section numbers or reserved number gutter remain.
- Albatross: Voyage and Chapter controls measured the same 36px height and top
  alignment; doubled text measured 72px. Grouped chapter labels omit four-digit
  IDs, while route IDs and search data remain intact. A child agent additionally
  exercised group navigation, End and Escape at 1280px dark.
- Black Sheep Town: one visible glossary link retained chapter/order context;
  the redundant toolbar arrow is gone. Long chapter controls wrapped at 200%
  mobile text without clipping. The child agent checked the contextual URL.
- Shared dropdown gallery: selection, rapid End/Enter, typeahead, reset, native
  synchronization, and no-script native fallback were exercised. QA found and
  fixed Enter falling through after typeahead and viewport scrolling cancelling
  a pending keyboard choice. Armory sort/reset also restored the visible label.
- Public puzzles: narrow dark and wide light details loaded the PNG divider and
  diagrams without overflow. Catalogue tag filtering produced 24 U-Bahn results;
  close restored results focus, sort changed, and reset restored 126 records and
  Newest first. The separate freshly built Jekyll puzzle was checked at 390px
  and 1440px dark with its responsive rules/diagram layout.

Final representative screenshots are in the task's `outputs/specifics-pass/`;
PNG generation originals, exact prompts and light/dark contact sheets are in
`outputs/identity-icons/`. The production `v2/marks/manifest.json` contains the
prompts and portable asset metadata, without local private paths. The built-in
image generator produced all 13 marks; their transparent 128px assets were
inspected at their actual small display size in both palettes.

## Tests and builds

- Shared theme: 21 tests, including native dropdown value/events, reset, keyboard,
  disabled options, focused scrolling, and all 13 PNG headers/dimensions.
- Ranking: 19 tests; both versions, complete data/export columns, responsive rows,
  exact raw details, sorting focus, and pagination focus/order.
- Profile: 12 tests. Dashboard: 7. Homepage: 2. Black Sheep Town: 17.
- Albatross: 12 Node and 7 Python tests passed. It is a static site without a
  `build.js`; an extra attempted invocation of that nonexistent file was not a
  required build gate and made no changes.
- Public puzzles: 3 tests and fresh generation of all 126 pages. Tests compare
  exact article content after removing the new divider and normalizing existing
  relative image paths; all rules, links and 177 diagrams are preserved.
- Private Jekyll: 5 Liquid layout tests and a fresh successful bundle build.
  Source puzzle text remains unchanged; generated `_site` is excluded.
- MTL: 3 tests and exact regeneration of all 14 document pages. The separately
  authored directory masthead was updated as well.
- Box Logic: 8 tests and `build:pages`; only the masthead and matching assertion
  changed. The existing generated Pages directory stays ignored.
- Solver: rebuilt its single-file export with the embedded PNG and passed the
  focused auto/source smoke test. No engine changes; the full randomized battery
  was not rerun. With browser networking disabled, all four tabs switched and
  retained the loaded embedded PNG. Armory: syntax checks and browser sort/reset;
  no test suite exists.
- Six updated skills passed the skill-creator quick validator. Diff checks passed.

## Release

Published and verified the shared theme first, then pushed all 12 consumer/source
repositories. All 12 public Pages deployments succeeded. A bounded six-request
read-only verifier checked 188 public HTML, CSS, JavaScript and PNG files: every
response was HTTP 200 and matched local SHA-256 bytes, including all 126 public
puzzle pages and Box Logic's current hashed production assets.

| Repository | UI commit | Successful Pages run |
| --- | --- | --- |
| site-theme | `3c23448` | `33979366165` |
| Albatross | `9bbc9b9` | `33979435865` |
| Black Sheep Town | `2f0916b` | `33979435297` |
| Profile | `287ec43` | `33979435868` |
| Mystery | `7d5cda0` | `33979435481` |
| Dashboard | `25ab89a` | `33979435039` |
| Armory | `d25ff0f` | `33979435834` |
| Solver | `39d2013` | `33979435474` |
| MTL | `c0ed91b` | `33979435009` |
| Homepage | `ffd399c` | `33979435113` |
| Box Logic | `0ea8914` | `33979435735` |
| Public puzzles | `8317190` | `33979435475` |
| Private Jekyll source | `4ce6c9a` | Not deployed; Pages disabled |

Live-browser checks confirmed Albatross's enhanced Voyage selection changed to
Kuro and its canonical chapter 2001 while displaying Chapter 01; both controls
remain 36px. Mystery's 390px table fit its 362px surface with three columns and
seven enhanced dropdowns; Next page displayed rank 51, focused results and
scrolled them to the viewport top. The live A38 puzzle fit at 390px with a loaded
32px masthead, 28px divider, and full-width diagram. PNGs loaded from the published theme path.
The private source push used its existing remote redirect, without rewriting it.
This completion record is a subsequent documentation-only theme commit.

Public assets can remain cached for 600 seconds; an already-open page may need a
hard refresh. The verification requests were cache-busted. The exact verifier is
saved in the task workspace as `work/verify-specifics-release.mjs`.

Excluded: both theme `.DS_Store` files, existing private essay moves/deletions,
deleted private build helpers, all bot changes and runtime data, the preserved
Box stash, local preview helpers, and ignored generated caches. No bot actions,
telemetry writes, hosting metadata changes, or new deployment destinations.

Rollback bases: theme `3bad46f`, Albatross `62dbda5`, Black Sheep Town `fe5641b`,
Profile `30c5d53`, ranking `4a851a4`, dashboard `2b28d3c`, Armory `5bed154`, solver
`eb753ae`, MTL `09261d7`, homepage `7a4c0f4`, Box `1489100`, private Jekyll
`6f7b1eb`, public puzzles `073787e`.
