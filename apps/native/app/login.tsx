import { StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { LoginForm } from "@repo/ui/src";

export default function LoginScreen() {
  const router = useRouter();

  const onLogin = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <LoginForm onSubmit={onLogin} />
      <Link href="/signup" style={styles.link}>signup</Link>
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
