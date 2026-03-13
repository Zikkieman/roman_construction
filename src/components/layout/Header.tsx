import { useEffect, useState } from "react";
import type { NavigationItem } from "../../types/architecture";
import { IconClose, IconMenu } from "../common/icons";

interface HeaderProps {
  isScrolled: boolean;
  navigationItems: NavigationItem[];
}

export function Header({ isScrolled, navigationItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => window.removeEventListener("resize", closeOnResize);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/8 bg-[#16120e]/96 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1910px] items-center justify-between px-8 py-7 sm:px-10 lg:px-14">
        <a className="flex items-center gap-3 text-white" href="#home">
          <span className="relative block h-12 w-12 text-[#C39B7B]">
            <span className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-current/85" />
            <span className="absolute bottom-1 left-2 right-2 h-px bg-current/55" />
            <span className="absolute inset-x-2 top-1 h-px bg-current/55" />
            <span className="absolute bottom-1 left-2 h-7 w-4 border border-current/80" />
            <span className="absolute bottom-4 left-[1.15rem] h-4 w-4 border-r border-t border-current/80" />
            <span className="absolute bottom-1 right-2 h-5 w-3 border border-current/80" />
          </span>
          <span className="text-[29px] font-bold leading-none text-white">
            Traz
          </span>
        </a>

        <nav className="hidden items-center gap-11 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              className="text-[15px] font-medium text-white transition-colors duration-300 hover:text-[#C39B7B]"
              href={item.href}
            >
              <p className="text-white transition-colors duration-300 hover:text-[#C39B7B]">
                {item.label}
              </p>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-7 lg:flex ">
          <button
            aria-label="Search"
            className="inline-flex size-10 items-center justify-center text-white transition-colors duration-300 hover:text-[#C39B7B]"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <div className="group text-black hover:text-white">
            <a
              className="inline-flex h-[58px] items-center justify-center border border-[#C39B7B] bg-[#C39B7B] px-8 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-transparent"
              href="#contact"
            >
              <p className="text-black transition-colors duration-300 group-hover:text-white">
                Request A Quote
              </p>
            </a>
          </div>
        </div>

        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center border border-white/15 bg-white/5 text-white backdrop-blur lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#120f0b]/96 transition-all duration-500 lg:hidden ${
          isMenuOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1910px] flex-col gap-5 px-8 py-6 sm:px-10">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              className="text-sm font-medium uppercase tracking-[0.18em] text-white transition-colors hover:text-[#C39B7B]"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="mt-2 inline-flex w-fit items-center border border-[#C39B7B] bg-[#C39B7B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-[#C39B7B]"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Request A Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
