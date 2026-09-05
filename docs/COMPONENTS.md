# Reusable components

The [working gallery](../components.html) demonstrates the optional v2 component
layer. The foundation remains `base.css` and `theme.js`; components do not load
themselves into existing consumers.

```html
<script src="https://jehlp.net/site-theme/v2/theme.js"></script>
<link rel="stylesheet" href="https://jehlp.net/site-theme/v2/base.css">
<link rel="stylesheet" href="https://jehlp.net/site-theme/v2/components.css">
<link rel="stylesheet" href="assets/styles.css">
<script src="https://jehlp.net/site-theme/v2/components.js" defer></script>
```

## Ownership

| Pattern | Shared contract | Page responsibility | Current adopters |
| --- | --- | --- | --- |
| Page identity | `.site-header--identity`, `.site-brand`, `img.site-mark`, `data-site-tone` in base CSS | Transparent subject PNG/title, useful local links, no global-home link | Theme docs, guide, readers, reports, puzzles, writing |
| Directory | `.ui-directory`, list/link semantics, row boundaries | Columns and grouping; `--directory-rule` / `--directory-space` | Homepage, MTL, gallery |
| Toolbar | `.ui-toolbar`, `.ui-field`, `.ui-field--search` | Labels, filter state, widths, result rendering | Armory, consensus, gallery |
| Single-choice select | `data-ui-select` on a native `select` | Native options/value/name, labels, change handlers, programmatic synchronization | Profile, consensus, Armory, Albatross voyage, puzzles, gallery |
| Segmented controls | `.ui-segmented`, `aria-pressed` buttons or `aria-current="page"` links | Selection state and actions; not an ARIA tab widget | Consensus |
| Responsive disclosure | `data-disclosure="(max-width: 650px)"` button + `aria-controls` region | Breakpoint, label, region layout | MTL contents, Armory/puzzle filters, gallery |
| Section index | `data-section-nav` on native anchor navigation | Section IDs, shell, section content | Profile, NGU dashboard, gallery |
| Table overflow | `data-scroll-region` + accessible name on a wrapper | Matrix need, caption/headings, column geometry; no pagination | Profile, dashboard, MTL, gallery |
| Table header band | `.ui-table` on one native table | Widths, numeric alignment, cell content, bounded wrapper height | Consensus, Profile, dashboard, MTL, Armory, gallery |
| Dialog | `.ui-dialog`, `.ui-dialog-body`, `.ui-dialog-dismiss`, `data-dialog` | Title relationship, content, `showModal()`, domain actions | Armory, Profile, consensus, gallery |
| Copy code | `data-copy-code` on `pre` containing `code` | The actual snippet | MTL, gallery |

CSS classes define appearance; data attributes opt into behavior. Do not put
filtering, dataset interpretation, telemetry, puzzle rules, or network calls here.

## Behavior contracts

**Page identity.** This is CSS-only and needs no optional component script. Add
`data-site-tone="blue"` (or `plum`, `teal`, `ochre`) to the body. Use a plain title
on the project landing page; a subpage may link to that project's own landing
page. Never point the brand or navigation to the global home directory. The
decorative mark is a transparent PNG with empty `alt`; the title remains text.
Use `img.site-mark` with `width="32" height="32"`, never a Unicode glyph or emoji.
Keep one mark per header and let the navigation wrap naturally. Long titles may
wrap; local puzzle navigation can use a named horizontal scroll region.

```html
<header class="site-header site-header--identity">
  <div class="site-brand">
    <img class="site-mark" src="https://jehlp.net/site-theme/v2/marks/profile.png" width="32" height="32" alt="">
    <span class="site-title">Project title</span>
  </div>
  <nav aria-label="Page links">
    <a href="#reference">Reference</a>
    <button type="button" data-theme-toggle aria-label="Use dark theme">◐</button>
  </nav>
</header>
```

The 13 maintained PNGs in `v2/marks/` are `site-theme.png`, `home.png`,
`mtl-guide.png`, `profile.png`, `mystery-report.png`, `ngu-idle-dashboard.png`,
`logical-solver.png`, `bl2.png`, `box-puzzles.png`, `black-sheep-town.png`,
`albatross-koukairoku.png`, `writing.png`, and `puzzles.png`. Choose the relevant
subject, check both color modes, and preserve the existing favicon separately.
Publish a new mark before adopting its URL; embed the PNG in offline exports.

**Single-choice selects.** Keep an ordinary native `select`, its `id`, `name`,
options, initial selection, label, and application `change` handlers. Add
`data-ui-select` and load the optional component layer. The script adds the shared
reader-like trigger/listbox and hides the native control only after setup. Without
the script, the native control remains usable. Multiple selections and expanded
native listboxes are intentionally left native. The richer VN chapter browser
retains its own grouped/searchable chapter context; do not stack this enhancement
on top of it.

```html
<label class="ui-field" for="detail">Detail
  <select id="detail" name="detail" data-ui-select>
    <option value="broad">Broad overview</option>
    <option value="detailed">Detailed populations</option>
  </select>
</label>
```

The square trigger and options use 14px UI type and the shared minimum control
height (36px desktop, 44px coarse pointer). Arrow keys, Home/End, and typeahead move
the active option; Enter/Space confirms, Escape dismisses without changing the
selection, and Tab closes while retaining normal focus travel. The chosen option
updates the native value and emits bubbling `input`/`change` events. Native form
submission, reset, required state, and disabled choices remain authoritative.

After assigning `.value` or `.selectedIndex` programmatically, call
`window.JehlpUI?.enhance(select)` to resync presentation; those property assignments
do not emit a change event. Enhance again after populating options or replacing
controls. The call is idempotent. Keep local width/layout rules, but remove
conflicting control styling and superseded custom-menu listeners.

