"use client";

import { useUser } from "@repo/context/src";

import styles from "../styles/index.module.css";
import Link from "next/link";
import { Button } from "@repo/ui";

export default function Web() {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <h1>Take Control of Your Money, One Expense at a Time</h1>
      <p style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        {user ? (
          <Link href="/dashboard">
            <Button text={"See My Spending Insights"} />
          </Link>
        ) : (
          <Link href="/signup">
            <Button text={"Sign Up Free — No Card Needed"} />
          </Link>
        )}
      </p>
    </div>
  );
}
