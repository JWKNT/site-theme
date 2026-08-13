# JWKNT site theme

Shared, versioned CSS for JWKNT GitHub Pages projects.

The theme follows a shared [site philosophy](PHILOSOPHY.md): start with the
material, keep the interface subordinate, earn every feature, and reuse a
restrained visual language without forcing unrelated projects into one layout.

```html
<script src="/site-theme/v1/theme.js"></script>
<link rel="stylesheet" href="/site-theme/v1/base.css">
<link rel="stylesheet" href="assets/styles.css">
```

The shared stylesheet owns design tokens, document defaults, accessibility
utilities, and common header primitives. Each consumer keeps its page-specific
layout and components in a local stylesheet loaded afterward. The controller
applies the saved or system theme before the page renders and adds an accessible
toggle to the first standard navigation or toolbar slot on the page.

The recurring visual grammar is serif-first typography, a neutral paper
palette, one restrained blue, hairline divisions, square compact controls,
small-caps labels, generous whitespace, and content-led responsive layouts.
These are defaults rather than decoration requirements: local UI should exist
only when it helps readers find, read, compare, or operate the material.

## Versioning

Changes under `v1/` must remain backward compatible because every v1 consumer
receives them automatically. Add a new top-level version directory for breaking
changes.

## Local preview

Run a static server from the repository root:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

When changing the foundation, review both sparse and dense consumers, narrow
and wide layouts, light and dark modes, keyboard focus, and reduced motion.
