import { Link } from "react-router-dom";
import { COMPANY_SERVICE_GROUPS } from "../data/company";
import { serviceSlugFromTitle } from "../data/serviceGallery";
import { ScrollToHeroButton } from "../components/common/ScrollToHeroButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { navigationItems } from "../data/architectureHome";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useScrollState } from "../hooks/useScrollState";

type ServicePageCard = {
  title: string;
  description: string;
  icon:
    | "urban"
    | "architecture"
    | "interior"
    | "exterior"
    | "industrial"
    | "model";
};

const servicePageCards: ServicePageCard[] = [...COMPANY_SERVICE_GROUPS];

function ServicePageIcon({ icon }: { icon: ServicePageCard["icon"] }) {
  if (icon === "urban") {
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

  if (icon === "architecture") {
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
        <path d="M10 18h28M10 28h14M18 10v8M24 18v10M24 28h14M31 10v7M16 24h8M30 31h8" />
      </svg>
    );
  }

  if (icon === "interior") {
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

  if (icon === "exterior") {
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
        <path d="m10 10 28 28M38 10 10 38M10 19l19 19M19 10l19 19" />
      </svg>
    );
  }

  if (icon === "industrial") {
    return (
      <svg
        aria-hidden="true"
        className="size-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M10 36h28V20l-6 5v-8l-8 6v-7l-14 9z" />
        <path d="M14 36V26M20 36v-8M26 36v-6M32 36v-9" />
        <path d="M14 16h14" />
        <path d="M28 16c0-3 2-5 5-5" />
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
      <path d="M17 11v26M11 17h26M24 17v20M17 24h20M11 31h26" />
    </svg>
  );
}

function ServicesPageGrid() {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[1340px] px-8 pb-20 sm:px-12 lg:px-16 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePageCards.map((item, index) => (
            <Link
              key={item.title}
              className="reveal flex justify-between flex-col group relative min-h-[378px] overflow-hidden bg-[var(--color-brand-light)] px-12 pb-12 pt-12 transition-transform duration-300 hover:-translate-y-1"
              data-reveal="true"
              style={{ transitionDelay: `${index * 70}ms` }}
              to={`/services/${serviceSlugFromTitle(item.title)}`}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[48%] bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.8)_1.6px,transparent_0)] bg-[length:16px_16px]" />
              <div className="relative z-10 text-[var(--color-brand-accent)]">
                <ServicePageIcon icon={item.icon} />
              </div>
              <h2 className="relative z-10 mt-10 font-sans text-[25px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#17120d] transition-colors duration-300 group-hover:text-[var(--color-brand-accent)]">
                {item.title}
              </h2>
              <p className="relative z-10 mt-8 max-w-[292px] text-[17px] leading-[1.65] text-[#6f685f]">
                {item.description}
              </p>
              <div className="relative z-10 mt-10 text-[28px] leading-none text-[var(--color-brand-accent)] transition-transform duration-300 group-hover:translate-x-1">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  const isScrolled = useScrollState();

  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#17120d]">
      <Header
        activeLabel="Services"
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
              <span>Services</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-18 pt-14 sm:px-12 lg:px-16 lg:pb-24 lg:pt-18">
            <div className="reveal relative lg:pl-[44px]" data-reveal="true">
              <div className="absolute left-0 top-[10px] hidden lg:block">
                <span className="block origin-top-left rotate-90 text-[18px] font-medium uppercase tracking-[0.14em] text-[var(--color-brand-accent)]">
                  Services
                </span>
              </div>
              <h1 className="max-w-[820px] font-sans text-[32px] font-semibold leading-[1.28] tracking-[-0.045em] text-[#17120d] sm:text-[38px] lg:text-[42px]">
                Our Services
              </h1>
              <p className="mt-6 max-w-[860px] text-[17px] leading-[1.75] text-[#6f685f]">
                We offer a comprehensive range of construction and interior
                fit-out services designed to deliver well-executed, practical,
                and high-quality results. From initial planning to final
                finishing, our approach is structured, efficient, and focused
                on meeting project requirements with clarity and consistency.
                Each service is carried out with attention to detail, ensuring
                reliable delivery across both residential and commercial
                projects.
              </p>
            </div>
          </div>
        </section>

        <ServicesPageGrid />
      </main>
      <Footer variant="light" />
      <ScrollToHeroButton />
    </div>
  );
}
