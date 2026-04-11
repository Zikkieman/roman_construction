import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollToHeroButton } from "../components/common/ScrollToHeroButton";
import { IconClose } from "../components/common/icons";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { navigationItems } from "../data/architectureHome";
import { COMPANY_OVERVIEW } from "../data/company";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useScrollState } from "../hooks/useScrollState";

type GalleryMediaItem = {
  title: string;
  src: string;
  kind: "image" | "video";
  heightClassName: string;
  previewFallbacks: string[];
};

const hostedImages = [
  {
    title: "Roman Project 01",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487477/family_lounge_3_ctgogw.png",
  },
  {
    title: "Roman Project 02",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487473/family_lounge_2_uknmas.png",
  },
  {
    title: "Roman Project 03",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487471/stair_2_lqc9oa.png",
  },
  {
    title: "Roman Project 04",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487462/family_lounge_1._efj5mi.png",
  },
  {
    title: "Roman Project 06",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.25_ickhth.jpg",
  },
  {
    title: "Roman Project 07",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.26_ytigvp.jpg",
  },
  {
    title: "Roman Project 08",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.25_1_ol4qkw.jpg",
  },
  {
    title: "Roman Project 09",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487440/WhatsApp_Image_2026-02-23_at_12.05.26_1_bwsknx.jpg",
  },
  {
    title: "Roman Project 10",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487440/PHOTO-2026-02-23-03-04-42_jlgjzm.jpg",
  },
  {
    title: "Roman Project 11",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487440/WhatsApp_Image_2026-02-23_at_12.05.26_2_enilkd.jpg",
  },
  {
    title: "Roman Project 12",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/6032721174774615117_a3ftve.jpg",
  },
  {
    title: "Roman Project 13",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/KITCHEN_01_CC_nb7up7.jpg",
  },
  {
    title: "Roman Project 14",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-41_d98ful.jpg",
  },
  {
    title: "Roman Project 15",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-44_r17hsj.jpg",
  },
  {
    title: "Roman Project 16",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/WhatsApp_Image_2026-02-23_at_12.05.26_3_a8muc5.jpg",
  },
  {
    title: "Roman Project 18",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-43_byj6xb.jpg",
  },
  {
    title: "Roman Project 19",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-45_lv8qjw.jpg",
  },
  {
    title: "Roman Project 20",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/KITCHEN_02_CC_bspb6u.jpg",
  },
  {
    title: "Roman Project 21",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487437/WhatsApp_Image_2026-02-23_at_12.05.27_dnydbq.jpg",
  },
  {
    title: "Roman Project 22",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/MASTER_LOUNGE_CC_jwhuwx.jpg",
  },
  {
    title: "Roman Project 23",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/PHOTO-2026-02-23-03-04-42_2_wudpis.jpg",
  },
  {
    title: "Roman Project 24",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/typical_bedroom_1_ce0bav.jpg",
  },
  {
    title: "Roman Project 25",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487435/typical_bed_bk3r4e.jpg",
  },
  {
    title: "Roman Project 26",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487435/WhatsApp_Image_2026-02-23_at_12.05.27_1_zdt6uj.jpg",
  },
  {
    title: "Roman Project 27",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487435/PHOTO-2026-02-23-03-04-44_2_jcgapz.jpg",
  },
] as const;

const hostedVideos = [
  {
    title: "Before and After Walkthrough",
    shareUrl:
      "https://drive.google.com/file/d/1WeueTsaFMFKJGrIjPlpYjmCDruKIex4Q/view?usp=sharing",
  },
  {
    title: "Interior Progress Video",
    shareUrl:
      "https://drive.google.com/file/d/151YwkiwSphUC9HOTU7tPvY3isme80RAQ/view?usp=sharing",
  },
  {
    title: "Project Reveal Video",
    shareUrl:
      "https://drive.google.com/file/d/1KyBIKfSABbFJdfP71ieuODPN4NmXcPjR/view?usp=sharing",
  },
] as const;

const heightCycle = [
  "h-[420px] lg:h-[520px]",
  "h-[360px] lg:h-[430px]",
  "h-[340px] lg:h-[400px]",
  "h-[420px] lg:h-[500px]",
  "h-[360px] lg:h-[460px]",
] as const;

function buildDrivePreviewSources(fileId: string) {
  return [
    `https://drive.usercontent.google.com/thumbnail?id=${fileId}&sz=w1600`,
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
    `https://lh3.googleusercontent.com/d/${fileId}=w1600`,
  ];
}

function toDrivePreviewUrl(shareUrl: string) {
  const match = shareUrl.match(/\/file\/d\/([^/]+)/);
  const fileId = match?.[1];

  if (!fileId) {
    return shareUrl;
  }

  return `https://drive.google.com/file/d/${fileId}/preview`;
}

