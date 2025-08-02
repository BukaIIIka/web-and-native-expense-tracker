"use client";

import { useState, useMemo } from "react";
import { Modal, View } from "react-native";
import {
  ExpenseList,
  ExpenseItem,
  StatisticBlock,
  ExpenseItemProps,
  AddExpenseItemForm,
  Button,
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
  const [expenseList, setExpenseList] = useState<ExpenseItemProps[]>(expenses);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");
  const [showForm, setShowForm] = useState(false);

  const handleAddExpense = (newExpense: ExpenseItemProps) => {
    setExpenseList((prev) => [...prev, newExpense]);
  };

  const totalSpending = useMemo(
    () => expenseList.reduce((sum, e) => sum + e.amount, 0),
    [expenseList]
  );

  const filteredExpenses = useMemo(() => {
    let result = expenseList;
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
  }, [expenseList, selectedCategory, sortBy]);

  return (
    <div>
      <StatisticBlock
        label="Total Spending"
        value={`$${totalSpending.toFixed(2)}`}
      />
      <div style={{ display: "flex", gap: "8px", marginBottom: 16 }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "date" | "amount")}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <ExportToCsvButton expenses={filteredExpenses} />
        <Button text="Add More" onClick={() => setShowForm(true)} />
      </div>
      <Modal
        transparent
        visible={showForm}
        animationType="slide"
        onRequestClose={() => setShowForm(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <AddExpenseItemForm
            onSubmit={(expense) => {
              handleAddExpense(expense);
              setShowForm(false);
            }}
          />
          <Button text="Close" onClick={() => setShowForm(false)} />
        </View>
      </Modal>
      <ExpenseList>
        {filteredExpenses.map((item, index) => (
          <ExpenseItem key={`${item.category}-${index}`} {...item} />
        ))}
      </ExpenseList>
    </div>
  );
}
