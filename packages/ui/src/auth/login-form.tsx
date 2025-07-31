"use client";

import { useUser } from "@repo/context/src";
import { AuthForm } from "./auth-form";

export interface LoginFormProps {
  onSubmit?: () => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const { setUser } = useUser();
  const onLogin = (values) => {
    setUser({ email: values.email, name: values.email });
    onSubmit && onSubmit();
  }
  return <AuthForm submitButtonText="Login" onSubmit={onLogin} />;
}