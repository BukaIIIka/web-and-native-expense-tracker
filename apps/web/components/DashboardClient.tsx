"use client";

import { useState, useMemo } from "react";
import {
  ExpenseList,
  ExpenseItem,
  StatisticBlock,
  Dropdown,
  type ExpenseItemProps,
} from "@repo/ui";
import { ExportToCsvButton } from "./ExportToCsvButton";

export interface DashboardClientProps {
  expenses: ExpenseItemProps[];
  categories: string[];
}

export function DashboardClient({
  expenses,
  categories,
}: DashboardClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");

  const totalSpending = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses],
  );

  const filteredExpenses = useMemo(() => {
    let result = expenses;
    if (selectedCategory !== "All") {
      result = result.filter((e) => e.category === selectedCategory);
    }
    result = [...result].sort((a, b) => {
      if (sortBy === "amount") {
        return a.amount - b.amount;
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return result;
  }, [expenses, selectedCategory, sortBy]);

  return (
    <div>
      <StatisticBlock
        label="Total Spending"
        value={`$${totalSpending.toFixed(2)}`}
      />
      <div style={{ display: "flex", gap: "8px", marginBottom: 16 }}>
        <Dropdown
          value={selectedCategory}
          onChange={setSelectedCategory}
          options={[
            { label: "All Categories", value: "All" },
            ...categories.map((cat) => ({ label: cat, value: cat })),
          ]}
        />
        <Dropdown
          value={sortBy}
          onChange={(v) => setSortBy(v as "date" | "amount")}
          options={[
            { label: "Date", value: "date" },
            { label: "Amount", value: "amount" },
          ]}
        />
        <ExportToCsvButton expenses={filteredExpenses} />
      </div>
      <ExpenseList>
        {filteredExpenses.map((item, index) => (
          <ExpenseItem key={`${item.category}-${index}`} {...item} />
        ))}
      </ExpenseList>
    </div>
  );
}