**Disclosures.** Start the toggle `hidden` and the region visible. The script
exposes the toggle at its narrow breakpoint and uses native `hidden` on the closed
region. Escape from the toggle or region closes it and returns focus. Same-page
anchors close the region and focus their target; modified clicks retain browser
behavior. An optional `data-disclosure-close="results"` button inside the region
closes it and focuses the named results element. Close buttons also start hidden;
the component manages their breakpoint visibility. Without the optional script,
the material remains visible. This is an in-flow pattern, with no modal backdrop,
scroll lock, or focus trap.

**Section indexes.** Use same-document anchors and visible target sections. The
component sets `aria-current="location"` as the reader scrolls and keeps the active
link horizontally visible. Explicit navigation focuses the target; passive
scrolling does not. Nav height sets `--section-offset` on its parent. The shared
selector applies that scroll margin to sibling sections, including after text
enlargement. Other structures can consume the variable locally. Do not also run a
local scroll-spy over the same links. Native anchors survive a missing script.

**Overflow.** Mark a wrapper around a table, never the table itself, and provide
`aria-label` or `aria-labelledby`. A cue appears above it only when columns
overflow. A named, focusable region is added only while horizontal or vertical
scrolling is needed; existing descriptions are preserved. Resize observation
handles disclosure/dialog opening and table size changes. Replacing the wrapper
requires another enhancement call. Column widths and sticky identifiers stay
local: a fixed first column can obscure most of a phone viewport.

Reserve this pattern for a real matrix whose columns need simultaneous comparison.
A paginated collection should instead flow naturally with the document, keeping
essential columns visible and disclosing secondary fields in record details.
Do not combine pagination with an internally scrolling two-axis table. Ordinary
document scrolling is not a second table navigation model.

**Table header bands.** Add `class="ui-table"` to one native table. When a matrix
needs overflow, place it inside the named wrapper above. The complete `thead`
sticks as one opaque band; individual
header cells and row headings stay in normal table layout. Separate borders with
zero spacing keep the divider attached while scrolling. Do not split headings
and rows into different tables or add a top margin inside the scroll region.
Column widths, numeric alignment, and the wrapper's optional maximum height stay
local. Use `scope="col"` / `scope="row"` and preserve native captions. Regular
values and header labels are at least 14px in normal case; prose cells are 16px.
For overflowing matrices, check horizontal, vertical, and combined scroll, not
only the initial position. Confirm paginated rows have no internal scrollport.
Without this optional stylesheet the native table remains usable. A naturally
flowing, short paginated table may keep its complete header static with a local
`thead` override. Sort direction needs no visible priority digit; primary/secondary
sorting belongs in explicit advanced controls and accessible labels.

**Puzzle transitions.** Use one `.site-divider` with a decorative PNG at the
start of the main puzzle unit, after complete rules and worked examples. The
unit includes its lead-in, solve links, main grids, and reference diagrams; never
put the ornament between those links or introductory words and their grids.
The first image may be an example and is not a reliable boundary.

The public renderer delegates boundary selection to `puzzles/lib/puzzle-content.mjs`.
It uses a uniquely named main SudokuPad link (Penpa+ fallback) and retains the
containing solve-link paragraph with the puzzle. Two reviewed exceptions put the
divider before the Loop lead-in `And here is the main puzzle:` and before the
first of Roller's paired main grids. Keep these exceptions explicit; do not turn
them into a general first-image heuristic. Ambiguous new content needs an explicit
semantic boundary rather than a guessed image match. Preserve exact text, links,
all diagrams, and their source order. The current 126-page archive has 48 example
diagrams before the boundary and 129 main/reference diagrams after it (177 total).

Use `puzzles.png` with empty `alt` inside the hidden decorative wrapper; layout
and orientation stay local. Jekyll's separate `data-image-decoration` opt-out keeps
its image-caption processor from framing a decorative mark. Avoid a second border
around the same transition. An existing layout-specific placement is not evidence
that the main-unit boundary has been verified.

**Dialogs.** Name the dialog with `aria-labelledby`. Place a native
`<form method="dialog" class="ui-dialog-dismiss">` before its body, with a named
close button. Additional Done buttons can reference that form through
`form="dismiss-id" type="submit"`. The browser owns modal focus, Escape, closing,
and focus restoration. The optional script adds dismissal only when a pointer
click starts and ends outside the dialog rectangle. Clicking padding or dragging
text outside does not close it. Observe `close` for URL cleanup instead of
overriding Escape. Use `--dialog-width` to vary shell width.

**Code copying.** Success is reported on the button. If clipboard access fails,
the code is selected for manual copying and the button explains this. Only the
`code` text is copied. Clipboard access occurs only after the reader activates Copy.

## Dynamic content and release

The one public API is `window.JehlpUI.enhance(root = document)`. Initialization runs
at DOM readiness. Call `window.JehlpUI?.enhance(container)` after inserting new
components and after programmatic select-value changes; it accepts an element or
document, includes the root itself, and is idempotent. There is no framework,
runtime dependency, global DOM mutation
observer, or network request. Controllers live for the document lifetime;
virtualized apps that repeatedly discard roots should add a disposal contract
before adopting this static-page helper.

Publish new optional assets before consumers reference them. Native fallback
markup stays useful if the script fails. Existing base/reader consumers need not
load this layer. Rebuild offline exports after changing their embedded assets.

Run `node --test tests/*.test.mjs`, then check real focus, breakpoint transitions,
overflow, and light/dark modes on the gallery and consumers. DOM stubs test
controller decisions, not browser accessibility.
