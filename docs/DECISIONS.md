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
