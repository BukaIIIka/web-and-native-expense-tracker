import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface StatisticBlockProps {
  label: string;
  value: string | number;
}

export function StatisticBlock({ label, value }: StatisticBlockProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
