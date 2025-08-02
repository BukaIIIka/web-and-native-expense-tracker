"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser } from "@repo/context/src";
import { AuthForm, type AuthFormValues } from "@repo/ui";
import * as process from "process";

export function Form({ onSubmit }: { onSubmit: () => void }) {
  const { setUser } = useUser();
  const [errorMessage, setErrorMessage] = useState("");
  const onLogin = async (values: AuthFormValues) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(
        data?.error ||
          "Something went wrong. Please try again in a few minutes.",
      );
      return;
    }

    setUser({ email: values.email, name: values.email });
    onSubmit && onSubmit();
  };
  return (
    <AuthForm
      submitButtonText="Login"
      onSubmit={onLogin}
      errorMessage={errorMessage}
    />
  );
}

export function LoginForm() {
  const router = useRouter();
  const onLogin = async () => {
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
