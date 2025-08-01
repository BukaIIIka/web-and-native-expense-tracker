import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface ExpenseItemProps {
  amount: number;
  category: string;
  description: string;
  date: Date | string;
}

export function ExpenseItem({
  amount,
  category,
  description,
  date,
}: ExpenseItemProps) {
  const formattedDate = typeof date === "string" ? date : date.toDateString();
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{amount.toFixed(2)}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  amount: {
    fontWeight: "bold",
    marginRight: 8,
  },
  category: {
    flex: 1,
  },
  description: {
    flex: 2,
  },
  date: {
    marginLeft: 8,
  },
});
