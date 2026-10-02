# Change record

## 2026-10-02 — Touch utility alignment

- Exclude the already-44px Home utility from coarse-pointer navigation sizing.
  The touch-only override changed Home from grid to flex while the theme dial
  stayed grid, leaving their masks vertically offset despite equal hit targets.
- Preserve the approved homepage/control geometry, icon artwork and ordinary
  navigation touch targets; refresh vendored Readers CSS and the Solver export.
- Add a regression test for the coarse-pointer selector, independently of the
  narrow-screen breakpoint.

## 2026-10-02 — Abstract monochrome identities

- Replace colorful masthead illustrations and favicon accents with a coherent
  set of abstract subject symbols, matching the Home compass and theme dial.
- Keep authoritative SVG geometry and generate compatible transparent PNG
  mastheads plus white-on-black favicons. Shared dark mode inverts only mastheads.
- Refresh Readers’ vendored identity/CSS, Baba’s local favicon and the embedded
  Solver export. Preserve utility controls, game art, diagrams and data colors;
  NDB Idle remains exempt.

## 2026-10-01 — Permanent homepage sections and matched utilities

- Replace homepage category disclosures with labeled, always-visible sections;
  remove collapse controls/state/styles while preserving all 14 destinations,
  the typographic composition, optional full-text search and keyboard navigation.
- Give Home, theme and homepage search the same 44px target, 1.6rem icon field,
  .375rem gap, muted ink, opacity, hover rule and focus treatment. A fine compass
  rose replaces the bracketed asterisk as the global Home symbol.
- Refresh Readers’ scoped vendored controls, repair its local link/focus overrides,
  rebuild the self-contained Solver and exclude Home from MTL’s local blue hover.
  Other consumers inherit the shared assets; NDB Idle remains exempt.
- Source/behavior checks: 36 shared-theme and 35 homepage tests passed; Readers
  21 Python and 6 Node tests, plus MTL build/check and 5 tests passed. See
  VALIDATION-2026-10-01-UTILITIES.md for release and actual browser evidence.

## 2026-09-30 — Aligned mobile mastheads

- Correct the identity-header selector precedence at the existing 42rem breakpoint.
  A narrow masthead now has a compact title row and a full-width navigation row,
  with local links left-aligned and the Home/theme pair together on the right.
- Reduce mobile-only padding and row spacing; retain 44px utility and local-link
  targets. Desktop layout and project-specific mobile headers remain unchanged.
- Refresh vendored and self-contained copies plus generator asset versions; test
  the reported Albatross header, longer titles, and narrow nested pages.
- Let the documentation index’s longer link list wrap within its own mobile group,
  keeping the utility pair aligned with its first row. Desktop uses display contents.

## 2026-09-30 — Header Home emblem

- Add one native 44px Home link beside the existing header theme dial. Its abstract
  bracketed asterisk and rust point echo the homepage's typographic illustrations.
  Accessible name and tooltip: `Home — jehlp.net`. NDB Idle remains excluded.
- The owner rejected the first footer version after viewing it. Remove the dock,
  all reserved bottom space and focus-scrolling behavior; restore Readers' original
  mobile Contents/Search bar and the original sticky-filter/popover offsets.
- Keep Home and the theme dial together on wrapped headers. Preserve their existing
  page-bound positioning; no new sticky bars. Propagate native markup and cache
  versions through generators, vendored readers and the self-contained Solver.

## 2026-09-30 — Homepage full-text search and drawn link arrows

- The slash control now searches published page text, Reader chapters and notes,
  bilingual VN scripts, puzzle subpages and public catalogue data across all 14
  authored sites. Results have excerpts, supported deep links, site filters and
  bounded pagination; keyboard, error/retry and Back-navigation states are covered.
- Pagefind indexes are static and fetched on demand. English and Japanese text use
  appropriate tokenizers. Inputs are explicit public paths and rendered-field
  allowlists; no private exports, external-site crawling or live game state.
