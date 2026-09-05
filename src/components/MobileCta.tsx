"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function MobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [reachedContact, setReachedContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "0px 0px -60% 0px" },
    );
    const contactObserver = new IntersectionObserver(
      ([entry]) => setReachedContact(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );

    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !reachedContact;

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-6px_rgba(11,20,17,0.5)]"
      >
        Get in Touch
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
