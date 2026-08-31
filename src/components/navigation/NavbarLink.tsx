"use client";
import Link from "next/link";
import { motion } from "motion/react";

export interface NavbarLinkItem {
  href: string;
  label: string;
  index: string;
}
interface NavbarLinkProps {
  link: NavbarLinkItem;
  isActive: boolean;
  onNavigate?: () => void;
  anchorRef?: (node: HTMLAnchorElement | null) => void;
}
export default function NavbarLink({
  link,
  isActive,
  onNavigate,
  anchorRef,
}: NavbarLinkProps) {
  return (
    <Link
      ref={anchorRef}
      data-navbar-link
      href={link.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className="group relative flex min-h-11 items-center gap-2 px-2 text-sm font-medium tracking-[0.08em] text-white/55 outline-none transition-colors duration-200 hover:text-white focus-visible:text-white"
    >
      <span
        aria-hidden="true"
        className="font-mono text-[0.55rem] tracking-normal text-white/25 transition-colors duration-200 group-hover:text-white/45 group-focus-visible:text-white/45"
      >
        {link.index}
      </span>
      <span>{link.label}</span>
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={{
          scale: isActive ? 1 : 0.7,
          opacity: isActive ? 1 : 0,
        }}
        whileHover={{
          scale: 1.15,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute inset-0 -z-10 rounded-sm bg-white/2.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
    </Link>
  );
}