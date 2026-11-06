# CAPAstro website

Showcase site for CAPAstro's astronomy software, using the Mission control theme.

Plain static HTML, CSS and JS with no build step.

## Editing

- **Projects:** `js/projects.js` holds every card and detail window. Replace the `TODO` text, set `status` (`online`, `beta`, `dev`), add `links`, and point `image` at a screenshot in `images/`.
- **About and contact:** in `index.html` (look for `EDIT` comments).
- **Colours and fonts:** the `:root` block at the top of `css/styles.css`.

## Preview locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## Hosting

Upload the folder as-is to GitHub Pages, Netlify, Cloudflare Pages or any web host.
