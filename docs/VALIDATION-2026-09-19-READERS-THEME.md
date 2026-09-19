# Readers family refinement — 2026-09-19

## Scope

Readers is the aesthetic reference and remains unchanged. The shared v2 theme
and 14 consumer repositories now use its traditional Georgia/Palatino vocabulary.
V1, theme controller behavior, datasets, prose, puzzle engines, and game rules
remain unchanged. Media repositories have no independent UI. The inactive private
Jekyll checkout and the dirty NGU bot checkout were not edited.

Shared changes: Georgia body/UI, bold Palatino headings, ink-led links, explicit
`--ui` role with consumer fallbacks, shared reader/control typography, updated
philosophy, design system, specimen, and site-design skill.

Local refinements: quiet neutral puzzle tags, stronger headings, more generous
guide prose, traditional solver controls and rebuilt standalone HTML, additional
space for Mystery Consensus axis labels, v2 migration and larger labels in Links,
and paper/type/frame changes in NDB's existing final CSS layer. NDB retains its
light-only bundled presentation, game art, state colors, save behavior and CSP.
Box Logic source provenance moves to the footer. Tiny plotted labels and numeric
grids keep their specialist fonts.

## Validation

- Shared foundation: 22 theme/component/identity/contrast tests. Theme JS and v1 unchanged.
- Existing suites: homepage, MTL Guide, Mystery Consensus, NGU dashboard, Profile,
  Puzzles, Baba, Black Sheep Town, Albatross (Node plus Python), Links, Box Logic.
- NDB production TypeScript/Vite build and all 368 tests across 28 files.
- Rebuilt homepage, guide documents, puzzle archive, video catalogue, Links data,
  solver offline HTML and both Vite apps. Rebuilds preserve authored data.
- Solver focused UI/source tests passed; mathematical engines were not changed.
- Browser reviewed all 16 surfaces, including the unchanged Readers reference,
  on a local preview that rewrites shared CDN assets to the candidate checkout.
  390px mobile checks found no page-wide horizontal overflow; puzzle boards retain
  their bounded scroll area. Representative 1440px light/dark review covered dense
  tables, charts, guides, solver, homepage and Box Logic. NDB was checked at both
  widths in its existing light-only mode.
- Mystery search returned one Obra Dinn record; detail dialog opened and Escape
  closed it; keyboard opened/dismissed the enhanced Medium select.
- NDB Start opened the combat/deployment view on an isolated local origin.
- Doubled root text size on Mystery retained a usable wrapping toolbar and table.
  Reduced-motion shared gallery used automatic scrolling; guide content remained
  readable with JavaScript disabled; print emulation used white paper/black text.
- NGU correctly showed offline state because no telemetry bridge was running.
  Local video preview could not load media; the public player subsequently reached
  readyState 4 with its original media URL and no error.
- `git diff --check` passed in every edited repository.

## Rollback bases

- `site-theme`: `70d4e4d3c755c35f32c60ff401d1246f541a6953`
- `JWKNT.github.io`: `a728d5dfc52d4c02d06196880ee56ae73802a218`
- `logical-solver`: `39d2013866a9adc9a43fda6b1f74518dc8fa1ebf`
- `mtl-guide`: `c0ed91bb4d3a5da890abffa013978e47dfc7e257`
- `mystery-report`: `7d5cda0ce642736197afa7ca8cb94a2201b1ba7a`
- `ngu-idle-dashboard`: `8e5b2c5da5ffd76938bb3d19c16b7bfd15d099cc`
- `profile`: `287ec433ac8db5d6d34015a6554f6f527e765027`
- `bl2`: `d25ff0fdd850db0dbd041ea3d49514f7be729890`
- `puzzles`: `e8fe0b707a918166a52bd16932a52d609b360f7b`
- `baba-is-you`: `817b322af5abb234bd5c95856190164b3f6cd925`
- `black-sheep-town`: `2f0916bd2afdd57c757e0c6f479abd369f36d54b`
- `albatross-koukairoku`: `9bbc9b9bc04a100db4fe2ce5271a9405cc132cf9`
- `box-puzzles`: `0ea891452d0d1ab91a1cac2a31320532d5b5a9f0`
- `links`: `80c4f6704b28eb2d01bea57c44da43dcfb3f08e0`
- `ndb-idle`: `28786f3eeb1986d4e6fd87db086d7c9f9c966322`
- `readers`: `929317a28d8aaba6755a36c766964cf0a4ead4d1`

## Release evidence

Shared foundation release `938ea5d` deployed successfully. Every consumer push
completed; public stylesheet bytes matched the edited sources. Both Vite Pages
workflows passed (including the existing Lean verification in Box Logic). NDB
uses a different production base path; verify its Pages-mode build rather than
comparing it to the relative-path desktop build. Public solver computed styles
confirm Georgia body text and bold Palatino headings.

Consumer release commits:

- `JWKNT.github.io`: `7c141abda39afd28391a0ae698fa64e62880a6c6`
- `logical-solver`: `f44c1e81883a1e6cd82518b67ccc0e0c1b8e2c25`
- `mtl-guide`: `1c94de7176275f2ea5f04dbb35caca07d0fe1957`
- `mystery-report`: `d66d89cd0a08521abec3a5f0ad1afb09cbe432eb`
- `ngu-idle-dashboard`: `0eebfaf32cd2a79a58c0f94378818cfda4c2f869`
- `profile`: `5eef79bad92e3f60fff6976e60f59f0b10171b6d`
- `bl2`: `85cb412c8781fbfb9dae29498fd63088d6106a50`
- `puzzles`: `0fa993ed4da7a35c13b22f8c0f9f5560e38bbf7b`
- `baba-is-you`: `be1768c50fe15fdb50e97cc9eb469438adbb3c84`
- `black-sheep-town`: `67537a1cdda4dd22ca52d8c4bb5aed8848049115`
- `albatross-koukairoku`: `8247afed5cebb194f01d09b7c55492815c80c158`
- `box-puzzles`: `04b7d50e710631fccf6566ddbc79a057fdd5da68`
- `links`: `cac903eb68b096e2e6ef3b283ffdd42244072da8`
- `ndb-idle`: `305917dcd2b42cc0cb66b1d297eae793ec622090`
