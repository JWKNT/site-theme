---
name: jehlp-math-explainer
description: "Explain what a mathematics result answers on jehlp.net, without its proof, for a reader with high-school mathematics and some science or engineering education. Includes native MathML, calculated figures and dated verification status."
---

# jehlp-math-explainer

Read the owning repository's AGENTS.md, the theme's PHILOSOPHY.md and the math contract in docs/COMPONENTS.md. Locate site-theme beside the current repository, or resolve this skill's real path to its owning site-theme checkout.

## Write for the reader

Explain the question that the result answers. Do not show the proof. Name the method only when the reader needs it to understand the statement, for example when a geometric result follows from a statement about waves.

Write for a reader with high-school mathematics and some science or engineering education. Define each term before its first use. Use one term for one concept. Give worked examples with small numbers that the reader can check by hand. Show one example where the statement holds and one where it fails.

Use these sections in this order: The question, Examples, The result, What the result does not say, Why the result matters, How far the result has been checked, and Sources. Add a section only when the subject needs it. State the exact result in one display formula or one short list. Then say what each part means.

Each page must stand alone, because readers arrive from a direct link. Link a related explainer when a term depends on it.

## Check the facts

Read the primary manuscript, not only its news coverage. News summaries can misread notation and scope. Take the statement, the bounds and the dates from the source. Name the people and the models that the source credits.

Calculate each number on the page. Use exact arithmetic for worked examples. Keep a short check in the repository's tests for each quoted calculation. If a value is an estimate, say so and say how it was made.

Give the status with a date. Keep these facts separate: a machine-checked proof, review by human experts, journal peer review, and any prize decision. A Lean proof checks a formal statement. A person must still confirm that the formal statement says what the headline says. Write "reports" until human experts confirm a result. If you find no human check, say that you found none and give the date.

Paraphrase sources. Use a quotation only for a short phrase that the page needs, and credit the speaker.

## Build the page

Add an explainer to the homepage repository as one entry in `data/ai-math.json` and one body in `content/ai-math/<slug>.html`. Write math between `\(` and `\)` or between `\[` and `\]`. The build typesets it to native MathML with a pinned Temml. Do not load a typesetter in the browser. Do not put a formula in an image.

Load `v2/components.css` for the `--math` face and `.ui-equation`. Use `.ui-math-char` for a double-struck letter in a heading or other plain text. Put a formula that can overflow in `.ui-equation` with `data-scroll-region` and an accessible name.

Calculate figures during the build as inline SVG. Use the theme tokens, so that both color modes work. Give each figure an accessible name and a caption that states what it shows. Draw only what the mathematics or the data supports. If a quantity has an unknown constant, say so near the figure.

Check both color modes, print, keyboard focus, a narrow screen and the largest table. Run the owning repository's tests. A new explainer needs no new homepage entry, because the search crawl follows links from the landing page.

## Original technical writing

For original prose, use `jehlp-technical-writing` and `docs/WRITING-STYLE.md`.
Apply ASD-STE100 Issue 9 to explanations, instructions, help, and interface text.
Preserve translated and reader text, quotations, NDB fiction and item descriptions, and exact technical meaning.
Review generated outputs and accessible names after a text change.
