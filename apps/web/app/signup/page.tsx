"use client";

import styles from "../../styles/index.module.css";
import Link from "next/link";
import { SignupForm } from "@repo/ui/src";
import { useUser } from "@repo/context/src";

export default function Login() {
  const { setUser } = useUser();

  return (
    <div className={styles.container}>
        <h1>Signup</h1>
        <SignupForm
          onSubmit={(values) =>
            setUser({ email: values.email, name: values.email })
          }
        />
        <Link href="/login">to login</Link>
    </div>
  );
}
