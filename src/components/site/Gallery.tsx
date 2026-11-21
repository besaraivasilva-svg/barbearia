import { gallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

const layout = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Galeria</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display-wide mt-6 text-[clamp(2.4rem,6vw,5.5rem)] font-semibold">
                O ofício <span className="font-serif font-normal normal-case italic text-primary">em detalhe</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-xs text-muted-foreground">
              Cada linha pensada, cada contorno no lugar. Veja de perto o padrão Prime.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[15rem] grid-cols-2 gap-3 md:auto-rows-[17rem] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.src}
              delay={i * 80}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                i === 0 && "col-span-2 row-span-2",
                layout[i],
              )}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover brightness-90 grayscale transition-all duration-[1.4s] ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="bg-fade-bottom absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between p-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em]">{g.label}</span>
                <span className="font-serif text-lg italic text-primary">0{i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
