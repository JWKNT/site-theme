---
name: jehlp-human-mark
description: "Mark a jehlp.net passage that the owner wrote with the shared human mark, a bracket in the right margin with a human figure, and keep the owner's exact words."
---

# jehlp-human-mark

AI writes and programs everything on jehlp.net under the owner's supervision. The human mark identifies the exceptions. The homepage introduction says this in the owner's words, and it carries the mark.

Read the theme's PHILOSOPHY.md and the human mark contract in docs/COMPONENTS.md. Locate site-theme beside the current repository, or resolve this skill's real path to its owning site-theme checkout.

## Decide

Use the mark when the owner gives text that the owner wrote and asks to show it as the owner's. Do not put it on text that AI wrote, translated, summarized or edited. Do not remove it from the owner's text. If you do not know who wrote a passage, ask the owner.

Keep the owner's words exactly, with their spelling, punctuation and capitals. Do not apply ASD-STE100 or the other writing rules of the site to them. A page can mix the owner's text and AI text. Mark each block of the owner's text.

## Apply

Load `v2/components.css` after `v2/base.css`. Add `class="ui-human"` to the block that holds the owner's words. Put one mark inside it:

```html
<div class="ui-human">
  <p>Text that the owner wrote.</p>
  <span class="ui-human-mark" role="img" aria-label="Written by a human" title="Written by a human"></span>
</div>
```

The stylesheet draws a square bracket in the right margin of the block and the figure from `v2/icons/human.svg` beside it. The block reserves that margin with right padding. The mark size follows the text size. To change it, set `--human-mark-size` on the block. Where the page has a right margin with room for the mark, set `--human-mark-hang` on the block to move the mark into that margin. The homepage does this on wide screens. Mark a whole block, not a phrase inside a sentence. Use the shared figure. Do not draw it again, and do not replace it with an emoji or a Unicode glyph.

A generator renders the same markup during the build. An offline export keeps `components.css` and `icons/human.svg` together, because the stylesheet loads the figure by a relative URL.

## Check

Check the mark in both color modes, on a narrow screen and at 200% text. The bracket must not cover text. A screen reader must announce "Written by a human". Run the owning repository's tests.

## Original technical writing

For original prose, use `jehlp-technical-writing` and `docs/WRITING-STYLE.md`.
Apply ASD-STE100 Issue 9 to explanations, instructions, help, and interface text.
Preserve translated and reader text, quotations, NDB fiction and item descriptions, and exact technical meaning.
Review generated outputs and accessible names after a text change.
