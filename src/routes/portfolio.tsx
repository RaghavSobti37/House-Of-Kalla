import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import handsCraft from "@/assets/hands-craft.jpg";
import { portfolioProjects, type ProjectCategory } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - House of Kalaa" },
      {
        name: "description",
        content: "Selected hospitality and commercial projects by House of Kalaa.",
      },
      { property: "og:title", content: "Portfolio - House of Kalaa" },
      { property: "og:description", content: "Every project begins with a conversation." },
    ],
  }),
  component: PortfolioPage,
});

const filters = ["View All", "Hospitality", "Commercial"] as const;

function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("View All");
  const visibleProjects =
    active === "View All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === (active as ProjectCategory));

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10">
        <p className="text-[30px] font-semibold tracking-[0.01em] text-navy">
          POSSIBILITIES MADE REAL!
        </p>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
          This work brought us here.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Every project begins with a conversation. Every one ends with a space that is completely,
          specifically, unrepeatable.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-[1400px] px-6 py-12 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`text-[12px] font-semibold tracking-[0.10em] transition-colors ${
                active === filter ? "text-gold" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-14 space-y-16">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              to="/portfolio/$projectSlug"
              params={{ projectSlug: project.slug }}
              className="group grid gap-4 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-8"
            >
              <img
                src={project.image}
                alt={project.name}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:opacity-90"
                loading="lazy"
              />
              <div className="flex flex-col justify-end">
                <p className="text-[12px] font-semibold tracking-[0.18em] text-gold">
                  {project.category}
                </p>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-xl text-black">{project.service}</p>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/contact"
            className="bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
          >
            VISIT OUR FACTORY
          </Link>
        </div>
      </section>

      <section className="overflow-hidden bg-[#78581f] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 px-8 md:grid-cols-2 md:px-16">
          <div>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              35 Years Of
              <br />
              Architectural
              <br />
              Precision
            </h2>
            <Link
              to="/about"
              className="mt-8 inline-block bg-black px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-white transition-colors hover:bg-black/90"
            >
              READ OUR STORY
            </Link>
          </div>
          <div className="relative pb-6 pl-6">
            <img
              src={handsCraft}
              alt="Craftsman at work"
              className="aspect-[16/9] w-full object-cover grayscale"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 z-10 max-w-[250px] bg-white p-5 shadow-2xl">
              <p className="text-[11px] font-medium leading-normal tracking-[0.08em] text-[#1a1a1a]">
                "WE DO NOT BUILD FURNITURE, WE CURATE DOMESTIC LANDSCAPES THROUGH ARCHIVAL FORMS"
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
