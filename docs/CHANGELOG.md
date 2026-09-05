# Change record

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
