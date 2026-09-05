# Codex skills for jehlp.net

These are seven focused skills. Their source of truth is
this Git repository. They do not require ChatGPT Work tools or an API key.

| Skill | Use when |
| --- | --- |
| [`jehlp-site-design`](skills/jehlp-site-design/SKILL.md) | Design or improve jehlp.net pages using the shared visual language while preserving each project’s reading, comparison, or working surface. |
| [`jehlp-shared-theme`](skills/jehlp-shared-theme/SKILL.md) | Change or adopt the shared jehlp.net CSS and theme controller, including compatibility, local overrides, and offline exports. |
| [`jehlp-components`](skills/jehlp-components/SKILL.md) | Extract, extend, or adopt reusable interface patterns with explicit markup contracts and native fallbacks. |
| [`jehlp-data-ui`](skills/jehlp-data-ui/SKILL.md) | Improve jehlp.net tables, filters, chart controls, and live status without changing the underlying data or domain logic. |
| [`jehlp-site-qa`](skills/jehlp-site-qa/SKILL.md) | Review jehlp.net UI changes in the browser for responsive layout, keyboard use, color modes, and regressions across shared-theme consumers. |
| [`jehlp-pages-release`](skills/jehlp-pages-release/SKILL.md) | Prepare a reviewed jehlp.net GitHub Pages update across the theme and site repositories while preserving routing and generated assets. |
| [`jehlp-change-record`](skills/jehlp-change-record/SKILL.md) | Record reusable jehlp.net UI decisions, validation evidence, and model-to-model handoffs in site-theme without duplicating unrelated project documentation. |

## Install on the desktop

From the `site-theme` checkout:

```sh
python3 tools/install_skills.py
python3 tools/install_skills.py --apply
```

The first command is a dry run. The second links the maintained directories
into `~/.agents/skills`; existing conflicting names are reported before any write.
An already-correct link is left alone. Use `--destination PATH` for an explicit
alternative. Start a fresh Codex session and confirm the skills appear; you can
invoke a skill by its `$jehlp-…` name. Moving the checkout requires new links.
Do not copy a second independent skill set into sibling repositories.

Local user skills are discovered at `~/.agents/skills`; repo skills can live under
`.agents/skills` within the repository. This package uses user-level links so the
same maintained skills are available across sibling repos. See the official
[skill discovery documentation](https://learn.chatgpt.com/docs/build-skills).

## Scope

Small `AGENTS.md` files in the changed frontend repos point here. Existing bot and
research-harness instructions take precedence in those repos and are untouched.
Use one or two relevant skills for ordinary work; there is no requirement to load
all skills. Installation does not grant permission to publish or run the game bot.
