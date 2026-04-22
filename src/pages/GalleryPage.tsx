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
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859668/romancontractors/painting/luca-romano-4gopZjL1bSg-unsplash_zo3zdo.jpg",
  },
  {
    title: "Roman Project 02",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859411/romancontractors/floor/rhema-kallianpur-jbJ-_hw2yag-unsplash_dqjzai.jpg",
  },
  {
    title: "Roman Project 03",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859415/romancontractors/floor/point3d-commercial-imaging-ltd-8RXUZg5h_QA-unsplash_h73eyk.jpg",
  },
  {
    title: "Roman Project 04",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859412/romancontractors/floor/neon-wang-KaA8vQB9Hdg-unsplash_beh7xh.jpg",
  },
  {
    title: "Roman Project 09",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859611/romancontractors/joinery/aalo-lens-XhMzBZrpQT4-unsplash_wu2hac.jpg",
  },
  {
    title: "Roman Project 10",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859612/romancontractors/joinery/lotus-design-n-print-9b7wGJQaScw-unsplash_fcjczq.jpg",
  },
  {
    title: "Roman Project 11",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857262/romancontractors/solar/evgeniy-alyoshin-2ASQyjafflo-unsplash_jnscv8.jpg",
  },
  {
    title: "Roman Project 12",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859637/romancontractors/painting/an_vision-Q6jhKQoEtSA-unsplash_bwpej1.jpg",
  },
  {
    title: "Roman Project 14",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859620/romancontractors/joinery/eke-interior-Ud4rRqr0vFA-unsplash_hxuv8j.jpg",
  },
  {
    title: "Roman Project 16",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859470/romancontractors/painting/zac-gudakov-7K4LiMm0u14-unsplash_mkvp08.jpg",
  },
  {
    title: "Roman Project 18",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857189/romancontractors/tiles/scott-webb-tMuYJL96A_I-unsplash_qihmju.jpg",
  },
  {
    title: "Roman Project 19",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-45_lv8qjw.jpg",
  },
  {
    title: "Roman Project 20",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857199/romancontractors/tiles/darren-richardson-1zKFtv-TmWM-unsplash_mx234e.jpg",
  },
  {
    title: "Roman Project 21",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857203/romancontractors/tiles/bence-balla-schottner-VCKYuQ6R-28-unsplash_scutgy.jpg",
  },
  {
    title: "Roman Project 22",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/MASTER_LOUNGE_CC_jwhuwx.jpg",
  },
  {
    title: "Roman Project 24",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859439/romancontractors/complete%20interior/jason-briscoe-UV81E0oXXWQ-unsplash_izfrdd.jpg",
  },
  {
    title: "Roman Project 25",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859380/romancontractors/wall/toa-heftiba-PUMw1z67VmQ-unsplash_fqpney.jpg",
  },
  {
    title: "Roman Project 26",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857234/romancontractors/ceiling/chris-johnson-mbtMKIlcNHA-unsplash_fux0rm.jpg",
  },
  {
    title: "Roman Project 27",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776870836/romancontractors/electricals/erik-mclean-fSLI8RdCdyk-unsplash_d6qojg.jpg",
  },
] as const;

const hostedVideos = [
  // {
  //   title: "Before and After Walkthrough",
  //   shareUrl:
  //     "https://drive.google.com/file/d/1WeueTsaFMFKJGrIjPlpYjmCDruKIex4Q/view?usp=sharing",
  // },
  // {
  //   title: "Interior Progress Video",
  //   shareUrl:
  //     "https://drive.google.com/file/d/151YwkiwSphUC9HOTU7tPvY3isme80RAQ/view?usp=sharing",
  // },
  // {
  //   title: "Project Reveal Video",
  //   shareUrl:
  //     "https://drive.google.com/file/d/1KyBIKfSABbFJdfP71ieuODPN4NmXcPjR/view?usp=sharing",
  // },
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
