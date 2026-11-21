const words = ["Corte", "Barba", "Sobrancelha", "Pigmentação", "Toalha quente", "Navalha"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border bg-ink py-6" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-3xl font-semibold uppercase tracking-tight text-foreground/85 md:text-5xl">
              {w}
            </span>
            <span className="font-serif text-3xl italic text-primary md:text-5xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
