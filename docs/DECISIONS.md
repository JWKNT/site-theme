# Design decisions

## 2026-09-06 · 019 · World browsing without auxiliary controls

**Evidence:** The user preferred removing Baba's search and large PiP button,
and suggested a distinctive divider in the recovered space.
**Decision:** Keep world disclosures as the catalogue navigation and leave PiP
to native browser controls where provided. Remove obsolete search/PiP code and
tests; retain playback speeds, deep links and full print output. Add one small,
transparent three-rule-tile ornament above the world list, not another masthead
mark or a second stacked border. Keep its SVG geometry local and theme-aware.
**Tradeoff:** Direct search is no longer a page feature; browser Find remains
browser-dependent for closed groups. This supersedes the search portion of 018
and dedicated-PiP portion of earlier recording decisions. Do not reintroduce
either control without an explicit user request.

## 2026-09-06 · 018 · World-based recording navigation

**Evidence:** Baba's growing flat list is difficult to navigate and is expected
to reach several hundred recordings.
**Decision:** Use native collapsible world groups with recording counts and short
in-world labels. Add cross-world search, preserve disclosure state when clearing
it, and reveal the selected clip's group for deep links and history. Keep one
player and unchanged IDs/media URLs; no pagination or nested scrolling.
**Tradeoff:** Several worlds can remain open by choice. Native groups work without
scripts, while search is an enhancement. Keep grouping and filtering local with
documented contracts; reconsider shared extraction only for a second consumer.

## 2026-09-06 · 017 · Curated directory and playback-only controls

**Evidence:** The user requested removing Other, shortening the homepage's Baba
label, and removing download controls and the save-slot label from its catalogue.
**Decision:** The homepage lists authored destinations only; remove automatic
repository discovery rather than leaving a hidden fallback category. Use
“Baba Is You” as its destination label. Baba retains level selection, speed and
PiP controls, without dedicated download links or save-slot metadata on the page.
**Tradeoff:** New destinations require an explicit directory entry. Direct level
links remain the no-script playback fallback; `controlslist="nodownload"` is a
browser hint, not access protection. This supersedes the explicit recording-label
and download-control preferences in decisions 015 and 013. Shared runtime is unchanged.

## 2026-09-06 · 016 · Header scope and recording speed

**Evidence:** The user requested removal of GitHub Source header links and
Baba's recording note, plus speed controls up to 4.00×.
**Decision:** Reserve mastheads for identity, project-local navigation and
essential controls. Keep source provenance outside headers. Add six compact,
native speed presets using the existing segmented-control appearance, with the
actual video rate as state authority and a default rate retained across clips.
**Tradeoff:** Presets provide quick access rather than every possible native
rate. Unsupported rates report a failure; native controls remain the no-script
fallback. Keep the small speed controller local until reuse justifies promotion.

## 2026-09-05 · 015 · Catalogue state and compact directory grouping

**Evidence:** The new recording catalogue reset its clip when the skip fragment
changed and added duplicate history entries on re-selection. Its latest date was
hard-coded. A fifth homepage category created an otherwise unnecessary third row
while games and puzzles remained under unrelated labels.
**Decision:** Keep media state separate from unrelated URL fragments; preserve
playback on re-selection and derive metadata from validated records. Group NDB
Idle, Puzzles and Baba recordings under Games, move Links to Reading, and give
Games its own decorative chevrons. Name recordings explicitly so the destination
does not promise a playable game. Preserve every destination and native fallback.
**Tradeoff:** The current four groups are editorial organization, not a renderer
limit. Future categories may reuse marks and start closed. Keep the one-consumer
player local, with its reuse contract documented rather than prematurely adding
it to the shared runtime. This refines decision 013; decision 014 supplies Baba's
unique masthead mark.

## 2026-09-05 · 014 · Unique project marks

Each independent project has its own masthead illustration. Related projects may share the illustration style, but not the same asset. Subpages within one project retain its identity. Baba Is You now uses a generated transparent Baba character mark instead of the generic puzzles mark.

## 2026-09-05 · 013 · A level recording catalogue

**Evidence:** Baba Is You needs a growing collection of cropped level videos,
including playback outside the page, rather than a grid of simultaneous players.
**Decision:** Use one native video player beside a compact ordered level list.
Progressively enhance direct MP4 links into selection and shareable level hashes;
keep downloads and no-JavaScript access. Detect picture-in-picture support and
report unavailable requests honestly. Reuse the existing puzzles PNG identity,
v2 paper/charcoal palette and type roles without changing shared runtime assets.
**Tradeoff:** Selecting a clip pauses playback instead of autoplaying. At narrow
widths the list flows below the player, and durations move below titles. Media
stays in the project repository while small; capacity growth requires a separate
storage decision, not an assumed unlimited Pages video service.

## 2026-09-05 · 012 · A quiet sheet for the main puzzle

