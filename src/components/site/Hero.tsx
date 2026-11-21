import { ArrowDownRight, Star } from "lucide-react";

import heroImg from "@/assets/hero-barbershop.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="topo" className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Barbeiro fazendo a barba de um cliente com navalha em uma barbearia escura e aconchegante"
        className="animate-hero-zoom absolute inset-0 -z-20 size-full object-cover object-[70%_center]"
        fetchPriority="high"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" />
      <div className="bg-fade-bottom absolute inset-x-0 bottom-0 -z-10 h-56" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-36 md:px-10 md:pb-28">
        <p className="eyebrow animate-rise" style={{ animationDelay: "150ms" }}>
          Barbearia premium · Desde 2014
        </p>

        <h1 className="font-display-wide mt-6 text-[clamp(2.9rem,9vw,8.5rem)] font-semibold text-foreground">
          <span className="animate-rise block" style={{ animationDelay: "300ms" }}>
            Corte.
          </span>
          <span className="animate-rise block" style={{ animationDelay: "450ms" }}>
            Barba.
          </span>
          <span className="animate-rise block" style={{ animationDelay: "600ms" }}>
            <span className="text-brass">Presença.</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="animate-rise max-w-md" style={{ animationDelay: "800ms" }}>
            <p className="font-serif text-2xl italic leading-snug text-foreground/90 md:text-3xl">
              A arte do estilo masculino, feita sem pressa e com precisão.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brass" size="xl">
                <a href="#contato">
                  Agendar horário
                  <ArrowDownRight className="transition-transform duration-500 group-hover:rotate-[-45deg]" />
                </a>
              </Button>
              <Button asChild variant="line" size="xl">
                <a href="#servicos">Ver cardápio</a>
              </Button>
            </div>
          </div>

          <div
            className="animate-rise glass flex items-center gap-6 rounded-2xl px-6 py-5"
            style={{ animationDelay: "1000ms" }}
          >
            <div>
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-2 font-display text-2xl font-semibold">4.9</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Avaliação média
              </p>
            </div>
            <div className="h-14 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-semibold">+2.500</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Clientes atendidos
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#manifesto"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 hidden h-12 w-7 -translate-x-1/2 justify-center rounded-full border border-foreground/30 pt-2 md:flex"
      >
        <span className="animate-scroll-dot block h-2 w-1 rounded-full bg-primary" />
      </a>
    </section>
  );
}
