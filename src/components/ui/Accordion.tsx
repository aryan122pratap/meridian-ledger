import { Minus, Plus } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={["divide-y divide-rule border-t border-b border-rule", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-left text-18 font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="shrink-0 text-ink">
              <Plus className="block size-5 group-open:hidden" aria-hidden="true" />
              <Minus className="hidden size-5 group-open:block" aria-hidden="true" />
            </span>
          </summary>
          <p className="mt-3 max-w-[72ch] text-16 text-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
