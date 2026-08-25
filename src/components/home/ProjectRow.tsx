"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export interface Project {
  number: string;
  title: string;
  description: string;
  category: string;
}
interface ProjectRowProps {
  project: Project;
}
export default function ProjectRow({
  project,
}: ProjectRowProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <li className="group border-t border-white/10 first:border-t-0">
      <Link
        href="/work"
        className="relative grid min-h-40 gap-6 py-8 outline-none transition-colors duration-300 hover:bg-white/2.5 focus-visible:bg-white/[0.035] sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-10"
      >
        <motion.span
          initial={false}
          animate={{
            opacity: 1,
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { x: 3 }
          }
          className="font-mono text-[0.6rem] tracking-[0.18em] text-white/25"
        >
          {project.number}
        </motion.span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <motion.h3
              initial={false}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { x: 4 }
              }
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl"
            >
              {project.title}
            </motion.h3>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/30">
              {project.category}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/55">
            {project.description}
          </p>
        </div>
        <motion.span
          aria-hidden="true"
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  x: 4,
                  borderColor: "rgba(255,255,255,0.3)",
                }
          }
          whileTap={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 0.94,
                }
          }
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="flex size-10 items-center justify-center border border-white/10 text-white/35 transition-colors duration-300 group-hover:text-white sm:size-12"
        >
          →
        </motion.span>
      </Link>
    </li>
  );
}