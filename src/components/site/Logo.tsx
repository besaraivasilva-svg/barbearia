import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#topo" className={cn("group flex items-center gap-3", className)} aria-label="Prime Barber — início">
      <span className="relative grid size-10 place-items-center rounded-full border border-primary/50 transition-colors duration-500 group-hover:border-primary">
        <svg viewBox="0 0 24 24" className="size-5 text-primary" fill="none" aria-hidden="true">
          <path
            d="M4 8l3.5 3L12 5l4.5 6L20 8l-2 10H6L4 8z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-[0.2em] text-foreground">PRIME</span>
        <span className="font-serif text-sm italic text-primary">Barber</span>
      </span>
    </a>
  );
}
