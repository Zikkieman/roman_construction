import { Link, Navigate, useParams } from "react-router-dom";
import { ScrollToHeroButton } from "../components/common/ScrollToHeroButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { navigationItems } from "../data/architectureHome";
import { COMPANY_SERVICE_GROUPS } from "../data/company";
import {
  getServiceGalleryImages,
  serviceSlugFromTitle,
} from "../data/serviceGallery";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useScrollState } from "../hooks/useScrollState";

const heightCycle = [
  "h-[420px] lg:h-[520px]",
  "h-[360px] lg:h-[430px]",
  "h-[340px] lg:h-[400px]",
  "h-[420px] lg:h-[500px]",
  "h-[360px] lg:h-[460px]",
] as const;

export function ServiceGalleryPage() {
  const { serviceSlug } = useParams();
  const isScrolled = useScrollState();

  useRevealOnScroll();

  const service = COMPANY_SERVICE_GROUPS.find(
    (item) => serviceSlugFromTitle(item.title) === serviceSlug,
  );

  if (!service || !serviceSlug) {
    return <Navigate replace to="/services" />;
  }

  const images = getServiceGalleryImages(serviceSlug);
  const columns = [[], [], []] as Array<typeof images>;

  images.forEach((image, index) => {
    columns[index % 3].push(image);
  });

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
              <Link className="text-[#17120d]" to="/services">
                Services
              </Link>
              <span className="mx-3 text-[#9b9389]">-</span>
              <span>{service.title}</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-16 pt-14 sm:px-12 lg:px-16 lg:pb-18 lg:pt-16">
            <div className="reveal relative lg:pl-[44px]" data-reveal="true">
              <div className="absolute left-0 top-[10px] hidden lg:block">
                <span className="block origin-top-left rotate-90 text-[18px] font-medium uppercase tracking-[0.14em] text-[var(--color-brand-accent)]">
                  Service
                </span>
              </div>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-accent)]">
                Project Gallery
              </p>
              <h1 className="mt-5 max-w-[860px] font-sans text-[34px] font-semibold leading-[1.18] tracking-[-0.045em] text-[#17120d] sm:text-[42px] lg:text-[48px]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-[780px] text-[17px] leading-[1.75] text-[#6f685f]">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-24 sm:px-12 lg:px-16 lg:pb-32">
            {images.length > 0 ? (
              <div className="grid gap-7 lg:grid-cols-3 lg:items-start">
                {columns.map((column, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col gap-7">
                    {column.map((image, itemIndex) => (
                      <article
                        key={image.src}
                        className="reveal group overflow-hidden bg-[#eae4db]"
                        data-reveal="true"
                        style={{
                          transitionDelay: `${columnIndex * 80 + itemIndex * 70}ms`,
                        }}
                      >
                        <img
                          alt={image.title}
                          className={`${heightCycle[(columnIndex + itemIndex) % heightCycle.length]} w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`}
                          src={image.src}
                        />
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="reveal border border-dashed border-[#d8cfc4] bg-[#ece7df] px-8 py-14 text-center sm:px-12"
                data-reveal="true"
              >
                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-accent)]">
                  Project Images Coming Soon
                </p>
                <h2 className="mx-auto mt-5 max-w-[680px] font-sans text-[30px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#17120d] sm:text-[38px]">
                  We do not currently have precise gallery images for this
                  service category.
                </h2>
                <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-[1.75] text-[#6f685f]">
                  This keeps the gallery accurate. Once dedicated project
                  photos are available, they can be added to this service page
                  without mixing in unrelated interiors.
                </p>
                <Link
                  className="mt-9 inline-flex h-[58px] items-center justify-center bg-[var(--color-brand-accent)] px-8 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[var(--color-brand-dark)]"
                  to="/gallery"
                >
                  View Full Gallery
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer variant="light" />
      <ScrollToHeroButton />
    </div>
  );
}
