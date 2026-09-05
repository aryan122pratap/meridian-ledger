import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Meridian Ledger CPA in Austin, TX.",
};

export default function ContactPage() {
  return (
    <LedgerSection label="Contact" className="pt-ledger-3">
      <h1 className="font-display text-38 font-medium text-ink">Tell us what you need.</h1>
      <p className="mt-4 max-w-[65ch] text-18 text-slate">
        The first call is free. We&apos;ll ask a few questions about your situation and tell you
        honestly whether we&apos;re a fit before anything is scoped.
      </p>

      <div className="mt-ledger-2 grid grid-cols-1 gap-ledger-2 md:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-8">
          <DuotoneImage
            src="/images/services/individual-tax-preparation.jpg"
            alt=""
            sizes="(max-width: 768px) 100vw, 400px"
            className="aspect-[16/9]"
          />
          <div>
            <p className="text-14 text-slate">Phone</p>
            <a href={siteConfig.contact.phoneHref} className="text-18 text-ink underline-offset-4 hover:underline">
              {siteConfig.contact.phone}
            </a>
          </div>
          <div>
            <p className="text-14 text-slate">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-18 text-ink underline-offset-4 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div>
            <p className="text-14 text-slate">Office</p>
            <address className="text-18 not-italic text-ink">
              {siteConfig.contact.address.street}
              <br />
              {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
              {siteConfig.contact.address.zip}
            </address>
          </div>
          <div className="border border-rule p-6">
            <p className="text-14 text-slate">Map</p>
            <p className="mt-2 text-16 text-ink">
              {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
              {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
            </p>
          </div>
        </div>
      </div>
    </LedgerSection>
  );
}
