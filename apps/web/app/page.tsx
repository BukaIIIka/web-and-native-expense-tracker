"use client";

import { Button } from "@repo/ui";
import { useUser } from "@repo/context/src";

import styles from "../styles/index.module.css";

export default function Web() {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      {user && <p>Logged in as {user.email}</p>}
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
