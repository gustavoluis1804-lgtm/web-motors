import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Camera, Handshake, KeyRound } from "lucide-react";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    icon: Camera,
    num: "01",
    title: "Anuncie grátis",
    desc: "Fotos, dados do carro e pronto. Seu anúncio no ar em menos de 5 minutos.",
  },
  {
    icon: Handshake,
    num: "02",
    title: "Receba propostas",
    desc: "Milhões de compradores todos os dias. Negocie com segurança pela plataforma.",
  },
  {
    icon: KeyRound,
    num: "03",
    title: "Venda tranquilo",
    desc: "Transferência assistida e pagamento garantido. Sem dor de cabeça.",
  },
];

export function SellCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="vender" ref={ref} className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="absolute right-[8%] top-0 h-72 w-72 rounded-full bg-brand/14 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy + steps */}
          <div>
            <SectionHeading
              index="03"
              kicker="Venda seu carro"
              title={
                <>
                  Vendeu, valeu.
                  <br />
                  <span className="text-brand">Simples assim.</span>
                </>
              }
            />
            <Reveal delay={0.15} className="mt-5 max-w-md text-base leading-relaxed text-zinc-400">
              Anunciar na Webmotors é grátis e rápido. Seu carro para quem realmente
              quer comprar — com a audiência de quem entende de carro no Brasil.
            </Reveal>

            <div className="mt-10 space-y-2">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={0.2 + i * 0.1} amount={0.4}>
                  <div className="group flex items-start gap-5 rounded-2xl border border-white/8 p-5 transition-all duration-500 hover:border-brand/40 hover:bg-white/[0.04]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                      <s.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="flex items-baseline gap-2.5 font-display text-lg font-bold tracking-tight text-white">
                        <span className="text-xs font-extrabold text-brand">{s.num}</span>
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.45} className="mt-9">
              <motion.a
                href="#topo"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand/30 transition-colors hover:bg-brand-deep"
              >
                Anunciar meu carro grátis
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.a>
            </Reveal>
          </div>

          {/* Parallax image */}
          <Reveal delay={0.15} amount={0.2}>
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                style={{ y: imgY }}
                src="https://images.pexels.com/photos/16896042/pexels-photo-16896042.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Carros anunciados à noite"
                className="h-[420px] w-full scale-[1.25] object-cover lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/12 bg-white/[0.07] px-6 py-5 backdrop-blur-xl"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Tempo médio</p>
                  <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-white">
                    7 dias <span className="text-sm font-semibold text-zinc-400">para vender</span>
                  </p>
                </div>
                <span className="hidden h-px w-16 bg-white/20 sm:block" />
                <div className="hidden sm:block">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Avaliação</p>
                  <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-white">
                    4,9<span className="text-sm font-semibold text-zinc-400">/5</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
