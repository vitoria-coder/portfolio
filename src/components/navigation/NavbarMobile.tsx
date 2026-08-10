"use client";
import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { NavbarLinkItem } from "./NavbarLink";

interface NavbarMobileProps {
  links: NavbarLinkItem[];
  activeHref: string;
  isOpen: boolean;
  onClose: () => void;
}
export default function NavbarMobile({
  links,
  activeHref,
  isOpen,
  onClose,
}: NavbarMobileProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 cursor-default bg-black/40 backdrop-blur-[2px] lg:hidden"
          />
          <motion.aside
            id="mobile-navigation"
            aria-label="Navegação móvel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,24rem)] flex-col border-l border-white/10 bg-black px-6 pb-8 pt-6 lg:hidden"
          >
            <div className="mb-16 flex items-center justify-between">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-white/35">
                Navigation System
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu"
                className="flex size-11 items-center justify-center rounded-full text-white/60 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <span
                  aria-hidden="true"
                  className="relative block size-4"
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>
            <nav
              aria-label="Navegação móvel"
              className="flex-1"
            >
              <ol className="space-y-1">
                {links.map((link, index) => {
                  const isActive = link.href === activeHref;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 16 }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        aria-current={isActive ? "page" : undefined}
                        className="group flex min-h-14 items-center gap-5 border-b border-white/[0.07] outline-none focus-visible:bg-white/4"
                      >
                        <span className="font-mono text-[0.6rem] tracking-[0.15em] text-white/25">
                          {link.index}
                        </span>

                        <span className="flex flex-1 items-center justify-between">
                          <span
                            className={
                              isActive
                                ? "text-base font-medium tracking-[0.08em] text-white"
                                : "text-base font-medium tracking-[0.08em] text-white/55 transition-colors group-hover:text-white"
                            }
                          >
                            {link.label}
                          </span>
                          <span
                            aria-hidden="true"
                            className={
                              isActive
                                ? "size-1.5 rounded-full bg-white"
                                : "size-1 rounded-full bg-white/20 transition-colors group-hover:bg-white/60"
                            }
                          />
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ol>
            </nav>
            <div className="flex items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/25">
              <span>System</span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald-400/70"
                />
                Online
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}