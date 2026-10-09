# Site philosophy

Readers is the visual reference. It uses warm paper, dark ink, traditional type, and a simple page frame.
The shared theme applies this design to different tasks.
Readers, archives, solvers, guides, databases, indexes, and link collections need layouts that suit their content.

## Start with the material

Structure follows the information. Long text needs a readable line length.
Dense archives need clear organization. Tools need clear state and controls.
Use the shared design with a layout that suits each page.

## Keep the interface subordinate

- Prefer text, whitespace, and alignment to containers or decoration.
- Use Wrenfold Text for reading, headings, and ordinary interface text.
  Keep controls consistent with the content type. Reserve sans serif for very small chart labels.
  Use monospace for values, identifiers, shortcuts, and compact status.
- Keep the palette neutral. Use ink for links and navigation, with thin underlines where necessary.
  Use restrained blue for focus, selection, and meaningful state.
- Use thin rules to show structure. Add decoration only when the material needs a boundary, depth indicator, or transition.
  This restriction includes cards, shadows, rounded containers, gradients, and animation.
- Keep controls square, compact, clearly labeled, and near the content they affect.
  Give equivalent dropdowns the same appearance and keyboard behavior.
  Remove duplicate controls that have the same function in the same context.
- Use bold Wrenfold Text, ordinary case, and modest negative tracking for titles.
  Most working-page titles use 28–32 pixels. Long reading pages can use 34–48 pixels.
  Avoid light display weights, rounded interface type, and ornamental control lettering.

## Explicit exception: NDB Idle

NDB Idle retains its own game interface, typography, palette, and browser chrome.
The owner excluded it from the Readers visual redesign.
Do not change its theme as part of general theme adoption.
A visual redesign requires an explicit request for that game.

## Apply the Readers design across the sites

Improve type weight, line length, baseline alignment, borders, and content spacing.
Do not make every page a novel reader. Keep dense tools efficient and prose comfortable to read.
Preserve puzzle geometry, chart colors, game art, and data meaning.
Keep theme controls and subject marks small.
Do not add scrollwork, simulated parchment, or gold decoration.

## Make the hierarchy clear

Organize long pages by title and date, section headings, summaries, primary material, and optional detail.
Where space permits, put context in a margin. On narrow screens, put it in the text flow.

Use margins for useful context or comparison. Remove unexplained section numbers and empty promotional space.
Decrease excessive gaps and balance columns. Keep readable line lengths and clear separation.

Use 66–72 characters per line for long prose. Use a wider data view only when comparison requires it.
Use tabular or monospaced figures in tables, timelines, code, and numeric results. Do not apply them to prose.

Use a shared ruled ornament for major subject changes, once or twice per page.
Do not put one between every dashboard section. Choose a small symbol that suits the material.
Examples include an asterism for an editorial change, a helix-like bow for genetics, and a section sign for documents.

Give each transition one boundary rule. If an ornament separates two sections, remove the preceding section's closing rule.
Do not add a second rule below a disclosure at the end of a section.
Use parallel lines to show rows or columns, not to surround whitespace.

Put one PNG-centered divider before the main puzzle unit, after all rules and worked examples.
Keep its introduction, solve links, and grids together below the line.
Choose this boundary by meaning. The first image does not necessarily start the main puzzle.
Align the divider with the layout. Do not separate a puzzle from its introduction or links.

Use a transition ornament that differs from the masthead logo.
A thin, square-edged sheet can group main solve links, grids, and references that otherwise appear separate.
Use the divider as the sheet's top edge. Do not add a second border below it.
Keep examples outside the sheet. Avoid shadows.

Preserve diagram colors and proportions. Decrease the inset on narrow screens.
Group actual solve actions together. Keep post-grid links in place and preserve the prose structure.
Do not impose an identical page layout on different content.

## Add features with a purpose

Add a feature when it helps readers find, read, compare, or operate the material.
This applies to search, filters, sorting, pagination, drawers, and dialogs.
Keep empty states, counts, and status text useful and brief.

Choose one collection layout. Use compact paginated rows in the page flow, with essential comparison fields and optional details.
For a matrix whose columns must remain together, use a named overflow region.
Do not combine pagination with a table that scrolls internally in both directions.
Use an arrow to show sort direction in ordinary headings.
Explain primary and secondary sorting in advanced controls, without unexplained priority digits.

Use static HTML, CSS, and small dependency-free scripts by default.
Calculate stable results during the build. Limit rendered output for large collections.
Keep simple tasks simple as the dataset grows.

## Share foundations, preserve identity

The versioned theme controls the palette, type stacks, document defaults, focus behavior, accessibility helpers, standard header, and color modes.
Each site's stylesheet controls only its content-specific layout and components.
Local styles can differ when the subject requires it.
Keep their proportions, restraint, and interaction behavior consistent with the shared design.

Pair each masthead title with a small abstract monochrome subject symbol.
Do not use a Unicode glyph or emoji as the page identity.
Generate transparent PNGs from the authoritative SVG geometry for the existing img.site-mark contract.
Use the fine geometric style of Home and the theme dial: black on paper, white on charcoal.
The mark is decorative. The title supplies its name.

The root directory can omit a visible masthead.
It can use decorative typography to organize category and destination names.
Keep that artwork separate from accessible link names. Keep the complete directory compact.
Use always-visible categories and optional search as the collection grows.
Keep every authored destination in static HTML. Independent pages retain the PNG-title convention.

Favicons use the subject symbol in white on a rounded black field.
Use geometry, not letters or subject colors, to identify the material.
Examples include a genetics helix, a solved logic path, and a consensus-research aperture.
Preserve semantic colors in charts, puzzle diagrams, and game art.

Use **jehlp.net** for visible authorship and canonical metadata.
Use GitHub account names only in source links where they form part of the destination.

Keep GitHub “Source” links out of page headers.
The masthead contains identity, project-local navigation, and essential controls.
Useful source provenance can remain with the material or in the footer.

## Treat accessibility as part of the style

Support keyboard use and visible focus. Give controls useful labels and live status.
Respect reduced motion. Keep text legible in light and dark modes.
On narrow screens, simplify the layout without hiding essential content.

## Use direct technical writing

Use ASD-STE100 Issue 9 for original explanations, instructions, help, and interface text.
Follow [the writing policy](docs/WRITING-STYLE.md).
Preserve reader text, translations, source quotations, NDB fiction and item descriptions, and exact technical meaning.

## Test the range of states

Review empty and realistic states. Test narrow and wide viewports, both color modes, keyboard focus, and reduced motion.
For collections, test a few records and the largest plausible dataset.
Remove unnecessary interface elements without removing capability.
