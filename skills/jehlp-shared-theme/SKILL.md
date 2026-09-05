---
name: jehlp-shared-theme
description: "Change or adopt the shared jehlp.net CSS and theme controller, including compatibility, local overrides, and offline exports."
---

# jehlp-shared-theme

Locate the canonical site-theme checkout and read PHILOSOPHY.md, docs/DESIGN-SYSTEM.md and docs/REPOSITORIES.md. Inspect the consumer's actual load order: theme.js in the head, base.css, then local CSS.

The foundation owns tokens, type roles, common shells, focus, controls and color-mode behavior. Local styles own content layout, special tables and visualization geometry. Remove a duplicated override only after verifying its role. Avoid an appended !important override layer. Keep a CSS fallback for a newly introduced token in independently deployed consumer files.

Keep v1 unchanged. Preserve v2 token names, data-theme, the legacy .dark class, jehlp-theme, migration from jwknt-theme/bst-reader-theme/solverTheme, and jehlp:themechange plus jwknt:themechange. Breaking contracts need a new version directory. A stable v2 URL means the release affects consumers not present in this archive: inventory them rather than assuming safety.

Use stylesheet-relative assets. Rebuild logical-solver/dist/ubahn-solver.html after a shared change; its build must inline theme CSS/JS, masks and favicon. Run node --test tests/*.test.mjs in site-theme, then affected consumer builds/checks. Review both sparse reading and dense working surfaces before publishing a shared revision. Record evidence and exceptions, not a generic “looks good.”
