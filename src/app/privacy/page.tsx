import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Meridian Ledger collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LedgerSection label="Privacy" className="pt-ledger-3">
      <h1 className="font-display text-38 font-medium text-ink">Privacy policy</h1>
      <p className="mt-2 text-14 text-slate">Last updated January 2026</p>
      <div className="mt-8 flex flex-col gap-8 text-16 text-slate">
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Information we collect</h2>
          <p className="mt-3 max-w-[70ch]">
            When you use our contact form, we collect the name, email, phone number, and message
            you provide. When you become a client, we collect the tax and financial documents
            necessary to prepare returns, maintain books, or run payroll, which may include Social
            Security numbers, bank account details, and income records. Our website itself does
            not use third-party advertising trackers.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">How we use it</h2>
          <p className="mt-3 max-w-[70ch]">
            Contact form submissions are used only to respond to your inquiry. Client documents
            are used solely to perform the engagement you&apos;ve hired us for, tax preparation,
            bookkeeping, payroll, or advisory work, and are never used for any purpose outside
            that engagement without your consent.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">How long we keep it</h2>
          <p className="mt-3 max-w-[70ch]">
            Client tax documents and prepared returns are retained for seven years, consistent
            with standard IRS recordkeeping guidance, and then securely destroyed. Contact form
            submissions from people who don&apos;t become clients are retained for no more than 12
            months.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Who we share it with</h2>
          <p className="mt-3 max-w-[70ch]">
            We don&apos;t sell client data or contact information to anyone. Documents may be
            shared with the IRS, state tax agencies, or a client&apos;s own attorney or financial
            advisor when the client directs us to, and with the software providers we use to
            prepare returns and run payroll, under their own confidentiality obligations.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Security</h2>
          <p className="mt-3 max-w-[70ch]">
            Client documents move through an encrypted client portal rather than email
            attachments. Access to client files is limited to the team members actually working
            on that engagement.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Your choices</h2>
          <p className="mt-3 max-w-[70ch]">
            You can ask us at any time what information we hold about you and request that
            non-client contact information be deleted. Client records subject to IRS retention
            requirements can&apos;t be deleted early, but we&apos;re happy to explain why.
          </p>
        </section>
        <section>
          <h2 className="font-display text-22 font-medium text-ink">Contact</h2>
          <p className="mt-3 max-w-[70ch]">
            Questions about this policy can be sent to{" "}
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
