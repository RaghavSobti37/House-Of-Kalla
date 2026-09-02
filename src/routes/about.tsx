import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import workshop from "@/assets/workshop.jpg";
import teamSanjay from "@/assets/team-sanjay.jpg";
import teamDirector from "@/assets/team-director.jpg";
import teamKalpeet from "@/assets/team-kalpeet.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — House of Kalaa" },
      {
        name: "description",
        content: "35 years of mastery. The hands and heritage behind House of Kalaa.",
      },
      { property: "og:title", content: "About — House of Kalaa" },
      { property: "og:description", content: "We do not design rooms. We compose atmospheres." },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Sanjay Lunawat",
    role: "MANAGING DIRECTOR, KNCHAN ASSOCIATES",
    bio: "35 years in interior design. The belief that an unorganised industry could be made accountable. Present in every significant project decision since the first day.",
    image: teamSanjay,
    reverse: false,
    grayscale: true,
  },
  {
    name: "Samkeet Lunawat",
    role: "DIRECTOR, KNCHAN ASSOCIATES",
    bio: "Trained at IKEA USA. Returned to build something more considered, more personal, and more honest than anything the industry was offering. Leads product, manufacturing, and the House of Kalaa vision.",
    image: teamDirector,
    reverse: true,
    grayscale: true,
  },
  {
    name: "Kalpeet Lunawat",
    role: "FOUNDER, HOUSE OF KALAA",
    bio: "He is the point where the client's vision and the factory's capability meet. His unmatched domain knowledge and the rare ability to take what a client describes in words and show them exactly what it looks like in three dimensions before a single piece of material is touched.",
    image: teamKalpeet,
    reverse: false,
    grayscale: false,
  },
];

const history = [
  {
    year: "1991",
    title: "Knchan Associates is established",
    text: [
      "A turnkey interior practice built on rigorous craft,",
      "an uncompromising eye for detail, and trust earned across every commission.",
    ],
  },
  {
    year: "2017",
    title: "Knchan Furniture Studio takes form",
    text: [
      "The conviction that exceptional interiors demand furniture",
      "of equal distinction: bespoke, considered, and built to endure.",
    ],
  },
  {
    year: "Today",
    title: "House of Kalaa - Luxury Interiors",
    text: [
      "Three decades of craft, distilled into one destination.",
      "Where a home is not decorated, it is composed.",
    ],
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10">
        <p className="text-[30px] font-semibold tracking-[0.01em] text-navy">
          INDUSTRY LEADERS FOR A REASON!
        </p>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
          35 years of mastery.
        </h1>
        <p className="mt-6 max-w-xl text-l text-muted-foreground">
          Every project begins with a conversation. Every one ends with a space that is completely,
          specifically, unrepeatable.
        </p>

        <img
          src={workshop}
          alt="House of Kalaa workshop"
          className="mt-14 aspect-[16/9] w-full object-cover"
          loading="lazy"
        />

        <div className="mt-10 max-w-none space-y-4 text-lg md:text-xl leading-relaxed text-foreground/80">
          <p className="lg:whitespace-nowrap">House of Kalaa is what we built for you.</p>
          <p className="lg:whitespace-nowrap">
            A 4,000 sq ft space where the most articulate interior design solutions sit alongside
            pieces made in our own factory.
          </p>
          <p className="lg:whitespace-nowrap">
            Where you can see, and experience what considered living actually looks like.
          </p>
          <p className="lg:whitespace-nowrap font-semibold text-foreground">
            We believe that a brand with nothing to hide should hide nothing.
          </p>
        </div>

        <hr className="my-14 border-foreground/20" />

        <SectionHeading
          eyebrow="WHAT WE BELIEVE"
          title={
            <>
              We do not design rooms. We compose atmospheres where material{" "}
              <br className="hidden lg:inline" /> and meaning converge.
            </>
          }
        />
        <p className="mt-4 text-[17px] font-light tracking-[0.01em] text-foreground/80">
          WE BELIEVE IN SHOWCASING OUR WORK,
          <br /> <span className="italic font-semibold text-navy">LITERALLY.</span>
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-navy px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-navy/90"
        >
          BOOK A FACTORY VISIT
        </Link>

        <hr className="my-14 border-foreground/20" />

        <p className="text-[15px] font-semibold tracking-[0.10em] text-gold">OUR HISTORY</p>
        <div className="mt-10">
          <div className="relative mx-auto w-full max-w-[1100px]">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 border-l border-dashed border-gold/40 md:block" />
            {history.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative pb-12 last:pb-0 md:grid md:grid-cols-2 md:gap-10 ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}>
                    <p className="text-[24px] font-semibold tracking-[0.07em] text-gold">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                      <span className="md:block md:whitespace-nowrap">{item.text[0]}</span>
                      <span className="md:block md:whitespace-nowrap"> {item.text[1]}</span>
                    </p>
                  </div>
                  <div aria-hidden className="hidden md:block" />
                  <span className="absolute left-1/2 top-3 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-gold bg-background md:block" />
                </div>
              );
            })}
          </div>
        </div>

        <hr className="my-14 border-foreground/20" />

        <p className="text-[30px] font-semibold tracking-[0.01em] text-navy">FOUNDER BIOS</p>
        <h2 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">The Heritage…</h2>
      </section>

      <section className="mt-10 space-y-0">
        {team.map((m, i) => {
          const isEven = i % 2 === 0;
          const bgGradient = isEven
            ? "bg-gradient-to-r from-black via-[#0e122b] to-[#2b3678]"
            : "bg-gradient-to-r from-[#2b3678] via-[#0e122b] to-black";

          return (
            <div key={i} className={`${bgGradient} text-white`}>
              <div
                className={`mx-auto grid max-w-[1180px] items-center gap-6 px-6 py-10 md:grid-cols-2 md:px-12 md:py-12 ${
                  m.reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl text-white">
                    {m.name}
                  </h3>
                  <div className="w-fit">
                    <p className="mt-1.5 text-[18px] font-medium tracking-[0.01em] text-white/70 uppercase">
                      {m.role}
                    </p>
                    <div className="mt-2.5 mb-5 h-px w-full bg-white/30" />
                  </div>
                  <p className="max-w-xl text-l md:text-l leading-relaxed text-white/80">{m.bio}</p>
                </div>
                <div className={m.reverse ? "md:justify-self-start" : "md:justify-self-end"}>
                  <img
                    src={m.image}
                    alt={m.name}
                    className={`aspect-[3/4] w-[260px] md:w-[280px] object-cover ${
                      m.grayscale ? "grayscale" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-background py-20 text-center">
        <SectionHeading
          align="center"
          eyebrow="EXPERIENCE THE LEGACY"
          title="From our workshop, to your home."
        />
      </section>

      <SiteFooter />
    </div>
  );
}
