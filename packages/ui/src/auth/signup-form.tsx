import React from "react";
import { AuthForm, type AuthFormValues } from "./auth-form";
import { useUser } from "@repo/context/src";

export interface SignupFormProps {
  onSubmit: () => void;
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const { setUser } = useUser();
  const onSignup = (values: AuthFormValues) => {
    setUser({ email: values.email, name: values.email });
    onSubmit && onSubmit();
  };
  return (
    <AuthForm
      includeConfirmPassword
      submitButtonText="Sign Up"
      onSubmit={onSignup}
    />
  );
}

