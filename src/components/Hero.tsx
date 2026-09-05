import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/content";

export default function Hero() {
  return (
    <div id="home" className="rounded-3xl bg-white p-2.5 sm:rounded-[28px] sm:p-3 lg:p-4">
      <div className="relative aspect-3/4 overflow-hidden rounded-[18px] sm:aspect-16/12 sm:rounded-[22px] lg:aspect-16/11">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          alt="Glass office towers representing Fallstone's diversified holdings"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 800px, 90vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-black/20" />

        <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
          Diversified Holding Company
        </span>

        <div className="absolute inset-x-0 bottom-0 flex flex-col p-4 sm:p-7 lg:p-8">
          <h1 className="font-display max-w-lg text-[1.7rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            Building Lasting Value Through Strategic Ownership
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">
            We build, acquire, and manage businesses with strong potential
            for long-term growth across technology, healthcare,
            manufacturing, financial services, real estate, and energy.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow px-5 py-3.5 text-sm font-semibold text-ink shadow-lg transition-transform hover:-translate-y-0.5 sm:mt-0 sm:w-fit sm:self-end sm:px-6 sm:py-3"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="mt-2.5 -mx-2.5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-2.5 pb-1 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
        {PROCESS_STEPS.map((step) => {
          const Icon = step.icon;
          const dark = step.variant === "dark";
          return (
            <div
              key={step.title}
              className={`w-[78%] shrink-0 snap-start rounded-2xl p-4 sm:w-auto sm:p-5 ${
                dark ? "bg-forest text-white" : "bg-paper text-ink"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    dark ? "bg-yellow" : "bg-forest"
                  }`}
                />
                <span
                  className={`text-xs font-medium uppercase tracking-wide ${
                    dark ? "text-white/60" : "text-muted"
                  }`}
                >
                  {step.tag}
                </span>
              </div>

              {step.image ? (
                <div className="relative mt-3 h-14 w-14 overflow-hidden rounded-xl sm:mt-4">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              ) : (
                <Icon
                  size={22}
                  strokeWidth={1.75}
                  className="mt-3 text-yellow sm:mt-4"
                />
              )}

              <h3 className="font-display mt-3 text-base font-semibold sm:mt-4">
                {step.title}
              </h3>
              <p
                className={`mt-1.5 text-sm leading-snug ${
                  dark ? "text-white/65" : "text-muted"
                }`}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
