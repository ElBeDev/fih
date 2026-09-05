import { STATS } from "@/lib/content";

export default function Stats() {
  return (
    <section className="bg-navy">
      <div className="container-fs grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4 lg:gap-8 lg:py-16">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 ${i % 2 !== 0 ? "border-l border-white/10" : ""} ${
              i !== 0 ? "lg:border-l lg:border-white/10" : "lg:border-l-0"
            }`}
          >
            <div className="font-display text-4xl text-gold-light sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
