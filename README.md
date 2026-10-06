# Justin Jin Personal Homepage Template

A clean academic homepage: white background, gray body text, blue links, a profile sidebar on the left, and Bio / News / Publications / Preprint sections on the right. Written from scratch as static HTML + CSS, with no dependency on Jekyll, Node.js, or third-party CDNs.

## Viewing Locally

Double-click `index.html` to open it in a browser. The `CV` link opens the editable `cv.html`, which can be printed or saved as a PDF.

You can also start a local server from this directory:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open http://127.0.0.1:8000 .

## Editing Content

- `index.html`: name, bio, contact info, news, publications, and preprints. Every `[...]` is a placeholder to replace and does not represent real experience. If you have no publications yet, delete the corresponding entries or the whole section.
- `cv.html`: CV content; its placeholders also need to be replaced.
- `assets/style.css`: colors, font sizes, spacing, and mobile layout.
- `assets/favicon.svg`: the JJ icon shown in the browser tab.
- `files/`: storage for your CV and paper PDFs.

### Adding a Photo

Save your photo as `assets/avatar.jpg`, then in `index.html` replace the entire avatar placeholder div with:

```html
<img class="avatar" src="assets/avatar.jpg" alt="Justin Jin">
```

The avatar is a vertical oval by default. For a circle, set the `.avatar` height equal to its width in the stylesheet, and update the sizes in the media query to match.

### Adding Email and Paper Links

Replace the span for `[Your email]` with a real email link:

```html
<a href="mailto:yourname@example.com">Email</a>
```

Paper resources are currently plain placeholder text to avoid misleading empty links. Once your files are ready, replace the corresponding `.resource-placeholder` span with real links, for example:

```html
<a href="files/paper.pdf">PDF</a> · <a href="https://github.com/JustinJin04/REPOSITORY">Code</a>
```

If you already have a PDF CV, save it as `files/CV.pdf` and change the `cv.html` links on the homepage to `files/CV.pdf`.

## Publishing to GitHub Pages

1. Using the GitHub account `JustinJin04`, create a repository named `JustinJin04.github.io`.
2. Upload the contents of this directory to the repository root, making sure `index.html` sits directly at the root, and keep `.nojekyll`.
3. In the repository's Settings → Pages, choose to deploy from a branch and select the root `/ (root)` of the `main` branch.
4. Once GitHub finishes deploying, visit https://JustinJin04.github.io/ .

This template was created locally only; nothing has been uploaded or published automatically. Before publishing, replace the placeholder content, check the links, and update the footer year. Do not upload private files to a public repository.

## Style Notes

Uses system fonts with no external font or script requests. The GitHub link points to the username you specified.
