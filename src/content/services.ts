import type { Service } from "./types";

/**
 * whatItIs and costOfSkipping use "\n\n" to separate paragraphs; the service
 * page template splits on that when rendering.
 *
 * DRAFT: 2 of 10 entries, pending review before the remaining 8 are written.
 */
export const services: Service[] = [
  {
    slug: "individual-tax-preparation",
    code: "5010",
    name: "Individual tax preparation",
    summary: "Your Form 1040, reviewed by someone who reads it before they sign it.",
    whatItIs:
      "Individual tax preparation covers the federal and state returns for W-2 employees, retirees, and anyone whose income has grown past the point where a $40 software product can be trusted to get it right. That threshold arrives faster than most people expect: a rental property, a K-1 from a partnership, a year of significant stock sales, or a side business run through a single-member LLC all push a return into territory where software asks the right questions but can't tell whether you answered them correctly.\n\nWe start with your prior-year return, not a blank intake form. Comparing this year against last year is usually how we catch a missing 1099, a dropped state filing, or a carryover that never got carried forward. From there we collect documents through a secure portal, prepare the return, and walk you through it on a short call before anything gets filed, not after. You'll see the actual numbers: what you owe or what's coming back, and why.\n\nReturns we prepare regularly include multi-state filings for people who moved or work remotely for an out-of-state employer, K-1 income from investments or a family business, rental property with depreciation schedules that need to carry forward correctly year after year, equity compensation (RSUs, ISOs, ESPP) where the cost basis on your 1099-B is usually wrong and needs to be corrected before we file, and backdoor Roth conversions, which require Form 8606 to be filed correctly or the IRS has no way of knowing part of that conversion isn't taxable.\n\nEvery return is e-filed once you approve it, and we keep a signed copy along with your source documents for seven years, longer than the IRS's own audit window for most situations.",
    whoItsFor:
      "This is built for W-2 employees and retirees whose returns have picked up a complication: a rental property, a K-1, a stock sale that isn't just index fund rebalancing, or a spouse who started freelancing. It's also for small business owners who want their personal return prepared by the same firm that does their business return, so the two are never in conflict about a home office deduction or a vehicle expense claimed twice. If your only income is a single W-2 and you take the standard deduction, a paid preparer is probably overkill. Once a second income source shows up, that stops being true.",
    included: [
      { item: "Federal return + one state (Form 1040)", turnaround: "10 business days from complete documents", startingPrice: 450 },
      { item: "Each additional state return", turnaround: "Added to primary return", startingPrice: 125 },
      { item: "Rental property or K-1 schedule (each)", turnaround: "Included with primary return", startingPrice: 150 },
      { item: "Prior-year amended return (Form 1040-X)", turnaround: "3 weeks", startingPrice: 350 },
    ],
    costOfSkipping:
      "The cost of a bad individual return rarely shows up the year you file it. It shows up two years later as a mismatch notice, or three years later when you finally amend a rental property that never had depreciation started on it. We picked up a client last year whose prior preparer had left a rental placed in service with no depreciation schedule at all for two prior years; amending both returns recovered just under $9,000 in deductions the client had already earned but never claimed.\n\nSoftware has the opposite failure mode: it will let you e-file a technically complete return that's wrong in a way it can't detect, like reporting the full proceeds from a stock sale instead of the gain, or missing that a backdoor Roth conversion needed Form 8606 to avoid being taxed twice. Those mistakes are legal to make and expensive to leave uncorrected.",
    faqs: [
      {
        question: "Can't I just use tax software?",
        answer:
          "For a single W-2 with the standard deduction, software works fine. Once you have a K-1, a rental property, multi-state income, or equity compensation, the software will still let you file, but it can't tell you whether your cost basis is right or whether a depreciation schedule was set up correctly. Those are judgment calls, not data entry.",
      },
      {
        question: "What if a K-1 arrives after the April deadline?",
        answer:
          "This happens most years for anyone invested in a partnership. We file Form 4868 for an automatic six-month extension, which extends your time to file, not your time to pay. We'll estimate what you owe from your other documents so the extension doesn't create an underpayment penalty.",
      },
      {
        question: "Do you handle stock sales and cryptocurrency?",
        answer:
          "Yes. We track cost basis, watch for wash sales on stock sold at a loss and repurchased within 30 days, and reconcile crypto exchange reports, which are frequently incomplete or wrong about your actual basis.",
      },
      {
        question: "What do I need to send you?",
        answer:
          "Your prior-year return if we didn't prepare it, all W-2s and 1099s, K-1s, a mortgage interest statement and property tax bill if you itemize, and records for any stock, crypto, or rental activity. We'll send a checklist specific to your return once we see last year's.",
      },
    ],
    seoDescription:
      "Individual tax preparation (Form 1040) for W-2 employees, K-1 income, rental property, and equity compensation. Federal and multi-state returns from $450.",
  },
  {
    slug: "tax-planning",
    code: "5030",
    name: "Tax planning & projections",
    summary: "Most owners overpay because nobody looks at the return until March.",
    whatItIs:
      "Tax planning is the work that happens before your return is due, while there's still a way to change the outcome. Preparation reports what already happened; planning decides what happens next. For a profitable LLC or S-corp, that distinction is worth real money almost every year.\n\nWe start with an entity review: is an S-corp election still the right call, and if you've already made one, is your reasonable salary defensible if the IRS ever asks? The IRS requires S-corp owners who work in the business to pay themselves a reasonable W-2 salary before taking the rest as distributions, which aren't subject to self-employment tax. Set that salary too low and you're exposed in an audit. Set it too high, which happens more often, and you're paying payroll tax on money that didn't need to be wages at all.\n\nFrom there we build a projection using your actual bookkeeping data, not a rough estimate from memory. That projection gets updated each quarter as real numbers come in, so your estimated payments track what you'll actually owe instead of what a formula assumed in January. We look at retirement plan contributions (SEP-IRA, Solo 401(k), or a cash balance plan for higher earners), the Section 199A qualified business income deduction, and whether accelerating an equipment purchase into this year through Section 179 or bonus depreciation actually helps, since it doesn't always.\n\nThe year-end call happens in early December, not after New Year's, because almost every move available to you, retirement contributions aside, has to happen before December 31. A plan finished in January is a postmortem, not a plan.",
    whoItsFor:
      "This is for owners of profitable LLCs and S-corps, generally net profit above roughly $80,000 to $100,000, where the tax bill is large enough that entity structure, salary levels, and timing decisions produce a meaningfully different result. If your business nets $15,000 a year on the side, quarterly projections and a formal entity review usually cost more than they save; a solid tax preparer checking in once a year is enough. Once the business is profitable enough that you're writing four-figure estimated payments each quarter and wondering if your S-corp salary is still right, this is where that gets answered with a number instead of a guess.",
    included: [
      { item: "Entity structure review", turnaround: "2 weeks", startingPrice: 900 },
      { item: "Quarterly tax projections", turnaround: "Ongoing, per quarter", startingPrice: 350 },
      { item: "Year-end planning call", turnaround: "1 week", startingPrice: 400 },
    ],
    costOfSkipping:
      "An S-corp owner who nets $180,000 and never revisits their reasonable salary is a common case. We regularly see the entire profit run through payroll instead of a defensible salary-and-distribution split, say $150,000 in W-2 wages when $95,000 would hold up if questioned. That extra $55,000 in wages costs roughly $8,400 in payroll tax, split between the employee and employer share of Social Security and Medicare, that a distribution would not have owed at all.\n\nSkipping quarterly projections has a quieter cost: the IRS charges an underpayment penalty, currently calculated at the federal short-term rate plus 3%, on any quarter where you paid less than the required safe harbor amount. Owners who wait until April to find out what they owe usually discover it after the quarters that would have let them fix it are already gone.",
    faqs: [
      {
        question: "Isn't this only worth it for larger businesses?",
        answer:
          "The dollar impact scales with profit, but the mechanics apply the moment you're an S-corp or a profitable LLC. A business netting $90,000 still has a reasonable-salary decision to get right and quarterly payments to calculate; the review is just smaller.",
      },
      {
        question: "How is this different from tax preparation?",
        answer:
          "Preparation happens after the year closes and reports what already occurred. Planning happens during the year, while decisions about salary, retirement contributions, and purchase timing can still change the number on next April's return.",
      },
      {
        question: "When should I start?",
        answer:
          "Ideally at the start of the year or right after your S-corp election takes effect. Starting in Q1 or Q2 leaves three or four quarters to actually use the plan. Starting in November leaves one.",
      },
      {
        question: "What if I'm not sure my entity type is right?",
        answer:
          "That's exactly what the entity review answers. If an S-corp election makes sense, it generally needs to be filed on Form 2553 within two months and fifteen days of the start of the tax year it should apply to, or by March 15 for an election to apply to the current calendar year, so this is worth checking early rather than after the deadline passes.",
      },
    ],
    seoDescription:
      "Tax planning and quarterly projections for profitable S-corps and LLCs: entity review, reasonable salary, retirement strategy. Plans from $900.",
  },
  {
    slug: "business-tax-returns",
    code: "5020",
    name: "Business tax returns",
    summary: "The business return that matches your bookkeeping, not fights it.",
    whatItIs:
      "Business tax returns cover Form 1120-S for S-corporations, Form 1065 for partnerships and multi-member LLCs, and Form 1120 for C-corporations, along with the Schedule K-1s that flow each owner's share of income to their personal return. The return isn't a standalone document; it has to reconcile against your books, and the gap between what your books show and what the tax code allows is where most of the actual work happens.\n\nThat gap comes from book-to-tax adjustments: meals are only 50% deductible even though the full amount left your bank account, depreciation on the tax return often runs on a different schedule than the depreciation in your accounting software, and certain accrued expenses aren't deductible until they're actually paid. When we also handle your monthly bookkeeping, these adjustments are tracked as they happen instead of reconstructed in March. When your books come from somewhere else, we reconcile them against the return before anything gets filed, not after.\n\nWe prepare K-1s for every owner and get them out early enough that they don't hold up anyone's personal return, file the Texas Franchise Tax report alongside the federal return since almost every Texas entity owes one even when no tax is actually due, and file a six-month extension through Form 7004 when books aren't ready by the deadline, which happens and is not a problem as long as the extension is filed on time.",
    whoItsFor:
      "This is for any LLC taxed as a partnership or S-corporation, any C-corporation, and any multi-member business with an EIN. If you also use our monthly bookkeeping service, your business return is built from books we already know are accurate. If your books come from elsewhere, whether a bookkeeper, an in-house team, or your own spreadsheet, we still need clean, reconciled records before we can prepare an accurate return; we're not a substitute for bookkeeping, and a return built on unreconciled books usually costs more to prepare and carries more risk.",
    included: [
      { item: "Form 1120-S or 1065, plus K-1s for up to 3 owners", turnaround: "3 weeks from complete books", startingPrice: 900 },
      { item: "Additional owner K-1 (each)", turnaround: "Included with primary return", startingPrice: 75 },
      { item: "Texas Franchise Tax report", turnaround: "1 week", startingPrice: 250 },
      { item: "Form 1120 for C-corporations", turnaround: "3 weeks from complete books", startingPrice: 1100 },
    ],
    costOfSkipping:
      "Late-filed S-corp and partnership returns carry a penalty of $220 per month, per owner, for up to 12 months, and it applies whether or not the business owes any tax. A three-member LLC that files four months late owes $2,640 in penalties alone: $220 times three owners times four months, calculated before a single dollar of actual tax liability. Extensions prevent this entirely and take a few minutes to file; the penalty exists specifically for businesses that neither filed nor extended.\n\nThe other cost is downstream: a K-1 that arrives in June instead of March forces every owner to extend their own personal return, and if any of them had an unexpected tax bill, they find out about it months later than they should have, with less time to plan for it.",
    faqs: [
      {
        question: "What's the deadline for an S-corp or partnership return?",
        answer:
          "March 15 for calendar-year entities, or September 15 with a timely filed six-month extension on Form 7004. C-corporations run on the standard April 15 deadline, extending to October 15.",
      },
      {
        question: "Do I need a separate business return if I have an LLC?",
        answer:
          "It depends on your election. A single-member LLC is disregarded by default and reports on Schedule C of your personal return. A multi-member LLC defaults to partnership taxation and files Form 1065. Either can elect S-corp or C-corp taxation instead, which changes which return applies.",
      },
      {
        question: "What if our books aren't ready by the deadline?",
        answer:
          "We file an extension, which gives you until September 15 (or October 15 for a C-corp) without a late-filing penalty. It doesn't extend the deadline to pay any tax owed, so we'll still estimate that number from what we have.",
      },
      {
        question: "Do you prepare K-1s for each owner?",
        answer:
          "Yes, that's included. We send them directly to each owner along with anything they need to hand to whoever prepares their personal return, including us if that's also part of your engagement.",
      },
    ],
    seoDescription:
      "Business tax return preparation: Form 1120-S, 1065, and 1120, K-1s for every owner, and Texas Franchise Tax filing. Returns from $900.",
  },
  {
    slug: "bookkeeping",
    code: "5040",
    name: "Monthly bookkeeping",
    summary: "Books closed by the 10th, every month, so tax time isn't a surprise.",
    whatItIs:
      "Monthly bookkeeping means your bank and credit card accounts get reconciled, every transaction gets categorized against a chart of accounts built for your actual business, and you get a profit and loss statement and balance sheet by the 10th of the following month, not scrambled together the week before a tax deadline.\n\nWe work in QuickBooks Online, set up a chart of accounts that matches how your business actually operates rather than a generic template, and decide with you whether cash or accrual basis makes sense given your revenue and whether you carry inventory. Each month we reconcile every account down to the bank statement, categorize transactions (the biggest source of a bad tax return is expenses sitting in an uncategorized bucket that nobody ever goes back to), and flag anything that looks off, like a payment that hit twice or a subscription that quietly doubled in price.\n\nWe deliver financials with a short summary, not just a spreadsheet, and we're available for a monthly call if you want to walk through the numbers. When tax season arrives, your preparer, us or anyone else, is working from books that are already done instead of reconstructing a year from bank statements in March.",
    whoItsFor:
      "This is for business owners who are either doing their own books in a spreadsheet and falling behind, or who have a bookkeeper who reconciles transactions but doesn't connect the books to tax planning or year-end strategy. If you're generating fewer than a hundred transactions a month and comfortable in QuickBooks yourself, you may not need this. Once bank feeds start piling up uncategorized, or you can't say what your margin was last month without checking with your bookkeeper first, that's the point where monthly bookkeeping starts paying for itself.",
    included: [
      { item: "Monthly reconciliation and categorization (up to 2 accounts)", turnaround: "Delivered by the 10th of the following month", startingPrice: 300 },
      { item: "Additional bank or credit account", turnaround: "Included in the monthly cycle", startingPrice: 40 },
      { item: "Bookkeeping cleanup or catch-up, per month behind", turnaround: "2 to 4 weeks depending on volume", startingPrice: 150 },
      { item: "Annual Form 1099-NEC preparation for contractors (each)", turnaround: "By January 31", startingPrice: 25 },
    ],
    costOfSkipping:
      "A year of unreconciled books doesn't just cost the cleanup invoice. We've picked up clients whose 'ask my accountant' bucket in QuickBooks held tens of thousands of dollars in uncategorized transactions, and going through them by hand turned up thousands in legitimate deductions, software subscriptions, mileage, a defensible home office percentage, that would have simply been left off the return because nobody had looked closely enough to find them.\n\nThere's a quieter cost too: without a monthly P&L, margin erosion is invisible until it's large. We've seen a business's gross margin slide eleven points over eight months because a vendor's cost increase never got priced through, unnoticed because nobody was looking at a monthly statement that would have shown it in month one instead of month eight.",
    faqs: [
      {
        question: "What software do you use?",
        answer:
          "QuickBooks Online. We set up your chart of accounts from scratch or clean up an existing one so it actually reflects how your business makes money.",
      },
      {
        question: "I'm a year behind on my books. Can you fix that?",
        answer:
          "Yes, that's the catch-up service. We reconstruct each month from bank and card statements, reconcile it, and get you current before your next filing deadline.",
      },
      {
        question: "Cash or accrual basis?",
        answer:
          "Most service businesses under a few million in revenue do fine on cash basis, which is simpler and matches your bank balance. Businesses carrying inventory or with more complex revenue timing often need accrual, or a cash-method exception, we'll tell you which applies once we see your numbers.",
      },
      {
        question: "Do you handle payroll too?",
        answer:
          "Payroll is a separate service so it can run on its own schedule, but we coordinate the two closely, especially for S-corp owners whose salary needs to match what tax planning determined is reasonable.",
      },
    ],
    seoDescription:
      "Monthly bookkeeping in QuickBooks Online: reconciliation, categorization, and financial statements delivered by the 10th. From $300/month.",
  },
  {
    slug: "payroll",
    code: "5050",
    name: "Payroll services",
    summary: "Payroll run on time, tax deposits made on time, W-2s that match your books.",
    whatItIs:
      "Payroll covers running actual pay cycles, weekly, biweekly, or semimonthly, calculating federal and state withholding, depositing payroll taxes on the schedule the IRS assigns your business based on your lookback period, and filing the returns that go with it: quarterly Form 941, annual Form 940 for federal unemployment, state unemployment filings, and year-end W-2 and W-3 processing.\n\nMost of the risk in payroll isn't the paycheck itself, it's the deposit schedule. Businesses are either monthly or semiweekly depositors depending on total payroll tax liability in a lookback period the IRS sets automatically, and the penalty for missing a deposit starts at 2% and climbs to 15% the longer it's outstanding. We track your deposit schedule and handle the deposits directly so this isn't something you have to calculate on top of running the business.\n\nFor S-corp owners, payroll is also where the reasonable salary decision from tax planning actually gets executed. We set up the owner's salary at the number determined during entity review, run it through the same payroll cycle as any other employee, and adjust it if a mid-year projection shows the original number needs to move.\n\nWe also handle new hire reporting to the state, direct deposit setup, and multi-state payroll for businesses with employees working in more than one state, which triggers its own registration and withholding requirements in each state involved.",
    whoItsFor:
      "This is for any business with W-2 employees, including S-corp owners who are required to pay themselves a salary rather than taking everything as a distribution. If your workforce is entirely 1099 contractors, you don't need payroll, you need contractor payments tracked and 1099-NEC forms issued at year-end, which is handled through the bookkeeping service instead.",
    included: [
      { item: "Payroll processing (up to 5 employees), biweekly, per month", turnaround: "Processed 2 business days before each pay date", startingPrice: 150 },
      { item: "Additional employee, per month", turnaround: "Included in each run", startingPrice: 10 },
      { item: "Quarterly Form 941 and state unemployment filings", turnaround: "Filed by the statutory deadline", startingPrice: 75 },
      { item: "Year-end W-2 and W-3 processing (per employee)", turnaround: "Delivered by January 31", startingPrice: 15 },
    ],
    costOfSkipping:
      "Payroll tax deposit penalties are tiered and get expensive fast: 2% if you're one to five days late, 5% at six to fifteen days, 10% past fifteen days, and 15% if the IRS has sent a notice and ten days have passed without payment. A business with an $8,000 biweekly deposit that runs 20 days late owes an $800 penalty on top of the tax itself, and the business owner can be held personally liable for unpaid payroll tax as a trust fund recovery matter, separate from any liability protection the entity otherwise provides.\n\nMisclassifying an employee as a 1099 contractor to avoid payroll altogether carries its own exposure: back payroll taxes, penalties, and interest, calculated from when the misclassification started, not when it's discovered.",
    faqs: [
      {
        question: "How often do payroll tax deposits need to be made?",
        answer:
          "Either monthly or semiweekly, determined by the IRS based on your total payroll tax liability in a prior lookback period. New businesses generally start as monthly depositors. We track which schedule applies and handle the deposits on it.",
      },
      {
        question: "Can I pay myself as an S-corp owner through this?",
        answer:
          "Yes. Your salary is set based on the reasonable compensation figure from tax planning and run through the same payroll cycle as any other employee, which keeps your W-2 and your K-1 distributions consistent with what the return will show.",
      },
      {
        question: "What if I've been treating an employee as a 1099 contractor?",
        answer:
          "We'll walk through the actual working relationship against the IRS's classification factors, behavioral control, financial control, and the nature of the relationship, and if reclassification is needed, we can help file Form SS-8 or use the Voluntary Classification Settlement Program to limit back exposure.",
      },
      {
        question: "Do you handle multi-state payroll?",
        answer:
          "Yes. Employees working in a state where you're not yet registered trigger withholding and unemployment insurance obligations in that state, which we set up as part of onboarding that employee.",
      },
    ],
    seoDescription:
      "Payroll processing, tax deposits, and quarterly filings for businesses with W-2 employees, including S-corp owner payroll. From $150/month.",
  },
  {
    slug: "cfo-advisory",
    code: "5060",
    name: "Outsourced CFO & advisory",
    summary: "The finance conversations a growing business needs, without a full-time hire.",
    whatItIs:
      "Outsourced CFO and advisory work sits above bookkeeping and beside tax planning. Bookkeeping records what already happened. Tax planning minimizes what you owe. This is where we help you decide what to do next: whether you can afford a new hire, whether it's time to raise prices, whether the business can absorb a slow quarter without a line of credit, and what a lender or investor is actually going to ask to see.\n\nEach month we build a reporting package from your actual financials: a P&L and balance sheet review, a 13-week rolling cash flow forecast, and the KPIs that matter for your business specifically, gross margin trend, customer acquisition cost, revenue per employee, runway if you're spending down capital rather than generating it. We walk through it together on a monthly call, and the conversation is about decisions, not just numbers on a page.\n\nFor businesses with a board or outside investors, we prepare board-ready reporting packages ahead of meetings and can join the meeting to answer finance questions directly. For businesses approaching a bank loan or a fundraise, we build the financial model and historicals a lender or investor will actually ask for, in the format they expect, instead of a scramble the week before a term sheet arrives.",
    whoItsFor:
      "This is built for businesses generally above $1 million in revenue, or earlier if there's outside investment involved, where decisions have gotten large enough that the owner is making six and seven figure calls without a finance person in the room. If your business is under roughly $500,000 in revenue and you still have full visibility into the numbers yourself, this is probably more structure than you need yet; a strong monthly bookkeeping relationship and an annual planning conversation covers it.",
    included: [
      { item: "Monthly finance review meeting and reporting package", turnaround: "Delivered 5 business days after month close", startingPrice: 1200 },
      { item: "13-week cash flow forecast, updated monthly", turnaround: "Delivered with the monthly package", startingPrice: 400 },
      { item: "Annual budget build", turnaround: "3 weeks", startingPrice: 1500 },
      { item: "Board or investor reporting package, per meeting", turnaround: "1 week before the meeting", startingPrice: 600 },
    ],
    costOfSkipping:
      "We started working with a services business that had just booked a record revenue quarter and felt, reasonably, like things were going well. What the P&L didn't show was that two large clients were on 60-day payment terms while vendors were being paid net-15. On paper the business was profitable every month. In cash, it was running out of room, and nobody had noticed because nobody was tracking the gap between when revenue was booked and when it actually arrived. A 13-week cash flow forecast would have surfaced the shortfall six weeks before it became a payroll problem instead of the week it did.\n\nThat's the pattern with cash flow specifically: it's rarely a profitability problem, it's a timing problem, and timing problems are only visible if something is actually forecasting them.",
    faqs: [
      {
        question: "How is this different from bookkeeping?",
        answer:
          "Bookkeeping records what happened last month. This uses those numbers to make forward decisions, hiring, pricing, financing, that bookkeeping alone doesn't answer.",
      },
      {
        question: "Do I need this if I already have a bookkeeper and a CPA?",
        answer:
          "It complements both. It sits above bookkeeping and beside tax planning, focused on operating decisions rather than compliance, and we coordinate directly with whoever handles either of those for you.",
      },
      {
        question: "Can you help with a fundraise or a bank loan?",
        answer:
          "Yes. We build board-ready financials and can support the underlying model a lender or investor will want to see, and we can join calls with them directly if that's useful.",
      },
      {
        question: "How much time does this take from my team?",
        answer:
          "Usually one meeting a month, around an hour. We connect directly to your accounting system for the data we need rather than asking you to compile it.",
      },
    ],
    seoDescription:
      "Outsourced CFO services: monthly reporting, 13-week cash flow forecasting, budgeting, and board-ready financials. Engagements from $1,200/month.",
  },
  {
    slug: "irs-representation",
    code: "5070",
    name: "IRS notice & audit representation",
    summary: "A letter from the IRS is not a diagnosis. It's a starting point for a conversation.",
    whatItIs:
      "Most IRS notices aren't audits. A CP2000 notice, the most common one small business owners and individuals receive, is generated automatically when a number on your return doesn't match a 1099 or W-2 the IRS has on file, and it's frequently wrong or incomplete because the IRS's system doesn't have information like your cost basis on a stock sale. A CP14 is simply a balance due notice. An actual audit, correspondence, office, or field, is a different and less common thing, and each is handled differently.\n\nWe start by filing Form 2848, Power of Attorney, which lets us speak with the IRS directly on your behalf so you're not the one on the phone. From there we pull the notice apart: is it right, partially right, or wrong, and what documentation actually answers it. Most CP2000 responses come down to providing the information the IRS's automated system didn't have, cost basis, a corrected 1099, proof an item was already reported elsewhere, and get resolved without ever escalating to a full audit.\n\nFor balances that are correct and larger than you can pay at once, we set up installment agreements, and in eligible cases, evaluate whether an offer in compromise is realistic; that program has strict eligibility based on your actual ability to pay, and we won't oversell it if the numbers don't support it.\n\nWe take on cases whether we prepared the original return or not, though we always review the return first so we understand exactly what's being questioned before responding.",
    whoItsFor:
      "This is for anyone who received an IRS or state tax notice, is facing an audit, or fell behind on tax payments and is dealing with collection activity. It applies equally to individuals and businesses, and to notices about a return we prepared or one prepared somewhere else.",
    included: [
      { item: "Notice review and response strategy call", turnaround: "2 business days", startingPrice: 250 },
      { item: "Form 2848 Power of Attorney representation", turnaround: "Filed immediately upon engagement", startingPrice: 150 },
      { item: "Correspondence audit representation, per notice cycle", turnaround: "Ongoing until resolved", startingPrice: 600 },
      { item: "Installment agreement or payment plan setup", turnaround: "1 to 2 weeks", startingPrice: 350 },
    ],
    costOfSkipping:
      "CP2000 notices are computer-generated and often wrong in a specific, correctable way. We had a client come to us with a notice proposing $11,600 in additional tax on a stock sale that had been reported to the IRS without any cost basis attached, meaning the system treated the entire sale price as pure gain. Providing the actual basis brought the balance down to $2,400. Notices give you 30 days to respond; missing that window generally means the IRS's proposed number, the wrong one, becomes the assessed amount by default, and unwinding an assessment after the fact is a longer and harder process than answering the notice on time.",
    faqs: [
      {
        question: "Do I need a lawyer instead?",
        answer:
          "For most notices and audits, an enrolled agent or CPA with Form 2848 authority handles it directly. A tax attorney becomes relevant mainly for criminal exposure or Tax Court litigation, which is uncommon for the notices most individuals and small businesses receive.",
      },
      {
        question: "What is a CP2000 notice?",
        answer:
          "It's an automated notice comparing your return against the 1099s and W-2s the IRS has on file. A mismatch, real or not, triggers it. It's a proposal, not a final bill, and it's answerable with documentation.",
      },
      {
        question: "Can you negotiate what I owe?",
        answer:
          "For eligible cases, yes. Installment agreements are common and straightforward to set up. An offer in compromise is possible in narrower circumstances based on your actual ability to pay, and we'll tell you honestly if your numbers don't support one rather than charge you to try.",
      },
      {
        question: "How fast do I need to respond?",
        answer:
          "Most notices give 30 days. We move quickly once you send it to us, the response window is the main reason not to sit on a notice before reaching out.",
      },
    ],
    seoDescription:
      "IRS notice response and audit representation, including CP2000 notices, Power of Attorney filing, and installment agreements. From $250.",
  },
  {
    slug: "entity-formation",
    code: "5080",
    name: "Entity formation & structuring",
    summary: "The paperwork is the easy part. The decision underneath it isn't.",
    whatItIs:
      "Forming an entity is mostly paperwork: a filing with the Texas Secretary of State, an EIN application, maybe an S-corp election. The decision underneath it, sole proprietorship, single-member LLC, multi-member LLC, S-corp election, or C-corp, is what actually determines your liability exposure, your self-employment tax bill, and whether you can raise outside capital later.\n\nWe walk through that decision before filing anything: what liability protection you actually need, whether your projected profit clears the point where an S-corp election starts saving more in self-employment tax than it costs to administer, and whether you're building toward outside investment, which generally points toward a C-corp structure that most LLCs and S-corps can't easily convert into later without a taxable event.\n\nOnce the structure is decided, we file the LLC formation and EIN application, file Form 2553 for an S-corp election if that's the right call, and set up an initial chart of accounts so the business starts with clean books instead of a shoebox from day one. We coordinate with a business attorney for the operating agreement itself, since that's a legal document outside what we prepare, and can work alongside an attorney you already have or point you to one if you don't.",
    whoItsFor:
      "This is for people about to launch a new business, and for existing sole proprietors or single-member LLCs who've grown past the structure they started with. If you formed an LLC three years ago at $20,000 in side income and you're now netting $90,000, the structure that made sense then may not be the one that makes sense now, and that's exactly the review this includes.",
    included: [
      { item: "Entity selection consultation", turnaround: "1 week", startingPrice: 300 },
      { item: "LLC formation and EIN application", turnaround: "1 to 2 weeks, state-dependent", startingPrice: 450 },
      { item: "S-corp election (Form 2553)", turnaround: "Filed within 2 weeks of engagement", startingPrice: 200 },
      { item: "Initial chart of accounts and books setup", turnaround: "1 week after formation", startingPrice: 350 },
    ],
    costOfSkipping:
      "A sole proprietor netting $70,000 pays self-employment tax on essentially the entire amount, roughly $9,900 after the standard adjustment, before any income tax is calculated. Forming an LLC and making a timely S-corp election with a reasonable salary around $40,000 shifts the remaining profit to distributions that aren't subject to that tax. After accounting for the added cost of running payroll and filing a separate business return, that typically nets somewhere between $2,500 and $4,000 in real annual savings at this income level, savings that simply don't exist for a sole proprietorship that never revisits its structure.",
    faqs: [
      {
        question: "LLC or S-corp, what's the difference?",
        answer:
          "An LLC is a legal liability structure. An S-corp is a tax election layered on top of an LLC or corporation that changes how profit is taxed, not the underlying liability protection. Most businesses that elect S-corp status are still legally organized as an LLC.",
      },
      {
        question: "When does an S-corp election actually save money?",
        answer:
          "Generally once net profit clears somewhere around $40,000 to $50,000 a year. Below that, the cost of running payroll and filing a separate return tends to outweigh the self-employment tax savings.",
      },
      {
        question: "Do you draft the operating agreement?",
        answer:
          "No, that's a legal document a business attorney should draft. We handle the entity formation and tax elections and coordinate directly with your attorney, or can point you to one if you need it.",
      },
      {
        question: "How long does formation take?",
        answer:
          "LLC filings with the Texas Secretary of State typically clear in one to two weeks. An S-corp election has its own separate deadline once the entity exists, which we file for as soon as formation is complete.",
      },
    ],
    seoDescription:
      "Entity formation and structuring: LLC filing, EIN application, S-corp elections, and initial books setup. Consultations from $300.",
  },
  {
    slug: "sales-tax-compliance",
    code: "5090",
    name: "Sales tax & multi-state compliance",
    summary: "Nexus doesn't ask permission before it shows up in a new state.",
    whatItIs:
      "Since the 2018 South Dakota v. Wayfair decision, states can require a business to collect sales tax based purely on sales volume into that state, with no physical presence required. Most states set that threshold at $100,000 in sales, though the exact number and whether a transaction-count test also applies varies by state. Crossing it triggers a registration obligation whether or not you noticed it happened.\n\nWe run a nexus study across all fifty states to see where you've crossed a threshold, register in the states where you have, and determine taxability state by state, since what's taxable varies more than most people expect: SaaS is taxable in some states, exempt in others, and taxed differently depending on whether it's bundled with anything tangible. Once registered, we file on whatever cadence each state assigns, monthly, quarterly, or annually, based on your volume there.\n\nMarketplace facilitator laws complicate this further: if you sell through Amazon or a similar marketplace, the marketplace often collects and remits sales tax on those transactions for you, but that coverage typically doesn't extend to sales through your own website, so both channels need to be checked separately rather than assumed to be handled.\n\nFor businesses that find they've had unnoticed exposure in a state for a while, we can pursue a voluntary disclosure agreement, which generally caps the lookback period and waives most penalties in exchange for coming forward before the state finds you independently.",
    whoItsFor:
      "This is for e-commerce and SaaS businesses selling across state lines, or any business that's grown past a single state without checking whether its sales volume has crossed a nexus threshold somewhere new. It's a common blind spot specifically because nothing alerts you when it happens; the obligation exists the moment the threshold is crossed, not when a state notices.",
    included: [
      { item: "Nexus study, all 50 states", turnaround: "2 weeks", startingPrice: 650 },
      { item: "Sales tax registration, per state", turnaround: "1 to 2 weeks per state", startingPrice: 150 },
      { item: "Sales tax filing, per state per period", turnaround: "Filed by each state's deadline", startingPrice: 75 },
      { item: "Voluntary disclosure agreement, per state", turnaround: "4 to 8 weeks", startingPrice: 800 },
    ],
    costOfSkipping:
      "An e-commerce client came to us having crossed the $100,000 economic nexus threshold in a state fourteen months earlier without realizing it. Because sales tax hadn't been collected from customers during that period, the business owed the full uncollected liability itself, roughly $22,000, plus penalties and interest, out of its own margin rather than a customer's payment. We negotiated a voluntary disclosure agreement that capped the lookback period and waived most of the penalty; the alternative, waiting for the state to find the exposure through an audit, typically carries a longer lookback period and no penalty relief at all.",
    faqs: [
      {
        question: "What is economic nexus?",
        answer:
          "Since 2018, states can require sales tax collection based on your sales volume into that state, with no physical presence required. Cross the threshold, and the obligation exists whether or not you've registered yet.",
      },
      {
        question: "My marketplace collects sales tax for me, am I covered?",
        answer:
          "Partially. Marketplace facilitator laws cover sales made through that marketplace in most states, but sales through your own website are a separate channel that needs its own nexus and registration check.",
      },
      {
        question: "Do I owe sales tax if I never collected it from customers?",
        answer:
          "Generally yes. The liability follows the seller regardless of whether it was collected at the time of sale, which is exactly why catching nexus early matters more than it might seem.",
      },
      {
        question: "What about Texas franchise tax?",
        answer:
          "That's separate from sales tax entirely, an annual tax based on a business's margin rather than its sales, with a no-tax-due threshold we check every year as part of your business return.",
      },
    ],
    seoDescription:
      "Multi-state sales tax nexus studies, registration, and filing for e-commerce and SaaS businesses. Nexus studies from $650.",
  },
  {
    slug: "estate-and-trust",
    code: "5100",
    name: "Estate, trust & gift returns",
    summary: "The tax return nobody wants to need, prepared so the rest of it is one less thing.",
    whatItIs:
      "This covers Form 1041, the income tax return for an estate or trust that earns income, interest, dividends, or rental income, during administration; Form 706, the federal estate tax return, required only for estates above the federal exemption, which is high enough that most estates fall under it but may still want to file to elect portability of the unused exemption to a surviving spouse; and Form 709, the gift tax return required for gifts above the annual exclusion, which applies even when no actual gift tax is owed because it's how the IRS tracks lifetime exemption usage.\n\nExecutors and trustees carry personal responsibility for getting this right. A 1041 has to account for every dollar of income the estate or trust earned and issue K-1s to beneficiaries for their share of it, and it has to be filed and any tax paid before assets are fully distributed, not after. We handle the return itself and coordinate directly with the attorney handling probate or trust administration, since we prepare the tax filings and they handle the legal administration; we don't draft wills or trust documents ourselves.\n\nFor gift tax returns, the filing requirement often surprises people: a gift well within your lifetime exemption still needs to be reported on Form 709 if it exceeds the annual exclusion amount, because the return is what documents how much of that lifetime exemption has been used, not just whether tax is currently due.",
    whoItsFor:
      "This is for executors and personal representatives settling an estate, trustees of a trust that earns income during administration, and individuals making gifts large enough to require a gift tax return, whether or not any actual tax ends up being owed.",
    included: [
      { item: "Form 1041 fiduciary income tax return", turnaround: "3 weeks from complete records", startingPrice: 650 },
      { item: "Beneficiary K-1, each", turnaround: "Included with Form 1041", startingPrice: 75 },
      { item: "Form 706 federal estate tax return", turnaround: "6 to 8 weeks", startingPrice: 2500 },
      { item: "Form 709 gift tax return", turnaround: "2 weeks", startingPrice: 400 },
    ],
    costOfSkipping:
      "An executor who distributes estate assets before the estate's final tax return is filed and any tax paid can become personally liable for that unpaid tax, up to the value of what was distributed. We've seen an executor who distributed $180,000 in estate assets to beneficiaries before an unfiled $12,000 tax liability was discovered become personally responsible for covering it, simply because the return wasn't filed before the money moved. Filing the 1041 before final distribution isn't a formality; it's what protects the executor personally, separate from what it does for the estate.",
    faqs: [
      {
        question: "Does every estate need to file Form 706?",
        answer:
          "No, only estates above the federal exemption, which is high enough that most don't owe estate tax. Filing can still make sense below that threshold to elect portability, passing any unused exemption to a surviving spouse.",
      },
      {
        question: "What is a fiduciary return and who has to file it?",
        answer:
          "Form 1041 is the income tax return for an estate or trust that earned income, interest, dividends, rental income, during administration. The executor or trustee is responsible for filing it, separately from any estate tax return that might also be required.",
      },
      {
        question: "Do I need to file a gift tax return if I'm not paying gift tax?",
        answer:
          "Often yes. Gifts above the annual exclusion use up lifetime exemption even when no tax is owed, and Form 709 is how that usage gets documented for the IRS.",
      },
      {
        question: "Can you work with our estate attorney?",
        answer:
          "Yes. We handle the tax filings and coordinate directly with whoever is handling probate or trust administration. We don't draft wills or trust agreements ourselves.",
      },
    ],
    seoDescription:
      "Estate, trust, and gift tax returns: Form 1041, Form 706, and Form 709, prepared alongside your estate attorney. Fiduciary returns from $650.",
  },
];
