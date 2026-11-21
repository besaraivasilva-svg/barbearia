import { ArrowUpRight, Clock } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { formatPrice, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

export function ServicesMenu() {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];

  return (
    <section id="servicos" className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">O cardápio</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display-wide mt-6 text-[clamp(2.4rem,6vw,5.5rem)] font-semibold">
                Serviços <span className="font-serif font-normal normal-case italic text-primary">da casa</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-muted-foreground">
              Cada serviço inclui consultoria, toalha quente e finalização com produtos selecionados. Café ou
              cerveja por nossa conta.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Sticky image preview (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="grain relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-elegant">
                {services.map((s, i) => (
                  <img
                    key={s.id}
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 size-full object-cover transition-all duration-1000",
                      i === active ? "scale-100 opacity-100" : "scale-110 opacity-0",
                    )}
                  />
                ))}
                <div className="bg-fade-bottom absolute inset-x-0 bottom-0 h-1/2" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                  <div>
                    <p className="font-serif text-lg italic text-primary">{current?.tagline}</p>
                    <p className="font-display text-3xl font-semibold uppercase tracking-tight">{current?.name}</p>
                  </div>
                  <p className="font-display text-6xl font-semibold text-foreground/15">{current?.number}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu list */}
          <ul className="lg:col-span-7">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 90}>
                <article
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className={cn(
                    "group relative grid grid-cols-[auto_1fr] gap-5 border-b border-border py-8 outline-none transition-colors duration-500 md:gap-8 md:py-10",
                    i === 0 && "border-t",
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-y-0 -left-4 w-px origin-top scale-y-0 bg-primary transition-transform duration-700 md:-left-6",
                      i === active && "lg:scale-y-100",
                    )}
                  />
                  <div className="relative size-20 overflow-hidden rounded-2xl md:size-24 lg:hidden">
                    <img src={s.image} alt="" loading="lazy" className="size-full object-cover" />
                  </div>
                  <span
                    className={cn(
                      "hidden font-display text-sm font-semibold transition-colors duration-500 lg:block",
                      i === active ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {s.number}
                  </span>

                  <div>
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-display text-2xl font-semibold uppercase tracking-tight md:text-4xl">
                        {s.name}
                      </h3>
                      <span className="leader hidden sm:block" />
                      <p className="ml-auto shrink-0 font-display text-2xl font-semibold text-primary md:text-4xl">
                        {formatPrice(s.price)}
                      </p>
                    </div>
                    <p className="mt-1 font-serif text-lg italic text-foreground/70">{s.tagline}</p>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.description}
                    </p>
                    <div className="mt-5 flex items-center gap-5">
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        <Clock className="size-3.5 text-primary" /> {s.duration}
                      </span>
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-primary"
                      >
                        Agendar
                        <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal as="li" delay={400}>
              <div className="glass mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center md:p-8">
                <div>
                  <p className="font-serif text-2xl italic">Monte o seu ritual.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Combine serviços e saia com o visual completo em uma única visita.
                  </p>
                </div>
                <Button asChild variant="brass" size="xl">
                  <a href="#contato">Reservar</a>
                </Button>
              </div>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}
