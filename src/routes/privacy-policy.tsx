import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - House of Kalaa" },
      {
        name: "description",
        content: "Privacy Policy for House of Kalaa inquiries and consultations.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[900px] px-6 py-16 md:px-10">
        <p className="text-[15px] font-semibold tracking-[0.10em] text-gold">PRIVACY POLICY</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          House of Kalaa Privacy Policy
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            House of Kalaa uses inquiry information only to respond to consultation requests,
            understand project requirements, and coordinate studio communication.
          </p>
          <p>
            We do not sell personal information. Contact details, project details, and messages are
            handled with care and shared only with the internal team members required to assist with
            the inquiry.
          </p>
          <p>
            To update or remove information submitted through the website, contact
            kalpeet@houseofkalaa.studio.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
