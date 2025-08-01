"use client";

import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "../button";

export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthFormProps {
  includeConfirmPassword?: boolean;
  errorMessage?: string;
  submitButtonText: string;
  onSubmit: (values: AuthFormValues) => void;
}

export function AuthForm({
  includeConfirmPassword = false,
  errorMessage = "",
  submitButtonText,
  onSubmit,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(errorMessage as string | "");

  useEffect(() => {
    errorMessage?.length && setError(errorMessage);
  }, [errorMessage]);

  function validateForm({
    email,
    password,
    confirmPassword,
  }: AuthFormValues): string | null {
    // 1. Email
    if (!email.trim()) return "Email is required.";
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) return "Enter a valid email address.";

    // 2. Password
    if (password.length < 6)
      return "Password must be at least 6 characters long.";

    // 3. Confirm password (signup only)
    if (includeConfirmPassword && password !== confirmPassword)
      return "Passwords do not match.";

    return null;
  }

  function handleSubmit() {
    const err = validateForm({
      email,
      password,
      confirmPassword,
    });

    if (err) {
      setError(err);
      return;
    }
    setError("");
    const values: AuthFormValues = { email, password };
    if (includeConfirmPassword) {
      values.confirmPassword = confirmPassword;
    }
    onSubmit(values);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {includeConfirmPassword && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      )}
      {errorMessage?.length > 0 && <Text style={styles.error}>{error}</Text>}
      <Button text={submitButtonText} onClick={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 320,
    marginStart: "auto",
    marginEnd: "auto",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  error: {
    color: "#b12222",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 8,
  },
});
