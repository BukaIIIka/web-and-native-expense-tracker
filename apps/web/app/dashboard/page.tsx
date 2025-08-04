import { ExpenseItemProps } from "@repo/ui/src";
import { DashboardClient, TypographyH1 } from "@/components";
import { StatisticBlock } from "@/components/statistic-block";

async function getExpenses() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
      method: "GET",
    });
    const { data } = await res.json();
    return data as ExpenseItemProps[];
  } catch (error) {
    console.error(
      "getExpenses(): failed to fetch expense list. Error details: ",
      error,
    );
    return [];
  }
}

async function getCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/expense-categories`,
      {
        method: "GET",
      },
    );
    const { data } = await res.json();
    return data as string[];
  } catch (error) {
    console.error(
      "getCategories(): failed to fetch expense categories. Error details: ",
      error,
    );
    return [];
  }
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
