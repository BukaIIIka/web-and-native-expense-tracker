"use client";

import React from "react";
import { useUser } from "@repo/context/src";
import { AuthForm, type AuthFormValues } from "./auth-form";

export interface LoginFormProps {
  onSubmit?: () => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const { setUser } = useUser();
  const onLogin = (values: AuthFormValues) => {
    setUser({ email: values.email, name: values.email });
    onSubmit && onSubmit();
  };
  return <AuthForm submitButtonText="Login" onSubmit={onLogin} />;
}

