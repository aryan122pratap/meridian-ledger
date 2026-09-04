import type { Deadline } from "./types";

/**
 * 2026 filing deadlines for a calendar-year filer, extended through the
 * first deadlines of the following year that close out the 2026 tax year.
 * Dates already reflect the IRS weekend shift where it applies.
 */
export const deadlines: Deadline[] = [
  { date: "2026-01-15", label: "Q4 2025 estimated tax payment due", category: "individual", quarter: 1 },
  {
    date: "2026-02-02",
    label: "W-2 and 1099-NEC due to recipients and the IRS (shifted from Jan 31, a Saturday)",
    category: "business",
    quarter: 1,
  },
  {
    date: "2026-02-02",
    label: "Form 940 (FUTA) and Q4 2025 Form 941 due (shifted from Jan 31)",
    category: "payroll",
    quarter: 1,
  },
  {
    date: "2026-03-16",
    label: "Form 1120-S and Form 1065 due for calendar-year filers (shifted from Mar 15, a Sunday)",
    category: "business",
    quarter: 1,
  },
  {
    date: "2026-03-16",
    label: "Deadline to file Form 2553 for an S-corp election effective for 2026",
    category: "business",
    quarter: 1,
  },
  { date: "2026-04-15", label: "Individual return (Form 1040) due", category: "individual", quarter: 2 },
  { date: "2026-04-15", label: "Form 1120 due for calendar-year C-corporations", category: "business", quarter: 2 },
  { date: "2026-04-15", label: "Q1 2026 estimated tax payment due", category: "individual", quarter: 2 },
  { date: "2026-04-15", label: "Prior-year IRA and HSA contribution deadline", category: "individual", quarter: 2 },
  { date: "2026-05-15", label: "Texas Franchise Tax report due", category: "business", quarter: 2 },
  { date: "2026-06-15", label: "Q2 2026 estimated tax payment due", category: "individual", quarter: 2 },
  { date: "2026-07-31", label: "Q2 2026 Form 941 due", category: "payroll", quarter: 3 },
  { date: "2026-09-15", label: "Q3 2026 estimated tax payment due", category: "individual", quarter: 3 },
  { date: "2026-09-15", label: "Extended Form 1120-S and Form 1065 due", category: "business", quarter: 3 },
  { date: "2026-10-15", label: "Extended individual return (Form 1040) due", category: "individual", quarter: 4 },
  {
    date: "2026-10-15",
    label: "Extended Form 1120 due for calendar-year C-corporations",
    category: "business",
    quarter: 4,
  },
  {
    date: "2026-11-02",
    label: "Q3 2026 Form 941 due (shifted from Oct 31, a Saturday)",
    category: "payroll",
    quarter: 4,
  },
  { date: "2027-01-15", label: "Q4 2026 estimated tax payment due", category: "individual", quarter: 4 },
  {
    date: "2027-02-01",
    label: "W-2 and 1099-NEC due to recipients and the IRS for 2026 (shifted from Jan 31, a Sunday)",
    category: "business",
    quarter: 4,
  },
  {
    date: "2027-02-01",
    label: "Form 940 (FUTA) and Q4 2026 Form 941 due (shifted from Jan 31)",
    category: "payroll",
    quarter: 4,
  },
];
