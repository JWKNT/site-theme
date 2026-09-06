# Change record

## 2026-09-06 · Curated homepage and simpler Baba controls

- Removed the homepage's Other section and repository-discovery implementation;
  all 13 authored destinations remain, with the shorter “Baba Is You” label.
- Removed Baba's dedicated MP4/download controls and visible save-slot label,
  including the deleted control's player-state wiring and layout column. Kept
  all 80 recordings, native level links, PiP and 1.00×–4.00× speed controls.
- Validation: 11 homepage, 24 Baba and 22 theme tests pass. Headed Chromium
  checked search/Escape, homepage-to-Baba navigation, clip selection and actual
  4.00× playback, desktop light and 390px dark layouts without horizontal overflow.
  Shared runtime and media are unchanged. No new Safari or no-script browser run.
- Release commits: homepage `92e6c0a` (Pages run `34060206261`), Baba `452ac76`
  (run `34060205111`). Rollback: revert those commits; removed discovery code
  remains recoverable in Git. Previous bases: `8425741` and `b3620d8` respectively.

## 2026-09-06 · Playback speeds and quieter headers

- Removed GitHub Source links from Baba and the public NGU dashboard headers,
  plus the dashboard's local bot-repository mirror; footer provenance remains.
- Removed Baba's recording note and its now-unused description reference. Added
  1.00×, 1.25×, 1.50×, 2.00×, 3.00× and 4.00× presets using existing shared CSS
  with a small independently testable local controller. No shared runtime edits.
- Recorded the header and playback-speed contracts. Validation and deployment
  evidence: `VALIDATION-2026-09-06-PLAYBACK-SPEED.md`.

## 2026-09-05 · Baba catalogue and homepage audit

- Tightened player/list typography and controls, removed disconnected/redundant
  labels, fixed fragment/re-selection behavior, validated recording metadata and
  added player regressions. Preserved all five clips, posters and authored data.
- Consolidated the homepage into four current groups without imposing a category
  cap. Games contains NDB Idle, Puzzles and explicitly labelled Baba recordings;
  Links moves to Reading. Added distinct Games art and data-derived metadata.
- Recorded the local reusable catalogue contract and QA checks; shared CSS/JS and
  identity assets are unchanged. See `VALIDATION-2026-09-05-BABA-AUDIT.md` for
  observed checks, release evidence, limitations and rollback bases.

## 2026-09-05 · Unique Baba Is You mark

- Added a generated transparent Baba character PNG and assigned it exclusively to the Baba Is You project. Recorded the unique-per-project identity convention.
- Checked the real masthead at 32px in Chromium in light and dark modes; native alpha and 128px asset dimensions verified. All 22 theme tests and 3 catalogue tests pass. Shared asset publishes before the consumer reference; no shared CSS or JavaScript changes.

## 2026-09-05 · Baba Is You recording catalogue

- Added the standalone `JWKNT/baba-is-you` project for five numbered level clips,
  a single native player, level hashes, direct downloads and feature-detected PiP.
  Adopted existing v2 foundations and the puzzles PNG mark. No shared runtime
  changes. Added a Games destination to the authored homepage directory.
- Local checks: 3 catalogue tests, 15 homepage tests and 22 theme tests pass.
  Browser review at 1440/390px in both modes, 200% text, keyboard, no-JS links,
  print/reduced motion, actual playback/seek/selection/history passed with no
  script errors. Headed Chromium opened and closed picture-in-picture; Safari
  fallback remains untested. Game-only crops were reviewed before upload.
- Published catalogue `6d152c9` (Pages run `34007726865`) and homepage `a8687f9`
  (run `34007723080`); both deployments succeeded. Live HTTPS page, canonical,
  CSS/JS/data/poster assets match the local build. All five MP4s serve byte ranges
  as HTTP 206. Live headed Chromium loaded every clip, played video and opened/
  closed PiP without script errors. The homepage destination is present publicly.
- Release bases: homepage `0526d8b`, theme `63d6902`. New catalogue has no prior
  deployment; rollback is to unpublish its Pages site and remove its directory
  entry. Revert the release commits for homepage/theme documentation rollback.

## 2026-09-05 · Neutral non-link puzzle prose

- Scoped puzzle link color to anchors with `href` and reset no-destination
  anchors to inherited text color with no decoration. Imported wrappers remain
  byte-for-byte intact; 55 prose-bearing wrappers occur across 51 archive pages.
