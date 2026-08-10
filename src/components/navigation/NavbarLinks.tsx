"use client";
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
    const activeIndex = Math.max(
        links.findIndex((link) => link.href === activeHref),
        0,
    );
    return (
        <div className="relative">
            <nav aria-label="Navegação principal">
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
             activeIndex={activeIndex}
             total={links.length}
             />
        </div>
    );
}