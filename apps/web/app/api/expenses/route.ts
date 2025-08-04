import { NextResponse } from "next/server";
import { ExpenseItemProps } from "@repo/ui/src";

const dummyExpenses: ExpenseItemProps[] = [
  {
    amount: 120.0,
    category: "Health & Fitness",
    description: "Doctor visit",
    date: "2025-08-01",
  },
  {
    amount: 25.5,
    category: "Food & Groceries",
    description: "Weekly supermarket shopping",
    date: "2025-07-20",
  },
  {
    amount: 12.0,
    category: "Dining Out",
    description: "Lunch with friends",
    date: "2025-07-21",
  },
  {
    amount: 55.99,
    category: "Health & Fitness",
    description: "Monthly gym membership",
    date: "2025-07-01",
  },
  {
    amount: 1200.0,
    category: "Housing & Utilities",
    description: "July apartment rent",
    date: "2025-07-01",
  },
  {
    amount: 45.3,
    category: "Transportation",
    description: "Gas refill",
    date: "2025-07-18",
  },
  {
    amount: 29.99,
    category: "Entertainment",
    description: "Streaming subscription",
    date: "2025-07-15",
  },
  {
    amount: 180.75,
    category: "Shopping",
    description: "Clothes shopping",
    date: "2025-07-10",
  },
  {
    amount: 450.0,
    category: "Travel",
    description: "Weekend getaway flights",
    date: "2025-07-05",
  },
  {
    amount: 80.0,
    category: "Education",
    description: "Online course fee",
    date: "2025-07-08",
  },
  {
    amount: 15.99,
    category: "Pets",
    description: "Dog food and treats",
    date: "2025-07-17",
  },
];
export async function GET(request: Request) {
  return NextResponse.json({ success: true, data: dummyExpenses });
}
