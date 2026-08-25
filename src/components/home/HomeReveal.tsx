"use client";
import { motion, useReducedMotion, type HTMLMotionProps, } from "motion/react";
import type { ReactNode } from "react";

interface HomeRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}
export default function HomeReveal({
  children,
  delay = 0,
  ...props
}: HomeRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}