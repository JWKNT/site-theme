# Design decisions

## 029 — Draw link arrows and share dropdown presentation (2026-10-03)

**Evidence:** The owner reported mobile emoji arrows and requested the homepage arrow and shared dropdown style throughout the included sites.

**Decision:** Draw decorative up-right arrows with `.ui-link-arrow` in the shared base stylesheet. Preserve the homepage geometry.
Use `data-ui-select` for ordinary single-choice menus, including homepage and Readers search controls.
Keep grouped chapter browsers and the native no-script fallback.

**Tradeoff:** Styled dropdowns need JavaScript. The underlying native select remains the value and form authority.
CSS arrows remain monochrome without JavaScript or a font. Reconsider only if navigation semantics require a different mark.

## 028 — ASD-STE100 for original technical text (2026-10-02)

**Evidence:** The owner requested ASD-STE100 for original website writing and future writing defaults.
The owner excluded fictional dialogue and item descriptions.

**Decision:** Follow [the writing policy](WRITING-STYLE.md) for original explanations, instructions, help, and interface text.
Preserve source and translated prose, literary passages, quotations, legal text, data, and exact mathematical meaning.
Use separate language and technical-meaning reviews for proof prose.

**Tradeoff:** Short sentences can require more paragraph boundaries. Preserve information and logical qualifications before reducing length.
A build or sentence counter does not establish full dictionary compliance.

## 027 — Abstract monochrome subject symbols (2026-10-02)

**Evidence:** The owner requested replacing colored site icons with abstract,
relevant black-and-white symbols like Home and the light/dark control.

**Decision:** Subject identities use one geometric ink and a related stroke weight.
Maintain SVG sources and derive both PNG mastheads and white-on-black favicons
from them. Preserve existing image dimensions, empty alternative text and public
asset URLs. Invert only mastheads for dark mode and reset them for print.

**Tradeoff:** Individual identity is carried by shape rather than accent color.
Game art, puzzle diagrams and meaningful data colors remain independent. This
supersedes the colored-masthead and one-subject-color favicon guidance.

## 026 — Permanent directory groups, equivalent utilities (2026-10-01)

**Evidence:** The owner requested non-collapsible homepage subsections and matching
height, spacing and opacity for Home, theme and search, with a new thematic Home mark.

**Decision:** Categories are semantic heading/section groups with permanently
visible links. Utilities share one control and icon scale, neutral ink and interaction
states; Home uses a restrained compass rose related to the homepage’s atlas studies.

**Tradeoff:** Larger directories remain longer rather than hiding destinations.
Search handles finding material. Decorative subject artwork stays separate from
functional controls. Reconsider only on a new navigation requirement from the owner.

## 025 — Series share a continuous reader (2026-09-30)

**Evidence:** The owner requested Hyperion and Remembrance of Earth’s Past grouped
like the Sun books: one reader for each series, with books in its contents.

**Decision:** A combined reader owns continuous progress, search and references,
while each volume retains its chapter and part hierarchy, original supplementary
material, thematic ornament and opening alphabet. Prefix migrated chapter and note
IDs by source book and preserve paragraph IDs. Old entry links forward to their
corresponding positions; original static chapter routes remain available.

**Tradeoff:** Combined indexes are larger. Keep chapters lazy-loaded and preserve
source readers as assembly inputs so grouping never requires rewriting their prose
or definitions. This series rule does not alter independent short-story pages.
Reconsider only if measured loading or navigation problems require another layout.

## 024 — A symbol-only theme dial (2026-09-30)

**Evidence:** The owner requested a site-wide refinement of the generic theme
button, then clarified that there must be no visible Light/Dark text.

**Decision:** Use a larger half-ink dial with a fine diagonal, no enclosing badge,
no visible label and a single hover rule. Keep the accessible action name/title,
pressed state, square keyboard focus and a 44px minimum hit target in every mode.
The mark is UI punctuation, not a new masthead or a new accent palette.

**Tradeoff:** The icon relies on its accessible name/title to describe the action.
Retain existing controller semantics, SVG URLs for self-contained exports and
versioned consumer references so cached pages receive the same revision.

## 023 — Individual works own reader navigation and references (2026-09-30)

**Evidence:** The owner requested individual short-story pages, one Fifth Head
reader, external-reference margins and distinct thematic dividers.

**Decision:** Preserve a work's boundaries even when its EPUB container is an
anthology or a file split. Use a quiet alphabetical link list for discovery,
independent search/glossaries per work, and optional supplied afterwords. Titles
may carry the same externally sourced notes as prose. Initials begin narration;
source epigraphs keep their separate typographic role. Match decorative dividers
to existing section boundaries and give an undivided story a small end ornament.

**Scope and tradeoff:** Readers-local markup, CSS and original SVG assets. Reuse
the approved historical alphabets; do not generalize reader ornament rules into
site-wide mastheads. Source-integrity checks accompany conversion; possible OCR
losses remain documented instead of being silently reconstructed. Reconsider the
library's two-column list only if observed browsing needs require filtering.

## 021 — NDB Idle is an explicit theme exception (2026-09-19)

**Evidence:** After reviewing the family sweep, the owner approved the other pages and asked to restore NDB Idle.

