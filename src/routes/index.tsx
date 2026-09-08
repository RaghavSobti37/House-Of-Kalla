import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import productKorta1 from "@/assets/product-korta-1.jpg";
import productKorta2 from "@/assets/product-korta-2.jpg";
import { portfolioProjects } from "@/lib/portfolio-data";
import { clientLogos } from "@/lib/client-logos";
import { ClientLogoMark } from "@/components/client-logo-mark";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featuredProjects = [
    portfolioProjects.find((project) => project.slug === "taj-pune"),
    portfolioProjects.find((project) => project.slug === "bafna-jewellers"),
  ].filter(Boolean);

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
              BECOMES <span className="italic font-bold">HOME.</span>
            </h1>
            <p className="mt-2 max-w-xl text-xl text-white/85">
              Furniture and interiors for those who live with intention.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
              >
                BOOK A PRIVATE CONSULTATION
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
        <div className="flex animate-[marquee_56s_linear_infinite] whitespace-nowrap text-[11px] font-medium tracking-[0.28em] text-white/70">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-8">
              CURATED FURNITURE ~ TRANSPARENT PRODUCTION LINE ~ 35 YEARS OF LEGACY ~
            </span>
          ))}
        </div>
      </div>

      <section className="px-0 pt-8 pb-20 md:pt-10 md:pb-20">
        <p className="text-center text-[15px] font-semibold tracking-[0.10em]">AS TRUSTED BY</p>
        <div className="mt-10 overflow-hidden border-y border-foreground/10 bg-background">
          <div className="flex w-max animate-[marqueeReverse_144s_linear_infinite] items-stretch [backface-visibility:hidden] [transform:translateZ(0)] will-change-transform">
            {[...clientLogos, ...clientLogos].map(([name, slug], index) => (
              <div
                key={`${name}-${index}`}
                className="flex h-20 shrink-0 items-center gap-3.5 px-10"
              >
                <ClientLogoMark name={name} slug={slug} />
                <span className="whitespace-nowrap text-sm font-semibold tracking-[0.04em] text-foreground/75">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-xl text-muted-foreground">
          Hundreds of spaces. <br className="block sm:hidden" /> One standard.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <SectionHeading
          eyebrow="DESIGN YOUR HOME WITH US"
          title="Transforming raw spaces into sanctuaries of warmth and light."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects[0] ? (
            <Link
              to="/portfolio/$projectSlug"
              params={{ projectSlug: featuredProjects[0].slug }}
              className="block"
            >
              <figure className="relative overflow-hidden">
                <img
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].name}
                  className="aspect-[3/4] w-full object-cover"
                  width={1200}
                  height={1400}
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white">
                  <p className="text-xl font-semibold text-white">{featuredProjects[0].name}</p>
                  <p className="mt-1 text-lg text-white/85">{featuredProjects[0].service}</p>
                </figcaption>
              </figure>
            </Link>
          ) : null}
          {featuredProjects[1] ? (
            <div className="flex flex-col gap-6 md:h-0 md:min-h-full">
              <Link
                to="/portfolio/$projectSlug"
                params={{ projectSlug: featuredProjects[1].slug }}
                className="block min-h-0 overflow-hidden md:flex-1"
              >
                <figure className="relative overflow-hidden md:h-full">
                  <img
                    src={featuredProjects[1].image}
                    alt={featuredProjects[1].name}
                    className="aspect-[5/4] w-full object-cover md:aspect-auto md:h-full"
                    width={1200}
                    height={1400}
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white">
                    <p className="text-xl font-semibold text-white">{featuredProjects[1].name}</p>
                    <p className="mt-1 text-lg text-white/85">{featuredProjects[1].service}</p>
                  </figcaption>
                </figure>
              </Link>
              <Link
                to="/portfolio"
                className="shrink-0 justify-self-end self-end bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
              >
                VIEW FEATURED PROJECTS
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-4 md:pb-6 md:px-10">
        <SectionHeading
          eyebrow="RESERVE OUR HANDPICKED PIECES"
          title="Made available in limited numbers for an exclusive audience."
        />
        <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="order-2 md:order-1 flex flex-col items-end text-right">
            <Link
              to="/contact"
              search={{ product: "Korta Center Table" }}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
            >
              <h3 className="text-3xl font-bold md:text-4xl">Korta Center Table</h3>
            </Link>
            <p className="mt-2 max-w-xl text-xl text-black/85">
              PATENTED BRONZE | COLLECTION OF 2025
            </p>
            <div className="mt-8 flex flex-col gap-3 w-fit">
              <Link
                to="/contact"
                search={{ product: "Korta Center Table" }}
                className="w-full text-center bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:opacity-90"
              >
                SPEAK TO THE CURATOR
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Link
              to="/contact"
              search={{ product: "Korta Center Table" }}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
            >
              <div className="korta-fade relative aspect-square w-[calc((100%-0.75rem)/2*5/4)] overflow-hidden">
                <img
                  src={productKorta1}
                  alt="Korta center table — view one"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={700}
                  height={875}
                  loading="lazy"
                />
                <img
                  src={productKorta2}
                  alt="Korta center table — view two"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ animationDelay: "5s" }}
                  width={700}
                  height={875}
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-2 pb-8 md:px-10">
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
                  <span className="block font-serif text-gold text-[180px] leading-[0.3] mb-8 select-none opacity-40 translate-y-10">
                    “
                  </span>
                  <p
                    className="text-left mt-6 font-sans italic text-white/70 text-xl sm:text-2xl md:text-[30px] leading-[1.3] tracking-[0.001em]"
                    style={{ fontWeight: 100 }}
                  >
                    {t.text}
                  </p>
                </div>
                <div
                  className="text-right mt-10 font-sans italic text-white/60 text-lg md:text-xl tracking-wide"
                  style={{ fontWeight: 100 }}
                >
                  - {t.author}
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="text-[28px] tracking-[0.02em] text-gold">
          THE SAME STANDARD, <span className="font-bold italic">EVERYTIME.</span>
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