- Replace homepage Unicode destination arrows with fine CSS geometry so iPhone
  does not render them as colored emoji. Preserve the slash and theme controls.
- Publish through existing main/root Pages permissions. Index refresh is manual
  (`npm run refresh:search` in the homepage repo); no new OAuth scope or scheduled
  workflow was installed. See `VALIDATION-2026-09-30-SITE-SEARCH.md` for coverage,
  exclusions, release commits and actual checks.

## 2026-09-30 — Hyperion contents and Strange Travelers

- Correct Hyperion’s contents to distinguish numbered frame chapters from their
  embedded Tales. Use indented full-title jumps, a single dedication link and
  proper part groups; keep Fall’s Epilogue outside Part Three. Plain HTML has the
  same hierarchy. All 57 chapter bodies and 297 notes remain byte-identical.
  Readers commit 9c80028 is live; all 151 checked public files matched the release.
- Add thirteen individual Strange Travelers readers, with two existing duplicates
  preserved, 255 external-reference notes, 48 reversible transcription repairs,
  thirteen original ornaments and the approved historical dropcaps. Retain verse,
  epigraphs, inset letters/notices and Koshchei’s optional source note.
  Readers commit 5a3233b is live; all 175 checked public files match the release.
- Scope: Readers-local importer, markup, CSS and assets. Preserve the concurrent
  theme rollout at Readers 200397e. No shared runtime changes are needed here.
- Checks: all 79 readers / 618 sections pass baseline/source/static/annotation/link
  validation; 15 reader tests and 25 theme tests pass. Reimport is identical across
  108 checked files. Independent audit confirms all 1,565 files across the existing
  66 readers are unchanged from 200397e. Browser review covers desktop paper, 390px charcoal, contents,
  direct section jumps, Escape focus return, title notes and source-wording recovery.
  Native enlarged-text and print preview were unavailable. Detailed evidence and
  source boundaries are in readers/NOTES-STRANGE-TRAVELERS.md and
  readers/NOTES-HYPERION-CONTENTS.md.

## 2026-09-30 — Combined series readers and Hyperion references

- Add Hyperion and The Fall of Hyperion as one reader with two volume groups,
  57 sections, 297 external-reference notes and 36 recorded transcription repairs.
  Preserve source verse, diary structure, epigraphs, dedications and inline formulas;
  add two original thematic ornaments using the existing historical alphabets.
- Assemble Remembrance of Earth’s Past into one reader, retaining all three books,
  129 sections, 350 existing notes and every paragraph address. Old entry URLs
  preserve book, chapter, paragraph and wording query when forwarding.
- Endangered Species already has all 34 stories represented without duplicates.
  Add 14 external-reference notes and three recorded quotation repairs.
- Readers-local changes; shared CSS/runtime need no changes for this release.
  Preserve the separate annotation audit at 4559554. Readers release: 71dc166;
  pre-release baseline: 4559554. Details and source limits: readers/NOTES-V16.md.
- Validation: 66 readers / 604 sections pass source recovery, static equivalents,
  address, link and annotation checks; 11 reader tests and 25 theme tests pass.
  Desktop paper/mobile charcoal browser checks cover combined contents, notes,
  cross-volume search, original wording and legacy links. Native enlarged-text
  and print preview were unavailable.
- Published Readers commit 71dc166; Pages reports that exact commit built. All
  628 checked public files match local SHA-256 hashes. Public note interaction
  and source links work; two transient CDN 503 responses passed on retry.

## 2026-09-30 — Symbol-only light/dark dial

- Replace the circular moon/sun badge and hover shadow with a larger ink-and-paper
  dial, fine diagonal and a single hover rule. Per owner correction, keep the
  control symbol-only; accessible action names/title and pressed state remain.
- Keep a 44px hit target for every pointer type, square keyboard focus and
  print/reduced-motion behavior. Preserve the controller/storage/public events.
- Propagation review includes shared assets, nested/generated pages, the Readers
  vendor copy and Logical Solvers self-contained export. Version consumer asset
  references so a cached earlier stylesheet does not retain the superseded label.
