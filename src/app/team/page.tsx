import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { Rule } from "@/components/ui/Rule";
import { CTA } from "@/components/ui/CTA";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";
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
              <Reveal delay={Math.min(index, 4) * 60}>
                <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-start">
                  <DuotoneImage
                    src={member.photo}
                    alt=""
                    sizes="96px"
                    className="size-24 shrink-0 rounded-full"
                  />
                  <div>
                    <h2 className="font-display text-22 font-medium text-ink">{member.name}</h2>
                    <p className="mt-1 text-14 text-slate">{member.role}</p>
                    <p className="mt-3 max-w-[65ch] text-16 text-slate">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
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
