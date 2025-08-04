import type { ExpenseItemProps } from "@repo/ui";

export function calculateTotalSpending(expenses: ExpenseItemProps[]): number {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function calculateThisMonthSpending(expenses: ExpenseItemProps[]): number {
  const currentMonth = new Date().getMonth();
  return expenses.reduce((sum, e) => {
    const expenseMonth = new Date(e.date).getMonth();
    return currentMonth === expenseMonth ? sum + e.amount : sum;
  }, 0);
}

export function formatAmount(amount: number): string {
  return amount.toFixed(2);
}
