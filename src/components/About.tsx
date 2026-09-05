import Image from "next/image";
import { ABOUT_CARDS } from "@/lib/content";

export default function About() {
  return (
    <div id="about" className="rounded-[28px] bg-white p-3 lg:p-4">
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="relative aspect-4/5 overflow-hidden rounded-[22px] sm:aspect-16/10 lg:aspect-auto lg:min-h-105">
          <Image
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80"
            alt="Aerial city skyline representing Fallstone's global reach"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, 90vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-ink">
            About Us
          </span>

          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-display max-w-sm text-lg font-semibold leading-snug text-white sm:text-xl">
              We are a holding company building innovative, sustainable, and
              lasting businesses across the global economy.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Active ownership across a diversified portfolio &mdash; from
              strategic direction to operational support and resources.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {ABOUT_CARDS.map((card) => {
            const Icon = card.icon;
            const dark = card.variant === "dark";
            return (
              <div
                key={card.title}
                className={`flex-1 rounded-[22px] p-6 sm:p-7 ${
                  dark ? "bg-forest text-white" : "bg-paper text-ink"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    dark ? "bg-white/10" : "bg-yellow"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    className={dark ? "text-white" : "text-ink"}
                  />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold">
                  {card.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    dark ? "text-white/60" : "text-muted"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
