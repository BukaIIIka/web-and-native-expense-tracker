"use client";

import React, { useMemo, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { z } from "zod";
import { Button } from "../button";

export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthFormProps {
  includeConfirmPassword?: boolean;
  submitButtonText: string;
  onSubmit: (values: AuthFormValues) => void;
}

export function AuthForm({
  includeConfirmPassword = false,
  submitButtonText,
  onSubmit,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const schema = useMemo(
    () =>
      z
        .object({
          email: z
            .string()
            .min(1, "Email is required")
            .email("Invalid email address"),
          password: z.string().min(1, "Password is required"),
          confirmPassword: includeConfirmPassword
            ? z.string().min(1, "Confirm password is required")
            : z.string().optional(),
        })
        .superRefine((data, ctx) => {
          if (
            includeConfirmPassword &&
            data.confirmPassword !== data.password
          ) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Passwords do not match",
              path: ["confirmPassword"],
            });
          }
        }),
    [includeConfirmPassword],
  );

  function validate() {
    const result = schema.safeParse({ email, password, confirmPassword });
    if (!result.success) {
      const errors = result.error.formErrors.fieldErrors;
      setEmailError(errors.email?.[0] ?? "");
      setPasswordError(errors.password?.[0] ?? "");
      setConfirmPasswordError(errors.confirmPassword?.[0] ?? "");
      return false;
    }
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    return true;
  }

  function handleSubmit() {
    setSubmitAttempted(true);
    setTouched({ email: true, password: true, confirmPassword: true });
    if (!validate()) {
      return;
    }

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
        onChangeText={(text) => {
          setEmail(text);
          if (emailError) validate();
        }}
        onBlur={() => {
          setTouched((t) => ({ ...t, email: true }));
          validate();
        }}
        autoCapitalize="none"
      />
      {(touched.email || submitAttempted) && emailError ? (
        <Text style={styles.errorText}>{emailError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (passwordError) validate();
        }}
        onBlur={() => {
          setTouched((t) => ({ ...t, password: true }));
          validate();
        }}
        secureTextEntry
      />
      {(touched.password || submitAttempted) && passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      {includeConfirmPassword && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (confirmPasswordError) validate();
            }}
            onBlur={() => {
              setTouched((t) => ({ ...t, confirmPassword: true }));
              validate();
            }}
            secureTextEntry
          />
          {(touched.confirmPassword || submitAttempted) &&
          confirmPasswordError ? (
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          ) : null}
        </>
      )}
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
  errorText: {
    color: "#e53935",
    marginBottom: 8,
  },
});
