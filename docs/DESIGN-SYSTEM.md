# A quiet frame, made usable

The direction continues the existing philosophy: serif reading, sans interface,
monospaced values, paper and charcoal surfaces, restrained blue, square controls,
and thin rules. Improve the ability to read and operate the material before
adding decoration. Subject identity belongs inside this common language, not in
a separate visual system for each page.

## Choose the surface from the task

| Surface | First useful screen | Structure | Example here |
| --- | --- | --- | --- |
| Reading/reference | Title, brief context, actual text or document links | 66–72 characters, contents beside or above text | mtl-guide; site essays |
| Collection/comparison | Search/filter and real rows | Compact paginated rows with detail, or a true comparison matrix | mystery-report |
| Live monitor | Connection truth, priorities, current state | Summary then evidence; no decorative metrics | ngu-idle-dashboard |
| Visual exploration | Meaningful chart plus its controls and equivalent text | Chart-specific layout; disclosures for detail | profile |
| Puzzle workspace | Board and primary solve/step actions | Stable board geometry; options next to controls | logical-solver |

Do not put a marketing hero in front of a working surface. Do not change ranking,
health interpretation, puzzle rules, or bot decisions while restyling their UI.

## Type and interaction scale

| Role | Target | Implementation |
| --- | --- | --- |
| Sustained reading | 16px or larger at default settings | `--text-body: 1rem`, line height roughly 1.6 |
| Regular labels, navigation, controls | 14px or larger | `--text-ui: .875rem` |
| Secondary metadata | 12px or larger | `--text-meta: .75rem` |
| Page titles | Usually 26–32px | Existing display stack, restrained weight |
| Desktop interface controls | At least 36px high | `--control-size: 2.25rem` |
| Coarse-pointer interface controls | Aim for 44px high | `--control-size: 2.75rem` |

These are project design targets, not a claim of accessibility certification.
Tiny puzzle candidate marks and chart annotations need a local solution (zoom,
detail view, equivalent text); enlarging every value blindly can break geometry.
Do not silently shrink ordinary labels below the scale to make a layout fit.
Move controls to a second line, simplify columns, or use bounded overflow instead.
Use normal case for task labels and table headings: synthetic small caps can
shrink lowercase glyphs despite a nominal 14px font size. Main spreadsheet values
are task text, not secondary metadata. Reserve small caps for occasional editorial
eyebrows, never as a way to fit controls or columns.

Ordinary single-choice dropdowns use the shared `data-ui-select` enhancement:
normal-case 14px text, square triggers at least 36px high, and the same quiet
option surface as the VN readers. Keep their native select as form/data authority.
Retain the richer VN chapter browsers where grouping and chapter context are part
of the task; equal-role voyage/chapter controls still share the control scale.
See `COMPONENTS.md` for keyboard behavior, native fallback, and programmatic sync.

## Ownership and CSS order

`v2/base.css`: palette, type roles, common header/shell, focus, controls, tables,
print foundation, reduced-motion behavior. `v2/theme.js`: saved/system preference,
control creation, browser chrome, and both theme events. `v2/docs.css`: theme
reference pages. `v2/reader.css`: the shared bilingual and English reader surface,
used by Black Sheep Town and Albatross Koukairoku.

`v2/components.css` and `v2/components.js` are an optional layer for directories,
controls, select menus, disclosures, navigation, overflow, dialogs, and copying. See
`COMPONENTS.md` for explicit contracts and the working gallery. Existing pages do
not gain behavior merely by using a coincidentally similar class name.

Local CSS owns data visualization, board geometry, tables with special columns,
and page-specific hierarchy. Local files currently contain shared overrides;
remove one only after comparing its function with the shared rule. Use a default
fallback when referencing a newly added token so independently deployed consumers
remain usable with the earlier v2 stylesheet.

## States and access

A count, empty result, disconnected feed, uncertain result, disabled control, and
failed operation are different states. Keep their distinctions visible in words.
Use native links, buttons, labels, tables, details, and dialogs. A scroll region
that needs keyboard access gets a name and `tabindex="0"`. A dialog gets a title
relationship and returns focus. Focus on a hidden/offscreen control is a defect.

Choose table navigation before adding overflow. For a ranked collection, paginate
compact rows in normal page flow and disclose secondary fields in record details;
keep all fields available to sorting/export where those capabilities exist. For a
genuine matrix, use a named scroll region and legible columns without pagination.
Do not require pagination plus internal horizontal and vertical scrolling. Show
sort direction in the heading, with primary/secondary order explained in advanced
controls and accessible names rather than visible priority numbers.

Mobile navigation in a short reference guide can be an in-flow disclosure.
A modal drawer is appropriate only when its benefit pays for focus management,
background inertness, Escape handling, and breakpoint transitions.

A sticky index must not cover its target at enlarged text sizes. Do not hide its
scrollbar solely for appearance. Avoid fixed control heights that clip wrapped
labels. Keep text and background tokens paired in both modes and in print.

## Color and boundaries

Blue carries links, focus, and selection. Dataset colors retain their meanings.
Use muted ink for secondary text, and reserve faint ink for nonessential marks;
check contrast in context. A section boundary has one owner. Preserve the existing
rule/ornament grammar rather than stacking borders around the same whitespace.
Place one PNG-centered divider at the start of the main puzzle unit, after the
complete rules and worked examples. Keep the main puzzle's lead-in, solve-link
paragraph, grids, and reference diagrams together below it. The first image may
be an example, so image position alone cannot identify this boundary. Preserve
the original text, links, diagram order, and paired-grid grouping; do not frame
the decorative mark as a content image. The divider's orientation follows the
page layout rather than changing the content's semantic grouping.

## Independent pages, related identities

Each project stands alone: no Projects, Home, linked site logo, or footer route
back to the global directory. Project-local navigation, source links, downloads,
and canonical metadata remain useful. The global directory can link out to each
project without requiring a return link.

Use the opt-in identity header in `COMPONENTS.md`: one relevant transparent PNG
as `img.site-mark` at 32px with empty `alt`, a serif title, and only useful local
navigation. Choose a maintained asset from `v2/marks/`; do not substitute Unicode
or emoji. Blue, plum, teal, and ochre
identity tones are available in both color modes. Reserve these for marks and
small editorial accents; links, focus, selection, and data/status colors keep
their existing meanings. Do not tint the whole reading surface.

Make margins useful: place context alongside the material when it saves space,
balance column heights where practical, and remove unexplained number gutters or
empty hero space. A serif row title and open lists can provide character without
new containers. Remove headings that repeat navigation, redundant controls in the
same context, and instructions already conveyed by controls. Keep scientific
uncertainty, privacy boundaries, provenance, failure
states, and instructions needed to operate an unfamiliar tool. On small screens,
bring margin labels into the content flow; never pay for decoration with overflow
or smaller text.

Keep CSS icon URLs relative to their stylesheet; HTML masthead images use the
shared mark URL or an appropriate relative path. Inline builds must embed all
referenced assets, including PNG marks. Do not trade an offline deliverable for an unnoticed CDN
dependency. Preserve existing favicon identity and canonical metadata.
