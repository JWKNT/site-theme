# AI Security Findings release

The owner requested a programming-level sister to AI Math Results, with a new repository and explanations of patched AI-found vulnerabilities scored at least 9.8.

## Scope

- `JWKNT/ai-security`: 59 sourced CVE explanations, one static index, progressive filtering, primary evidence, and a dated research log. The repository contains inert explanatory sketches, with no executable exploit or copied raw research report.
- `site-theme`: one new SVG identity and its mark/favicon derivatives, inventory and component adoption records, and decision 035. No shared CSS, font, or runtime behavior changed.
- `JWKNT.github.io`: one Data-category link and its generated search-scope option. The existing crawl discovers the case pages from their static links.

## Validation

- AI Security Findings: 10 Node tests pass, including evidence/schema gates, CVSS v3 score/vector consistency, static content, progressive filtering, preserved code text and generated output. CVSS v4 remains source-reviewed; the v3 calculator does not claim to implement v4.
- Site Theme: 62 Node tests pass, including symbol shape/PNG contracts. Skill checks now ignore regular files such as `.DS_Store`.
- Homepage: 66 Node tests pass after adding the directory entry. Generated output and `git diff --check` pass.
- Chromium local review: 79 recorded checks, with no page errors. All 59 case pages fit a 390px viewport. Index and a representative case were checked at 1440px and 390px in both color modes.
- Keyboard skip links, named scrolling code, filter intersection/empty/Clear/Escape behavior, focus restoration, dark-mode persistence, reduced motion, print and no-JavaScript reading passed. All 59 links remain available without JavaScript.
- Enlarged text at 200% passed at both widths after a visual review found and corrected an initially cramped masthead. A long function identifier also needed local wrapping. The page uses the shared layout and fixed-size graphic controls; the shorter masthead reads “AI Security”.
- Primary-source review checked AI attribution, scoring, released fixes and the distinction between a demonstrated exploit and a reported failure class. Cases with unpublished technical details label their examples as generic. Related NVIDIA advisories disclose their overlapping mechanism.

Screenshots and browser result files are local in `ai-security/.qa/`. Raw research downloads are ignored and unpublished. The public research log records coverage limits and unresolved candidates.

## Source and rollback

- Theme identity and guidance: `60df1bd`, based on `f617e1a`. Its Pages run succeeded before the consumer was published. Revert this commit only after consumers stop requesting the new identity.
- AI Security Findings initial source: `88bd4d2`. This is a new repository; there is no prior deployed revision. A withdrawal would first remove its homepage link, then disable its project Pages deployment.
- Homepage directory release: `2b9a6d0d`, based on `559ece396128ea9755b4049375ccdb44bdbc3ad6`. The directory change is isolated and can be reverted without affecting other routes.

The owner's existing Reborn notes in `docs/CHANGELOG.md` and `docs/DECISIONS.md` remain unstaged and unchanged. Existing `.DS_Store` files are also untouched.

## Public verification

The theme deployment [42157246316](https://github.com/JWKNT/site-theme/actions/runs/42157246316) and the initial site deployment [42157836514](https://github.com/JWKNT/ai-security/actions/runs/42157836514) succeeded. The project uses `main`/root Pages with HTTPS enforcement and inherits the root domain; it has no CNAME.

The production browser check used actual public assets, with no local interception. It confirmed the complete 59-case link set, HTTP 200 and exact canonical URLs for every case, accessible code blocks, all ten requested theme/local assets, mobile filtering, focus restoration and persistent dark mode. No page errors or asset failures occurred.

The homepage deployment [42157962869](https://github.com/JWKNT/JWKNT.github.io/actions/runs/42157962869) also succeeded. The public homepage displays one AI Security Findings destination. Searching `MarkActiveICScriptsAndCopyStubs` returns the Firefox CVE-2026-2766 explanation, confirming the new case text is in the deployed search index. The 390px result view was inspected, with no browser errors.
