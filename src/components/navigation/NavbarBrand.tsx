import Link from "next/link";
export default function NavbarBrand() {
  return (
    <Link
      href="/"
      aria-label="Vitória Sousa - início"
      className="group inline-flex min-h-11 items-center gap-3"
    >
      <span
        aria-hidden="true"
        className="relative flex size-7 items-center justify-center"
      >
        <span className="absolute size-5 rotate-45 border border-white/50 transition-transform duration-300 ease-out group-hover:rotate-135" />
        <span className="absolute size-1.5 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-125" />
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span className="text-sm font-medium tracking-[0.18em] text-white">
          VITÓRIA SOUSA
        </span>
        <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.24em] text-white/40">
          Software Engineer
        </span>
      </span>
    </Link>
  );
}