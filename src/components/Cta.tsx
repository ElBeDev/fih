import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Cta() {
  return (
    <section id="contact" className="px-4 py-3 lg:px-6">
      <Reveal className="mx-auto max-w-340 rounded-[28px] bg-yellow">
        <div className="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
          <h2 className="font-display max-w-xl text-2xl font-bold leading-tight text-ink sm:text-3xl">
            Let&apos;s build lasting value together.
          </h2>
          <a
            href="mailto:info@fallstoneholdings.com"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
