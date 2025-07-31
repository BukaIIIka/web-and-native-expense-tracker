"use client";

import styles from "../../styles/index.module.css";
import Link from "next/link";
import {SignupForm} from "@repo/ui/src";

export default function Login() {
  return (
    <div className={styles.container}>
        <h1>Signup</h1>
        <SignupForm onSubmit={() => alert("SignupFormSubmitted")} />
        <Link href="/login">to login</Link>
    </div>
  );
}
