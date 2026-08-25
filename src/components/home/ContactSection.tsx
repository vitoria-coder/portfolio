"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import HomeReveal from "./HomeReveal";
export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      aria-labelledby="contact-title"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:px-10 lg:py-44">
        <HomeReveal>
          <div className="max-w-4xl">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
              Contact
            </p>
            <h2
              id="contact-title"
              className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl"
            >
              Vamos conversar
              <span className="text-white/30">?</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Se você quiser conhecer melhor meu trabalho, discutir uma ideia
              ou conversar sobre desenvolvimento de software, entre em
              contato.
            </p>
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -2 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.98 }
              }
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="mt-10 w-fit"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-5 border border-white/20 px-6 text-sm font-medium text-white outline-none transition-colors duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <span>Entrar em contato</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </HomeReveal>
      </div>
    </section>
  );
}