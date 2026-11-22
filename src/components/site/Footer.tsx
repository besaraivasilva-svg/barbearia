import { Instagram, MessageCircle } from "lucide-react";

import { contact, navLinks } from "@/lib/site-data";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm font-serif text-2xl italic leading-snug text-foreground/85">
              Corte, barba e presença — com o cuidado de quem leva o ofício a sério.
            </p>
          </div>
          <nav className="md:col-span-3" aria-label="Rodapé">
            <p className="eyebrow">Navegue</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="eyebrow">Visite</p>
            <p className="mt-5 text-sm text-muted-foreground">
              {contact.address}
              <br />
              {contact.city}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Ter–Sex 09h–20h · Sáb 08h–18h</p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contato"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 select-none" aria-hidden="true">
        <p className="font-display-wide whitespace-nowrap text-center text-[12.5vw] font-bold leading-[0.8] text-foreground/[0.06]">
          PRIME<span className="font-serif font-normal normal-case italic text-primary/30">barber</span>
        </p>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Prime Barber. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.22em]">Feito à mão · com navalha</p>
        </div>
      </div>
    </footer>
  );
}
