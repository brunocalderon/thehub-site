# AGENTS.md: Snowpeak (Lexington Themes)

**Design rules:** [.cursor/skills/snowpeak-design/SKILL.md](./.cursor/skills/snowpeak-design/SKILL.md). Read it before creating or changing any UI.

**Snowpeak** is an Astro template for a design publication: a playful bento of rounded cards on a grey ground, a floating navigation bar that opens into a panel of large links, a home front with the lead story, this week's list and colour coded topic tiles, an article archive with topic filters, article pages with a members gate, editor profiles and minimal drawn covers. Plus Membership, Newsletter, Advertise, Write for us, About, Contact, Sign in, Sign up, Legal, a 404 and a system styleguide. The demo brand is Tratto, a weekly publication on type, interfaces and identity.

## Tech stack

| Area | Details |
|------|---------|
| **Framework** | [Astro](https://astro.build/) 7 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 4 via `@tailwindcss/vite` |
| **Content** | Markdown content collections in `src/content.config.ts` |
| **Integrations** | `@astrojs/sitemap`, `@astrojs/rss` |
| **Tailwind plugins** | `@tailwindcss/forms`, `@tailwindcss/typography` (the article prose) |
| **Scripts** | `lenis` (smooth scroll, in `BaseLayout`), `reading-time` (article reading time) |
| **Images** | `sharp` (Astro image service) |
| **SEO** | `@lexingtonthemes/seo` (`AstroSeo` in `src/components/fundations/head/Seo.astro`) |
| **Aliases** | `@/*` maps to `src/*` (`tsconfig.json`) |

## Folder map

| Path | Role |
|------|------|
| `src/pages/` | Routes. Every page is composed of section components |
| `src/layouts/` | `BaseLayout`, `ArticleLayout`, `AuthorLayout`, `LegalLayout` |
| `src/components/` | `fundations/` (design system), `global/` (navigation, footer, 404), `home/`, `articles/`, `topics/`, `authors/`, `membership/`, `newsletter/`, `advertise/`, `write/`, `about/`, `contact/`, `auth/`, `legal/`, `ads/`, `system/`, `assets/` (the `BigLogo` wordmark) |
| `src/content/` | Markdown sources for the `articles`, `authors` and `legal` collections |
| `src/lib/` | `topics.ts` (the topic list, names, descriptions and colour grounds), `articles.ts` (sorted list, dates, reading time), `authors.ts` (editors sorted with their article count) |
| `src/styles/global.css` | Tailwind, plugins, `@theme` tokens (colours, fonts, sizes), the `h-screen-inset` and `list-disc-dot` utilities, the nav animations |
| `src/images/` | `covers/` (one drawn SVG per article) and `authors/` (drawn portraits) |

## Colour tokens (`src/styles/global.css`)

`background` (the grey page ground), `foreground` (near-black text and the dark cards), `muted` (hovers and inner panels on the white cards), `muted-foreground` (secondary text and form fields on dark), `accent` (purple), `orange` and `pink`. Each topic owns one colour ground in `src/lib/topics.ts`: Type on accent, Interfaces on orange, Identity on pink, Studios on foreground. Use opacity modifiers instead of new tokens, and keep `/system/colors` in sync.

## Fonts

`--font-display` is Stack Sans Notch (Google Fonts) for headings, buttons and meta; `--font-sans` is Inter for body text and prose. Both load in `fundations/head/Fonts.astro`.

## Content collections (`src/content.config.ts`)

IDs are the filename without `.md`.

- **`articles`**: `title`, `pubDate`, `description`, `author` (reference to `authors`), `cover { url, alt }`, `topics` (values from `src/lib/topics.ts`, the first one sets the colour), `isFeatured` (the home lead), `isMembersOnly` (shows the members gate instead of the text). Template: `src/content/articles/the-toolbar-is-back.md`.
- **`authors`**: `name`, `role`, `bio`, `portrait { url, alt }`. Template: `src/content/authors/lucia-navarro.md`.
- **`legal`**: `page`, `pubDate`. Template: `src/content/legal/terms.md`.

Do not widen a schema without updating every page, layout and card that reads `entry.data`.

## Routing

| URL | Source |
|-----|--------|
| `/` | `src/pages/index.astro`: masthead, lead story, this week, topics, newsletter |
| `/articles`, `/articles/members` | Archive and members only archive (`ArticleArchive`) |
| `/articles/[id]` | Article page (`ArticleLayout`) |
| `/topics`, `/topics/[topic]` | Topic list and one archive per topic in `src/lib/topics.ts` |
| `/authors`, `/authors/[id]` | Editors and editor profile (`AuthorLayout`) |
| `/legal/[id]` | Terms, privacy, cookies and FAQ (`LegalLayout`) |
| `/rss.xml` | Built from the `articles` collection |
| `/system/*` | Styleguide: `overview`, `colors`, `typography`, `buttons`, `links` |
| Other | `about`, `membership`, `newsletter`, `advertise`, `write-for-us`, `contact`, `sign-in`, `sign-up`, `404` |

## Customization

- **Site URL:** `site` in `astro.config.mjs`, plus the placeholders in `Seo.astro`.
- **Colours and type:** the `@theme` block in `src/styles/global.css`, fonts loaded in `Fonts.astro`.
- **Topics:** `src/lib/topics.ts`; the navigation filters, topic pages and home tiles build from that list.
- **Navigation and footer:** `src/components/global/Navigation.astro` (links, open state kept in `localStorage`) and `src/components/global/Footer.astro`.
- **Covers and portraits:** replace the SVGs in `src/images/covers/` and `src/images/authors/`, or point the frontmatter at photos.
- **Shell:** `src/layouts/BaseLayout.astro` (nav and footer toggles, Lenis) and `src/components/fundations/head/BaseHead.astro`.

## Commands

- `npm install`: dependencies
- `npm run dev`: dev server
- `npm run build`: build to `./dist/`
- `npm run preview`: preview the build

## Git

When creating git commits, follow the **git-commit** skill at `~/.agents/skills/git-commit/SKILL.md` (Conventional Commits: analyze the diff, choose type/scope, imperative summary).

## Guardrails

- Keep the folder name **`fundations`** as spelled.
- Pages only compose section components; new sections go in `src/components/<area>/`.
- Colours only through the tokens above. No arbitrary Tailwind values, no `@apply`, no `mb-*`, one spacing value per property (no `mt-12 lg:mt-16`).
- External links in demo content use `href="#_"`.

## Lexington links

- Theme: https://lexingtonthemes.com/templates/snowpeak
- Documentation: https://lexingtonthemes.com/documentation
- Changelog: https://lexingtonthemes.com/changelog/snowpeak
- Support: https://lexingtonthemes.com/legal/support/
