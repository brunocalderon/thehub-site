---
name: snowpeak-design
description: Snowpeak's design system: typography, color, spacing, and component rules. Use whenever creating or modifying UI in this theme (new pages, sections, components) so the result matches Snowpeak's visual language.
---

# Snowpeak design system

Snowpeak is a design publication theme built as a playful bento: rounded
cards packed together with tight gutters on a grey ground, notched display
type, pill buttons with a rolling label, and four loud colours that each
belong to a topic. New UI here should be indistinguishable from the
existing pages.

## Design personality

- A bento, not open sections: every block is a card (`rounded-4xl`) and
  cards sit `gap-2` apart. The grey `background` shows only in the gutters.
- Colour means topic. Type is accent, Interfaces orange, Identity pink,
  Studios foreground (`src/lib/topics.ts`, the `ground` classes), used on
  topic tiles, topic bands and covers. Page headers are always dark
  (`bg-foreground text-white`); only the auth pages and the 404 open on
  a colour card.
- Energy in the details: the navigation is a blurred bar centred at the
  top that opens into a panel of large links, button labels roll on hover,
  the + turns into a cross.
  Article covers morph between pages with native view transitions
  (`@view-transition` in `global.css`, `view-transition-name: cover-<id>`).
- Drawings, not photos: covers and portraits are minimal flat SVGs, one
  small object centred on a colour ground.

## Typography

Two fonts, wired in the `@theme` block of `src/styles/global.css` and
loaded in `fundations/head/Fonts.astro`. Never introduce another font.

- **Stack Sans Notch** (`font-display`): every heading, button, meta line
  and input. Headings add `font-display` explicitly.
- **Inter** (`font-sans`, the default): body copy and prose.

Always use `Text` (`fundations/elements/Text.astro`) and only the tags in
its `Props`. The recurring sizes:

- Page title: `tag="h1" variant="display2XL"`, `text-balance`.
- Section heading: `displayXL`; card headings `displayMD` or `displaySM`.
- Intro under a title: `textLG font-display`, at `opacity-75` on colour
  grounds or `text-muted` on dark.
- Meta (topic, date, reading time): `textSM` or `textXS font-display`,
  written as `Type / 2 min read`.

Normal case everywhere: no uppercase, no kickers or labels above headings.
`tracking-tight` is for large text only, never base size or smaller.

## Color system

Seven tokens in `src/styles/global.css`, nothing else:

- `background`: the grey page ground, seen only between cards.
- `foreground`: text on light cards and the dark cards.
- `muted`: hovers on white cards, inner panels inside a white card,
  dividers (`divide-muted`).
- `muted-foreground`: secondary text, and form fields on dark cards.
- `accent`, `orange`, `pink`: topic grounds, buttons and focus rings.

Light cards are `bg-white`, never `bg-muted`. Text on accent, pink and
foreground is white; on orange and white it is `foreground`.

## Layout and spacing

- Every section is a `<section>` (ground classes only) wrapping
  `Wrapper variant="standard"`.
- Every section uses `pt-2` on its `Wrapper`, the first one included, so
  cards keep one `gap-2` rhythm from the top of the page. The navigation
  floats over the first card, which takes `px-8 pt-16 pb-8 lg:p-16` so
  its content clears the nav on mobile.
- Card padding: `p-8 lg:p-12` or `lg:p-16` for page headers.
- Cards never take an aspect ratio or a fixed height: they size to their
  content. A number or year above a title is spaced with `gap-32`, never
  `justify-between`, so titles in a row start at the same height.
- Splits use `lg:grid-cols-2` or the 12 column grid, blocks filling it.
  Grids of article cards must fill their last row (two leads, then rows
  of three).

## Images

- Inset images sit in a card with `p-2` and take `rounded-3xl` inside the
  `rounded-4xl` card. Full images take `rounded-4xl`.
- Covers are 1200 by 800 SVGs in `src/images/covers/`: one small flat
  object centred on the article's topic colour, drawn with foreground,
  white and white at 30% opacity. Portraits are 800 by 800 in
  `src/images/authors/`, a flat head and shoulders with no face.
- Request the source size from Astro `<Image>` and crop with CSS.

## Components

Reuse before writing anything new:

- **ArticleCard** (`articles/`): sizes `base` and `lg`, white card that
  turns muted on hover. Use it for every list of articles.
- **ArticleArchive** (`articles/`): dark page header, topic
  filters, two leads and rows of three.
- **TopicLinks** (`topics/`): the pill filter row.
- **NewsletterForm** (`newsletter/`): the large field and icon button.
- **Button** (`fundations/elements/Button.astro`): variants `default`,
  `accent`, `pink`, `orange`, `muted`, `none`; sizes `xxs` to `xxl`, plus
  `iconOnly`. The label rolls on hover; never animate the radius. Arrows
  in buttons are always `ChevronRight`. A card with a link shows a muted
  icon button, never a bare arrow.
- **BigLogo** (`assets/`): the outlined wordmark.
- Icons live in `fundations/icons/` as Astro components, never text glyphs.

## Voice and copy

Like a good design editor: specific, warm, a little dry. Sentence case,
no exclamation marks, no emoji. People get Spanish, Nordic or Italian
names. No em dashes or middle dots.

## Do / Don't

Do:

- Put every block in a card and keep `gap-2` between cards.
- Let the topic pick the colour.
- Pair a dark card with a colour card or a drawing.

Don't:

- Don't use uppercase, kickers or a row of buttons.
- Don't use a hover radius change, shadows or gradients.
- Don't nest a card inside a card of the same role.
- Don't add progress bars, meters or coloured bars.

## Quality check before finishing

1. Fonts, colours and spacing come from existing tokens and match a
   sibling section.
2. The section reads at `sm`, `md` and `lg`; grids stack on mobile and
   fill their last row.
3. Nested radii are concentric, nothing is uppercase.
4. No new dependencies, no unused imports, minimal diff.
