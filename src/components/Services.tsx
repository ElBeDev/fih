import { SERVICES } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <div id="what-we-do" className="rounded-[28px] bg-white p-6 sm:p-8">
      <h2 className="font-display max-w-md text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
        More than capital: active, hands-on ownership
      </h2>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow">
                  <Icon size={18} strokeWidth={1.75} className="text-ink" />
                </span>
                <h3 className="font-display mt-4 text-sm font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
