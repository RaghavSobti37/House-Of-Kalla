import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import projectBar from "@/assets/project-bar.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import productKorta from "@/assets/product-korta.jpg";
import handsCraft from "@/assets/hands-craft.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — House of Kalaa" },
      { name: "description", content: "Selected residential, corporate, and hospitality projects by House of Kalaa." },
      { property: "og:title", content: "Portfolio — House of Kalaa" },
      { property: "og:description", content: "Every project begins with a conversation." },
    ],
  }),
  component: PortfolioPage,
});

const filters = ["VIEW ALL", "RESIDENTIAL", "CORPORATE", "HOSPITALITY"] as const;

const projects = [
  { title: "Atelier Bauhem, Residential Interior", location: "Ahmedabad, Gujarat 2023.", image: projectBar, color: "text-gold" },
  { title: "Elite Hospitality, Holiday Inn", location: "Nashik, Maharashtra 2022.", image: projectHotel, color: "text-navy" },
  { title: "Korta Residences, Private Home", location: "Mumbai, Maharashtra 2024.", image: productKorta, color: "text-navy" },
];

function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("VIEW ALL");
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-navy">POSSIBILITIES MADE REAL!</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">This work brought us here.</h1>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          Every project begins with a conversation. Every one ends with a space that is completely, specifically, unrepeatable.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[12px] font-semibold tracking-[0.24em] transition-colors ${
                active === f ? "text-gold" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-14 space-y-16">
          {projects.map((p, i) => (
            <article key={i} className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
              <img src={p.image} alt={p.title} className="aspect-[4/5] w-full object-cover md:aspect-[4/5]" loading="lazy" />
              <div>
                <h3 className={`font-serif text-3xl italic md:text-4xl ${p.color}`}>{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{p.location}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Industrial bones meet artisanal intervention. Exposed steel and brick serve as canvas for
                  bespoke millwork, Carrara surfaces, and a material palette that honors the building's
                  manufacturing heritage.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/contact" className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90">
            VISIT OUR FACTORY
          </Link>
        </div>
      </section>

      {/* Legacy band */}
      <section className="bg-gold text-white">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">
              35 Years Of
              <br />
              Architectural
              <br />
              Precision
            </h2>
            <Link to="/about" className="mt-8 inline-block bg-ink px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-ink/80">
              READ OUR STORY
            </Link>
          </div>
          <div className="relative">
            <img src={handsCraft} alt="Craftsman at work" className="w-full object-cover" loading="lazy" />
            <div className="absolute bottom-6 left-6 max-w-[220px] bg-white p-4 text-[11px] tracking-[0.16em] text-ink">
              "WE DO NOT BUILD FURNITURE. WE CURATE DOMESTIC LANDSCAPES THROUGH ARCHIVAL FORMS."
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}