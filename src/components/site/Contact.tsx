import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-data";

import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-elegant md:p-14">
          <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/15 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow">Contato</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display-wide mt-6 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold">
                  Sua cadeira <span className="font-serif font-normal normal-case italic text-primary">está</span>{" "}
                  esperando.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Reserve pelo WhatsApp em menos de um minuto. Atendimento com hora marcada, sem filas.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild variant="brass" size="xl">
                    <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                      <MessageCircle />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="line" size="xl">
                    <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
                      <Phone />
                      Ligar
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              <Reveal delay={150} className="rounded-2xl border border-border bg-background/50 p-6">
                <MapPin className="size-5 text-primary" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Endereço</p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug">{contact.address}</p>
                <p className="mt-1 text-sm text-muted-foreground">{contact.city}</p>
              </Reveal>
              <Reveal delay={250} className="rounded-2xl border border-border bg-background/50 p-6">
                <Phone className="size-5 text-primary" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Telefone</p>
                <p className="mt-2 font-display text-lg font-semibold">{contact.phone}</p>
                <p className="mt-1 text-sm text-muted-foreground">{contact.instagram}</p>
              </Reveal>
              <Reveal delay={350} className="rounded-2xl border border-border bg-background/50 p-6 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-primary" />
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Horários</p>
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {contact.hours.map((h) => (
                    <li key={h.day} className="flex items-baseline gap-4 py-3">
                      <span className="text-sm text-foreground/85">{h.day}</span>
                      <span className="leader" />
                      <span className="font-display text-sm font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
