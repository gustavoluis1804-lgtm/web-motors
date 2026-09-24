import { brands } from "../data/cars";

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {brands.map((b) => (
        <span
          key={b}
          className="group mx-7 flex cursor-default items-center gap-7"
        >
          <span className="font-display text-xl font-extrabold uppercase tracking-[0.22em] text-white/35 transition-all duration-300 group-hover:text-white">
            {b}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand/70 transition-all duration-300 group-hover:scale-150 group-hover:bg-brand" />
        </span>
      ))}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section
      aria-label="Marcas parceiras"
      className="relative border-y border-white/8 bg-ink py-7"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </section>
  );
}
