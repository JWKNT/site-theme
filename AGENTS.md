# jehlp.net site work

Read `PHILOSOPHY.md` and `docs/DESIGN-SYSTEM.md` before changing a shared pattern.
Use `SKILLS.md` to select a task-specific skill; the maintained copies live in
`skills/`. Read `docs/REPOSITORIES.md` before working across sibling repositories.

- This is the authority for shared tokens, controls, color mode, and design decisions.
- Keep v1 unchanged. Preserve v2 names, event names, and legacy storage migration.
- Shared CSS precedes each consumer's CSS. Repair local overrides at their source;
  do not add a global `!important` layer or force every site into one layout.
- Changes to visible behavior include a brief entry in `docs/CHANGELOG.md`.
  Record a new reusable decision in `docs/DECISIONS.md` only when one was made.
- Run `node --test tests/*.test.mjs` and the affected consumer's checks.
  Distinguish static/behavior checks from actual browser review.
- The September 2026 handoff is local work. Do not infer production deployment,
  bot execution, data changes, or remote rewrites from a UI assignment.
