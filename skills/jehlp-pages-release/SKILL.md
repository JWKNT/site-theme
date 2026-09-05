---
name: jehlp-pages-release
description: "Prepare a reviewed jehlp.net GitHub Pages update across the theme and site repositories while preserving routing and generated assets."
---

# jehlp-pages-release

Read site-theme/docs/REPOSITORIES.md, the current repo's remote, branch, git status, Pages workflow/settings, CNAME if present, and generator scripts. Confirm the actual destination: site maps to jehlp/JWsite, and ngu-idle-bot maps to JWKNT/ngu-idle-autopilot in the supplied snapshot. Folder names do not prove hosted paths.

Preserve existing user work. Use an explicit file list per repo; never git add -A across the desktop bin directory. Build from authored sources, include tracked generated outputs, and review git diff --check. Do not commit local credentials, runtime game state, preview URL rewrites or stale _site output. Theme skills are maintained in site-theme and versioned with its source.

Before a shared v2 release, review available consumers outside the archive, including reader surfaces, and confirm local candidates passed relevant QA. Consumer code using new CSS tokens should keep fallback values so release order does not blank the UI. Identify the theme commit, affected consumer commits and rollback commits; rebuild embedded exports where needed.

Prepare a concrete release plan and commits. Push or deploy only when included in the user's current authorization; a local preparation request does not authorize publication. After an authorized deploy, verify the actual public routes, stylesheet/script asset responses, canonical metadata and a representative interaction. If routing ownership is unclear, report the precise unresolved setting rather than guessing or rewriting remotes.
