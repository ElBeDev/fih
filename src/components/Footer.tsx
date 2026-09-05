import { NAV_LINKS, FOOTER_INDUSTRY_LINKS } from "@/lib/content";

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2.25h3.3l-7.2 8.23 8.47 11.27H16.9l-5.5-7.2-6.3 7.2H1.8l7.7-8.8L1.5 2.25h7.3l4.97 6.58 5.13-6.58zm-1.16 17.4h1.83L7.36 4.15H5.4l12.34 15.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black pt-20 text-white/70">
      <div className="container-fs grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <span className="font-display block text-xl tracking-[0.08em] text-white">
            FALLSTONE
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] text-gold-light">
            International Holdings
          </span>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A diversified holding company building, acquiring, and managing
            businesses with strong potential for long-term growth and value
            creation.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Industries
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {FOOTER_INDUSTRY_LINKS.map((label) => (
              <li key={label}>
                <a href="#industries" className="transition-colors hover:text-gold-light">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Stay Connected
          </h4>
          <p className="mt-5 text-sm">
            Subscribe for updates on our portfolio and industry insights.
          </p>
          <div className="mt-4 flex border border-white/20">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="bg-gold-light px-5 text-sm font-semibold text-navy-deep"
            >
              &rarr;
            </button>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-fs flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Fallstone International
            Holdings. All rights reserved.
          </p>
          <p>Managing approximately $2.5B in assets across 50+ companies.</p>
        </div>
      </div>
    </footer>
  );
}
