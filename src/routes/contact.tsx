import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import workshop from "@/assets/workshop.jpg";
import showroomFade1 from "@/assets/showroom-fade-1.jpg";
import showroomFade2 from "@/assets/showroom-fade-2.jpg";
import showroomFade3 from "@/assets/showroom-fade-3.jpg";
import showroomFade4 from "@/assets/showroom-fade-4.jpg";
import knchanLogo from "../../LOGOS/knchan-navbar.png";
import kalaaLogo from "../../LOGOS/Asset 7@2x.webp";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  STUDIO_ADDRESS,
  absoluteUrl,
  breadcrumbSchema,
  createSeo,
  jsonLd,
} from "@/lib/seo";

const showroomFadeImages = [
  { src: showroomFade1, alt: "House of Kalaa showroom bedroom suite" },
  { src: showroomFade2, alt: "Showroom arched bedside niche and headboard" },
  { src: showroomFade3, alt: "Showroom bedside niche with integrated outlets" },
  { src: showroomFade4, alt: "Showroom bed with lit arched nightstand" },
];

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { product?: string } => ({
    product:
      typeof search.product === "string" && search.product.trim()
        ? search.product.trim()
        : undefined,
  }),
  head: () => ({
    ...createSeo({
      title: "Contact House of Kalaa",
      description:
        "Book a private consultation with House of Kalaa for bespoke furniture, luxury interiors, factory visits, and project inquiries in Nashik.",
      path: "/contact",
      keywords: [
        "contact House of Kalaa",
        "interior design consultation Nashik",
        "furniture consultation",
        "Nashik design studio",
      ],
    }),
    scripts: [
      jsonLd(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact House of Kalaa",
        url: absoluteUrl("/contact"),
        description:
          "Book a consultation for bespoke furniture, luxury interiors, factory visits, and project inquiries.",
        mainEntity: {
          "@type": "LocalBusiness",
          "@id": `${absoluteUrl("/")}#organization`,
          name: "House of Kalaa",
          telephone: CONTACT_PHONE,
          email: CONTACT_EMAIL,
          address: STUDIO_ADDRESS,
          openingHours: "Mo-Sa 10:00-19:00",
        },
      }),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { product } = Route.useSearch();
  const [type, setType] = useState<"FURNITURE" | "LUXURY INTERIOR">("FURNITURE");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const messageDefault = product ? `Inquiry about: ${product}` : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, inquiryType: type }),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send inquiry.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Your inquiry has been sent. We will get back to you shortly.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to send inquiry. Please try again.",
      );
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative">
        <img
          src={workshop}
          alt="House of Kalaa workshop"
          className="h-[52vh] min-h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-12 md:px-10">
            <h1 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-white md:text-5xl">
              YOUR SPACE DESERVES,
              <br />
              <span className="font-bold italic">BETTER.</span>
            </h1>
            <p className="mt-2 text-xl leading-snug text-white/85">
              <span className="block lg:whitespace-nowrap">
                A sanctuary of craftsmanship in the heart of industrial Nashik,
              </span>
              <span className="block lg:whitespace-nowrap">
                we would love to hear about your vision regardless if you're starting from scratch.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <SectionHeading eyebrow="INQUIRE" title="Begin your journey." />
        <p className="mt-2 text-xl leading-snug text-muted-foreground">
          <span className="block lg:whitespace-nowrap">
            Whether you are a private collector or an architect detailing a vision seeking a unique
            masterpiece,
          </span>
          <span className="block lg:whitespace-nowrap">
            we are ready to assist you with selections to curate your space into a home.
          </span>
        </p>

        <hr className="my-10 border-foreground/20" />

        <div className="grid gap-10 md:grid-cols-[1fr_1.45fr]">
          <div className="md:border-r md:border-foreground/20 md:pr-10">
            <h3 className="text-xl font-semibold">PRIVATE CONSULTATION.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A dedicated session to discuss your project requirements.
            </p>
            <p className="mt-8 text-[11px] font-semibold tracking-[0.16em] text-gold">PHONE</p>
            <a href="tel:+917774048818" className="mt-1 block text-sm text-navy hover:underline">
              +91 7774048818
            </a>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.16em] text-gold">EMAIL US</p>
            <a
              href="mailto:kalpeet@houseofkalaa.studio"
              className="mt-1 block text-sm text-navy hover:underline"
            >
              kalpeet@houseofkalaa.studio
            </a>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              {(["FURNITURE", "LUXURY INTERIOR"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`flex h-20 items-center justify-center px-5 py-3 transition-colors ${
                    type === t
                      ? "border border-navy bg-white"
                      : "border border-transparent hover:bg-black/5"
                  }`}
                  aria-label={
                    t === "FURNITURE" ? "Knchan consultation" : "House of Kalaa consultation"
                  }
                >
                  <img
                    src={t === "FURNITURE" ? knchanLogo : kalaaLogo}
                    alt={t === "FURNITURE" ? "Knchan" : "House of Kalaa"}
                    className={`max-h-12 w-auto ${t === "LUXURY INTERIOR" ? "brightness-0" : ""}`}
                  />
                </button>
              ))}
            </div>

            {type === "FURNITURE" ? <FurnitureFields /> : <InteriorFields />}

            <div>
              <label className="text-[11px] font-semibold tracking-[0.2em] text-foreground/80">
                YOUR MESSAGE
              </label>
              <textarea
                key={messageDefault}
                name="message"
                rows={5}
                defaultValue={messageDefault}
                className="mt-2 w-full border border-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-navy"
                required
              />
            </div>
            {statusMessage ? (
              <p
                className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}
                role="status"
              >
                {statusMessage}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "SENDING..." : "SEND INQUIRY"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-navy/[0.06]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Visit the Studio</h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Our flagship outlet in Nashik is an immersive experience of our legacy. We operate by
              appointments so you get our full and undivided attention.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold">
                  <MapPin className="h-3.5 w-3.5" /> NASHIK SHOWROOM
                </div>
                <p className="mt-1 text-foreground/80">
                  B-36, NICE, A Road, 5th street, MIDC, Satpur, Nashik - 422007
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold">
                  <Clock className="h-3.5 w-3.5" /> TIMINGS
                </div>
                <p className="mt-1 text-foreground/80">
                  Mon – Sat · 10:00 AM – 7:00 PM · By appointment
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/NICE,+NICE+Area,+MIDC,+Satpur+Colony,+Nashik,+Maharashtra+422005,+India/@19.996777,73.7442993,17z/data=!3m1!4b1!4m10!1m2!2m1!1sNICE,+NICE+Area,+MIDC,+Satpur+Colony,+Nashik,+Maharashtra+422005!3m6!1s0x3bddec800f26e747:0x7e86cf739d18b13d!8m2!3d19.996772!4d73.7468796"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-[11px] font-semibold tracking-[0.2em] text-navy hover:text-gold"
            >
              VIEW ON MAP
            </a>
          </div>
          <div className="showroom-fade relative hidden aspect-square w-full max-w-[440px] justify-self-end overflow-hidden md:block">
            {showroomFadeImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ animationDelay: `${index * 4}s` }}
                width={880}
                height={880}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="h-[420px] w-full overflow-hidden">
        <iframe
          title="House of Kalaa location"
          className="h-full w-full border-0"
          src="https://www.google.com/maps?q=19.996772,73.7468796(NICE,+NICE+Area,+MIDC,+Satpur+Colony,+Nashik)&hl=en&z=17&output=embed"
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
      <label
        htmlFor={name}
        className="text-[11px] font-semibold tracking-[0.2em] text-foreground/80"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={["name", "fullName", "email", "phone"].includes(name)}
        className="mt-2 w-full border border-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-navy"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold tracking-[0.2em] text-foreground/80"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full border border-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-navy"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function FurnitureFields() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="NAME" name="name" />
        <Field label="EMAIL" name="email" type="email" />
        <Field label="PHONE NUMBER" name="phone" type="tel" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <SelectField
          label="FURNITURE TYPE"
          name="furnitureType"
          options={["Sofa", "Bed", "Dining", "Storage", "Custom"]}
        />
        <SelectField
          label="MATERIAL PREFERENCE"
          name="materialPreference"
          options={["Wood", "Upholstered", "Metal", "Mixed"]}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="ROOM/SPACE" name="roomSpace" />
        <SelectField
          label="BUDGET RANGE"
          name="budgetRange"
          options={["Under Rs. 1 lakh", "Rs. 1-3 lakhs", "Rs. 3-7 lakhs", "Rs. 7 lakhs+"]}
        />
      </div>
    </>
  );
}

function InteriorFields() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="FULL NAME" name="fullName" />
        <Field label="EMAIL" name="email" type="email" />
        <Field label="PHONE NUMBER" name="phone" type="tel" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <SelectField
          label="PROJECT TYPE"
          name="projectType"
          options={["Residential", "Hospitality", "Commercial"]}
        />
        <Field label="PROPERTY SIZE / AREA (SQ FT)" name="propertySize" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="LOCATION / CITY" name="location" />
        <SelectField
          label="TIMELINE"
          name="timeline"
          options={["Immediate", "3 months", "6 months+"]}
        />
      </div>
    </>
  );
}
