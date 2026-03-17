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
  { title: "Roman Project 01", fileId: "1mJ__zB-XhbJILbS82Vpe5KUhGj1DNCfy" },
  { title: "Roman Project 02", fileId: "1AkTOPcVIVa9YH9MQMcZns_ZNyDfqBU7E" },
  { title: "Roman Project 03", fileId: "1KjVc4lZyXBpC_dyliX42jmQ24MTpkqdA" },
  { title: "Roman Project 04", fileId: "19JiWnpUttLt73YYe_0m5B2IG4nto9G5p" },
  { title: "Roman Project 05", fileId: "1cYUAiq3unVcsUw1MS4gUSBo8qR5AoBPP" },
  { title: "Roman Project 06", fileId: "1BbOqQ_zUWMy-e8CgnmDLPj3BbvYJ6Bei" },
  { title: "Roman Project 07", fileId: "1gESTcTH_kg8vk5wYqakbUEiyNTj1vzOX" },
  { title: "Roman Project 08", fileId: "1cmuWGfo3nBwP3WvAej6prPP5BLn1yBv8" },
  { title: "Roman Project 09", fileId: "11fTng4lx1QMlIboqHUVkg4zgqz6C4iFK" },
  { title: "Roman Project 10", fileId: "1aa0sRGcsJmQC94goY4NG2qorS1doRPi8" },
  { title: "Roman Project 11", fileId: "1Z-ZHc9Pjw9Y-X6CtcMY08P1KByoLLYgg" },
  { title: "Roman Project 12", fileId: "14qOqQ8uzsPczKCvlLEJbinlbqRagi7Au" },
  { title: "Roman Project 13", fileId: "17VUdkAj4yVNKC6FA-Y1VnJOSc23Z7WmE" },
  { title: "Roman Project 14", fileId: "1b7DzJXelUY6hK0ax-44KhyLAwU_c8cw-" },
  { title: "Roman Project 15", fileId: "1XFObBhj464uCunfRpPPo8DlyRYnsDmlb" },
  { title: "Roman Project 16", fileId: "1HnyNbEbG8xkb2FfhQdD2M63uWCrNO6rC" },
  { title: "Roman Project 17", fileId: "16hFz2Nwp9zExsR1haP8XMAwDAm5jqL4E" },
  { title: "Roman Project 18", fileId: "1wGuwnaHTH1oP9bb-kAQwv79W4PkbMPhA" },
  { title: "Roman Project 19", fileId: "136qQhfHOJstzmlRYO0imylVWmgFavaY-" },
  { title: "Roman Project 20", fileId: "1NKjRSX4fNa6DStDFV9Sm2q0EbihX3oQF" },
  { title: "Roman Project 21", fileId: "1kErE07m-yBD3eGYMfwLJPslqD0gwmmep" },
  { title: "Roman Project 22", fileId: "1RZmpJFrjT_GWDHR03COVNK53-M5SJ4Kb" },
  { title: "Roman Project 23", fileId: "1KEieObewbp8_HvA8JdL46X0k5eew17UK" },
  { title: "Roman Project 24", fileId: "1wp720mY1kBaUkYONi3niXl6ZJHPZ8kNQ" },
  { title: "Roman Project 25", fileId: "10Xms_7CKL47BxImZZbjiMgTp2E6oIVdg" },
  { title: "Roman Project 26", fileId: "1ed1lav8xiqM_aOXvMHsoqziLno99cj3B" },
  { title: "Roman Project 27", fileId: "1fYsBP5NF4dQz1vpITIBxlre1WdzlqRd9" },
  { title: "Roman Project 28", fileId: "1S-hmZNzYk8aLMmxoPqYEc13bAMtbfl1d" },
  { title: "Roman Project 29", fileId: "1DC3lFp1XOog-Jj-ghGFwVLgMso6zl-c_" },
  { title: "Roman Project 30", fileId: "1u2A7Un9qXQXme8-x5W6yLWh2Dho4lw5K" },
  { title: "Roman Project 31", fileId: "1oOD-VsiRONf6Lqdkxbes7KmG4lwETOe2" },
] as const;

const hostedVideos = [
  {
    title: "Before and After Walkthrough",
    src: "https://drive.google.com/file/d/1WeueTsaFMFKJGrIjPlpYjmCDruKIex4Q/preview",
    fileId: "1WeueTsaFMFKJGrIjPlpYjmCDruKIex4Q",
  },
  {
    title: "Interior Progress Video",
    src: "https://drive.google.com/file/d/151YwkiwSphUC9HOTU7tPvY3isme80RAQ/preview",
    fileId: "151YwkiwSphUC9HOTU7tPvY3isme80RAQ",
  },
  {
    title: "Project Reveal Video",
    src: "https://drive.google.com/file/d/1KyBIKfSABbFJdfP71ieuODPN4NmXcPjR/preview",
    fileId: "1KyBIKfSABbFJdfP71ieuODPN4NmXcPjR",
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

        return (
          <button
            key={`${item.kind}-${item.title}-${index}`}
            className="reveal group relative overflow-hidden bg-[#eae4db] text-left"
            data-reveal="true"
            style={{ transitionDelay: `${index * 70}ms` }}
            type="button"
            onClick={isVideo ? () => onOpenVideo(item) : undefined}
          >
            {isVideo ? <VideoBadge /> : null}
            <MediaPreviewImage fallbackSrc={fallbackImage} item={item} />
          </button>
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
      src: buildDrivePreviewSources(image.fileId)[0],
      kind: "image",
      heightClassName: String(heightCycle[index % heightCycle.length]),
      previewFallbacks: buildDrivePreviewSources(image.fileId),
    }));

    hostedVideos.forEach((video, index) => {
      items.push({
        title: video.title,
        src: video.src,
        kind: "video",
        heightClassName: String(
          heightCycle[(hostedImages.length + index) % heightCycle.length],
        ),
        previewFallbacks: buildDrivePreviewSources(video.fileId),
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
