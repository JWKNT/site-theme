# Utility and homepage release — 2026-10-01

## Scope

Permanent homepage categories; matched Home/theme/search controls; compass Home
mark. Shared source is site-theme/v2; Readers retains its independent vendored
foundation and receives only the utility section/icons. Solver export embeds all
referenced masks. MTL excludes Home from its local navigation hover override.
NDB Idle is unchanged. Destination names/routes and search corpus are unchanged.

## Verification before release

- site-theme: 36 Node tests pass
- homepage: 35 Node tests pass; node build.mjs deterministic; all 14 destinations
  remain in four static sections; no category details/summary/open/fold remnants
- Readers: 21 Python + 6 Node tests pass; all 912 HTML diffs are cache-query-only
- MTL: build/check + 5 tests pass
- git diff --check passes in reviewed repositories
- Local headless Chromium could not start because the execution environment
  disallows its socket; cloud browser rejects localhost/file previews. No local
  rendered checks are claimed. Public baseline reviewed in the cloud browser.
- Live browser and exact-commit deployment verification follow publication.

## Rollback bases

- site-theme: a726c22efab5d321305ad60f0fc032eee4c765a0
- homepage: bb15f93205ace9e75f9606611857ea71f29abada

