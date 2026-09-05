import { NAV_LINKS, FOOTER_INDUSTRY_LINKS } from "@/lib/content";
import Logo from "@/components/Logo";

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
    <footer className="px-4 pb-4 pt-3 lg:px-6">
      <div className="mx-auto max-w-340 rounded-[28px] bg-forest px-6 pt-12 text-white/70 sm:px-10">
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-display text-lg font-bold text-white">
                Fallstone
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A diversified holding company building, acquiring, and
              managing businesses with strong potential for long-term
              growth and value creation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-lime">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Industries</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {FOOTER_INDUSTRY_LINKS.map((label) => (
                <li key={label}>
                  <a href="#industries" className="transition-colors hover:text-lime">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Stay Connected</h4>
            <p className="mt-5 text-sm">
              Subscribe for updates on our portfolio and industry insights.
            </p>
            <div className="mt-4 flex overflow-hidden rounded-full border border-white/15">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="bg-yellow px-5 text-sm font-semibold text-ink"
              >
                &rarr;
              </button>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-lime hover:text-lime"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-lime hover:text-lime"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Fallstone International
              Holdings. All rights reserved.
            </p>
            <p>Managing approximately $2.5B in assets across 50+ companies.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