function VideoBadge() {
  return (
    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-accent)] text-white shadow-[0_14px_32px_rgba(0,0,0,0.2)]">
      <svg
        aria-hidden="true"
        className="ml-0.5 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function MediaPreviewImage({
  item,
  fallbackSrc,
}: {
  item: GalleryMediaItem;
  fallbackSrc: string;
}) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const activeSrc = item.previewFallbacks[sourceIndex] ?? fallbackSrc;

  return (
    <img
      alt={item.title}
      className={`${item.heightClassName} w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`}
      src={activeSrc}
      onError={() => {
        setSourceIndex((current) =>
          current < item.previewFallbacks.length - 1
            ? current + 1
            : item.previewFallbacks.length,
        );
      }}
    />
  );
}

function VideoPreviewFrame({ item }: { item: GalleryMediaItem }) {
  return (
    <div className={`${item.heightClassName} relative w-full overflow-hidden`}>
      <iframe
        aria-hidden="true"
        className="pointer-events-none h-full w-full scale-[1.16] object-cover transition-transform duration-500 group-hover:scale-[1.2]"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src={`${item.src}${item.src.includes("?") ? "&" : "?"}autoplay=0`}
        tabIndex={-1}
        title={`${item.title} preview`}
      />
      <div className="absolute inset-0 bg-black/8" />
    </div>
  );
}

function GalleryColumn({
  items,
  fallbackImage,
  onOpenVideo,
}: {
  items: GalleryMediaItem[];
  fallbackImage: string;
  onOpenVideo: (item: GalleryMediaItem) => void;
}) {
  return (
    <div className="flex flex-col gap-7">
      {items.map((item, index) => {
        const isVideo = item.kind === "video";

        if (isVideo) {
          return (
            <div
              key={`${item.kind}-${item.title}-${index}`}
              className="reveal group relative overflow-hidden bg-[#eae4db] text-left"
              data-reveal="true"
              role="button"
              style={{ transitionDelay: `${index * 70}ms` }}
              tabIndex={0}
              onClick={() => onOpenVideo(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpenVideo(item);
                }
              }}
            >
              <VideoBadge />
              <VideoPreviewFrame item={item} />
            </div>
          );
        }

        return (
          <div
            key={`${item.kind}-${item.title}-${index}`}
            className="reveal group relative overflow-hidden bg-[#eae4db] text-left"
            data-reveal="true"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <MediaPreviewImage fallbackSrc={fallbackImage} item={item} />
          </div>
        );
      })}
    </div>
  );
}

function MediaModal({
  item,
  fallbackImage,
  onClose,
}: {
  item: GalleryMediaItem | null;
  fallbackImage: string;
  onClose: () => void;
}) {
  if (!item) {
    return null;
  }

  const isVideo = item.kind === "video";

  return (
    <div
      aria-label={item.title}
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-6 py-10 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="relative w-full max-w-[980px] bg-[#111]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close media"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition-colors duration-300 hover:bg-[var(--color-brand-accent)]"
          type="button"
          onClick={onClose}
        >
          <IconClose />
        </button>

        {isVideo ? (
          <iframe
            allow="autoplay; encrypted-media; picture-in-picture"
            className="h-[72vh] w-full bg-black"
            referrerPolicy="strict-origin-when-cross-origin"
            src={item.src}
            title={item.title}
          />
        ) : (
          <img
            alt={item.title}
            className="max-h-[82vh] w-full object-contain bg-[#111]"
            src={item.previewFallbacks[0] ?? fallbackImage}
          />
        )}
      </div>
    </div>
  );
}

export function GalleryPage() {
  const isScrolled = useScrollState();
  const [activeMedia, setActiveMedia] = useState<GalleryMediaItem | null>(null);

  useRevealOnScroll();

  const galleryData = useMemo(() => {
    const items: GalleryMediaItem[] = hostedImages.map((image, index) => ({
      title: image.title,
      src: image.src,
      kind: "image",
      heightClassName: String(heightCycle[index % heightCycle.length]),
      previewFallbacks: [image.src],
    }));

    hostedVideos.forEach((video, index) => {
      items.push({
        title: video.title,
        src: toDrivePreviewUrl(video.shareUrl),
        kind: "video",
        heightClassName: String(
          heightCycle[(hostedImages.length + index) % heightCycle.length],
        ),
        previewFallbacks: [],
      });
    });

    const columns: GalleryMediaItem[][] = [[], [], []];
    items.forEach((item, index) => {
      columns[index % 3].push(item);
    });

    return {
      columns,
      fallbackImage: "/og-image.png",
    };
  }, []);

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
              <p className="mt-5 max-w-[700px] text-[17px] leading-[1.7] text-[#6f685f]">
                {COMPANY_OVERVIEW}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef]">
          <div className="mx-auto max-w-[1340px] px-8 pb-24 sm:px-12 lg:px-16 lg:pb-32">
            <div className="grid gap-7 lg:grid-cols-3 lg:items-start">
              {galleryData.columns.map((column, index) => (
                <GalleryColumn
                  key={index}
                  fallbackImage={galleryData.fallbackImage}
                  items={column}
                  onOpenVideo={setActiveMedia}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="light" />
      <ScrollToHeroButton />
      <MediaModal
        fallbackImage={galleryData.fallbackImage}
        item={activeMedia}
        onClose={() => setActiveMedia(null)}
      />
    </div>
  );
}
