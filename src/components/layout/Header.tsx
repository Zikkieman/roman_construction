import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { NavigationItem } from "../../types/architecture";
import logoImage from "../../assets/images/Logo-transparent.png";
import { IconClose, IconMenu } from "../common/icons";

interface HeaderProps {
  isScrolled: boolean;
  navigationItems: NavigationItem[];
  variant?: "dark" | "light";
  activeLabel?: string;
}

export function Header({
  isScrolled,
  navigationItems,
  variant = "dark",
  activeLabel,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = variant === "light";
  const headerIsSolid = isLight || isScrolled || isMenuOpen;

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
        headerIsSolid
          ? isLight
            ? "border-b border-black/6 bg-white/96 shadow-[0_12px_34px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            : "border-b border-white/8 bg-[#16120e]/96 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1910px] items-center justify-between px-5 py-2.5 sm:py-3 lg:px-10 lg:py-3">
        <Link className={`${isLight ? "text-[#17120d]" : "text-white"}`} to="/">
          <div className="flex items-center gap-0">
            <img
              alt="Roman Contractors logo"
              className="h-[58px] w-auto object-contain sm:h-[64px] md:h-[70px]"
              src={logoImage}
            />
            <span className="flex -ml-1.5 mt-2 flex-col justify-center leading-none text-[var(--color-brand-accent)]">
              <span className="text-[15px] font-semibold uppercase tracking-[0.18em] sm:text-[16px]">
                Roman
              </span>
              <span className="mt-1 text-[13px] font-medium uppercase tracking-[0.22em] sm:text-[14px]">
                Contractors
              </span>
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-11 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              className={`text-[15px] font-medium transition-colors duration-300 hover:text-[var(--color-brand-accent)] ${
                activeLabel === item.label
                  ? "text-[var(--color-brand-accent)]"
                  : isLight
                    ? "text-[#17120d]"
                    : "text-white"
              }`}
              to={item.href}
            >
              <p
                className={`transition-colors duration-300 hover:text-[var(--color-brand-accent)] ${
                  activeLabel === item.label
                    ? "text-[var(--color-brand-accent)]"
                    : isLight
                      ? "text-[#17120d]"
                      : "text-white"
                }`}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex ">
          <div className="group text-black hover:text-white">
            <Link
              className={`inline-flex h-[58px] items-center justify-center border border-[var(--color-brand-accent)] px-8 text-[15px] font-semibold transition-colors duration-300 ${
                isLight
                  ? "bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-dark)]"
                  : "bg-[var(--color-brand-accent)] hover:bg-transparent"
              }`}
              to="/contact"
            >
              <p
                className={`transition-colors duration-300 group-hover:text-white ${
                  isLight ? "text-white" : "text-black"
                }`}
              >
                Request A Quote
              </p>
            </Link>
          </div>
        </div>

        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`inline-flex size-11 items-center justify-center backdrop-blur lg:hidden ${
            isLight
              ? "border border-black/10 bg-[#f5f0ea] text-[#17120d]"
              : "border border-white/15 bg-white/5 text-white"
          }`}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full border-t border-white/10 bg-[#120f0b]/98 shadow-[0_30px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1910px] flex-col gap-5 px-8 py-6 text-white sm:px-10">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              className={`block text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[var(--color-brand-accent)] ${
                activeLabel === item.label
                  ? "!text-[var(--color-brand-accent)]"
                  : "!text-white"
              }`}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className={`group mt-2 inline-flex w-fit items-center border border-[var(--color-brand-accent)] px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
              isLight
                ? "bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-dark)]"
                : "bg-[var(--color-brand-accent)] hover:bg-transparent"
            }`}
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className="text-black transition-colors duration-300 group-hover:text-white"
            >
              Request A Quote
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
