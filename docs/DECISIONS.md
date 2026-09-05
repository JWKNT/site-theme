# Design decisions

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
