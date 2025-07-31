import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui";
import { useUser } from "@repo/context/src";
import { Link } from "expo-router";

export default function Native() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      {user && <Text style={styles.user}>Logged in as {user.email}</Text>}
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      <Link href="/login" style={styles.link}>login</Link>
      <StatusBar style="auto" />
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
  user: {
    marginBottom: 12,
  },
  link: {
    marginTop: 12,
  },
});
