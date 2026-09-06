# Baba catalogue and homepage audit · 2026-09-05

## Scope and preservation

Consumer changes are confined to `baba-is-you` and `JWKNT.github.io`. Shared theme
changes are documentation only. All five MP4s, posters, recording data, 13 homepage
destinations and Pages routing remain. The already-published unique Baba PNG is
preserved. No new skill or shared runtime is needed for one catalogue consumer.

## Observed validation

- Baba: 17 Node tests pass, covering deterministic generation/native links,
  identity/date/path validation and player selection/history/PiP/error behavior.
- Homepage: 17 Node tests pass, including native disclosure states, metadata,
  discovery failure handling and a 24-category/480-destination expansion fixture.
- Shared theme: all 22 tests pass; no shared runtime/asset changes.
- Local desktop light/dark review shows aligned player/list headings, a correctly
  styled theme control and compact four-group homepage. Narrow measurements at
  390px show no document overflow. Baba controls/durations are 14px, titles 16px.
  At 200% root text both sites remain within the viewport; Baba primary labels
  show no clipping. The narrow Baba screenshot compositor scaled its capture, so
  DOM geometry rather than apparent screenshot scale establishes narrow sizing.
- Actual level-02 playback advanced to completion. Selecting another level
  pauses playback; direct level-03 reload and skip-link activation retain the
  expected title/source. VM tests additionally exercise Back/Forward, repeat
  selection and native modified clicks.
- The embedded browser rejected PiP and displayed the intended honest message.
  No new successful native floating-window or Safari result is claimed here.
  A browser connection interruption was recovered before remaining checks.
- Homepage search finds Baba, announces empty results, clears with Escape, and
  native category summaries toggle by keyboard. Fresh no-JS reloads preserve
  all 13 directory links and all five direct MP4 links with one native player.
  Print emulation produces black-on-white output; temporary overrides restored.

## Release

Rollback bases: Baba `5a2a6e4`, homepage `a8687f9`, theme `566f19c`. Revert only
this audit's commits to preserve the earlier unique icon and recording release.
Pages settings verified: both consumers publish `main` at `/`; homepage retains
the `jehlp.net` CNAME and Baba has no project CNAME.

- Baba commit `9cc7545`, Pages run `34008939497`: succeeded.
- Homepage commit `8425741`, Pages run `34008939680`: succeeded.
- Public HTTPS HTML, local CSS/JS, catalogue/directory data and the preserved
  Baba PNG returned HTTP 200 and matched the tested local bytes. All five posters
  also matched; all five MP4 requests returned HTTP 206 for bytes 0–31.
- Live browser followed the homepage's Baba recordings link, selected level 04,
  confirmed synchronized title/source/download and paused initial selection,
  then played beyond 19 seconds with no media error. Playback was paused after
  the check. No console errors were observed in the final local review.
- GitHub's managed Pages build reports an upstream Node 20 action deprecation
  warning, but both builds and deployments succeeded; project routing/workflows
  were not changed to address that managed warning.
