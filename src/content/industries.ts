import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "real-estate-and-short-term-rentals",
    image: "/images/industries/real-estate-and-short-term-rentals.jpg",
    name: "Real estate & short-term rentals",
    summary:
      "Depreciation, passive activity rules, and the real estate professional test decide whether your rental losses actually help you this year.",
    body:
      "Rental real estate runs on its own depreciation clock: residential property depreciates straight-line over 27.5 years, which is a long, flat deduction that rarely matches how the value of the underlying components actually declines. A cost segregation study breaks a property into its component parts, appliances, carpet, certain electrical and plumbing work, land improvements, and reclassifies them into 5, 7, or 15-year property instead of the full 27.5. Combined with bonus depreciation, that can turn a modest first-year deduction into a substantial one, front-loading tax benefit into the years right after a purchase or a major renovation instead of spreading it thin over nearly three decades.\n\nThe bigger issue for most owners isn't the depreciation itself, it's whether they can actually use it. Rental losses are passive by default under IRC Section 469, which means they can only offset other passive income, not your W-2 or business income, unless one of two exceptions applies. The $25,000 active participation allowance lets some losses through directly but phases out entirely between $100,000 and $150,000 of modified adjusted gross income, which rules it out for a lot of the owners who'd benefit most. The real estate professional test removes the limitation entirely, but it requires more than 750 hours a year in real property trades and more than half of your total working time, a bar that a W-2 employee with rental properties on the side almost never clears, and one the IRS scrutinizes closely when it's claimed.\n\nShort-term rentals run under different rules. If the average guest stay is seven days or less, the activity is generally treated as a trade or business rather than a passive rental, which means losses aren't subject to the same limitation as long as you materially participate in running it. That's a real planning opportunity, but it comes with a tradeoff: providing substantial services, cleaning between every stay, concierge-style guest services, can push the activity into active trade or business territory for self-employment tax purposes too, which cuts the other direction.\n\nWe also handle the Texas hotel occupancy tax that applies to short-term rentals on top of whatever the booking platform remits, 1031 exchanges for owners deferring gain on a sale into a replacement property, and the multi-state filings that come with owning property outside Texas.",
    taxIssues: [
      "Cost segregation studies to accelerate depreciation",
      "Passive activity loss limits (IRC §469) and the real estate professional test",
      "Short-term rental material participation and self-employment tax exposure",
      "1031 like-kind exchanges",
      "Hotel occupancy tax on short-term rentals",
    ],
    seoDescription:
      "Tax and accounting for real estate investors and short-term rental owners: cost segregation, passive loss rules, and 1031 exchanges.",
  },
  {
    slug: "medical-and-dental-practices",
    image: "/images/industries/medical-and-dental-practices.jpg",
    name: "Medical & dental practices",
    summary:
      "Between a professional entity, an associate buy-in, and equipment financed on ten-year notes, the tax return has more moving parts than the practice itself.",
    body:
      "A medical or dental practice usually runs as a professional entity, a PLLC or PA in Texas, with reasonable compensation for the owner-provider working through the same rules as any other S-corp: a defensible salary, with remaining profit distributed rather than run through payroll. Getting that number right matters more here than in most industries, because physician and dentist compensation data is well documented and easy for the IRS to benchmark against if a return gets a second look.\n\nRetirement planning carries outsized value for high-earning practice owners. Stacking a cash balance plan on top of a 401(k) can let a solo practitioner defer well over $100,000 combined in a single year depending on age, far beyond what a 401(k) alone allows, and it's one of the few tax moves available at this income level that shelters income rather than just deferring or reclassifying it.\n\nEquipment is a recurring decision: imaging equipment, dental chairs, and clinical technology are expensive enough that Section 179 and bonus depreciation genuinely change the after-tax cost of a purchase, and timing that purchase against a high-income year versus a slower one is worth planning rather than defaulting to whenever the equipment happens to fail.\n\nThe qualified business income deduction under Section 199A treats medicine and dentistry as specified service trades or businesses, which means the 20% deduction phases out entirely above a taxable income threshold that a lot of established practice owners clear without realizing it. For a physician well above that threshold, the QBI deduction can be worth nothing at all, which changes the math on other planning moves, like retirement contributions, that reduce taxable income and can pull a return back under the threshold.\n\nAssociate buy-ins and buy-outs, locum tenens income reported on a 1099 alongside W-2 practice income, accounts receivable timing, and malpractice insurance deductibility round out the areas that come up most often. Cash versus accrual accounting is its own decision here too, since a practice with significant accounts receivable can look very different depending on which method it uses.",
    taxIssues: [
      "Specified service trade or business (SSTB) QBI phase-out",
      "Cash balance and defined benefit retirement plan stacking for high earners",
      "Equipment depreciation (Section 179 and bonus) on clinical equipment",
      "Associate buy-in and buy-out structuring",
      "Locum tenens and 1099 income alongside W-2 practice income",
    ],
    seoDescription:
      "Tax and accounting for medical and dental practices: reasonable compensation, retirement plan design, and the QBI phase-out for specified service businesses.",
  },
  {
    slug: "restaurants-and-hospitality",
    image: "/images/industries/restaurants-and-hospitality.jpg",
    name: "Restaurants & hospitality",
    summary: "Tip income, thin margins, and a POS system generating a different number than your bank account every night.",
    body:
      "Restaurants operate on tighter margins than almost any other industry we work with, which makes accurate, current numbers matter more, not less. Food cost as a percentage of sales is the single most important number in the business, and it needs to be tracked against actual POS data rather than reconstructed at month-end, because by the time a margin problem shows up in a bank balance, it's usually been quietly happening for weeks.\n\nTip income creates real complexity on the compliance side. The FICA tip credit under Section 45B lets an employer claim an income tax credit for the employer share of Social Security and Medicare tax paid on tips that exceed what's needed to bring an employee up to minimum wage, and it's a credit a lot of restaurants qualify for and don't claim because nobody's tracking tips at the level of detail the credit requires. Larger food and beverage establishments also have Form 8027 reporting and allocated tip requirements when reported tips fall below a certain percentage of sales, which is a common trigger for IRS attention if it's not handled correctly.\n\nThe federal tip credit itself lets an employer pay a reduced cash wage, as low as $2.13 an hour federally, as long as tips bring the employee up to the full minimum wage; Texas follows the federal minimum, so this applies directly here, but it requires documentation showing tips actually closed the gap every pay period, not just on average.\n\nBuild-out and renovation costs get their own depreciation treatment as Qualified Improvement Property, generally a 15-year life and eligible for bonus depreciation, which matters a lot for a restaurant that just spent six figures on a build-out before opening. High employee turnover means payroll onboarding happens constantly rather than a few times a year, and cash handling controls, reconciling nightly deposits against POS reports, matter both for catching errors early and for having clean records if sales are ever questioned.\n\nFor multi-location operators, allocating shared costs, management salaries, a central kitchen, marketing, across locations accurately is what makes per-location profitability numbers actually mean something instead of masking one location subsidizing another.",
    taxIssues: [
      "FICA tip credit (Section 45B)",
      "Tip reporting and Form 8027 allocation",
      "Qualified Improvement Property depreciation for build-outs",
      "Food cost and COGS tracking against POS data",
      "High-turnover payroll and tipped minimum wage compliance",
    ],
    seoDescription:
      "Accounting and tax planning for restaurants and hospitality businesses: tip credits, food cost tracking, and build-out depreciation.",
  },
  {
    slug: "construction-and-trades",
    image: "/images/industries/construction-and-trades.jpg",
    name: "Construction & trades",
    summary: "A job that spans two tax years needs an accounting method that actually matches when the money moves.",
    body:
      "Construction is one of the few industries where the accounting method itself is a real decision with real tax consequences, not just a bookkeeping preference. Contracts expected to span more than one tax year generally fall under the percentage-of-completion method required by IRC Section 460 once a contractor's average annual gross receipts clear the small contractor exception, currently in the neighborhood of $30 million, well above most of the businesses we work with, which means many contractors can still use cash or completed-contract methods that better match when cash actually moves. Choosing correctly, and applying it consistently, is what keeps a growing contractor from waking up one year subject to a method they didn't know they'd graduated into.\n\nRetainage, the 5% to 10% often withheld by a general contractor or property owner until a job is substantially complete, creates its own timing problem: income can be recognized before that cash is actually collected, sometimes months later, which is a real cash flow issue if it's not planned for separately from operating cash.\n\nEquipment purchases, trucks, heavy machinery, tools, are a recurring Section 179 conversation, complicated by weight-based limits on vehicles that change how much of a truck purchase can be expensed immediately versus depreciated over time. Subcontractor relationships carry classification risk that construction gets audited on more than most industries: paying someone as a 1099 subcontractor when the actual working relationship looks like an employee's, set hours, provided tools, exclusive to one contractor, is a common and expensive mistake to unwind after the fact.\n\nJob costing is where bookkeeping and tax planning meet most directly in this industry. Aggregate profitability can look fine while individual jobs are quietly losing money, and the only way to catch that is tracking costs at the job level, not just the company level. Jobs that cross state lines create their own nexus questions too; physical presence on a jobsite can trigger a state tax filing obligation even without a permanent office there, which surprises contractors who assume nexus requires a fixed location. Clean, job-costed financials also matter directly for bonding and surety requirements, which look at the same numbers a lender would.",
    taxIssues: [
      "Percentage-of-completion vs. completed-contract accounting method (IRC §460)",
      "Retainage timing and cash flow",
      "Worker classification risk on subcontractors",
      "Job costing tied to bookkeeping",
      "Multi-state nexus triggered by jobsite presence",
    ],
    seoDescription:
      "Accounting for construction and trades businesses: job costing, percentage-of-completion accounting, and subcontractor classification risk.",
  },
  {
    slug: "ecommerce-and-saas",
    image: "/images/industries/ecommerce-and-saas.jpg",
    name: "E-commerce & SaaS",
    summary: "Nexus follows your customers, not your office address.",
    body:
      "An online business's tax footprint is defined by where its customers are, not where its office is. Economic nexus thresholds, generally $100,000 in sales to a state, sometimes paired with a transaction count, create a sales tax collection obligation the moment they're crossed, and for a fast-growing e-commerce or SaaS business, that can happen in a new state every few months without anyone noticing until a filing gap has already built up.\n\nSaaS taxability is its own maze: some states tax software as a service outright, some exempt it entirely, and some only tax it when bundled with anything tangible, so a nexus study for a software business has to answer the sales tax question state by state rather than assuming one rule applies everywhere.\n\nPayment processor reporting adds a reconciliation problem most owners don't expect. A 1099-K from Stripe, Shopify Payments, or PayPal reports gross processing volume, which includes sales tax collected and doesn't back out refunds, so it routinely overstates actual revenue by a meaningful margin. We've reconciled 1099-Ks reporting several hundred thousand dollars in gross volume against actual net revenue tens of thousands of dollars lower, purely from sales tax and refunds baked into the processor's number; left unreconciled, that gap can draw exactly the kind of automated attention a CP2000 notice represents.\n\nFor SaaS businesses specifically, Section 174 changed the economics of engineering payroll significantly. Research and development costs, which used to be immediately deductible, now have to be capitalized and amortized over 5 years for domestic work, 15 for foreign, which means a software company can show real taxable income even in a year it's burning cash on engineering salaries, a mismatch that catches a lot of growing SaaS companies off guard the first time it hits their return. The Section 41 R&D tax credit is a separate, valuable offset worth evaluating alongside this, since it directly reduces tax rather than just changing timing.\n\nDeferred revenue on annual subscriptions is treated differently for book and tax purposes, marketplace facilitator rules shift some but not all of the sales tax burden off your business depending on the channel, and businesses selling internationally have their own VAT and GST exposure to evaluate separately from the US state-by-state picture.",
    taxIssues: [
      "Multi-state economic nexus and SaaS taxability",
      "Section 174 R&D capitalization for engineering payroll",
      "1099-K reconciliation against actual revenue",
      "Deferred revenue treatment for annual subscriptions",
      "R&D tax credit (IRC §41) eligibility",
    ],
    seoDescription:
      "Tax and accounting for e-commerce and SaaS businesses: multi-state nexus, Section 174 R&D capitalization, and 1099-K reconciliation.",
  },
  {
    slug: "nonprofits",
    image: "/images/industries/nonprofits.jpg",
    name: "Nonprofits",
    summary: "Tax-exempt doesn't mean tax-return-exempt.",
    body:
      "Exempt status under Section 501(c)(3) removes income tax on activities related to your mission, not the filing requirement itself. Every exempt organization files some version of Form 990, the postcard-length 990-N for organizations under $50,000 in gross receipts, the 990-EZ for mid-sized organizations, or the full 990 above that, and the version that applies changes as the organization grows, which is worth checking every year rather than assuming last year's form still fits.\n\nUnrelated business income tax is the issue that surprises nonprofits most often. Revenue from an activity not substantially related to your exempt purpose, renting out space, running a gift shop beyond what a safe harbor allows, income from debt-financed property, is generally taxable even though the organization itself is exempt, and it requires its own Form 990-T once gross UBTI income clears $1,000. A nonprofit that starts a revenue-generating side activity without checking whether it counts as unrelated business income can end up with an unexpected tax bill and a filing obligation it didn't know existed.\n\nFunctional expense allocation, splitting costs between program services, management and general, and fundraising, gets scrutinized by donors and watchdog organizations like Charity Navigator as much as by the IRS, and it's disclosed directly on the 990 where anyone can see it. Getting that allocation right isn't just compliance, it's part of how the organization presents itself to the people deciding whether to fund it.\n\nRestricted versus unrestricted fund accounting has to be tracked correctly so donor-restricted gifts are actually used the way donors specified, and board governance and conflict-of-interest policies are questions the 990 itself asks directly, making them a documentation matter as much as a policy one.\n\nOrganizations soliciting donations across state lines often need charitable solicitation registration in each state where they're actively fundraising, a requirement that's separate from and in addition to the federal exempt status. And the penalty for letting filings lapse is severe: three consecutive years of non-filing triggers automatic revocation of exempt status, which has to be affirmatively reinstated, not just corrected going forward.",
    taxIssues: [
      "Form 990 filing tier based on gross receipts",
      "Unrelated business income tax (UBIT) and Form 990-T",
      "Functional expense allocation (program vs. admin vs. fundraising)",
      "Multi-state charitable solicitation registration",
      "Automatic exemption revocation after 3 years of non-filing",
    ],
    seoDescription: "Nonprofit tax and accounting: Form 990 preparation, unrelated business income tax, and functional expense allocation.",
  },
];
