"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * A soft cross-fade between route changes. Next.js App Router re-renders the
 * new page before a child effect can run, so there's no "old" DOM left to
 * snapshot for a true View Transitions old/new crossfade without invasive
 * navigation interception (fragile to get right, easy to leave stuck
 * mid-transition). This fades the new page in instead — same soft-transition
 * feel, without that risk.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Starts visible so there's never a JS-dependent invisible flash on first
  // load (or if JS never runs at all) — only route *changes* fade.
  const [visible, setVisible] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.35s ease" }}>{children}</div>
  );
}
