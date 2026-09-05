"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Rule } from "@/components/ui/Rule";

type EntityType = "sole-prop" | "llc" | "s-corp" | "c-corp";

type Option = {
  label: string;
  scores: Partial<Record<EntityType, number>>;
};

type Question = {
  prompt: string;
  options: Option[];
};

const questions: Question[] = [
  {
    prompt: "Roughly what will your business net (profit after expenses) this year?",
    options: [
      { label: "Under $30,000", scores: { "sole-prop": 2 } },
      { label: "$30,000 to $60,000", scores: { "sole-prop": 1, llc: 1 } },
      { label: "$60,000 to $150,000", scores: { "s-corp": 2 } },
      { label: "Over $150,000", scores: { "s-corp": 1, "c-corp": 1 } },
    ],
  },
  {
    prompt: "How many owners does the business have?",
    options: [
      { label: "Just me", scores: { "sole-prop": 1, "s-corp": 1 } },
      { label: "2 or more, no outside investors planned", scores: { llc: 2, "s-corp": 1 } },
      { label: "2 or more, planning to raise outside investment", scores: { "c-corp": 2 } },
    ],
  },
  {
    prompt: "Are you planning to raise money from investors in the next 2 years?",
    options: [
      { label: "No", scores: { "sole-prop": 1, llc: 1, "s-corp": 1 } },
      { label: "Maybe", scores: { llc: 1, "c-corp": 1 } },
      { label: "Yes, definitely", scores: { "c-corp": 3 } },
    ],
  },
  {
    prompt: "How much do you value personal liability protection?",
    options: [
      { label: "Not a big concern", scores: { "sole-prop": 2 } },
      { label: "Somewhat important", scores: { llc: 1 } },
      { label: "Very important", scores: { llc: 2, "s-corp": 1 } },
    ],
  },
  {
    prompt: "Are you comfortable running payroll and filing an extra tax return if it saves real money?",
    options: [
      { label: "No, keep it simple", scores: { "sole-prop": 1, llc: 1 } },
      { label: "Yes, if the savings are worth it", scores: { "s-corp": 2 } },
    ],
  },
  {
    prompt: "Will the business reinvest most of its profit rather than pay it out to owners?",
    options: [
      { label: "No, I'll take most of it out personally", scores: { "sole-prop": 1, llc: 1, "s-corp": 1 } },
      {
        label: "Yes, we'll reinvest heavily and may take little or no salary for years",
        scores: { "c-corp": 2 },
      },
    ],
  },
];

const results: Record<EntityType, { name: string; reasoning: string }> = {
  "sole-prop": {
    name: "Sole proprietorship, or a simple single-member LLC",
    reasoning:
      "Your income level doesn't yet clear the point where the added cost of payroll and a separate tax return pays for itself, and simplicity is worth more to you right now than the tax mechanics an S-corp introduces. A single-member LLC adds liability protection on top of a sole proprietorship without changing how it's taxed.",
  },
  llc: {
    name: "LLC (taxed as a partnership if there's more than one owner)",
    reasoning:
      "Liability protection matters to you, but your income level or preference for simplicity means the added complexity of an S-corp election likely isn't worth it yet. This can always change as profit grows.",
  },
  "s-corp": {
    name: "LLC with an S-corp election",
    reasoning:
      "Your profit level is in the range where self-employment tax savings from a reasonable-salary structure typically outweigh the cost of running payroll and filing a separate return. The exact number depends on a real salary analysis, not this quiz.",
  },
  "c-corp": {
    name: "C-corporation",
    reasoning:
      "Outside investment is part of your plan, and most investors expect a C-corp structure. It's also a difficult conversion to make later from an LLC or S-corp without a taxable event, so it's worth deciding early if this is the direction you're headed.",
  },
};

export function EntityQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<EntityType, number>>>({});

  function answer(option: Option) {
    setScores((prev) => {
      const next = { ...prev };
      for (const [key, value] of Object.entries(option.scores) as [EntityType, number][]) {
        next[key] = (next[key] ?? 0) + value;
      }
      return next;
    });
    setStep((s) => s + 1);
  }

  function restart() {
    setStep(0);
    setScores({});
  }

  const finished = step >= questions.length;

  if (finished) {
    const winner =
      (Object.entries(scores) as [EntityType, number][]).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "llc";
    const result = results[winner];

    return (
      <div key="result" className="animate-fade-in flex flex-col gap-6">
        <p className="text-14 text-slate">Result</p>
        <h2 className="font-display text-28 font-medium text-ink">{result.name}</h2>
        <p className="max-w-[65ch] text-16 text-slate">{result.reasoning}</p>
        <Disclaimer>
          This is a starting point based on general patterns, not a recommendation for your
          specific situation. Entity choice depends on details this quiz doesn&apos;t capture.
          Talk to us before filing anything.
        </Disclaimer>
        <div className="flex flex-wrap gap-4">
          <Button href="/services/entity-formation" variant="primary">
            Talk through entity formation
          </Button>
          <Button variant="secondary" onClick={restart}>
            Start over
          </Button>
        </div>
      </div>
    );
  }

  const question = questions[step];

  return (
    <div key={step} className="animate-fade-in flex flex-col gap-6">
      <p className="text-14 tabular-nums text-slate">
        Question {step + 1} of {questions.length}
      </p>
      <h2 className="font-display text-22 font-medium text-ink">{question.prompt}</h2>
      <Rule />
      <div className="flex flex-col divide-y divide-rule">
        {question.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => answer(option)}
            className="py-4 text-left text-16 text-ink hover:bg-ink/5"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
