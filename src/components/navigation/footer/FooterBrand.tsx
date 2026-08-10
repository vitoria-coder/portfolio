import Link from "next/link";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link
        href="/"
        className="inline-flex items-center gap-3 text-white outline-none transition-opacity duration-200 hover:opacity-75 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/60"
        aria-label="Vitória Sousa — página inicial"
      >
        <span
          aria-hidden="true"
          className="flex size-7 items-center justify-center border border-white/30 text-[0.65rem]"
        >
          VS
        </span>

        <span className="text-sm font-medium tracking-[-0.01em]">
          Vitória Sousa
        </span>
      </Link>

      <p className="mt-5 text-sm leading-6 text-white/50">
        Engenheira de software focada em criar experiências digitais bem planejadas e com propósito.
      </p>
    </div>
  );
}