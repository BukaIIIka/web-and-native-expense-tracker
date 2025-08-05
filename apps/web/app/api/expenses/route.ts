import { NextResponse } from "next/server";
import { ExpenseItemProps } from "@repo/ui";

const dummyExpenses: ExpenseItemProps[] = [
  {
    amount: 120.0,
    category: "Health & Fitness",
    description: "Doctor visit",
    date: "8/1/2025",
  },
  {
    amount: 25.5,
    category: "Food & Groceries",
    description: "Weekly supermarket shopping",
    date: "7/20/2025",
  },
  {
    amount: 12.0,
    category: "Dining Out",
    description: "Lunch with friends",
    date: "7/21/2025",
  },
  {
    amount: 55.99,
    category: "Health & Fitness",
    description: "Monthly gym membership",
    date: "7/1/2025",
  },
  {
    amount: 1200.0,
    category: "Housing & Utilities",
    description: "July apartment rent",
    date: "7/1/2025",
  },
  {
    amount: 45.3,
    category: "Transportation",
    description: "Gas refill",
    date: "7/18/2025",
  },
  {
    amount: 29.99,
    category: "Entertainment",
    description: "Streaming subscription",
    date: "7/15/2025",
  },
  {
    amount: 180.75,
    category: "Shopping",
    description: "Clothes shopping",
    date: "7/10/2025",
  },
  {
    amount: 450.0,
    category: "Travel",
    description: "Weekend getaway flights",
    date: "7/5/2025",
  },
  {
    amount: 80.0,
    category: "Education",
    description: "Online course fee",
    date: "7/8/2025",
  },
  {
    amount: 15.99,
    category: "Pets",
    description: "Dog food and treats",
    date: "7/17/2025",
  },
];
export async function GET(request: Request) {
  return NextResponse.json({ success: true, data: dummyExpenses });
}
