import { NextResponse } from "next/server";

const expenseCategories: string[] = [
  "Food & Groceries",
  "Dining Out",
  "Health & Fitness",
  "Housing & Utilities",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Travel",
  "Education",
  "Subscriptions & Services",
  "Insurance",
  "Debt Payments",
  "Savings & Investments",
  "Gifts & Donations",
  "Childcare & Family",
  "Personal Care",
  "Pets",
  "Taxes & Fees",
  "Emergency & Unexpected",
  "Other",
];

export async function GET(request: Request) {
  return NextResponse.json({ success: true, data: expenseCategories });
}
