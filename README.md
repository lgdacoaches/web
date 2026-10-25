# LGDA FC website

Plain HTML, CSS and a little JavaScript. No build step: open `index.html`, or upload the folder to any static host (Netlify, Cloudflare Pages, GitHub Pages, or ordinary web hosting).

Pages: `index.html`, `about.html`, `under-14s.html`, `calendar.html`

## To finish before launch
- `assets/images/badge.png` – the original club badge, unaltered (header on every page)
- `assets/images/fa-accredited.jpg` – England Football Accredited logo (footer on every page)
- `assets/docs/` – download the PDFs from the old site and save with these names: young-players, spectators-and-parents, coaches-and-officials, anti-bullying-policy, photography-guidelines, safeguarding-policy, privacy-policy (all `.pdf`).
  Note: on the old site the Photography Guidelines and Safeguarding Policy buttons point at the same file, so check the right document is saved for each.
- Placeholders (dashed blue boxes, `.ph`) – replace each with `<img src="assets/images/..." alt="...">`; images are cropped to fit automatically
- Instagram: set the Follow button URL and swap the grid for a feed embed/widget
- Team links on the homepage are `#` until those pages exist; `under-14s.html` is the template for them
- Sponsor captions and player names in square brackets
- The Under 14s "The squad" section is optional: delete the section if not needed
- Calendar: `calendar.html` has no link from the other pages' menus yet. Dates are plain text in that file, so update it each season. Collapse/expand works with no setup; the current month opens automatically.
- See `carousel-readme.md` for the homepage carousel photos
