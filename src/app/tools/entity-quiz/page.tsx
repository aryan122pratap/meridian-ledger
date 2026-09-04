import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { EntityQuiz } from "@/components/tools/EntityQuiz";

export const metadata: Metadata = {
  title: "Entity Quiz",
  description: "Answer 6 questions to see which business entity type is worth exploring for your situation.",
};

export default function EntityQuizPage() {
  return (
    <LedgerSection label="Entity quiz" className="pt-ledger-3">
      <h1 className="font-display text-38 font-medium text-ink">Which entity fits you?</h1>
      <p className="mt-4 max-w-[65ch] text-18 text-slate">
        Six questions, a starting point, not a filing. We&apos;ll confirm the real answer once we
        see your numbers.
      </p>
      <div className="mt-ledger-2 max-w-2xl">
        <EntityQuiz />
      </div>
    </LedgerSection>
  );
}
