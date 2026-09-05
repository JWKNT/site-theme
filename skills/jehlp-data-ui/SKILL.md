---
name: jehlp-data-ui
description: "Improve jehlp.net tables, filters, chart controls, and live status without changing the underlying data or domain logic."
---

# jehlp-data-ui

Read the consumer's README, AGENTS.md, existing tests and relevant renderer before editing. Distinguish the stable data contract from presentation. Mystery-report ranking/export, profile scientific content, and dashboard state interpretation must remain intact during UI work.

Keep search/filter/sort controls together with results. Preserve reset, counts, pagination, accessible labels, keyboard paths and dialog focus. Empty, loading, disconnected, stale and failed are different states; unavailable telemetry is not zero and is not a successful action. The NGU public dashboard stays read-only. Do not start the bot or call a live mutation endpoint to test layout.

Use aligned/tabular values, legible headings and appropriately bounded table output. Add a named focusable overflow wrapper when a table requires keyboard scrolling. A visual chart needs readable text for essential values; smaller annotations are a measured local exception, not a precedent for 9px filter labels.

Preserve source datasets and factual copy. Exercise representative populated/empty/extreme states and the existing tests. Use local fixtures for live UI checks where available; identify them as fixtures. Record remaining data or browser limitations in site-theme/docs/VALIDATION.md or the dated successor record.
