import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Rule } from "@/components/ui/Rule";
import { CTA } from "@/components/ui/CTA";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the CPAs, enrolled agent, and specialists at Meridian Ledger.",
};

export default function TeamPage() {
  return (
    <>
      <LedgerSection label="Team" className="pt-ledger-3">
        <h1 className="font-display text-38 font-medium text-ink">The people on your return.</h1>
        <div className="mt-8 flex flex-col">
          {team.map((member, index) => (
            <div key={member.slug}>
              <div className="py-6">
                <h2 className="font-display text-22 font-medium text-ink">{member.name}</h2>
                <p className="mt-1 text-14 text-slate">{member.role}</p>
                <p className="mt-3 max-w-[65ch] text-16 text-slate">{member.bio}</p>
              </div>
              {index < team.length - 1 ? <Rule /> : null}
            </div>
          ))}
        </div>
      </LedgerSection>
      <CTA
        heading="Talk to someone who reads the whole return."
        action={{ label: "Book a consultation", href: "/contact" }}
      />
    </>
  );
}
