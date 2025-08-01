import { StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { AuthForm, type AuthFormValues } from "@repo/ui/src";
import { useUser } from "@repo/context/src";

export default function LoginScreen() {
  const router = useRouter();
  const { setUser } = useUser();
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async (values: AuthFormValues) => {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
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
      <Text style={styles.header}>Login</Text>
      <AuthForm
        submitButtonText="Login"
        onSubmit={onLogin}
        errorMessage={errorMessage}
      />
      <Link href="/signup" style={styles.link}>
        signup
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
