import { motion } from "framer-motion";
import { ArrowUpRight, BadgeDollarSign, FileCheck2, HandCoins, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: BadgeDollarSign,
    title: "Financiamento",
    desc: "Simule em segundos e parcele em até 60x com as menores taxas do mercado.",
    accent: "Pré-aprovação online",
  },
  {
    icon: ShieldCheck,
    title: "Seguro Auto",
    desc: "Compare coberturas de 12 seguradoras e proteja seu carro sem burocracia.",
    accent: "Até 30% mais barato",
  },
  {
    icon: FileCheck2,
    title: "Laudo Cautelar",
    desc: "Histórico completo do veículo: leilão, sinistro, roubo e restrições.",
    accent: "Resultado em minutos",
  },
  {
    icon: HandCoins,
    title: "Venda Rápida",
    desc: "Receba uma oferta da nossa rede de lojistas e venda em até 24 horas.",
    accent: "Dinheiro na conta",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <SectionHeading
            light
            index="02"
            kicker="Serviços"
            title={
              <>
                Tudo em volta do carro,
                <br />
                <span className="text-brand">resolvido aqui.</span>
              </>
            }
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} amount={0.25}>
              <motion.div
                whileHover="hover"
                className="group relative h-full overflow-hidden rounded-2xl border border-ink/8 bg-paper p-7 transition-colors duration-500 hover:border-ink"
              >
                {/* hover sweep */}
                <motion.span
                  variants={{ hover: { scaleY: 1 } }}
                  initial={{ scaleY: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 origin-bottom bg-ink"
                />

                <div className="relative">
                  <motion.span
                    variants={{ hover: { rotate: -8, scale: 1.06 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-white transition-colors duration-500 group-hover:bg-brand"
                  >
                    <s.icon className="h-6 w-6" strokeWidth={1.9} />
                  </motion.span>

                  <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-ink transition-colors duration-500 group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                    {s.desc}
                  </p>

                  <span className="mt-7 flex items-center justify-between border-t border-ink/8 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-brand transition-colors duration-500 group-hover:border-white/10">
                    {s.accent}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
