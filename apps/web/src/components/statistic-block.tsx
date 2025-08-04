"use client";

import { ExpenseItemProps } from "@repo/ui";
import { useMemo } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface StatisticBlockProps {
  expenses: ExpenseItemProps[];
}

export function StatisticBlock({ expenses }: StatisticBlockProps) {
  const totalSpending = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses],
  );
  const thisMonthSpending = useMemo(
    () =>
      expenses.reduce((sum, e) => {
        const currentMonth = new Date().getMonth();
        const expenseMonth = new Date(e.date).getMonth();
        if (currentMonth === expenseMonth) {
          return sum + e.amount;
        }
        return sum;
      }, 0),
    [expenses],
  );
  const getFormattedAmount = (amount) => amount.toFixed(2);
  const totalSpendingFormatted = getFormattedAmount(totalSpending);
  const thisMonthSpendingFormatted = getFormattedAmount(thisMonthSpending);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-2">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[350px]/card:text-3xl">
            ${totalSpendingFormatted}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>This Month</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[350px]/card:text-3xl">
            ${thisMonthSpendingFormatted}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
