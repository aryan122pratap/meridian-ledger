"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Shifts the element vertically at a fraction of scroll speed while it's in
 * (or near) the viewport. The scroll listener is only attached while the
 * element is actually visible, so idle cost off-screen is zero.
 */
export function useParallax<T extends HTMLElement>(ref: RefObject<T | null>, speed = 0.08, scale = 1) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let attached = false;

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
        const translate = (-centerOffset * speed).toFixed(1);
        el!.style.transform = `scale(${scale}) translateY(${translate}px)`;
        frame = 0;
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !attached) {
          attached = true;
          window.addEventListener("scroll", onScroll, { passive: true });
          onScroll();
        } else if (!entry.isIntersecting && attached) {
          attached = false;
          window.removeEventListener("scroll", onScroll);
        }
      },
      { rootMargin: "20% 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref, speed, scale]);
}
