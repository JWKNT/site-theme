# Validation of the completed candidate

Recorded 2026-09-05 against the checkouts under `/Users/jw/Desktop/bin`. Browser
reviews used a temporary response rewrite so every production theme request loaded
the candidate local `/site-theme/v2/` assets. Production URLs in source were not
changed.

## Automated checks

| Repository | Observed result |
| --- | --- |
| `site-theme` | 6 controller tests passed: saved/system preferences, three legacy keys, blocked storage, cross-tab change/clear, controls and both events |
| `mtl-guide` | 14 pages regenerated; 3 contents tests, JavaScript syntax, and the 3-row sample TSV passed |
| `mystery-report` | 9 tests passed, including source-report completeness and aggregate data integrity |
| `ngu-idle-dashboard` | 7 tests passed, including the read-only request contract and unavailable-value rules |
| `profile` | 10 tests passed, including publication completeness, palette readability, privacy exclusions, and keyboard metadata |
| `logical-solver` | Single-file build passed; U-Bahn, Japanese Sums, A38, Cave, and focused app checks passed; the dist contains no external script/style dependency |
| `site` | `bundle exec jekyll build` passed with the repository Gemfile/lockfile; `_site` remains ignored and unpublished |
| `black-sheep-town` | 15 tests passed after updating shared-reader expectations |
| `albatross-koukairoku` | 10 Node tests and 7 Python tests passed after the narrow control-grid fix |

All six maintained skills passed structural validation. A dry-run and apply of
`tools/install_skills.py` linked them into local Codex discovery; a second apply
created zero links. `git diff --check` is required again at the final staged
boundary.

## Rendered browser checks

| Scope | Observed result |
| --- | --- |
| Responsive layout | Candidate pages reviewed at 390px and 1440px in light and dark modes. No affected page retained document-wide overflow. Wide report/guide tables and code blocks scroll inside their own regions. |
| 200% text | Every rendered text size was doubled at 390px as a text-only stress test. Demonstrated wrapping failures in MTL, dashboard allocation, Jekyll headings, and reader controls were corrected. Fixed-size plot/puzzle marks retain full accessible descriptions or nearby readable equivalents. |
| Coarse pointer | The emulated coarse-pointer media query matched and shared theme toggles resolved to 44px controls. Puzzle cells and plot geometry were not blanket-expanded. |
| Theme controller | Saved/system choice, legacy `solverTheme` migration, cross-tab update and clear were observed in two tabs. A temporary blocked-storage fixture followed system dark mode and still toggled to light without an exception. |
| Print | While dark mode remained selected, theme, guide, report, dashboard, profile, solver, Jekyll, and reader pages computed black text on white. Theme controls were hidden. A late legacy solver override found in this check was corrected and rebuilt. |
| MTL guide | Mobile contents closed/open behavior, Escape focus return, heading selection, desktop breakpoint restoration, and no-JavaScript reading passed. Copy changed to `Copied`; the longest code block and three wide tables scroll locally. |
| Consensus report | Empty results, reset, medium/row filters, sorting, 25-row pagination, both data views, titled dialog and focus return passed. Export produced a CSV blob named `mystery-report-version-2-works.csv`. |
| Profile | Detail selection, six confidence choices, copy filters, chart labels, report dialog naming, marker content, and focus return passed. Compact chart labels keep full semantic equivalents. |
| Dashboard | Offline, delayed loading, live, stale, and unavailable-value states were exercised with a read-only fixture. Status language stayed truthful; missing rebirth data rendered `Unavailable`, never zero. Section navigation and disclosure focus worked. |
| Solver | All four modes, options, random puzzle, step, unique/multiple solve, true candidates, cancellation, compact-candidate labels, print, and loaded-document offline switching passed. A hidden Cancel control was found, fixed in source, regression-checked, and reverified on a 16×16 exhaustive search. |
| Jekyll | Fresh home, Eastern Star archive, and puzzle output loaded at 390px without broken local assets. The current content set contains no rendered footnote/popup instance, so those scripts received build/static coverage only. |
| Other v2 consumers | Homepage, BL2, Box Logic, Black Sheep Town, and Albatross were checked at 390px and 1440px. Albatross's local grid caused a 40px narrow overflow; the owning CSS was corrected and rechecked at zero. |

The dashboard fixtures and URL rewrites existed only in the temporary QA server,
not in any repository. Browser screenshots are release-session evidence rather
than committed site assets.

## Routing evidence

Signed-in GitHub Pages settings identify `JWKNT/JWKNT.github.io` `main` root plus
its `jehlp.net` CNAME as the public root. Theme and Profile deploy with Actions;
Logical Solver, MTL Guide, Mystery Report, NGU Dashboard, Black Sheep Town, and
Albatross deploy from `main` root. The old `jehlp/JWsite` remote redirects to the
private `JWKNT/JWsite`, where Pages is disabled. See `REPOSITORIES.md` for the full
mapping.

## Consumer release commits

| Repository | Commit |
| --- | --- |
| `logical-solver` | `a299e97` |
| `mtl-guide` | `a03192a` |
| `mystery-report` | `52ffb9a` |
| `ngu-idle-dashboard` | `2abe240` |
| `profile` | `2df4541` |
| `black-sheep-town` | `5bebbfc` |
| `albatross-koukairoku` | `7c876bb` |
| private source-only `JWsite` | `ace5a4f` |

The owning `site-theme` commit contains this record and is identified in the final
release report rather than trying to embed its own hash.
