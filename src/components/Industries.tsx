import { INDUSTRIES } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-paper py-24 lg:py-32">
      <div className="container-fs">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Our Industries
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-[2.75rem]">
              A diversified portfolio, built for balance
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            We maintain a diversified portfolio across several industries,
            allowing us to build a balanced portfolio while identifying
            opportunities across the economy.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="border border-line bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5">
                  <Icon size={26} strokeWidth={1.5} className="text-navy" />
                </div>
                <h3 className="font-display mt-6 text-xl text-ink">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
