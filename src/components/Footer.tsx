import { Car } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const InstagramIcon = () => (
  <svg {...iconProps}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const FacebookIcon = () => (
  <svg {...iconProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg {...iconProps}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg {...iconProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const columns = [
  {
    title: "Comprar",
    items: ["Carros usados", "Carros novos", "Elétricos", "Blindados", "Motos"],
  },
  {
    title: "Vender",
    items: ["Anunciar grátis", "Venda para lojista", "Avaliar meu carro", "Tabela FIPE"],
  },
  {
    title: "Ajuda",
    items: ["Central de ajuda", "Dicas de segurança", "Termos de uso", "Privacidade"],
  },
];

const socials = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: LinkedinIcon, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink">
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <a href="#topo" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white">
                <Car className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-display text-2xl font-extrabold lowercase tracking-tight text-white">
                webmotors<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              A maior plataforma de compra e venda de veículos do Brasil.
              Há 30 anos acelerando negócios.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#topo"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.06 }}
                  whileTap={{ scale: 0.92 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-zinc-400 transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <s.icon />
                </motion.a>
              ))}
            </div>

            {/* App badges */}
            <div className="mt-7 flex flex-wrap gap-3">
              {["App Store", "Google Play"].map((store) => (
                <a
                  key={store}
                  href="#topo"
                  className="group flex items-center gap-2.5 rounded-xl border border-white/12 px-4 py-2.5 transition-colors duration-300 hover:border-brand/60"
                >
                  <Car className="h-4 w-4 text-brand" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500">
                      Baixar na
                    </span>
                    <span className="block text-xs font-bold text-white">{store}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#topo"
                      className="group relative text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                      <span className="absolute -left-4 opacity-0 transition-all duration-300 text-brand group-hover:-left-3 group-hover:opacity-100">
                        →
                      </span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Webmotors S.A. — Conceito recriado para fins de estudo.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#topo" className="transition-colors hover:text-white">Termos</a>
            <a href="#topo" className="transition-colors hover:text-white">Privacidade</a>
            <a href="#topo" className="transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative select-none overflow-hidden" aria-hidden>
        <Reveal amount={0.2}>
          <p className="text-outline whitespace-nowrap text-center font-display text-[16.5vw] font-black lowercase leading-[0.85] tracking-tight">
            webmotors
          </p>
        </Reveal>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      </div>
    </footer>
  );
}
