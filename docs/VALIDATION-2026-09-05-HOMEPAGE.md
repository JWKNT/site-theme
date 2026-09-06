# Root homepage · 2026-09-05

## Scope and baseline

Only `JWKNT.github.io` changes public runtime. The theme repository changes these
Markdown records and philosophy, not its CSS, JavaScript, or public HTML pages.
Every project subpage remains untouched.

- Homepage baseline/rollback: `ffd399ca6e2d7b0043233c3f0516e316da0e1eb9`.
- Theme documentation baseline/rollback: `20a79c64b60245ad513881e0de926ee117121513`.
- Confirmed Pages source: `JWKNT/JWKNT.github.io`, legacy Pages from `main` / root,
  CNAME `jehlp.net`, public destination `https://jehlp.net/`.
- Existing theme `.DS_Store` and `skills/.DS_Store` files remain untracked.

## Result and implementation

`data/directory.json` owns the four categories and twelve known destinations.
`lib/directory.mjs` validates and renders the directory; `build.mjs` generates the
committed `index.html`. `assets/styles.css` owns only this homepage composition;
`assets/app.js` handles search and disclosure-state restoration, and
`assets/discovery.mjs` handles supplemental GitHub Pages discovery. README records
the contract and commands for future categories. No new skill or framework is
needed: the existing design, components, QA, release, and change-record skills
cover the work.

No visible site name, header, introduction, or destination descriptions. Abstract
punctuation is hidden from assistive technology; native summary labels and real
links carry meaning. Category and destination names remain readable, with only
useful search/status/accessibility text beyond them. Root-only style inspiration:
`https://www.kengoworks.com/fable`, reached through the user's linked Kevin Ngo post.
No reference assets or source code were copied.

## Browser observations

The local preview served the candidate homepage and rewrote shared theme URLs in
responses only. Production files retain production URLs. Browser checks used the
in-app Chromium surface, not a DOM stub.

| Check | Observed result |
| --- | --- |
| 390 × 844, light and dark | One-column composition, readable 18px destination links, clear symbol margin, no horizontal overflow; document height 973px |
| 1440 × 900, light and dark | Two-column composition, all twelve destinations within the viewport, no horizontal overflow |
| 768 × 900 | Artwork moves above its category; two readable columns, no horizontal overflow |
| 390px with 200% root text | 36px destination links wrap without clipping, document width stays 390px; decorative studies do not enlarge into text |
| Search | Button and `/` focus the input; category/page words filter results and expose matching collapsed groups; empty result and live count are truthful |
| Keyboard | Native summaries toggle with Enter; Tab skips links in a closed group; Escape clears/closes search and returns focus to its button; a group closed before searching is closed again afterward |
| No JavaScript | All twelve links start in static HTML; Reading still toggles natively; search and the unbound theme control remain hidden |
| Print and reduced motion | Print exposes links in a closed group and uses black body ink; utility controls are hidden; reduced-motion link transitions compute to 0s |
| Browser scale fixture | 24 categories / 412 links, twenty added groups initially closed: 1935px tall at 1440px, no horizontal overflow; searching the last page returns one link and clearing restores four open groups |

The scale fixture was temporary browser DOM, not production data. No full
screen-reader session or other browser engine was tested. These checks are not
claims about those untested environments.

Representative light/dark desktop and mobile screenshots are saved in the local
task workspace at `work/qa-homepage/`; they are QA artifacts, not website assets.

## Automated and release checks

- `node build.mjs`: deterministic generation of four categories / twelve links.
- Homepage `node --test tests/*.test.mjs`: 15 passed. Covers complete static
  destinations, metadata/no visible masthead, decorative markup, label escaping,
  invalid and duplicate configuration, a 24-category / 480-link render fixture,
  paginated discovery, case-insensitive exclusions, safe origins, supplied abort
  signals, and HTTP/malformed/offline/later-page failures. Mock tests do not claim
  end-to-end browser accessibility or real timeout duration.
- `node --check assets/app.js` and `assets/discovery.mjs`: passed.
- Theme `node --test tests/*.test.mjs`: 21 passed; shared runtime unchanged.
- `git diff --check`: passed in both affected repositories.
- All twelve destination routes returned HTTP 200 before publication.
- Homepage published commit: `0526d8b0913501ef3d26fef1ada0548de9fb9d2a`.
- GitHub Pages run `34003336700`: completed successfully for that exact commit.
- Public root HTML, local CSS, app script, and discovery module returned HTTP 200
  with appropriate content types and exact byte-equivalent text to the committed
  files. Live browser search returned the NGU destination; Escape cleared it;
  native Reading disclosure toggled; canonical stayed `https://jehlp.net/` and
  all twelve authored links remained present without horizontal overflow.
