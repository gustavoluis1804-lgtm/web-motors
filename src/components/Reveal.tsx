import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function Reveal({ children, delay = 0, className, once = true, amount = 0.35 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* Section heading with red index marker, shared style */
export function SectionHeading({
  index,
  kicker,
  title,
  light = false,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  light?: boolean;
}) {
  return (
    <div>
      <Reveal className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-ink/60" : "text-zinc-500"}`}>
        <span className="h-px w-10 bg-brand" />
        <span className="text-brand">{index}</span>
        <span>{kicker}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl ${
            light ? "text-ink" : "text-white"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
