import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logo from "../../LOGOS/Asset 7@2x.webp";

const links = [
  { to: "/", label: "HOME" },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/products", label: "PRODUCTS" },
  { to: "/about", label: "ABOUT" },
] as const;

export function SiteNav({ transparent = false }: { transparent?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header position/background transition classes
  const headerClass = transparent
    ? isScrolled
      ? "fixed inset-x-0 top-0 z-50 bg-white border-b border-border/40 shadow-sm transition-all duration-300"
      : "absolute inset-x-0 top-0 z-50 bg-transparent transition-all duration-300"
    : "sticky top-0 z-50 bg-white border-b border-border/60 transition-all duration-300";

  // Padding transition inside the container
  const paddingClass = isScrolled || !transparent ? "py-4" : "py-5";

  // Text color class for the nav links
  const textColorClass =
    transparent && !isScrolled ? "text-white/90 hover:text-white" : "text-black hover:text-navy";

  // Logo color filter (white if transparent and not scrolled, else normal black)
  const logoFilter = transparent && !isScrolled ? "brightness-0 invert" : "";

  return (
    <header className={headerClass}>
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 ${paddingClass} md:px-10 transition-all duration-300`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="House of Kalaa"
            className={`h-10 w-auto transition-all ${logoFilter}`}
          />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-navy" }}
              className={`text-[13px] font-medium tracking-[0.14em] transition-colors ${textColorClass}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden bg-navy px-5 py-3 text-[11px] font-semibold tracking-[0.16em] text-white transition-colors hover:bg-navy/90 md:inline-block"
        >
          BOOK A PRIVATE CONSULTATION
        </Link>
      </div>
    </header>
  );
}
