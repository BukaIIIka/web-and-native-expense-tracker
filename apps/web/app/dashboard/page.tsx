import { ExpenseItemProps } from "@repo/ui/src";
import { DashboardClient, TypographyH1 } from "@/components";
import { StatisticBlock } from "@/components/statistic-block";

async function getExpenses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data as ExpenseItemProps[];
}

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/expense-categories`,
    {
      method: "GET",
    },
  );
  const { data } = await res.json();
  return data as string[];
}

export default async function Dashboard() {
  const expenses = await getExpenses();
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-5 justify-center px-4 md:px-6">
      <TypographyH1>Your Smartest Money Habit Starts Here</TypographyH1>
      <StatisticBlock expenses={expenses} />
      <DashboardClient expenses={expenses} categories={categories} />
    </div>
  );
}
