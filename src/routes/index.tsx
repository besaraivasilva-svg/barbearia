import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Marquee } from "@/components/site/Marquee";
import { Navbar } from "@/components/site/Navbar";
import { Reviews } from "@/components/site/Reviews";
import { ServicesMenu } from "@/components/site/ServicesMenu";
import { Team } from "@/components/site/Team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Barber — Barbearia Premium | Corte, Barba e Pigmentação" },
      {
        name: "description",
        content:
          "Prime Barber: barbearia premium para o homem moderno. Corte R$ 35, Barba R$ 20, Sobrancelha R$ 10 e Pigmentação R$ 40. Agende seu horário.",
      },
      { property: "og:title", content: "Prime Barber — Barbearia Premium" },
      {
        property: "og:description",
        content: "Corte, barba e presença. Conheça o cardápio de serviços da Prime Barber e agende seu horário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Marquee />
        <ServicesMenu />
        <Gallery />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
