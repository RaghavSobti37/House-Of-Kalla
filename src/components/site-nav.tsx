import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-dark.webp.asset.json";

const links = [
  { to: "/", label: "HOME" },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/products", label: "PRODUCTS" },
  { to: "/about", label: "ABOUT" },
] as const;

export function SiteNav({ transparent = false }: { transparent?: boolean }) {
  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-30"
          : "relative z-30 bg-background border-b border-border/60"
      }
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="House of Kalaa"
            className={`h-10 w-auto ${transparent ? "invert brightness-0" : ""}`}
          />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-navy" }}
              className={`text-[13px] font-medium tracking-[0.14em] transition-colors hover:text-navy ${
                transparent ? "text-white/90 hover:text-white" : "text-foreground/80"
              }`}
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