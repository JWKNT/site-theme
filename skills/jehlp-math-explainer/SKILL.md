---
name: jehlp-math-explainer
description: "Say what a mathematics result means on jehlp.net in a short plain page, without its proof, for a reader with school arithmetic."
---

# jehlp-math-explainer

Read the owning repository's AGENTS.md, the theme's PHILOSOPHY.md and the math contract in docs/COMPONENTS.md. Locate site-theme beside the current repository, or resolve this skill's real path to its owning site-theme checkout.

## Write the page

The reader asks one question: what does this statement mean? Answer it, then stop. Use the same baseline on every page: whole and negative numbers, fractions, decimals, percentages, whole-number powers, square roots, letters that stand for numbers, simple equations, points on a grid, simple shapes, and the words proof, theorem and conjecture. Define everything else at first use, on that page, because a reader can land on any page from a link. A link to another page does not replace a definition. Put a number on each idea, and work through one example step by step. Say in words what each symbol in a formula means, including a Greek letter or a power that is not a whole number. Do not show the proof.

Use a title and plain paragraphs, 400 to 800 words. Do not add section headings, a summary under the title, status lines, history, a section on why the result matters, a section on what it does not say, or a source list. If a misreading is likely, correct it in one sentence where it arises. Link the source on the words that state the result. A landing page is a list of titles.

Remove each sentence that the reader can do without. Use literal comparisons, not metaphors. Give each page one figure or small table for the margin, and keep its caption short. A worked example can use a small table in the text column.

Use one word for each idea: whole number, fraction, method, paper, chance, fixed number and limit. Do not write integer, rational number, coefficient, algorithm, manuscript, preprint, probability, constant or bound. Use the same definition on each page that needs it:

- A hypothesis is a statement that nobody has proved yet.
- A polynomial is a formula that only adds and multiplies numbers and letters.
- A matrix is a table of numbers.
- A complex number has the form `a + bi`, where `i² = -1`. It is a point on a flat map, with `a` across and `b` up.
- A graph is a set of dots, called vertices, joined by lines, called edges.
- A function is a rule that gives an output for each input.
- Lean is a computer program that checks each step of a proof.
- In `n` dimensions, a point is a list of `n` numbers.

The tests in the `ai-math` repository check these words and definitions.

## Check the facts

Plain does not mean loose. Read the primary manuscript, not only its news coverage. News summaries can misread notation and scope. Take the statement and the bounds from the source. Name the people and the models that the source credits when the statement needs them.

Calculate each number on the page, and keep a short exact check in the repository's tests. State a claim as a claim: write "reports" until human experts confirm a result. Paraphrase sources.

## Build the page

Add an explainer to the `ai-math` repository as one entry in `data/results.json` and one body in `content/<slug>.html`. A link to another result is `../<slug>/`. Write math between `\(` and `\)` or between `\[` and `\]`. The build typesets it to native MathML with a pinned Temml. Do not load a typesetter in the browser. Do not put a formula in an image.

Load `v2/components.css` for the `--math` face and `.ui-equation`. Use `.ui-math-char` for a double-struck letter in a heading or other plain text. Put a formula that can overflow in `.ui-equation` with `data-scroll-region`, `data-scroll-noun="of the formula"` and an accessible name. Keep inline formulas short, and display a long one.

Use the same frame as the masthead. On a wide screen, put the text in one column and the figure in the margin beside it. On a narrow screen, keep the figure in the text flow. Calculate figures during the build as inline SVG on the theme tokens, with an accessible name.

Check both color modes, a narrow screen and 200% text. Run the owning repository's tests. A new explainer needs no new homepage entry, because the search crawl follows links from the landing page.

## Original technical writing

For original prose, use `jehlp-technical-writing` and `docs/WRITING-STYLE.md`.
Apply ASD-STE100 Issue 9 to explanations, instructions, help, and interface text.
Preserve translated and reader text, quotations, NDB fiction and item descriptions, and exact technical meaning.
Review generated outputs and accessible names after a text change.
