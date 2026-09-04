export type NavItem = {
  label: string;
  href: string;
};

export type FooterNavGroup = {
  heading: string;
  links: NavItem[];
};

export const complianceDisclaimer =
  "This is general information, not tax advice, and does not create a client relationship.";

export const siteConfig = {
  name: "Meridian Ledger CPA",
  shortName: "Meridian Ledger",
  tagline: "Bookkeeping & tax, done properly.",
  description:
    "Meridian Ledger is a CPA firm in Austin, TX serving small-business owners and high-income individuals with bookkeeping, tax preparation, and advisory services.",
  url: "https://meridianledger.com",

  contact: {
    phone: "(512) 555-0148",
    phoneHref: "tel:+15125550148",
    email: "hello@meridianledger.com",
    // https://web3forms.com/ — free tier, no backend required.
    web3formsAccessKey: "319f0084-da38-4f58-b681-416ef3ac7bea",
    address: {
      street: "812 Congress Ave, Suite 400",
      city: "Austin",
      state: "TX",
      zip: "78701",
    },
  },

  booking: {
    label: "Book a consultation",
    href: "/contact",
  },

  nav: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
      { label: "Insights", href: "/insights" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ] as NavItem[],

    footer: [
      {
        heading: "Firm",
        links: [
          { label: "About", href: "/about" },
          { label: "Team", href: "/team" },
          { label: "Process", href: "/process" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        heading: "Work with us",
        links: [
          { label: "Services", href: "/services" },
          { label: "Industries", href: "/industries" },
          { label: "Pricing", href: "/pricing" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Tax calendar", href: "/tax-calendar" },
          { label: "Entity quiz", href: "/tools/entity-quiz" },
          { label: "Bookkeeping estimate", href: "/tools/bookkeeping-estimate" },
          { label: "Insights", href: "/insights" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ] as FooterNavGroup[],
  },

  social: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/meridian-ledger" }] as NavItem[],
};
