import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled || open ? "border-b border-border bg-background/80 py-3 backdrop-blur-xl" : "py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs font-semibold uppercase tracking-[0.22em] text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="brass" size="default" className="h-11 px-6 text-[0.7rem]">
            <a href="#contato">Agendar horário</a>
          </Button>
        </div>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-border text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-700 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="min-h-0" aria-label="Menu móvel">
          <ul className="flex flex-col gap-1 px-5 pb-6 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border py-4 font-display text-xl uppercase tracking-tight text-foreground"
                >
                  {l.label}
                  <span className="font-serif text-base italic normal-case text-primary">→</span>
                </a>
              </li>
            ))}
            <li className="pt-5">
              <Button asChild variant="brass" size="xl" className="w-full">
                <a href="#contato" onClick={() => setOpen(false)}>
                  Agendar horário
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
