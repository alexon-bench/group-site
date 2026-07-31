# MTech Tools

A simple, shared home for small web tools created by the MTech group.

Live site: <https://alexon-bench.github.io/group-site/>

## Choose your path

- **No Git experience:** read [CONTRIBUTING.md](CONTRIBUTING.md), create one HTML
  file with any AI assistant or editor, and send the finished file to the site
  maintainer.
- **Using an AI assistant:** give it the complete
  [LLM Tool Guide](LLM-TOOL-GUIDE.md) before describing the tool you want.
- **Comfortable with GitHub:** work on a separate branch and open a pull request.

## Project structure

```text
index.html              Landing page and tool links
styles.css              Landing page appearance
tools/                  Independent, self-contained tools
tools/_template.html    Safe starting point for a new tool
CONTRIBUTING.md          Human contribution instructions
LLM-TOOL-GUIDE.md       Provider-neutral AI safety brief
.nojekyll                Direct GitHub Pages publishing
```

There is no build step and there are no packages to install. GitHub Pages serves
the files directly from `main`.
