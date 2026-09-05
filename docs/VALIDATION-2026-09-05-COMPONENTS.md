# Component-pass validation

Recorded 2026-09-05 for the second UI pass in `/Users/jw/Desktop/bin`. This
supplements, rather than replaces, the earlier `VALIDATION.md` evidence.

## Scope and integrity

Eight repositories contain this pass: shared theme, homepage, BL2, MTL guide,
consensus report, Profile, NGU dashboard, and Logical Solver. Black Sheep Town and
Albatross receive a small shared-reader rule cleanup without source changes.
Box Logic and the source-only Jekyll build were reviewed without source changes.
Existing bot work and Jekyll essay/build-helper moves remain untouched. No puzzle
engine, source dataset, translation text, API authority, or game state changed.

The local preview rewrote theme URLs only in HTTP responses; the repositories
retain production URLs. Dashboard fixtures were temporary read-only fetch
responses, not production data or API mutations.

## Automated checks actually run

| Surface | Result |
| --- | --- |
| Theme | 12 tests passed: six existing preference/event cases and six new disclosure, focus, overflow, navigation, backdrop, and clipboard cases |
| MTL | 14 documents regenerated; two generated-markup integration tests passed |
| Consensus | Nine tests passed, including both published datasets and scoring integrity |
| Profile | Ten tests passed, including publication/privacy boundaries and palette semantics |
| NGU dashboard | Seven tests passed, including the read-only API contract and unavailable values |
| Homepage | Two fallback/discovery tests passed |
| Readers | Black Sheep Town: 15 tests; Albatross: ten Node and seven Python tests passed |
| Box Logic | Six tests and `npm run build:pages` passed; tracked sources unchanged |
| Jekyll | `bundle exec jekyll build` passed; ignored `_site` not published |
| Solver | Rebuilt standalone HTML (2,717,034 bytes); U-Bahn, Sums, A38, Cave, and focused auto-solve app tests passed, with the caveat below |
| New skill | `quick_validate.py` passed; installer created one discovery symlink, and a second apply created zero |

The first U-Bahn engine run failed in its existing randomized sparse 8×8 case
when a timed search returned no status map. An unchanged rerun passed the entire
suite, including all 60 random brute-force comparisons and the sparse/dense-overlay
checks. This is not evidence of deterministic test stability. Engine/test source
was not changed to conceal the failure. Other engine suites passed on their first
run. BL2 has no existing automated suite; its changed behavior received syntax and
real-browser checks.

`git diff --check` passed at the staging boundary. New component tests use DOM
fixtures for controller decisions, not as a substitute for rendered accessibility
checks.

## Rendered checks actually run

The component gallery, homepage, BL2, consensus, Profile, dashboard, MTL workflow,
solver, both readers, Box Logic, and Jekyll home were measured at 390px and 1440px
in dark mode. The first ten were also checked at both widths in light mode. None
retained document-wide overflow. At 390px, doubling computed text sizes on those
ten surfaces also ended at zero document-wide overflow; long inline gallery code
needed an explicit wrapping correction. Wide tables and boards retain local
scrolling rather than compressing their geometry.

- BL2: open/close mobile filters; category selection and URL state; Show results
  closes and focuses results; zero-results recovery/reset; named native detail
  dialog, close action, hash cleanup, and focus restoration to its opener.
- Consensus: arrow-key scrolling of the named table region; zero results/reset;
  detail content and native Done action returning focus. Data logic unchanged.
- Profile: section navigation focuses the requested section and updates current
  metadata; a populated report dialog includes its 23-marker table; Escape
  restores opener focus. Dynamically inserted scroll regions are enhanced.
- Dashboard: local live/stale fixtures retain truthful unavailable values;
  Inventory navigation focuses the target. Headline boss values wrap as whole
  groups. Final review preserved the separate equal-width growth grid.
- MTL: mobile Contents, heading navigation, Escape focus, and desktop breakpoint
  transitions work. With JavaScript disabled the contents is visible and the
  inactive toggle is absent. Table elements retain their native structure.
- Gallery: search, surface filter, zero results/reset, section navigation, and
  actual code copying work. Unit tests cover clipboard rejection/manual selection.
- Readers: desktop comparison rows retain three-column grids; phone rows retain
  their local two-column stacking model. English mode stays block reading, and
  switching back restores comparison grids. The header/first-row transition has
  one rule. A selector-scope error found during final diff review was corrected
  and these modes rechecked before release.
- Solver: rebuilt standalone document solves with network emulation offline and
  switches among all four puzzle modes without page overflow. Dark-mode print
  computes white paper/black text and hides the theme control.
- Coarse-pointer and reduced-motion emulation: the MTL Contents control resolves
  to 44px and scrolling to `auto`. Emulation was reset after testing.

## Commits and release order

| Repository | This pass | Rollback base |
| --- | --- | --- |
| `site-theme` | Commit containing this document | `c2a9197` |
| `logical-solver` | `ae73729` | `a299e97` |
| `mtl-guide` | `6591d3c` | `a03192a` |
| `mystery-report` | `c27ab6f` | `52ffb9a` |
| `ngu-idle-dashboard` | `df4d0f3` | `2abe240` |
| `profile` | `14e0b31` | `2df4541` |
| `bl2` | `eb60137` | `fb23b2e` |
| `JWKNT.github.io` | `9bf537a` | `c25ef85` |

GitHub Pages settings were rechecked through the authenticated API: shared theme
and Profile use Actions; all six other changed sites use `main` root. The root
repository retains the `jehlp.net` CNAME. Push shared assets first and confirm
`v2/components.css` and `v2/components.js` are served before pushing consumers.
Then verify deployment conclusions, published asset bytes, canonical routes, and
a representative live interaction. The completion report records those live
checks; this document records the reviewed candidate before publication.

For rollback, revert consumer adoption commits before removing optional shared
assets. Do not reset or overwrite unrelated local work. The existing v1 assets,
v2 base tokens, and theme preference/event contract are unchanged by this pass.
