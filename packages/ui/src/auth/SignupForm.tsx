import React, { useState } from "react";
import { AuthForm, type AuthFormValues } from "./AuthForm";
import { useUser } from "@repo/context/src";

export interface SignupFormProps {
  onSubmit: () => void;
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const { setUser } = useUser();
  const [errorMessage, setErrorMessage] = useState("");

  const onSignup = async (values: AuthFormValues) => {
    const response = await fetch("/api/signup", {
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