- Rebuilt all 126 pages with a refreshed stylesheet URL. All 11 puzzle tests
  pass, including the new anchor-style regression and exact content preservation;
  full diff whitespace checks pass. Data, diagrams, and solving URLs are unchanged.
- At the browser's default 1280px width, Double Internal X-Sums screenshots and
  computed styles confirm normal prose beside the blue, underlined example link
  in both themes. Tab advances from that example link to SudokuPad without an
  extra stop. Roller's longer notes inherit body color while real links stay blue.
  This color-only correction did not repeat the earlier responsive/print suite.
- Clarified the imported-content contract without changing shared runtime or
  skills. Rollback bases: puzzles `30d0249`, theme `1f881bb`.
- Published puzzle commit `e8fe0b7`; Pages run `34007410183` succeeded. All 129
  changed public HTML/CSS files returned HTTP 200 and matched the tested build.
  Theme tests: 22 passed.

## 2026-09-05 · Transparent puzzle ornament correction

- Removed the ornament image's opaque page-colored CSS backdrop, which appeared
  as a rectangular cutout over the puzzle sheet. The PNG was already transparent;
  the separate grid hairlines already provide the gap. Frame geometry is unchanged.
- Rebuilt all 126 pages with a refreshed stylesheet URL. All 10 puzzle tests
  pass, including a new transparent-background regression and exact article
  preservation. Full diff whitespace checks pass; data and diagrams are unchanged.
- Actual browser screenshots at 1440px and 390px in light/dark show no backdrop.
  Computed image background is transparent, padding remains 0/12px, and there is
  no page overflow. Roller's two grids also load within the unchanged narrow frame.
- Clarified the existing component contract; no shared runtime or skills changed.
  Rollback bases: puzzles `e136d48`, theme `f96845a`.
- Published puzzle commit `30d0249`; Pages run `34006464861` succeeded. All 129
  changed public HTML/CSS files returned HTTP 200 and matched the tested build.
  Theme tests: 22 passed.

## 2026-09-05 · Quiet puzzle sheets

- Framed the complete main unit on all 126 public puzzle pages with a thin,
  square-edged sheet. Its divider is the top edge, with a dedicated geometric
  PNG distinct from the masthead logo; rules and worked examples stay outside.
- Grouped 124 leading solver-only runs into compact action rows. Preserved the
  two image-first exceptions, all source text and links, and all 177 diagrams.
- Added source-preservation and ornament regressions, documented the local
  markup contract, and extended the existing design and QA skills.
- See `VALIDATION-2026-09-05-PUZZLE-SHEETS.md` for observed checks, publication
  evidence, and rollback bases. Shared CSS/JS and other subpages are unchanged.

## 2026-09-05 · Root typographic directory

- Rebuilt only `JWKNT.github.io`'s homepage as a compact type atlas: four decorative
  punctuation studies, quiet accent points, category labels and destination names.
  Removed the visible title and masthead; retained canonical metadata and utilities.
- Added a validated JSON-to-static-HTML generator, native expandable categories,
  optional keyboard-accessible search, and bounded paginated future-Page discovery.
  Included NDB Idle in the authored twelve-link directory instead of relying on API
  discovery for an already-known destination.
- Kept shared CSS/JS and all subpages unchanged. Documented the homepage-specific
  exception to the PNG masthead rule and the reusable data/rendering contract.
- See `VALIDATION-2026-09-05-HOMEPAGE.md` for rendered checks, scale fixtures,
  automated tests, publication evidence, and rollback bases.

## 2026-09-05 · Main-puzzle boundary correction

- Replaced the public archive's first-diagram placement rule with the start of
  the main puzzle unit: complete rules/examples above; lead-in, solve links and
  main/reference grids together below. The solve-link paragraph is preserved.
- Documented the main-link resolver and its two reviewed lead-in/paired-grid
  exceptions, retaining all 177 diagrams: 48 examples above and 129 main/reference
  diagrams below the boundary. Source text, links, and order remain the contract.
- Corrected the philosophy, component guidance, QA gates, and two existing skills.
  This supersedes the first-diagram convention recorded below. See
  `VALIDATION-2026-09-05-PUZZLE-BOUNDARIES.md` for observed checks and release evidence.

