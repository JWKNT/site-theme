# Cross-page header frame — 2026-10-02

## Scope and invariant

Home/theme stay at the same document-top coordinates across pages at the same
viewport, regardless of each application’s content measure, navigation wrapping,
or document scrollbar presence. The liked homepage is the reference. Controls
remain native 44px targets with a 6px gap, scroll with their existing header, and
keep the existing masks, theme behavior and accessibility names. NDB Idle has no
shared controls and retains its independent interface.

The shared CSS owns a 74rem/2.5rem-gutter desktop frame, a 48rem/1.5rem-gutter frame
below 60rem, and 1rem gutters below 38rem. Top inset is 24px, changing to 12px below 38rem;
safe-area insets can enlarge these minimums. Short pages reserve the same scrollbar
gutter as long pages. Content shells and reading measures do not change.

## Before

At 1188×761, Home/theme on the homepage were (1039,24)/(1089,24), with 44px controls.
Theme x ranged from 980 (Links) to 1111 (Box), and most subpages had y 29.6875. Readers
book controls used y 16. At 500×761, the homepage controls were (375,12)/(425,12),
while navigation wrapping put many subpages at y 52. These are browser coordinates,
including a 15px classic scrollbar gutter in the homepage’s content width.

## Source and automated checks

- Shared theme 49 tests, including native first-paint markup, frame tokens, safe
  insets, reserved utility lanes, mobile wrapping, touch mask geometry and print rules.
- Readers: canonical theme copy, independent appearance/static-reader adaptation,
  unchanged reading content ; 68 Python and 17 Node tests plus original-text validation.
- Consumer CSS removes header-only width/padding overrides, preserving existing
  content selectors. Puzzle and MTL builds regenerate no content changes.
- Solver export is rebuilt from the current 7ab719d accessibility release and embeds
  the full shared frame/icons while retaining the status-announcement helper.

## Browser and release verification

The cloud browser refused localhost preview with ERR_BLOCKED_BY_CLIENT. No alternate
route was used to bypass it. The candidate has source review and automated checks;
public post-deployment geometry and interaction results are recorded after release.

## Limits

Narrow desktop reflow is not device emulation. Touch/safe-area/print behavior has
source coverage unless otherwise recorded; no real device, print preview or actual
screen-reader speech result is claimed. No NDB save-affecting gameplay was started.
