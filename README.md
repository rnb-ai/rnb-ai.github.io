# R&B.AI website

Source of the R&B.AI website, published at **https://rnb-ai.org**.

R&B.AI is a French non-profit association (loi 1901) whose mission is to promote, study and develop artificial intelligence and computer science, in the open.

## Structure

```
.
├── _config.yml              Site settings (Jekyll)
├── _data/
│   └── navigation.yml       Main navigation links
├── _layouts/
│   └── default.html         Page skeleton: <head>, header, footer
├── _includes/
│   ├── header.html          Logo, navigation and header button
│   └── footer.html          Organisation details (RNA/SIREN), address, links
├── index.html               Home page
├── about.html               Mission statement, values, registered details, statutory purpose and board
├── programs.html            Programs: open benchmarks, research commons, collective action, awareness & support
├── community.html           Community and how to contribute
├── contact.html             Email, postal address and registration details
├── legal-notice.html        Legal notice
├── assets/
│   ├── css/style.css        Styles and animations for all pages
│   ├── js/script.js         Scroll-reveal animations and metric counters
│   └── img/
│       ├── logo.svg         Logo
│       └── icon.ico         Favicon
├── .github/workflows/
│   └── pages.yml            Build and deployment to GitHub Pages
├── LICENSE                  MIT License (code)
├── LICENSE-CONTENT          CC BY 4.0 (text content)
└── README.md
```

The pages stay at the root so that their URLs (e.g. `/about.html`) do not change. Files starting with `_` or `.`, `README.md` and the license files are not published.

## Editing the site

- **Page content:** each page holds only its own content, inside `<main>`. A short block at the top of the file sets the page's title and description:

  ```yaml
  ---
  title: "About"
  description: "About R&B.AI: mission statement, values, ..."
  ---
  ```

  The home page uses `full_title` instead of `title`, and the contact page sets `header_button: email` to show "Say hello" in the header.
- **Header, footer and navigation:** edit them once in `_includes/` and `_data/navigation.yml`; every page picks up the change.
- **Styles and scripts:** `assets/css/style.css` and `assets/js/script.js`. Fonts come from Google Fonts and icons from Font Awesome (via cdnjs).

## Run locally

Previewing requires [Jekyll](https://jekyllrb.com/docs/installation/) (Ruby):

```sh
gem install jekyll
jekyll serve
```

Then visit http://localhost:4000.

## Deployment

Every push to `main` builds the site with Jekyll and deploys it to GitHub Pages through the `Deploy Jekyll site to Pages` workflow. It can also be run manually from the Actions tab.

## License

- **Code** (HTML templates, CSS, JavaScript, configuration): [MIT License](LICENSE).
- **Text content** of the pages: [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-CONTENT). You may reuse and adapt it, provided you credit R&B.AI and link to https://rnb-ai.org.
- **Name and logo:** the R&B.AI name, logo (`assets/img/logo.svg`) and favicon (`assets/img/icon.ico`) are not covered by these licenses and may not be used without permission.

## Contact

contact@rnb-ai.org
