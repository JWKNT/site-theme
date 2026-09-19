# Site philosophy

The Readers page is the aesthetic reference: warm paper, dark ink, assured traditional type, and a quiet frame for the material. The shared theme carries that character into different kinds of work. A script reader, puzzle archive, solver, reference guide, item database, project index, and link collection should feel related without pretending their content has the same shape.

## Start with the material

Structure follows the information. A long text needs readable measure; a dense archive needs efficient scanning; a tool needs clear state and controls. Reuse the visual language, not a universal page template.

## Keep the interface subordinate

- Prefer text, whitespace, and alignment before containers or decoration.
- Use Georgia for reading and ordinary interface text, with bold Palatino headings. Controls belong to the same typographic voice as the material. Reserve sans serif for genuinely tiny chart labels and monospace for values, identifiers, shortcuts, and compact status.
- Keep the palette neutral. Links and navigation use ink, with fine underlines where needed; restrained blue remains available for focus, selection, and meaningful state.
- Use hairline rules to explain structure. Avoid cards, shadows, rounded containers, gradients, and animation unless the material needs a real boundary, depth cue, or transition.
- Keep controls square, compact, plainly labeled, and close to the content they affect. Equivalent dropdowns share one visual and keyboard grammar; remove duplicate controls that do the same job in the same context.
- Let titles be assured: bold Palatino, ordinary case, modest negative tracking. Most working-page titles fit near 28–32 pixels; sustained reading may use 34–48 pixels. Avoid airy display weights, fashionable rounded UI type, and ornamental lettering in ordinary controls.

## Explicit exception: NDB Idle

NDB Idle retains its own game interface and pre-sweep typography, palette, and browser chrome. The owner explicitly exempted it from the Readers aesthetic sweep. Do not migrate or reskin it as part of general theme adoption; reconsider only on an explicit request for that game.

## Carry the Readers character across the family

Refinement is usually the last ten percent: type weight, line length, an aligned baseline, a calmer border, and breathing room around the actual material. Do not turn every page into a novel reader. Keep dense tools efficient and prose generous. Preserve puzzle geometry, chart colors, game art, and data meaning. Theme controls and existing subject marks can remain as restrained punctuation; do not add scrollwork, simulated parchment, or gold decoration to suggest quality.

## Make the hierarchy skimmable

A long page should work at several depths: title and dateline, section headings, short summaries, the primary material, then disclosed detail. Put context in a margin or a quiet note when room permits. On narrow screens, move it back into the reading flow.

Whitespace must earn its place. Use margins for useful context or comparison, not unexplained section numbers or empty hero space. Tighten oversized gaps and unbalanced columns before adding decoration, while retaining readable measure and enough separation to scan.

Use 66–72 characters for sustained prose. Data tools may use a wider shell only where comparison needs it. Tables, timelines, code, and numeric results should use tabular or monospaced figures; prose should not.

Major changes of subject may use a shared ruled ornament. It is punctuation, not branding: use it once or twice on a page, never between every dashboard section. The mark may vary with the material—an asterism for an editorial turn, a helix-like bow for genetics, a section sign for documents—but its visual weight stays quiet.

A transition has one owner. When an ornament separates two sections, the preceding section gives up its closing rule; when a disclosure ends a section, do not add a second rule immediately beneath it. Parallel hairlines should describe rows or columns, never appear as accidental strata around whitespace.

On a puzzle page, one quiet PNG-centered rule marks the start of the main puzzle unit: its lead-in, solve links, and grids belong together below it. Complete rules and worked examples stay above it. Choose the boundary by meaning, not by the first image; the line must not separate a puzzle from its own introduction or links. Its orientation follows the layout.

Give that transition its own small geometric ornament, distinct from the masthead logo. A quiet, square-edged sheet can group the main solve links, grids and reference material when they otherwise feel disconnected. Let the divider form the sheet's top edge rather than stacking a second border beneath it. Keep examples outside, avoid shadows, preserve original diagram colors and proportions, and reduce the inset on narrow screens. Group genuine solve actions; do not flatten prose or move a post-grid link merely to make every page identical.

## Earn every feature

A feature belongs when it makes the material easier to find, read, compare, or operate. Search, filtering, sorting, pagination, drawers, and dialogs are tools for a real information problem—not decoration. Empty states, counts, and status text should be useful and quiet.

Choose one collection-navigation model. Paginated lists should flow with the page, with essential comparison fields and further detail on demand. A true matrix may use a named overflow region when its columns must remain together. Do not combine pagination with an internally scrolling two-axis table. A direction arrow is enough for an ordinary sorted heading; explain primary and secondary sorting in the advanced controls, not with unexplained priority digits.

Static HTML, CSS, and small dependency-free scripts are the default. Precompute stable work during a build and bound rendered output when a collection can become large. The simple case should stay simple as the dataset grows.

## Share foundations, preserve identity

The versioned theme owns palette, type stacks, document defaults, focus behavior, accessibility helpers, the standard header, and the color-mode contract. A site stylesheet owns only its content-specific layout and components. Local rules can depart from the foundation when the subject requires it, but should keep the same restraint, proportions, and interaction grammar.

Mastheads use a small, relevant transparent PNG beside the text title, never a Unicode glyph or emoji standing in for the page identity. Related subjects share a restrained drawing language, with a mark that remains clear on paper and charcoal. The mark is decorative; the title supplies its name.

The root directory has a different job: it may omit a visible masthead entirely
and use composed, decorative typography to organize category and destination
names. Keep that artwork separate from the accessible link names and small enough
to preserve a compact overview. Native disclosures and optional search let the
directory grow; the complete authored destinations remain in static HTML. This
homepage treatment does not replace the PNG-title convention on independent pages.

Favicons retain their separate dark rounded field, ivory geometry, and one subject color. Their center marks identify the material—a helix for genetics, a solved path for logic, a lens for consensus research—without relying on letters.

Visible authorship and canonical metadata use **jehlp.net**. GitHub account names belong only in source links where they are part of the destination.

Keep GitHub “Source” links out of page headers. The masthead is for identity,
project-local navigation, and essential controls; useful source provenance may
remain with the material or in the footer.

## Treat accessibility as part of the style

Pages should work with a keyboard, retain visible focus, expose useful labels and live status, respect reduced motion, remain legible in light and dark modes, and collapse cleanly on narrow screens. Responsive design should simplify hierarchy rather than hide essential content.

## Test the ends of the scale

Review the empty state and realistic content, narrow and wide viewports, light and dark modes, keyboard focus, and reduced motion. For collections, test both a handful of records and the largest plausible dataset. Minimalism is successful when there is less interface to manage without losing capability.
