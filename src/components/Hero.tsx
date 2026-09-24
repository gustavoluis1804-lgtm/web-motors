import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, ChevronDown, MoveRight, ShieldCheck, Search, Tag } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { brands, models } from "../data/cars";

const rotatingWords = ["novo.", "seminovo.", "dos sonhos."];

const trustItems = [
  { icon: ShieldCheck, label: "Compra 100% segura" },
  { icon: BadgeCheck, label: "Carros verificados" },
  { icon: Tag, label: "Anúncio grátis" },
];

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`group block ${className}`}>
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
        {label}
      </span>
      <div className="relative">{children}</div>
    </label>
  );
}

const selectClass =
  "w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 pr-10 text-sm font-medium text-ink outline-none transition-all duration-300 hover:border-zinc-300 focus:border-brand focus:ring-4 focus:ring-brand/10";

export function Hero() {
  const [tab, setTab] = useState<"comprar" | "vender">("comprar");
  const [brand, setBrand] = useState("Todas");
  const [wordIndex, setWordIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const carY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  const modelOptions = useMemo(
    () => (brand === "Todas" ? ["Todos"] : ["Todos", ...(models[brand] ?? [])]),
    [brand]
  );

  return (
    <section id="topo" ref={ref} className="relative overflow-hidden bg-ink pb-14 pt-[136px] lg:pt-[168px]">
      {/* backdrop */}
      <div className="bg-blueprint absolute inset-0" />
      <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[140px]" />
      <div className="absolute right-[-160px] top-[-80px] h-[520px] w-[520px] rounded-full bg-brand/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              +500 mil veículos anunciados agora
            </motion.div>

            <h1 className="mt-6 font-display text-[2.9rem] font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
              <motion.span
                className="block overflow-hidden"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Seu carro
              </motion.span>
              <span className="relative block h-[1.05em] overflow-hidden text-brand">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-110%" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              Compre, venda e financie com a maior plataforma automotiva do Brasil.
              Simples do início ao fim — do jeito que tem que ser.
            </motion.p>

            {/* Trust strip */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } } }}
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {trustItems.map((t) => (
                <motion.li
                  key={t.label}
                  variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                >
                  <t.icon className="h-4 w-4 text-brand" strokeWidth={2.2} />
                  {t.label}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Car visual */}
          <motion.div style={{ y: carY, scale: carScale, opacity: fade }} className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute right-2 top-6 z-10 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3.5 backdrop-blur-md"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Oferta da semana</p>
              <p className="mt-0.5 font-display text-lg font-extrabold text-white">
                R$ 98.900 <span className="text-xs font-semibold text-brand">−12%</span>
              </p>
            </motion.div>

            <div className="animate-float">
              <img
                src="/images/hero-car.png"
                alt="Esportivo vermelho em estúdio"
                className="mask-hero-car w-full select-none"
                draggable={false}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="absolute bottom-10 left-0 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3.5 backdrop-blur-md"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">Laudo cautelar</p>
                <p className="text-xs text-zinc-400">aprovado em 100% dos itens</p>
              </div>
            </motion.div>

            {/* glow under car */}
            <div className="animate-pulse-glow absolute -bottom-8 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-brand/35 blur-[80px]" />
          </motion.div>
        </div>

        {/* Search widget */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="relative z-20 mt-12 overflow-hidden rounded-3xl bg-white p-2 shadow-2xl shadow-black/50"
        >
          {/* Tabs */}
          <div className="flex items-center gap-1 rounded-2xl bg-zinc-100 p-1 sm:w-fit">
            {(["comprar", "vender"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative rounded-xl px-6 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  tab === t ? "text-white" : "text-zinc-500 hover:text-ink"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-ink"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative capitalize">{t === "comprar" ? "Comprar carro" : "Vender carro"}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tab === "comprar" ? (
              <motion.div
                key="comprar"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.4fr_1fr_1fr_auto] lg:items-end"
              >
                <Field label="Marca">
                  <select
                    className={selectClass}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value="Todas">Todas as marcas</option>
                    {brands.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                </Field>

                <Field label="Modelo">
                  <select className={selectClass} defaultValue="Todos">
                    {modelOptions.map((m) => (
                      <option key={m}>{m === "Todos" ? "Todos os modelos" : m}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                </Field>

                <Field label="Preço de">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="R$ 30.000"
                    className={selectClass}
                  />
                </Field>

                <Field label="Preço até">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="R$ 250.000"
                    className={selectClass}
                  />
                </Field>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2.5 rounded-xl bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
                >
                  <Search className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  Buscar ofertas
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="vender"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end"
              >
                <Field label="Placa do veículo">
                  <input
                    type="text"
                    placeholder="ABC1D23"
                    maxLength={7}
                    className={`${selectClass} font-display font-bold tracking-[0.2em] placeholder:tracking-[0.2em]`}
                  />
                </Field>

                <Field label="Ano / Modelo">
                  <select className={selectClass} defaultValue="2024">
                    {Array.from({ length: 25 }, (_, i) => 2025 - i).map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                </Field>

                <Field label="Quilometragem">
                  <input type="text" inputMode="numeric" placeholder="45.000 km" className={selectClass} />
                </Field>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2.5 rounded-xl bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
                >
                  Avaliar grátis
                  <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-brand"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
