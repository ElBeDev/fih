import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="what-we-do" className="bg-black py-24 lg:py-32">
      <div className="container-fs">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            What We Do
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-white sm:text-[2.75rem]">
            More than capital &mdash; active, hands-on ownership
          </h2>
          <p className="mt-6 leading-relaxed text-white/60">
            We take an active role in the businesses we own, providing
            strategic direction, operational support, and resources designed
            to help them grow and perform at their full potential.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-black p-8 transition-colors hover:bg-navy-deep lg:p-10"
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-gold-light"
                />
                <h3 className="font-display mt-6 text-xl text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
