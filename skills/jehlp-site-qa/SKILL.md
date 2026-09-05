---
name: jehlp-site-qa
description: "Review jehlp.net UI changes in the browser for responsive layout, keyboard use, color modes, and regressions across shared-theme consumers."
---

# jehlp-site-qa

Read site-theme/docs/QA-MATRIX.md and select the rows relevant to the requested change. Inspect existing test commands before running them; report static tests, script behavior tests, and rendered browser evidence separately.

For shared-theme work, make the browser actually load the candidate local theme. Use temporary response rewriting or request interception for the production theme URL, or a throwaway preview copy. Never commit localhost URLs. Rebuild generated documents and the solver export first. Build Jekyll locally; do not mistake archived _site output for the candidate source.

Exercise 390px and 1440px light/dark layouts, keyboard traversal, meaningful focus, 200% text enlargement, and relevant no-JS/print/reduced-motion behavior. Add widths only when a concrete breakpoint defect needs isolation. Test real primary interactions rather than taking only screenshots. Capture representative evidence with viewport, theme and state.

For the MTL contents disclosure, check hidden links, Escape, heading selection, resize and no-JS. For data dialogs, check naming, focus and close. For solver export, disable network. For the dashboard, preserve read-only behavior and truthful offline/stale state.

Fix demonstrated failures at the responsible layer. Stop optional testing when concrete risks are covered. Leave an honest checklist of unavailable gates; never treat a DOM stub or source regex as proof of browser accessibility.
