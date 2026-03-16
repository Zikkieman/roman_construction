import { IconArrow } from "../common/icons";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { COMPANY } from "../../data/company";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#16120e] text-white"
    >
      <div className="absolute inset-0">
        <img
          alt="Architecture hero"
          className="h-full w-full object-cover object-center opacity-70"
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

      <div className="absolute right-[7.7%] top-[28%] hidden xl:block">
        <div className="relative flex h-[232px] w-[232px] items-center justify-center">
          <svg
            aria-hidden="true"
            className="hero-badge absolute inset-0 h-full w-full text-[#8f725a]"
            viewBox="0 0 220 220"
          >
            <defs>
              <path
                id="hero-badge-path"
                d="M110,110 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
              />
            </defs>
            <text fill="currentColor">
              <textPath href="#hero-badge-path" startOffset="0%">
                ROMAN CONTRACTORS LIMITED • ROMAN CONTRACTORS LIMITED •
              </textPath>
            </text>
          </svg>
          <div className="flex size-11 items-center justify-center bg-[#C39B7B] text-[#17120d]">
            <svg
              aria-hidden="true"
              className="ml-0.5 size-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-8 hidden h-[56%] w-[40px] flex-col items-center justify-end gap-7 pb-20 sm:left-10 lg:left-14 xl:flex">
        <a
          aria-label="Facebook"
          className="flex size-7 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 hover:bg-[#C39B7B]"
          href="#home"
        >
          <svg
            aria-hidden="true"
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.4 1.4-1.4H16V5.8c-.5-.1-1.3-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.9v1.8H8v2.7h2.1v7h3.4Z" />
          </svg>
        </a>
        <a
          aria-label="Instagram"
          className="flex size-7 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 hover:bg-[#C39B7B]"
          href="#home"
        >
          <svg
            aria-hidden="true"
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
            <circle cx="12" cy="12" r="3.5" />
            <circle
              cx="17.3"
              cy="6.8"
              r="0.8"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>
        <a
          aria-label="Twitter"
          className="flex size-7 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 hover:bg-[#C39B7B]"
          href="#home"
        >
          <svg
            aria-hidden="true"
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.9 7.1c.7-.1 1.4-.4 2-.8-.3.7-.8 1.3-1.4 1.7v.4c0 4.4-3.3 9.4-9.4 9.4-1.9 0-3.6-.5-5.1-1.5h.8c1.5 0 2.9-.5 4-1.4-1.4 0-2.6-1-3-2.3.2 0 .4.1.7.1.3 0 .6 0 .8-.1-1.5-.3-2.6-1.6-2.6-3.2.4.2.9.4 1.4.4-.9-.6-1.5-1.6-1.5-2.8 0-.6.2-1.2.5-1.7 1.6 2 4 3.3 6.7 3.4-.1-.2-.1-.5-.1-.8 0-1.9 1.5-3.4 3.4-3.4 1 0 1.9.4 2.5 1.1Z" />
          </svg>
        </a>
      </div>

      <div className="absolute right-0 top-[44%] hidden h-[48%] w-[79px] xl:block">
        <div className="hero-side-label absolute right-[22px] top-0 text-white/78">
          CALL:{COMPANY.phone}
        </div>
        <div className="hero-side-label absolute bottom-14 right-[22px] text-white/78">
          MAIL: {COMPANY.email}
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-0 right-0 z-20 hidden h-[76px] w-[79px] items-center justify-center bg-[#C39B7B] text-[#17120d] transition-colors duration-300 hover:bg-white xl:flex"
      >
        <IconArrow />
      </button>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1910px] flex-col px-8 pb-0 pt-[154px] sm:px-10 lg:px-14">
        <div className="max-w-[900px]">
          {/* <SectionEyebrow>Architecture Home</SectionEyebrow> */}
          <h1 className="mt-11 max-w-[900px] font-sans text-[60px] font-extrabold leading-[1.30] tracking-[-0.06em] text-[#ece7e2] sm:text-[45px] lg:text-[60px]">
            Aesthetix: Redefining
            <br />
            <span className="text-[#ece7e2] mt-5">Spaces with </span>
            <span className="hero-outline-text">Architectural</span>
            <br />
            <span className="hero-outline-text">Magic</span>
          </h1>
          <p className="mt-7 max-w-[640px] text-[16px] leading-[2] text-white/76">
            Welcome to Esta Architects, where innovation meets elegance. We are
            a leading architecture firm dedicated to creating visionary designs
            that transcend expectations.
          </p>
          <a
            className="mt-8 inline-flex h-[60px] items-center justify-center border border-[#C39B7B] px-10 text-[16px] font-bold text-white transition-colors duration-300 hover:bg-[#C39B7B]"
            href="#contact"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-auto h-[43vh] min-h-[330px] w-full" />
      </div>
    </section>
  );
}
