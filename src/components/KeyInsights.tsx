import { INSIGHTS } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function KeyInsights() {
  return (
    <div className="rounded-3xl sm:rounded-[28px] bg-forest p-6 text-white sm:p-8">
      <h2 className="font-display text-2xl font-bold leading-tight sm:text-[1.75rem]">
        Trusted Across Multiple Industries
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-white/55">
        Our holding company works with management teams across the economy
        to deliver disciplined, long-term value creation.
      </p>

      <div className="mt-8 flex flex-col divide-y divide-white/10">
        {INSIGHTS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="grid grid-cols-2 gap-4 py-6 first:pt-0 last:pb-0">
              <div className="font-display text-4xl font-bold text-lime sm:text-5xl">
                {item.value}
              </div>
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wide text-white/45">
                  {item.eyebrow}
                </span>
                <h3 className="font-display mt-1 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/55">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
