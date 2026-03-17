import { Link } from "react-router-dom";
import logoImage from "../../assets/images/Logo-transparent.png";
import { COMPANY, COMPANY_FOOTER_BLURB } from "../../data/company";

interface FooterProps {
  variant?: "dark" | "light";
}

export function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";

  return (
    <footer className={`${isLight ? "bg-[#f7f4ef]" : "bg-[#17120d]"} text-white`}>
      <div className="mx-auto max-w-[1910px] px-8 pb-12 pt-24 sm:px-10 lg:px-14 lg:pb-14 lg:pt-32">
        <div className="bg-[var(--color-brand-dark)] px-8 py-14 sm:px-12 sm:py-16 lg:px-12 lg:py-[78px] xl:px-14 xl:py-[86px]">
          <div className="mx-auto max-w-[1288px]">
            <div className="grid gap-14 lg:grid-cols-[1.18fr_0.62fr_0.72fr_1fr] lg:items-start lg:gap-16 xl:gap-20">
              <div className="reveal max-w-[332px]" data-reveal="true">
                <Link className="flex items-center gap-3 text-white" to="/">
                  <img
                    alt="Roman Contractors logo"
                    className="h-[58px] w-auto object-contain sm:h-[64px] md:h-[70px]"
                    src={logoImage}
                  />
                </Link>

                <p className="mt-8 text-[16px] leading-[1.75] text-[#b7aea5]">
                  {COMPANY_FOOTER_BLURB}
                </p>
              </div>

              <div className="reveal" data-reveal="true">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#f2ede7]">
                  Follow Us
                </h3>
                <div className="mt-8 grid gap-5 text-[16px] text-[#9a9187]">
                  {["Facebook", "Instagram", "Linkedin", "Twitter"].map(
                    (item) => (
                      <Link
                        key={item}
                        className="group inline-flex items-center gap-3 transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                        to="/"
                      >
                        <span className="text-[var(--color-brand-accent)] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                        <span>{item}</span>
                      </Link>
                    ),
                  )}
                </div>
              </div>

              <div className="reveal" data-reveal="true">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#f2ede7]">
                  Site Map
                </h3>
                <div className="mt-8 grid gap-5 text-[16px] text-[#9a9187]">
                  <Link
                    className="transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                    to="/about-us"
                  >
                    About Us
                  </Link>
                  <Link
                    className="transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                    to="/services"
                  >
                    Services
                  </Link>
                  <Link
                    className="transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                  <Link
                    className="transition-colors duration-300 hover:text-[var(--color-brand-accent)]"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="reveal" data-reveal="true">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#f2ede7]">
                  Subscribe Newsletter
                </h3>

                <form className="mt-8">
                  <input
                    className="h-[60px] w-full border border-white/10 bg-transparent px-5 text-[16px] text-[#d4ccc3] outline-none placeholder:text-[#8f867d] focus:border-[var(--color-brand-accent)]"
                    placeholder="Your Email Here"
                    type="email"
                  />
                </form>

                <Link
                  className="group mt-8 inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-accent)] transition-colors duration-300 hover:text-white"
                  to="/contact"
                >
                  <span className="text-[20px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                  <span>Subscribe Newsletter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-12 text-center text-[15px] font-medium text-[#7d756c]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[var(--color-brand-accent)]">
            {COMPANY.name}
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
