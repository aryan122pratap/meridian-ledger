import type { ReactNode } from "react";
import { Rule } from "./Rule";

export type TableColumn<T> = {
  key: keyof T;
  header: string;
  numeric?: boolean;
};

type TableProps<T extends Record<string, ReactNode>> = {
  columns: TableColumn<T>[];
  rows: T[];
  totalRule?: boolean;
  className?: string;
};

export function Table<T extends Record<string, ReactNode>>({
  columns,
  rows,
  totalRule = false,
  className,
}: TableProps<T>) {
  return (
    <div className={["overflow-x-auto", className].filter(Boolean).join(" ")}>
      <table className="w-full min-w-[420px] border-collapse text-left">
        <thead>
          <tr className="border-b border-rule">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className={[
                  "py-3 pr-6 text-14 font-medium text-slate last:pr-0",
                  column.numeric ? "text-right" : "text-left",
                ].join(" ")}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-rule last:border-b-0">
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={[
                    "py-3 pr-6 text-16 last:pr-0",
                    column.numeric ? "text-right tabular-nums" : "text-left",
                  ].join(" ")}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {totalRule ? (
          <tfoot>
            <tr>
              <td colSpan={columns.length} className="pt-2">
                <Rule variant="total" />
              </td>
            </tr>
          </tfoot>
        ) : null}
      </table>
    </div>
  );
}
