---
name: jehlp-data-ui
description: "Improve jehlp.net tables, filters, chart controls, and live status without changing the underlying data or domain logic."
---

# jehlp-data-ui

Read the consumer's README, AGENTS.md, existing tests and relevant renderer before editing. Distinguish the stable data contract from presentation. Mystery-report ranking/export, profile scientific content, and dashboard state interpretation must remain intact during UI work.

Keep search/filter/sort controls together with results. Preserve reset, counts, access to every result, accessible labels, keyboard paths and dialog focus. Use data-ui-select for ordinary single-choice filters; preserve their native values/change handlers and resync after programmatic changes. Show sort direction in headings without visible priority digits; explain primary/secondary sorting in advanced controls and accessible names. Empty, loading, disconnected, stale and failed are different states; unavailable telemetry is not zero and is not a successful action. The NGU public dashboard stays read-only. Do not start the bot or call a live mutation endpoint to test layout.

Choose the collection model before adding overflow. Paginated rows flow with the page: retain essential comparison fields and put secondary fields in accessible detail, without removing them from sorting/export. A true matrix may use a named focusable overflow wrapper without pagination. Do not combine pagination with an internally scrolling two-axis table. Use aligned/tabular values and one connected native header band. A visual chart needs readable text for essential values; smaller annotations are a measured local exception, not a precedent for 9px filter labels.

Preserve source datasets and factual copy. Exercise representative populated/empty/extreme states and the existing tests. Use local fixtures for live UI checks where available; identify them as fixtures. Record remaining data or browser limitations in site-theme/docs/VALIDATION.md or the dated successor record.
