---
name: jehlp-change-record
description: "Record reusable jehlp.net UI decisions, validation evidence, and model-to-model handoffs in site-theme without duplicating unrelated project documentation."
---

# jehlp-change-record

Use the canonical site-theme checkout. Read the current docs/CHANGELOG.md, docs/DECISIONS.md and affected repository guidance. Preserve PHILOSOPHY.md as the long-lived intent; do not rewrite it for every implementation detail.

For an actual change, record date, problem, files or affected projects, resulting behavior, tests actually run and material remaining work. A reusable choice gets a short decision entry: evidence, decision, tradeoff, and when to reconsider it. Routine spacing fixes need only a changelog entry. Do not invent past intent or claim visual validation from static checks.

A handoff names the recipient's requested model/reasoning, exact current state and base commits, dirty-work constraints, ordered next actions, commands, and completion gates. Make local edits and generated files concrete before handing off. Distinguish done, prepared, untested and blocked.

Use current official documentation when specifying Codex installation/model configuration; preserve the user's chosen target. Keep skills self-contained and under site-theme/skills; update their catalog when triggers change. Version these changes in the owning Git repository and keep the portable handoff import separate from live repository metadata.
