# jehlp.net site theme

Shared, versioned CSS, behavior, and assets for jehlp.net projects.

The theme follows a shared [site philosophy](PHILOSOPHY.md): start with the
material, keep the interface subordinate, earn every feature, and reuse a
restrained visual language without forcing unrelated projects into one layout.

```html
<script src="https://jehlp.net/site-theme/v2/theme.js"></script>
<link rel="stylesheet" href="https://jehlp.net/site-theme/v2/base.css">
<link rel="stylesheet" href="assets/styles.css">
```

The shared stylesheet owns type roles, design tokens, document defaults,
accessibility utilities, controls, tables, dividers, standard shells, and header
primitives. Each consumer keeps only content-specific layout and visualization
rules locally. The controller applies the saved or system theme before the page
renders and adds an accessible toggle to the first standard navigation or
toolbar slot.

The recurring visual grammar is serif-first typography, a neutral paper
palette, one restrained blue, hairline divisions, square compact controls,
small-caps labels, generous whitespace, and content-led responsive layouts.
These are defaults rather than decoration requirements: local UI should exist
only when it helps readers find, read, compare, or operate the material.

Individual favicons live in `v2/favicons/`; `tools/make_favicons.py` regenerates
the family from the same field, stroke, and accent system.

## Versioning

Version 1 remains unchanged for older consumers. New and migrated pages use
version 2. Breaking changes belong in a new top-level version directory.

## Local preview

Run a static server from the repository root:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

When changing the foundation, review both sparse and dense consumers, narrow
and wide layouts, light and dark modes, keyboard focus, and reduced motion.
