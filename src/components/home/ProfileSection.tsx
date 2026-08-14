export default function ProfileSection() {
  return (
    <section
      aria-labelledby="profile-title"
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_20rem] lg:gap-24">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
              Profile
            </p>
            <h2
              id="profile-title"
              className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.05]"
            >
              Engenharia de software com atenção tanto à estrutura quanto à
              experiência de quem utiliza o produto.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Este espaço será desenvolvido posteriormente para apresentar
              minha trajetória, interesses técnicos, experiências e a forma
              como abordo problemas de software.
            </p>
          </div>
          <aside
            aria-label="Áreas de interesse"
            className="lg:border-l lg:border-white/10 lg:pl-8"
          >
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
              Areas of interest
            </p>
            <ul className="mt-6 space-y-3">
              <li className="border-b border-white/10 pb-3 text-sm text-white/60">
                Frontend Engineering
              </li>
              <li className="border-b border-white/10 pb-3 text-sm text-white/60">
                Software Architecture
              </li>
              <li className="border-b border-white/10 pb-3 text-sm text-white/60">
                Digital Products
              </li>
              <li className="border-b border-white/10 pb-3 text-sm text-white/60">
                Interface Design
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}