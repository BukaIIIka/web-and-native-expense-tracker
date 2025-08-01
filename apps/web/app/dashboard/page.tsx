import styles from "../../styles/index.module.css";
import { ExpenseItemProps } from "@repo/ui/src";
import { DashboardClient } from "../../components";

async function getExpenses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data;
}

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/expense-categories`,
    {
      method: "GET",
    }
  );
  const { data } = await res.json();
  return data as string[];
}

export default async function Dashboard() {
  const expenses = (await getExpenses()) as ExpenseItemProps[];
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <h1>Your Smartest Money Habit Starts Here</h1>
      <p></p>
      {expenses.length ? (
        <DashboardClient expenses={expenses} categories={categories} />
      ) : null}
    </div>
  );
}
