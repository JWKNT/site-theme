# Page review — 2026-10-03

## Scope and result

Reviewed the homepage and its 14 destinations other than NDB Idle, in directory order.
The theme documentation was also reviewed. NDB Idle was not cloned, opened, or changed.
Media repositories and the unpublished private Jekyll site were not review targets.

The reviewed changes are on `main` in seven repositories. All seven GitHub Pages deployments passed.
The review preserves the Readers design: serif type, restrained controls, thin rules, and layouts suited to each task.

## Page-by-page findings

| Page | Review and decision |
| --- | --- |
| Home | The authored directory is current. Regenerate the checked-in HTML so local previews include Mathematics and Erdős 1016. Production already builds this version. Search with the published index returns Erdős and Escape returns focus to the search trigger. Keep the category artwork. |
| Albatross Koukairoku | Compact mobile metadata saves approximately 48px above the controls. Chapter arrows now have a 44px touch width. Adjust the shared chapter-menu offset. Check chapter selection, next chapter, empty search, theme switching, and Tools. Preserve all translation text and art. |
| Black Sheep Town | Apply the same shared metadata and chapter-control changes. Review the reader, glossary, Tools, and quiz layout. Check chapter-menu Escape, next chapter, and empty search. Preserve source text, translations, and glossary data. |
| Readers | Keep the reference design. Review the library, The Cat, New Sun, Hyperion, the Liu trilogy, and a long-title short story. Exercise mobile search and Contents. No source change is required for this pass. |
| Links | The collection is genuinely empty. Hide search and sorting until a populated collection loads. Remove the duplicate empty result count and reduce empty-state padding. Add a retry after a failed load and restore useful focus after retry. Retain filtering for populated collections. |
| Erdős 1016 | At 200% text size, fixed two-column contents clip long labels and formulas can widen the page. Use text-relative column widths and seven named, keyboard-scrollable formula wrappers. The page remains 390px wide with all disclosures open. Preserve every MathML element and all prose. |
| Genetic Profile | The regional expansion button was approximately 26px high on touch screens. Use the shared 44px minimum. Check expansion, report search, dialog naming, Escape, and focus return. Preserve chart geometry, data, and scientific qualifications. |
| Mystery Consensus | Search, empty results, detail dialog, and focus return work in the reviewed states. Keep the comparison table and existing compact mobile presentation. No source change is required. |
| Borderlands 2 Armory | Search, detail opening, Escape focus return, and reset work. Keep the mobile rows and desktop comparison surface. No source change is required. |
| NGU Idle | The initial HTML claimed Resource 3 was locked and reported no action failures before telemetry arrived. Replace these claims with waiting messages. Keep the populated renderer and the read-only request contract unchanged. |
| Box Logic | Review desktop and touch layouts. Exercise Reveal and Generate puzzle. The local browser certificate issue was a test-environment problem. No site fix is required. |
| Logical Solvers | Number inputs and Options were smaller than neighboring controls. Use the shared minimum height. Verify all four tabs and Cave step, undo, and solve with a small entered puzzle. Rebuild the offline export and verify it with networking disabled. |
| MTL Guide | Review the directory and Workflow. Check mobile Contents opening, Escape, heading navigation, desktop resize, and the no-JavaScript contents. Keep the section hierarchy and original examples. No source change is required. |
| Puzzles | Review catalogue filtering, empty results, and reset. Inspect Loop and Roller detail layouts. Keep the existing main-puzzle boundary, source prose, diagrams, and paired grids. The deterministic build and archive tests pass. |
| Baba Is You | Verify real playback, pause, speed, clip selection, and Back. Review desktop, mobile, enlarged-text, and no-JavaScript layouts. Keep the native player and world navigation. No source change is required. |
| Shared theme | Change only `v2/reader.css` for the two translation readers. Review the theme index and Components page. Keep base tokens, utility icons, v1, and the theme controller unchanged. |

## Browser evidence

