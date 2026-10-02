# Cross-page header frame — 2026-10-02

## Scope and invariant

Home/theme stay at the same document-top coordinates across pages at the same
viewport, regardless of each application’s content measure, navigation wrapping,
or document scrollbar presence. The liked homepage is the reference. Controls
remain native 44px targets with a 6px gap, scroll with their existing header, and
keep the existing masks, theme behavior and accessibility names. NDB Idle has no
shared controls and retains its independent interface.

The shared CSS owns a 74rem/2.5rem-gutter desktop frame, a 48rem/1.5rem-gutter frame
below 60rem, and 1rem gutters below 38rem. Top inset is 24px, changing to 12px below 38rem;
safe-area insets can enlarge these minimums. Short pages reserve the same scrollbar
gutter as long pages. Content shells and reading measures do not change.

## Before

At 1188×761, Home/theme on the homepage were (1039,24)/(1089,24), with 44px controls.
Theme x ranged from 980 (Links) to 1111 (Box), and most subpages had y 29.6875. Readers
book controls used y 16. At 500×761, the homepage controls were (375,12)/(425,12),
while navigation wrapping put many subpages at y 52. These are browser coordinates,
including a 15px classic scrollbar gutter in the homepage’s content width.

## Source and automated checks

- Shared theme 49 tests, including native first-paint markup, frame tokens, safe
  insets, reserved utility lanes, mobile wrapping, touch mask geometry and print rules.
- Readers: canonical theme copy, independent appearance/static-reader adaptation,
  unchanged reading content; 68 Python and 17 Node tests plus original-text validation.
- Consumer CSS removes header-only width/padding overrides, preserving existing
  content selectors. Puzzle and MTL builds regenerate no content changes.
- Solver export is rebuilt from the current 7ab719d accessibility release and embeds
  the full shared frame/icons while retaining the status-announcement helper.

## Browser verification

The broad live sweep passed 120 cases: 20 public page shapes at 1188px, 500px and
400 CSS px, in both light and dark themes. All shared-theme homepage destinations
and theme documentation were covered, with representative nested pages. Additional
coverage included five Readers variants (catalog, interactive book, plain contents,
plain chapter, and a long-title story) and all four Solver genres.

The Solver matrix passed 32 cases: four genres × both themes × 1188px, 780px,
500px and 400px. Native desktop resize and 125% browser zoom supplied narrow
reflow; device emulation was not used. At each fixed viewport, scroll position
was zero and the same CSS coordinates were compared across destinations.

| CSS viewport width | Home top-left | Theme top-left | Target size | Gap |
| --- | --- | --- | --- | --- |
| 1188px | (1039, 24) | (1089, 24) | 44 × 44px | 6px |
| 780px | (647, 24) | (697, 24) | 44 × 44px | 6px |
| 500px | (375, 12) | (425, 12) | 44 × 44px | 6px |
| 400px at 125% zoom | (278, 12) | (328, 12) | 44 × 44px | 6px |
| 393px at 200% zoom | (275.5, 12) | (325.5, 12) | 44 × 44px | 6px |
| 375px at 200% zoom | (257.5, 12) | (307.5, 12) | 44 × 44px | 6px |

The completed audit contains 182 unique general page/width/theme cases across 27
routes, plus 64 Solver genre cases. The latter includes 16 generated-offline cases
(four genres × both themes × 1188px and 400px). The freshly built homepage and
offline export were rechecked after their successful final deployments.

A final narrow supplement added 32 cases at exactly 375×380 and 393×380 CSS px:
homepage, a long-title Reader, Erdős, Box, and all four Solver genres, in both themes.
Uniform 200% desktop zoom and native resizing produced these widths. Every control
retained its 44px target and 6px gap, with no alignment difference, content collision
or horizontal page overflow. The browser was restored to 1188×761, 100% zoom and
light theme afterward. This is reflow coverage, not a real-phone simulation.

No utility/content collisions or horizontal overflow appeared in the final matrix.
Links retains its narrower content column; VN navigation, long puzzle titles,
Solver tabs, and plain-reader chapter navigation retain their own layouts. The
scrollbar reserve removes the previous short-page/long-page horizontal discrepancy.

The shared CSS reached the public site before Solver’s local padding cleanup,
briefly overlapping its Cave tab at desktop width. The owner reported it; the
small CSS correction was released immediately at `7ecaf6f`, then all 32 Solver
cases were rechecked. The final offline export followed at `e091bac`. Future shared
layout releases should remove incompatible local overrides before activating the
new shared placement, or gate the new layout until both sides are available.

Local browser preview was refused with `ERR_BLOCKED_BY_CLIENT`. No alternate route
was used to bypass it; final visual and geometry verification used the public sites.

## Released revisions and checks

Every branch below was read back at the exact revision, and every Pages deployment
completed successfully. The separate, unchanged mathematical theorem rebuild is
reported separately from the successful guide deployment; both completed successfully.

