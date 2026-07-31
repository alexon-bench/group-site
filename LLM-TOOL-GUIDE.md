# MTech tool-building guide for any AI assistant

Give this entire document to the AI assistant you choose before asking it to
create or modify an MTech tool.

---

## Instructions for the assistant

You are working with the MTech tools repository, a static GitHub Pages site.
Your priority is to create a useful standalone tool without changing or
destabilizing the shared site.

### Default scope: create one file only

For a new tool, create exactly one file. Use a lowercase, hyphen-separated
filename so its case-sensitive GitHub Pages URL is easy to reproduce:

```text
tools/<short-descriptive-name>.html
```

The file must contain all of its HTML, CSS, and JavaScript. Start from
`tools/_template.html` when repository access is available.

Unless the user explicitly requests integration, do not edit any other file.

Creating, integrating, committing, pushing, and deploying are different tasks.
Use those terms precisely. Do not describe a tool as integrated until its file
and landing-page card both exist and the repository check passes. Do not
describe it as published or live until the GitHub Pages checks below pass.

### Files that are globally protected

Do not modify, rename, move, replace, or delete any of these unless the user
explicitly names the file and requests that exact change:

```text
index.html
styles.css
.nojekyll
README.md
CONTRIBUTING.md
LLM-TOOL-GUIDE.md
favicon.svg
all existing files in tools/
```

Never broadly reformat the repository. Never replace the site architecture.
Never initialize a framework, package manager, database, authentication system,
or build process.

### Git safety

Do not run `git pull`, `git add`, `git commit`, `git push`, `git merge`,
`git rebase`, `git reset`, or `git clean` unless the user explicitly asks for
that specific Git action. Never force-push. Never rewrite history.

The clearest end-to-end authorization is:

> Stage, commit, push, and publish this tool, then verify GitHub Pages.

That sentence authorizes `git add` for the reported tool and integration files,
one normal `git commit`, and `git push` of the current branch. It does not
authorize pull, merge, rebase, reset, clean, force-push, unrelated files, or
credential extraction. If authentication blocks the push, stop and tell the
user what authenticated action remains; do not work around account security.

Before reporting completion, list every changed file. For the default new-tool
task, that list must contain exactly one new HTML file.

### Tool requirements

The tool must:

- work by opening its HTML file directly in a modern browser;
- use plain HTML, CSS, and JavaScript with no build step;
- avoid external packages, CDNs, remote scripts, remote fonts, and analytics;
- use relative links, including `../index.html` for the return link;
- preserve the complete `MTECH TOP BAR START` through `MTECH TOP BAR END`
  block from `tools/_template.html`, including its links and
  `data-mtech-nav="v1"` marker;
- preserve the complete `MTECH TOP BAR STYLES START` through
  `MTECH TOP BAR STYLES END` CSS block from `tools/_template.html`;
- be responsive and comfortable on narrow screens;
- use semantic HTML and visible labels for form controls;
- support keyboard navigation and visible focus states;
- respect `prefers-reduced-motion` if it uses motion;
- explain any local browser storage it uses;
- keep user content in the browser unless external transmission is explicitly
  required, approved, and clearly disclosed in the interface;
- contain no secrets, credentials, personal data, or environment values; and
- use a clear title and a short explanation of what it does.

Do not add network requests, uploads, authentication, cookies, tracking, or
third-party embeds unless the user explicitly requests them and the maintainer
approves them.

### Landing-page integration mode

Treat requests to **add**, **publish**, **integrate**, or **put a tool on the
MTech site** as explicit requests to link the finished tool on the home page.
The word **publish** activates landing-page integration, but it does not by
itself authorize Git commands. In integration mode, you may edit `index.html`
as follows:

1. Change only the content between the `MTECH TOOL CARDS START` and
   `MTECH TOOL CARDS END` comments.
2. Copy the existing card structure; do not invent global markup or CSS.
3. Use a relative link such as `./tools/my-tool.html`.
4. Do not edit `styles.css`.
5. Do not reorder, rewrite, or remove existing cards.

Integration mode should change only the new tool file and the marked card area
inside `index.html`.

Before reporting that an integrated tool is finished, run:

```text
node scripts/check-site.mjs
```

This dependency-free check confirms that every HTML tool has exactly one home
page card and uses the standard MTech top-navigation markup and styles. Do not
report the tool as integrated if this check fails.

### GitHub Pages publication

Only enter this phase when the user has explicitly authorized `git add`,
`git commit`, and `git push`, preferably with the end-to-end sentence in the
Git safety section.

1. Run `node scripts/check-site.mjs` and stop if it fails.
2. Review `git status` and stage only the files named in the handoff.
3. Create one normal commit without amending or rewriting history.
4. Push the current branch without force-pushing.
5. Record the pushed commit hash and wait for the GitHub Pages deployment for
   that exact commit to complete successfully.
6. Verify the live site with a cache-busting query such as `?v=<commit>`:
   - the homepage contains exactly one card for the new tool;
   - the card opens the exact, case-sensitive tool URL successfully;
   - the tool's MTech Home, Tools, Contribute, and GitHub links work; and
   - the browser reports no console errors.

Do not report the tool as published or live before all six steps succeed. A
queued deployment is pending, not published. If GitHub authentication or Pages
deployment blocks completion, report the exact remaining state without making
another commit merely to retry deployment.

### Required handoff

When finished, provide:

1. the tool filename;
2. a one-sentence description for its landing-page card;
3. a short list of behaviors tested;
4. any storage, downloads, or network behavior; and
5. the complete list of changed files.

For integration mode, also report whether `node scripts/check-site.mjs`
passed. The automatic GitHub check will repeat the same validation after the
change is pushed.

For publication mode, also provide the commit hash, Pages deployment result,
live homepage URL, and live tool URL. State plainly if any of these remain
pending.

If the request conflicts with these boundaries, stop and ask the user or MTech
maintainer for approval. Do not widen your own scope.

---

After providing this guide, describe the tool you want in plain language. For
example:

> Create a meeting timer with large start, pause, and reset controls. Keep all
> timing data in the browser. Follow the MTech tool-building guide exactly.

To request complete integration and publication, append:

> Add this tool to the MTech homepage. Run the site check, stage the reported
> files, commit, push, publish, and verify the live homepage and tool URL.
