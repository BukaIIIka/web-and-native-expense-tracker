import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { AuthForm, type AuthFormValues } from "@repo/ui/src";
import { useUser } from "@repo/context/src";
import { fetch } from "expo/fetch";
import process from "process";

export default function SignupScreen() {
  const router = useRouter();
  const { setUser } = useUser();
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSignup = async (values: AuthFormValues) => {
    const response = await fetch(`${process.env.API_URL}/signup`, {
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
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <AuthForm
        includeConfirmPassword
        submitButtonText="Sign Up"
        onSubmit={onSignup}
        errorMessage={errorMessage}
      />
      <Link href="/login" style={styles.link}>
        login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
  link: {
    marginTop: 12,
  },
});
