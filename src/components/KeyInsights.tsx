import { INSIGHTS } from "@/lib/content";

export default function KeyInsights() {
  return (
    <div className="rounded-[28px] bg-forest p-6 text-white sm:p-8">
      <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
        Key Insights
      </span>
      <h2 className="font-display mt-4 text-2xl font-bold leading-tight sm:text-[1.75rem]">
        Trusted Across Multiple Industries
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-white/55">
        Our holding company works with management teams across the economy
        to deliver disciplined, long-term value creation.
      </p>

      <div className="mt-8 flex flex-col divide-y divide-white/10">
        {INSIGHTS.map((item) => (
          <div key={item.title} className="grid grid-cols-2 gap-4 py-6 first:pt-0 last:pb-0">
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
        ))}
      </div>
    </div>
  );
}
