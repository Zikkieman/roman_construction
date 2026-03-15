import { aboutPoints } from "../../data/architectureHome";
import { IconArrow } from "../common/icons";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#17130f] text-[#ece7e2]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="about-background-word absolute right-[-2%] top-[13%] hidden lg:block">
          ARCHITECT
        </div>
        <div className="absolute right-[6%] top-[18%] hidden h-px w-[26%] bg-white/8 lg:block" />
        <div className="absolute right-[20%] top-[18%] hidden h-[130px] w-px bg-white/8 lg:block" />
        <div className="absolute left-[32%] top-[74%] hidden h-px w-[14%] bg-white/10 lg:block" />
      </div>

      <div className="mx-auto max-w-[1460px] px-8 py-24 sm:px-12 lg:px-20 lg:py-32 xl:px-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          <div
            className="reveal relative lg:w-[40%] xl:w-[41%]"
            data-reveal="true"
          >
            <div className="relative mx-auto w-full lg:mx-0">
              <div className="overflow-hidden bg-[#1f1a15] shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
                <img
                  alt="Cliffside architectural residence"
                  className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[620px]"
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
                />
              </div>

              <div className="relative z-10 hidden overflow-hidden border border-white/6 bg-[#231d17] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:absolute lg:-bottom-10 lg:right-[-4%] lg:block lg:w-[54%]">
                <img
                  alt="Modern black home exterior"
                  className="h-[250px] w-full object-cover sm:h-[300px] lg:h-[320px]"
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                />
              </div>

              <div className="absolute bottom-[7%] left-[74%] hidden items-center gap-4 text-white/20 lg:flex">
                <span className="h-px w-44 bg-white/14" />
                <span className="text-xl">→</span>
              </div>
            </div>
          </div>

          <div
            className="reveal relative z-10 lg:w-[60%] lg:pl-10 xl:w-[70%] xl:pl-14"
            data-reveal="true"
          >
            <h2 className="max-w-none font-sans text-[34px] font-extrabold leading-[1.22] tracking-[-0.045em] text-[#ece7e2] sm:text-[34px] lg:text-[48px] xl:text-[52px]">
              <span className="text-[#ece7e2]">Who We Are: Leading </span>
              <span className="about-outline-text">Architectural</span>
              <br className="hidden sm:block" />
              <span className="about-outline-text">Agency</span>
              <span className="text-[#ece7e2]">
                {" "}
                Who Create Unique Living Spaces
              </span>
            </h2>

            <div className="mt-10 overflow-hidden border border-white/6 bg-[#231d17] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:hidden">
              <img
                alt="Modern black home exterior"
                className="h-[300px] w-full object-cover sm:h-[360px]"
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              />
            </div>

            <p className="mt-10 max-w-[670px] text-[17px] leading-[1.9] text-[#ada39a]">
              We are a leading architecture firm dedicated to creating visionary
              designs that transcend expectations. With our team of highly
              skilled architects and designers, we specialize in crafting.
            </p>

            <div className="mt-10 grid max-w-[760px] gap-7">
              {aboutPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="mt-1 flex items-center gap-3 text-[#C39B7B]">
                    <span className="block h-[8px] w-[8px] bg-[#C39B7B]" />
                    <span className="text-sm">→</span>
                  </div>
                  <p className="text-[17px] font-semibold leading-[1.6] text-[#cfc7bf]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <a
              className="mt-12 inline-flex h-[60px] items-center justify-center border border-[#C39B7B] px-8 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#C39B7B]"
              href="#projects"
            >
              Know More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
