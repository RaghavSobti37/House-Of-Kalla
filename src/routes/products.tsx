import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import productsHero from "@/assets/products-hero.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productDining from "@/assets/product-dining.jpg";
import productDiningChair from "@/assets/product-dining-chair.jpg";
import productSideTable from "@/assets/product-side-table.jpg";
import productConsole from "@/assets/product-console.jpg";
import productCoffeeTable from "@/assets/product-coffee-table.jpg";
import productBed from "@/assets/product-bed.jpg";
import productTvUnit from "@/assets/product-tv-unit.jpg";

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

const products = [
  { name: "Sofas & Corner", image: productSofa },
  { name: "Dining Table", image: productDining },
  { name: "Dining Chair", image: productDiningChair },
  { name: "Side Table", image: productSideTable },
  { name: "Console", image: productConsole },
  { name: "Coffee Table", image: productCoffeeTable },
  { name: "Bed", image: productBed },
  { name: "TV Unit", image: productTvUnit },
];

function ProductsPage() {
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
            <p className="mt-3 max-w-xl text-lg text-white/85">
              A curated collection of contemporary masterworks. Every object is a dialogue between
              raw material and human precision.
            </p>
            <Link
              to="/contact"
              className="mt-6 w-fit bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:opacity-90"
            >
              INQUIRE LEAD TIME
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ProductCard({ name, image }: { name: string; image: string }) {
  return (
    <article className="group">
      <Link
        to="/contact"
        search={{ product: name }}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            width={1600}
            height={1600}
            loading="lazy"
          />
        </div>
        <h3 className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.22em] text-foreground underline underline-offset-8 decoration-foreground/70">
          {name}
        </h3>
      </Link>
    </article>
  );
}
