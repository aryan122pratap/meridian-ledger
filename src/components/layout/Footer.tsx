import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-ledger-2 sm:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {siteConfig.nav.footer.map((group) => (
            <div key={group.heading}>
              <p className="text-14 font-medium text-paper/60">{group.heading}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-16 text-paper underline-offset-4 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-ledger-2 flex flex-col gap-6 border-t border-paper/15 pt-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-18 text-paper">{siteConfig.name}</p>
            <address className="mt-2 text-14 not-italic text-paper/70">
              {siteConfig.contact.address.street}
              <br />
              {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
              {siteConfig.contact.address.zip}
            </address>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-2 block text-14 text-paper/70 underline-offset-4 hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="text-right">
            <p className="text-14 tabular-nums text-paper/70">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="mt-1 text-14 text-paper/50">
              Photography via{" "}
              <a
                href="https://www.pexels.com"
                className="underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pexels
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