## 2026-09-05 · Page-specific consistency and reusable controls

- Replaced masthead Unicode glyphs with 13 purpose-made transparent PNG marks.
  Embedded the solver mark in its offline export; no global-home links returned.
- Added a native-backed, keyboard-accessible dropdown matching the VN readers.
  Adopted it in Albatross, Profile, the ranking, Armory, and the public puzzles.
- Equalized Albatross Voyage/Chapter controls, shortened visible chapter labels,
  and removed Black Sheep Town's redundant glossary arrow without losing context.
- Removed Profile's unexplained numbering and reserved gutter, tightened section
  spacing, and used the regional-summary width more effectively.
- Replaced the ranking's paginated two-axis scrollport with responsive native
  tables in document flow. Wide views retain axis comparisons; narrow summaries
  expose complete details on demand. CSV, sorting, records, and scores survive.
  Sort arrows no longer display priority digits; page turns restore results focus.
- Updated all 126 public puzzle pages with a quiet PNG-centered divider before
  the first diagram. Preserved every rule, link, and all 177 diagram placements.
  Updated the separate private Jekyll layouts without changing their content.
- Extended the existing philosophy, component contracts, QA gates, and six skills.
  Recorded the public puzzle repository separately from the private Jekyll source.

See `VALIDATION-2026-09-05-SPECIFICS.md` for checks and publication boundaries.

## 2026-09-05 · Legibility and connected-header correction

- Promoted regular spreadsheet values, labels, and controls to normal-case 14px
  type; retained 16px prose and secondary 12px provenance. Removed synthetic small
  caps from task text across the shared foundation, readers, and local tools.
- Added the opt-in native `.ui-table` header band and adopted it in the ranking,
  Profile, dashboard, Armory, and generated guide. One sticky `thead`, opaque
  background, and zero-spacing separate borders retain the header/row boundary.
- Removed Profile's internal marker-table top gap and mobile unbounded scroll
  overrides. Widened the dashboard's Item/Specials columns so populated rows stay
  readable. Ranking titles now wrap rather than truncate with enlarged text.
- Repaired mobile glossary reading order: each language heading stays directly
  before its own definition; desktop headers remain aligned side by side.
- Enlarged solver explanations, reader speakers/glossary prose, quiz labels, and
  Box Logic answer labels. Rebuilt guide pages, Pages assets, and offline solver.
- Added static regressions and explicit scrolled-state/computed-font QA gates.
  Strengthened the shared print-only overflow reset against local screen heights.

See `VALIDATION-2026-09-05-LEGIBILITY.md` for actual checks and scope boundaries.

## 2026-09-05 · Independent-page editorial pass

- Removed global-home navigation from project headers, subpages, generated guide
  documents, the standalone solver, writing layouts, and the bot dashboard mirror.
  Project-local navigation, source links, and canonical metadata remain intact.
- Added an opt-in identity masthead with one subject mark, serif title, and four
  contrast-checked light/dark accent tones. Documented the contract and updated the
  existing site-design skill instead of creating a duplicate skill.
- Gave the guide and Profile margin indexes; opened ancestry, lineage, armory
  details, and scoring rows; simplified reader chrome and report version tabs;
  removed dashboard gradients and redundant labels. Shortened the homepage and
  guide directories while preserving substantive guidance and safety caveats.
- Rebuilt 14 guide pages and the self-contained solver. Verified and fixed the
  solver's mobile header grid and the identity mark's enlarged-text spacing.
- Reconciled seven newer Box Logic commits before applying presentation-only
  changes. Its on-demand generator, variable liar counts, rules, reveal states,
  and equal-height boxes remain intact.

See `VALIDATION-2026-09-05-EDITORIAL.md` for observed checks, source-only release
boundaries, and rollback bases.

## 2026-09-05 · Astra component and page pass

- Added an optional, dependency-free component layer with a working gallery and
  explicit contracts: directories, toolbars/fields, segmented selections,
  responsive disclosures, section indexes, table overflow, native dialog shells,
  and copyable code. Existing unmarked pages keep their behavior.
- Adopted real shared patterns across the homepage, MTL guide, BL2 armory,
  consensus report, Profile, and NGU dashboard. Removed duplicated listeners and
  shell CSS while leaving datasets, sorting, telemetry, and puzzle rules local.
