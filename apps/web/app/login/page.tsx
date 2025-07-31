"use client";

import styles from "../../styles/index.module.css";
import Link from "next/link";
import { LoginForm } from "@repo/ui/src";
import { useUser } from "@repo/context/src";

export default function Login() {
  const { setUser } = useUser();

  return (
    <div className={styles.container}>
        <h1>Login</h1>
        <LoginForm
          onSubmit={(values) =>
            setUser({ email: values.email, name: values.email })
          }
        />
        <Link href="/signup">signup</Link>
    </div>
  );
}
