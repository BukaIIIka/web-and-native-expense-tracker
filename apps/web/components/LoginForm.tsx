"use client";

import Link from "next/link";
import { LoginForm as Form } from "@repo/ui";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const onLogin = async () => {
    await fetch("/api/login", { method: "POST" });
    router.push("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Login</h1>
      <Form onSubmit={onLogin} />
      or
      <Link href="/signup">signup</Link>
    </div>
  );
}
