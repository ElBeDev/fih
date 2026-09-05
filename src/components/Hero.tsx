import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/content";

export default function Hero() {
  return (
    <div id="home" className="rounded-[28px] bg-white p-3 lg:p-4">
      <div className="relative aspect-4/5 overflow-hidden rounded-[22px] sm:aspect-16/12 lg:aspect-16/11">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          alt="Glass office towers representing Fallstone's diversified holdings"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 800px, 90vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/20" />

        <span className="absolute left-5 top-5 rounded-full bg-black/35 px-4 py-2 text-xs font-medium text-white backdrop-blur">
          Diversified Holding Company
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
          <h1 className="font-display max-w-lg text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]">
            Building Lasting Value Through Strategic Ownership
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            We build, acquire, and manage businesses with strong potential
            for long-term growth across technology, healthcare,
            manufacturing, financial services, real estate, and energy.
          </p>
        </div>

        <a
          href="#contact"
          className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-3 text-sm font-semibold text-ink shadow-lg transition-transform hover:-translate-y-0.5 sm:px-6"
        >
          Get in Touch
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {PROCESS_STEPS.map((step) => {
          const Icon = step.icon;
          const dark = step.variant === "dark";
          return (
            <div
              key={step.title}
              className={`rounded-2xl p-5 ${
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
                <div className="relative mt-4 h-14 w-14 overflow-hidden rounded-xl">
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
                  className="mt-4 text-yellow"
                />
              )}

              <h3 className="font-display mt-4 text-base font-semibold">
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
