# Sol Extra High: finish the jehlp.net UI pass

> Completed locally on 2026-09-05. See `VALIDATION.md` for observed checks and
> `REPOSITORIES.md` for the resolved Pages map. The ordered instructions below are
> retained as the review record.

## Start here

You are continuing Astra's 2026-09-05 preparation from ChatGPT Work. The user's
goal is a better general UI across these desktop `/bin` projects, with durable
design knowledge and reusable Codex skills in `site-theme`. Finish locally from
this concrete candidate; preserve the existing content-led visual language.

Use **GPT-5.6 Sol with Extra high reasoning**, as requested. Current official
[model guidance](https://learn.chatgpt.com/docs/models) names `gpt-5.6-sol`; the
[configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference)
names `model_reasoning_effort`. A supported CLI launch is:

```sh
codex -m gpt-5.6-sol -c 'model_reasoning_effort="xhigh"'
```

Use the installed client's model picker if needed. Availability depends on that
client/account; do not substitute a different model silently or change the user's
global configuration. The task does not need an API key or ChatGPT Work connectors.
The user's requested handoff target is preserved regardless of Astra availability.

## Read, then act

1. Read the bundle's `START-HERE.md` and import only the prepared edits with its
   dry-run-first importer. If a file conflicts, reconcile that file against the
   supplied original SHA/diff; do not force-copy the entire tree.
2. Read this repo's `AGENTS.md`, `PHILOSOPHY.md`, `docs/DESIGN-SYSTEM.md`,
   `docs/REPOSITORIES.md`, `docs/CHANGELOG.md` and `docs/VALIDATION.md`.
3. Install the six skills using `python3 tools/install_skills.py --apply` from
   site-theme, or read the appropriate `skills/<name>/SKILL.md` directly. Use
   `$jehlp-shared-theme` and `$jehlp-site-qa` for this continuation.
4. Inspect actual branch/remote/status in each repo. The snapshot's unfinished
   bot work and Jekyll essay moves are user work. Preserve them. Do not normalize
   directory names, restore deleted content, run the bot, or alter research data.

## What is already concrete

Astra modified shared v2 defaults and theme synchronization; repaired the Jekyll
background alias; improved regular labels in five site interfaces; replaced the
MTL mobile drawer with an in-flow disclosure; fixed the offline solver asset build;
and rebuilt the solver export and 14 generated guide pages. Six portable skills,
a catalog, small per-repo instructions, decisions and validation records exist.

See CHANGELOG for exact scope. Underlying datasets and solver/bot/scoring logic
were retained. The bundle manifest enumerates every new/changed file against the
uploaded archive, not against potentially dirty Git HEADs. No remote was changed
and no live site was deployed.

## Finish in this order

### 1. Review actual rendered candidates

The outstanding browser work is part of this continuation: perform browser,
visual, keyboard and interaction testing locally. Use docs/QA-MATRIX.md. Make
requests for the production theme URL load the candidate local theme; otherwise
a local consumer still uses old deployed assets. A temporary response rewrite,
request interception, or throwaway preview copy is suitable. Preserve production
URLs in committed source. Save representative light/dark 390px/1440px evidence.

Start with site-theme and MTL (sparse/reference), then mystery-report and the
dashboard (dense), profile (charts), logical-solver (board geometry), then Jekyll.
Review 200% text enlargement, coarse-pointer sizing, focus, and print while dark
mode is selected. Do not treat the included VM tests as browser proof.

### 2. Finish the bounded readability pass

Review the changed rules before broadening them. Remaining small text is most
concentrated in dashboard tables, profile chart annotations/report detail, solver
candidate marks and v2/reader.css. Raise regular information to the shared scale.
For dense visual marks, preserve geometry and supply a readable way to inspect
essential information. Do not blanket-replace every `px` size. Remove duplicate
shared CSS only when an actual consumer comparison proves it unnecessary.

Check sticky-index target clearance with wrapped/enlarged labels, table overflow,
MTL contents focus at breakpoint changes, dialog focus return, and offline solver
icons. Fix demonstrated regressions in the owning source, then rebuild outputs.

### 3. Resolve the source and routing gaps

Build `site` with its own Gemfile/lockfile (`bundle exec jekyll build`) on the
user's local Ruby environment. Do not recreate removed custom build helpers or
publish an archived `_site` directory. Inspect the actual Pages source/workflow.
Confirm why this checkout uses `jehlp/JWsite` and an empty baseurl while other sites
link to a Projects homepage at the root. Preserve the live arrangement once known.

Inventory available theme consumers outside this archive before a shared v2
release. Reader/favicons suggest additional projects, but do not prove their
current source or live configuration. Ask for missing source only if it blocks a
specific necessary change; otherwise record the unverified consumer and limit
release scope accordingly. Do not invent or clone guessed repository names.

### 4. Complete checks and a clean review boundary

| Repo | Commands / checks |
| --- | --- |
| site-theme | `node --test tests/*.test.mjs` |
| mtl-guide | `node build.js`; `node --test tests/*.test.mjs`; `node --check assets/app.js`; `python3 tools/validate_batch.py examples/sample-batch.tsv` |
| logical-solver | `node build.js`; existing targeted engine/app tests; offline browser smoke test for all four puzzle modes |
| mystery-report | `node --test` |
| profile | `node --test` |
| ngu-idle-dashboard | `node --test`; read-only fixtures/offline/live-state UI checks as available |
| site | `bundle exec jekyll build`; generated essay/archive/puzzle smoke checks |

Run `git diff --check` in every changed repo. Update VALIDATION with actual outcomes
and CHANGELOG with the completed scope. Make deliberate per-repo commits containing
only this UI work and its generated output; do not sweep unrelated dirty files into
them. Site-theme's skill/design files must be committed with the owning source.
The included Git bundle records Astra's site-theme commit; importing the file
changes is enough. Do not replace an existing `.git` directory or blindly merge
that bundle over a diverged local branch.

### 5. Hand over a concrete release plan

The immediate deliverable is locally finished, reviewable work. Prepare theme and
consumer commit IDs, public path mapping, verification evidence and rollback order.
Publishing is a separate action unless the user has authorized it in your session.
A versioned directory is still a shared mutable URL; check its consumers first.

## Completion criteria

- Shared visual identity survives, and ordinary text/controls are readable.
- No core interaction, scientific data, ranking, puzzle behavior or bot state is lost.
- All available build gates pass; unavailable gates are precisely documented.
- Browser evidence covers sparse/dense surfaces, mobile, both modes and keyboard.
- Codex can discover the six skills from their maintained site-theme source.
- Every intended edit is recorded, reviewable per repo, and separate from user work.
- Actual Pages ownership/path questions are resolved or explicitly held from release.

Do the work rather than merely writing a new plan. Use judgment on routine fixes.
Ask the user only for a fact, resource or authorization that truly blocks the next
necessary step; do not repeatedly ask whether to continue.
