# Legibility and connected-header validation · 2026-09-05

## Scope and evidence

This correction follows the user's report of small fonts, inconsistent pages,
and disconnected spreadsheet headings. It changes presentation and native
glossary grouping, not ranking data, telemetry, translations, or puzzle logic.
The existing seven skills provided the needed guidance; the table contract and
QA matrix were extended without creating another overlapping skill.

The main agent used a local sibling-repository preview with response-only theme
URL rewriting. Dashboard test data stayed in the projectless preview helper:
40 inventory rows, 36 perks, 6 equipment rows, and 12 NGUs, explicitly synthetic.
No bot commands or live telemetry writes were issued. Child agents performed
source reviews and tests; browser observations below were made by the main agent.

## Observed browser checks

- Mystery, Profile, dashboard, Armory, MTL grammar, and both readers: 1440px dark
  and 390px light computed-style sweeps found no document-wide overflow, visible
  task controls below 14px, or synthetic small-caps task controls/headings.
- Mystery: 13 header/body column edges matched exactly under combined scrolling.
  Main values are 14px; work titles are 16px. Search, the work detail dialog,
  native closing, and its 14px score table worked at 390px. Both palettes were
  viewed. A 200% text stress initially exposed truncated work titles; wrapping
  removed all measured title clipping without document overflow.
- Profile: opened the actual marker disclosure before measurement. At 390px,
  its 672px native table scrolled 150px horizontally and 210px vertically with
  all five header/body edges matching, zero header inset, and no page overflow.
  The dark 1440px table was 1120px wide with its header attached at the scrollport
  top. A 23-marker report dialog retained 14px variant values. The internal 12px
  marker margin and mobile unbounded-height override were removed. Later ordinary
  field/button styling was rechecked by the cross-page computed-style sweep.
- Dashboard: opened the populated inventory disclosure and scrolled both axes.
  All eight header/body edges matched. The original narrow Specials column made
  long fixture values stack excessively; targeted widths now give it about 249px
  in an 896px table, with typical fixture rows 80px high and local-only overflow.
  This check used synthetic data, not a claim about the current game state.
- Armory: viewed 390px cards and the desktop table, scrolled 240px vertically,
  measured five matching column edges and a 1px enclosing border. Empty search
  retained its recovery control. Item names are 18px; ordinary acquisition text
  and controls are 14px. Mobile card structure remains intact.
- MTL grammar: four reference tables used 14px headers and 16px prose; the widest
  narrow table was about 396px inside a 362px named scroll region. Horizontal
  scrolling stayed local. Generated document text and link order were unchanged.
- Glossary: reproduced the mobile English heading directly above Japanese prose.
  New native groups read JP heading/definition, then EN heading/definition.
  Desktop header rows matched their top and height; narrow definition prose is
  16px. At 200% text it became 32px without page overflow or clipped controls.
- Solver: 1440px controls were normal-case 14px; U-Bahn, Cave, and Japanese Sums
  controls were exercised at 390px. Options and local tab scrolling remained
  usable. Doubled text did not overflow the page or clip measured controls.
- Additional 390px doubled-text sweeps covered Profile, dashboard, Armory, MTL
  landing, both readers, and the component gallery: no document-wide overflow or
  clipped measured controls. These are stress checks, not accessibility certification.
- Print media on Mystery, Profile, and dashboard computed white paper, static
  table headers, and uncapped visible scroll regions after fixing the shared
  print override. Full paginated paper output was not exhaustively reviewed.

## Source and build checks

- Shared theme: 16 tests, including the new native-header/normal-case/print rules.
- Mystery: 10 tests, including title wrapping and unchanged complete datasets.
- Profile: 10 tests. Dashboard: 7 tests. Armory: syntax/diff checks; its data and
  application JavaScript were not changed.
- MTL: 3 tests and exact regeneration of all 14 document pages; 36 native tables
  and 175 explicit column-header scopes. Article text and link order match HEAD.
- Black Sheep Town: 16 tests, including native glossary language reading order.
  Albatross: 10 Node and 7 Python tests; no local source changes were needed.
- Solver: rebuilt the self-contained export and passed the focused auto/source
  smoke test. Board/candidate geometry rules and engines were unchanged; this
  pass did not rerun the complete randomized solving battery.
- Box Logic: answer/identity labels changed only in `app/globals.css`; 8 tests
  and the existing GitHub Pages production build passed. No fresh browser QA or
  formal-model changes were made. The existing publishing destination is retained.
- Diff checks passed. Existing site-theme `.DS_Store` files, private Jekyll source
  work, bot changes, and the preserved Box stash are excluded from this release.

## Release

Published the shared theme first, verified its seven release files, then pushed
the eight changed consumer repositories. All nine Pages workflows completed
successfully, including Box Logic's existing Lean, test, and production-build
gates. Local and remote main heads matched; 40 cache-busted public release files
returned HTTP200 and matched local SHA-256 bytes. Albatross receives the reader
update through its shared stylesheet without needing a local commit.

| Repository | UI commit | Successful Pages run |
| --- | --- | --- |
| site-theme | `193d9ab` | `33947858786` |
| mystery-report | `4a851a4` | `33947910847` |
| profile | `30c5d53` | `33947911115` |
| ngu-idle-dashboard | `2b28d3c` | `33947910920` |
| bl2 | `5bed154` | `33947910759` |
| logical-solver | `eb753ae` | `33947910982` |
| mtl-guide | `09261d7` | `33947910833` |
| black-sheep-town | `fe5641b` | `33947910656` |
| box-puzzles | `1489100` | `33947911058` |

The theme completion record is a subsequent documentation-only commit. Public
Pages responses use a 600-second cache lifetime; an already-open browser may need
a hard refresh. The release verification uses fresh requests to distinguish
cached old pages from the published bytes.

Additional gallery check: copy examples and their buttons compute14px, with
about13px clearance between button and code; native body row headings stay static.
Matched before/after Mystery screenshots are saved in the task's
`outputs/legibility-pass/` directory outside the repositories.

Rollback bases: site-theme `34b328e`, mystery `dc12e56`, Profile `c55fd53`,
dashboard `31272c9`, Armory `3ea90eb`, solver `892f4c5`, MTL `9e36d77`,
Black Sheep Town `47af720`, Box Logic `b9feca1`.

The private Jekyll source remains untouched; its small desktop contents/footnote
styles are not a published-root change in this pass. The bot repository is out of
scope. Do not interpret this focused correction as exhaustive review of all
possible content, game states, printer layouts, or every old v2 consumer.
