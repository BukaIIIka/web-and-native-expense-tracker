"use client";

import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "../button";
import { ExpenseItemProps } from "./ExpenseItem";

export interface addExpenseItemFormProps {
  categoryList: string[];
  onSubmit: (values: ExpenseItemProps) => void;
}

export function addExpenseItemForm({
  categoryList,
  onSubmit,
}: addExpenseItemFormProps) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit() {
    const values: ExpenseItemProps = { amount, category, description, date };
    onSubmit(values);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        secureTextEntry
      />
      <Button text="Add" onClick={handleSubmit} />
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
});
