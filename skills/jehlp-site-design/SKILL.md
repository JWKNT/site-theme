---
name: jehlp-site-design
description: "Design or improve jehlp.net pages using the shared visual language while preserving each project’s reading, comparison, or working surface."
---

# jehlp-site-design

Read the owning repository's AGENTS.md and the theme's PHILOSOPHY.md and docs/DESIGN-SYSTEM.md. Locate site-theme beside the current repo, or resolve this skill's real path to its owning site-theme checkout.

Identify the primary task and choose the surface around it: reading, reference, collection, live monitor, chart exploration, or puzzle workspace. Put the real material or controls in the first useful viewport. Retain the serif/sans/mono roles, paper/charcoal modes, restrained blue, square controls and quiet rules; do not impose a card grid or marketing hero.

Treat each project as an independent page: omit navigation back to the global homepage, including linked brands and footer shortcuts. Preserve project-local navigation and source/download links. For a masthead, use the shared identity contract in docs/COMPONENTS.md: a relevant transparent PNG from v2/marks as img.site-mark, 32px, empty alt—not Unicode or emoji. Keep identity separate from data colors.

Use margins for meaningful context and comparison; remove unexplained number gutters, oversized gaps and empty hero space. Remove duplicate headings, redundant controls in the same context and obvious instructions, but retain uncertainty, provenance, privacy boundaries and actionable state text. A puzzle's PNG-centered divider belongs at the start of its main puzzle unit, after complete rules and worked examples. Keep the unit's lead-in, solve links and grids together below it; identify the boundary by meaning, not the first image. Use the puzzle transition contract in docs/COMPONENTS.md for explicit exceptions and preserve all source content/order.

Inspect existing layout and CSS ownership before editing. Regular reading targets 1rem; navigation and controls .875rem; secondary metadata .75rem. These are design targets. Judge dense chart marks separately instead of shrinking all labels or changing board geometry. Ordinary single-choice selects adopt data-ui-select; retain richer grouped VN chapter browsers. Choose compact paginated rows with detail or an overflowing comparison matrix, not pagination plus an internally scrolling two-axis table.

Make a representative improvement, then extend only the proven pattern. Keep data, ranking, scientific interpretation, puzzle logic and bot policy outside a visual change. Record the actual reusable decision in site-theme/docs/DECISIONS.md and the shipped scope in docs/CHANGELOG.md. Use docs/QA-MATRIX.md to choose checks proportional to the change; do not report unperformed browser checks as passed.
