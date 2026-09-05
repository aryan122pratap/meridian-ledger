import type { Metadata } from "next";
import { LedgerSection } from "@/components/layout/LedgerSection";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { EntityQuiz } from "@/components/tools/EntityQuiz";

export const metadata: Metadata = {
  title: "Entity Quiz",
  description: "Answer 6 questions to see which business entity type is worth exploring for your situation.",
};

export default function EntityQuizPage() {
  return (
    <>
      <ImageBanner
        image="/images/services/entity-formation.jpg"
        eyebrow="Entity quiz"
        heading="Which entity fits you?"
        body={
          <p>
            Six questions, a starting point, not a filing. We&apos;ll confirm the real answer once
            we see your numbers.
          </p>
        }
      />
      <LedgerSection label="Entity quiz">
        <div className="max-w-2xl">
          <EntityQuiz />
        </div>
      </LedgerSection>
    </>
  );
}
