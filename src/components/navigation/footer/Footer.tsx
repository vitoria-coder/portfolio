import FooterBrand from "./FooterBrand";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-20">
          <FooterBrand />

          <FooterSocials />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-5 text-[0.65rem] uppercase tracking-[0.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>Vitória Sousa</span>

          <span>
            © {new Date().getFullYear()} — All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}