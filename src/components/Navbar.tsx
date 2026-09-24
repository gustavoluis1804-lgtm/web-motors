import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Car, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Comprar", href: "#ofertas" },
  { label: "Vender", href: "#vender" },
  { label: "Financiar", href: "#servicos" },
  { label: "Serviços", href: "#servicos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* red scroll progress */}
      <motion.div
        className="h-[3px] origin-left bg-brand"
        style={{ scaleX: progress }}
      />
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a href="#topo" className="group flex items-center gap-2">
            <motion.span
              whileHover={{ rotate: -12, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
              className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white shadow-lg shadow-brand/30"
            >
              <Car className="h-5 w-5" strokeWidth={2.4} />
            </motion.span>
            <span className="font-display text-2xl font-extrabold lowercase tracking-tight text-white">
              webmotors
              <span className="text-brand">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#topo"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <User className="h-4 w-4" />
              Entrar
            </a>
            <motion.a
              href="#vender"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-deep"
            >
              Anunciar grátis
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-6 py-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-display text-xl font-bold text-white transition-colors hover:bg-white/5 hover:text-brand"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href="#vender"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-brand px-4 py-3.5 text-center font-semibold text-white"
                >
                  Anunciar grátis
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
