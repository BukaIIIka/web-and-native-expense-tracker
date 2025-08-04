"use client";

import { useState, useMemo } from "react";
import {
  ExpenseList,
  ExpenseItem,
  StatisticBlock,
  ExpenseItemProps,
  Dropdown,
} from "@repo/ui";
import { View, StyleSheet } from "react-native";
import { ExportToCsvButton } from "@/components/export-to-csv-button";

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
    <View>
      <StatisticBlock
        label="Total Spending"
        value={`$${totalSpending.toFixed(2)}`}
      />
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
        <ExportToCsvButton expenses={filteredExpenses} />
      </View>
      <ExpenseList>
        {filteredExpenses.map((item, index) => (
          <ExpenseItem key={`${item.category}-${index}`} {...item} />
        ))}
      </ExpenseList>
    </View>
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
