# Site philosophy

The shared theme is a quiet frame for different kinds of work. A script reader, puzzle archive, solver, reference guide, item database, project index, and link collection should feel related without pretending their content has the same shape.

## Start with the material

Structure follows the information. A long text needs readable measure; a dense archive needs efficient scanning; a tool needs clear state and controls. Reuse the visual language, not a universal page template.

## Keep the interface subordinate

- Prefer text, whitespace, and alignment before containers or decoration.
- Use the serif face for reading and the monospaced face only for data, identifiers, shortcuts, and compact status.
- Keep the palette neutral with one restrained blue for links, focus, selection, and meaningful state.
- Use hairline rules to explain structure. Avoid cards, shadows, rounded containers, gradients, and animation unless the material needs a real boundary, depth cue, or transition.
- Keep controls square, compact, plainly labeled, and close to the content they affect.
- Let titles be calm. Small caps, moderate weight, and tight hierarchies are preferred to oversized display type.

## Earn every feature

A feature belongs when it makes the material easier to find, read, compare, or operate. Search, filtering, sorting, pagination, drawers, and dialogs are tools for a real information problem—not decoration. Empty states, counts, and status text should be useful and quiet.

Static HTML, CSS, and small dependency-free scripts are the default. Precompute stable work during a build and bound rendered output when a collection can become large. The simple case should stay simple as the dataset grows.

## Share foundations, preserve identity

The versioned theme owns palette, type stacks, document defaults, focus behavior, accessibility helpers, the standard header, and the color-mode contract. A site stylesheet owns only its content-specific layout and components. Local rules can depart from the foundation when the subject requires it, but should keep the same restraint, proportions, and interaction grammar.

## Treat accessibility as part of the style

Pages should work with a keyboard, retain visible focus, expose useful labels and live status, respect reduced motion, remain legible in light and dark modes, and collapse cleanly on narrow screens. Responsive design should simplify hierarchy rather than hide essential content.

## Test the ends of the scale

Review the empty state and realistic content, narrow and wide viewports, light and dark modes, keyboard focus, and reduced motion. For collections, test both a handful of records and the largest plausible dataset. Minimalism is successful when there is less interface to manage without losing capability.
