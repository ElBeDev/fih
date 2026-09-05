"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-fs flex h-20 items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-[0.08em] text-white">
            FALLSTONE
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-gold-light">
            International Holdings
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-gold-light/60 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-light hover:text-navy-deep lg:inline-block"
        >
          Contact Us
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep lg:hidden">
          <nav className="container-fs flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-sm font-medium text-white/85 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm border border-gold-light/60 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
