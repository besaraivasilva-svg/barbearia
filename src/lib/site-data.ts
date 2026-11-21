import galleryBeard from "@/assets/gallery-beard.jpg";
import galleryBrow from "@/assets/gallery-brow.jpg";
import galleryFade from "@/assets/gallery-fade.jpg";
import galleryPigment from "@/assets/gallery-pigment.jpg";
import galleryRazor from "@/assets/gallery-razor.jpg";
import galleryStyling from "@/assets/gallery-styling.jpg";
import barberDiego from "@/assets/barber-diego.jpg";
import barberMarcos from "@/assets/barber-marcos.jpg";
import barberRafael from "@/assets/barber-rafael.jpg";

export type Service = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  price: number;
  image: string;
};

export const services: Service[] = [
  {
    id: "corte",
    number: "01",
    name: "Corte",
    tagline: "Clássico ou moderno",
    description:
      "Consultoria de estilo, corte na tesoura ou máquina, degradê preciso e finalização com produtos premium.",
    duration: "45 min",
    price: 35,
    image: galleryFade,
  },
  {
    id: "barba",
    number: "02",
    name: "Barba",
    tagline: "Toalha quente & navalha",
    description:
      "Desenho e alinhamento da barba, toalha quente, navalha e óleo hidratante para um acabamento impecável.",
    duration: "30 min",
    price: 20,
    image: galleryBeard,
  },
  {
    id: "sobrancelha",
    number: "03",
    name: "Sobrancelha",
    tagline: "Limpeza na navalha",
    description:
      "Limpeza e alinhamento discreto na navalha, valorizando a expressão sem perder a naturalidade.",
    duration: "10 min",
    price: 10,
    image: galleryBrow,
  },
  {
    id: "pigmentacao",
    number: "04",
    name: "Pigmentação",
    tagline: "Definição absoluta",
    description:
      "Pigmentação no cabelo ou barba para preencher falhas, reforçar o desenho e garantir contornos nítidos.",
    duration: "20 min",
    price: 40,
    image: galleryPigment,
  },
];

export function formatPrice(value: number): string {
  return `R$ ${value}`;
}

export const gallery = [
  { src: galleryBeard, alt: "Barbeiro aparando barba cheia com tesoura", label: "Barba" },
  { src: galleryFade, alt: "Degradê sendo feito na máquina", label: "Degradê" },
  { src: galleryRazor, alt: "Acabamento da nuca na navalha", label: "Navalha" },
  { src: galleryStyling, alt: "Finalização do corte com secador", label: "Finalização" },
  { src: galleryBrow, alt: "Sobrancelha alinhada na navalha", label: "Sobrancelha" },
  { src: galleryPigment, alt: "Pigmentação definindo o contorno do cabelo", label: "Pigmentação" },
];

export const team = [
  {
    name: "Rafael Moura",
    role: "Fundador & Master Barber",
    specialty: "Barbas e navalha",
    years: "12 anos",
    instagram: "@rafael.prime",
    image: barberRafael,
  },
  {
    name: "Diego Alves",
    role: "Barbeiro Sênior",
    specialty: "Degradês e cortes modernos",
    years: "7 anos",
    instagram: "@diego.prime",
    image: barberDiego,
  },
  {
    name: "Marcos Vianna",
    role: "Barbeiro Clássico",
    specialty: "Cortes clássicos e pigmentação",
    years: "18 anos",
    instagram: "@marcos.prime",
    image: barberMarcos,
  },
];

export const reviews = [
  {
    name: "Lucas Ferreira",
    initials: "LF",
    text: "Profissionais de verdade. Atenção a cada detalhe, saí outra pessoa. Virou meu ritual de toda semana.",
  },
  {
    name: "Thiago Ramos",
    initials: "TR",
    text: "Ambiente incrível, música boa, café na hora e um degradê perfeito. Melhor barbearia da cidade, sem dúvida.",
  },
  {
    name: "Bruno Castro",
    initials: "BC",
    text: "Rápido, caprichado e com padrão de alto nível. A barba com toalha quente é outro nível.",
  },
];

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipe", label: "Equipe" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export const contact = {
  address: "Rua do Exemplo, 000 — Centro",
  city: "Sua Cidade — UF",
  phone: "(00) 00000-0000",
  whatsapp: "https://wa.me/5500000000000",
  instagram: "@primebarber",
  hours: [
    { day: "Terça a Sexta", time: "09h — 20h" },
    { day: "Sábado", time: "08h — 18h" },
    { day: "Domingo e Segunda", time: "Fechado" },
  ],
};