The review used Chromium 151. Local candidate files replaced their production URLs through request interception.
TLS-verified downloads supplied external assets. The Box interface used its published build.
The final Home search check used the published Pagefind index. The checked-in index predates the Mathematics category.
No search index or collection data was rewritten.

- Initial main-page review: 1440px light and 390px touch dark.
- Affected surfaces: repeat at 1440px and 390px in both themes.
- Affected mobile surfaces: repeat with computed text sizes doubled.
- Nested layouts: translation Tools and glossary, reader variants, MTL Workflow, puzzle boundary examples, and theme Components.
- All final affected layouts retain their viewport width. The 1440px desktop content area is 1425px with its stable scrollbar gutter.
- Erdős: open all disclosures at doubled text size. The document remains 390px wide. Arrow Right scrolls a focused formula by 40px.
- No JavaScript: inspect Links, Erdős, MTL Workflow, and Baba. Links states that JavaScript is required to load the collection.
- Offline Solver: load the rebuilt single-file export with networking disabled and switch through all four tabs.
- Links: inject a failed fetch, retry with a populated fixture, filter to no results, and clear the filter. Verify focus after both recovery actions.

The first screenshot pass captured some utility masks before they appeared.
Repeat captures show the existing icons correctly. No utility icon change was made.
A BL2 probe initially selected the hidden desktop detail button on mobile. The visible mobile control passed the repeat check.
These were test-probe problems, not demonstrated application defects.

## Automated checks

| Repository | Passed checks |
| --- | --- |
| site-theme | 51 Node tests |
| JWKNT.github.io | Build and 48 Node tests |
| Albatross | 22 Node tests and 7 Python tests |
| Black Sheep Town | 33 Node tests |
| Readers | 17 Node tests and 68 Python tests |
| Links | Build and 9 Node tests |
| Erdős 1016 | 25 Node tests |
| Profile | 13 Node tests |
| Mystery Consensus | 22 Node tests |
| BL2 | 7 Node tests |
| NGU dashboard | 12 Node tests |
| Box Logic | 16 Node tests |
| Logical Solvers | Offline build and 18 scoped UI/source tests |
| MTL Guide | Build, syntax checks, TSV example validation, and 5 Node tests |
| Puzzles | Build and 17 Node tests |
| Baba Is You | Build and 48 Node tests |

The Solver test expected an older header-only selector in the offline export.
Update that assertion to the current shared utility selector. The exported CSS matches the current theme source.
The complete solver engine and soundness batteries were not rerun for these control-size changes.

## Integrity and limits

- Removing the seven new Erdős formula wrappers reproduces the original HTML exactly.
  Every MathML element, proof passage, equation, and source link is unchanged.
- Reader texts, translations, game data, recordings, puzzles, ranking data, and genetic data are unchanged.
- NGU review covers initial and offline presentation. Active laptop telemetry was unavailable.
  No bot, game-control endpoint, or save data was used.
- This is a review of each application and representative nested states.
  It is not a manual review of every chapter, recording, or generated puzzle page.
- Touch results use browser emulation. No physical-device or screen-reader result is claimed.
- WebKit and Firefox were not run. Existing protected content was not rewritten.
- New status copy follows the repository's ASD-STE100-based guidance.
  The full official dictionary was not reviewed. No complete compliance claim is made.

## Repository bases and rollback references

| Repository | Base commit |
| --- | --- |
| site-theme | `4a8f621bbe1d4ae09131d5735ae7ed0ebddb6162` |
| Links | `04ff0c298d3fb19409c442313e3e262e8c1e45be` |
| Profile | `a8cb4f9b3a5710fa41ef45e51c11223515c6b5c4` |
| Logical Solvers | `d0b7e77cd441c12ce451ab691d3b23fc78d7a9cc` |
| Erdős 1016 | `d17dbf305d1b9cb5ddbc7028392a0dafe4610c9c` |
| Home | `ddd95e3dfd6b1b3b57f834400de2119551da96ec` |
| NGU dashboard | `4eb4d7b871237855bd0c9a11ce70f167bae54675` |

