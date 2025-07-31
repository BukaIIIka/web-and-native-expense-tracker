"use client";

import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
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

  function handleSubmit() {
    if (!email || !password || (includeConfirmPassword && !confirmPassword)) {
      Alert.alert("All fields are required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid email address");
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
});
