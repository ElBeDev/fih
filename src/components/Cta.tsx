import { ArrowUpRight } from "lucide-react";

export default function Cta() {
  return (
    <section id="contact" className="px-4 py-3 lg:px-6">
      <div className="mx-auto flex max-w-340 flex-col items-start justify-between gap-6 rounded-[28px] bg-yellow p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <span className="inline-block rounded-full bg-black/10 px-4 py-1.5 text-xs font-medium text-ink/70">
            Get In Touch
          </span>
          <h2 className="font-display mt-3 max-w-xl text-2xl font-bold leading-tight text-ink sm:text-3xl">
            Let&apos;s build lasting value together.
          </h2>
        </div>
        <a
          href="mailto:info@fallstoneholdings.com"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Contact Us
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
