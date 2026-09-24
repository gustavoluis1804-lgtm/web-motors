import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 500, suffix: " mil", prefix: "+", label: "veículos anunciados" },
  { value: 30, suffix: " anos", prefix: "", label: "líder do mercado brasileiro" },
  { value: 12, suffix: " mi", prefix: "", label: "visitas por mês" },
  { value: 98, suffix: "%", prefix: "", label: "de satisfação dos vendedores" },
];

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("pt-BR"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, mv, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 lg:py-20">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-brand/12 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center lg:text-left"
            >
              <span className="mx-auto mb-4 block h-[3px] w-8 rounded-full bg-brand lg:mx-0" />
              <p className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