**Evidence:** The user found individual puzzles visually disconnected and the
repeated masthead logo made their divider feel like another header. Separate
solver-link paragraphs left an awkward gap before an otherwise floating grid.
**Decision:** Give the transition a dedicated geometric PNG: a small hollow
lozenge and two points. Enclose the complete main puzzle unit in one thin,
square-edged sheet, with the divider forming its top edge. Group only verified
leading solver-only content into a compact native action row. Keep complete
examples outside, paired grids and references inside, and post-grid links in
source order. Preserve original HTML byte-for-byte after stripping inserted
wrappers and reversing the existing image-path rewrite.
**Tradeoff:** A modest inset slightly reduces diagram width, so it shrinks on
narrow screens. This is a local archive layout, not a new universal card
component. The ornament is shared; the content-aware wrapper stays in the puzzle
generator. Existing design and QA skills cover the pattern without a new skill.

## 2026-09-05 · 011 · A compact typographic atlas at the root

**Evidence:** The user requested a memorable homepage using symbolic type art,
without a visible title, filler copy, or an extreme vertical scroll, and with room
for many more categories and subpages. The reference's sparse ink forms, tiny
accent, and fine connectors informed the composition, not its long-scroll format.
**Decision:** Give the root four composed punctuation studies, restrained rust
accents, serif destination links, and native category disclosures. Keep all twelve
known links in generated static HTML, driven by an extensible JSON directory;
future categories can start closed. Optional search opens matching groups and
restores their previous state when cleared. Bounded, paginated Pages discovery
supplements the curated links under a closed Other group and fails quietly.
Keep this art local to the homepage and preserve shared theme runtime and every
subpage. Decorative punctuation is not a new masthead identity convention.
**Tradeoff:** Categories add a small amount of relevant text; names still supply
orientation that abstract symbols alone cannot. Browser fonts can vary the art's
exact contours. Reconsider the directory layout when real category growth outgrows
disclosure/search, not by preemptively adding paging, internal scrolling, or a
navigation framework. The existing design/component skills cover this pattern;
its implementation contract lives in the homepage README.

## 2026-09-05 · 010 · Separate the main puzzle unit, not the first image

**Evidence:** A first-diagram match can place the ornament before a worked example;
moving it only to a main grid can instead strand that grid's lead-in or solve-link
paragraph above the divider. Preserving image counts and order does not prove
that the visual boundary describes the material correctly.
**Decision:** Place one ornament after complete rules/examples and before the
main puzzle unit as a whole: lead-in, solve links, grids, and reference diagrams.
The public archive's resolver uses a uniquely named main SudokuPad link, with
Penpa+ fallback, and keeps its containing paragraph. Two reviewed exceptions use
the Loop main-puzzle lead-in and the first of Roller's paired main grids. Keep
these mappings explicit and preserve every source word, link, and diagram.
**Tradeoff:** Semantic boundary selection requires more source knowledge than a
first-image selector. New or ambiguous structures need review or an explicit
boundary instead of a guessed match. Reconsider the resolver when the content
format changes, not merely because one image happens to be first. This clarifies
the puzzle-transition portion of decision 009 without changing its other choices.

## 2026-09-05 · 009 · Useful density and consistent selection

**Evidence:** The user identified mismatched reader controls, unexplained section
numbers, empty Profile space, redundant navigation, numbered sort arrows, and
tables requiring pagination plus two-axis scrolling. Unicode mastheads varied
across platforms; native selects differed from the reader's chapter control.
**Decision:** Use small transparent PNG identities, remove decorative numbering,
and let useful summaries or navigation occupy margins. Share an opt-in dropdown
whose native select remains the value/event authority and no-script fallback.
Paginated collections flow in the document: preserve comparison columns where
they fit and use explicit, complete details at narrower widths. Keep visible sort
direction simple, with advanced order stated accessibly. Page changes focus and
scroll to the new results. A restrained image-centered rule may separate puzzle
instructions from diagrams without reordering examples or substantive content.
**Tradeoff:** Compact table summaries require opening details for some fields;
CSV and advanced sorting must retain all columns. Native enhancement needs more
keyboard/focus tests than a CSS-only select. These are opt-in patterns, not a
requirement to turn non-paginated matrices into cards. Reconsider when a concrete
comparison task needs a different presentation, not to achieve visual uniformity.

## 2026-09-05 · 008 · Readable values and connected table headings

**Evidence:** Follow-up review found 12px main ranking values, synthetic small-caps
controls, collapsed-border sticky cells, and a 12px top gap inside Profile's marker
table viewport. Initial screenshots did not expose all scrolled-state defects.
**Decision:** Treat spreadsheet values as regular 14px task text, prose as 16px,
and use normal-case interface labels. Add opt-in `.ui-table`: one native table,
one opaque sticky `thead`, separate zero-spacing borders, static row headings.
Adopt the contract across comparison pages and check actual column bounds while
scrolled. Retain 12px only for secondary provenance, timestamps, and identifiers;
puzzle marks and chart geometry retain their local scale.
**Tradeoff:** Readable columns can require more local horizontal scrolling. That
is preferable to silently shrinking meaningful text. Native table structure keeps
headers and rows together without synchronized duplicate DOM or extra JavaScript.

