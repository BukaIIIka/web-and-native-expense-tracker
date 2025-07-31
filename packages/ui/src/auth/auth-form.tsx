"use client";

import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
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

  function handleSubmit() {
    let valid = true;
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
        valid = false;
      }
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (includeConfirmPassword) {
      if (!confirmPassword) {
        setConfirmPasswordError("Confirm password is required");
        valid = false;
      }
    }

    if (!valid) {
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
          if (emailError) setEmailError("");
        }}
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (passwordError) setPasswordError("");
        }}
        secureTextEntry
      />
      {passwordError ? (
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
              if (confirmPasswordError) setConfirmPasswordError("");
            }}
            secureTextEntry
          />
          {confirmPasswordError ? (
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
