import { Instagram } from "lucide-react";

import { team } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equipe" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow">Os profissionais</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display-wide mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,6vw,5.5rem)] font-semibold">
              Mãos que <span className="font-serif font-normal normal-case italic text-primary">assinam</span> o
              estilo
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 120} className={cn(i === 1 && "md:mt-16")}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
                <div className="grain relative aspect-[3/4] overflow-hidden">
                  <img
                    src={m.image}
                    alt={`Retrato de ${m.name}, ${m.role}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                  />
                  <div className="bg-fade-bottom absolute inset-x-0 bottom-0 h-2/3" />
                  <span className="glass absolute right-4 top-4 rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
                    {m.years}
                  </span>
                </div>
                <div className="relative -mt-24 p-6 md:p-7">
                  <p className="font-serif text-lg italic text-primary">{m.role}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-tight">{m.name}</h3>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.specialty}</span>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs text-foreground/80"
                      aria-label={`Instagram ${m.instagram}`}
                    >
                      <Instagram className="size-3.5 text-primary" />
                      {m.instagram}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
