"use client";

import { useState, useMemo } from "react";
import { ExpenseList, ExpenseItem, ExpenseItemProps, Dropdown } from "@repo/ui";
import { View, StyleSheet } from "react-native";
import { ExportToCsvButton } from "@/components/export-to-csv-button";
import { AddExpenseForm } from "@/components/add-expense-form";

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
    <div className="flex flex-col gap-5">
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
            onFormSubmit={() => console.log("Submitted")}
          />
          <ExportToCsvButton expenses={filteredExpenses} />
        </div>
      </View>
      <ExpenseList>
        {filteredExpenses.map((item, index) => (
          <ExpenseItem key={`${item.category}-${index}`} {...item} />
        ))}
      </ExpenseList>
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
