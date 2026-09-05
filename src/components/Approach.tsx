import Image from "next/image";
import { Check } from "lucide-react";
import { APPROACH_PILLARS } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div className="container-fs grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative order-2 aspect-[4/5] w-full overflow-hidden lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
            alt="Team reviewing strategy and operational plans"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
            Our Approach
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-white sm:text-[2.75rem]">
            &ldquo;Long-term value is created through active ownership.&rdquo;
          </h2>
          <p className="mt-6 leading-relaxed text-white/65">
            Rather than taking a passive investment approach, we work
            alongside our portfolio companies to strengthen their
            operations, identify growth opportunities, and build sustainable
            businesses.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {APPROACH_PILLARS.map((pillar) => (
              <li key={pillar} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-gold-light" />
                <span className="text-sm text-white/80">{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
