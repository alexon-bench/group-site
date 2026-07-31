# Contributing a tool to MTech

You do not need to know Git or write code from scratch. Every MTech tool is one
self-contained HTML file, which keeps changes small and prevents one tool from
breaking another.

## Safest path: no Git required

1. Open [LLM-TOOL-GUIDE.md](LLM-TOOL-GUIDE.md) and copy the entire document.
2. Paste it into Claude, ChatGPT, Codex, or another assistant.
3. Tell the assistant what your tool should do.
4. Ask for the completed `.html` file, not a code snippet spread across several
   files.
5. Open the file in a browser and try every button, field, and link.
6. Send the maintainer:
   - the finished HTML file;
   - the tool name;
   - a one-sentence description; and
   - any information the tool saves, sends, or downloads.

The maintainer will review the file, place it in `tools/`, preserve the standard
MTech top navigation, and add its card to the landing page. You never need to
edit the shared home page.

## GitHub path

Use this path only if you are comfortable with GitHub Desktop or branches.

1. Create a new branch with a short name such as `tool/meeting-timer`.
2. Copy `tools/_template.html` to `tools/your-tool-name.html`.
3. Change only your new tool file while building and testing it.
4. Keep the complete `MTECH TOP BAR START` through `MTECH TOP BAR END` block
   from the template unchanged.
5. If the request says to add, publish, or integrate the tool, copy one card
   between the `MTECH TOOL CARDS START` and `MTECH TOOL CARDS END` comments in
   `index.html`. A tool is not published until this card exists.
6. Run `node scripts/check-site.mjs`. It confirms that every tool is listed and
   uses the standard navigation.
7. Do not edit `styles.css`, another tool, `.nojekyll`, or repository settings.
8. Commit to your branch, push it, and open a pull request. Do not force-push to
   `main`.

## Before submitting

- The tool works by opening its HTML file directly in a browser.
- It remains usable on a phone-sized screen.
- Every input has a visible label.
- Keyboard users can reach every control.
- User-entered content is not sent elsewhere unless the interface clearly says
  where it goes and the maintainer approved that behavior.
- No passwords, access tokens, private links, or personal data are included.
- No packages, frameworks, build steps, or remote scripts were added.
- The MTech top bar matches `tools/_template.html`.
- The landing page includes exactly one card for every published tool.
- Only the expected files changed.

GitHub automatically runs the same tool-and-navigation check on proposed and
published changes. If it turns red, open its message; it names the missing card
or navigation item directly.

If anything unexpected happens, stop. Do not delete shared files, rewrite Git
history, or use force-push as a repair. Ask the maintainer for help.
