# Change record

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