## 2026-09-05 · 001 · Refine the existing v2 language

**Evidence:** The attached foundation and consumers already agree on serif reading,
quiet rules, compact square controls, and restrained blue. The largest observed
source-level problems are undersized labels and conflicting overrides.
**Decision:** Keep the visual identity and public v2 contract. Introduce semantic
size tokens and improve the controls that readers use repeatedly.
**Tradeoff:** Updating the shared v2 URL can affect consumers outside this archive.
The code is prepared, but browser review and a consumer inventory precede release.
Breaking renames or changes to the storage/event contract require a new version.

## 2026-09-05 · 002 · Keep mobile guide contents in the document

**Evidence:** MTL's old closed drawer was translated offscreen while its links
remained in the keyboard order; its open state locked scrolling without a modal
focus contract.
**Decision:** Use an in-flow contents disclosure on narrow screens. The native
`hidden` attribute removes closed links from navigation; contents remains visible
without JavaScript. Escape returns to the toggle, and choosing a heading moves
focus into that section. Desktop contents remains a sticky sidebar.
**Tradeoff:** Expanding contents takes vertical space, which is appropriate for
this finite reference hierarchy. Reconsider only if real navigation needs change.

## 2026-09-05 · 003 · Keep shared assets portable

**Evidence:** Theme masks were absolute production URLs even in the supposedly
self-contained solver export. The export also stripped only known cache versions.
**Decision:** Use relative masks in shared CSS; embed the masks and favicon during
the single-file build, strip version queries generically, and reject remaining
external script/style/mask dependencies. Split-source consumers keep shared URLs.
**Tradeoff:** The standalone export must be rebuilt after foundation changes.

## 2026-09-05 · 004 · Version the Codex practice with the design system

**Decision:** Maintain six focused skills under `site-theme/skills`, with an
explicit catalog and a symlink installer for local Codex discovery. Keep repo
instructions short and route to these maintained sources.
**Tradeoff:** User-level links point to the local checkout and must be recreated
if it moves. Do not install a second independent copy that will drift.

## 2026-09-05 · 005 · Share behaviors without prescribing page layouts

**Evidence:** Profile and NGU duplicated section-index controllers; Profile,
consensus, and BL2 duplicated modal shells; MTL and BL2 needed the same mobile
disclosure focus contract. Dense tables could overflow without a visible cue.
**Decision:** Add opt-in `v2/components.css` and `v2/components.js`, native markup
contracts, an idempotent `JehlpUI.enhance(root)`, and a working gallery. Keep filter
state, data interpretation, geometry, and network access in the consuming page.
Use a seventh focused skill to preserve these ownership boundaries for new pages.
**Tradeoff:** Consumers depend on new optional assets, so publish assets first.
The controllers have document lifetimes, suited to these static pages; add
disposal only when a real virtualized consumer needs it. Reconsider an abstraction
when consumers differ semantically, not merely because local styling differs.

## 2026-09-05 · 006 · Prefer native disclosure, dialog, and table semantics

**Evidence:** BL2's old translated drawer left offscreen controls in the keyboard
order. Generic dialog-target click handlers also dismissed clicks on padding.
MTL's block-scrolling tables and sticky first columns impaired narrow comparisons.
**Decision:** Use native `hidden` for in-flow mobile contents/filters, native modal
dialogs with `method="dialog"` close forms, and named overflow wrappers around
unmodified tables. Add a tab stop and directional cue only when needed. Keep
focus transfer explicit on activation and leave passive scrolling focus alone.
**Tradeoff:** Opening filters moves results down, and full tables still require
local horizontal scrolling. This preserves context and readable columns without
building a second modal system or changing the underlying data. Reconsider only
if real filter volume or comparison needs make this model unsuitable.

## 2026-09-05 · 007 · Related identities, independent pages

**Evidence:** The user requested more memorable but minimal pages, less redundant
copy, and no route back to the global homepage. Repeated Projects links occupied
every masthead without helping the page's own task.
**Decision:** Share a CSS-only identity header: one decorative subject mark, a
serif title, optional muted blue/plum/teal/ochre accents, and useful project-local
navigation. Remove global-home links from authored and generated surfaces. Let
margin labels, type hierarchy, open rows, and whitespace provide character while
preserving data colors, scientific caveats, privacy boundaries, and tool rules.
**Tradeoff:** Discovery from the homepage is intentionally one-way. Header tones
are not a new data or status vocabulary. Decoration must yield to text at narrow
widths; the mark's reserved width scales with its font so enlarged text cannot
collide with the title. Future pages should adopt this additive contract rather
than copying local masthead rules.
