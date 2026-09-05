import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <div id="what-we-do" className="rounded-[28px] bg-white p-6 sm:p-8">
      <span className="inline-block rounded-full bg-paper px-4 py-1.5 text-xs font-medium text-muted">
        What We Do
      </span>
      <h2 className="font-display mt-4 max-w-md text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
        More than capital &mdash; active, hands-on ownership
      </h2>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="rounded-2xl border border-line p-5"
            >
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
          );
        })}
      </div>
    </div>
  );
}
