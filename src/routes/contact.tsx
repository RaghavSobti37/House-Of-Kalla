import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import workshop from "@/assets/workshop.jpg";
import showroom from "@/assets/showroom.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — House of Kalaa" },
      { name: "description", content: "Begin your journey. A private consultation for collectors and architects." },
      { property: "og:title", content: "Contact — House of Kalaa" },
      { property: "og:description", content: "Your space deserves better." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [type, setType] = useState<"FURNITURE" | "LUXURY INTERIOR">("FURNITURE");
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative">
        <img src={workshop} alt="House of Kalaa workshop" className="h-[52vh] min-h-[380px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-12 md:px-10">
            <h1 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-white md:text-5xl">
              YOUR SPACE DESERVES,
              <br />
              <span className="font-medium italic">BETTER.</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm text-white/85">
              A sanctuary of craftsmanship in the heart of industrial Nashik, we would love to hear about your vision regardless if you're starting from scratch.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.24em] text-gold">INQUIRY</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Begin your journey.</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Whether you are a private collector or an architect detailing a vision seeking a unique masterpiece,
          we are ready to assist you with selections to curate your space into a home.
        </p>

        <hr className="my-10 border-foreground/20" />

        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <div className="md:border-r md:border-foreground/20 md:pr-10">
            <h3 className="text-xl font-semibold">A PRIVATE CONSULTATION.</h3>
            <p className="mt-2 text-sm text-muted-foreground">A dedicated session to discuss your project requirements.</p>
            <p className="mt-8 text-[11px] font-semibold tracking-[0.2em] text-gold">PHONE</p>
            <a href="tel:+917774048818" className="mt-1 block text-sm text-navy hover:underline">+91 7774048818</a>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.2em] text-gold">EMAIL US</p>
            <a href="mailto:kalpeet@houseofkalaa.studio" className="mt-1 block text-sm text-navy hover:underline">kalpeet@houseofkalaa.studio</a>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-2">
              {(["FURNITURE", "LUXURY INTERIOR"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`px-5 py-3 text-[11px] font-semibold tracking-[0.16em] transition-colors ${
                    type === t ? "bg-navy text-white" : "border border-navy text-navy hover:bg-navy/5"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="FULL NAME" name="name" />
              <Field label="EMAIL" name="email" type="email" />
            </div>
            <Field label="PROJECT TYPE" name="project" />
            <div>
              <label className="text-[11px] font-semibold tracking-[0.2em] text-foreground/80">YOUR MESSAGE</label>
              <textarea rows={5} className="mt-2 w-full border border-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-navy" />
            </div>
            <button className="bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:opacity-90">
              SEND INQUIRY
            </button>
          </form>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Visit the Studio</h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Our flagship outlet in Nashik is an immersive experience of our legacy. We operate by appointments so you get our full and undivided attention.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold">
                  <MapPin className="h-3.5 w-3.5" /> NASHIK SHOWROOM
                </div>
                <p className="mt-1 text-foreground/80">B-36, NICE, A Road, 5th street, MIDC, Satpur, Nashik - 422007</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold">
                  <Clock className="h-3.5 w-3.5" /> TIMINGS
                </div>
                <p className="mt-1 text-foreground/80">Mon – Sat · 10:00 AM – 7:00 PM · By appointment</p>
              </div>
            </div>
            <a href="#map" className="mt-8 inline-block text-[11px] font-semibold tracking-[0.2em] text-navy hover:text-gold">
              VIEW ON MAP →
            </a>
          </div>
          <img src={showroom} alt="House of Kalaa showroom" className="aspect-[4/5] w-full max-w-[440px] justify-self-end object-cover" />
        </div>
      </section>

      <section id="map" className="h-[420px] w-full overflow-hidden">
        <iframe
          title="House of Kalaa location"
          className="h-full w-full border-0"
          src="https://www.google.com/maps?q=MIDC%20Satpur%20Nashik&output=embed"
          loading="lazy"
        />
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] font-semibold tracking-[0.2em] text-foreground/80">{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full border border-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-navy" />
    </div>
  );
}