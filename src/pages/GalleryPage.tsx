import { Link } from "react-router-dom";
import { ScrollToHeroButton } from "../components/common/ScrollToHeroButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { navigationItems } from "../data/architectureHome";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useScrollState } from "../hooks/useScrollState";

type GalleryImage = {
  title: string;
  image: string;
  heightClassName: string;
};

const galleryColumns: GalleryImage[][] = [
  [
    {
      title: "Tower House",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[520px] lg:h-[520px]",
    },
    {
      title: "Glass Building",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[520px] lg:h-[520px]",
    },
    {
      title: "Abstract Art",
      image:
        "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[520px] lg:h-[520px]",
    },
  ],
  [
    {
      title: "Roof Top",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[400px] lg:h-[400px]",
    },
    {
      title: "Building Decor",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[560px] lg:h-[560px]",
    },
    {
      title: "Modern Black House",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[420px] lg:h-[420px]",
    },
  ],
  [
    {
      title: "Triangle House",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[400px] lg:h-[400px]",
    },
    {
      title: "Museum",
      image:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[400px] lg:h-[400px]",
    },
    {
      title: "Interior",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[250px] lg:h-[250px]",
    },
    {
      title: "Staircase",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      heightClassName: "h-[520px] lg:h-[520px]",
    },
  ],
];

function GalleryColumn({ items }: { items: GalleryImage[] }) {
  return (
    <div className="flex flex-col gap-7">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="reveal overflow-hidden bg-[#eae4db]"
          data-reveal="true"
          style={{ transitionDelay: `${index * 70}ms` }}
        >
          <img
            alt={item.title}
            className={`${item.heightClassName} w-full object-cover`}
            src={item.image}
          />
        </div>
      ))}
    </div>
  );
}

export function GalleryPage() {
  const isScrolled = useScrollState();

  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#17120d]">
      <Header
        activeLabel="Gallery"
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
              <span>Gallery</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-16 pt-14 sm:px-12 lg:px-16 lg:pb-18 lg:pt-16">
            <div className="reveal" data-reveal="true">
              <h1 className="font-sans text-[34px] font-medium leading-[1.2] tracking-[-0.04em] text-[#17120d] sm:text-[42px] lg:text-[48px]">
                Gallery
              </h1>
              <p className="mt-5 max-w-[620px] text-[17px] leading-[1.7] text-[#6f685f]">
                We are a leading architecture firm dedicated to creating
                visionary designs that transcend expectations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-24 sm:px-12 lg:px-16 lg:pb-32">
            <div className="grid gap-7 lg:grid-cols-3 lg:items-start">
              {galleryColumns.map((column, index) => (
                <GalleryColumn key={index} items={column} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="light" />
      <ScrollToHeroButton />
    </div>
  );
}