- Readers vendor release `200397e` updates872 HTML references and2 generators,
  with live library, interactive and static chapter verification.
- All13 shared consumers and159 public HTML/export routes verified after successful
  deployment; representative nested routes, light/dark, keyboard, persistence and
  narrow/enlarged views pass. See `VALIDATION-2026-09-30-THEME-DIAL.md` for exact
  commits, coverage and remaining browser-test limits.

## 2026-09-30 — Reader transcription and prose typography

- Correct 335 reviewed transcription errors across 44 Readers works, including
  joined words, misplaced punctuation, OCR substitutions and locally clear word
  omissions. Keep original fragments in an authored correction ledger and the
  existing source-wording view; preserve every paragraph address.
- Reflow broken transcript turns, restore epigraph and verse roles, repair email
  italics and separate a merged speaker turn. Changes remain local to Readers.
- Checks: all 67 readers / 547 chapters pass baseline recovery, static/search,
  annotation, address and word-count checks; independent correction replay is
  idempotent. Desktop paper and mobile charcoal review covers poetry and dialogue.
  Native enlarged-text and print preview were not available in the preview surface.

## 2026-09-30 — Standalone fiction readers and thematic dividers

- Readers adds one Fifth Head reader and 60 deduplicated short-story readers, with
  386 external-reference notes, optional source afterwords and an alphabetical
  library. The mislabeled Island EPUB is excluded.
- Added title-note interaction and 64 original thematic SVG ornaments, including
  one for each Liu novel. Sun text, routes, ornaments and initials are unchanged.
- Scope: Readers repository only for UI/runtime; these shared design records.
  Existing theme tokens and controllers need no changes.
- Validation: all 67 readers pass source/static/route checks against 854c40b;
  independent EPUB-boundary review; 1440px/390px paper/charcoal browser checks of
  notes, search, navigation, fallback and ornaments; 22 theme tests pass. Native
  enlarged-text/print preview unavailable. Detailed source-quality limitations
  and observed checks are in readers/NOTES-V13.md.

## 2026-09-19 — NDB exception and Readers external-reference notes

- Restore NDB Idle by reverting `305917d` and `473e178`. Result `52ec5b8` has exactly the tree of `28786f3`; Pages Actions completed successfully. Record the explicit styling exception in philosophy, repository guidance, and decision 021. Other family styling is retained.
- Readers version 9 removes eight series entries for six purely in-book terms, rewrites 56 existing descriptions, and adds 52 sourced entries focused on missed proper nouns. 857 notes remain across 324 chapters. The margin explains external meanings; tentative namesakes and roots use “Possibly” in short and full notes. Research and sources are in Readers `NOTES-V9.md`.
- Readers validation passes against `4dac1a4`: prose, paragraph addresses, first/local-first annotations, counts, local links, and static/interactive text. Separate checks confirm all static tooltips/source links agree with the glossary.
- Browser verification: desktop Long Sun Limna and absence of shiprock markup; desktop New Sun Jolenta; Short Sun Sfido at 390px without horizontal overflow, Escape close, and light-mode switch. No shared runtime or CSS changes in this follow-up.

## 2026-09-19 — Readers visual language across the family

Adopt Georgia reading/UI and bold Palatino headings throughout v2 and its
consumers. Refine guide reading measure, neutral puzzle tags, table heading space,
solver typography and offline export. Migrate Links from v1; align NDB's bundled
outer interface while preserving game art and state. Record Readers as the
aesthetic reference in philosophy, design system, specimen, and site-design skill.

See [validation and rollback bases](VALIDATION-2026-09-19-READERS-THEME.md) for
exact scope, builds, browser evidence, and limits.


## 2026-09-19 · Readers directory link and annotation expansion

- Homepage `a728d5d` adds Readers under Reading; reader `929317a` removes the
  three-series footer navigation, retaining contents and progress.
