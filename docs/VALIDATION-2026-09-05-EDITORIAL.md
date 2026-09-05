# Independent-page editorial validation

Recorded 2026-09-05 for the more expressive, minimal page pass requested after
the component release. This records the reviewed candidate and completed release.

## Scope and preservation

Thirteen repositories are affected: eleven public Pages sites, the source-only
writing repository, and one anchor deletion in the bot's dashboard mirror. All
authored project headers, reader subpages, generated guide pages, and the offline
solver omit global-home links. Project-local navigation and canonical metadata
remain. No source dataset, translation text, puzzle engine, telemetry API, or live
game state was edited by this pass.

Box Logic advanced seven commits on the remote while this pass was in progress.
The checkout was fast-forwarded from `070edbb` to `48460cf`, and only compatible
presentation edits were reapplied. The earlier draft is recoverable in the local
stash named `Preserve pre-sync editorial UI from 070edbb`. The new generator,
variable liar counts, four explicit rules, seed controls, reveal verdicts, and
equal-height box layout are preserved. Its existing Sites metadata and GitHub
Pages publishing destination were not changed.

Unrelated dirty bot source/tests and writing essay/build-helper moves were left
unstaged. The bot's `docs/index.html` is byte-for-byte its original except for the
global Projects anchor. No bot DLL was injected and no game process was restarted.

## Automated checks

| Surface | Observed result |
| --- | --- |
| Shared theme | 14 tests passed, including identity accent contrast and no-global-home regression coverage |
| MTL | Three UI tests, JS syntax, sample TSV validation; all 14 generated files match an in-memory rebuild |
| MTL content integrity | Normalized article text and content-link sequences match the prior revision; the repeated Files directory is a native disclosure, not deleted content |
| Profile | Ten tests passed; uncertainty, non-diagnostic context, provenance, and publication boundaries retained |
| Consensus | Nine tests passed; both datasets and scoring unchanged; script cache version updated with its removed DOM binding |
| Dashboard | Seven read-only/data-state tests passed; application code unchanged |
| Homepage | Two fallback/discovery tests passed |
| Readers | Black Sheep Town 15 tests; Albatross ten Node and seven Python tests; JS syntax checks passed |
| Box Logic | Eight current generator/UI tests, Pages build, and `lake build --wfail` (six jobs) passed after remote reconciliation |
| Solver | Standalone rebuilt; focused Sums auto-solve/candidate/cancel app test passed; engine files unchanged |
| Writing | Fresh `bundle exec jekyll build` passed; ignored `_site` used only for preview |
| Site-design skill | `quick_validate.py` passed in an isolated Python environment with PyYAML |

The solver's full engine battery was not repeated for this CSS/markup-only pass;
the prior component validation records its passing rerun and randomized timing
caveat. Static source tests are not an accessibility certification.

The bot's mandatory build and mechanics checks run in a detached clean checkout
at `204f38e` with only the anchor deletion. This avoids compiling unrelated dirty
source or overwriting local executable artifacts. Build passed; the aggregate
initially stopped on missing ignored `work/` reference assemblies. Copies of the
already-read game references were supplied only inside that checkout before the
unchanged aggregate was retried. All 36 direct C# suites and the rebirth-policy
golden suite passed. The final deployment-lifecycle fixture failed in the
aggregate and on an unchanged standalone retry. A timestamp observation showed
that its synthetic telemetry writer missed the marker/handshake window and ran
after fixture cleanup; no live native operation was involved. The aggregate is
therefore **not** recorded as passing. No bot-source fix was attempted for this
HTML-only task. Diff-check and the 155-file commentary audit passed; SHA-256s of
the original DLL and both monitor binaries remained identical. The isolated
checkout was removed after verification, leaving the original dirty work intact.

## Rendered checks

The local preview rewrites production theme URLs only in HTTP responses. Source
files retain live URLs. Jekyll uses a fresh local build, with root asset links
mapped into its temporary preview route. Dashboard live/stale fixtures are local
read-only responses, never production telemetry or game mutations.

Eleven surfaces were measured at 390px and 1440px in light and dark: solver, MTL
workflow, Profile, consensus, armory, both readers, dashboard, component gallery,
homepage, and writing home. No document-wide overflow remained. The MTL directory
was also visually reviewed in both modes. Text was doubled at 320px on these
eleven surfaces; table/board overflow remains local and readable. Visual review
caught and fixed two failures that width measurements alone did not establish:
the solver's old mobile grid selector lost to its new header selector, and fixed
mark width allowed enlarged glyphs to crowd the title.

