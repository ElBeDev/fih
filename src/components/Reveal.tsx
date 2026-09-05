"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const initial = reduce ? false : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const };

  if (as === "li") {
    return (
      <motion.li
        className={className}
        initial={initial}
        whileInView={animate}
        viewport={{ once: true, amount: 0.3 }}
        transition={transition}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