- Added 38 glossary entries for 22 terms across the series. The source evidence,
  contextual corrections, uncertainty policy, and audit limits live in Readers
  `NOTES.md`; this is not a shared-theme or book-text change.
- Homepage: all 11 Node tests pass. Readers: all 813 glossary entries and 324
  chapters pass structural validation, local-link checks, and exact prose/ID
  comparison to `4dac1a4`; static and interactive text agree.
- Browser: 1440px light and 390px dark homepage/Long Sun views; Readers link
  navigation, desktop/mobile Silk popup, Escape close, and absence of the footer
  series links verified. No horizontal overflow in the 390px reader.
  This focused pass did not repeat print, 200% text, or the full shared-theme matrix.
- Published consumer commits above. Roll back with reverts in their respective
  repositories. No shared runtime, palette, or component contract changed.


## 2026-09-06 · Remove the redundant Worlds label

- Removed Baba's visible Worlds heading and its spacing rules. The section keeps
  the accessible name “Recordings by world”; the tile divider leads into the groups.
- Generator rebuilt; all 27 Baba tests pass, including a heading-absence and
  accessible-label regression. No player, media, grouping or shared runtime changes.
- Release `57ff7c2`, Pages run `34073868176`; rollback by reverting to `cf179cb`.
  This small removal does not repeat the preceding full responsive/media audit.

## 2026-09-06 · Quiet rule-tile divider and native playback controls

- Removed Baba's search form, search metadata/controller branches and dedicated
  PiP button/note/controller. Native PiP is not disabled; availability is the
  browser's responsibility. Moved duration beside the retained speed controls.
- Added one transparent three-tile SVG ornament above the world list, replacing
  the plain heading rule and search space. Kept the PNG masthead distinct, used
  theme colors, and hid the decorative divider from accessibility and print.
- Kept all 110 recordings, original IDs/media paths, world disclosures, history,
  playback speed and print expansion. Removed tests for deleted features and
  added absence/divider regressions. Updated repository and component guidance.
- Validation: 27 Baba and 22 theme tests pass, including the 500-recording renderer
  fixture. Headed Chromium checked 390px light/dark and 1440px layouts in both
  modes, transparent ornament background, keyboard world selection/Tab, actual
  4.00× playback, 200% text without overflow, and all 110 rows in print media.
  No script errors. No new Safari, no-JS or native-PiP activation test this pass.
- Release `cf179cb`, Pages run `34073460602`; rollback by reverting to `9986d6b`.
  Removed implementation remains recoverable in Git; no recordings were removed.

## 2026-09-06 · World-based Baba catalogue

- Replaced the flat 110-recording list with eight native collapsible world groups,
  counts, short in-world labels and cross-world search. Clear/Escape restores
  disclosure state; deep links and history reveal the selected world without
  autoplay. Original recording data, media, posters and IDs are unchanged.
- Extracted local world rendering and browser controllers; retained shared field
  and segmented-control styles without changing shared CSS/JS. Documented the
  markup, future world overrides, native fallback and navigation contract.
- Validation: 31 Baba tests and 22 theme tests pass, including a 500-recording /
  25-world renderer fixture. Headed Chromium checked 1440px and 390px light/dark,
  keyboard disclosure/Tab, search across closed worlds, empty/Clear/Escape,
  clip selection, Back and deep links, 4.00× actual playback and 200% mobile text.
  No horizontal overflow or script errors observed. Native no-JS world expansion
  exposes direct level links with search hidden. Print-media testing found and
  fixed hidden records: all 110 now render, with state restored afterward.
  Safari and a physical print dialog were not newly tested.
- Recording import 106–110 completed separately before the UI rebuild. Release
  `9986d6b` (Pages run `34072997157`); rollback by reverting it to base `8327b27`.

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


## 2026-09-06 — Baba Is You recording notes
The fresh playthrough adds per-level approach, mechanics, and attempts beside the native video, with stacked mobile layout and native no-JavaScript disclosures. Shared theme runtime assets are unchanged. Validation is recorded in baba-is-you/VALIDATION.md.