- Replaced BL2's offscreen mobile filter drawer with an in-flow disclosure;
  improved its result-count announcements, native dialog naming/focus, metadata,
  and ruled mobile list. Added visible horizontal-scroll cues to dense tables.
- Improved homepage/guide directory descriptions, promoted Box Logic into Tools,
  simplified redundant report/reader rules, and aligned the solver's dark UI with
  the shared palette without recoloring puzzle geometry.
- Regenerated all 14 MTL documents and the self-contained solver export. Added
  component behavior tests, documented adoption boundaries, and created/installed
  the seventh maintained skill, `jehlp-components`.
- Reviewed all 12 local site surfaces at narrow/wide dark layouts and 10 at
  narrow/wide light layouts plus doubled mobile text. Exercised disclosures,
  modal focus, filters, native table scrolling, no-script contents, touch/reduced
  motion, print, and offline solver operation.

See `VALIDATION-2026-09-05-COMPONENTS.md` for actual checks, release boundaries,
the randomized solver-test caveat, and rollback bases.

## 2026-09-05 · Sol completion

### Completed

- Finished the bounded readability pass across the shared reader, dashboard,
  profile, consensus report, solver, MTL guide, and Jekyll source without changing
  domain data, puzzle rules, telemetry authority, or chart geometry.
- Made shared print rules authoritative over later consumer selectors and added a
  solver-specific legacy dark-mode print reset. Dark pages now print black on
  white with theme controls hidden.
- Added full accessible names and titles for compact Japanese Sums and A38
  candidate marks while preserving their fixed board geometry.
- Repaired the U-Bahn worker's hidden Cancel control, added a source regression
  check, rebuilt the standalone file, and cancelled a running 16×16 search in the
  browser.
- Corrected Albatross's narrow reader-control grid after candidate-theme testing
  demonstrated document-wide overflow. Updated Black Sheep Town's shared-reader
  regression expectations for the released typography and wrapping behavior.
- Completed rendered checks at 390px/1440px, light/dark, coarse pointer, doubled
  text, keyboard focus, print, offline solver operation, dashboard state fixtures,
  data explorer interactions, and external v2 consumers.
- Built the private Jekyll source with its own bundle. Confirmed it has Pages
  disabled; the public root is `JWKNT/JWKNT.github.io` with the `jehlp.net` CNAME.
- Installed all six maintained skills into local Codex discovery through the
  idempotent symlink installer.

See `VALIDATION.md` for observed evidence and `REPOSITORIES.md` for the verified
Pages mapping.

## 2026-09-05 · Astra preparation for Sol Extra High

### Implemented

- Shared v2: body/interface/metadata/control tokens, larger regular labels and
  navigation, visible scrollbars, coarse-pointer sizing, focus for named scroll
  regions, skip-link positioning, reduced toggle motion, and explicit print ink.
- Theme controller: same-origin cross-tab synchronization; clearing a preference
  resumes system mode; migration tolerates read-only storage; late-parsed browser
  chrome metadata is synchronized at setup. Legacy keys and both events remain.
- MTL guide: 16px reading, readable labels and contents, code-button clearance,
  an in-flow mobile contents disclosure, and active-section accessibility metadata.
  Regenerated the 14 document pages from `build.js`.
- Main Jekyll site: repaired `--bg-color` from undefined `--canvas` to `--paper`;
  retained 16px mobile reading and allowed navigation to wrap.
- Profile / consensus report / NGU dashboard: targeted regular-control, navigation,
  connection-state, and headline label improvements. Dataset and app logic retained.
  The consensus dialog now has its visible title as its accessible name.
- Solver: skip link, named puzzle navigation, clearer secondary controls, visible
  mobile tab scrolling; embedded theme masks/favicon and rebuilt standalone HTML.
- Added six Codex skills, installation helper, inventory, design decisions,
  regression guidance, and the Sol handoff. No framework or data dependency added.

### Deliberately remaining

This is a prepared implementation and handoff, not a claim that every site is
finished. Browser screenshots, keyboard traversal, mobile reflow, 200% text zoom,
print preview, deployed routing, and the Jekyll build require local follow-through.
Small chart/candidate labels and `v2/reader.css` remain a measured follow-up.
The bot and puzzle research harness are inventoried and unchanged.

See `VALIDATION.md` for observed checks and `SOL-HANDOFF.md` for the ordered work.
