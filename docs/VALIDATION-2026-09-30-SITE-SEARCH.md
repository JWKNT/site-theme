# Homepage site-wide search — 2026-09-30

## Scope and release

The owner requested full-text search from the homepage slash control, including
subpages and text in the linked sites, and replacement of mobile emoji-like arrows.

- Homepage repository: JWKNT/JWKNT.github.io; destination https://jehlp.net/.
- Arrow-only release: `8d330b87434874be92cbd1eb6b033d43b423fed3`.
- Full-text release: `2836584ce46643af935ef40af7a3edca46fad8fe`.
- Back-navigation state: `e7091287dabba9972bbff1467b8947562f7dbfef`.
- Final asset version: `6b415d487418c52bcd6700bb589c4e397816a85a`.
- Roll back search to arrow-only `8d330b8` with a reviewed revert; do not reset
  unrelated later work. Search source and generated assets are in the homepage,
  not in the shared theme runtime. Shared CSS and theme behavior are unchanged.

## Indexed snapshot

`https://jehlp.net/search-coverage.json`, generated 2026-09-30T15:28:58.499Z:

- 19,483 canonical targets across exactly 14 authored site labels.
- 157 published HTML pages, including 126 generated puzzle detail pages.
- Readers: 79 library entries, 618 chapters, 3,817 reachable annotations.
- Albatross: 84 chapters; Black Sheep Town: 63 chapters and 208 reachable glossary
  versions, plus the public character quiz.
- Borderlands 2: 245 items with actual item-modal hash routes.
- Both Mystery Consensus datasets and visible selection-title variants; 105
  public Profile reports and its explicitly rendered sections.
- Box Logic: 50 literal interface/help fragments. NDB Idle: 260 such fragments.
  These come from published JSX output parsed without executing downloaded code.
- MTL Guide, Baba recordings catalogue, Logical Solvers instructions, NGU's static
  interface text, and the currently empty Links catalogue are included.

Only authored public text is indexed. No raw research/audit exports, private
Profile fields, private repositories, external linked sites, live telemetry,
personal saves, NDB story datasets or arbitrary generated game/puzzle states.
Images, videos, audio and downloadable documents are not transcribed. Apps without
per-record routing use their actual section/dataset URL. Reader annotations land
at their relevant paragraph; the existing word-note control opens the note.

## Architecture and upkeep

The generated English/Japanese assets total about 34.8 MB compressed on disk;
ordinary homepage visits load none of the corpus. Search runs in a worker and
fetches needed index chunks plus 12 excerpts at a time. The query's script chooses
one index, preventing duplicate bilingual canonical results. Mixed Japanese and
English queries do not intersect separate translations. Native word stemming and
prefix behavior remain Pagefind's; exact English phrases can be quoted.

The Pagefind 1.5.2 runtime and worker have narrowly asserted compatibility patches
for HTTP/metadata/index failure propagation and initialization rejection handling.
Retry makes a fresh instance and fresh metadata. A current-entry history state
restores search after Back without query parameters or local storage; closing
search clears it. Excerpts are inserted as text with only explicit mark elements.

An attempted Actions release was rejected for the existing OAuth token's missing
workflow scope. No scope was added or alternative workflow-write route attempted.
Legacy main/root Pages settings were restored and verified before static release.
There is **no automatic refresh**. Run `npm run refresh:search` in the homepage
repo, inspect the new snapshot and tests, then commit its generated directories
and coverage file atomically. The command uses fresh public fetches; any fetch,
schema or expected-anchor failure leaves the previous publishable snapshot intact.
The ignored `--cached` mode is for local development only.

## Verification

- Homepage: 33 Node tests pass, including actual generated Pagefind engine and
  worker code with failed entry metadata, WASM, index and fragment requests,
  successful fresh-instance recovery, body terms, phrases, case/accents,
  Japanese middle-of-sentence words, title weighting and site filters.
- DOM interaction tests cover slash/Escape, focus, empty query/no results,
  loading/error/retry, async query/close races, bounded pagination, safe excerpts
  and cold Back restoration. These are behavior tests, not rendered browser QA.
- A complete fresh public-source build passed. Independent review checked
  canonical path allowlists, rendered Profile fields, duplicate editions,
  bilingual text, failed-source policy, generated artifacts and stale-query races.
- Shared theme: all 25 existing tests pass; only release documentation changed.
- Live cloud Chromium: 400px mobile paper/charcoal and desktop 1180px. No horizontal
  overflow, readable wrapped result titles/snippets, native site filtering,
  no-results, slash/Escape and returned focus, 12-to-24 pagination and new-result
  focus. Paper/charcoal screenshots inspected. Actual iOS hardware was unavailable;
  decorative CSS arrows contain no Unicode emoji character.
- Real results checked: `choralcelo`, `narcotherapeutic`, `"transcendent mass"`,
  `traveler must alternately obtain`, and Japanese `学校` (101 results). Nested
  Puzzle destination, VN chapter/line route and Reader paragraph route opened
  correctly; after layout the Reader paragraph landed 28px from viewport top.
- No live telemetry mutations, bot execution, private-account data or game-save
  operations were performed. Native print and reduced-motion settings were not
  separately browser-tested; no new animation is introduced and static links
  remain present without JavaScript.
