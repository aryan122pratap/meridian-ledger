"use client";

import { useMemo, useState } from "react";
import { Figure } from "@/components/ui/Figure";
import { Disclaimer } from "@/components/ui/Disclaimer";

export function BookkeepingEstimator() {
  const [transactions, setTransactions] = useState(100);
  const [accounts, setAccounts] = useState(2);
  const [payroll, setPayroll] = useState(false);
  const [monthsBehind, setMonthsBehind] = useState(0);

  const { low, high, catchUp } = useMemo(() => {
    let base = 300;
    base += Math.max(0, accounts - 2) * 40;
    if (transactions > 150) {
      base += Math.ceil((transactions - 150) / 100) * 50;
    }
    if (payroll) base += 100;

    return {
      low: Math.round((base * 0.9) / 25) * 25,
      high: Math.round((base * 1.1) / 25) * 25,
      catchUp: monthsBehind * 150,
    };
  }, [transactions, accounts, payroll, monthsBehind]);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-16 text-ink">Monthly transactions</span>
          <input
            type="range"
            min={20}
            max={500}
            step={10}
            value={transactions}
            onChange={(e) => setTransactions(Number(e.target.value))}
          />
          <span className="text-14 tabular-nums text-slate">{transactions} per month</span>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-16 text-ink">Bank and credit accounts</span>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={accounts}
            onChange={(e) => setAccounts(Number(e.target.value))}
          />
          <span className="text-14 tabular-nums text-slate">
            {accounts} account{accounts === 1 ? "" : "s"}
          </span>
        </label>

        <div className="flex flex-col gap-2">
          <span className="text-16 text-ink">Do you run payroll?</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPayroll(false)}
              aria-pressed={!payroll}
              className={`border px-4 py-2 text-14 ${
                !payroll ? "border-ink bg-ink text-paper" : "border-rule text-ink"
              }`}
            >
              No
            </button>
            <button
              type="button"
              onClick={() => setPayroll(true)}
              aria-pressed={payroll}
              className={`border px-4 py-2 text-14 ${
                payroll ? "border-ink bg-ink text-paper" : "border-rule text-ink"
              }`}
            >
              Yes
            </button>
          </div>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-16 text-ink">Months behind on your books</span>
          <input
            type="range"
            min={0}
            max={24}
            step={1}
            value={monthsBehind}
            onChange={(e) => setMonthsBehind(Number(e.target.value))}
          />
          <span className="text-14 tabular-nums text-slate">{monthsBehind} months</span>
        </label>
      </div>

      <div className="border border-rule bg-paper-raised p-6">
        <p className="text-14 text-slate">Estimated monthly bookkeeping</p>
        <p className="mt-2 font-display text-38 text-ink">
          <Figure emphasis prefix="$">
            {low.toLocaleString()}
          </Figure>
          {" "}&ndash;{" "}
          <Figure emphasis prefix="$">
            {high.toLocaleString()}
          </Figure>
        </p>
        {monthsBehind > 0 ? (
          <p className="mt-4 text-16 text-slate">
            Plus a one-time catch-up of roughly{" "}
            <Figure emphasis prefix="$">
              {catchUp.toLocaleString()}
            </Figure>{" "}
            to get {monthsBehind} month{monthsBehind === 1 ? "" : "s"} of books current.
          </p>
        ) : null}
      </div>

      <Disclaimer>
        This is an estimate based on typical engagements, not a quote. Actual pricing depends on
        the condition of your books and the complexity of your transactions.
      </Disclaimer>
    </div>
  );
}
