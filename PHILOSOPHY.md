# Site philosophy

The shared theme is a quiet frame for different kinds of work. A script reader, puzzle archive, solver, reference guide, item database, project index, and link collection should feel related without pretending their content has the same shape.

## Start with the material

Structure follows the information. A long text needs readable measure; a dense archive needs efficient scanning; a tool needs clear state and controls. Reuse the visual language, not a universal page template.

## Keep the interface subordinate

- Prefer text, whitespace, and alignment before containers or decoration.
- Use serif for reading, sans serif for interface and metadata, and monospace only for values, identifiers, shortcuts, and compact status.
- Keep the palette neutral with one restrained blue for links, focus, selection, and meaningful state.
- Use hairline rules to explain structure. Avoid cards, shadows, rounded containers, gradients, and animation unless the material needs a real boundary, depth cue, or transition.
- Keep controls square, compact, plainly labeled, and close to the content they affect.
- Let titles be calm. A page title should usually fit near 31 pixels; section headings should stay near the text they govern.

## Make the hierarchy skimmable

A long page should work at several depths: title and dateline, section headings, short summaries, the primary material, then disclosed detail. Put context in a margin or a quiet note when room permits. On narrow screens, move it back into the reading flow.

Use 66–72 characters for sustained prose. Data tools may use a wider shell only where comparison needs it. Tables, timelines, code, and numeric results should use tabular or monospaced figures; prose should not.

Major changes of subject may use the shared star-and-hairline divider. It is punctuation, not branding: use it once or twice on a page, never between every dashboard section.

## Earn every feature

A feature belongs when it makes the material easier to find, read, compare, or operate. Search, filtering, sorting, pagination, drawers, and dialogs are tools for a real information problem—not decoration. Empty states, counts, and status text should be useful and quiet.

Static HTML, CSS, and small dependency-free scripts are the default. Precompute stable work during a build and bound rendered output when a collection can become large. The simple case should stay simple as the dataset grows.

## Share foundations, preserve identity

The versioned theme owns palette, type stacks, document defaults, focus behavior, accessibility helpers, the standard header, and the color-mode contract. A site stylesheet owns only its content-specific layout and components. Local rules can depart from the foundation when the subject requires it, but should keep the same restraint, proportions, and interaction grammar.

Favicons share a dark rounded field, ivory geometry, and one subject color. Their center marks identify the material—a helix for genetics, a solved path for logic, a lens for consensus research—without relying on letters.

Visible authorship and canonical metadata use **jehlp.net**. GitHub account names belong only in source links where they are part of the destination.

## Treat accessibility as part of the style

Pages should work with a keyboard, retain visible focus, expose useful labels and live status, respect reduced motion, remain legible in light and dark modes, and collapse cleanly on narrow screens. Responsive design should simplify hierarchy rather than hide essential content.

## Test the ends of the scale

Review the empty state and realistic content, narrow and wide viewports, light and dark modes, keyboard focus, and reduced motion. For collections, test both a handful of records and the largest plausible dataset. Minimalism is successful when there is less interface to manage without losing capability.