- Armory: filters open in flow; selecting Weapon yields 140 items; Show results
  closes the panel and focuses results. The Baby Maker dialog is named, its
  unboxed detail rows remain readable, and Escape restores its opener focus.
- Consensus: zero-results search/reset, current and older dataset versions,
  named details/Done focus return, and arrow-key table scrolling work.
- MTL: Contents open/close and Escape focus work; the Files disclosure opens;
  JavaScript-disabled contents remains visible with its inactive toggle hidden.
- Readers: English mode uses block reading, and JP/EN restores the comparison
  grid in both projects. Translation content and stable row IDs are unchanged.
- Dashboard: live/stale fixtures retain truthful connection text and unavailable
  values. The new presentation does not confer authority on stale data.
- Standalone solver: solves with network emulation offline and switches among
  all four puzzle modes. Dark-mode print computes white paper, black text, a
  neutral identity mark, and a hidden theme toggle. Emulation is reset afterward.
- Live smoke checks: the published guide has its 28px identity mark and no root
  link; Workflow opens with its retained article and Files disclosure. Consensus
  search/reset works on the published dataset. The final smoke test also caught
  and corrected the singular label for a one-result search.

Representative before/after screenshots are stored in the task's
`outputs/editorial-pass/` directory: `mtl-before-1440-dark.png`,
`mtl-after-1440-dark.png`, `profile-before-1440-dark.png`, and
`profile-after-1440-dark.png`. These are local review artifacts, not public assets.
Box Logic received source/test/build review rather than a new browser pass, per
its Sites workflow. No claim is made that its changed layout had rendered QA in
this pass. The bot mirror's single link removal received exact-diff review.

## Release and rollback

| Repository | Rollback base |
| --- | --- |
| site-theme | `51c84af` |
| logical-solver | `ae73729` |
| mtl-guide | `6591d3c` |
| mystery-report | `c27ab6f` |
| ngu-idle-dashboard | `df4d0f3` |
| profile | `14e0b31` |
| bl2 | `eb60137` |
| JWKNT.github.io | `9bf537a` |
| black-sheep-town | `5bebbfc` |
| albatross-koukairoku | `7c876bb` |
| box-puzzles | `48460cf` (after preserving the newer remote work) |
| site / JWKNT/JWsite | `ace5a4f` |
| ngu-idle-bot / JWKNT/ngu-idle-autopilot | `204f38e` |

Shared theme, Profile, and Box Logic deploy through Actions; the other eight
public sites use `main` root. The root repository retains its `jehlp.net` CNAME.
Writing and bot repositories have Pages disabled, confirmed through repository
metadata; their commits are source updates, not a separate web or game deployment.

Publish shared assets first and confirm the identity CSS is served before pushing
consumers. Check deployment conclusions and published asset bytes afterward.
For rollback, revert this pass's consumer commits before reverting the shared
identity styles. Do not reset unrelated working-tree edits or undo Box Logic's
seven preceding feature commits.

## Completed publication

All eleven public Pages deployment jobs succeeded for the editorial UI commits.
Forty-six published HTML, CSS, JS, and standalone/build assets returned HTTP 200
and matched local SHA-256s. Writing and the bot mirror were committed and pushed
as source-only changes. The bot lifecycle-fixture caveat above does not represent
a game deployment or a passing full bot aggregate.

| Repository | Published UI commit |
| --- | --- |
| site-theme | `71f2ab2` (this completion record follows separately) |
| logical-solver | `892f4c5` |
| mtl-guide | `9e36d77` |
| mystery-report | `04ab2b2`, then `dc12e56` for singular result labels |
| ngu-idle-dashboard | `31272c9` |
| profile | `c55fd53` |
| bl2 | `3ea90eb` |
| JWKNT.github.io | `7a4c0f4` |
| black-sheep-town | `47af720` |
| albatross-koukairoku | `62dbda5` |
| box-puzzles | `b9feca1` |
| site / JWKNT/JWsite | `6f7b1eb` |
| ngu-idle-bot / JWKNT/ngu-idle-autopilot | `8996055` |
