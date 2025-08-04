"use client";

import { ExpenseItemProps } from "@repo/ui";
import { useMemo } from "react";
import {
  calculateThisMonthSpending,
  calculateTotalSpending,
  formatAmount,
} from "@repo/utils";
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
    () => calculateTotalSpending(expenses),
    [expenses],
  );
  const thisMonthSpending = useMemo(
    () => calculateThisMonthSpending(expenses),
    [expenses],
  );
  const totalSpendingFormatted = formatAmount(totalSpending);
  const thisMonthSpendingFormatted = formatAmount(thisMonthSpending);

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
