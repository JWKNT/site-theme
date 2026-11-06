---
name: jehlp-math-explainer
description: "Say what a mathematics result means on jehlp.net in a two-minute page, without its proof, for a smart reader without the background. Add a longer simple version behind a button, for a reader with less schooling."
---

# jehlp-math-explainer

Read the owning repository's AGENTS.md, the theme's PHILOSOPHY.md and the math contract in docs/COMPONENTS.md. Locate site-theme beside the current repository, or resolve this skill's real path to its owning site-theme checkout.

## Write the page

The reader asks one question: what does this statement mean? Answer it in two minutes, then stop. The reader is smart and curious, even without the background. Define each term once, in few words. Do not explain what the reader can infer. Do not show the proof.

Use a title and plain paragraphs, under 300 words. Do not add section headings, a summary under the title, status lines, history, a section on why the result matters, a section on what it does not say, or a source list. If a misreading is likely, correct it in one sentence where it arises. Link the source on the words that state the result. A landing page is a list of titles.

Use an example only if it shows an idea that the reader probably has not met. Give each page one figure or small table for the margin, and keep its caption short.

## Write the simple version

Each explainer also has a simple version, for a reader with less schooling. The short page stays the default. A square Simplify button beside its title opens the simple page, and a Short version button returns. Landing pages, site search and links on a short page lead to short pages.

The simple page answers the same question about the same result. It keeps the form of the short page: a title, plain paragraphs, one figure or small table for the margin, and no proof, status, history or source list. Only the assumed knowledge changes. Assume school arithmetic, and define each term at first use, including words such as fraction, exponent, matrix and conjecture. Put a number on each idea, and work through one example step by step. Say in words what each symbol in a formula means.

Use 400 to 800 words, at least one and a half times the short page. Longer does not allow noise: remove each sentence that the reader can do without. Use literal comparisons, not metaphors. The same fact checks and writing limits apply.

## Check the facts

Short does not mean loose. Read the primary manuscript, not only its news coverage. News summaries can misread notation and scope. Take the statement and the bounds from the source. Name the people and the models that the source credits when the statement needs them.

Calculate each number on the page, and keep a short exact check in the repository's tests. State a claim as a claim: write "reports" until human experts confirm a result. Paraphrase sources.

## Build the page

Add an explainer to the homepage repository as one entry in `data/ai-math.json`, one body in `content/ai-math/<slug>.html` and one body in `content/ai-math/<slug>.simple.html`. The build publishes the second body at `<slug>/simple/`. A link in it goes to the simple version of the other result, as `../../<slug>/simple/`. The search crawl skips these pages. Write math between `\(` and `\)` or between `\[` and `\]`. The build typesets it to native MathML with a pinned Temml. Do not load a typesetter in the browser. Do not put a formula in an image.

Load `v2/components.css` for the `--math` face and `.ui-equation`. Use `.ui-math-char` for a double-struck letter in a heading or other plain text. Put a formula that can overflow in `.ui-equation` with `data-scroll-region`, `data-scroll-noun="of the formula"` and an accessible name. Keep inline formulas short, and display a long one.

Use the same frame as the masthead. On a wide screen, put the text in one column and the figure in the margin beside it. On a narrow screen, keep the figure in the text flow. Calculate figures during the build as inline SVG on the theme tokens, with an accessible name.

Check both color modes, a narrow screen and 200% text. Run the owning repository's tests. A new explainer needs no new homepage entry, because the search crawl follows links from the landing page.

## Original technical writing

For original prose, use `jehlp-technical-writing` and `docs/WRITING-STYLE.md`.
Apply ASD-STE100 Issue 9 to explanations, instructions, help, and interface text.
Preserve translated and reader text, quotations, NDB fiction and item descriptions, and exact technical meaning.
Review generated outputs and accessible names after a text change.
