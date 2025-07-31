import { StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { SignupForm } from "@repo/ui/src";

export default function SignupScreen() {
  const router = useRouter();

  const onSignup = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <SignupForm onSubmit={onSignup} />
      <Link href="/login" style={styles.link}>login</Link>
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
