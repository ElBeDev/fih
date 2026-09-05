import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-deep pt-20"
    >
      <Image
        src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=2000&q=80"
        alt="City skyline representing Fallstone's diversified holdings"
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />

      <div className="container-fs relative z-10 py-24">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-gold-light">
          Diversified Holding Company
        </p>
        <h1 className="font-display max-w-3xl text-5xl leading-[1.08] text-white sm:text-6xl lg:text-[4.2rem]">
          Building Lasting Value Through Strategic Ownership
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
          Fallstone International Holdings builds, acquires, and manages
          businesses with strong potential for long-term growth &mdash;
          across technology, healthcare, manufacturing, financial services,
          real estate, and energy.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            Discover More
            <ArrowRight size={16} />
          </a>
          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white"
          >
            What We Do
          </a>
        </div>
      </div>
    </section>
  );
}
