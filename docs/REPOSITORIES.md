# Desktop repository and Pages inventory

The handoff snapshot and the matching checkouts under `/Users/jw/Desktop/bin` were
inspected 2026-09-05. GitHub Pages settings were then checked while signed in, and
the public routes below were confirmed before release.

| Local directory | Actual source remote | Stack | Intended source change | Public path |
| --- | --- | --- | --- | --- |
| `site-theme` | `https://github.com/JWKNT/site-theme.git` | Shared static foundation | Theme source, docs, skills, specimens | `https://jehlp.net/site-theme/` · Actions |
| `logical-solver` | `https://github.com/JWKNT/logical-solver.git` | Static HTML + Node single-file build | UI, exporter, generated dist | `https://jehlp.net/logical-solver/` · `main` root |
| `mtl-guide` | `https://github.com/JWKNT/mtl-guide.git` | Static Markdown-to-HTML generator | UI, contents behavior, generated documents | `https://jehlp.net/mtl-guide/` · `main` root |
| `mystery-report` | `https://github.com/JWKNT/mystery-report.git` | Static data explorer | Control typography; dialog label | `https://jehlp.net/mystery-report/` · `main` root |
| `ngu-idle-dashboard` | `https://github.com/JWKNT/ngu-idle-dashboard.git` | Static telemetry client | Readability only; read-only API contract intact | `https://jehlp.net/ngu-idle-dashboard/` · `main` root |
| `profile` | `https://github.com/JWKNT/profile.git` | Static genetic-data explorer | Control and navigation typography only | `https://jehlp.net/profile/` · Actions |
| `black-sheep-town` | `git@github.com:JWKNT/black-sheep-town.git` | Shared-reader consumer | Reader regression expectations | `https://jehlp.net/black-sheep-town/` · `main` root |
| `albatross-koukairoku` | `git@github.com:JWKNT/albatross-koukairoku.git` | Shared-reader consumer | Narrow control-grid correction | `https://jehlp.net/albatross-koukairoku/` · `main` root |
| `JWKNT.github.io` | `https://github.com/JWKNT/JWKNT.github.io.git` | Projects homepage | No source change; compatibility review | `https://jehlp.net/` · `main` root + `CNAME` |
| `bl2` | `https://github.com/JWKNT/bl2.git` | Static data explorer | No source change; compatibility review | `https://jehlp.net/bl2/` · `main` root |
| `box-puzzles` | `https://github.com/JWKNT/box-puzzles.git` | Lean + generated Pages build | No source change; compatibility review | `https://jehlp.net/box-puzzles/` · Actions |
| `puzzles` | `https://github.com/JWKNT/puzzles.git` | Static JSON-to-HTML generator; 126 puzzles | PNG identity/divider, v2 catalogue controls; preserve source content | `https://jehlp.net/puzzles/` · `main` root |
| `site` | `git@github.com:jehlp/JWsite.git` (redirects to private `JWKNT/JWsite`) | Jekyll; Ruby/Bundler | Background alias and text/navigation CSS | Pages disabled; source-only checkout |
| `ngu-idle-bot` | `https://github.com/JWKNT/ngu-idle-autopilot.git` | Unity/C# autopilot + native/local monitor | No edits; existing user changes preserved | `not assumed a Pages site` |
| `puzzle-cot` | `https://github.com/JWKNT/puzzle-cot.git` | Python research harness | No edits; existing instructions preserved | `not assumed a Pages site` |

## Base commits and checks

This section preserves the first-pass starting points. The second component pass,
its seven consumer commits, and immediate rollback bases are recorded in
`VALIDATION-2026-09-05-COMPONENTS.md`. That pass additionally edits the homepage
and BL2, leaves both reader repositories unchanged while refining shared reader
CSS, and does not modify the source-only Jekyll checkout.

- `site-theme`: `e9a85b3c177050af966e88ec1d0afd85e6b58e3f`; `node --test tests/*.test.mjs`.
- `logical-solver`: `27b6e33b8f88d52ee8ff2a3c2bc42b45639baf6c`; `node build.js`; existing Node tests.
- `mtl-guide`: `68db8574e56229f0023985ece85fededf5155d6c`; `node build.js`; syntax + TSV validation.
- `mystery-report`: `7174a600db070c82e3696909eec33e9c6cba9cf7`; `node --test`.
- `ngu-idle-dashboard`: `5d508447949a091b95eee0f5afffd092ce5d95c4`; `node --test`.
- `profile`: `d07c6502ff78a55a32002ec4f43fdbc9fdd9a349`; `node --test`.
- `site`: `5c5a052b3a4ad5bf624d23836169a417a093f6ec`; `bundle exec jekyll build`.
- `black-sheep-town`: `504ffeff569d7aee0d2c4fc2544240bbe4105624`; `npm test`.
- `albatross-koukairoku`: `a31afc1ff99742f6df30b387e427317b6c6ee1db`; `npm test`.
- Compatibility-only consumers: `JWKNT.github.io` at `c25ef859`, `bl2` at
  `fb23b2e`, and `box-puzzles` at `070edbb`; their checkouts stayed unchanged.
- `ngu-idle-bot`: `204f38ed6f724aad33e77f0ac7adc2f1cf469433`; Read AGENTS before any change.
- `puzzle-cot`: `b7283f35611571875107cdc1bdb5735c40b2c7db`; `make ci` after changes; read AGENTS.

## Existing work and resolved routing

`ngu-idle-bot` already contained modified strategy, source, and tests plus two
untracked FightBossGoldReward files. Do not stage these as UI work, build/inject the
bot, or touch saves/runtime data as part of this pass. Its folder name differs
from its GitHub repository name (`ngu-idle-autopilot`).

`site`'s old remote redirects to private `JWKNT/JWsite`. GitHub reports Pages
disabled for that repository, so its empty `baseurl` is not evidence that it owns
the public root. The root is `JWKNT/JWKNT.github.io`, deployed from `main` with the
`jehlp.net` CNAME. Public project repositories inherit routes under that custom
domain. The Jekyll checkout remains source-only in this release; its successful
local build is not copied into another repository.

The Jekyll checkout already had essay moves, removed build-helper files, an
untracked essay and `_incomplete` material. Those changes remain unstaged and are
not restored or overwritten by this UI release.

The specifics pass located the actual public puzzle archive in `JWKNT/puzzles`
and cloned it into `bin/puzzles`. It is not the private Jekyll collection: its
126 generated pages and 177 diagrams come from `data/puzzles.json`. The public
archive is released through its existing Pages main/root configuration; existing
Sites metadata is preserved, not treated as authority to create another public
destination. Changes to the older 100-puzzle Jekyll template remain source-only.

All available local v2 consumers were reviewed: the homepage, both script readers,
BL2, Box Logic, the seven handoff surfaces, and the source-only Jekyll build.
`eastern-star` has no separate local source checkout; its archive surface does not
load the shared theme and was not treated as a release target.
