---
name: jehlp-code-highlighting
description: "Show source code and structured data on jehlp.net pages with build-time syntax highlighting, the shared code palette and native disclosures."
---

# jehlp-code-highlighting

Read the owning repository's AGENTS.md, the theme's PHILOSOPHY.md and the code contract in docs/COMPONENTS.md. Locate site-theme beside the current repository, or resolve this skill's real path to its owning site-theme checkout.

Highlight code during the build. Use highlight.js at a pinned version as a development dependency. Do not load a highlighter or a highlight.js theme in the browser. Choose the language from the file extension, and use plain text when the language is unknown. Highlighting adds spans only: compare the text content with the source after a change.

Use the shared markup: `<pre class="ui-code" tabindex="0" aria-label="Source of name.py"><code class="hljs language-python">…</code></pre>`. Load `v2/components.css` after base.css. The `--code-*` tokens in base.css follow the theme tones, so dark mode and print need no second palette. Do not add token backgrounds, line shading, bold keywords or a page-specific syntax theme. Long lines scroll inside the named code block. Use `.ui-code--wrap` for data whose values are prose, such as pretty-printed JSON notes.

Render one or two listings in the page. For a large collection, put each listing in a native `details` element with the file name in its summary. Generate one static fragment per listing and fetch it on the first open. Keep a plain-text source link in the closed panel, so the listing remains available without JavaScript. Link fragments for search only when their text is useful search content.

Format JSON with two-space indentation before you highlight it. Render Markdown and prose notes as prose, not as code. Add `data-copy-code` when readers will copy the listing. Do not reduce the type size to fit long lines.

Check both color modes, print, keyboard focus on the code block, a narrow screen and the largest listing. Record new adopters in docs/COMPONENTS.md.

## Original technical writing

For original prose, use `jehlp-technical-writing` and `docs/WRITING-STYLE.md`.
Apply ASD-STE100 Issue 9 to explanations, instructions, help, and interface text.
Preserve translated and reader text, quotations, NDB fiction and item descriptions, and exact technical meaning.
Review generated outputs and accessible names after a text change.
