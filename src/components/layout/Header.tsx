"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur transition-[padding] duration-200">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 sm:px-12 ${
          scrolled ? "py-2.5" : "py-4"
        } transition-[padding] duration-200`}
      >
        <Link href="/" className="font-display text-18 font-medium text-ink">
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-16 text-ink underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 text-14 text-slate hover:text-ink lg:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <Button href={siteConfig.booking.href} variant="primary" className="px-5 py-2 text-14">
            {siteConfig.booking.label}
          </Button>
        </div>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-rule bg-paper px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {siteConfig.nav.primary.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-18 text-ink" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 text-16 text-ink">
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <Button
                href={siteConfig.booking.href}
                variant="primary"
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              >
                {siteConfig.booking.label}
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
