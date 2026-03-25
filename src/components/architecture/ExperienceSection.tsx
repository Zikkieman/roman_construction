import { aboutPoints } from "../../data/architectureHome";
import {
  COMPANY_OVERVIEW_EXTENDED,
  COMPANY_SHORT_OVERVIEW,
} from "../../data/company";

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#17130f] text-[#ece7e2]">
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" /> */}

      <div className="pointer-events-none absolute bottom-[-5%] left-[8%] hidden h-[220px] w-[420px] overflow-hidden opacity-[0.12] lg:block">
        {/* <img
          alt=""
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
        /> */}
      </div>

      <div className="pointer-events-none absolute bottom-[4%] right-[-2%] hidden h-[520px] w-[360px] opacity-[0.12] xl:block">
        <svg
          aria-hidden="true"
          className="h-full w-full"
          viewBox="0 0 360 520"
          fill="none"
          stroke="rgba(236,231,226,0.28)"
          strokeWidth="1.2"
        >
          <path d="M290 8 350 78 304 98 348 154 272 180 326 248 242 278 294 346 214 376 258 446 184 486" />
          <path d="M210 20 282 72 236 120 300 162 216 206 282 262 188 302 248 360 158 404 214 470" />
          <path d="M138 34 208 92 158 136 228 188 144 226 210 284 120 320 188 386 104 430 160 500" />
          <path d="M86 68 150 122 102 168 168 216 84 250 150 308 66 348 126 410 54 454 106 518" />
          <path d="M42 120 96 168 60 210 118 256 46 296 104 350 28 388 82 440 20 486" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1520px] px-8 py-24 sm:px-12 lg:px-20 lg:py-32 xl:px-24">
        <div className="grid gap-y-10 lg:grid-cols-[280px_minmax(0,1fr)_360px] lg:items-stretch lg:gap-x-12 xl:grid-cols-[300px_minmax(0,1fr)_390px] xl:gap-x-16">
          <div className="reveal lg:col-span-2" data-reveal="true">
            <h2 className="max-w-[1120px] font-sans text-[34px] font-extrabold leading-[1.28] tracking-[-0.05em] text-[#ece7e2] sm:text-[32px] lg:text-[40px] xl:text-[46px]">
              <span className="text-[#ece7e2]">Form &amp; Function: </span>
              <span className="experience-outline-text">
                Crafting Exquisite Spaces
              </span>
              <br />
              <span className="text-[#ece7e2]">with Flair Design</span>
            </h2>
          </div>

          <div
            className="reveal order-3 relative overflow-hidden bg-[#26231f] px-9 py-10 text-white lg:order-none lg:row-start-2"
            data-reveal="true"
          >
            <p className="text-[60px] font-semibold leading-none text-white sm:text-[66px]">
              1
            </p>
            <p className="mt-5 text-[13px] uppercase tracking-[0.18em] text-white/64">
              Years of
              <br />
              Experience
            </p>

            <div className="pointer-events-none absolute bottom-0 right-0 opacity-[0.18]">
              <svg
                aria-hidden="true"
                className="h-40 w-32"
                viewBox="0 0 112 144"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M12 138V74l36-34 34 30v68" />
                <path d="M22 138V86l26-24 24 20v56" />
                <path d="M54 138V98h12v40" />
                <path d="M44 84h18M36 96h10M74 96h8M78 112h8M30 114h8" />
                <path d="M6 138h100" />
              </svg>
            </div>
          </div>

          <div
            className="reveal order-4 lg:order-none lg:row-start-2"
            data-reveal="true"
          >
            <p className="max-w-[560px] text-[17px] leading-[1.85] text-[#b0a69d]">
              {COMPANY_SHORT_OVERVIEW} {COMPANY_OVERVIEW_EXTENDED}
            </p>

            <div className="mt-10 grid gap-7">
              {aboutPoints.slice(0, 3).map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="mt-1 flex items-center gap-3 text-[#C39B7B]">
                    <span className="block h-[8px] w-[8px] bg-[#C39B7B]" />
                    <span className="text-sm">→</span>
                  </div>
                  <p className="text-[18px] font-semibold leading-[1.55] text-[#d6d0c8]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <a
              className="mt-12 inline-flex h-[60px] items-center justify-center border border-[#C39B7B] px-8 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#C39B7B]"
              href="#contact"
            >
              Our Core Features
            </a>
          </div>

          <div
            className="reveal order-2 lg:order-none lg:col-start-3 lg:row-span-2 lg:self-stretch"
            data-reveal="true"
          >
            <div className="h-full overflow-hidden bg-[#231c16] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <img
                alt="Warm interior staircase"
                className="h-[360px] w-full object-cover sm:h-[460px] lg:h-full lg:min-h-[540px]"
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
