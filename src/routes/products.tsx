import { createFileRoute, Link } from "@tanstack/react-router";
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

const products = [
  { name: "Korta Center Table", image: productKorta },
  { name: "Lounge Chair", image: productLoungeChair },
  { name: "Atelier Sofa", image: productSofa },
  { name: "Dining Ensemble", image: productDining },
  { name: "Leather Accent Chair", image: productLeather },
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
            <p className="mt-0.5 max-w-xl text-l text-white/85">
              A curated collection contemporary masterworks. Every object is a dialogue between raw
              material and human precision.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <div className="flex justify-end">
          <Link
            to="/contact"
            className="bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:opacity-90"
          >
            INQUIRE LEAD TIME
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
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
}: {
  name: string;
  image: string;
}) {
  return (
    <article className="group">
      <img
        src={image}
        alt={name}
        className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:opacity-90"
        loading="lazy"
      />
      <h3 className="mt-5 text-3xl font-semibold tracking-tight text-gold md:text-4xl">{name}</h3>
      <p className="mt-2 max-w-xl text-lg leading-relaxed text-foreground/75">
        A considered piece for composed interiors, selected for material presence, proportion, and
        long-term craft value.
      </p>
    </article>
  );
}
