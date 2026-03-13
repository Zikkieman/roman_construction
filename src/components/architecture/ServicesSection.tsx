import { highlightCards, serviceCards } from "../../data/architectureHome";
import { IconArrow } from "../common/icons";

function ServiceIcon({ title }: { title: string }) {
  if (title === "Design") {
    return (
      <svg
        aria-hidden="true"
        className="size-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M10 35.5h18.5" />
        <path d="M10 35.5V16l16 19.5" />
        <path d="m19.8 13.8 13.9 13.9" />
        <path d="m31.2 9.8 6.9 6.9-3.9 3.9-6.9-6.9z" />
        <path d="M12.5 18.5 28.5 34" />
        <path d="M10 27h11.5" />
      </svg>
    );
  }

  if (title === "Construction") {
    return (
      <svg
        aria-hidden="true"
        className="size-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="10" y="10" width="28" height="28" />
        <path d="M10 18h28M10 28h28M18 10v8M30 18v10M22 28v10" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-12"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="11" y="11" width="26" height="26" />
      <path d="M17 11v26M11 17h14M24 17v9M24 26h13M29 11v7M17 24h7M31 31h6" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#17130f] text-[#ece7e2]">
      <div className="mx-auto max-w-[1460px] px-8 pt-24 sm:px-12 lg:px-20 lg:pt-32 xl:px-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-[760px] font-sans text-[34px] font-extrabold leading-[1.12] tracking-[-0.05em] text-[#ece7e2] sm:text-[40px] lg:text-[48px]">
            <span className="text-[#ece7e2]">What </span>
            <span className="services-outline-text">We Do</span>
            <span className="text-[#ece7e2]"> For You</span>
          </h2>

          <a className="group pt-2" href="#contact">
            <span className="relative inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-[#9e948b] transition-colors duration-300 group-hover:text-[#C39B7B]">
              View All Services
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C39B7B] transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute -left-5 top-0 hidden items-center text-white/18 lg:flex">
            <span className="text-lg">←</span>
          </div>
          <div className="pointer-events-none absolute -right-5 bottom-0 hidden items-center text-white/18 lg:flex">
            <span className="text-lg">→</span>
          </div>

          <div className="grid border border-dashed border-white/14 lg:grid-cols-3">
            {serviceCards.map((item, index) => (
              <article
                key={item.title}
                className={`reveal group min-h-[332px] px-9 py-11 lg:min-h-[360px] lg:px-12 lg:py-[3.25rem] ${
                  index < serviceCards.length - 1
                    ? "border-b border-dashed border-white/14 lg:border-b-0 lg:border-r lg:border-dashed"
                    : ""
                }`}
                data-reveal="true"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="text-[#C39B7B]">
                  <ServiceIcon title={item.title} />
                </div>
                <h3 className="mt-9 font-sans text-[24px] font-extrabold text-[#d4d0cb] transition-colors duration-300 group-hover:text-[#C39B7B] sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-8 max-w-[320px] text-[17px] leading-[1.7] text-[#a79d93]">
                  {item.description}
                </p>
                <div className="mt-10 text-[#C39B7B] transition-transform duration-300 group-hover:translate-x-1">
                  <IconArrow />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-[1910px] px-8 pb-24 sm:px-10 lg:px-14 lg:pb-32">
        <div className="grid gap-0 border-b border-dashed border-white/14 lg:grid-cols-2">
          {highlightCards.map((item, index) => (
            <article
              key={item.title}
              className={`reveal group ${index === 0 ? "lg:pr-0" : "lg:pl-0"}`}
              data-reveal="true"
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className="overflow-hidden bg-[#201913]">
                <img
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[360px] lg:h-[520px]"
                  src={item.image}
                />
              </div>
              <div className="flex items-end gap-2 px-2 py-7 sm:px-3">
                <h3 className="font-sans text-[24px] font-extrabold text-[#ece7e2] lg:text-[26px]">
                  {item.title === "Urban Architecture" ? "Urban" : "Home"}
                </h3>
                <p className="pb-1 text-[15px] text-[#9f958c]">
                  {item.title === "Urban Architecture"
                    ? "Architecture"
                    : "Interior"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
