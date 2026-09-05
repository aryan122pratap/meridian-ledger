"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Step = {
  number: string;
  label: string;
  duration: string;
  detail: string;
};

export function ProcessRail({ steps }: { steps: readonly Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fill = fillRef.current;
    if (!section || !fill) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fill.style.width = "100%";
      return;
    }

    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = section!.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh;
        const scrolled = vh - rect.top;
        const progress = Math.min(1, Math.max(0, scrolled / total));
        fill!.style.width = `${progress * 100}%`;
        frame = 0;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="relative mb-8 h-px bg-rule">
        <div ref={fillRef} className="absolute inset-y-0 left-0 bg-brass" style={{ width: "0%" }} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 80}>
            <div className="h-full border border-rule bg-paper-raised p-6">
              <span className="text-14 tabular-nums text-brass">{step.number}</span>
              <p className="mt-2 text-18 text-ink">{step.label}</p>
              <p className="mt-1 text-14 tabular-nums text-slate">{step.duration}</p>
              <p className="mt-3 text-16 text-slate">{step.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
