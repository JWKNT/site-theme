# Puzzle boundary correction · 2026-09-05

## Problem and correction

The user reported that the ornament split colon-ended introductions, examples,
and main puzzles. The previous first-image match preserved content but did not
describe its structure. One divider now starts the whole main puzzle unit,
including its introductory words, solve links, and grids. Complete examples stay
with the rules above. The image and CSS appearance are unchanged.

The main agent implemented `puzzles/lib/puzzle-content.mjs`. An independent agent
inventoried all 126 source articles and confirmed the boundary scheme: 123 have
one named SudokuPad link, one uses only penpa+, Loop has an explicit main-puzzle
lead-in, and Roller has two primary grids before its solve link. The helper keeps
link paragraphs intact and uses reviewed source anchors for the two exceptions.
Missing, changed, or ambiguous anchors fail validation instead of guessing.

The archive retains 48 example diagrams above the boundary and 129 primary or
reference diagrams below it. All 177 diagrams, every source word, solving link,
slug, and original ordering remain intact. The source JSON was not changed.
125 generated pages move the divider; Roller's original position was already
correct. No private Jekyll source or unrelated repository was edited this turn.

## Validation performed

- Fresh `npm run build` regenerated all 126 pages. Six tests passed, including
  byte-for-byte original article preservation after removing the ornament and
  accounting for the pre-existing relative image-path rewrite.
- New checks cover all pages' example/main partition, colon lead-ins, long
  multi-sentence examples, paired grids, reference charts, link paragraphs, and
  rejected ambiguous/missing/changed boundaries. The catalogue is unchanged.
- Real browser checks covered Loop, Three Extraterrestrials, Cave/Pentominous,
  Pentomino Sudoku, Roller, and A38 at 1440px light and 390px dark. Each had the
  intended diagrams on each side of the divider, a divider directly within its
  article (not a link/paragraph), and zero document-wide overflow.
- Double Internal X-Sums was visually inspected at 1440px light: its colon-ended
  example introduction stays with the complete example, followed by the divider,
  then both main solve links and the main grid. Loop was visually inspected at
  390px dark: its whole example is above the ornament and `And here is the main
  puzzle:` is below, directly preceding its grid. Loop also passed a 200% text
  stress with no document overflow. Temporary font/viewport settings were reset.
- Screenshots are in the task's `outputs/puzzle-boundaries/`; the previous
  first-image placement is visible in `outputs/specifics-pass/puzzle-wide-light.png`.
- Theme tests: 21 passed. Both modified skills passed the skill-creator validator.
  Authored code/docs pass diff whitespace checks. Two generated changed lines
  expose trailing spaces inherited verbatim from the imported source (Cave /
  Pentominous and U-Bahn under Tripleblock); those bytes were deliberately retained
  rather than altering content to satisfy a whitespace-only check.

The jehlp design/component/QA/release/change-record skills guided this correction.
The existing site-design and site-qa skills were narrowly updated through the
skill-creator workflow. The Sites skills' existing-project constraints were
respected: existing metadata and the explicitly requested Pages destination were
preserved; no new hosting destination or credential flow was introduced.

## Publication

Puzzle commit `58d6e53` was pushed to existing `main`; Pages run `33990218509`
completed successfully. All 130 checked public puzzle files (126 article pages,
catalogue, 404, CSS, JavaScript) returned HTTP 200 and matched local SHA-256 bytes.
The live Loop page also passed a browser check: example above, main-puzzle
lead-in and grid below, divider directly within the article, no page overflow.
The shared guidance update is a separate documentation/skills-only commit; no
shared runtime assets changed. Rollback bases: puzzles `8317190`, theme `17dd9d0`.
