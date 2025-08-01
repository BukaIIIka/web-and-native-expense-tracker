import React from "react";
import { View, StyleSheet } from "react-native";

export interface ExpenseListProps {
  children: React.ReactNode;
}

export function ExpenseList({ children }: ExpenseListProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
