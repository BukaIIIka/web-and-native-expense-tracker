"use client";

import styles from "../../styles/index.module.css";
import Link from "next/link";
import {LoginForm} from "@repo/ui/src";

export default function Login() {
  return (
    <div className={styles.container}>
        <h1>Login</h1>
        <LoginForm onSubmit={() => alert("FormSubmitted")} />
        <Link href="/signup">signup</Link>
    </div>
  );
}
