"use client";
import { useLayoutEffect, useRef, useState } from "react";
import NavbarLink, { type NavbarLinkItem } from "./NavbarLink";
import OrbitalIndicator from "./OrbitalIndicator";

interface NavbarLinksProps {
  links: NavbarLinkItem[];
  activeHref: string;
  onNavigate?: () => void;
}
export default function NavbarLinks({
  links,
  activeHref,
  onNavigate,
}: NavbarLinksProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const [linkCenters, setLinkCenters] = useState<number[]>([]);

  const activeIndex = Math.max(
    links.findIndex((link) => link.href === activeHref),
    0,
  );
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) {
      return;
    }
    const updatePositions = () => {
      const navRect = nav.getBoundingClientRect();
      const centers = Array.from(
        nav.querySelectorAll<HTMLElement>("[data-navbar-link]"),
      ).map((link) => {
        const rect = link.getBoundingClientRect();
        return rect.left - navRect.left + rect.width / 2;
      });
      setLinkCenters(centers);
    };
    updatePositions();
    const resizeObserver = new ResizeObserver(updatePositions);
    resizeObserver.observe(nav);
    window.addEventListener("resize", updatePositions);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePositions);
    };
  }, [links]);
  return (
    <div className="relative">
      <nav
        ref={navRef}
        aria-label="Navegação principal"
      >
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavbarLink
                link={link}
                isActive={link.href === activeHref}
                onNavigate={onNavigate}
              />
            </li>
          ))}
        </ul>
      </nav>
      <OrbitalIndicator
        position={linkCenters[activeIndex] ?? null}
      />
    </div>
  );
}