import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Meridian Ledger website and engagement of our services.",
};

export default function TermsPage() {
  return (
    <LedgerSection label="Terms" className="pt-ledger-3">
      <h1 className="font-display text-38 font-medium text-ink">Terms of service</h1>
      <p className="mt-2 text-14 text-slate">Last updated January 2026</p>
      <div className="mt-8 flex flex-col gap-8 text-16 text-slate">
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Use of this website</h2>
          <p className="mt-3 max-w-[70ch]">
            This website is provided for general information about {siteConfig.name} and our
            services. Nothing on it constitutes tax, legal, or financial advice, and browsing this
            site does not create a client relationship between you and the firm.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">No advice without engagement</h2>
          <p className="mt-3 max-w-[70ch]">
            Figures, examples, and worked calculations on this site, including on our Insights
            pages and interactive tools, are illustrative and based on general patterns. They are
            not a substitute for advice based on your actual documents and circumstances, and
            shouldn&apos;t be relied on to make a filing or financial decision without confirming
            the specifics with us directly.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Client relationship</h2>
          <p className="mt-3 max-w-[70ch]">
            A client relationship begins only when both parties sign an engagement letter defining
            the scope of work. Submitting the contact form or using an interactive tool on this
            site does not, by itself, engage us to perform any service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Accuracy</h2>
          <p className="mt-3 max-w-[70ch]">
            We make a reasonable effort to keep figures like filing deadlines and pricing current,
            but tax law and deadlines change, and you should confirm anything time-sensitive with
            us directly rather than relying solely on this site.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Intellectual property</h2>
          <p className="mt-3 max-w-[70ch]">
            The content, design, and tools on this site belong to {siteConfig.name} and may not be
            copied or republished without permission.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Limitation of liability</h2>
          <p className="mt-3 max-w-[70ch]">
            {siteConfig.name} is not liable for decisions made based solely on general information
            published on this website. Our liability for services actually engaged is governed
            separately by the terms of your signed engagement letter.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Contact</h2>
          <p className="mt-3 max-w-[70ch]">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline underline-offset-4">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>
      </div>
    </LedgerSection>
  );
}
