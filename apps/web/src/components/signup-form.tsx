"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { AuthForm, type AuthFormValues } from "@repo/ui";
import { useUser } from "@repo/context/src";
import * as process from "process";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";

export function Form({ onSubmit }: { onSubmit: () => void }) {
  const { setUser } = useUser();
  const [errorMessage, setErrorMessage] = useState("");

  const onSignup = async (values: AuthFormValues) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
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
      includeConfirmPassword
      submitButtonText="Sign Up"
      onSubmit={onSignup}
      errorMessage={errorMessage}
    />
  );
}

export function SignupForm() {
  const router = useRouter();
  const onSignup = async () => {
    router.push("/dashboard");
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
      <TypographyH1>Signup</TypographyH1>
      <Form onSubmit={onSignup} />
      or
      <Button asChild variant="link" size="sm">
        <Link href="/login">login</Link>
      </Button>
    </div>
  );
}
