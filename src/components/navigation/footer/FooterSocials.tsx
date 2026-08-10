const socialLinks = [
{
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/vitória-sousa-dev",
},
{
  label: "GitHub",
  href: "https://github.com/vitoria-coder",
  },
] as const;

export default function FooterSocials() {
return (
  <nav aria-label="Redes sociais">
    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/35">
      Connect
    </p>

    <ul className="mt-4 space-y-3">
     {socialLinks.map((social) => (
        <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-white/65 outline-none transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span
                aria-hidden="true"
                className="h-px w-4 bg-white/25 transition-all duration-200 group-hover:w-6 group-hover:bg-white/70"
              />

              <span>{social.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}