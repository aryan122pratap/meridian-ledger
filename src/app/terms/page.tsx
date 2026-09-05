import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Meridian Ledger website and engagement of our services.",
};

const sections = [
  {
    heading: "Use of this website",
    body: `This website is provided for general information about ${siteConfig.name} and our services. Nothing on it constitutes tax, legal, or financial advice, and browsing this site does not create a client relationship between you and the firm.`,
  },
  {
    heading: "No advice without engagement",
    body: "Figures, examples, and worked calculations on this site, including on our Insights pages and interactive tools, are illustrative and based on general patterns. They are not a substitute for advice based on your actual documents and circumstances, and shouldn't be relied on to make a filing or financial decision without confirming the specifics with us directly.",
  },
  {
    heading: "Client relationship",
    body: "A client relationship begins only when both parties sign an engagement letter defining the scope of work. Submitting the contact form or using an interactive tool on this site does not, by itself, engage us to perform any service.",
  },
  {
    heading: "Accuracy",
    body: "We make a reasonable effort to keep figures like filing deadlines and pricing current, but tax law and deadlines change, and you should confirm anything time-sensitive with us directly rather than relying solely on this site.",
  },
  {
    heading: "Intellectual property",
    body: `The content, design, and tools on this site belong to ${siteConfig.name} and may not be copied or republished without permission.`,
  },
  {
    heading: "Limitation of liability",
    body: `${siteConfig.name} is not liable for decisions made based solely on general information published on this website. Our liability for services actually engaged is governed separately by the terms of your signed engagement letter.`,
  },
] as const;

export default function TermsPage() {
  return (
    <>
      <ImageBanner
        image="/images/pages/terms.jpg"
        eyebrow="Terms"
        heading="Terms of service"
        body={<p>Last updated January 2026</p>}
      />

      {sections.map((section, index) => (
        <LedgerSection key={section.heading} label={section.heading} tone={index % 2 === 0 ? "paper" : "raised"}>
          <Reveal>
            <p className="max-w-[70ch] text-16 text-slate">{section.body}</p>
          </Reveal>
        </LedgerSection>
      ))}

      <LedgerSection label="Contact" tone={sections.length % 2 === 0 ? "paper" : "raised"} className="border-b-0">
        <p className="max-w-[70ch] text-16 text-slate">
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline underline-offset-4">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </LedgerSection>
    </>
  );
}
