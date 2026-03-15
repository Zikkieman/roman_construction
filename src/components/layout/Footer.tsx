import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "dark" | "light";
}

export function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";

  return (
    <footer className={`${isLight ? "bg-[#f7f4ef]" : "bg-[#17120d]"} text-white`}>
      <div className="mx-auto max-w-[1910px] px-8 pb-12 pt-24 sm:px-10 lg:px-14 lg:pb-14 lg:pt-32">
        <div className="bg-[#26231d] px-8 py-14 sm:px-12 sm:py-16 lg:px-12 lg:py-[78px] xl:px-14 xl:py-[86px]">
          <div className="mx-auto max-w-[1288px]">
            <div className="grid gap-14 lg:grid-cols-[1.18fr_0.62fr_0.72fr_1fr] lg:items-start lg:gap-16 xl:gap-20">
              <div className="reveal max-w-[332px]" data-reveal="true">
                <Link className="flex items-center gap-3 text-white" to="/">
                  <span className="relative block h-12 w-12 text-[#C39B7B]">
                    <span className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-current/85" />
                    <span className="absolute bottom-1 left-2 right-2 h-px bg-current/55" />
                    <span className="absolute inset-x-2 top-1 h-px bg-current/55" />
                    <span className="absolute bottom-1 left-2 h-7 w-4 border border-current/80" />
                    <span className="absolute bottom-4 left-[1.15rem] h-4 w-4 border-r border-t border-current/80" />
                    <span className="absolute bottom-1 right-2 h-5 w-3 border border-current/80" />
                  </span>
                  <span className="text-[29px] font-bold leading-none text-white">
                    Roman
                  </span>
                </Link>

                <p className="mt-8 text-[17px] leading-[1.75] text-[#9a9187]">
                  We would love to be a part of your dream space or home
                  project.
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
                        className="group inline-flex items-center gap-3 transition-colors duration-300 hover:text-[#C39B7B]"
                        to="/"
                      >
                        <span className="text-[#C39B7B] transition-transform duration-300 group-hover:translate-x-1">
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
                    className="transition-colors duration-300 hover:text-[#C39B7B]"
                    to="/#projects"
                  >
                    Projects
                  </Link>
                  <Link
                    className="transition-colors duration-300 hover:text-[#C39B7B]"
                    to="/#blog"
                  >
                    News And Articles
                  </Link>
                  <Link
                    className="transition-colors duration-300 hover:text-[#C39B7B]"
                    to="/contact"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    className="transition-colors duration-300 hover:text-[#C39B7B]"
                    to="/#services"
                  >
                    Services
                  </Link>
                </div>
              </div>

              <div className="reveal" data-reveal="true">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#f2ede7]">
                  Subscribe Newsletter
                </h3>

                <form className="mt-8">
                  <input
                    className="h-[60px] w-full border border-white/10 bg-transparent px-5 text-[16px] text-[#d4ccc3] outline-none placeholder:text-[#8f867d] focus:border-[#C39B7B]"
                    placeholder="Your Email Here"
                    type="email"
                  />
                </form>

                <Link
                  className="group mt-8 inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#C39B7B] transition-colors duration-300 hover:text-white"
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
          © <span className="font-semibold text-[#C39B7B]">Roman</span>{" "}
          Construction, All Rights Reserved By{" "}
          <span className="font-semibold text-[#C39B7B]">Roman</span>
        </p>
      </div>
    </footer>
  );
}
