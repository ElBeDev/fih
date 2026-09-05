import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Industries() {
  const featured = INDUSTRIES.slice(0, 2);
  const rest = INDUSTRIES.slice(2);

  return (
    <section id="industries" className="px-4 py-3 lg:px-6">
      <div className="mx-auto max-w-340 rounded-[28px] bg-white p-5 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-paper px-4 py-1.5 text-xs font-medium text-muted">
              Our Industries
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-ink sm:text-[2.25rem]">
              A diversified portfolio, built for balance
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            We maintain a diversified portfolio across several industries,
            identifying opportunities in different areas of the economy.
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          {featured.map((industry, i) => {
            const Icon = industry.icon;
            const imageFirst = i % 2 === 0;
            return (
              <Reveal key={industry.title} className={i !== 0 ? "border-t border-line" : ""}>
                <div className="grid gap-6 py-8 lg:grid-cols-2 lg:gap-12 lg:py-10">
                  <div
                    className={`relative aspect-16/11 overflow-hidden rounded-[20px] ${
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={industry.image}
                      alt={`${industry.title}, one of Fallstone's core industries`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 620px, 90vw"
                    />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                      <Icon size={18} strokeWidth={1.75} className="text-forest" />
                    </span>
                  </div>

                  <div
                    className={`flex flex-col justify-center ${
                      imageFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {industry.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                      {industry.description}
                    </p>

                    <div className="mt-6 grid max-w-md grid-cols-2 gap-4 border-t border-line pt-5">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-muted/70">
                          Sector
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink">
                          {industry.sector}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-muted/70">
                          Focus
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink">
                          {industry.focus}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Get in Touch
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-2 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          {rest.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={i * 0.06}>
                <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`${industry.title}, one of Fallstone's core industries`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 420px, 90vw"
                    />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
                      <Icon size={16} strokeWidth={1.75} className="text-forest" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {industry.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {industry.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-muted/70">
                          Sector
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-ink">
                          {industry.sector}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-muted/70">
                          Focus
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-ink">
                          {industry.focus}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-ink"
                    >
                      Get in Touch
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
