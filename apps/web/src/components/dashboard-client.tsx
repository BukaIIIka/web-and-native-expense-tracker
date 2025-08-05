"use client";

import { useState, useMemo } from "react";
import { ExpenseItemProps, Dropdown } from "@repo/ui";
import { ExpenseList } from "@/components/expense-list";
import { View, StyleSheet } from "react-native";
import { ExportToCsvButton } from "@/components/export-to-csv-button";
import { AddExpenseForm } from "@/components/add-expense-form";
import { StatisticBlock } from "@/components/statistic-block";

export interface DashboardClientProps {
  expenses: ExpenseItemProps[];
  categories: string[];
}

export function DashboardClient({
  expenses,
  categories,
}: DashboardClientProps) {
  const [expenseItems, setExpenseItems] =
    useState<ExpenseItemProps[]>(expenses);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");

  const filteredExpenses = useMemo(() => {
    let result = expenseItems;
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
  }, [expenseItems, selectedCategory, sortBy]);

  const handleFormSubmit = (expense: ExpenseItemProps) => {
    setExpenseItems((prev) => [...prev, expense]);
  };

  return (
    <div className="flex flex-col gap-5">
      <StatisticBlock expenses={expenseItems} />
      <View style={styles.controls}>
        <View style={styles.controls}>
          <Dropdown
            options={["All", ...categories]}
            selectedValue={selectedCategory}
            onValueChange={setSelectedCategory}
          />
          <Dropdown
            options={["date", "amount"]}
            selectedValue={sortBy}
            onValueChange={(v) => setSortBy(v as "date" | "amount")}
          />
        </View>
        <div className="flex gap-3">
          <AddExpenseForm
            categories={categories}
            onFormSubmit={handleFormSubmit}
          />
          <ExportToCsvButton expenses={filteredExpenses} />
        </div>
      </View>
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

const styles = StyleSheet.create({
  controls: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
    alignItems: "center",
    flexWrap: "wrap-reverse",
    justifyContent: "space-between",
  },
});
