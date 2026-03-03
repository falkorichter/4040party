# Copilot Instructions for 4040party

## Project Overview

This is a **Jekyll** static site for a 40th birthday party landing page with an 80s retro theme.
It is hosted on GitHub Pages at https://falkorichter.github.io/4040party/.

## Tech Stack

- **Static site generator**: [Jekyll](https://jekyllrb.com/) (~4.4)
- **Templating**: Liquid (Jekyll's template engine)
- **Styling**: Plain CSS (`styles.css`) — no preprocessors, no JavaScript frameworks
- **Language**: Content is in **German**

## Project Structure

| Path | Purpose |
|---|---|
| `_config.yml` | Jekyll configuration (title, base URL, permalink pattern) |
| `Gemfile` | Ruby dependencies (Jekyll) |
| `_layouts/default.html` | Base HTML layout used by all pages |
| `_layouts/post.html` | Layout for individual news/blog posts |
| `_posts/` | Markdown news posts (filename format: `YYYY-MM-DD-slug.md`) |
| `index.html` | Main landing page (uses `default` layout with Liquid tags) |
| `styles.css` | All styling — 80s neon retro aesthetic |
| `assets/images/` | Static image assets |
| `gemini/` | Alternate version created by Gemini (not part of main site) |

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000/4040party/
```

## Conventions

- **Posts** use the `post` layout and require front matter with `layout`, `title`, and `date`.
- **Pages** use the `default` layout.
- The site uses a `baseurl` of `/4040party` — all internal links should use `{{ site.baseurl }}` prefix.
- The CSS uses neon colors: cyan (`#00d4ff`), magenta (`#ff00ff`), yellow (`#ffff00`), and green (`#00ff00`) against a dark navy background (`#0a0e27`).
- No JavaScript is used — all animations are CSS-only.
- All user-facing text is in German.