**Decision:** Preserve NDB’s independent game styling. This supersedes the NDB portion of decision 020; the Readers direction remains in force for the other sites.

**Tradeoff:** NDB intentionally differs from the family. Reconsider only on an explicit request, not during a broad theme update. Reverts `d8557d6` and `52ec5b8` restore exactly the tree at `28786f3`.

## 020 — Readers as the family reference (2026-09-19)

**Decision:** Use Georgia for prose and UI, bold Palatino for headings, and ink-led
navigation. Preserve paper/charcoal colors, small subject marks, square controls,
existing focus/state colors, and purpose-specific layouts. This supersedes the
earlier serif-reading/sans-interface split.

**Evidence:** The owner identified Readers as the exact desired thematic feel and
asked for the last aesthetic refinement across all pages. The previous Avenir UI
and light Baskerville headings made tools feel unrelated to the book readers.

**Tradeoff:** Serif controls have different widths. Review mobile wrapping and dense
controls; retain sans for tiny plotted labels and mono for numerical geometry.
Links adopts v2; NDB bundles the paper/type treatment to preserve its CSP and
offline operation, with game art and state colors unchanged. Readers itself remains
the reference, rather than receiving a gratuitous redesign.


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

The no-return-link portion is superseded by the 2026-09-30 persistent Home decision.

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


## Recording-specific context beside a native player — 2026-09-06
Keep a selected recording’s approach, mechanics, and attempt notes beside the player on desktop and beneath it on narrow screens. Render all notes as native disclosures before enhancement; JavaScript reveals only the selected level’s notes and follows player history. Notes remain readable without JavaScript. This is a local Baba Is You pattern, not a shared component yet.

## 2026-09-30 · Persistent symbolic return home (superseded)

The owner rejected footer placement in the same session; the header emblem
decision below replaces its dock, house drawing and clearance behavior.

**Evidence:** The owner now requests an always-available symbolic route back to
jehlp.net on every page except NDB Idle. This supersedes the earlier one-way
discovery choice, while preserving each page's own masthead and the liked dial.
**Decision:** Add one native Home anchor with a custom ink roof/door mark, a 44px
target, focus outline and safe-area edge placement. Preserve the theme dial's
page-bound positions. Use static markup in generators and runtime creation only
as a compatibility fallback. Readers mobile reuses its existing bottom toolbar.
**Tradeoff:** A fixed edge affordance needs document-end/keyboard-scroll clearance
and local offsets for bottom popovers/sticky controls. Keep the dock compact; use a shallow paper-backed edge strip only on narrow pages, where browser
review showed a corner symbol crossing the end of a form field. Offline builds embed
the SVG, and NDB Idle remains unchanged.

## 2026-09-30 · Header Home emblem

**Evidence:** After seeing the persistent footer, the owner requested its removal,
Home in the header, and a more important-looking abstract symbol like the homepage
illustrations. The reviewed preview uses a bold tilted asterisk, offset brackets,
and one rust point, with the existing theme dial alongside it.
**Decision:** Put a native Home link in the existing header, paired with the theme
dial in a non-wrapping 44px utility group. Preserve project identities and homepage
illustrations. Home scrolls with that header; no new sticky/fixed chrome. Restore
Readers' original Contents/Search toolbar and all pre-footer bottom positioning.
Remove the footer spacer, clearance token and focus-scrolling handler entirely.
**Tradeoff:** Home is no longer visible throughout a long scroll. That is the
owner's explicit preferred layout. Native markup in all generators/static pages
preserves no-JavaScript navigation, while a compatibility migration moves cached
first-release docks into headers. NDB Idle stays independent.


## 2026-10-02 · Stable masthead utility coordinates

**Evidence:** The owner asked to remove the Home/theme jump when navigating across
pages with different layouts. Desktop baselines varied by up to 109px horizontally;
narrow navigation wrapping displaced the shared pair by 40px vertically.
**Decision:** Give headers their own homepage-matched responsive frame and reserve
a CSS-first utility lane. Keep authored controls in place and let the header scroll
normally. Reserve the document scrollbar gutter; include safe insets. Remove local
header measure overrides, while preserving app content measures and reading layouts.
**Tradeoff:** Masthead rules can extend beyond a narrow content column. This makes
global navigation predictable without forcing the actual material into one layout.
NDB Idle keeps its explicitly independent navigation and styling.

## 2026-10-09 — Static mastheads

Masthead titles identify the page without acting as links. Put useful parent and sibling destinations in local navigation. Omit current-page links and unbounded author lists from headers. Keep catalogue navigation with the catalogue. The root directory does not need a Home self-link.


## 2026-10-09: Wrenfold default and folio Home

The owner selected Wrenfold Text as the default font across the site, including headings and ordinary controls.
NDB Idle follows this typography choice but retains its game interface, palette, and navigation.
Code, numerical grids, and mathematical notation retain their dedicated fonts. CJK characters use system fallbacks.

Use the approved Regular WOFF2 without subsetting. Browsers synthesize bold and italic where requested.
Keep the SIL OFL license and original copyright notices with vendored fonts and offline exports.
Use the approved 124 folio-scroll SVG for Home. Preserve its geometry, accessible name, and 44-pixel target.
Keep legacy Home icon URLs as folio aliases during cache transitions.
