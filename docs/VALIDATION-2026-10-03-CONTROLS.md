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

The reviewed changes are prepared for the authorized GitHub release.
Publish the shared stylesheet first, then its consumers through their existing Pages routes.
The release record will include exact commits and checks after publication.
