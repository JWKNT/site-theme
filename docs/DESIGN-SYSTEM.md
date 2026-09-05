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
| Collection/comparison | Search/filter and real rows | Wide table, aligned values, bounded results | mystery-report |
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

## Ownership and CSS order

`v2/base.css`: palette, type roles, common header/shell, focus, controls, tables,
print foundation, reduced-motion behavior. `v2/theme.js`: saved/system preference,
control creation, browser chrome, and both theme events. `v2/docs.css`: theme
reference pages. `v2/reader.css`: the shared bilingual and English reader surface,
used by Black Sheep Town and Albatross Koukairoku.

`v2/components.css` and `v2/components.js` are an optional layer for directories,
controls, disclosures, navigation, overflow, dialogs, and copying. See
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

## Independent pages, related identities

Each project stands alone: no Projects, Home, linked site logo, or footer route
back to the global directory. Project-local navigation, source links, downloads,
and canonical metadata remain useful. The global directory can link out to each
project without requiring a return link.

Use the opt-in identity header in `COMPONENTS.md`: one small decorative subject
mark, a serif title, and only useful local navigation. Blue, plum, teal, and ochre
identity tones are available in both color modes. Reserve these for marks and
small editorial accents; links, focus, selection, and data/status colors keep
their existing meanings. Do not tint the whole reading surface.

Give the material room: margin numbers can orient a long page, a serif row title
can give a collection character, and open lists often need fewer rules than boxes.
Remove headings that repeat the navigation and instructions already conveyed by
controls. Keep scientific uncertainty, privacy boundaries, provenance, failure
states, and instructions needed to operate an unfamiliar tool. On small screens,
bring margin labels into the content flow; never pay for decoration with overflow
or smaller text.

Keep standard icon URLs relative to their stylesheet. Inline builds must embed
the referenced assets. Do not trade an offline deliverable for an unnoticed CDN
dependency. Preserve existing favicon identity and canonical metadata.
