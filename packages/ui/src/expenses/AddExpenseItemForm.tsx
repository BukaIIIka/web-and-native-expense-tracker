"use client";

import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "../button";
import type { ExpenseItemProps } from "./expense-item";

export interface AddExpenseItemFormProps {
  onSubmit?: (expense: ExpenseItemProps) => void;
}

export function AddExpenseItemForm({ onSubmit }: AddExpenseItemFormProps) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  function validate(values: ExpenseItemProps): string | null {
    if (!values.amount) return "Amount is required.";
    if (isNaN(values.amount) || values.amount <= 0)
      return "Amount must be a positive number.";
    if (!values.category.trim()) return "Category is required.";
    if (!values.description.trim()) return "Description is required.";
    if (!values.date) return "Date is required.";
    return null;
  }

  async function handleSubmit() {
    const expense: ExpenseItemProps = {
      amount: Number(amount),
      category,
      description,
      date,
    };
    const err = validate(expense);
    if (err) {
      setError(err);
      return;
    }
    setError("");
    await fetch("/expenses/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    });
    onSubmit?.(expense);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}
      <Button text="Add Expense" onClick={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 320,
    marginStart: "auto",
    marginEnd: "auto",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  error: {
    color: "#b12222",
    marginBottom: 8,
    textAlign: "center",
  },
});
