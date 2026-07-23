import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import productsHero from "@/assets/products-hero.jpg";
import productKorta from "@/assets/product-korta.jpg";
import productLoungeChair from "@/assets/product-loungechair.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productDining from "@/assets/product-dining.jpg";
import productLeather from "@/assets/product-leather.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — House of Kalaa" },
      {
        name: "description",
        content:
          "A curated collection of contemporary masterworks. Seating, tables, storage and bespoke design.",
      },
      { property: "og:title", content: "Products — House of Kalaa" },
      { property: "og:description", content: "Every piece here, has been chosen." },
    ],
  }),
  component: ProductsPage,
});

const filters = ["VIEW ALL", "SEATING", "TABLES", "STORAGE", "DESIGN YOUR OWN"] as const;

const products = [
  { name: "Granite Kitchen Top", image: productKorta, className: "text-gold" },
  { name: "Lounge Chair", image: productLoungeChair, className: "text-gold" },
  { name: "Atelier Sofa", image: productSofa, className: "text-ink", wide: true },
  { name: "Lounge Chair", image: productDining, className: "text-gold" },
  { name: "Granite Kitchen Top", image: productLeather, className: "text-gold" },
];

function ProductsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("VIEW ALL");
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="relative">
        <img
          src={productsHero}
          alt="Curated furniture collection"
          className="h-[52vh] min-h-[380px] w-full object-cover"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-12 md:px-10">
            <h1 className="max-w-2xl text-3xl font-light leading-tight tracking-tight text-white md:text-5xl ">
              EVERY PIECE HERE,
              <br />
              <span className="font-extrabold italic">HAS BEEN CHOSEN.</span>
            </h1>
            <p className="mt-0.5 max-w-xl text-l text-white/85">
              A curated collection contemporary masterworks. Every object is a dialogue between raw
              material and human precision.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`mt-4 text-[17px] font-semibold tracking-[0.10em] transition-colors ${active === f ? "text-gold" : "text-foreground/60 hover:text-foreground"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {products.slice(0, 2).map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
          <div className="md:col-span-2">
            <ProductCard {...products[2]} />
          </div>
          {products.slice(3).map((p, i) => (
            <ProductCard key={`b-${i}`} {...p} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ProductCard({
  name,
  image,
  className = "",
}: {
  name: string;
  image: string;
  className?: string;
}) {
  return (
    <article className="group">
      <img src={image} alt={name} className="w-full object-cover mt-8" loading="lazy" />
      <h3 className={`mt-5 text-4xl font-bold ${className}`}>{name}</h3>
      <p className="mt-2 max-w-xl text-xl text-foreground/80">
        Industrial bones meet artisanal intervention. Exposed steel and brick serve as canvas for
        bespoke millwork, Carrara surfaces, and a material palette that honors the building's
        manufacturing.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-block text-[17px] font-semibold tracking-[0.1em] text-navy hover:text-gold underline underline-offset-8"
      >
        INQUIRE LEAD TIME
      </Link>
    </article>
  );
}
