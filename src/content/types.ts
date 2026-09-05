export type FAQ = {
  question: string;
  answer: string;
};

export type IncludedItem = {
  item: string;
  turnaround: string;
  startingPrice: number;
};

export type Service = {
  slug: string;
  image: string;
  code: string;
  name: string;
  summary: string;
  whatItIs: string;
  whoItsFor: string;
  included: IncludedItem[];
  costOfSkipping: string;
  faqs: FAQ[];
  seoDescription: string;
};

export type Industry = {
  slug: string;
  image: string;
  name: string;
  summary: string;
  body: string;
  taxIssues: string[];
  seoDescription: string;
};

export type Article = {
  slug: string;
  image: string;
  title: string;
  dek: string;
  publishedAt: string;
  body: string;
  seoDescription: string;
};

export type TeamMember = {
  slug: string;
  photo: string;
  name: string;
  role: string;
  bio: string;
};

export type DeadlineCategory = "individual" | "business" | "payroll";

export type Deadline = {
  date: string;
  label: string;
  category: DeadlineCategory;
  quarter: 1 | 2 | 3 | 4;
};
