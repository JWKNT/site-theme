---
name: jehlp-components
description: Extract, extend, or adopt reusable jehlp.net interface components across static pages and generators, with explicit markup contracts and native fallbacks.
---

# jehlp-components

Locate the canonical site-theme checkout and read its `PHILOSOPHY.md` and
`docs/COMPONENTS.md`. Inspect `components.html` for working examples and the owning
page's load order and generator. Optional components live in `v2/components.css`
and `v2/components.js`; base tokens and theme preferences remain in their existing
foundation files.

Choose the smallest pattern that serves the material. Existing contracts cover
directories, grouped fields, segmented selections, responsive disclosures, section
indexes, overflow regions, native dialog shells, and copyable code. Extract a new
behavior when real consumers share its semantics, not merely similar class names.
Prove it in a representative page before spreading it. Keep intentional local
differences explicit.

Use classes for appearance and data attributes for behavior. Native HTML remains
useful if the optional script fails. Shared components do not own application
data, filtering policy, API calls, or puzzle logic. `JehlpUI.enhance(root)` is
idempotent; use it for newly inserted components and remove superseded local
listeners. Geometry, content, and dataset rendering stay local.

Edit authored templates before regenerating output. Publish new assets before
their consumers. Check focus, keyboard, breakpoint transitions, empty/populated,
and no-script behavior as relevant, plus existing consumer tests. Record contracts
and adopters in `docs/COMPONENTS.md`; add a working gallery example when it helps
future adoption. Do not add an abstraction or dependency solely to increase the
component count.
