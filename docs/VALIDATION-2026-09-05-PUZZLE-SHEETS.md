# Quiet puzzle sheets · 2026-09-05

## Scope and contract

The public puzzle archive now groups the complete main puzzle unit in a thin,
square-edged sheet. Its existing semantic divider is the top edge, with a new
transparent geometric ornament rather than the masthead's puzzle logo. Rules and
worked examples remain outside. Leading solver-only content becomes a compact
action row on 124 pages; the two image-first exceptions retain their post-grid
links and prose in source order. No new JavaScript is required.

The content-aware wrappers and layout remain local to `puzzles`. Only the tiny
PNG is a new shared runtime asset. The generator, ornament test, philosophy,
component contract, decision 012, QA matrix, and two existing skills are maintained
in `site-theme`. No shared CSS/JS, private Jekyll source, homepage, puzzle data,
diagram files, routes, or hosting configuration changed.

## Automated and independent checks

- Fresh `npm run build`: 126 puzzle pages, 276 tags.
- Puzzle tests: 9 passed. Removing the exact inserted wrappers recovers every
  article's original HTML byte-for-byte after the existing image-path rewrite.
  All 177 diagrams remain: 48 examples outside and 129 main/reference images
  inside. Tests also cover action-only grouping, notes, semantic boundaries,
  paired grids, and rejected ambiguous source structures.
- Theme tests: 22 passed, including a distinct 128×128 RGBA ornament under 12KB.
  The generated PNG is 1,975 bytes; its transparent lozenge/point geometry was
  inspected directly. The masthead image remains unchanged.
- An independent source audit confirmed balanced main segments on all 126 pages,
  source-byte preservation, and solver-only content in all 124 action rows.
- Both updated skills passed the skill-creator validator. The system Python
  lacked PyYAML, so validation used an isolated temporary dependency directory;
  repository dependencies and skill frontmatter were unchanged.
- Authored code/docs pass `git diff --check`. Full generated-page whitespace
  checks report pre-existing trailing spaces exposed on newly wrapped source
  lines. Those original bytes were deliberately retained, not silently trimmed.

## Rendered checks

The local preview rewrote production theme URLs in responses only so the browser
loaded the candidate asset. No localhost URLs were committed. Screenshots were
reviewed inline in the task; they are not claimed as saved image artifacts.

- U-Bahn Sweeper (1): actual 1440×900 and 390×844 light/dark views. The sheet has
  one top edge, a restrained neutral surface, and a small distinct ornament.
  Both solve links share a row at ordinary size. At 390px the document is exactly
  390px wide, the frame 362px, and the grid 340px; no horizontal page overflow.
- Keyboard Tab traversal between native solve links gives a visible focus ring.
  Normal action text is 14px with 40px desktop controls; coarse-pointer CSS
  increases their minimum height to 44px.
- At 390px with 200% root text, action text is 28px. Buttons wrap to separate
  rows, the grid stays inside the frame, and document width remains 390px.
  This was checked both geometrically and in an actual screenshot.
- Double Internal X-Sums: narrow screenshot shows the complete worked example
  above the ornament and both main solve links plus the main grid inside.
- Roller: narrow screenshot shows both main grids inside one sheet, then its
  solve link and notes. Loop's DOM confirms the complete example outside and
  `And here is the main puzzle:` inside. Pentomino Sudoku's main grid and named
  reference chart are inside. All these diagrams loaded, with no page overflow.
- Print emulation: ornament hidden, 1px top border restored, black text, loaded
  square grid, no page overflow. Screenshot reviewed; physical pagination and
  a printed PDF were not tested.
- Scripts disabled and page reloaded: native solve links and loaded diagrams
  remain available. Reduced-motion emulation produces `scroll-behavior: auto`.
  This is a static presentation change, not a new interaction controller.

The existing design/component/QA/release/change-record skills guided the work.
The design and QA skills were narrowly extended through skill-creator; no new
skill was needed. The Sites metadata was preserved along with the user's existing
jehlp.net GitHub Pages destination; no alternative hosting site was created.

## Publication and rollback

The new shared ornament was published first in theme commit `f57aded`; Pages run
`34005581355` succeeded and the public PNG returned HTTP 200 with identical bytes.
Puzzle commit `e136d48` was pushed to the existing `main` branch; Pages run
`34005649337` succeeded. All 130 checked public puzzle files (126 article pages,
catalogue, 404, CSS and JavaScript) returned HTTP 200 and matched local bytes.
The live Sweeper page was also checked in the browser: one frame, a distinct
loaded ornament, loaded grid, and no page-wide overflow in the dark narrow view.
Temporary emulation settings were reset and the preview tab was navigated to
the live page. The final theme commit records guidance and this release evidence.

Rollback bases: puzzles `58d6e53`, theme `4b44de5`. Keep the additive ornament
available if reverting the consumer; no data migration is needed. Unrelated
untracked `.DS_Store` files in the theme checkout were preserved and not committed.
