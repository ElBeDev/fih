import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 lg:py-32">
      <div className="container-fs grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Modern glass architecture representing Fallstone's portfolio companies"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <div className="absolute -bottom-10 -right-6 hidden aspect-square w-40 overflow-hidden border-8 border-paper shadow-xl sm:block lg:-right-10 lg:w-56">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
              alt="Interior of a modern commercial property"
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            About Us
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-[2.75rem]">
            An active owner, not a passive investor
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            At Fallstone International Holdings, we focus on building,
            acquiring, and managing businesses with strong potential for
            long-term growth and value creation. We operate as a diversified
            holding company with investments across multiple industries,
            allowing us to build a balanced portfolio while identifying
            opportunities in different areas of the economy.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Our approach goes beyond simply investing in companies. We take
            an active role in the businesses we own, providing strategic
            direction, operational support, and resources designed to help
            them grow and perform at their full potential.
          </p>

          <a
            href="#what-we-do"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:text-gold"
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
