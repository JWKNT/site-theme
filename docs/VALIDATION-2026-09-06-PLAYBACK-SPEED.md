# Playback speed and header cleanup · 2026-09-06

## Scope and ownership

- Baba: generator + generated HTML, local speed stylesheet rules, new independent
  `assets/playback-speed.js` and six regression tests. The recording note and its
  `aria-describedby` reference are removed; one native video and all 40 links remain.
- NGU Dashboard: one header link removed; regression protects the retained footer
  source link and theme toggle. The bot repository's authored `docs/index.html`
  mirror receives the same one-line removal. No bot logic, build or runtime action.
- Repository-wide source audit found no other matching GitHub Source header links.
  BL2's local Sources navigation and footer provenance, reader downloads, and
  document links are unchanged. The homepage has no matching control.
- A concurrent recording task owns pause-trim media/data/README edits in Baba.
  Coordinated release ordering keeps its data commit separate from these UI edits.
  Extensive unrelated bot changes and theme `.DS_Store` files remain unstaged.

## Checks

- Baba: 23 Node tests pass (17 existing + six speed tests); deterministic build
  and whitespace checks pass. Speed tests cover all presets, no play/pause/seek,
  source-load default, native rate changes, errors, invalid input and hidden fallback.
- Shared theme: all 22 tests pass; existing segmented CSS is reused unchanged.
- NGU Dashboard: 8 Node tests pass. Bot mirror diff is exactly the header-line
  removal; commentary audit passes. An optional bot markup suite remains 3/4:
  its stale “What the bot is doing” assertion also fails against committed HEAD.
  Full bot build/mechanics/injection are not part of this HTML-only release.
- Local browser: actual 4× playback advances; keyboard Enter changes to 1.25×
  while playback continues. Switching clips keeps the chosen rate and pauses as
  before. Every preset sets the matching actual rate and pressed state without
  moving the paused playhead. Desktop/narrow light and dark appearances were inspected. At 390px,
  no document overflow; 200% text yields 28px speed labels with no clipping.
- Fresh no-JS reload hides the speed group while keeping one native player and
  all 40 MP4 links. Print hides the controls on white. Temporary text, script,
  media and viewport overrides restored; no browser script errors observed.
- Local dashboard header has no GitHub link and retains its theme toggle; footer
  source remains. Its telemetry behavior was not changed or re-audited.

## Release

- NGU Dashboard: `8e5b2c5`, Pages run `34038252875`; public HTTP 200 confirms the
  removed header source link and retained theme control. Local mirror commit
  `d2052ff` pushed to `JWKNT/ngu-idle-autopilot`; it is not a Pages deployment.
- Baba: `8fe1d30`, Pages run `34038406424`, succeeded. Public HTML, local CSS,
  playback-speed script and recording metadata all returned HTTP 200 and matched
  the tested local bytes; NGU Dashboard HTML also matched. Live browser confirmed
  the six presets, absent header Source/note, and 4× retained when selecting the
  second clip without autoplay. The preceding media-only Pages run was superseded
  by this deployment, which includes both commits.
- Rollback bases: Dashboard `25ab89a`, mirror `8996055`, theme `b3a8455`.
  Baba UI follows the separate pause-trim data commit `3ae0134` (not part of this
  task). Revert the UI commit only to preserve those recording updates.