The theme was published first, followed by the affected consumers.
The two translation readers use the shared reader stylesheet and need no content rebuild.
The offline Solver file is included with its source changes.
The existing GitHub Pages workflows and routes are unchanged.
To roll back a change, revert its release commit on `main`. Preserve later commits and avoid a forced ref update.


## Release verification

The user authorized publication after a second review on 2026-10-03.
All seven upstream branches still matched the reviewed bases.
The second review found no additional application defect.
All 176 focused Node tests passed across the seven changed repositories.
The homepage, Links collection, and offline Solver rebuilt without a source difference.

The command-line Git push returned HTTP 401 and did not change a branch.
The authenticated GitHub Git API published the same trees and commits through fast-forward updates.
The API commit IDs match the reviewed local commit IDs exactly.

| Repository | Release commit | Pages deployment |
| --- | --- | --- |
| site-theme | [`095ac97745`](https://github.com/JWKNT/site-theme/commit/095ac97745dabc132ba656644f7b0e03fd57e7f2) | [Passed](https://github.com/JWKNT/site-theme/actions/runs/37158727516) |
| links | [`6c6c3133aa`](https://github.com/JWKNT/links/commit/6c6c3133aa2669177e2da870da253a64d2244c55) | [Passed](https://github.com/JWKNT/links/actions/runs/37158729702) |
| profile | [`c14577842c`](https://github.com/JWKNT/profile/commit/c14577842c58ce54c41c21602bc3d45771897d60) | [Passed](https://github.com/JWKNT/profile/actions/runs/37158732080) |
| logical-solver | [`d9870490bf`](https://github.com/JWKNT/logical-solver/commit/d9870490bf15a3fe8d99d4d28a1e4c59bebd4678) | [Passed](https://github.com/JWKNT/logical-solver/actions/runs/37158734377) |
| erdos1016 | [`18220539b8`](https://github.com/JWKNT/erdos1016/commit/18220539b864d909f2ed8a71ae46790ec15e33a3) | [Passed](https://github.com/JWKNT/erdos1016/actions/runs/37158736934) |
| JWKNT.github.io | [`a88b351663`](https://github.com/JWKNT/JWKNT.github.io/commit/a88b35166330c34390c89bd83f3157e6e66a889e) | [Passed](https://github.com/JWKNT/JWKNT.github.io/actions/runs/37158739085) |
| ngu-idle-dashboard | [`9716dd0a04`](https://github.com/JWKNT/ngu-idle-dashboard/commit/9716dd0a04f39d1fb1b09a5516fe92a041a1864a) | [Passed](https://github.com/JWKNT/ngu-idle-dashboard/actions/runs/37158741218) |

The deployed HTML, CSS, JavaScript, and offline Solver file match all 11 changed application files byte for byte.
The shared reader stylesheet reaches both translation readers through their existing URLs.
Live browser checks passed at 390px and 1440px on all seven changed sites and both translation readers.
The checks covered canonical URLs, page width, theme switching, and the relevant controls.
The browser used fresh, TLS-verified public responses, without local source substitution.

The homepage search snapshot contains 19,508 targets.
It identifies source commit `a88b35166330c34390c89bd83f3157e6e66a889e` and a fresh crawl at `2026-10-03T22:32:31.774Z`.
A live search for “Erdős” returns the proof guide. Escape returns focus to the search control.

The pre-release browser checks also passed repeated Links failures followed by empty and populated recovery.
Chapter-menu focus, 200% formula scrolling, touch control sizes, and the offline Solver export passed.
The NGU check remains limited to its read-only offline presentation.

The separate [Lean verification run](https://github.com/JWKNT/erdos1016/actions/runs/37158736953) was still rebuilding the theorem when this release record was prepared.
Its verification-gate tests and toolchain installation passed. No theorem-verification success is claimed here.
The proof-guide deployment passed independently. This release changes no Lean source or mathematical content.
