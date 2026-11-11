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
- Use Wrenfold Text for reading content and article headings. Use Georgia for ordinary interface text and Palatino for interface headings.
  Keep controls consistent with the content type. Reserve sans serif for very small chart labels.
  Use monospace for values, identifiers, shortcuts, and compact status.
- Keep the palette neutral. Use ink for links and navigation, with thin underlines where necessary.
  Use restrained blue for focus, selection, and meaningful state.
- Use thin rules to show structure. Add decoration only when the material needs a boundary, depth indicator, or transition.
  This restriction includes cards, shadows, rounded containers, gradients, and animation.
- Keep controls square, compact, clearly labeled, and near the content they affect.
  Give equivalent dropdowns the same appearance and keyboard behavior.
  Remove duplicate controls that have the same function in the same context.
- Use bold Palatino, ordinary case, and modest negative tracking for interface titles.
  Most working-page titles use 28–32 pixels. Long reading pages can use 34–48 pixels.
  Avoid light display weights, rounded interface type, and ornamental control lettering.

## Explicit exception: NDB Idle

NDB Idle retains its own game interface, palette, and browser chrome.
It retains its original interface fonts. Use Wrenfold Text only for explicit reading content.
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
Justify text by default. The shared stylesheet aligns paragraphs to both edges and hyphenates them, so that the word spacing stays even.
Headings, controls, tables, code and captions keep their own alignment.
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

The site itself uses the Ruffle seal, icon i0063 of the style library.
The Home link in each header draws an open door, because a homepage is the way in.
Do not draw Home as a house.

The root directory has one title: the seal. The owner's introduction is beside it and covers the frame, with the human mark in the right margin.
One clear rule separates the introduction from the categories.
Draw homepage art in the same language as the category studies, with a faint echo and an accent point.
It uses decorative typography to organize category and destination names.
Keep that artwork separate from accessible link names. Keep the complete directory compact.
Use always-visible categories and optional search as the collection grows.
Keep every authored destination in static HTML. Independent pages retain the PNG-title convention.

Favicons use the subject symbol in white on a circular black field. Do not use a square field.
The site favicon is the exception: it shows the Ruffle seal as the homepage draws it, in ink on a paper circle with the accent point.
Use geometry, not letters or subject colors, to identify the material.
Examples include a genetics helix, a solved logic path, and a consensus-research aperture.
Preserve semantic colors in charts, puzzle diagrams, and game art.

Use **jehlp.net** for visible authorship and canonical metadata.
Use GitHub account names only in source links where they form part of the destination.

Keep GitHub “Source” links out of page headers.
The masthead contains identity, project-local navigation, and essential controls.
Useful source provenance can remain with the material or in the footer.

## Mark what the owner wrote

AI writes and programs jehlp.net under the owner's supervision.
The human mark identifies the exceptions: a square bracket in the right margin of a passage, with a human figure beside it.
Put the mark only on text that the owner wrote. Do not put it on text that AI wrote.
Keep the owner's words exactly. Do not apply the technical writing rules to them.
The homepage introduction explains the mark and carries it.

## Treat accessibility as part of the style

Support keyboard use and visible focus. Give controls useful labels and live status.
Respect reduced motion. Keep text legible in light and dark modes.
On narrow screens, simplify the layout without hiding essential content.

## Show code as code

Show source code and structured data in monospace, with the shared syntax palette.
Calculate the highlighting during the build. Do not load a highlighter in the browser.
The palette uses the theme tones: muted comments, blue keywords, and quiet hues for strings, numbers, and names.
Color helps the reader to parse code. It does not decorate the page.
Keep the exact source text. Put long collections of listings in native disclosures.

## Show mathematics as mathematics

Typeset formulas as native MathML during the build, with the shared math font.
Do not load a typesetter in the browser. Do not put a formula in an image.

## Say what a result means, then stop

An explainer answers one question: what does this statement mean? It assumes school arithmetic, defines each term at first use and works through numbers.
It does not show the proof. It has no section headings, summaries, status lines, history or source list.
Link a source on the words that state the result. Remove each sentence that the reader can do without.
A claim of proof is not a confirmed proof. Keep the words for each exact.

## Use direct technical writing

Less is often more. Say what the reader needs, then stop. A short page that answers the question is better than a complete one that buries the answer.
Accuracy does not need length. Remove each section that the reader can do without, even when it is correct.

Do not label what the page already shows. AI writing adds labels, footnotes and descriptors where the page is already clear.
Remove a line that repeats what a title, a control or the layout shows.
Keep a note only when the reader needs it: a limit of the data, a legal notice, or an instruction for an unfamiliar tool.

Use ASD-STE100 Issue 9 for original explanations, instructions, help, and interface text.
Follow [the writing policy](docs/WRITING-STYLE.md).
Preserve reader text, translations, source quotations, NDB fiction and item descriptions, and exact technical meaning.

## Test the range of states

Review empty and realistic states. Test narrow and wide viewports, both color modes, keyboard focus, and reduced motion.
For collections, test a few records and the largest plausible dataset.
Remove unnecessary interface elements without removing capability.
