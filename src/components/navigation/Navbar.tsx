"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarMobile from "./NavbarMobile";
import type { NavbarLinkItem } from "./NavbarLink";

const navigationLinks: NavbarLinkItem[] = [
  {
    href: "/",
    label: "Home",
    index: "01",
  },
  {
    href: "/about",
    label: "About",
    index: "02",
  },
  {
    href: "/work",
    label: "Work",
    index: "03",
  },
  {
    href: "/lab",
    label: "Lab",
    index: "04",
  },
  {
    href: "/contact",
    label: "Contact",
    index: "05",
  },
];

export default function Navbar(){
    const pathname = usePathname();
    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const activeHref =
     navigationLinks.find((link) => {
        if (link.href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(link.href);
     })?.href ?? "/";

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <motion.div
             initial={{ opacity: 0, y: -8}}
             animate={{ opacity: 1, y: 0}}
             transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
             }}
             className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                <NavbarBrand />
                <div className="hidden lg:block">
                    <NavbarLinks
                     links={navigationLinks}
                     activeHref={activeHref}
                    />
                </div>
                <button 
                 type="button"
                 aria-expanded={isMobileMenuOpen}
                 aria-controls="mobile-navigation"
                 aria-label={
                    isMobileMenuOpen
                    ? "Fechar navegação"    
                    : "Abrir navegação"
                 }
                 onClick={() => setIsMobileMenuOpen((current) => !current)}
                 className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-white/70 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 lg:hidden">
                    <span className="flex items-center gap-2">
                        <span className="font-mono text-[0.55rem] uppercase tracking-[0.16em]">
                            Menu
                        </span>
                        <span aria-hidden="true" className="flex size-5 flex-col justify-center gap-1.5">
                            <span className={
                                isMobileMenuOpen
                                ? "block h-px w-5 translate-y-0.75 rotate-45 bg-current transition-transform duration-200"
                                : "block h-px w-5 bg-current transition-transform duration-200"
                            }
                            />
                            <span className={
                                isMobileMenuOpen
                                ? "block h-px w-5 -translate-y-0.75 -rotate-45 bg-current transition-transform duration-200"
                                : "block h-px w-3 self-end bg-current transition-transform duration-200"
                            }
                            />
                        </span>
                    </span>
                 </button>
             </motion.div>
            <NavbarMobile
             links={navigationLinks}
             activeHref={activeHref}
             isOpen={isMobileMenuOpen}
             onClose={closeMobileMenu}
             />
        </header>
    )
}