import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import projectBar from "@/assets/project-bar.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import productKorta from "@/assets/product-korta.jpg";
import logoTaj from "@/assets/logo-taj.svg";
import logoHexaware from "@/assets/logo-hexaware.svg";
import logoTata from "@/assets/logo-tata.svg";
import logoBob from "@/assets/logo-bob.svg";
import logoSbi from "@/assets/logo-sbi.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
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
              BECOMES <span className="italic font-bold">HOME</span>
            </h1>
            <p className="mt-2 max-w-xl text-xl text-white/85">
              Furniture and interiors for those who live with intention.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
              >
                BOOK PRIVATE CONSULTATION
              </Link>
              <Link
                to="/portfolio"
                className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
              >
                VIEW PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-ink py-3 text-white overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap text-[11px] font-medium tracking-[0.28em] text-white/70">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-8">
              CURATED FURNITURE ~ TRANSPARENT PRODUCTION LINE ~ NO MDF EVER ~ 35 YEARS OF LEGACY ~
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <p className="text-center text-[15px] font-semibold tracking-[0.10em]">
          AS TRUSTED BY
        </p>
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-12">
          {[
            { name: "Taj", src: logoTaj, heightClass: "h-16 md:h-20" },
            { name: "Hexaware", src: logoHexaware, heightClass: "h-24 md:h-35" },
            { name: "Tata", src: logoTata, heightClass: "h-16 md:h-20" },
            { name: "Bank of Baroda", src: logoBob, heightClass: "h-24 md:h-30" },
            { name: "SBI", src: logoSbi, heightClass: "h-16 md:h-20" },
          ].map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-16 w-full max-w-[180px] p-2 transition-all duration-300 hover:scale-105"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className={`w-full object-contain transition-all duration-300 ${brand.heightClass}`}
              />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Hundreds of spaces. One standard.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <p className="text-[15px] font-semibold tracking-[0.10em] text-gold">
          DESIGN YOUR HOME WITH US
        </p>
        <h2 className="mt-3 max-w-none text-3xl font-semibold tracking-tight md:text-4xl whitespace-nowrap">
          Transforming raw spaces into sanctuaries of warmth and light.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
          <figure className="relative overflow-hidden">
            <img
              src={projectBar}
              alt="Atelier Bauhem residential interior"
              className="aspect-[4/5] w-full object-cover"
              width={1200}
              height={1400}
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white">
              <p className="mt-1 max-w-xl text-xl text-white/85">Atelier Bauhem, 2023</p>
              <p className="mt-0.5 max-w-xl text-xl text-white/85">Residential Interior</p>
            </figcaption>
          </figure>
          <div className="grid grid-rows-[1fr_auto] gap-10">
            <figure className="relative overflow-hidden aspect-[4/4] md:aspect-auto">
              <img
                src={projectHotel}
                alt="Holiday Inn Elite Hospitality project"
                className="w-full h-full object-cover md:absolute md:inset-0"
                width={1200}
                height={1400}
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white z-10">
                <p className="mt-0.5 max-w-xl text-xl text-white/85">Holiday Inn, 2022</p>
                <p className="mt-0.5 max-w-xl text-xl text-white/85">Elite Hospitality</p>
              </figcaption>
            </figure>
            <div className="flex justify-end">
              <Link
                to="/portfolio"
                className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
              >
                VIEW FEATURED PROJECTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <p className="text-[15px] font-semibold tracking-[0.10em] text-gold">
          RESERVE OUR HANDPICKED PIECES
        </p>
        <h2 className="mt-3 max-w-none text-3xl font-semibold tracking-tight md:text-4xl whitespace-nowrap">
          Made available in limited numbers for an exclusive audience.
        </h2>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col items-end text-right">
            <h3 className="text-3xl font-bold md:text-4xl">Korta Low Table</h3>
            <p className="mt-2 max-w-xl text-xl text-black/85">
              PATENTED BRONZE | COLLECTION OF 2025
            </p>
            <div className="mt-8 flex flex-col gap-3 w-fit">
              <Link
                to="/contact"
                className="w-full text-center bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:opacity-90"
              >
                SPEAK TO THE CURATOR
              </Link>
              <Link
                to="/products"
                className="w-full text-center bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
              >
                VIEW LOOKBOOK
              </Link>
            </div>
          </div>
          <img
            src={productKorta}
            alt="Korta low table"
            className="w-full object-cover"
            width={1400}
            height={1000}
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-8 md:px-10">
        <div className="flex items-end gap-1">
          <p className="text-[15px] font-semibold tracking-[0.10em] text-gold leading-none">
            WHAT OUR CLIENTS SAY
          </p>
          <span className="font-serif text-gold text-8xl leading-none select-none opacity-40 translate-y-13 inline-block">
            ”
          </span>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text: "Exceptional service. No doubts at all. I am super happy with them and recommend it to everyone out there.",
                author: "Anita",
              },
              {
                text: "You can trust House of Kalaa with your eyes closed. They will deliver like no other.",
                author: "Ricky.",
              },
            ].map((t) => (
              <blockquote
                key={t.author}
                className="border border-white/15 rounded-[20px] p-8 md:p-10 flex flex-col justify-between"
              >
                <div>
                  <span className="block font-serif text-gold text-[180px] leading-[0.3] mb-8 select-none opacity-40">
                    “
                  </span>
                  <p className="font-serif font-thin italic text-2xl leading-[1.35] text-white/90 md:text-[32px]">
                    {t.text}
                  </p>
                </div>
                <div className="text-right mt-10 font-serif italic text-white/60 text-lg md:text-xl">
                  - {t.author}
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="text-[11px] tracking-[0.28em] text-gold">
          THE SAME STANDARD, <span className="italic text-foreground">EVERYTIME.</span>
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
