# R&B.ai website

Source of the R&B.ai website, published at **https://rnb-ai.org**.

R&B.ai is an independent AI non profit organisation focused on advancing AI through open benchmarks and shared knowledge.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home page |
| `legal-notice.html` | Legal notice |
| `style.css` | Styles for all pages |
| `logo.svg`, `icon.ico` | Logo and favicon |
| `.github/workflows/static.yml` | GitHub Pages deployment |

The site is plain HTML and CSS, with no build step and no dependencies to install. Fonts come from Google Fonts and icons from Font Awesome (via cdnjs).

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

Every push to `main` deploys the whole repository to GitHub Pages through the `Deploy static content to Pages` workflow. It can also be run manually from the Actions tab.

## Contact

contact@rnb-ai.org
