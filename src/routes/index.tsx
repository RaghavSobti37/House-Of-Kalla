import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import projectBar from "@/assets/project-bar.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import productKorta from "@/assets/product-korta.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative">
        <SiteNav transparent />
        <div className="relative h-[86vh] min-h-[620px] w-full overflow-hidden">
          <img
            src={heroKitchen}
            alt="Bespoke kitchen interior by House of Kalaa"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
            <h1 className="max-w-2xl font-sans text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              WHERE CRAFT
              <br />
              BECOMES <span className="italic font-medium">HOME</span>
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/85">
              Furniture and interiors for those who live with intention.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90">
                BOOK PRIVATE CONSULTATION
              </Link>
              <Link to="/portfolio" className="border border-white/70 px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-white hover:text-ink">
                VIEW PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-ink py-3 text-white overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap text-[11px] tracking-[0.28em] text-white/70">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-8">
              CURATED FURNITURE ~ TRANSPARENT PRODUCTION LINE ~ NO MDF EVER ~ 35 YEARS OF LEGACY ~
            </span>
          ))}
        </div>
      </div>

      {/* AS TRUSTED BY */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <p className="text-center text-[11px] font-semibold tracking-[0.28em] text-foreground/70">AS TRUSTED BY</p>
        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {["TAJ", "HEXAWARE", "TATA", "BANK OF BARODA", "SBI"].map((brand) => (
            <div key={brand} className="text-center font-serif text-xl font-semibold tracking-wide text-foreground/60">
              {brand}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Hundreds of spaces. One standard.</p>
      </section>

      {/* DESIGN YOUR HOME */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-gold">DESIGN YOUR HOME WITH US</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
          Transforming raw spaces into sanctuaries of warmth and light.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="relative overflow-hidden">
            <img src={projectBar} alt="Atelier Bauhem residential interior" className="aspect-[4/5] w-full object-cover" width={1200} height={1400} loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white">
              <p className="text-[11px] tracking-[0.2em] text-white/70">ATELIER BAUHEM, 2023</p>
              <p className="text-sm">Residential Interior</p>
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden">
            <img src={projectHotel} alt="Holiday Inn Elite Hospitality project" className="aspect-[4/5] w-full object-cover" width={1200} height={1400} loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white">
              <p className="text-[11px] tracking-[0.2em] text-white/70">HOLIDAY INN, 2022</p>
              <p className="text-sm">Elite Hospitality</p>
            </figcaption>
          </figure>
        </div>
        <div className="mt-8 flex justify-end">
          <Link to="/portfolio" className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90">
            VIEW FEATURED PROJECTS
          </Link>
        </div>
      </section>

      {/* KORTA / HANDPICKED */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-gold">RESERVE OUR HANDPICKED PIECES</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
          Made available in limited numbers for an exclusive audience.
        </h2>
        <div className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="text-3xl font-semibold md:text-4xl">Korta Low Table</h3>
            <p className="mt-2 text-[11px] tracking-[0.2em] text-muted-foreground">WALNUT · MARBLE INSET · EDITION OF 25 · 2024</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:opacity-90">
                SPEAK TO THE CURATOR
              </Link>
              <Link to="/products" className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90">
                VIEW LOOKBOOK
              </Link>
            </div>
          </div>
          <img src={productKorta} alt="Korta low table" className="w-full object-cover" width={1400} height={1000} loading="lazy" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-8 md:px-10">
        <div className="flex items-center gap-3">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-gold">WHAT OUR CLIENTS SAY</p>
          <Quote className="h-5 w-5 text-gold" strokeWidth={1.5} />
        </div>
      </section>
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-2 md:px-10">
          {[
            { text: "Exceptional service. No doubts at all. I am super happy with them and recommend it to everyone out there.", author: "Anita" },
            { text: "You can trust House of Kalaa with your eyes closed. They will deliver like no other.", author: "Becky" },
          ].map((t) => (
            <blockquote key={t.author} className="border border-white/15 p-8">
              <Quote className="h-8 w-8 text-gold" strokeWidth={1.5} />
              <p className="mt-6 text-white/80 leading-relaxed">{t.text}</p>
              <footer className="mt-6 text-right text-sm text-white/90">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="text-[11px] tracking-[0.28em] text-gold">THE SAME STANDARD, <span className="italic text-foreground">EVERYTIME.</span></p>
      </section>

      <SiteFooter />
    </div>
  );
}
