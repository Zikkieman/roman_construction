import { useState } from "react";
import { Link } from "react-router-dom";
import { awardItems } from "../data/architectureHome";
import {
  COMPANY,
  COMPANY_MISSION_POINTS,
  COMPANY_VISION,
} from "../data/company";
import { ScrollToHeroButton } from "../components/common/ScrollToHeroButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { navigationItems } from "../data/architectureHome";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useScrollState } from "../hooks/useScrollState";

const aboutAccordions = [
  {
    title: "Our Mission",
    body: "Executing contracts with strict adherence to scope, timelines, and budgets while maintaining high standards of workmanship, material selection, and transparent communication.",
  },
  {
    title: "Our Vision",
    body: COMPANY_VISION,
  },
];

const aboutPageOverviewParagraphs = [
  "Roman Contractors is a construction and interior fit-out company focused on delivering well-executed, high-quality projects with professionalism and consistency. We operate as a design-build contractor, managing projects from initial concept and planning through to final delivery, ensuring a clear and coordinated process at every stage.",
  "Our approach is built on structure, clarity, and control. We prioritise proper planning, disciplined execution, and close project oversight to keep timelines on track, manage costs responsibly, and maintain a high standard of work throughout. This allows us to deliver projects that are not only completed efficiently, but also built to last.",
  "Across residential and commercial spaces, we combine skilled craftsmanship with careful attention to detail to create environments that are functional, durable, and well-finished. We understand the importance of getting both the technical and visual aspects right, ensuring each project meets practical needs while maintaining a refined outcome.",
  "We place strong emphasis on communication and client coordination, keeping clients informed and aligned at every stage to ensure a smooth and reliable process. At the core of our operations is a commitment to developing and working with quality homegrown talent. We actively engage and support locally based professionals and artisans, ensuring that our projects reflect both strong technical expertise and a genuine investment in the communities we serve.",
  "At Roman Contractors, our focus remains clear, to deliver quality work, manage projects properly, and build lasting trust through consistent performance.",
];

function AboutPageCircleBadge() {
  return (
    <div className="about-page-badge relative h-[146px] w-[146px]">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 146 146"
      >
        <defs>
          <path
            id="about-circle-path"
            d="M 73,73 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
          />
        </defs>
        <text fill="#d6a26c">
          <textPath href="#about-circle-path" startOffset="0%">
            ROMAN CONTRACTORS LTD
          </textPath>
        </text>
      </svg>
    </div>
  );
}

function AccordionChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 text-[#17120d] transition-transform duration-300 ${
        isOpen ? "rotate-90" : "rotate-0"
      }`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7 4.5 12.5 10 7 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutPage() {
  const isScrolled = useScrollState();
  const [openAccordion, setOpenAccordion] = useState("Our Vision");

  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#17120d]">
      <Header
        activeLabel="About Us"
        isScrolled={isScrolled}
        navigationItems={navigationItems}
        variant="light"
      />
      <main className="pt-[120px] lg:pt-[132px]">
        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1910px] px-8 pb-8 pt-6 sm:px-10 lg:px-14 lg:pb-10 lg:pt-8">
            <div className="bg-[#ece7df] px-8 py-8 text-[13px] font-medium uppercase tracking-[0.06em] text-[#6f685f] sm:px-10 lg:px-8">
              <Link className="text-[#17120d]" to="/">
                Home
              </Link>
              <span className="mx-3 text-[#9b9389]">-</span>
              <span>About Us</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-24 pt-14 sm:px-12 lg:px-16 lg:pb-28 lg:pt-16">
            <div className="reveal relative lg:pl-[46px]" data-reveal="true">
              <div className="absolute left-0 top-[12px] hidden lg:block">
                <span className="block origin-top-left rotate-90 text-[18px] font-medium uppercase tracking-[0.14em] text-[var(--color-brand-accent)]">
                  About Us
                </span>
              </div>
              <h1 className="max-w-[1120px] font-sans text-[34px] font-medium leading-[1.34] tracking-[-0.05em] text-[#17120d] sm:text-[38px] lg:text-[40px]">
                We Are <span className="font-extrabold">{COMPANY.name}.</span>{" "}
                We Build And Deliver Well Managed Spaces With Precision
              </h1>
            </div>

            <div
              className="reveal mt-10 overflow-hidden bg-[#e7e1d8]"
              data-reveal="true"
              style={{ transitionDelay: "120ms" }}
            >
              <img
                alt="Modern Roman architecture"
                className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[620px]"
                src="https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857262/romancontractors/solar/evgeniy-alyoshin-2ASQyjafflo-unsplash_jnscv8.jpg"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f7f4ef]">
          <div className="pointer-events-none absolute bottom-[-4%] right-[-2%] hidden lg:block">
            <span className="about-page-background-word">ARCHITECT</span>
          </div>
          <div className="mx-auto max-w-[1340px] px-8 pb-24 sm:px-12 lg:px-16 lg:pb-32">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
              <div className="reveal lg:pr-12" data-reveal="true">
                <div className="max-w-[690px] space-y-6 text-[17px] leading-[1.75] text-[#6f685f]">
                  {aboutPageOverviewParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {COMPANY_MISSION_POINTS.map((point, index) => (
                    <div
                      key={point}
                      className="group relative min-h-[152px] overflow-hidden bg-[#ece7df] px-6 py-6 transition-colors duration-300 hover:bg-[#25211c]"
                    >
                      <div className="pointer-events-none absolute right-4 top-3 text-[54px] font-extrabold leading-none tracking-[-0.08em] text-[#e4ded6] opacity-70 transition-colors duration-300 group-hover:text-white/8 group-hover:opacity-100">
                        0{index + 1}
                      </div>
                      <p className="relative z-10 max-w-[240px] text-[16px] font-semibold leading-[1.55] text-[#6f685f] transition-colors duration-300 group-hover:text-[#ece7e2]">
                        {point}
                      </p>
                      <span className="absolute bottom-0 left-0 h-1 w-14 bg-[var(--color-brand-accent)] transition-all duration-300 group-hover:w-full" />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="reveal relative lg:border-l lg:border-dashed lg:border-[#ddd4ca] lg:pl-12"
                data-reveal="true"
                style={{ transitionDelay: "120ms" }}
              >
                <div className="grid gap-8">
                  {aboutAccordions.map((item) => {
                    const isOpen = openAccordion === item.title;

                    return (
                      <div key={item.title}>
                        <button
                          className="flex min-h-[66px] w-full items-center justify-between bg-[#ece7df] px-8 py-5 text-left"
                          type="button"
                          onClick={() =>
                            setOpenAccordion((current) =>
                              current === item.title ? current : item.title,
                            )
                          }
                        >
                          <h3 className="text-[18px] font-extrabold text-[#17120d]">
                            {item.title}
                          </h3>
                          <AccordionChevron isOpen={isOpen} />
                        </button>
                        <div
                          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-400 ease-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="min-h-0">
                            <p className="px-8 pb-4 pt-5 text-[17px] leading-[1.7] text-[#6f685f]">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-14">
                  <div className="relative overflow-hidden bg-[#e7e1d9]">
                    <div className="grid grid-cols-2 gap-5 sm:gap-7">
                      <img
                        alt="Roman Contractors master lounge interior"
                        className="h-[320px] w-full object-cover sm:h-[390px] lg:h-[460px]"
                        src="https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857199/romancontractors/tiles/darren-richardson-1zKFtv-TmWM-unsplash_mx234e.jpg"
                      />
                      <img
                        alt="Roman Contractors interior finishing detail"
                        className="h-[320px] w-full object-cover sm:h-[390px] lg:h-[460px]"
                        src="https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859662/romancontractors/painting/thomas-despeyroux-7gYjhBadDsQ-unsplash_ddx6zy.jpg"
                      />
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <AboutPageCircleBadge />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-24 sm:px-12 lg:px-16 lg:pb-32">
            <div
              className="reveal relative overflow-visible bg-[#e7e1d8]"
              data-reveal="true"
            >
              <img
                alt="Soft modern interior"
                className="h-[280px] w-full object-cover object-center sm:h-[360px] lg:h-[420px]"
                src="https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859668/romancontractors/painting/luca-romano-4gopZjL1bSg-unsplash_zo3zdo.jpg"
              />

              <div className="pointer-events-none absolute inset-0 hidden lg:block">
                <div className="absolute bottom-[-338px] right-0 z-30 w-[240px] overflow-hidden bg-[#25211c] px-8 pb-8 pt-9 text-white">
                  {/* <div className="text-[58px] font-medium leading-none tracking-[-0.05em]">
                    1
                  </div> */}
                  <div className="mt-6 text-2xl font-medium uppercase leading-[1.5] tracking-[0.12em] text-white">
                    Years Of
                    Experience
                  </div>
                  <svg
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 h-[68%] w-[48%] text-[#16130f]"
                    viewBox="0 0 180 220"
                    fill="none"
                  >
                    <path
                      d="M35 215V148m0 0 38-34m-38 34h26m12-34 28-26m-28 26v101m28-127 22-19m-22 19v127m22-146 30-24m-30 24v146m30-170 17-13v183m-145 0h145"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-16 pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.8fr)] lg:gap-14 lg:pt-12">
                <div
                  className="reveal relative lg:pl-[48px]"
                  data-reveal="true"
                >
                  <div className="absolute left-0 top-[2px] hidden lg:block">
                    <span className="block origin-top-left rotate-90 text-[18px] font-medium uppercase tracking-[0.14em] text-[var(--color-brand-accent)]">
                      Highlights
                    </span>
                  </div>

                  <h2 className="font-sans text-[34px] font-medium leading-[1.2] tracking-[-0.045em] text-[#17120d] sm:text-[42px] lg:text-[36px]">
                    Delivery Highlights
                  </h2>

                  <div className="mt-8 border-t border-dashed border-[#ddd4ca]">
                    {awardItems.map((item, index) => (
                      <div
                        key={item.title}
                        className={`grid grid-cols-1 gap-3 py-7 sm:grid-cols-[180px_1fr] sm:items-center lg:grid-cols-[180px_1fr] ${
                          index < awardItems.length - 1
                            ? "border-b border-dashed border-[#e3dad0]"
                            : ""
                        }`}
                      >
                        <div className="text-[18px] font-medium text-[#5d554e]">
                          {item.year}
                        </div>
                        <div className="text-[20px] font-extrabold tracking-[-0.03em] text-[#5b544d] sm:text-[18px]">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="reveal relative min-h-[220px] lg:min-h-[430px]"
                  data-reveal="true"
                  style={{ transitionDelay: "120ms" }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(218,208,197,0.3)_1.6px,transparent_0)] bg-[length:16px_16px]" />

                  <div className="absolute bottom-[16px] right-0 z-30 w-[48%] overflow-hidden bg-[#25211c] px-8 pb-7 pt-8 text-white sm:w-[42%] lg:hidden">
                    {/* <div className="text-[58px] font-medium leading-none tracking-[-0.05em]">
                      1
                    </div> */}
                    <div className="mt-6 text-md font-medium uppercase leading-[1.45] tracking-[0.12em] text-white">
                      Years Of Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="light" />
      <ScrollToHeroButton />
    </div>
  );
}
