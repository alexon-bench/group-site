import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome | Group Site",
  description: "A simple home for small, useful web tools.",
};

// Add new tools here. Each tool can stay in its own HTML file inside public/tools.
const tools = [
  {
    name: "Text counter",
    description: "Count words, characters, and lines without sending text anywhere.",
    href: "/tools/text-counter.html",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header wrap">
        <a className="brand" href="#top" aria-label="Group Site home">
          Group Site
        </a>
        <nav aria-label="Main navigation">
          <a href="#tools">Tools</a>
          <a href="#contribute">Add a tool</a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <p className="eyebrow">A practical shared workspace</p>
        <h1>Welcome. Useful things live here.</h1>
        <p className="hero-copy">
          This is a simple home for small web tools. Each tool is kept separate,
          so it can be added, improved, or removed without disrupting the rest of
          the site.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#tools">
            Browse tools
          </a>
          <a
            className="button button-secondary"
            href="https://chatgpt.com/"
            target="_blank"
            rel="noreferrer"
          >
            Build with ChatGPT
          </a>
        </div>
      </section>

      <section className="tools-section" id="tools">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Toolbox</p>
              <h2>Small tools, one click away.</h2>
            </div>
            <p>No accounts, setup, or special knowledge required.</p>
          </div>

          <div className="tool-grid">
            {tools.map((tool) => (
              <a className="tool-card" href={tool.href} key={tool.href}>
                <span className="tool-icon" aria-hidden="true">
                  Aa
                </span>
                <span>
                  <strong>{tool.name}</strong>
                  <span>{tool.description}</span>
                </span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contribute wrap" id="contribute">
        <div>
          <p className="eyebrow">Made to be shared</p>
          <h2>Adding a tool should feel safe.</h2>
        </div>
        <ol>
          <li>
            <span>1</span>
            Ask ChatGPT to make one self-contained HTML file.
          </li>
          <li>
            <span>2</span>
            Put that file in <code>public/tools</code>.
          </li>
          <li>
            <span>3</span>
            Add one item to the tools list on this page.
          </li>
        </ol>
        <a
          className="text-link"
          href="https://github.com/alexon-bench/group-site"
          target="_blank"
          rel="noreferrer"
        >
          View the project on GitHub ↗
        </a>
      </section>

      <footer className="wrap">
        <p>Simple on purpose.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
