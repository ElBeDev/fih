import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function Cta() {
  return (
    <section id="contact" className="px-4 py-3 lg:px-6">
      <Reveal className="mx-auto max-w-340 rounded-3xl bg-yellow sm:rounded-[28px]">
        <div className="flex flex-col items-stretch gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-10">
          <h2 className="font-display max-w-xl text-xl font-bold leading-tight text-ink sm:text-3xl">
            Let&apos;s build lasting value together.
          </h2>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-fit"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
