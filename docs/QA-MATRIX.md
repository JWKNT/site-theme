# Local review matrix

Run against the candidate shared assets, not an unchanged production CDN. Serve
sibling repos from their parent and route `https://jehlp.net/site-theme/` to the
local `/site-theme/` when reviewing (a temporary response rewrite or browser request
interception is fine). Do not commit temporary local asset URLs. Jekyll needs a
fresh generated build; the archived `_site` is stale after source edits.

| Scope | Exercise | Pass condition |
| --- | --- | --- |
| All affected sites | 390px and 1440px, light/dark, keyboard, 200% text | No clipped primary labels or document-wide overflow; visible focus; first useful task stays apparent |
| Page identity | PNG loaded at 32px in both modes; long title and 200% text | Relevant transparent image, empty alt, reserved dimensions; no Unicode masthead stand-in |
| Single-choice dropdown | Open/choose; Arrow/Home/End/typeahead then Enter; Escape/Tab; reset and programmatic change | Reader-like sizing; native value/events synchronized; visible focus; disabled options skipped; native fallback without enhancement |
| Shared theme | Saved/system/legacy preference, cross-tab change/clear, blocked storage | Correct palette, control name/state and icon; no exceptions |
| Print | Print preview while dark is active | Dark ink on white; no dark browser controls or invisible text |
| MTL | Mobile contents closed/open, Escape, heading choice, breakpoint change, no JS | Closed links untabbable; focus meaningful; desktop contents visible; reading survives without JS |
| MTL | Long code and widest table | Local scrolling; copy button does not cover text |
| Consensus | Empty results, reset, filter, sort, pagination, modal, export | Existing counts/data/export preserved; titled dialog and correct focus return |
| Paginated collections | Small/wide and doubled text; page turns; summary-to-detail | No internal horizontal/vertical scroll; new page starts/focuses results; all detailed fields and CSV remain available; no visible priority digit beside sort arrow |
| All tables | Initial, horizontal, vertical, and combined scroll; first and last rows | Header/body column edges match; opaque connected header band; no blank inset strip, floating row headers, disappearing divider, or doubled rules |
| Task typography | Inspect computed styles of values, labels, sorting buttons, explanations | At least 14px normal-case task labels/values and 16px prose; do not mistake nominal small-caps size for readable glyphs |
| Profile | Controls, chromosome views, report dialog, narrow comparison table | No lost information; chart geometry unchanged; labels have readable equivalents |
| Dashboard | Offline, loading, stale, valid state, unavailable fields | Truthful status; unknown is not zero; no mutation requests; hierarchy works with real content |
| Solver | All four tabs, options, solve/step/cancel; offline dist | Board geometry intact; primary controls reachable; exported file works without network |
| Jekyll | Essay, home/archive, puzzle, dark mode, footnote/popups | Fresh build; correct background; long-form measure and navigation work |
| Public puzzles | Catalogue filters/sort/reset and single/multiple-image detail pages | 126 source records/177 diagrams and exact text/links unchanged; one PNG divider before first diagram; later examples/reference charts retain order |

Capture representative before/after screenshots with viewport and theme in the
filename. Record only observed results. Static tests do not establish visual
quality, keyboard correctness, or accessibility conformance. If a browser reveals
a regression, fix the smallest responsible rule; do not rebuild unrelated UI.

## Completion record

This matrix was exercised against the candidate local theme on 2026-09-05. The
observed results, demonstrated regressions, fixes, and one unavailable Jekyll
content instance are recorded in `VALIDATION.md`. Temporary URL rewrites and
dashboard fixtures were not committed.
