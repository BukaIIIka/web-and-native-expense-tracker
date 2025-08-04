"use client";

import { Button } from "@repo/ui";
import { ExpenseItemProps } from "@repo/ui";

export interface ExportToCsvButtonProps {
  expenses: ExpenseItemProps[];
}

export function ExportToCsvButton({ expenses }: ExportToCsvButtonProps) {
  const exportCsv = () => {
    const header = ["amount", "category", "description", "date"].join(",");
    const rows = expenses
      .map((e) =>
        [e.amount.toString(), e.category, e.description, e.date].join(","),
      )
      .join("\n");
    const csvContent = [header, rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "expenses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return <Button text="Export CSV" onClick={exportCsv} />;
}
