"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 lg:px-6">
      <div className="mx-auto flex max-w-340 items-center justify-between rounded-full border border-black/5 bg-white/90 px-3 py-2.5 shadow-[0_8px_30px_-12px_rgba(20,23,20,0.25)] backdrop-blur">
        <a href="#home" className="flex items-center gap-2 pl-2">
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Fallstone
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-forest text-white"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-yellow px-6 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 lg:inline-block"
        >
          Get in Touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-340 rounded-3xl border border-black/5 bg-white p-3 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  i === 0 ? "bg-forest text-white" : "text-ink/70 hover:bg-paper"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-yellow px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
