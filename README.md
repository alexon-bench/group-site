# Group Site

A simple landing page for small, self-contained HTML tools.

## The safe way to add a tool

1. Ask ChatGPT to create one self-contained HTML file. Request plain HTML, CSS,
   and JavaScript with no external packages.
2. Save the new file in `public/tools/` with a short name such as
   `public/tools/my-tool.html`.
3. Open `app/page.tsx` and copy one item in the `tools` list near the top. Change
   its name, description, and link.
4. Preview the site and open the new tool before sharing your change.

Because every tool lives in its own file, changing one tool should not affect
the landing page or any other tool.

## Run the site

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. Stop the preview with `Ctrl+C`.

## Check a change

```bash
npm run build
```

The main page is in `app/page.tsx`, its styles are in `app/globals.css`, and all
standalone tools belong in `public/tools/`.
