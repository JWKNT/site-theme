# Design decisions

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
