import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Meridian Ledger collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "Information we collect",
    body: "When you use our contact form, we collect the name, email, phone number, and message you provide. When you become a client, we collect the tax and financial documents necessary to prepare returns, maintain books, or run payroll, which may include Social Security numbers, bank account details, and income records. Our website itself does not use third-party advertising trackers.",
  },
  {
    heading: "How we use it",
    body: "Contact form submissions are used only to respond to your inquiry. Client documents are used solely to perform the engagement you've hired us for, tax preparation, bookkeeping, payroll, or advisory work, and are never used for any purpose outside that engagement without your consent.",
  },
  {
    heading: "How long we keep it",
    body: "Client tax documents and prepared returns are retained for seven years, consistent with standard IRS recordkeeping guidance, and then securely destroyed. Contact form submissions from people who don't become clients are retained for no more than 12 months.",
  },
  {
    heading: "Who we share it with",
    body: "We don't sell client data or contact information to anyone. Documents may be shared with the IRS, state tax agencies, or a client's own attorney or financial advisor when the client directs us to, and with the software providers we use to prepare returns and run payroll, under their own confidentiality obligations.",
  },
  {
    heading: "Security",
    body: "Client documents move through an encrypted client portal rather than email attachments. Access to client files is limited to the team members actually working on that engagement.",
  },
  {
    heading: "Your choices",
    body: "You can ask us at any time what information we hold about you and request that non-client contact information be deleted. Client records subject to IRS retention requirements can't be deleted early, but we're happy to explain why.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <ImageBanner
        image="/images/pages/privacy.jpg"
        eyebrow="Privacy"
        heading="Privacy policy"
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
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline underline-offset-4">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </LedgerSection>
    </>
  );
}
