# Mobile arrows and dropdowns — 2026-10-03

## Scope

The owner requested the homepage arrow on every included page and consistent styled dropdowns.
NDB Idle remains excluded.

- Shared CSS now owns `.ui-link-arrow`, with the homepage's original geometry.
- Home, Armory source links, 14 MTL Markdown links, and 126 puzzle provenance links use this empty decorative span.
  No Unicode up-right arrow remains in these UI sources.
- Home search, 79 Readers shells, and five runtime-created Erdős selectors now use `data-ui-select`.
- Readers and Erdős include exact copies of the canonical optional component CSS and JavaScript.
- Page keyboard shortcuts respect a dropdown's handled Escape event.
  The first Escape closes the menu and preserves its parent search surface.
- Erdős refreshes the displayed selection after option replacement or previous/next actions.
- Generated pages and the offline Solver export include the shared changes.

## Verification

All 257 automated tests passed: 189 Node tests and 68 Python tests.

| Repository | Checks |
| --- | --- |
| site-theme | 51 Node tests |
| Home | Build and 49 Node tests, including handled Escape |
| Readers | 17 Node tests and 68 Python tests |
| Erdős | 25 Node tests |
| Armory | 7 Node tests |
| MTL Guide | Build, syntax and TSV checks, 5 Node tests |
| Puzzles | Build and 17 Node tests |
| Logical Solvers | Offline build and 18 UI/source tests |

Chromium checks used candidate files at their public URLs through request interception.
The browser inventory covered all included main pages, a Reader, and the component gallery.
All 22 ordinary selects in that rendered inventory used the shared enhancement.
Source review also covered all 79 Reader shells. Grouped chapter browsers retain their richer menus.

Mobile checks used 390px touch emulation. Desktop checks used 1440px.
Home and four representative Readers passed selection, typeahead, Escape, focus, and popup-boundary checks.
Erdős passed cycle-option replacement, witness selection, previous/next synchronization, and the remaining two demo selectors.
Home, Readers, and Erdős passed 200% text checks.
Home and Readers retained usable native controls when the optional component script was blocked.
The shared component tests cover disabled choices, native value changes, keyboard selection, and dynamic updates.

Armory, MTL, and puzzle arrows rendered as CSS lines in both the relevant mobile and desktop checks.
The other interface marks already use PNG images or CSS masks. Hidden Home fallback text does not render as a glyph.
No physical iPhone or Safari result is claimed. The arrow construction has no emoji-font dependency.

## Content integrity

Reversing only the authorized UI-shell substitutions restores all 79 original Reader pages byte for byte.
The imported text, chapter data, annotations, and manifests are unchanged.
Reversing the arrow replacement and cache keys restores the previous MTL and puzzle HTML exactly.
Erdős changes only component loading and control presentation. Its MathML, prose, mathematics module, Lean source, and manuscript are unchanged.
The offline Solver build preserves its embedded scripts and includes the new shared CSS.

## Publication

All eight release commits are on `main`. All eight Pages deployment workflows passed.
The shared stylesheet deployment completed before the consumer commits were published.

| Repository | Release commit | Pages deployment |
| --- | --- | --- |
| site-theme | [`31b69f8f36`](https://github.com/JWKNT/site-theme/commit/31b69f8f369cc1fbcdd0b1b741c2c76c6d5eb75a) | [Passed](https://github.com/JWKNT/site-theme/actions/runs/37160449953) |
| JWKNT.github.io | [`11e62730a2`](https://github.com/JWKNT/JWKNT.github.io/commit/11e62730a2aa02db58fe8ed51caf53bb78a4e09f) | [Passed](https://github.com/JWKNT/JWKNT.github.io/actions/runs/37160497919) |
| readers | [`045f8ecac8`](https://github.com/JWKNT/readers/commit/045f8ecac877d8b3f3a96fdabca9bd8f2a2c940e) | [Passed](https://github.com/JWKNT/readers/actions/runs/37160501580) |
| erdos1016 | [`e4e9a4380e`](https://github.com/JWKNT/erdos1016/commit/e4e9a4380e1de717835d40ffddd45a146eb1ee43) | [Passed](https://github.com/JWKNT/erdos1016/actions/runs/37160503983) |
| bl2 | [`af50d20e16`](https://github.com/JWKNT/bl2/commit/af50d20e160623a6673cae6936d1442b67894ef3) | [Passed](https://github.com/JWKNT/bl2/actions/runs/37160505886) |
| mtl-guide | [`7789292ba2`](https://github.com/JWKNT/mtl-guide/commit/7789292ba299b6ef57b611f84641c7ef07b2a548) | [Passed](https://github.com/JWKNT/mtl-guide/actions/runs/37160508499) |
| puzzles | [`daf795eb67`](https://github.com/JWKNT/puzzles/commit/daf795eb67253ccab3c2a9ae79685ed5de4a7268) | [Passed](https://github.com/JWKNT/puzzles/actions/runs/37160511515) |
| logical-solver | [`e0c79383db`](https://github.com/JWKNT/logical-solver/commit/e0c79383db50ebb571dcf184681cf9755b7710a6) | [Passed](https://github.com/JWKNT/logical-solver/actions/runs/37160515038) |

All 237 changed public application files match their reviewed source bytes.
This includes every updated Reader shell, generated guide and puzzle page, and the offline Solver export.
A fresh public-response browser pass confirms that all 22 inventoried ordinary selects use the shared menus.
Live checks passed homepage filtering, result navigation, Back restoration, and nested Escape handling.
Reader scope selection and Erdős option replacement also passed.
Armory, MTL, and puzzle arrows have the same one-pixel cap and shaft geometry as Home.
The homepage search snapshot identifies source commit `11e62730a2aa02db58fe8ed51caf53bb78a4e09f`.

The separate [Lean theorem verification](https://github.com/JWKNT/erdos1016/actions/runs/37160504021) was still running during publication.
Its status does not change the successful proof-guide deployment. No Lean source or theorem change was made.

To roll back a UI change, revert its release commit on `main`. Preserve subsequent commits and avoid forced ref updates.

| Repository | Previous commit |
| --- | --- |
| site-theme | `2803674ef4a987fc7304faf1532f22afc9707df5` |
| JWKNT.github.io | `a88b35166330c34390c89bd83f3157e6e66a889e` |
| readers | `01346268a2afa3c9de582b964505d765f9961fd2` |
| erdos1016 | `18220539b864d909f2ed8a71ae46790ec15e33a3` |
| bl2 | `d6f54652721228401952b5b2e2aa27d0509106d6` |
| mtl-guide | `79b3e2a04c9fb6cc7a853016abad2538416658d2` |
| puzzles | `3a5a2e63b235afb8c652b7d4e632093ca473f4b7` |
| logical-solver | `d9870490bf15a3fe8d99d4d28a1e4c59bebd4678` |
