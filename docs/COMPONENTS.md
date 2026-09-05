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
| Directory | `.ui-directory`, list/link semantics, row boundaries | Columns and grouping; `--directory-rule` / `--directory-space` | Homepage, MTL, gallery |
| Toolbar | `.ui-toolbar`, `.ui-field`, `.ui-field--search` | Labels, filter state, widths, result rendering | Armory, consensus, gallery |
| Segmented controls | `.ui-segmented`, `aria-pressed` buttons or `aria-current="page"` links | Selection state and actions; not an ARIA tab widget | Consensus |
| Responsive disclosure | `data-disclosure="(max-width: 650px)"` button + `aria-controls` region | Breakpoint, label, region layout | MTL contents, Armory filters, gallery |
| Section index | `data-section-nav` on native anchor navigation | Section IDs, shell, section content | Profile, NGU dashboard, gallery |
| Table overflow | `data-scroll-region` + accessible name on a wrapper | Caption/headings, column geometry, sorting, paging | Consensus, Profile, dashboard, MTL, gallery |
| Dialog | `.ui-dialog`, `.ui-dialog-body`, `.ui-dialog-dismiss`, `data-dialog` | Title relationship, content, `showModal()`, domain actions | Armory, Profile, consensus, gallery |
| Copy code | `data-copy-code` on `pre` containing `code` | The actual snippet | MTL, gallery |

CSS classes define appearance; data attributes opt into behavior. Do not put
filtering, dataset interpretation, telemetry, puzzle rules, or network calls here.

## Behavior contracts

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
components; it accepts an element or document, includes the root itself, and is
idempotent. There is no framework, runtime dependency, global DOM mutation
observer, or network request. Controllers live for the document lifetime;
virtualized apps that repeatedly discard roots should add a disposal contract
before adopting this static-page helper.

Publish new optional assets before consumers reference them. Native fallback
markup stays useful if the script fails. Existing base/reader consumers need not
load this layer. Rebuild offline exports after changing their embedded assets.

Run `node --test tests/*.test.mjs`, then check real focus, breakpoint transitions,
overflow, and light/dark modes on the gallery and consumers. DOM stubs test
controller decisions, not browser accessibility.
