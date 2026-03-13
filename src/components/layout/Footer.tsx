export function Footer() {
  return (
    <footer className="bg-[#120f0b] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr]">
          <div className="reveal" data-reveal="true">
            <p className="font-serif text-4xl text-white">TRAZ</p>
            <p className="mt-6 max-w-md text-base leading-8 text-white/65">
              We would love to be a part of your dream space or home project.
            </p>
          </div>
          <div className="reveal" data-reveal="true">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6a26c]">
              Follow Us
            </p>
            <div className="mt-5 grid gap-3 text-sm uppercase tracking-[0.18em] text-white/78">
              <a href="#home">Facebook</a>
              <a href="#home">Instagram</a>
              <a href="#home">Linkedin</a>
              <a href="#home">Twitter</a>
            </div>
          </div>
          <div className="reveal" data-reveal="true">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6a26c]">
              Site Map
            </p>
            <div className="mt-5 grid gap-3 text-sm uppercase tracking-[0.18em] text-white/78">
              <a href="#projects">Projects</a>
              <a href="#blog">News And Articles</a>
              <a href="#contact">Request a Quote</a>
              <a href="#about">Services</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          © Traz Template, All Rights Reserved By EnvyTheme
        </div>
      </div>
    </footer>
  )
}
