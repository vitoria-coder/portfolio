import Link from "next/link";

const contactChannels = [
{
    label: "WhatsApp",
    description: "Para conversas rápidas, oportunidades ou projetos.",
    action: "Conversar pelo WhatsApp",
    href: "https://wa.me/5521995620504?text=Ol%C3%A1%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20ou%20projeto.",
    external: true,
    symbol: "↗",
},
{
    label: "E-mail",
    description: "Para propostas, oportunidades e assuntos profissionais.",
    action: "Enviar e-mail",
    href: "mailto:vitoria.geremia@outlook.com",
    external: false,
    symbol: "@",
},
{
    label: "LinkedIn",
    description: "Para conexões profissionais e oportunidades.",
    action: "Ver LinkedIn",
    href: "https://www.linkedin.com/in/vitória-sousa-dev/",
    external: true,
    symbol: "in",
},
{
    label: "GitHub",
    description: "Para conhecer meus projetos e meu trabalho técnico.",
    action: "Ver GitHub",
    href: "https://github.com/vitoria-coder",
    external: true,
    symbol: "</>",
},
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40 lg:pt-40">
        <header className="max-w-4xl">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
            05 / Contact
          </p>
          <h1 className="mt-6 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Vamos conversar.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Tem um projeto, uma oportunidade ou uma ideia para compartilhar?
            Escolha a forma que for mais conveniente para entrar em contato.
          </p>
        </header>
        <section
          aria-labelledby="contact-options-title"
          className="mt-20 border-t border-white/10"
        >
          <div className="grid gap-8 py-8 sm:grid-cols-[1fr_2fr] sm:items-start">
            <div>
              <p
                id="contact-options-title"
                className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/30"
              >
                Contact channels
              </p>
            </div>
            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {contactChannels.map((channel) => {
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-6">
                      <span
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center border border-white/15 font-mono text-[0.65rem] text-white/55 transition-colors duration-200 group-hover:border-white/40 group-hover:text-white"
                      >
                        {channel.symbol}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-sm text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                      >
                        ↗
                      </span>
                    </div>
                    <div className="mt-12">
                      <h2 className="text-base font-medium tracking-[0.04em] text-white">
                        {channel.label}
                      </h2>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                        {channel.description}
                      </p>
                      <span className="mt-6 inline-flex text-[0.65rem] font-mono uppercase tracking-[0.16em] text-white/55 transition-colors duration-200 group-hover:text-white">
                        {channel.action}
                      </span>
                    </div>
                  </>
                );
                if (channel.external) {
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group min-h-56 bg-[#0a0a0a] p-6 outline-none transition-colors duration-200 hover:bg-white/[0.035] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60 sm:p-7"
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="group min-h-56 bg-[#0a0a0a] p-6 outline-none transition-colors duration-200 hover:bg-white/[0.035] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60 sm:p-7"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/25">
                Direct contact
              </p>
              <p className="mt-3 text-sm text-white/45">
                Prefere contato direto? O e-mail continua disponível.
              </p>
            </div>
            <a
              href="mailto:vitoria.geremia@outlook.com"
              className="inline-flex min-h-11 items-center border border-white/20 px-5 text-sm text-white outline-none transition-colors duration-200 hover:border-white/50 hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-white/70"
            >
              vitoria.geremia@outlook.com
            </a>
          </div>
        </section>
        <div className="mt-16 flex justify-end">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/40 outline-none transition-colors duration-200 hover:text-white focus-visible:text-white"
          >
            <span>Voltar para home</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}