| Repository | Revision | Successful Pages run | Checks |
| --- | --- | --- | --- |
| links | [d76b3f6](https://github.com/JWKNT/links/commit/d76b3f6b4f5a3ff94f469a94990a5e0b7fb8f748) | [37016980034](https://github.com/JWKNT/links/actions/runs/37016980034) | 9 tests |
| bl2 | [f7c180b](https://github.com/JWKNT/bl2/commit/f7c180bb2a1cd5993e51af59a7ef842a00b949a1) | [37016996796](https://github.com/JWKNT/bl2/actions/runs/37016996796) | 7 tests |
| mtl-guide | [9b13624](https://github.com/JWKNT/mtl-guide/commit/9b13624e0f9dc46257f66c94de74e7c1f03a82df) | [37016998281](https://github.com/JWKNT/mtl-guide/actions/runs/37016998281) | 5 UI tests; build, syntax and TSV validation |
| puzzles | [a6bc72e](https://github.com/JWKNT/puzzles/commit/a6bc72e48ff7fe2497985d89b664f01ac3dfaff1) | [37017023597](https://github.com/JWKNT/puzzles/actions/runs/37017023597) | 17 tests; build preserves all 126 puzzle pages |
| JWKNT.github.io | [ddd95e3](https://github.com/JWKNT/JWKNT.github.io/commit/ddd95e3dfd6b1b3b57f834400de2119551da96ec) | [37017034309](https://github.com/JWKNT/JWKNT.github.io/actions/runs/37017034309) | 48 tests; native search/build workflow |
| mystery-report | [e1f8ae6](https://github.com/JWKNT/mystery-report/commit/e1f8ae6579a23d01ae99f32017a5733e27cfd196) | [37017042104](https://github.com/JWKNT/mystery-report/actions/runs/37017042104) | 22 tests |
| box-puzzles | [23dd5bd](https://github.com/JWKNT/box-puzzles/commit/23dd5bd44ea10522b9d85d28739e4aebc42616e8) | [37017046337](https://github.com/JWKNT/box-puzzles/actions/runs/37017046337) | 16 tests; typecheck, lint and Pages build; full deployment CI |
| erdos1016 | [9dfeda0](https://github.com/JWKNT/erdos1016/commit/9dfeda03366f1f9c745fbfd7aebc2f8fa84e5854) | [37017052893](https://github.com/JWKNT/erdos1016/actions/runs/37017052893) | 25 site tests; Pages checks; [fresh theorem CI passed](https://github.com/JWKNT/erdos1016/actions/runs/37017052780) |
| site-theme | [61b371a](https://github.com/JWKNT/site-theme/commit/61b371a63b4dfece34376114780e1e59ca042568) | [37016761397](https://github.com/JWKNT/site-theme/actions/runs/37016761397) | 49 Node tests |
| profile | [c08ad20](https://github.com/JWKNT/profile/commit/c08ad206fd9987f1b29464b09af5a6ee6e01cfcc) | [37017283678](https://github.com/JWKNT/profile/actions/runs/37017283678) | 13 tests |
| ngu-idle-dashboard | [3f87e76](https://github.com/JWKNT/ngu-idle-dashboard/commit/3f87e76af77b54ab31569641230e04db8c7bd72f) | [37017472460](https://github.com/JWKNT/ngu-idle-dashboard/actions/runs/37017472460) | 12 tests |
| logical-solver | [e091bac](https://github.com/JWKNT/logical-solver/commit/e091bac6cf00984bcd9597af8189eec140833647) | [37018028070](https://github.com/JWKNT/logical-solver/actions/runs/37018028070) | 18 scoped source/announcer/header tests; offline rebuild |
| readers | [f27dc47](https://github.com/JWKNT/readers/commit/f27dc47012c19f6e08776cee73aeb2e3257f80c7) | [37016410055](https://github.com/JWKNT/readers/actions/runs/37016410055) | 68 Python + 17 Node; original-text validation |

Unchanged-source consumers were also checked: Albatross passed 22 Node + 7 Python
tests; Black Sheep Town passed 33 tests (including its quiz route); Baba recordings
passed 48 tests and a clean build. They inherit the canonical shared styles.

The canonical base is byte-identical to the Readers and Erdős vendored copies.
Changed public stylesheets and the 2,734,256-byte Solver offline HTML match local
release bytes. The offline Git blob is `bc52a55a6f80dcd5a6d586cd04c13fea910f04b2`;
it embeds all utility symbols and retains the verified accessibility helper.
All 912 Readers HTML files and its generators remain unchanged. Puzzle/MTL outputs
and Baba data are unchanged. Homepage publication changed authored CSS only; its
existing workflow rebuilt the authored homepage and refreshed search automatically.

## Limits

The smallest tested viewport is 375 CSS px. The longstanding 320px body minimum
can cause horizontal overflow at an exact 320px desktop viewport with a classic
scrollbar; that extreme desktop case is not claimed as a pass.

Narrow desktop reflow is not device emulation. Touch/safe-area/print behavior has
source coverage unless otherwise recorded; no real device, print preview or actual
screen-reader speech result is claimed. No NDB save-affecting gameplay was started.
