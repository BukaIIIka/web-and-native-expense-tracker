"use client";

import React, { useState } from "react";
import { useUser } from "@repo/context/src";
import { AuthForm, type AuthFormValues } from "./AuthForm";

export interface LoginFormProps {
  onSubmit?: () => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const { setUser } = useUser();
  const [errorMessage, setErrorMessage] = useState("");
  const onLogin = async (values: AuthFormValues) => {
    const response = await fetch("/api/login", {
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
