import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const toolsDirectory = join(root, "tools");
const index = await readFile(join(root, "index.html"), "utf8");
const template = await readFile(join(toolsDirectory, "_template.html"), "utf8");
const filenames = (await readdir(toolsDirectory))
  .filter((filename) => filename.endsWith(".html") && filename !== "_template.html")
  .sort();

const errors = [];
const requiredNavigation = [
  'data-mtech-nav="v1"',
  'href="../index.html"',
  'href="../index.html#tools"',
  'href="../index.html#contribute"',
  'href="https://github.com/alexon-bench/group-site"',
];

function count(text, fragment) {
  return text.split(fragment).length - 1;
}

function checkNavigation(filename, html) {
  for (const fragment of requiredNavigation) {
    if (!html.includes(fragment)) {
      errors.push(`${filename} is missing the standard MTech navigation fragment: ${fragment}`);
    }
  }
}

function navigationMarkup(filename, html) {
  const match = html.match(
    /<!-- MTECH TOP BAR START:[^>]*-->([\s\S]*?)<!-- MTECH TOP BAR END -->/,
  );

  if (!match) {
    errors.push(`${filename} is missing the protected MTech top-bar block.`);
    return "";
  }

  return match[1].replace(/\s+/g, " ").trim();
}

function navigationStyles(filename, html) {
  const match = html.match(
    /\/\* MTECH TOP BAR STYLES START:[^*]*\*\/([\s\S]*?)\/\* MTECH TOP BAR STYLES END \*\//,
  );

  if (!match) {
    errors.push(`${filename} is missing the protected MTech top-bar styles.`);
    return "";
  }

  return match[1].replace(/\s+/g, " ").trim();
}

if (!index.includes('data-mtech-nav="v1"')) {
  errors.push("index.html is missing the standard MTech navigation marker.");
}

checkNavigation("tools/_template.html", template);
const standardNavigation = navigationMarkup("tools/_template.html", template);
const standardNavigationStyles = navigationStyles("tools/_template.html", template);

for (const filename of filenames) {
  const html = await readFile(join(toolsDirectory, filename), "utf8");
  const cardLink = `href="./tools/${filename}"`;

  if (count(index, cardLink) !== 1) {
    errors.push(`index.html must link to tools/${filename} exactly once.`);
  }

  checkNavigation(`tools/${filename}`, html);
  const toolNavigation = navigationMarkup(`tools/${filename}`, html);
  if (toolNavigation && toolNavigation !== standardNavigation) {
    errors.push(`tools/${filename} does not match the template's MTech top-bar markup.`);
  }
  const toolNavigationStyles = navigationStyles(`tools/${filename}`, html);
  if (toolNavigationStyles && toolNavigationStyles !== standardNavigationStyles) {
    errors.push(`tools/${filename} does not match the template's MTech top-bar styles.`);
  }
}

const cardFilenames = [...index.matchAll(/href="\.\/tools\/([^"/]+\.html)"/g)]
  .map((match) => match[1]);

for (const filename of cardFilenames) {
  if (!filenames.includes(filename)) {
    errors.push(`index.html links to missing tool file: tools/${filename}`);
  }
}

if (errors.length > 0) {
  console.error("MTech site check failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`MTech site check passed: ${filenames.length} tools are linked and use navigation v1.`);
}
