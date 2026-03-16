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
  previewSrc?: string;
};

const mediaModules = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const orderedMediaNames = [
  "6032721174774615117.jpg",
  "PHOTO-2026-02-23-03-04-41.jpg",
  "PHOTO-2026-02-23-03-04-42.jpg",
  "PHOTO-2026-02-23-03-04-43.jpg",
  "PHOTO-2026-02-23-03-04-44.jpg",
  "PHOTO-2026-02-23-03-04-45.jpg",
  "KITCHEN_01_CC.jpg",
  "KITCHEN_02_CC.jpg",
  "MASTER_LOUNGE_CC.jpg",
  "Visitors W.C 1.png",
  "family lounge 1..png",
  "family lounge 2.png",
  "family lounge 3.png",
  "masters bath 1.png",
  "masters bath 2.png",
  "masters bath 3.png",
  "stair 2.png",
  "typical bed.jpg",
  "typical bedroom 1.jpg",
  "WhatsApp Image 2026-02-23 at 12.05.25.jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.25 (1).jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.26.jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.26 (1).jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.26 (2).jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.26 (3).jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.26 (4).jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.27.jpeg",
  "WhatsApp Image 2026-02-23 at 12.05.27 (1).jpeg",
] as const;

const hostedVideos = [
  {
    title: "Before and After Walkthrough",
    src: "https://drive.google.com/file/d/1WeueTsaFMFKJGrIjPlpYjmCDruKIex4Q/preview",
    previewSrc:
      "https://drive.google.com/thumbnail?id=1WeueTsaFMFKJGrIjPlpYjmCDruKIex4Q&sz=w1600",
  },
  {
    title: "Interior Progress Video",
    src: "https://drive.google.com/file/d/151YwkiwSphUC9HOTU7tPvY3isme80RAQ/preview",
    previewSrc:
      "https://drive.google.com/thumbnail?id=151YwkiwSphUC9HOTU7tPvY3isme80RAQ&sz=w1600",
  },
  {
    title: "Project Reveal Video",
    src: "https://drive.google.com/file/d/1KyBIKfSABbFJdfP71ieuODPN4NmXcPjR/preview",
    previewSrc:
      "https://drive.google.com/thumbnail?id=1KyBIKfSABbFJdfP71ieuODPN4NmXcPjR&sz=w1600",
  },
] as const;

const heightCycle = [
  "h-[420px] lg:h-[520px]",
  "h-[360px] lg:h-[430px]",
  "h-[340px] lg:h-[400px]",
  "h-[420px] lg:h-[500px]",
  "h-[360px] lg:h-[460px]",
] as const;

function fileNameFromPath(path: string) {
  return path.split("/").pop() ?? path;
}

function titleFromFileName(fileName: string) {
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function VideoBadge() {
  return (
    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-accent)] text-white shadow-[0_14px_32px_rgba(0,0,0,0.2)]">
      <svg aria-hidden="true" className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function GalleryColumn({
  items,
  onOpenVideo,
}: {
  items: GalleryMediaItem[];
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
            {isVideo ? (
              <img
                alt={item.title}
                className={`${item.heightClassName} w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`}
                src={item.previewSrc ?? item.src}
              />
            ) : (
              <img
                alt={item.title}
                className={`${item.heightClassName} w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`}
                src={item.src}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

function MediaModal({
  item,
  onClose,
}: {
  item: GalleryMediaItem | null;
  onClose: () => void;
}) {
  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-6 py-10 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
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
        <iframe
          allow="autoplay; encrypted-media; picture-in-picture"
          className="h-[72vh] w-full bg-black"
          referrerPolicy="strict-origin-when-cross-origin"
          src={item.src}
          title={item.title}
        />
      </div>
    </div>
  );
}

export function GalleryPage() {
  const isScrolled = useScrollState();
  const [activeVideo, setActiveVideo] = useState<GalleryMediaItem | null>(null);

  useRevealOnScroll();

  const galleryColumns = useMemo(() => {
    const items = orderedMediaNames.reduce<GalleryMediaItem[]>(
      (collection, name, index) => {
        const entry = Object.entries(mediaModules).find(([path]) =>
          fileNameFromPath(path) === name,
        );

        if (!entry) {
          return collection;
        }

        const src = entry[1];
        const kind = /\.(mov|mp4|webm)$/i.test(name) ? "video" : "image";
        const item: GalleryMediaItem = {
          title: titleFromFileName(name),
          src,
          kind,
          heightClassName: String(heightCycle[index % heightCycle.length]),
        };

        collection.push(item);
        return collection;
      },
      [],
    );

    hostedVideos.forEach((video, index) => {
      items.push({
        title: video.title,
        src: video.src,
        previewSrc: video.previewSrc,
        kind: "video",
        heightClassName: String(
          heightCycle[(orderedMediaNames.length + index) % heightCycle.length],
        ),
      });
    });

    const columns: GalleryMediaItem[][] = [[], [], []];

    items.forEach((item, index) => {
      columns[index % 3].push(item);
    });

    return columns;
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
              {galleryColumns.map((column, index) => (
                <GalleryColumn
                  key={index}
                  items={column}
                  onOpenVideo={setActiveVideo}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="light" />
      <ScrollToHeroButton />
      <MediaModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
