import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Gauge, Heart, MapPin, Settings2 } from "lucide-react";
import { useMemo, useState } from "react";
import { cars, categories, formatBRL, type Car, type Category } from "../data/cars";
import { Reveal, SectionHeading } from "./Reveal";

function CarCard({ car, index }: { car: Car; index: number }) {
  const [fav, setFav] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.25 } }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.045, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(10,10,11,0.06)] ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_rgba(10,10,11,0.18)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {car.tag && (
          <span
            className={`absolute left-3.5 top-3.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg ${
              car.tag === "Super preço" ? "bg-brand" : "bg-ink/85 backdrop-blur"
            }`}
          >
            {car.tag}
          </span>
        )}

        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={() => setFav((v) => !v)}
          aria-label="Favoritar"
          className="absolute right-3.5 top-3.5 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow-md backdrop-blur transition-colors hover:bg-white"
        >
          <motion.span
            key={String(fav)}
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <Heart
              className={`h-4.5 w-4.5 transition-colors duration-300 ${
                fav ? "fill-brand stroke-brand" : "stroke-ink/70"
              }`}
            />
          </motion.span>
        </motion.button>

        <span className="absolute bottom-3.5 right-3.5 flex translate-y-3 items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-ink opacity-0 shadow-lg transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          Ver oferta <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">{car.brand}</p>
        <h3 className="mt-1 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">
          {car.model}
        </h3>
        <p className="mt-0.5 truncate text-sm text-zinc-500">{car.version}</p>

        <div className="mt-3.5 flex items-center gap-4 text-xs font-medium text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" /> {car.km}
          </span>
          <span className="flex items-center gap-1.5">
            <Settings2 className="h-3.5 w-3.5" /> {car.transmission}
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-ink/8 pt-4">
          <div>
            {car.oldPrice && (
              <p className="text-xs font-medium text-zinc-400 line-through">{formatBRL(car.oldPrice)}</p>
            )}
            <p className="font-display text-xl font-extrabold tracking-tight text-ink">
              {formatBRL(car.price)}
            </p>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-zinc-400">
            <MapPin className="h-3.5 w-3.5" />
            {car.location}
          </span>
        </div>
      </div>

      {/* red bottom sweep */}
      <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </motion.article>
  );
}

export function FeaturedCars() {
  const [active, setActive] = useState<Category>("todos");

  const filtered = useMemo(
    () => (active === "todos" ? cars : cars.filter((c) => c.category === active)),
    [active]
  );

  return (
    <section id="ofertas" className="relative bg-paper py-20 lg:py-28">
      <div className="bg-blueprint-light absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            light
            index="01"
            kicker="Ofertas em destaque"
            title={
              <>
                Escolhidos a dedo,
                <br />
                <span className="text-brand">prontos pra rodar.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <a
              href="#topo"
              className="group flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-brand hover:text-brand"
            >
              Ver todas as ofertas
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "bg-white text-zinc-500 ring-1 ring-ink/10 hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{c.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
