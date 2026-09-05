import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section id="contact" className="bg-gold-light">
      <div className="container-fs flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-navy-deep/70">
            Get In Touch
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl leading-tight text-navy-deep sm:text-4xl">
            Let&apos;s build lasting value together.
          </h2>
        </div>
        <a
          href="mailto:info@fallstoneholdings.com"
          className="inline-flex items-center gap-2 whitespace-nowrap bg-navy-deep px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
        >
          Contact Us
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
