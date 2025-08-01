import styles from "../../styles/index.module.css";
import { ExpenseList } from "@repo/ui";
import { ExpenseItem, ExpenseItemProps } from "@repo/ui/src";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
    method: "GET",
  });
  const { data } = await res.json();
  return data;
}

export default async function Dashboard() {
  const data = (await getData()) as ExpenseItemProps[];

  return (
    <div className={styles.container}>
      <h1>Your Smartest Money Habit Starts Here</h1>
      <p></p>
      {data.length && (
        <ExpenseList>
          {data.map((item, index) => (
            <ExpenseItem key={`${item.category}-${index}`} {...item} />
          ))}
        </ExpenseList>
      )}
    </div>
  );
}
