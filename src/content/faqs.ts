import type { FAQ } from "./types";

/**
 * General firm-level FAQs for the /faq page. Service-specific questions
 * live alongside each entry in services.ts instead of being duplicated here.
 */
export const faqs: FAQ[] = [
  {
    question: "Are you accepting new clients?",
    answer:
      "Yes. Most new engagements start with a short call to understand what you need and whether we're a good fit before anything is signed.",
  },
  {
    question: "Do you work with clients outside Texas?",
    answer:
      "Yes. Most of our work happens remotely through a secure client portal, video calls, and e-signature, regardless of where you're located. Being based in Austin doesn't limit who we work with.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "Flat, published starting prices for defined services, listed on each service page. Ongoing work like bookkeeping, payroll, and advisory is billed monthly. We don't bill by the hour for the services on our site, and every price we quote is a starting price that we confirm before work begins.",
  },
  {
    question: "How is my financial data kept secure?",
    answer:
      "Documents move through an encrypted client portal rather than email attachments, and we don't store sensitive documents locally longer than necessary to complete the engagement.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "The first call, where we scope what you need and whether it's a fit, is free. Work that involves reviewing your actual documents or preparing anything is billed once we've agreed on scope.",
  },
  {
    question: "What makes you different from a national tax prep chain or software?",
    answer:
      "Continuity and judgment. The same team handles your return year over year and knows your history, and we make the calls that software can't, whether a deduction is defensible, how to structure an entity, when a number on a notice is wrong.",
  },
  {
    question: "Are you a CPA firm or an enrolled agent practice?",
    answer:
      "Both. Our team includes licensed CPAs and an enrolled agent, and engagements are staffed based on what the work requires, not a fixed title.",
  },
  {
    question: "Can you catch me up on multiple years of unfiled returns?",
    answer:
      "Yes. We handle multi-year catch-up for both bookkeeping and unfiled returns, and we'll give you a clear-eyed estimate of total scope and cost before starting rather than pricing it year by year as surprises come up.",
  },
  {
    question: "What if I need something that isn't listed on your services page?",
    answer:
      "Reach out and describe what you need. Most requests fall inside one of our listed services even if the label doesn't match exactly, and if it genuinely doesn't, we'll tell you plainly rather than stretch an engagement to fit.",
  },
  {
    question: "How do I switch from my current accountant?",
    answer:
      "We'll request your prior returns and files directly from your previous preparer with your authorization, which is a routine request most firms handle without friction. You don't need to gather everything yourself first.",
  },
];
