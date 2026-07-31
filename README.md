# Group Site

A simple GitHub Pages landing page for small, self-contained HTML tools.

Live site: <https://alexon-bench.github.io/group-site/>

## Add a tool

1. Ask ChatGPT to create one self-contained HTML file using plain HTML, CSS,
   and JavaScript with no external packages.
2. Save the file in `tools/` with a short name, such as `tools/my-tool.html`.
3. Open `index.html`, copy the existing `tool-card` link, and change its name,
   description, and `href`.
4. Open `index.html` in a browser and test the new tool before committing.

Because each tool lives in its own file, changing one tool does not affect the
landing page or the other tools.

## Project structure

```text
index.html              Landing page content and tool links
styles.css              Landing page appearance
tools/                  Independent HTML tools
favicon.svg             Browser tab icon
.nojekyll                Tells GitHub Pages to serve files directly
```

There is no build step and there are no packages to install. GitHub Pages serves
these files directly from the `main` branch.
