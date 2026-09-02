import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — House of Kalaa" },
      {
        name: "description",
        content:
          "How House of Kalaa collects, uses, and protects information submitted through our website and inquiry form.",
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
        <p className="mt-4 text-sm text-muted-foreground">Last updated: September 2026</p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            This Privacy Policy describes how House of Kalaa (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) collects, uses, and protects the information you provide when you visit
            our website or submit an inquiry through our contact form.
          </p>
          <p>
            We are committed to protecting your privacy and handling your information with
            transparency and care.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">1. Information We Collect</h2>
            <p>
              When you visit our website or contact us through our inquiry form, we may collect the
              following information:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number or WhatsApp number</li>
              <li>Your location or city</li>
              <li>
                Project details such as furniture type, material preference, room or space, project
                type, property size, timeline, or budget range
              </li>
              <li>The nature of your project or inquiry</li>
              <li>Any additional information you voluntarily provide in your message</li>
            </ul>
            <p>
              We do not collect any sensitive personal data such as financial information,
              identification numbers, or payment details through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">2. How We Use Your Information</h2>
            <p>The information you provide is used solely for the following purposes:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>To respond to your inquiry or project request</li>
              <li>To communicate with you regarding potential or ongoing projects</li>
              <li>To send you relevant information about our services if you have requested it</li>
            </ul>
            <p>We do not use your information for automated decision-making or profiling.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">3. How We Store Your Information</h2>
            <p>
              Your information is received directly via our contact form and stored securely. We
              take reasonable precautions to protect your data from unauthorised access, misuse or
              disclosure.
            </p>
            <p>
              We do not operate a formal database of user records. Inquiries received through this
              website are handled manually and retained only as long as necessary for business
              communication purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">4. Sharing of Information</h2>
            <p>
              We do not sell, rent, trade or share your personal information with any third party
              for marketing or commercial purposes.
            </p>
            <p>Your information may be shared only in the following limited circumstances:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                With trusted service providers who assist us in operating our website or conducting
                our business, strictly on a need-to-know basis
              </li>
              <li>
                If required by law, regulation, or a valid government or judicial order under
                applicable Indian law
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">5. Cookies</h2>
            <p>
              Our website may use basic cookies to ensure the website functions correctly and to
              understand general visitor behaviour through analytics tools such as Google Analytics.
              These cookies do not collect personally identifiable information.
            </p>
            <p>
              You may disable cookies through your browser settings at any time. Disabling cookies
              may affect certain features of the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">6. Third Party Links</h2>
            <p>
              Our website may contain links to external websites including but not limited to our
              WhatsApp contact, Instagram page, or other platforms. We are not responsible for the
              privacy practices or content of those third party websites. We encourage you to read
              their respective privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">7. Your Rights Under Indian Law</h2>
            <p>
              Under the Information Technology Act, 2000 and the Digital Personal Data Protection
              Act, 2023, you have the right to:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>
                Request deletion of your personal data where it is no longer required for the
                purpose it was collected
              </li>
              <li>Withdraw consent for us to use your data at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us directly using the details below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as is necessary to fulfill the
              purpose for which it was collected, or as required by applicable law. Inquiry data is
              typically retained for the duration of our business communication and for a reasonable
              period thereafter.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">9. Children&apos;s Privacy</h2>
            <p>
              Our website and services are directed at businesses, professionals, architects, and
              private clients seeking furniture and interior services. We do not knowingly collect
              personal information from individuals under the age of 18. If you believe a minor has
              submitted information through our website, please contact us and we will delete it
              promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">10. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Any changes will be
              reflected on this page with a revised date at the top. We encourage you to review this
              policy periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">11. Contact Us</h2>
            <p>
              If you have any questions, concerns or requests regarding this Privacy Policy or how
              your data is handled, please contact us:
            </p>
            <div className="space-y-1 text-foreground/80">
              <p className="font-medium text-navy">House of Kalaa</p>
              <p>B-36, NICE, A Road, 5th street, MIDC, Satpur, Nashik - 422007</p>
              <p>Maharashtra, India</p>
              <p>
                <a
                  href="mailto:kalpeet@houseofkalaa.studio"
                  className="text-navy underline-offset-2 hover:underline"
                >
                  kalpeet@houseofkalaa.studio
                </a>
              </p>
              <p>
                <a
                  href="tel:+917774048818"
                  className="text-navy underline-offset-2 hover:underline"
                >
                  +91 7774048818
                </a>
              </p>
              <p>
                <a
                  href="https://house-of-kalla.vercel.app"
                  className="text-navy underline-offset-2 hover:underline"
                >
                  https://house-of-kalla.vercel.app
                </a>
              </p>
            </div>
            <p className="pt-2">
              This Privacy Policy is governed by the laws of India. Any disputes arising in
              connection with this policy shall be subject to the jurisdiction of the courts of
              Nashik, Maharashtra.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
