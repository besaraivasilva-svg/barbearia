import interiorImg from "@/assets/interior.jpg";

import { Reveal } from "./Reveal";

const stats = [
  { value: "+2.500", label: "Clientes fiéis" },
  { value: "12", label: "Anos de ofício" },
  { value: "45", label: "Minutos por corte", suffix: "min" },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pr-10">
          <Reveal>
            <p className="eyebrow">O manifesto</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display-wide mt-6 text-[clamp(2rem,5vw,4rem)] font-semibold">
              Um lugar onde <span className="font-serif font-normal normal-case italic text-primary">o tempo</span>{" "}
              desacelera.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 grid gap-5 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
              <p>
                Criamos a Prime para ser mais do que uma barbearia. Sem barulho, sem pressa — só boa música,
                mãos experientes e a atmosfera de um clube de cavalheiros.
              </p>
              <p>
                Respeitamos o seu tempo e o seu estilo. Você entra para respirar e sai renovado, confiante e
                pronto para o que vier.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-border pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                    {s.value}
                    {s.suffix ? (
                      <span className="ml-1 font-serif text-xl font-normal italic text-primary md:text-2xl">
                        {s.suffix}
                      </span>
                    ) : null}
                  </dd>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative lg:col-span-5">
          <div className="grain relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={interiorImg}
              alt="Interior da Prime Barber com cadeiras de couro e luz âmbar"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
          </div>
          <div className="glass absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl p-5 md:-left-10">
            <p className="font-serif text-xl italic leading-snug text-foreground">
              “Você entra para respirar. Sai pronto.”
            </p>
            <p className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-primary">Rafael Moura · Fundador</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
