# Minimal AI security revision

The owner requested the sparse AI Math reading form, only CVSS 9.9 or 10, and no AI Math cross-links. Decision 036 supersedes the initial presentation in decision 035.

## Result

Seven cases remain. The index is a title list. Each explanation has roughly 160–180 words, one short illustrative code figure, and a compact linked CVE/score line. Source links and material limits sit in the prose. Full evidence remains in the data. The filter, metadata sidebar, source list and footer are removed. All 52 lower-scored bodies and generated pages were deleted.

The homepage link remains under Data. The separate AI Math site serves only as the design reference.

## Validation

- Twelve Node tests pass, including exact 9.9/10 inclusion, rejection of a valid 9.8 case, preservation of code text, and a census that prevents removed case directories from remaining published.
- Thirty-five local browser layout checks pass across the index and all seven cases: 390px/1440px, light/dark, and 200% text. Keyboard code access, the actual theme controller, print, reduced motion and no-JavaScript reading pass. No document overflow or browser errors occurred.
- Production checks confirm seven index links and HTTP 200 for all seven cases, correct canonical URLs, one accessible code example per case, loaded identity assets, and no AI Math cross-links or old panels. The removed Firefox case returns HTTP 404.
- Source review retained score disagreements, required configuration or authentication, and limits on demonstrated impact. The Hackage wording explicitly describes following the unsafe link rather than implying automatic execution.

## Release

Source `f01f99e` replaces initial release `88bd4d2`. Pages run [42158960674](https://github.com/JWKNT/ai-security/actions/runs/42158960674) succeeded. The homepage directory source remains `2b9a6d0d`; only its existing search build needs a fresh crawl.

Shared assets and runtime are unchanged. The owner's pre-existing Reborn documentation changes remain unstaged. Browser evidence is local under `ai-security/.qa/minimal-*`.

The homepage refresh [42159032100](https://github.com/JWKNT/JWKNT.github.io/actions/runs/42159032100) succeeded and covers the index plus seven cases. Production search for the exact phrase `"WINS name changes"` returns the retained Samba explanation. The exact removed identifier `"MarkActiveICScriptsAndCopyStubs"` returns no results. The Data-category link remains visible.
