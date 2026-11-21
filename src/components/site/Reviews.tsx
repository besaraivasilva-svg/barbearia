import { Quote, Star } from "lucide-react";

import interiorImg from "@/assets/interior.jpg";
import { reviews } from "@/lib/site-data";

import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section id="avaliacoes" className="grain relative isolate overflow-hidden py-24 md:py-36">
      <img
        src={interiorImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full scale-110 object-cover blur-md"
      />
      <div className="absolute inset-0 -z-10 bg-background/80" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Avaliações</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display-wide mt-6 text-[clamp(2.4rem,6vw,5.5rem)] font-semibold">
                Quem senta, <span className="font-serif font-normal normal-case italic text-primary">volta</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="flex items-center gap-4">
            <p className="font-display text-6xl font-semibold">4.9</p>
            <div>
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">+480 avaliações</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <figure className="glass flex h-full flex-col rounded-3xl p-7 transition-transform duration-700 hover:-translate-y-1.5 md:p-8">
                <Quote className="size-8 text-primary/70" />
                <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <span className="grid size-12 place-items-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-semibold text-primary">
                    {r.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wider">{r.name}</p>
                    <div className="mt-1 flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="size-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
