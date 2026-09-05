import Image from "next/image";
import { Check } from "lucide-react";
import { APPROACH_PILLARS } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Approach() {
  return (
    <section id="approach" className="px-4 py-3 lg:px-6">
      <div className="mx-auto max-w-340 overflow-hidden rounded-[28px] bg-forest">
        <div className="grid gap-3 p-3 lg:grid-cols-2 lg:gap-0 lg:p-4">
          <div className="relative aspect-16/11 overflow-hidden rounded-[22px] lg:aspect-auto lg:min-h-120">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Team reviewing strategy and operational plans"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 620px, 90vw"
            />
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              &ldquo;Long-term value is created through active
              ownership.&rdquo;
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Rather than taking a passive investment approach, we work
              alongside our portfolio companies to strengthen operations,
              identify growth opportunities, and build sustainable
              businesses.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {APPROACH_PILLARS.map((pillar, i) => (
                <Reveal
                  key={pillar}
                  as="li"
                  delay={i * 0.04}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow">
                    <Check size={12} strokeWidth={3} className="text-ink" />
                  </span>
                  <span className="text-sm text-white/80">{pillar}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
