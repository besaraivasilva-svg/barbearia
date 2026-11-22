import { describe, expect, it } from "vitest";

import { formatPrice, services } from "@/lib/site-data";

const priceOf = (id: string) => services.find((s) => s.id === id)?.price;

describe("Prime Barber prices", () => {
  it("Corte costs R$ 35", () => expect(priceOf("corte")).toBe(35));
  it("Barba costs R$ 20", () => expect(priceOf("barba")).toBe(20));
  it("Sobrancelha costs R$ 10", () => expect(priceOf("sobrancelha")).toBe(10));
  it("Pigmentação costs R$ 40", () => expect(priceOf("pigmentacao")).toBe(40));
  it("shows prices in reais", () => expect(formatPrice(35)).toBe("R$ 35"));
});
